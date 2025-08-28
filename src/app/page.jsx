'use client';

import Category from "@/componets/Category";
import NewProduct from "@/componets/NewProduct";
import ProductList from "@/componets/ProductList";
import Slider from "@/componets/Slider";

// import { useCallback, useContext, useEffect } from "react";

export default function Home() {

  // const getdata=async()=>{
  //   const res=await fetch("https://dummyjson.com/products")
  //   const data= await res.json()
  //   console.log(data)
  // }
  // getdata();
  // console.log(data)s

  // console.log(productsDummyData);
  return (
    <>
      <Slider />
      <ProductList />
      <Category />
      <NewProduct />
    </>
  );
}
