import { CardFooter } from '@/components/ui/card'
import { ProductType } from '@/types/product.type'
import React from 'react'
import MyButton from '../MyButton/MyButton'
import Image from 'next/image'

export default function ProductDetails({productDetails}:{productDetails:ProductType}) {
  return <>
    <div className="col-span-12 lg:col-span-4">
            <Image width={500} height={500} className='w-full h-auto object-cover rounded-lg' src={productDetails.imageCover} alt={productDetails.title}/>
        </div>
        <div className="p-4 lg:p-0 col-span-12 lg:col-span-8 space-y-3">
            <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold'>{productDetails.title}</h2>
            <p className='text-sm md:text-base text-gray-600'>{productDetails.description}</p>
            <h3 className='text-base md:text-lg text-green-500 font-semibold'>{productDetails.category.name}</h3>
             <CardFooter className='px-0'>
    <div className='flex justify-between w-full text-base md:text-lg'>
      <div className='font-semibold'>{productDetails.price} EGP</div>
      <div className='flex items-center gap-1'>{productDetails.ratingsAverage} <i className='fa-solid fa-star text-yellow-300'></i> </div>
    </div>
  </CardFooter>
  <MyButton id={productDetails._id}/>
        </div>
  </>
}
