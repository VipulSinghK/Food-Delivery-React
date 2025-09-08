import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import About from './components/About';
import { food_items } from './Food';

export const dataContext = createContext();

function App() {
  const [input, setInput] = useState('');
  const [Cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <dataContext.Provider
      value={{ input, setInput, Cate, setCate, showCart, setShowCart, selectedCategory, setSelectedCategory }}
    >
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            className="z-[100]"
          />
        </div>
      </BrowserRouter>
    </dataContext.Provider>
  );
}

export default App;