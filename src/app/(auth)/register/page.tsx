/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RegisterSchema, Registertype } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Register() {
  const [isPassword, setIsPassword] = useState(true)
  const router = useRouter()
const myForm = useForm<Registertype>({
    defaultValues:{
      name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:""
    },
    resolver : zodResolver(RegisterSchema),
    mode:'all'
  }

  
)
async function handleRegister(values:Registertype){
  const loadingToast = toast.loading('Loading...')
  try {
    const options = {
    url : 'https://ecommerce.routemisr.com/api/v1/auth/signup',
    method : 'POST',
    data : values
  }
const {data} = await axios.request(options)
toast.success('account created successfully')
router.push('/login')
  } catch (error:any) {
    toast.error(error.response.data.message);
    
  }finally{
    toast.dismiss(loadingToast)
  }
  }

  return <>
  <div className='w-full lg:w-1/2 mx-auto my-10 space-y-5 px-4'>
  <h1 className='font-semibold text-2xl md:text-3xl'>Register Now:</h1>

  <Form {...myForm}>
<form onSubmit={myForm.handleSubmit(handleRegister)} className='space-y-4'>

  <FormField

control={myForm.control}
name="name"
render={({field})=>(
<FormItem>
<FormControl>
  <Input {...field} type="text" placeholder="Enter your name" />
  
</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>

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
name="password"
render={({field})=>(
<FormItem>
<FormControl>
   <div className='relative'>
    <Input {...field} type={isPassword ? 'password' : 'text'} placeholder="Enter your password" />
    <Eye onClick={()=>{setIsPassword(false)}} className={`absolute top-1.5 end-2 ${isPassword ? 'block' : 'hidden'}`} />
      <EyeOff onClick={()=>{setIsPassword(true)}} className={`absolute top-2 end-2 ${isPassword ? 'hidden' : 'block'}`}/>
  </div>

</FormControl>
<FormDescription/>
<FormMessage/>
</FormItem>
)}
/>


<FormField

control={myForm.control}
name="rePassword"
render={({field})=>(
<FormItem>
<FormControl>
  <div className='relative'>
    <Input {...field} type={isPassword ? 'password' : 'text'} placeholder="Confirm your password" />
    <Eye onClick={()=>{setIsPassword(false)}} className={`absolute top-1.5 end-2 ${isPassword ? 'block' : 'hidden'}`} />
      <EyeOff onClick={()=>{setIsPassword(true)}} className={`absolute top-2 end-2 ${isPassword ? 'hidden' : 'block'}`}/>
  </div>
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
<div className='flex flex-col sm:flex-row justify-between gap-4'>
  <Button className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>Register</Button>
  <h3 className='text-sm sm:text-base'>Already have an account ? <Link className='text-blue-600 underline font-semibold' href={'/login'}>Login now</Link></h3>
</div>

</form>
  </Form>
    </div>
  </>
}
