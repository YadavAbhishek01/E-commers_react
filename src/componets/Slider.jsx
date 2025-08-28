'use client'
import Image from 'next/image';
import React from 'react'


//     export interface Product {
//   id: string;
//   name: string;
//   price: number;
//   currency: string;
//   image: string;
//   rating: number;           // e.g., 4.5 out of 5
//   reviewsCount: number;     // number of reviews
//   available: boolean;       // is product in stock
//   category: string;
//   discountPercentage: number; // 0 if no discount
//   description: string;
//   slug: string;             // URL-friendly identifier
// }
const product =
[
  {
    "id": "p001",
    "name": "Nike Air Max 270",
    "price": 150.00,
    "currency": "USD",
    "image":  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
    "rating": 4.5,
    "reviewsCount": 120,
    "available": true,
    "category": "Shoes",
    "discountPercentage": 10,
    "description": "Comfortable and stylish sneakers with Air Max cushioning.",
    "slug": "nike-air-max-270"
  },
  {
    "id": "p002",
    "name": "Apple AirPods Pro",
    "price": 249.00,
    "currency": "USD",
    "image": "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBBaXJQb2RzJTIwUHJvfGVufDB8fDB8fHww",
    "rating": 4.8,
    "reviewsCount": 340,
    "available": true,
    "category": "Electronics",
    "discountPercentage": 5,
    "description": "Active noise cancellation for immersive sound.",
    "slug": "apple-airpods-pro"
  },
  {
    "id": "p003",
    "name": "Classic Leather Jacket",
    "price": 120.00,
    "currency": "USD",
    "image": "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=60",
    "rating": 4.3,
    "reviewsCount": 80,
    "available": false,
    "category": "Clothing",
    "discountPercentage": 0,
    "description": "Premium quality leather jacket for casual wear.",
    "slug": "classic-leather-jacket"
  },
  {
    "id": "p004",
    "name": "Samsung Galaxy S21",
    "price": 799.99,
    "currency": "USD",
    "image":"https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftc3VuZyUyMHMyMXxlbnwwfHwwfHx8MA%3D%3D",
    "rating": 4.6,
    "reviewsCount": 210,
    "available": true,
    "category": "Smartphones",
    "discountPercentage": 15,
    "description": "Latest Samsung smartphone with high-end features.",
    "slug": "samsung-galaxy-s21"
  },
  {
    "id": "p005",
    "name": "Espresso Coffee Maker",
    "price": 89.99,
    "currency": "USD",
    "image": "https://images.unsplash.com/photo-1735565879507-ddf54724b4ca?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "rating": 4.2,
    "reviewsCount": 60,
    "available": true,
    "category": "Home Appliances",
    "discountPercentage": 20,
    "description": "Brew your perfect cup of espresso at home.",
    "slug": "espresso-coffee-maker"
  }
]
const Slider = () => {

return (
    <div id="slider" className=" overflow-x-auto snap-x snap-mandatory flex  overflow-hidden h-screen w-full ">
      {product.map((item) => (
        <div
          key={item.id}
          className="w-full flex-shrink-0 snap-start h-full flex"
        >
          {/* Left Side - Text */}
          <div className="w-1/2 h-full flex flex-col justify-center px-10 bg-white">
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-lg text-gray-600 mb-2">Rating: {item.rating} ⭐</p>
            {item.discountPercentage > 0 && (
              <p className="text-red-500 text-xl font-semibold">
                {item.discountPercentage}% OFF
              </p>
             
            )}
              <p className='font-bold'>{item.price} {item.currency}</p>
            <p>{item.slug}</p>
            <p className="text-gray-500 mt-4">{item.description}</p>
            <p className="mt-6 text-2xl font-semibold">
              ${item.price.toFixed(2)} {item.currency}
            </p>
            <div className='flex items-center justify-center'>

            <button className='bg-black cursor-pointer text-white w-[20%] py-2 rounded-xl'>Shop Now</button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 h-full relative">
            <Image
              src={item.image.trim()}
              alt={item.name}
              fill
              style={{ objectFit: 'cover' }}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Slider
