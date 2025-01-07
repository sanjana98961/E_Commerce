import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import ProductList from './Pages/productList';
import Cart from './Pages/Cart'
import Success from './Pages/Success';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state)=>state.user.currentUser)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signin" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Success/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
