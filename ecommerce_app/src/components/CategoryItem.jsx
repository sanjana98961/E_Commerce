import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({ item }) => {
  return (
    <div id='Container' className='flex-1 m-[3px] h-[50vh] sm:h-[60vh] md:h-[70vh] relative'>
      <Link to={`/productlist/${item.cat}`}>
        <img 
          id='Image' 
          className='w-full h-full object-cover' 
          src={item.img} 
          alt={item.title} 
        />
        <div 
          id='Info' 
          className='absolute w-full h-full top-0 left-0 flex items-center justify-center flex-col p-4 sm:p-6 md:p-8'
        >
          <h1 id='Title' className='text-white text-[16px] sm:text-[20px] md:text-[24px] mb-4'>
            {item.title}
          </h1>
          <button 
            id='Button' 
            className='p-2 sm:p-3 md:p-4 text-[14px] sm:text-[16px] text-gray-400 cursor-pointer bg-white rounded-[8%]'
          >
            SHOP NOW
          </button>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem
