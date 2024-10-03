import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import { popularProducts } from '../dataArray'
import { useResolvedPath } from 'react-router-dom';
import axios from "axios"

const Products = ({cat, filter, sort}) => {
  
  //fetch products or add products
  const [products, setProducts] = useState([]);
  // filter product based on color, size and sort
  const [filteredProducts, setFilteredProducts] = useState([])


  //get product from our API, whenever category  change
  useEffect(()=>{
   const getProducts = async ()=>{
      try {
        const res = await axios.get( cat ? `http://localhost:2000/api/products?category=${cat}` : "http://localhost:2000/api/products")
        setProducts(res.data)
      } catch (err) {
        console.log({err})
      }
   };
   getProducts();
  }, [cat]);
 
    useEffect(()=>{
      if(cat){
        const filterItems =  products?.filter((item) => (
          Object.entries(filter).every(([key, value]) => {
            return Array.isArray(item[key]) ? item[key].includes(value) : item[key] === value;
          })
        ));
       
        setFilteredProducts(filterItems)
      }
    }, [cat, filter, products])

    useEffect(()=>{
      if(sort ==="newest"){
       setFilteredProducts((prev)=>
        [...prev].sort((a,b)=> a.createdAt -b.createdAt) 
       )  
      } else if(sort==="asc"){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b) => a.price - b.price)
      )
      }else {
        setFilteredProducts((prev)=>
          [...prev].sort((a,b) => b.price - a.price)
      )
      }
    },[sort])


  return (
    <div id='Container' className='p-[20] flex flex-wrap justify-between'>
        {cat ? filteredProducts.map((item)=>(
         <ProductItem item={item} key={item.id}/>
        ))
        :products.map((item)=>(
         <ProductItem item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Products