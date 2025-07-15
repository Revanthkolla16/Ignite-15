import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartSidebar = ({ open, cart, onClose, onQtyChange, onRemove, onCheckout }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} rounded-l-2xl flex flex-col`}>
      <div className="flex items-center justify-between p-5 border-b border-gray-800 bg-gray-900 rounded-tl-2xl">
        <h2 className="text-xl font-bold text-yellow-300">Cart</h2>
        <button onClick={onClose} className="text-3xl text-yellow-400 hover:text-yellow-200 cursor-pointer">×</button>
      </div>
      <div className="p-5 flex-1 overflow-y-auto bg-gray-800 cart-sidebar-scroll">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[73vh] max-h-[73vh]">
            <FontAwesomeIcon icon={faShoppingCart} className="text-yellow-400 mb-4" style={{ fontSize: '3rem' }} />
            <p className="text-yellow-200 text-center text-base">Your cart is empty.</p>
          </div>
        ) : (
          cart.map((item, idx) => (
            <div key={item.id} className="flex items-center justify-between mb-6 bg-gray-900 rounded-lg shadow-sm p-3">
              <div>
                <div className="font-semibold text-base text-yellow-100">{item.name}</div>
                <div className="text-xs text-yellow-300">₹{item.price}</div>
              </div>
              <div className='flex'>
              <div className="flex items-center bg-gray-800/80 rounded-full shadow px-2 py-1">
                <button
                  className="text-yellow-400 text-lg px-2 focus:outline-none hover:text-yellow-300 cursor-pointer"
                  onClick={() => onQtyChange(idx, Math.max(1, item.count - 1))}
                >
                  -
                </button>
                <span className="text-yellow-200 font-bold px-3 select-none">{item.count}</span>
                <button
                  className="text-yellow-400 text-lg px-2 focus:outline-none hover:text-yellow-300 cursor-pointer"
                  onClick={() => onQtyChange(idx, item.count + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => onRemove(idx)} className="text-red-400 text-lg ml-2 hover:text-red-300 transition-colors cursor-pointer">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
            </div>
          ))
        )}
      </div>
      <div className="p-5 border-t border-gray-800 bg-gray-900 rounded-bl-2xl font-bold text-lg flex items-center justify-between">
        <span className="text-yellow-200">Total:</span>
        <span className="text-yellow-300">₹{total}</span>
      </div>
      {cart.length > 0 && (
        <div className="p-5 bg-gray-900 border-t border-gray-800 flex justify-center">
          <button
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-8 py-3 rounded-full shadow transition-colors text-lg w-full max-w-xs cursor-pointer"
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar; 