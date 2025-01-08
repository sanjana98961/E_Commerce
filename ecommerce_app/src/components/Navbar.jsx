
import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div className='h-[60px] px-4 sm:px-6 md:px-10' id='Container'>
      <div className='flex justify-between items-center h-full' id='Wrapper'>
            {/* <div className='flex items-center flex-1' id='Left'>
                <div className='size-[14] cursor-pointer ml-[5px]' id='Language'>
                    En
                </div>
                <div className='flex p-[5px] ml-[25px] border-solid border-gray-200 border-2'id='SearchContainer'  >
                  <input className='border-none' id='Input'></input>
                  <Search/>
                </div>
            </div> */}

        {/* Center: Logo */}
        <div className='flex-1 flex justify-start' id='Center'>
          <Link to="/">
            <span className='text-[20px] sm:text-[25px] md:text-[30px] font-bold' id='Logo'>
              Ecommerce Site
            </span>
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className='flex flex-1 justify-end items-center space-x-4 sm:space-x-6' id='Right'>
          <Link to="/register">
            <div className='cursor-pointer text-[12px] sm:text-[14px] md:text-[16px]' id='MenuItem'>Register</div>
          </Link>
          <Link to="/signin">
            <div className='cursor-pointer text-[12px] sm:text-[14px] md:text-[16px]' id='MenuItem'>Sign in</div>
          </Link>
          <Link to="/cart">
            <div className='cursor-pointer flex items-center' id='MenuItem'>
              <Badge badgeContent={cart?.length || 0} color='primary'>
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
