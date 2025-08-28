'use client'
import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa"
import { FiBell } from "react-icons/fi"
import { BsCart } from "react-icons/bs"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { DiVim } from 'react-icons/di'
import CartDetials from './CartDetials'

const NavIcons = () => {
  const router = useRouter()
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const IsLoggedIn = false
  const cartisempty=true;

  return (
    <div className="flex items-center gap-6 text-2xl relative text-gray-700">
      {/* Profile Icon */}
      <div className="relative">
        <FaUserCircle
          className="cursor-pointer text-sky-500 hover:text-sky-600 transition"
          onClick={() => {
            if (!IsLoggedIn) {
              router.push('/login')
            }
            setIsProfileOpen(prev => !prev)
          }}
        />
        {isProfileOpen && (
          <div className="absolute right-0 top-10 w-40 bg-white shadow-lg border rounded-md py-2 text-sm z-50">
            <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
            <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
          </div>
        )}
      </div>

      {/* Notification Icon */}
      <FiBell className="cursor-pointer hover:text-yellow-500 transition" />

      {/* Cart Icon */}
      <div className="relative">
        <BsCart
          className="cursor-pointer hover:text-amber-500 transition"
          onClick={() => setIsCartOpen(prev => !prev)}
        />
        {/* Cart Badge */}
        <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
          0
        </div>

        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="absolute right-0 top-10  bg-white border shadow-lg rounded-md p-4 z-50">
           
            {!cartisempty ?(<div>cart is empty</div>):  <CartDetials/>}
          </div>
        )}
      </div>
     
    </div>
  )
}

export default NavIcons
