import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from '../dataArray';
import { Link } from 'react-router-dom';


const Slider = () => {
const [slideIndex,setSlideIndex]= useState(0);

const handleClick =(direction)=>{
    console.log({direction})
    if(direction==="left"){
        setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    }
    else{
        setSlideIndex(slideIndex <2 ? slideIndex+1 : 0)
    }
};

  return (
    <div id='Container' className='mt-4 flex w-[100%] h-[80vh] relative overflow-hidden '>
        <div onClick={()=> handleClick("left")} id='ArrowLeft' className='h-[50px] w-[50px] flex items-center justify-center absolute m-[auto] rounded-[40%] bg-slate-400 top-0 bottom-0 left-[10px] z-[2] cursor-pointer traspa'><ArrowLeftOutlined/></div>
        <div id='Wrapper' className='h-[70vh] flex transition-all duration-[1s] ease-out' style={{ transform: `translateX(${slideIndex * -100}vw)`}}> 
            {sliderItems.map((item)=>(
                <div id='Slide' className='flex items-center w-[100vw] h-[80vh]' style={{backgroundColor: item.bg}}>
                    <div id='ImgContainer' className='flex-1 h-full'>
                        <img 
                            id='Image' 
                            className='h-full md:h-[100%] sm:h-auto rounded-[20px] object-cover' 
                            src={item.img} 
                            alt={item.title}
                        />
                    </div>

                    <div id='InfoContainer' className='flex-1 p-8 md:p-16'>
                        <h1 id='Title' className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>{item.title}</h1>
                        <p id='Description' className='my-6 sm:my-8 text-lg sm:text-xl font-semibold tracking-wide'>{item.description}</p>
                        {/* <Link to="/productlist">
                        <button id='Button' className='p-3 text-lg sm:text-xl cursor-pointer bg-green-200 rounded-full'>
                            SHOP NOW
                        </button>
                        </Link> */}
                    </div>
                </div>
            ))}
        </div>
        <div onClick={()=> handleClick("right")} id='ArrowRIght' className='h-[50px] w-[50px] flex items-center justify-center absolute m-[auto] rounded-[40%] bg-slate-400 top-0 bottom-0 right-[10px] z-[2] cursor-pointer'><ArrowRightOutlined/></div>
        <div id='Slide' className='flex items-center'></div>
    </div>
    
  )
}

export default Slider


