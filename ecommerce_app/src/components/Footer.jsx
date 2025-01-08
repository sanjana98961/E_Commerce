import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@mui/icons-material'
import React from 'react'

const Footer = () => {
  return (
    <div id='Container' className='flex flex-col sm:flex-row'>
        <div id='Left' className='flex flex-1 flex-col p-5 mb-5 sm:mb-0'>
            <span id='Logo' className='text-[25px] font-bold'> ECommerce Site</span>
            <p id='Desc' className='my-5 text-sm sm:text-base'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.
            </p>
            <div id='Social' className='flex items-center'>
                <div id='Facebook' className='w-10 h-10 rounded-[30%] flex justify-center bg-gray-300 items-center mr-5'>
                    <Facebook />
                </div>
                <div id='Twitter' className='w-10 h-10 rounded-[30%] flex justify-center bg-gray-300 items-center mr-5'>
                    <Twitter />
                </div>
                <div id='Instagram' className='w-10 h-10 rounded-[30%] flex justify-center bg-gray-300 items-center mr-5'>
                    <Instagram />
                </div>
                <div id='LinkedIn' className='w-10 h-10 rounded-[30%] flex justify-center bg-gray-300 items-center'>
                    <LinkedIn />
                </div>
            </div>
        </div>
        
        <div id='Center' className='flex-1 p-5 mb-5 sm:mb-0'>
            <span id='Title' className='text-[18px] font-bold mb-6'> Important Links</span>
            <ul id='List' className='flex flex-wrap m-0 p-0'>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Home</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Cart</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Man Fashion</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Woman Fashion</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Accessories</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>My Account</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Order Tracking</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Wishlist</li>
                <li id='ListItem' className='w-[50%] sm:w-[33.33%] mb-2.5'>Terms</li>
            </ul>
        </div>

        <div id='Right' className='flex-1 p-5'>
            <div id='Title' className='text-[18px] font-bold mb-6'>Contact</div>
            <div id='ContactItem' className='mb-5 flex flex-col items-start'>
                <div><Room style={{ marginRight: "10px" }} /> Noida, UP, India - 110022</div>
                <div><Phone style={{ marginRight: "10px" }} />+1 234 56 78</div>
                <div><MailOutline style={{ marginRight: "10px" }} />contact@gamil.com</div>
            </div>
            <img id='PayementImage' className='w-[50%] sm:w-[100%]' src="https://i.ibb.co/Qfvn4z6/payment.png" alt="Payment Methods" />
        </div>
    </div>
  )
}

export default Footer
