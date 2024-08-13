import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductListPage/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
