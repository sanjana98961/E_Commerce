import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { sliderItems } from '../dataArray';


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
    <div id='Container' className='flex w-[100%] h-[100vh] relative overflow-hidden '>
        <div onClick={()=> handleClick("left")} id='ArrowLeft' className='h-[50px] w-[50px] flex items-center justify-center absolute m-[auto] rounded-[40%] bg-slate-400 top-0 bottom-0 left-[10px] z-[2] cursor-pointer traspa'><ArrowLeftOutlined/></div>
        <div id='Wrapper' className='h-[100%] flex transition-all duration-[1s] ease-out' style={{ transform: `translateX(${slideIndex * -100}vw)`}}> 
            {sliderItems.map((item)=>(
                <div id='Slide' className='flex items-center w-[100vw] h-[125vh]' style={{backgroundColor: item.bg}}>
                    <div id='ImgContainer' className='flex-1 h-[100%] '>
                        <img id='Image' className='h-[80%] rounded-[20px]' src={item.img}></img>
                    </div>
                    <div id='InfoCOntainer' className='flex-1 p-[50px] '>
                        <h1 id='Title' className='text-[70px]'>{item.title}</h1>
                        <p id='Description' className='my-[50px] text-[20px] font-bold tracking-[3px]'>{item.description}</p>
                        <button id='Button' className='p-[10px] text-[20px] cursor-pointer bg-green-200 rounded-[20%] '>SHOP NOW</button>
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