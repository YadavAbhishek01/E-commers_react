'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { BsSearch } from "react-icons/bs"

const Searchbar = () => {
  const router = useRouter()

  const handleSearch = (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name')?.toString().trim()

    if (name) {
      router.push(`/list?name=${encodeURIComponent(name)}`)
    }
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-zinc-100 rounded-full px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-sky-400 transition"
      >
        <input
          type="text"
          name="name"
          placeholder="Search items"
          className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 outline-none capitalize"
        />
        <button type="submit" className="ml-2 text-gray-600 hover:text-sky-500 transition">
          <BsSearch className="text-xl" />
        </button>
      </form>
    </div>
  )
}

export default Searchbar
