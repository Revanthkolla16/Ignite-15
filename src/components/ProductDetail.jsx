import React from 'react';

const ProductDetail = ({ product, open, onClose, onAddToCart, cart, onQtyChange, onRemove }) => {
  if (!open || !product) return null;
  const cartItem = cart?.find(item => item.id === product.id);
  const count = cartItem?.count || 0;
  const idx = cart?.findIndex(item => item.id === product.id);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-gray-800/80 backdrop-blur-xs rounded-2xl p-10 w-full max-w-md relative shadow-2xl border border-yellow-400/10 flex flex-col items-center">
        <button
          className="absolute top-3 right-3 text-yellow-400 hover:text-yellow-200 text-3xl cursor-pointer"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        {/* Large image placeholder */}
        <div className="w-28 h-28 mb-6 rounded-full bg-gradient-to-tr from-gray-800 to-gray-900 flex items-center justify-center text-5xl text-yellow-200">
          <span role="img" aria-label="product">🛍️</span>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-center text-yellow-100">{product.name}</h3>
        <p className="mb-3 text-yellow-200 text-center">{product.desc}</p>
        <p className="mb-6 font-semibold text-lg text-yellow-300">Price: ₹{product.price}</p>
        {!cartItem ? (
          <button
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow hover:bg-yellow-500 text-base font-semibold w-full max-w-xs cursor-pointer"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center bg-gray-900/80 rounded-full shadow px-3 py-1 mt-2">
            <button
              className="text-yellow-400 text-lg px-2 focus:outline-none hover:text-yellow-300 cursor-pointer"
              onClick={() => {
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
              onClick={() => onQtyChange(idx, count + 1)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail; 