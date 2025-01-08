import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <div id='Container' className='h-[50vh] bg-blue-100 flex p-5 justify-center items-center flex-col'>
        <h1 id='Title' className='text-[70px] font-bold mb-4 sm:text-[50px] md:text-[60px] text-center'> News Letter</h1>
        <div id='Desc' className='mb-[20px] text-[24px] font-[300] sm:text-[20px] text-center'> Get timely updates from your favourite products. </div>
        <div id='Info' className='w-full max-w-[600px] h-[45px] bg-white flex justify-between items-center border-black'>
            <input 
              id='Input' 
              className='flex-[8] pl-[20px] py-[10px] sm:w-full' 
              placeholder='Your Email'
            />
            <button 
              id='Button' 
              className='h-[41px] flex-1 text-white border-[1px] bg-emerald-800'
            >
              <Send />
            </button>
        </div>
    </div>
  )
}

export default Newsletter
