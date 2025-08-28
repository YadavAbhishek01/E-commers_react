'use client'; // Required if you're using it in an app directory

import Filter from '@/componets/Filter';
import ProductList from '@/componets/ProductList';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListPage = () => {
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="relative w-[90%] h-64 mb-3 mt-3"> {/* Set height explicitly */}
        
        <Image 
          src="https://images.meesho.com/images/marketing/1746425994914.webp"
          alt="logo"
          fill // This replaces layout="fill"
          style={{ objectFit: 'cover' }} // replaces objectFit prop
          className="rounded-md"
        />
        <p className='text-white absolute right-20 top-[30%] text-4xl   '>Smart Shopping
   <span className='block'>Trusted by Millions</span></p>
   <button className=' absolute right-50 top-[65%]  cursor-pointer bg-white py-2  px-4 rounded-xl outline-none' >Shop Now</button>
      </div>
    </div>
    <ProductList />
 
    <Filter/>
    </>
  );
};

export default ListPage;
 