# MyCart – Modern Shopping Cart App

A fully refurbished, visually stunning shopping cart web app built with **React** and **Tailwind CSS**. Enjoy a seamless, responsive, and interactive shopping experience with a beautiful UI and smooth cart management.

---

## ✨ Features
- **Modern Product Grid**: Spacious, animated product cards with image placeholders, search, and filter.
- **Add to Cart Anywhere**: Add products to your cart directly from the grid or detail modal.
- **Fancy Cart Sidebar**: Slide-in cart with live updates, quantity controls, remove buttons, and a modern look.
- **Cart Badge**: Cart icon in the navbar shows the number of items in your cart.
- **Product Details**: Click a product for a detailed view and quick add-to-cart.
- **Checkout Summary**: See your total and cart breakdown instantly.
- **Persistent Cart & UI State**: Cart items, search, price filter, and sort order are all saved in localStorage and restored on reload.
- **Modern Toast Notifications**: Checkout triggers a custom animated toast and clears the cart.
- **Custom Scrollbars**: Scrollbars are hidden for a clean look, but scrolling is still possible everywhere.
- **Product Filtering & Sorting**: Users can filter products by price range and sort by price (ascending/descending) directly from the hero section.
- **Mobile-First & Accessible**: Looks and works great on all devices.
- **Beautiful Hero Section**: Large search bar, heading, and subheading for a welcoming experience.
- **Merged Project Structure**: All dependencies, scripts, and documentation are unified in the main project folder.

---

## 🚀 Tech Stack
- [React](https://react.dev/) (Vite-powered)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🛠️ Getting Started
1. **Clone the repository:**
   ```bash
   git clone https://github.com/Revanthkolla16/Ignite-15.git
   cd Ignite-15
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the dev server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   The app will be running at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## 📁 Project Structure
- `src/App.jsx` – Main app logic and layout
- `src/components/` – Modular React components (ProductList, ProductCard, CartSidebar, etc.)
- `src/assets/` – Images and static assets
- `src/index.css` – Tailwind and global styles

---

## 🤠 AI-Generated Contributions
- Full UI/UX redesign and code refactor
- Modular React component structure
- Tailwind CSS integration and styling
- Documentation and code comments
- All bug fixes, refactoring, and enhancements were guided and implemented with the assistance of AI tools.
- Persistent UI state (cart, search, filters, sort) using localStorage.
- Custom animated toast notifications for checkout.
- Cross-browser, hidden scrollbars for a distraction-free UI.
- Merged and cleaned up project structure and dependencies.

---

## 🕰️ Migration & Legacy Bug Fixes
This project was originally built with HTML, CSS, and JavaScript. The following improvements were made before migrating to React + Tailwind:

### Bug Fixes (Legacy)
- **Cart Initialization**: Fixed logic to properly initialize the cart from localStorage or as an empty array.
- **LocalStorage Key Consistency**: Standardized the cart key to `cart` throughout the code.
- **Product Detail Rendering**: Corrected element ID usage and ensured product details render correctly.
- **Add to Cart Button**: Fixed event handling and parameter passing for adding products to the cart.
- **Filter Button**: Implemented missing filter logic for product search.
- **Saving to LocalStorage**: Fixed logic to only store the cart array, not a string.
- **Ensured all cart and UI state is robustly persisted and restored.**

### Enhancements (Legacy)
- **UI/UX**:
  - Added a modern cart modal/sidebar for viewing and managing cart items.
  - Improved button styles, layout, and accessibility.
  - Added feedback for cart actions and empty states.
  - Visually separated product details and improved overall layout.
- **Responsiveness**:
  - Added responsive CSS for mobile and tablet devices.
  - Ensured all components adapt to different screen sizes.
- **Code Structure**:
  - Modularized JavaScript into clear sections: product rendering, cart management, event handling, and modal logic.
  - Added comments and improved variable naming for maintainability.

---

## 💡 Future Enhancements
- Product images and categories
- Product filtering by category/price
- User authentication and order history
- Payment/checkout simulation
- Product reviews

---

## Migration Note
> **Note:** The app was fully migrated from vanilla HTML/CSS/JS to a modern React + Tailwind stack for maintainability, scalability, and a much improved user experience. All previous bug fixes and enhancements are preserved in this documentation for historical context.

For any questions or suggestions, feel free to reach out!