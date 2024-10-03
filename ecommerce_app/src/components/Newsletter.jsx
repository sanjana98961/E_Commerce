import { Send } from '@mui/icons-material'
import React from 'react'

const Newsletter = () => {
  return (
    <div id='Container' className='h-[60vh] bg-[#fcf5f5] flex justify-center items-center flex-col'>
        <h1 id='Title' className='text-[70px] font-bold m-[]'> News Letter</h1>
        <div id='Desc' className='mb-[20px] text-[24px] font-[300] '> Get timely updates from your favourite products. </div>
        <div id='Info' className='w-[50%] h-[45px] bg-white flex justify-between items-center border-solid border-[4px] border-gray-400'>
            <input id='Input' className='flex-[8] pl-[20px] ' placeholder='Your Email'></input>
            <button id='Button' className='h-[41px] flex-1 text-white border-[1px] bg-emerald-800' ><Send/></button>
        </div>

    </div>
  )
}

export default Newsletter