/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ForgetSchema, Forgettype } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ForgetPassword() {
  const router = useRouter()
const myForm = useForm<Forgettype>({
    defaultValues:{
    email:"",
    },
    resolver : zodResolver(ForgetSchema),
    mode:'all'
  }

  
)
async function handleLogin(values:Forgettype){
  const loadingToast = toast.loading('Loading...')
  try {
    const options = {
    url : 'https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',
    method : 'POST',
    data : values
  }
const {data} = await axios.request(options)
toast.success(data.message)
router.push('/verifyCode')
  } catch (error:any) {
    toast.error(error.response.data.message);
    
  }finally{
    toast.dismiss(loadingToast)
  }
  }

  return <>
  <div className='w-full lg:w-1/2 mx-auto my-10 space-y-5 px-4'>
  <h1 className='font-semibold text-2xl md:text-3xl'>Forget your password:</h1>

  <Form {...myForm}>
<form onSubmit={myForm.handleSubmit(handleLogin)} className='space-y-4'>

 

<FormField

control={myForm.control}
name="email"
render={({field})=>(
<FormItem>
<FormControl>
  <Input {...field} type="email" placeholder="Enter your email" />
</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>






<div className='flex justify-start'>

  <Button className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>forget</Button>
</div>


</form>
  </Form>
    </div>
  </>
}
