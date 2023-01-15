import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import MainPage from './pages/main_page/main_page';

export default function App() {
  console.log('app render')

  return (
    <>
      <Header />
      <h1>Banner</h1>
      <Outlet />
      <Footer />
    </>
  );
}
