'use client'
import { makeCashPayment, makeOnlinePayment } from '@/api/checkout.api'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cartContext } from '@/context/cart.context'
import { checkOutSchema, CheckOuttype } from '@/schema/checkout.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Checkout() {
  const context = useContext(cartContext)
  const { id }:{id:string} = useParams()
  const [paymentFlag, setPaymentflag] = useState('')
  
    const myForm = useForm<CheckOuttype>({
        defaultValues: {
            details:'',
            phone:'',
            city:''
        },

        resolver:zodResolver(checkOutSchema),
        mode:'all'
    })


    async function handleCheckout(values:CheckOuttype){

        if (paymentFlag == 'online'){
const data = await makeOnlinePayment(id,'http://localhost:3000/',values)
if (data.status == 'success'){
  toast.success('Redirecting to payment gateway...')
  window.location.href = data.session.url

        }
        else {
  const cashData = await makeCashPayment(id,values)
  if (cashData.status == 'success'){
    toast.success('Order placed successfully, please prepare cash on delivery')
    context?.handleCart()
  }

        }
       
     

}
    }
  return <>
  
   <div className='w-full lg:w-1/2 mx-auto my-10 space-y-5 px-4'>
  <h1 className='font-semibold text-2xl md:text-3xl'>Check out:</h1>

  <Form {...myForm}>
<form onSubmit={myForm.handleSubmit(handleCheckout)} className='space-y-4'>

 

<FormField

control={myForm.control}
name="details"
render={({field})=>(
<FormItem>
<FormControl>
  <Input {...field} type="text" placeholder="Enter details" />
</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>












<FormField

control={myForm.control}
name="phone"
render={({field})=>(
<FormItem>
<FormControl>
  <Input {...field} type="text" placeholder="Enter your phone number" />
</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>











<FormField

control={myForm.control}
name="city"
render={({field})=>(
<FormItem>
<FormControl>
  <Input {...field} type="text" placeholder="Enter your city" />
</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>



<div className='flex flex-col sm:flex-row gap-4'>

  <Button onClick={()=>{setPaymentflag('online')}} className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>make online payment</Button>
  <Button onClick={()=>{setPaymentflag('cash')}} className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>make cash payment</Button>
</div>


</form>
  </Form>
    </div>
  </>
}
