
'use client'
import { removeProductsFromCart, updateCartCount } from '@/api/Product/cart.api'
import { cartContext } from '@/context/cart.context'
import { CartProductType } from '@/types/cart.type'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { toast } from 'sonner'

export default function CartItem({product}:{product:CartProductType}) {
  const context = useContext(cartContext)
  async function handleRemoveProductFromCart(){
   const data = await removeProductsFromCart(product.product.id)
   console.log(data);
   if(data.status == 'success'){
    context?.handleCart()
   }
  }

  async function handleUpdateCount(newCount:number){
const data = await updateCartCount(product.product.id,newCount)
 if(data.status == 'success'){

toast.success('product updated successfully')
context?.handleCart()

 }
  }



  return <>
  
   <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-b-slate-400 py-4 md:py-8 gap-4'>
        <div className='flex gap-3 flex-1'>
          <Image width={150} height={200} src={product.product.imageCover} alt='product' className='w-20 h-20 md:w-[150px] md:h-[200px] object-cover rounded'/>
          <div className='space-y-2 md:space-y-3 flex-1'>
            <h3 className='text-sm md:text-base font-semibold'>{product.product.title}</h3>
          <h4 className='text-sm md:text-base'>{product.price} x {product.count} = {product.price*product.count} EGP</h4>
          <button className='text-green-500 cursor-pointer flex gap-2 items-center text-sm md:text-base hover:text-green-700 transition-colors' onClick={handleRemoveProductFromCart}>remove <Trash size={16}/></button>
          </div>
        </div>
        <div className='flex gap-3 items-center self-end sm:self-auto'>
          <button onClick={()=> handleUpdateCount(product.count+1)} className='bg-slate-400 text-white rounded-lg border-3 border-green-500 w-8 h-8 md:w-10 md:h-10 text-xl md:text-2xl hover:bg-green-500 transition-colors'>+</button>
          <h4 className='text-xl md:text-3xl'>{product.count}</h4>
          <button onClick={()=> handleUpdateCount(product.count-1)} className='bg-slate-400 text-white rounded-lg border-3 border-green-500 w-8 h-8 md:w-10 md:h-10 text-xl md:text-2xl hover:bg-green-500 transition-colors'>-</button>
        </div>
      </div>
  </>
}
