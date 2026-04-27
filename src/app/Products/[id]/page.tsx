import ProductDetails from '@/app/_components/ProductDetails/ProductDetails'
import SwiperProduct from '@/app/_components/Swiper/Swiper'
import { getProductDetails, getRelatedProducts } from '../../../api/Product/product.api'
import { ProductType } from '@/types/product.type'
import React from 'react'

export default async function page({params}: {params: Promise<{id: string}>}) {

  const {id} = await params
  const productDetails:ProductType = await getProductDetails(id)
  const relatedProducts:ProductType[] = await getRelatedProducts(productDetails.category._id)

  return <>
    <div className="container py-4 md:py-8 px-4">
      <div className="grid grid-cols-12 gap-4 md:gap-5">
        <ProductDetails productDetails={productDetails}/>
      </div>
      <h2 className='text-xl md:text-2xl lg:text-3xl font-semibold mt-6 md:mt-8 mb-4'>Related products</h2>
      <SwiperProduct relatedProducts={relatedProducts}/>
    </div>
  </>
}
