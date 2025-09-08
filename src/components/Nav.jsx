import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { IoFastFoodSharp } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { LuShoppingBag } from 'react-icons/lu';
import { dataContext } from "../App";
import { food_items } from "../Food";
import { useSelector } from 'react-redux';

function Nav() {
  const { input, setInput, setCate, setShowCart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  useEffect(() => {
    const newList = food_items.filter(
      (item) => item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newList);
  }, [input, setCate]);

  return (
    <div className="w-full h-[100px] flex justify-around items-center bg-white shadow-md">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFoodSharp className="w-[30px] h-[30px] text-green-500" />
      </div>
      <div className="flex gap-4 md:gap-8 text-green-600 font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-green-800 underline' : 'hover:text-green-400'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive ? 'text-green-800 underline' : 'hover:text-green-400'
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? 'text-green-800 underline' : 'hover:text-green-400'
          }
        >
          Cart
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-green-800 underline' : 'hover:text-green-400'
          }
        >
          About
        </NavLink>
      </div>
      <div className="bg-white flex justify-center items-center h-[60px] w-[45vw] md:w-[30vw] gap-[2%] rounded-2xl shadow-2xl">
        <CiSearch className="text-green-500 font-bold w-[30px] h-[30px]" />
        <input
          type="text"
          placeholder="Search items..."
          className="w-full outline-none text-[13px] text-green-400 md:text-xl"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div
        className="w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl relative cursor-pointer"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-0 right-2 text-green-500 font-black text-[18px]">
          {items.length}
        </span>
        <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
      </div>
    </div>
  );
}

export default Nav;