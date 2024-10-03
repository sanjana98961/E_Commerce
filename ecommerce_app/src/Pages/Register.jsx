import React from "react";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-white via-white to-white bg-opacity-50 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')" }}>
      <div className="w-2/5 p-5 bg-white sm:w-3/4">
        <h1 className="text-2xl font-light">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="text" placeholder="name" />
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="text" placeholder="last name" />
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="text" placeholder="username" />
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="email" placeholder="email" />
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="password" placeholder="password" />
          <input className="flex-1 min-w-40 m-2 p-2 border border-gray-300 rounded" type="password" placeholder="confirm password" />
          <span className="text-xs m-2">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="w-2/5 py-3 px-5 bg-teal-500 text-white rounded cursor-pointer">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
