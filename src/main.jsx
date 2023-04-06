import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home';
import Shop from './components/Shop/Shop';
import Orders from './Layout/Orders';
import Inventory from './Layout/Inventory';
import Login from './Layout/Login';
import cartProductsLoader from './Loaders/CartProductsLoader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop/>
      },
      {
        path: '/orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: '/inventory',
        element: <Inventory/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
