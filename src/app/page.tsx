import { ProductType } from "@/types/product.type";
import CategorySlider from "./_components/CategorySlider/CategorySlider";
import HomeSlider from "./_components/HomeSlider/HomeSlider";
import getAllProducts from "../api/Product/product.api";
import Product from "./_components/Product/Product";
export default async function page() {

const allProducts:ProductType[] = await getAllProducts()

  return <>
  <div className="container py-4 md:py-8 space-y-8 md:space-y-12 px-4">
    <HomeSlider />
    <CategorySlider/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5 mt-5">
      {allProducts.map((product)=> <Product key={product._id} product={product}/> )}
    </div>
  </div>
  </>
}
