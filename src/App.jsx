import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { products as productData } from './components/products';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CartSidebar from './components/CartSidebar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const CART_KEY = 'cart';
const THEME_KEY = 'theme';
const SEARCH_KEY = 'search';
const PRICE_FILTER_KEY = 'priceFilter';
const SORT_ORDER_KEY = 'sortOrder';

function App() {
  const [search, setSearch] = useState(() => {
    try {
      return localStorage.getItem(SEARCH_KEY) || '';
    } catch {
      return '';
    }
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [priceFilter, setPriceFilter] = useState(() => {
    try {
      return localStorage.getItem(PRICE_FILTER_KEY) || 'all';
    } catch {
      return 'all';
    }
  });
  const [sortOrder, setSortOrder] = useState(() => {
    try {
      return localStorage.getItem(SORT_ORDER_KEY) || 'default';
    } catch {
      return 'default';
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  // Save search, priceFilter, and sortOrder to localStorage
  useEffect(() => {
    localStorage.setItem(SEARCH_KEY, search);
  }, [search]);
  useEffect(() => {
    localStorage.setItem(PRICE_FILTER_KEY, priceFilter);
  }, [priceFilter]);
  useEffect(() => {
    localStorage.setItem(SORT_ORDER_KEY, sortOrder);
  }, [sortOrder]);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowDetail(true);
  };

  const handleAddToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
    // setShowDetail(false); // Removed to keep modal open
  };

  const handleQtyChange = (idx, qty) => {
    setCart(prev => prev.map((item, i) => i === idx ? { ...item, count: Math.max(1, qty) } : item));
  };

  const handleRemove = (idx) => {
    setCart(prev => prev.filter((_, i) => i !== idx));
  };

  // Cart icon click handler (from Navbar)
  const handleCartIconClick = () => setCartOpen(true);

  // Toast handler
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3500);
  };

  // Checkout handler
  const handleCheckout = () => {
    setCart([]);
    showToast('Your items will reach you in 300 business years!');
    setCartOpen(false);
  };

  // Filter and sort products
  const filteredProducts = productData
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => {
      if (priceFilter === 'lt500') return p.price < 500;
      if (priceFilter === '500to2000') return p.price >= 500 && p.price <= 2000;
      if (priceFilter === 'gt2000') return p.price > 2000;
      return true;
    });
  const sortedProducts = [...filteredProducts];
  if (sortOrder === 'asc') sortedProducts.sort((a, b) => a.price - b.price);
  if (sortOrder === 'desc') sortedProducts.sort((a, b) => b.price - a.price);

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <Navbar onCartClick={handleCartIconClick} cartCount={cart.reduce((sum, item) => sum + item.count, 0)} />
      <SimpleBar className="custom-simplebar" style={{ maxHeight: 'calc(100vh - 72px)' }}>
        <section className="flex flex-col items-center justify-center py-20 bg-gray-900">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-300 mb-4 text-center drop-shadow">Welcome to MyCart</h1>
          <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">Find the best products at unbeatable prices. Search and add to your cart instantly!</p>
          <div className="w-full flex justify-center mb-4">
            <div className="relative w-full max-w-xl">
              <input
                type="text"
                placeholder="Search for products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full py-4 pl-6 pr-14 rounded-full border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-lg shadow-md bg-gray-900 text-yellow-100 placeholder-gray-500"
              />
              <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </span>
            </div>
          </div>
          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <div className="flex gap-2">
              <button onClick={() => setPriceFilter('all')} className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${priceFilter === 'all' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-200'} transition`}>All</button>
              <button onClick={() => setPriceFilter('lt500')} className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${priceFilter === 'lt500' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-200'} transition`}>&lt; ₹500</button>
              <button onClick={() => setPriceFilter('500to2000')} className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${priceFilter === '500to2000' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-200'} transition`}>₹500–₹2000</button>
              <button onClick={() => setPriceFilter('gt2000')} className={`px-4 py-2 rounded-full font-semibold cursor-pointer ${priceFilter === 'gt2000' ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-200'} transition`}>&gt; ₹2000</button>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-yellow-200 font-semibold">Sort by:</span>
              <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="rounded-full px-4 py-2 bg-gray-800 text-yellow-200 font-semibold focus:outline-none cursor-pointer">
                <option value="default">Default</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>
        <main className="px-8 pb-16 bg-gray-900">
          <ProductList
            products={sortedProducts}
            filter={search}
            onProductClick={handleProductClick}
            onAddToCart={handleAddToCart}
            cart={cart}
            onQtyChange={handleQtyChange}
            onRemove={handleRemove}
          />
        </main>
      </SimpleBar>
      <ProductDetail
        product={selectedProduct}
        open={showDetail}
        onClose={() => setShowDetail(false)}
        onAddToCart={handleAddToCart}
        cart={cart}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
      />
      <CartSidebar
        open={cartOpen}
        cart={cart}
        onClose={() => setCartOpen(false)}
        onQtyChange={handleQtyChange}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-lg font-bold text-lg z-50 animate-fade-in-up-out">
          {toast}
        </div>
      )}
    </div>
  );
}

export default App;
