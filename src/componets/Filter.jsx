import React from 'react'

const Filter = () => {
  return (
    <div className='px-20 py-4 '>
      <div className='flex items-center justify-between'>
         <select name='type' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl '>
             <option value=""  className='bg-zinc-200 outline-none border-none rounded-2xl'>Type</option>
            <option value="Physical">Physical</option>
            <option value="Digital">Digital</option>
         </select>

         <input type="text" name="" id="" placeholder='min price  ' className='outline-none bg-zinc-200 rounded-xl py-2 px-4' />
             <input type="text" name="" id="" placeholder='max price' className='outline-none  bg-zinc-200 rounded-xl py-2 px-4' />        
          <select name='size' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl '>
            <option >Size</option>
            <option value="">size</option>
         </select>

          <select name='colot' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl  '>
    
            <option value="">Color</option>
            <option value="">Color</option>
         </select>

          <select name='ribbon' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl '>
        
            <option value="">Category</option>
            <option value="">Category</option>
         </select>

             <select name='filter' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl '>
            <option value="">All Filter</option>
            <option value="">All Filter</option>
         </select>

           <select name='' className='py-2 px-6 outline-none text-white bg-zinc-600 rounded-2xl '>
            <option value="">Sort By</option>
            <option value="">Price (Low to High)</option>
            <option value="">Price (High to Low )</option>
             <option value="">Newest</option>
              <option value="">Oldest</option>
         </select>
      </div>
    </div>
  )
}

export default Filter
