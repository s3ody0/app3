/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { addProductToCart } from '@/api/Product/cart.api'
import { Button } from '@/components/ui/button'
import { cartContext } from '@/context/cart.context'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'sonner'

export default function MyButton({id}:{id:string}) {
  const context = useContext(cartContext)

const [isLoading , setIsLoading] = useState(false)
const router = useRouter()
    async function handleAddToCart(){
      setIsLoading(true)
        const Load = toast.loading('Loading...')
      try {
          
      const data = await addProductToCart(id)
      if(data.status == 'success'){
        toast.success(data.message)
        context?.handleCart()
        
      }
      } catch (error) {
        toast.error('Login first to add to cart')
        router.push('/login')
      }toast.dismiss(Load)
      setIsLoading(false)

    }
  return <>
  
    <Button disabled={isLoading} onClick={handleAddToCart}  className='w-full bg-green-400 transition-all cursor-pointer hover:bg-white hover:border-2 hover:border-green-400 hover:text-green-400'>Add to cart</Button>

  </>
}
