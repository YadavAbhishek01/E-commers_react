
'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
//         export interface Product {
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
const product= [
  {
    id: "p001",
    name: "Nike Air Max 270",
    price: 150.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60",
    rating: 4.5,
    reviewsCount: 120,
    available: true,
    category: "All Category",
    discountPercentage: 10,
    description: "Comfortable and stylish sneakers with Air Max cushioning.",
    slug: "nike-air-max-270",
  },
  {
    id: "p002",
    name: "Apple AirPods Pro",
    price: 249.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600&auto=format&fit=crop&q=60",
    rating: 4.8,
    reviewsCount: 340,
    available: true,
    category: "Electronics",
    discountPercentage: 5,
    description: "Active noise cancellation for immersive sound.",
    slug: "apple-airpods-pro",
  },
  {
    id: "p003",
    name: "Classic Leather Jacket",
    price: 120.0,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=60",
    rating: 4.3,
    reviewsCount: 80,
    available: false,
    category: "Clothing",
    discountPercentage: 0,
    description: "Premium quality leather jacket for casual wear.",
    slug: "classic-leather-jacket",
  },
  {
    id: "p004",
    name: "Samsung Galaxy S21",
    price: 799.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=600&auto=format&fit=crop&q=60",
    rating: 4.6,
    reviewsCount: 210,
    available: true,
    category: "Smartphones",
    discountPercentage: 15,
    description: "Latest Samsung smartphone with high-end features.",
    slug: "samsung-galaxy-s21",
  },
  {
    id: "p005",
    name: "Espresso Coffee Maker",
    price: 89.99,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    rating: 4.2,
    reviewsCount: 60,
    available: true,
    category: "Home Appliances",
    discountPercentage: 20,
    description: "Brew your perfect cup of espresso at home.",
    slug: "espresso-coffee-maker",
  },
     {
    id: "p006",
    name: "Premium Yoga Mat",
    price: 29.95,
    currency: "USD",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eW9nYSUyMG1hdHN8ZW58MHx8MHx8fDA%3D",
    rating: 4.5,
    reviewsCount: 88,
    available: true,
    category: "Fitness",
    discountPercentage: 12,
    description: "Non-slip, eco-friendly yoga mat perfect for home or studio workouts.",
    slug: "premium-yoga-mat"
  }

];
const NewProduct = () => {

  return (
   <div className=' px-25 py-4'>
      <h1 className="text-2xl font-bold mb-4">New  Products</h1>
      <div className=" flex-wrap grid grid-cols-3 gap-4">
        {product.map((item) => (
            
          <div key={item.id} className="flex flex-col p-4 border rounded-md shadow-md w-[300px]">
            <Link href={`/dadada/?name=${item.name.trim()}`}>
            <div className="relative h-48 w-full">
              <Image
                src={item.image.trim()}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            <div className="mt-3">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
              <p className="text-sm mt-1">{item.description}</p>
            </div>

            <button
            
              className="mt-4 bg-pink-500 text-white rounded-xl px-6 py-2 hover:bg-pink-600 transition"
            >
              Add to Cart
            </button>
             </Link>
          </div>
         
        ))}
      </div>
    
    </div>
  )
}

export default NewProduct
