'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { LoginSchema, Logintype } from '@/schema/auth.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import {signIn, SignInResponse} from 'next-auth/react'




export default function Login() {
  const [isPassword, setIsPassword] = useState(true)
const myForm = useForm<Logintype>({
    defaultValues:{
    email:"",
    password:"",
    },
    resolver : zodResolver(LoginSchema),
    mode:'all'
  }

  
)
async function handleLogin(values:Logintype){
  const isLoading = toast.loading('Loading...')
 const response:SignInResponse|undefined = await signIn('credentials',{
  email:values.email,
  password:values.password,
  redirect:false,
 })
 if(response?.ok){
  toast.success('Logged in successfully')
  window.location.href='/'
 }else{
  toast.error(response?.error)
 }toast.dismiss(isLoading)
  }

  return <>
  <div className='w-full lg:w-1/2 mx-auto my-10 space-y-5 px-4'>
  <h1 className='font-semibold text-2xl md:text-3xl'>Login:</h1>

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



<div className='flex flex-col sm:flex-row justify-between gap-4'>

  <Button className='bg-green-500 hover:bg-green-700 transition-all w-full sm:w-auto'>Login</Button>
  <div className='flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base'>
    <h3>Do not have an account ? <Link className='text-blue-600 underline font-semibold' href={'/register'}>Register now</Link></h3>
    <Link className='text-blue-600 underline font-semibold' href={'/forgetPassword'}>Forget password ?</Link>
  </div>
</div>


</form>
  </Form>
    </div>
  </>
}
