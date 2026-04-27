"use client";
import { getProductsFromCart } from "@/api/Product/cart.api";
import { CartType } from "@/types/cart.type";
import { ProductType } from "@/types/product.type";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

type CartProduct = {
  _id: string;
  price: number;
  count: number;
  product: ProductType;
};

export type CartResponse = {
  status:string,
  numOfCartItems:number,
  cartId:string,
  data:{
    products:CartProduct[]
  }
}

type CartContextType = {
  numOfCartItems: number | null;
  setNumOfCartItems: Dispatch<SetStateAction<number | null>>;
  handleCart: () => Promise<CartType>;
  allProducts: CartProduct[];
  setAllProducts: Dispatch<SetStateAction<CartProduct[]>>;
  totalPrice: number;
};


export const cartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [allProducts, setAllProducts] = useState<CartProduct[]>([]);
  const [numOfCartItems, setNumOfCartItems] = useState<number | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  async function handleCart(): Promise<CartType> {
    const data = await getProductsFromCart();

    setAllProducts(data?.data?.products);
    let sum = 0;
    data?.data?.products.forEach((product: CartProduct) => {
      sum += product.count;
    });
    setNumOfCartItems(sum);
    setTotalPrice(data?.data?.totalCartPrice);

    return data;
  }

  useEffect(() => {
    handleCart();
  }, []);

  return (
    <cartContext.Provider value={{numOfCartItems,setNumOfCartItems, handleCart,setAllProducts,allProducts,totalPrice,}}>
      {children}
    </cartContext.Provider>
  );
}
