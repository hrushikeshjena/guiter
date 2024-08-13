/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from './pages/order/Order';
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from "./pages/admin/page/AddProduct";
import UpdateProduct from "./pages/admin/page/UpdateProduct";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from "./pages/allproducts/Allproducts";
import ContactUs from "./components/contactUs/ContactUs";
import Loader from "../src/components/loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <MyState>
      {isLoading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            } />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/productinfo/:id" element={<ProductInfo />} />
            <Route path="/allproducts" element={<Allproducts />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orderes" element={<Order />} />
            <Route path="/contactpage" element={<ContactUs />} />
            <Route path="/addproduct" element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            } />
            <Route path="/updateproduct" element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            } />
            <Route path="/*" element={<NoPage />} />
          </Routes>
          <ToastContainer />
        </Router>
      )}
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));
  if (admin.user.email === 'zounds2024.musik@gmail.com') {
    return children;
  } else {
    return <Navigate to='/login' />;
  }
}
