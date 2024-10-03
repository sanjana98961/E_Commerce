import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import {useSelector} from "react-redux"

const Navbar = () => {
const cart = useSelector(state=> state.cart)

console.log(cart)

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
                <span className='text-[30px] font-bold' id='Logo'>
                    Ecommerce Site
                </span>
            </div>
            <div className='flex flex-1 justify-end items-center' id='Right'>
                <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>Register</div>
                <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>Sign in</div>
                <div className='cursor-pointer justify-center m-[20px]  text-[14px]' id='MenuItem'>
                    <Badge badgeContent={2} color='primary'>
                    <ShoppingCartOutlined/>
                    </Badge>
                </div>
            </div>       
        </div>
    </div>
  )
}

export default Navbar