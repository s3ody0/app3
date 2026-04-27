/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ResetSchema, Resettype } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function ResetPassword() {
  const [isPassword, setIsPassword] = useState(true)
  const router = useRouter()
const myForm = useForm<Resettype>({
    defaultValues:{
    email:"",
    newPassword:"",
    },
    resolver : zodResolver(ResetSchema),
    mode:'all'
  }

  
)
async function handleLogin(values:Resettype){
  const loadingToast = toast.loading('Loading...')
  try {
    const options = {
    url : 'https://ecommerce.routemisr.com/api/v1/auth/resetPassword',
    method : 'PUT',
    data : values
  }
await axios.request(options)
toast.success('Password reset successfully')
router.push('/login')
  } catch (error:any) {
    toast.error(error.response.data.message);
    
  }finally{
    toast.dismiss(loadingToast)
  }
  }

  return <>
  <div className='w-full lg:w-1/2 mx-auto my-10 space-y-5 px-4'>
  <h1 className='font-semibold text-2xl md:text-3xl'>Reset your password :</h1>

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


<FormField

control={myForm.control}
name="newPassword"
render={({field})=>(
<FormItem>
<FormControl>
   <div className='relative'>
    <Input {...field} type={isPassword ? 'password' : 'text'} placeholder="Enter your new password" />
    <Eye onClick={()=>{setIsPassword(false)}} className={`absolute top-1.5 end-2 ${isPassword ? 'block' : 'hidden'}`} />
      <EyeOff onClick={()=>{setIsPassword(true)}} className={`absolute top-2 end-2 ${isPassword ? 'hidden' : 'block'}`}/>
  </div>

</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>



<div className='flex justify-start'>

  <Button className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>Reset</Button>

</div>


</form>
  </Form>
    </div>
  </>
}
