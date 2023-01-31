import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { CartContextProvider } from './context/cart_context';
import BannerPage from './pages/banner_page/banner_page';

export default function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <BannerPage />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </>
  );
}
