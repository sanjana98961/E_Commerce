import React, { useEffect, useState } from 'react'
import { Add, Remove } from "@mui/icons-material";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { useMediaQuery } from 'react-responsive';
import { useLocation } from "react-router-dom";
import {publicRequest} from "../requestMethod"



const Product = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const location= useLocation();
 const id = location.pathname.split('/')[2]

 const [product, setProduct] = useState({});
 const [quantity, setQuantity] = useState(1);
 const [color, setColor] = useState(" ");
 const [size, setSize] = useState(" ");



 useEffect(()=>{
  const getProduct = async ()=>{
     try {
       const res = await publicRequest.get( "/products/find/"+id)
       setProduct(res.data)
       console.log(res.data)
     } catch (err) {
       console.log({err})
     }
  };
  getProduct();
 }, [id]);


 const handleQuantity = (type)=>{
  if(type == "Decrease"){
    // quantity > 1 && setQuantity(quantity - 1)
    setQuantity(quantity> 1 ? quantity-1 : 1)
  }else(
    setQuantity(quantity + 1)
  )
 }


 const handleClick = ()=>{

 }






  return (
    <div>
      <Navbar />
      <Announcement />
      <div className={`p-10 flex ${isMobile ? "p-2 flex-col" : ""}`}>
        <div className="flex-1">
          <img className={`w-full ${isMobile ? "h-40vh" : "h-90vh"} object-cover`} src={product.img} alt="Denim Jumpsuit"/>
        </div>
        <div className={`flex-1 p-0 ${isMobile ? "p-2" : "p-10"}`}>
          <h1 className="font-bold text-2xl">{product.title} </h1>
          <p className="my-5">{product.desc}</p>
          <span className="font-light text-4xl">{product.price}</span>
          <div className={`w-1/2 my-7 flex justify-between ${isMobile ? "w-full" : ""}`}>
            <div className="flex items-center">
              <span className="text-lg font-light">Color</span>
              {/* {product.color.map((c)=>{<div className="w-5 h-5  rounded-full mx-1 cursor-pointer" style={{ color: c }} key={c}>  </div>})} */}

              <div onClick={()=> setColor()} className="w-5 h-5 rounded-full mx-1 cursor-pointer">{product.color}</div>

              {/* <div className="w-5 h-5 bg-black rounded-full mx-1 cursor-pointer"></div>
              <div className="w-5 h-5 bg-blue-900 rounded-full mx-1 cursor-pointer"></div>
              <div className="w-5 h-5 bg-gray-500 rounded-full mx-1 cursor-pointer"></div> */}
            </div>
            <div className="flex items-center">
              <span className="text-lg font-light">Size</span>
              <select onChange={(e)=> setSize(e.target.value)} className="ml-2 p-2 border-2 border-gray-300 rounded">

              <option>{product.size}</option>

                {/* {product.size.map((s)=>{<option key={s}> {s} </option>})} */}
                {/* <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option> */}
              </select>
            </div>
          </div>
          <div className={`w-1/2 flex items-center justify-between ${isMobile ? "w-full" : ""}`}>
            <div className="flex items-center font-bold">
              <Remove style={{cursor:"pointer"}} onClick={()=>handleQuantity("Decrease")}  />
              <span className="w-8 h-8 rounded-lg border border-teal-500 flex items-center justify-center mx-1">{quantity}</span>
              <Add style={{cursor:"pointer"}} onClick={()=>handleQuantity("Increase")}/>
            </div>
            <button onClick={handleClick} className="p-4 border-2 border-teal-500 bg-white cursor-pointer font-medium rounded-lg hover:bg-gray-100">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
