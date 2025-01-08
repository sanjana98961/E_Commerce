import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {publicRequest} from "../requestMethod"
import { addProduct } from '../Redux/Cartredux';
import { useDispatch, useSelector } from 'react-redux';

const ProductItem = ({item}) => {
  const location= useLocation();
  const cart = useSelector((state)=>state.cart)
  console.log({cart})
 const id = location.pathname.split('/')[2]

 const [product, setProduct] = useState({});
 const [quantity, setQuantity] = useState(1);
 const [color, setColor] = useState("");
 const [size, setSize] = useState("");
 const dispatch =useDispatch()

//  useEffect(()=>{
//   const getProduct = async ()=>{
//      try {
//       if(!id) return 
//        const res = await publicRequest.get( "/products/find/"+id)
//        setProduct(res.data)
//        console.log({data: res.data})
//      } catch (err) {
//        console.log({err})
//      }
//   };
//   getProduct();
//  }, [id]);


 const handleQuantity = (type)=>{
  if(type === "Decrease"){
    // quantity > 1 && setQuantity(quantity - 1)
    setQuantity(quantity> 1 ? quantity-1 : 1)
  }else(
    setQuantity(quantity + 1)
  )
 }

  const handleCartClick = (id)=>{
    if(id){
      dispatch(addProduct({ ...item, quantity
        }))
    }
 }
  return (
    <div id='Container' className='flex-1 m-[5px] h-[350px] min-w-[280px] flex items-center justify-center bg-gray-200 relative '>
      
        <div id='Circle' className='w-[200px] h-[200px] rounded-[50%] bg-stone-200 absolute'></div>
        <img id='Image' className='h-[75%] z-[2] ' src={item.img}></img>
        <div id='Info' className='justify-center items-center flex w-[100%] h-[100%] absolute top-0 left-0 bg-[rgba(0,0,0,0.2)] transition-all duration-[1s] ease-out z-[3] opacity-0 hover:opacity-100'>

        <button onClick={()=>handleCartClick(item._id)}>
          <Link to="/cart">
            <div id='CartIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1] '> <ShoppingCartOutlined/> </div>
          </Link>
        </button>
        <Link to={`/product/${item._id}`}>
          <div id='SearchIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1]'><SearchOutlined/></div>
        </Link>
        <div id='FavIcon' className='w-[40px] h-[40px] rounded-[50%] bg-gray-400 flex justify-center items-center m-[6px] transition-all duration-[1s] ease-out hover:bg-[#e9f5f5] scale-[1] hover:scale-[1.1]'><FavoriteBorderOutlined/></div>
        </div>
    </div>
  )
}

export default ProductItem