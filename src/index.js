import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import CartPage from './pages/cart_page/cart_page';
import InfoPage from './pages/info_page/info_page';
import ListPage from './pages/list_page/list_page';
import MainPage from './pages/main_page/main_page';
import reportWebVitals from './reportWebVitals';

const router = new createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      index: true,
      path: '/',
      element: <MainPage />
    },
    {
      path: '/bookList',
      element: <ListPage />
    },
    {
      path: '/bookInfo',
      element: <InfoPage />
    },
    {
      path: '/cartPage',
      element: <CartPage />
    }
  ],
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
