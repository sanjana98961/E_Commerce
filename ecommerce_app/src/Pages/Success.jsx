import React from 'react'
import { useLocation } from 'react-router-dom'


function Success() {
    const location = useLocation()
    console.log({location})
  return (
    <div>Your payment has been successful</div>
  )
}

export default Success