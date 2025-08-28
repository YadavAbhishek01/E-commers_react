import React from 'react'
import { TiShoppingCart } from "react-icons/ti"
import Link from 'next/link'
import Searchbar from '@/componets/Searchbar'
import NavIcons from './NavIcons'

const Navbar = () => {
  return (
    <div className="bg-zinc-50 shadow-sm sticky top-0 z-50">
      <nav className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <TiShoppingCart className="text-4xl text-red-600" />
          </Link>
          <Link href="/">
            <p className="text-2xl font-semibold text-gray-800">Sopy</p>
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-gray-700 text-lg font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/deals">Deals</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md hidden lg:block">
          <Searchbar />
        </div>

        {/* Icons */}
        <NavIcons />
      </nav>
    </div>
  )
}

export default Navbar
