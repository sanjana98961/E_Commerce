import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Product from './Pages/Product';
import Register from './Pages/Register';
import ProductList from './Pages/productList';

function App() {
  const user = true
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productlist/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
        <Route path="/productlist" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
