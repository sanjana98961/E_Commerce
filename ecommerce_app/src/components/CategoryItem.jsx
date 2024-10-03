import React from 'react'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div id='Container' className='flex-1 m-[3px] h-[70vh] relative '>
        <Link to={`/productlist/${item.cat}`}>
          <img id='Image' className='w-[100%] h-[100%] object-cover' src={item.img}></img>
          <div id='Info' className='absolute w-[100%] h-[100%] top-0 left-0 justify-center flex items-center flex-col'>
              <h1 id='Title' className='text-white mb-[20px]'>{item.title}</h1>
              <button id='Button' className='p-[10px] text-[15px] text-gray-400 cursor-pointer bg-white rounded-[8%] '>SHOP NOW</button>
          </div>
        </Link>
    </div>
  )
}


export default CategoryItem