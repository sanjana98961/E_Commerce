import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  //fetch category
 const location= useLocation();
 const cat = location.pathname.split('/')[2]

 //set filter
 const [filter,setFilter] =useState({});

 //filter on sort
 const [sort, setSort] = useState("Newest")


 const handleFilter=(e)=>{
   const value= e.target.value
   setFilter({
    ...filter,
    [e.target.name]: value,
   })
 }


//  const handleSort=(e)=>{
//  const sortValue= e.target.value
//  setSort(sortValue)
//  }
  

  return (
    <div>
      <Navbar />
      <Announcement />
      <h1 className="m-5 text-2xl">{cat}</h1>
      <div className="flex justify-between m-5">
        <div className="m-5 flex flex-col sm:flex-row sm:space-x-5">
          <span className="text-lg font-semibold mb-2 sm:mb-0">Filter Products:</span>
          <select name="color" onChange={handleFilter} className="p-2 border border-gray-300 rounded mb-2 sm:mb-0">
            <option value=" " selected disabled >Color</option>
            <option>white</option>
            <option>black</option>
            <option>red</option>
            <option>blue</option>
            <option>yellow</option>
            <option>green</option>
          </select>
          <select name="size" onChange={handleFilter} className="p-2 border border-gray-300 rounded">
            <option value=" " selected disabled >Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="m-5 flex flex-col sm:flex-row sm:space-x-5">
          <span className="text-lg font-semibold mb-2 sm:mb-0">Sort Products:</span>
          <select onChange={(e)=>setSort(e.target.value)} className="p-2 border border-gray-300 rounded">
          <option value=" " selected disabled >Sort By</option>
            <option value="newest" >Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
