import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-white via-white to-white bg-opacity-50 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
      <div className="w-1/4 p-5 bg-white sm:w-3/4">
        <h1 className="text-2xl font-medium">SIGN IN</h1>
        <form className="flex flex-col">
          <input className="flex-1 min-w-40 my-2 p-2 border-2 border-black rounded-md" type="text" placeholder="username" />
          <input className="flex-1 min-w-40 my-2 p-2 border-2 border-black rounded-md" type="password" placeholder="password" />
          <button className="w-2/5 py-3 px-5 bg-teal-500 text-white rounded-lg cursor-pointer mb-2">LOGIN</button>
          <a className="my-1 text-xs underline cursor-pointer">DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className="my-1 text-xs underline cursor-pointer">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
