import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Card2 from './Card2';
import { dataContext } from '../App';
import { clearCart } from '../redux/Cartslice';

function Cart() {
  const { showCart, setShowCart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (!showCart) return null;

  const handleCheckout = () => {
    dispatch(clearCart());
    toast.success('Order placed successfully!');
    setShowCart(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-xl relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
          onClick={() => setShowCart(false)}
          aria-label="Close cart"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-green-600 mb-4">Your Cart</h2>
        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {items.map((item) => (
              <Card2
                key={item.id}
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            ))}
            <div className="text-xl font-bold text-green-600">
              Total: Rs {total}/-
            </div>
            <button
              className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-400 transition-all"
              onClick={handleCheckout}
              aria-label="Proceed to checkout"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;