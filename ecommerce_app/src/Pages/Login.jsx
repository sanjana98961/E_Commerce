import React, { useState } from "react";
import {login} from "../Redux/ApiCallsLogin"
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [userName,setUserName]=useState("")
  const [password,setPassword]=useState("")
  const dispatch = useDispatch()
  const {isFetching,error} = useSelector((state)=>state.user)

  const cart = useSelector((state) => state.cart);
  console.log({cart});
  console.log({isFetching})

  const handleLoginClick=(e)=>{
    e.preventDefault()
    login(dispatch,{userName,password})
  }

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-white via-white to-white bg-opacity-50 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
      <div className="border rounded-2xl p-5 bg-white sm:w-1/3">
        <h1 className="text-2xl font-medium">SIGN IN</h1>
        <form className="flex flex-col">
          <input onChange={(e)=>{setUserName(e.target.value)}} className="flex-1 min-w-40 my-2 p-2 border-2 border-black rounded-md" type="text" placeholder="username" />
          <input onChange={(e)=>{setPassword(e.target.value)}} className="flex-1 min-w-40 my-2 p-2 border-2 border-black rounded-md" type="password" placeholder="password" />
          <button onClick={handleLoginClick} disabled={isFetching}  className={`flex-1 min-w-40 py-3 px-5 bg-teal-500 text-white mb-2 ${isFetching ? 'cursor-not-allowed bg-slate-600 text-sm' : 'cursor-pointer'}`}>LOGIN</button>
          {error && <span className="text-red-500">Something went wrong</span>}
          <a className="my-1 text-xs underline cursor-pointer">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className="my-1 text-xs underline cursor-pointer">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
