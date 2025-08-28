'use client'
import Loader from '@/componets/Loader';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// export interface RatingDetails {
//   oneStar: number;
//   twoStar: number;
//   threeStar: number;
//   fourStar: number;
//   fiveStar: number;
// }

// export interface Product {
//   id: string;
//   name: string;
//   brand: string;
//   price: number;
//   discountPercentage: number;
//   discountPrice: number;
//   currency: string;
//   stock: number;
//   available: boolean;
//   category: string;
//   image: string;
//   imageAlt: string;
//   rating: number;
//   ratingDetails: RatingDetails;
//   reviewsCount: number;
//   description: string;
//   productInfo: string;
//   shippingInfo: string;
//   productPolicy: string;
//   sizes?: string[];   // Optional - not all products have sizes
//   colors?: string[];  // Optional
//   tags: string[];
//   slug: string;
// }

const products = [
  {
    id: "p001",
    name: "Nike Air Max 270",
    brand: "Nike",
    price: 150.0,
    discountPercentage: 10,
    discountPrice: 135.0,
    currency: "USD",
    stock: 20,
    available: true,
    category: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    imageAlt: "Nike Air Max 270 sneakers",
    rating: 4.5,
    ratingDetails: {
      oneStar: 3,
      twoStar: 5,
      threeStar: 12,
      fourStar: 40,
      fiveStar: 60,
    },
    reviewsCount: 120,
    description: "Comfortable and stylish sneakers with Air Max cushioning.",
    productInfo: "Arch support, breathable mesh, cushioned heel.",
    shippingInfo: "Free shipping over $50.",
    productPolicy: "30-day return policy.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Red"],
    tags: ["sneakers", "running", "men"],
    slug: "nike-air-max-270",
  },
  {
    id: "p002",
    name: "Apple AirPods Pro",
    brand: "Apple",
    price: 249.0,
    discountPercentage: 5,
    discountPrice: 236.55,
    currency: "USD",
    stock: 45,
    available: true,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=600",
    imageAlt: "Apple AirPods Pro in charging case",
    rating: 4.8,
    ratingDetails: {
      oneStar: 2,
      twoStar: 3,
      threeStar: 10,
      fourStar: 40,
      fiveStar: 285,
    },
    reviewsCount: 340,
    description: "Active noise cancellation with immersive sound.",
    productInfo: "H1 chip, adaptive EQ, water-resistant.",
    shippingInfo: "Ships in 1-2 business days.",
    productPolicy: "1-year limited warranty.",
    tags: ["earbuds", "wireless", "apple"],
    slug: "apple-airpods-pro",
  },
  {
    id: "p003",
    name: "Classic Leather Jacket",
    brand: "Urban Style",
    price: 120.0,
    discountPercentage: 0,
    discountPrice: 120.0,
    currency: "USD",
    stock: 0,
    available: false,
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
    imageAlt: "Black leather jacket",
    rating: 4.3,
    ratingDetails: {
      oneStar: 1,
      twoStar: 4,
      threeStar: 10,
      fourStar: 30,
      fiveStar: 35,
    },
    reviewsCount: 80,
    description: "Timeless genuine leather jacket with soft lining.",
    productInfo: "Adjustable cuffs, inner pocket, zip-up front.",
    shippingInfo: "Standard shipping: 3–5 business days.",
    productPolicy: "No refunds. Exchanges only within 15 days.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Brown"],
    tags: ["leather", "winter", "jacket"],
    slug: "classic-leather-jacket",
  },
  {
    id: "p004",
    name: "Samsung Galaxy S21",
    brand: "Samsung",
    price: 799.99,
    discountPercentage: 15,
    discountPrice: 679.99,
    currency: "USD",
    stock: 10,
    available: true,
    category: "Smartphones",
    image: "https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=600",
    imageAlt: "Samsung Galaxy S21 front and back",
    rating: 4.6,
    ratingDetails: {
      oneStar: 2,
      twoStar: 5,
      threeStar: 20,
      fourStar: 60,
      fiveStar: 123,
    },
    reviewsCount: 210,
    description: "Powerful smartphone with AMOLED display and 5G.",
    productInfo: "Triple camera, 120Hz, 128GB storage.",
    shippingInfo: "Free next-day delivery for premium members.",
    productPolicy: "30-day return, 1-year warranty.",
    tags: ["android", "smartphone", "samsung"],
    slug: "samsung-galaxy-s21",
  },
  {
    id: "p005",
    name: "Espresso Coffee Maker",
    brand: "CafeMaster",
    price: 89.99,
    discountPercentage: 20,
    discountPrice: 71.99,
    currency: "USD",
    stock: 100,
    available: true,
    category: "Home Appliances",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80",
    imageAlt: "Espresso machine brewing coffee",
    rating: 4.2,
    ratingDetails: {
      oneStar: 2,
      twoStar: 5,
      threeStar: 8,
      fourStar: 15,
      fiveStar: 30,
    },
    reviewsCount: 60,
    description: "Brew café-quality espresso at home.",
    productInfo: "Steam wand, removable tank, compact design.",
    shippingInfo: "Ships within 3 business days.",
    productPolicy: "30-day money-back guarantee.",
    tags: ["coffee", "kitchen", "espresso"],
    slug: "espresso-coffee-maker",
  },
  {
    id: "p006",
    name: "Premium Yoga Mat",
    brand: "ZenFlex",
    price: 29.95,
    discountPercentage: 12,
    discountPrice: 26.36,
    currency: "USD",
    stock: 70,
    available: true,
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600",
    imageAlt: "Purple yoga mat rolled out on floor",
    rating: 4.5,
    ratingDetails: {
      oneStar: 1,
      twoStar: 2,
      threeStar: 5,
      fourStar: 30,
      fiveStar: 50,
    },
    reviewsCount: 88,
    description: "Non-slip, eco-friendly mat for yoga & workouts.",
    productInfo: "Biodegradable, durable, lightweight.",
    shippingInfo: "Standard 5-7 days, expedited available.",
    productPolicy: "No returns due to hygiene reasons.",
    tags: ["yoga", "fitness", "home"],
    slug: "premium-yoga-mat",
  }
];


const Singlelistpage = () => {
  const [items, setItems] = useState([])
  const[CartCount,setCartCount]=useState(1)
  const[productdata,setProductData] =useState([])
  const searchParams = useSearchParams();
  const name = searchParams.get('name'); // Use 'get' for single value


 
 useEffect(() => {
    if (!name) return;

    const data = products.filter((item) => item.name === name);

    if(data.length === 0) {
      alert("Product not available");
      setItems([]);
    } else {
      setItems(data);
    }

  }, [name]);
console.log(items)


  return (
   <div className="min-h-screen py-8 px-6 bg-gray-50 flex flex-col w-full items-center">
      <h1 className="text-3xl font-bold mb-8">Product Details</h1>

      {items  && items.length>0 ? (
         items.map((product) => (
            
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
        >
          {/* Image Left */}
          <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
            <Image
              src={product.image.trim()}
              alt={product.imageAlt}
              width={400}
              height={400}  // Make square for consistent aspect ratio
              objectFit="contain"
              className="rounded-l-lg"
            />
          </div>

          {/* Details Right */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-between bg-zinc-300">
            <div>
              <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
              <p className="text-gray-800 mb-6">{product.description}</p>
            </div>

            <div className='flex flex-col gap-3'>
              <p className="text-2xl font-bold">
                ${product.price.toFixed(2)}{' '}
                <span className="text-base text-gray-600">{product.currency}</span>
              </p>
              <p className="text-yellow-500 font-semibold">
                ⭐ {product.rating} ({product.reviewsCount} reviews)
              </p>
              <p className={`font-semibold ${product.available ? 'text-green-700' : 'text-red-700'}`}>
                {product.available ? 'In Stock' : 'Out of Stock'}
              </p>
               
              
             
              <div>
                <p className='font-bold'>Product Info</p>
                <p>{product.productInfo}</p>
              </div>

              <div>
                <p className='font-bold'>Refund & Product Policy</p>
                <p>{product.productPolicy}</p>
              </div>

              <div>
                <p className='font-bold capitalize'>Shipping Info</p>
                <p>{product.shippingInfo}</p>
               
              </div>

              <div className='flex items-center gap-4 mt-4'>
                <p className='font-semibold'>Quantity:</p>
              
                <button
                  className=' cursor-pointer bg-zinc-200 text-2xl px-3 rounded'
                  onClick={() => setCartCount(prev => (prev > 1 ? prev - 1 : 1))}
                >
                  -
                </button>
                <p className='  text-xl font-medium'>{CartCount}</p>
                <button
                  className=' cursor-pointer bg-zinc-200 text-2xl px-3 rounded'
                  onClick={() => setCartCount(prev => prev + 1)}
                >
                  +
                </button>

                <button className= ' cursor-pointer bg-pink-600 py-2 px-5 rounded-xl ml-[25%]' >Add Cart</button>
              </div>
             
           {/* <p className={`text-${product.colors?.[1]?.toLowerCase() || 'gray'}-500`}>abhiahe</p> */}

            
            </div>
          </div>
        </div>
      ))
    ):(

        <Loader/>
      )}
     
    </div>


  )
}

export default Singlelistpage;
