'use client'
import React from 'react'
import Image from 'next/image'
import image1 from '../../../../public/images/slider-image-3.jpeg'
import image2 from '../../../../public/images/slider-image-1.jpeg'
import image3 from '../../../../public/images/slider-image-2.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

export default function HomeSlider() {
  return (
    <>
      <div className='grid grid-cols-12 gap-4'>
        <div className='col-span-12 lg:col-span-8'>
           <Swiper slidesPerView={1} autoplay={true} loop className='rounded-lg overflow-hidden'>
            <SwiperSlide><Image className='h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover' src={image1} alt='Slider image 3'/> </SwiperSlide>
            <SwiperSlide><Image className='h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover' src={image2} alt='Slider image 1' /></SwiperSlide>
            <SwiperSlide><Image className='h-[300px] md:h-[400px] lg:h-[500px] w-full object-cover' src={image3} alt='Slider image 2' /></SwiperSlide>
           </Swiper>
          
        </div>
       
        <div className="col-span-12 lg:col-span-4 space-y-4 hidden lg:block">
          <Image src={image2} alt='Slider image 1' height={250} className='w-full h-[240px] object-cover rounded-lg' />
          <Image src={image1} alt='Slider image 2' height={250} className='w-full h-[240px] object-cover rounded-lg' />
        </div>
      </div>
    </>
  )
}
