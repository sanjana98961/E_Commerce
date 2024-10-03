import React from 'react'
import { categories } from '../dataArray'
import CategoryItem from './CategoryItem'

const Categories = () => {
  return (
    <div id='Container' className='flex justify-between p-[20px]'>
        {categories.map((item)=>(
            <CategoryItem item={item}/>
        ))}
    </div>
  )
}

export default Categories