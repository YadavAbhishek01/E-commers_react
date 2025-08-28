'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CartDetails = () => {
  const [quantity, setQuantity] = useState(1)

  // Dummy product data (replace with props or context later)
  const product = {
    name: "Nike Air Max 2023",
    price: 129.99,
    available: true,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D", // replace with your actual image path
  }

  const handleIncrease = () => setQuantity(prev => prev + 1)
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const subtotal = (product.price * quantity).toFixed(2)

  return (
    <>
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      {/* Product Card */}
      <div className="flex flex-col md:flex-row gap-4 items-center border-b pb-4">
        {/* Image */}
        <div className="w-32 h-32 relative">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            // height={20}
            // width={30}
          />
        </div>

        {/* Details */}
        <div className="flex-1 w-full">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className={`text-sm mt-1 ${product.available ? 'text-green-600' : 'text-red-500'}`}>
            {product.available ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-sm text-gray-500 mt-1">Price: ${product.price.toFixed(2)}</p>

          {/* Quantity Controls */}
          <div className="flex items-center mt-3 gap-3">
            <button
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="font-semibold">{quantity}</span>
            <button
              className="px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="text-right">
          <p className="text-lg font-bold">Subtotal:</p>
          <p className="text-xl text-sky-600 font-bold">${subtotal}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-between flex-wrap gap-4">
        <Link href="/cart" className="px-5 py-2 border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">
          View Cart
        </Link>
        <button className="px-6 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  
    </>
  
    
  )
}

export default CartDetails
