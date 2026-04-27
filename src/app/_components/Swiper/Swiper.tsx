'use client'
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductType } from '@/types/product.type';
import Product from '../Product/Product';

export default function SwiperProduct({relatedProducts}:{relatedProducts:ProductType[]}) {
  return <>
    <Swiper 
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={20}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {relatedProducts.map((product)=> (
        <SwiperSlide className='pb-10' key={product._id}>
          <Product product={product}/>
        </SwiperSlide>
      ))}
    </Swiper>
  </>
}