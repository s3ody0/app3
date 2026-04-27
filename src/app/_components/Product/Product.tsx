import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye, Heart, ShoppingCart } from 'lucide-react'
import { ProductType } from '@/types/product.type'
import Link from 'next/link'
import Image from 'next/image'
import MyButton from '../MyButton/MyButton'
export default function Product({product}:{product:ProductType}) {
  return <>
  
  <Card className='group p-2 h-full flex flex-col' key={product._id}>
  <CardHeader className='pb-2'>
    <CardTitle className='line-clamp-1 text-sm md:text-base'>{product.title}</CardTitle>
    <CardDescription className='line-clamp-1 text-xs md:text-sm'>{product.description}</CardDescription>
   
  </CardHeader>
  <CardContent className='relative flex-1' >
   <Image width={450} height={450} src={product.imageCover} alt={product.title} className='w-full h-auto object-cover' />
   <div className=" flex justify-center items-center gap-2 md:gap-3 layer opacity-0 absolute inset-0 bg-black/40 group-hover:opacity-100 group-hover:transition-all rounded">
   <ShoppingCart className='text-white w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full p-1 cursor-pointer hover:text-green-400 hover:bg-white transition-colors' />
  <Link href={`/Products/${product._id}`}> <Eye className='text-white w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full p-1 cursor-pointer hover:text-green-400 hover:bg-white transition-colors' /></Link>
  <Heart className='text-white w-6 h-6 md:w-8 md:h-8 bg-green-400 rounded-full p-1 cursor-pointer hover:text-green-400 hover:bg-white transition-colors' />
   </div>
  </CardContent>
  <h6 className='container ps-3 md:ps-6 text-green-400 font-semibold text-xs md:text-sm'>{product.category.name}</h6>
  <CardFooter className='pt-2'>
    <div className='flex justify-between w-full text-sm md:text-base'>
      <div className='font-semibold'>{product.price} EGP</div>
      <div className='flex items-center gap-1'>{product.ratingsAverage} <i className='fa-solid fa-star text-yellow-300'></i> </div>
    </div>
  </CardFooter>
  <div className='px-3 md:px-6 pb-2'>
    <MyButton id={product._id}/>
  </div>
</Card>
  </>
}
