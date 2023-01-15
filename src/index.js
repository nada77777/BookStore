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
  // <React.StrictMode>
  <RouterProvider router={router} />,
  {/* </React.StrictMode> */ }
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//A025DF0B0A711C8F7D0EAA95279752550684350504943E895973008184AC0561