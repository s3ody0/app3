
import { getAllCategories } from '../../../api/Product/category.api'
import { CategoryType } from '@/types/product.type'
import React from 'react'
import CategorySwiper from '../CategorySwiper/CategorySwiper'


export default async function CategorySlider() {
 
    const allCategories:CategoryType[] = await getAllCategories()
  return (
    <>
    <div className="container px-4">
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mb-4'>All Categories</h2>
      <CategorySwiper allCategories={allCategories}/>
    </div>
    
    </>
  )
}
