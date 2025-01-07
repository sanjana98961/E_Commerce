import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'

const Navbar = () => {
const cart = useSelector(state=> state.cart)

  return (
    <div className='h-[60px]' id='Container'>
        <div className='flex justify-between items-center' id='Wrapper'>
            <div className='flex items-center flex-1' id='Left'>
                <div className='size-[14] cursor-pointer ml-[5px]' id='Language'>
                    En
                </div>
                <div className='flex p-[5px] ml-[25px] border-solid border-gray-200 border-2'id='SearchContainer'  >
                  <input className='border-none' id='Input'></input>
                  <Search/>
                </div>
            </div>
            <div className='items-center flex-1 flex justify-center ' id='Center'>
                <Link to="/">
                    <span className='text-[30px] font-bold' id='Logo'>
                        Ecommerce Site
                    </span>
                </Link>
            </div>
            <div className='flex flex-1 justify-end items-center' id='Right'>
                <Link to="/register">
                <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>Register</div>
                </Link>
                <Link to="/signin">
                <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>Sign in</div>
                </Link>
                <Link to="/cart">
                    <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>
                        <Badge badgeContent={cart?.length || 0} color='primary'>
                        <ShoppingCartOutlined/>
                        </Badge>
                    </div>
                </Link>
            </div>       
        </div>
    </div>
  )
}

export default Navbar