import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
        Welcome to Our Food Ordering App
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 text-center max-w-2xl">
        Discover a wide variety of delicious meals, from breakfast to pizza, tailored to your taste. Explore our menu and start your culinary journey today!
      </p>
      <Link
        to="/menu"
        className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-400 transition-all"
      >
        Explore Menu
      </Link>
    </div>
  );
}

export default Home;