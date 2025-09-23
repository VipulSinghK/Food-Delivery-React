import React, { useContext, useEffect } from 'react';
import { dataContext } from '../App';
import Card from './Card';
import Categories from '../Categories';
import { food_items } from '../Food';

function Menu() {
  const { Cate, setCate, input, selectedCategory, setSelectedCategory } = useContext(dataContext);

  useEffect(() => {
    let filteredItems = food_items;
    
    if (input) {
      filteredItems = filteredItems.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
    }
    
   
    if (selectedCategory !== 'All') {
      filteredItems = filteredItems.filter((item) => item.food_category === selectedCategory);
    }
    
    setCate(filteredItems);
  }, [input, selectedCategory, setCate]);

  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-gray-100 p-4">
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {Categories.map((category) => (
          <button
            key={category.id}
            className={`flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-all ${
              selectedCategory === category.name ? 'border-2 border-green-600 bg-green-100' : 'hover:bg-green-100 cursor-pointer'
            }`}
            onClick={() => setSelectedCategory(category.name)}
            aria-label={`Filter by ${category.name}`}
          >
            {category.icon}
            <span className="text-green-600 font-semibold cursor-pointer">{category.name}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Cate.length === 0 ? (
          <p className="text-gray-600 text-center col-span-full">No items match your search or category.</p>
        ) : (
          Cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;