import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onCartClick, cartCount }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-lg rounded-b-2xl font-sans">
      <div className="text-2xl font-extrabold tracking-tight text-yellow-300 cursor-pointer">MyCart</div>
      <button
        className="relative text-3xl focus:outline-none text-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-transform transition-shadow duration-200 cursor-pointer"
        aria-label="View cart"
        onClick={onCartClick}
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-2 py-0.5 font-bold shadow">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  );
};

export default Navbar; 