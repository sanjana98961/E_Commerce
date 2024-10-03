import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({item}) => {
  return (
    <div id='Container' className='flex-1 m-[5px] h-[350px] min-w-[280px] flex items-center justify-center bg-gray-200 relative '>
      
        <div id='Circle' className='w-[200px] h-[200px] rounded-[50%] bg-stone-200 absolute'></div>
        <img id='Image' className='h-[75%] z-[2] ' src={item.img}></img>
        <div id='Info' className='justify-center items-center flex w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] transition-all duration-[1s] ease-out z-[3] opacity-0 hover:opacity-100'>
        <div id='CartIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1] '> <ShoppingCartOutlined/> </div>

          <Link to={`/product/${item._id}`}>
          <div id='SearchIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1]'><SearchOutlined/></div>
          </Link>
            <div id='FavIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1]'><FavoriteBorderOutlined/></div>
        </div>
    </div>
  )
}

export default ProductItem