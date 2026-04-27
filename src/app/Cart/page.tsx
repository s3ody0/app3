/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { clearCart } from '@/api/Product/cart.api'
import { ShoppingCart} from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import CartItem from '../_components/CartItem/CartItem'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import Link from 'next/link'
import { cartContext } from '@/context/cart.context'
import { CartType } from '@/types/cart.type'



export default function Cart() {
const context = useContext(cartContext)
const [cartData , setCartData] = useState<CartType| undefined>(undefined)

  
async function handleGetProductsFromCart(){
  const data = await context?.handleCart()
  setCartData(data)
}
  useEffect(()=>{
   handleGetProductsFromCart()
  },[])

async function handleClearCart(){
 const data =  await clearCart()
 if (data.message == 'success'){
context?.setAllProducts([])
  toast.success('Cart clreared successfully')
 }
 
}
if(!context?.allProducts){
  return <>
 
  <div className='h-screen flex justify-center items-center'>
    
    <i className='fa-solid fa-spinner fa-spin text-4xl text-green-500'></i>
    </div> 
  </>
}

  return <>
  <div className="container w-full mx-auto px-4">
    <div className="bg-slate-200 p-4 md:p-12 my-6 md:my-12">
     <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
      <div>
         <h2 className='flex text-xl md:text-3xl gap-3 items-center'><ShoppingCart/>  Shopping Cart</h2>
      <h3 className='text-green-500 my-3 text-base md:text-lg'>total cart price : {context?.totalPrice} EGP</h3>
      </div>
      <Button onClick={handleClearCart} className='bg-red-500 text-white w-full md:w-auto'>Clear Cart</Button>
     </div>

{context?.allProducts?.length == 0 ? <>

<div className="flex flex-col md:flex-row justify-center py-3 gap-2 items-center text-center"><h2 className='text-xl md:text-3xl'>Cart is empty, go add some items </h2><Link href={'/Products'} className='text-white bg-green-400 p-2 rounded-lg text-lg md:text-3xl'> Shop now </Link>
</div>
</>

:
context?.allProducts?.map((product)=> <CartItem key={product.product.id} product={product} /> )}

<div className="flex justify-end mt-6">

  
<Button className='my-4 bg-green-500 w-full md:w-auto'><Link href={`/checkOut/${cartData?.cartId}`}>Check Out</Link></Button>
    

</div>





    </div>
  </div>
  </>
}
