import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onProductClick, onAddToCart, cart, onQtyChange, onRemove }) => {
  if (products.length === 0) {
    return <p className="text-center text-yellow-200">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {products.map((product, idx) => (
        <div
          key={product.id}
          style={{ animationDelay: `${idx * 60}ms` }}
          className="animate-fade-in-up"
        >
          <ProductCard
            product={product}
            onClick={() => onProductClick(product)}
            onAddToCart={onAddToCart}
            cart={cart}
            onQtyChange={onQtyChange}
            onRemove={onRemove}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList; 