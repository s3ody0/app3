'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { CategoryType } from '@/types/product.type';
import Image from 'next/image';
export default function CategorySwiper({allCategories}:{allCategories:CategoryType[]}) {
  return <>
   <Swiper 
     slidesPerView={2}
     autoplay={true} 
     loop
     breakpoints={{
       640: {
         slidesPerView: 3,
         spaceBetween: 10,
       },
       768: {
         slidesPerView: 4,
         spaceBetween: 15,
       },
       1024: {
         slidesPerView: 5,
         spaceBetween: 20,
       },
       1280: {
         slidesPerView: 7,
         spaceBetween: 20,
       },
     }}
     spaceBetween={10}
   >
         {allCategories.map((category)=> <SwiperSlide key={category._id}> 
           <div className='space-y-2'>
             <Image width={200} height={200} src={category.image} alt={category.name} className='w-full object-cover h-[150px] md:h-[200px] lg:h-[250px] rounded-lg'/>
             <h3 className='text-sm md:text-base text-center font-semibold'>{category.name}</h3>
           </div>
         </SwiperSlide>)}
           </Swiper>
  </>
}
