import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Success from "./pages/Success/Success"
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./App.scss"

const Layout = () => {
  return(
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/success",
        element: <Success/>
      }
    ]
  }
]);

function App() {
  return(
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App