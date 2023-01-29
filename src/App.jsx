import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { CartContextProvider } from './context/cart_context';
import BannerPage from './pages/banner_page/banner_page';
import MainPage from './pages/main_page/main_page';

export default function App() {
  console.log('app render')

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
