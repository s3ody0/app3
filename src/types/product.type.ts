export type ProductType = {
    sold?:number,
    images?:string[],
    subcategory:SubCategoryType[],
    ratingquantity:number,
    _id:string,
    title:string,
    slug:string,
    description:string,
    quantity:number,
    price:number,
    imageCover:string,
    category:CategoryType,
    brand:BrandType,
    ratingsAverage:number,
    createdAt:string,
    updatedat:string,
    id:string,
}
type SubCategoryType = {
    _id:string,
    name:string,
    slug:string,
    category:string
}
export type CategoryType = {
    _id:string,
    name:string,
    slug:string,
    image:string
}
type BrandType ={
    _id:string,
    name:string,
    slug:string,
    image:string
}