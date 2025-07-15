import React, { useState } from 'react';

const ProductCard = ({ product, onClick, onAddToCart, cart, onQtyChange, onRemove }) => {
  const cartItem = cart?.find(item => item.id === product.id);
  const count = cartItem?.count || 0;
  const idx = cart?.findIndex(item => item.id === product.id);
  const [ripple, setRipple] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  const handleCardClick = (e) => {
    setRipple(false);
    setTimeout(() => setRipple(true), 10);
    if (onClick) onClick(product);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setWiggle(false);
    setTimeout(() => setWiggle(true), 10);
    onAddToCart(product);
  };

  return (
    <div
      className={`bg-gray-800 rounded-2xl shadow-md p-6 cursor-pointer transition relative flex flex-col items-center group border border-gray-700 min-h-[240px] sm:min-h-[300px] justify-center hover:shadow-2xl hover:-translate-y-2 transition-transform transition-shadow duration-200 hover:scale-105 active:scale-95 focus:scale-105 focus:outline-none ring-2 ring-transparent hover:ring-yellow-400/40 hover:bg-gray-700/80 shadow-pulse ${wiggle ? 'wiggle-once' : ''}`}
      onClick={handleCardClick}
      tabIndex={0}
    >
      {ripple && <span className="ripple-effect" onAnimationEnd={() => setRipple(false)} />}
      {/* Image placeholder */}
      <div className="w-20 h-20 mb-4 rounded-full bg-gradient-to-tr from-gray-700 to-gray-800 flex items-center justify-center text-3xl text-yellow-200 group-hover:scale-105 transition-transform">
        <span role="img" aria-label="product">🛍️</span>
      </div>
      <div className="font-semibold text-lg mb-1 text-center text-yellow-100">{product.name}</div>
      <div className="text-yellow-300 mb-4 text-center">₹{product.price}</div>
      {!cartItem ? (
        <button
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-5 py-2 rounded-full shadow hover:bg-yellow-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer pulse-once"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      ) : (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center bg-gray-900/80 rounded-full shadow px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            className="text-yellow-400 text-lg px-2 focus:outline-none hover:text-yellow-300 cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              if (count === 1) {
                onRemove(idx);
              } else {
                onQtyChange(idx, count - 1);
              }
            }}
          >
            -
          </button>
          <span className="text-yellow-200 font-bold px-3 select-none">{count}</span>
          <button
            className="text-yellow-400 text-lg px-2 focus:outline-none hover:text-yellow-300 cursor-pointer"
            onClick={e => {
              e.stopPropagation();
              onQtyChange(idx, count + 1);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard; 