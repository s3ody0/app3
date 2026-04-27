import { ProductType } from '@/types/product.type'
import React from 'react'
import Product from '../_components/Product/Product'
import getAllProducts from '../../api/Product/product.api'

export default async function page() {



  const allProducts:ProductType[] = await getAllProducts()
  return <>
  <div className="container mt-5 px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">

      {allProducts.map((product)=> <Product key={product._id} product={product}/> )}
    </div>


  </div>
  
  
  </>
}
