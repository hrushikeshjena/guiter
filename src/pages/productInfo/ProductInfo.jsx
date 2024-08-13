// import React, { useContext, useEffect, useState } from 'react';
// import Layout from '../../components/layout/Layout';
// import myContext from '../../context/data/myContext';
// import { useParams } from 'react-router';
// import { useDispatch, useSelector } from 'react-redux';
// import { doc, getDoc } from 'firebase/firestore';
// import { toast } from 'react-toastify';
// import { addToCart } from '../../redux/cartSlice';
// import { fireDB } from '../../fireabase/FirebaseConfig';

// function ProductInfo() {
//     const context = useContext(myContext);
//     const { mode, loading, setLoading } = context;

//     const [products, setProducts] = useState(null);
//     const [isWishListed, setIsWishListed] = useState(false);
//     const params = useParams();

//     const getProductData = async () => {
//         setLoading(true);
//         try {
//             const productTemp = await getDoc(doc(fireDB, 'products', params.id));
//             setProducts(productTemp.data());
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getProductData();
//     }, []);

//     const dispatch = useDispatch();
//     const cartItems = useSelector((state) => state.cart);

//     const addCart = (products) => {
//         dispatch(addToCart(products));
//         toast.success('Added to cart');
//     };

//     useEffect(() => {
//         localStorage.setItem('cart', JSON.stringify(cartItems));
//     }, [cartItems]);

//     const toggleWishList = () => {
//         setIsWishListed(!isWishListed);
//     };

//     return (
//         <Layout>
//             <section className="text-gray-600 body-font overflow-hidden">
//                 <div className="container px-5 py-10 mx-auto">
//                     {products && (
//                         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//                             <div className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded border border-gray-200 p-2 hover:border-indigo-600 hover:shadow-lg">
//                                 <img
//                                     alt="ecommerce"
//                                     className="w-full h-full object-cover object-center"
//                                     src={products.imageUrl}
//                                 />
//                             </div>
//                             <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                                 <h2 className={`text-sm title-font tracking-widest ${mode === 'dark' ? 'text-white' : 'text-gray-500'}`}>
//                                     {products.brandName}
//                                 </h2>
//                                 <h1 className={`text-3xl title-font font-medium mb-1 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                                     {products.title}
//                                 </h1>
//                                 <div className="flex mb-4">
//                                     <span className="flex items-center">
//                                         <svg
//                                             fill="currentColor"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4 text-indigo-500"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                         </svg>
//                                         <svg
//                                             fill="currentColor"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4 text-indigo-500"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                         </svg>
//                                         <svg
//                                             fill="currentColor"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4 text-indigo-500"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                         </svg>
//                                         <svg
//                                             fill="currentColor"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4 text-indigo-500"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                         </svg>
//                                         <svg
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-4 h-4 text-indigo-500"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                                         </svg>
//                                         <span className="text-gray-600 ml-3">4 Reviews</span>
//                                     </span>
//                                     <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
//                                         <a className="text-gray-500">
//                                             <svg
//                                                 fill="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 className="w-5 h-5"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
//                                             </svg>
//                                         </a>
//                                         <a className="text-gray-500">
//                                             <svg
//                                                 fill="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 className="w-5 h-5"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                                             </svg>
//                                         </a>
//                                         <a className="text-gray-500">
//                                             <svg
//                                                 fill="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth={2}
//                                                 className="w-5 h-5"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
//                                             </svg>
//                                         </a>
//                                     </span>
//                                 </div>
//                                 <p className={`leading-relaxed border-b-2 mb-5 pb-5 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                                     {products.description}
//                                 </p>

//                                 <div className="flex items-center mb-4">
//                                     <span className={`title-font font-medium text-2xl ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
//                                         ₹{products.salePrice}
//                                     </span>

//                                     <button
//                                         onClick={() => addCart(products)}
//                                         className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//                                     >
//                                         Add to Cart
//                                     </button>
//                                     <button
//                                         onClick={toggleWishList}
//                                         className={`ml-4 p-2 rounded-full focus:outline-none ${isWishListed ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'
//                                             }`}
//                                     >
//                                         <svg
//                                             fill="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             className="w-5 h-5"
//                                             viewBox="0 0 24 24"
//                                         >
//                                             <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z" />
//                                         </svg>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </Layout>
//     );
// }

// export default ProductInfo;

// import React, { useContext, useEffect, useState } from "react";
// import Layout from "../../components/layout/Layout";
// import myContext from "../../context/data/myContext";
// import { useParams } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { doc, getDoc } from "firebase/firestore";
// import { toast } from "react-toastify";
// import { addToCart } from "../../redux/cartSlice";
// import { fireDB } from "../../fireabase/FirebaseConfig";

// function ProductInfo() {
//   const context = useContext(myContext);
//   const { mode, loading, setLoading } = context;

//   const [products, setProducts] = useState(null);
//   const [isWishListed, setIsWishListed] = useState(false);
//   const params = useParams();

//   const getProductData = async () => {
//     setLoading(true);
//     try {
//       const productTemp = await getDoc(doc(fireDB, "products", params.id));
//       setProducts(productTemp.data());
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const addCart = (products) => {
//     dispatch(addToCart(products));
//     toast.success("Added to cart");
//   };

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const toggleWishList = () => {
//     setIsWishListed(!isWishListed);
//   };

//   return (
//     <Layout>
//       <section
//         className={`text-gray-600 body-font overflow-hidden ${
//           mode === "dark" ? "bg-gray-800" : "bg-white"
//         }`}
//       >
//         <div className="container px-5 py-10 mx-auto">
//           {products && (
//             <div className="flex flex-wrap lg:w-4/5 mx-auto">
//               <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:h-auto object-cover object-center rounded border border-gray-200 p-2 hover:border-indigo-600 hover:shadow-lg">
//                 <img
//                   alt="ecommerce"
//                   className="w-full h-full object-cover object-center"
//                   src={products.imageUrl}
//                 />
//               </div>
//               <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//                 <h2
//                   className={`text-sm title-font tracking-widest ${
//                     mode === "dark" ? "text-white" : "text-gray-500"
//                   }`}
//                 >
//                   {products.brandName}
//                 </h2>
//                 <h1
//                   className={`text-2xl lg:text-3xl title-font font-medium mb-1 ${
//                     mode === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {products.title}
//                 </h1>
//                 <div className="flex mb-4 flex-wrap">
//                   <span className="flex items-center">
//                     {/* SVG Ratings */}
//                     {[...Array(5)].map((_, index) => (
//                       <svg
//                         key={index}
//                         fill={index < 4 ? "currentColor" : "none"}
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         className={`w-4 h-4 text-indigo-500 ${
//                           index < 4 ? "text-indigo-500" : "text-gray-300"
//                         }`}
//                         viewBox="0 0 24 24"
//                       >
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                       </svg>
//                     ))}
//                     <span className="text-gray-600 ml-3">4 Reviews</span>
//                   </span>
//                   <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
//                     {/* Social Media Icons */}
//                     {[
//                       {
//                         d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
//                         viewBox: "0 0 24 24",
//                       },
//                       {
//                         d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
//                         viewBox: "0 0 24 24",
//                       },
//                       {
//                         d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
//                         viewBox: "0 0 24 24",
//                       },
//                     ].map((icon, index) => (
//                       <a key={index} className="text-gray-500">
//                         <svg
//                           fill="currentColor"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           className="w-5 h-5"
//                           viewBox={icon.viewBox}
//                         >
//                           <path d={icon.d} />
//                         </svg>
//                       </a>
//                     ))}
//                   </span>
//                 </div>
//                 <p
//                   className={`leading-relaxed border-b-2 mb-5 pb-5 ${
//                     mode === "dark" ? "text-white" : "text-gray-900"
//                   }`}
//                 >
//                   {products.description}
//                 </p>

//                 <div className="flex flex-col sm:flex-row items-center mb-4">
//                   <span
//                     className={`title-font font-medium text-2xl ${
//                       mode === "dark" ? "text-white" : "text-gray-900"
//                     }`}
//                   >
//                     ₹{products.salePrice}
//                   </span>

//                   <button
//                     onClick={() => addCart(products)}
//                     className="flex mt-4 sm:mt-0 ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
//                   >
//                     Add to Cart
//                   </button>
//                   <button
//                     onClick={toggleWishList}
//                     className={`flex mt-4 sm:mt-0 ml-4 p-2 rounded-full focus:outline-none ${
//                       isWishListed
//                         ? "bg-red-500 text-white"
//                         : "bg-gray-200 text-gray-800"
//                     }`}
//                   >
//                     <svg
//                       fill="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-5 h-5"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default ProductInfo;


import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addToCart } from "../../redux/cartSlice";
import { fireDB } from "../../fireabase/FirebaseConfig";

function ProductInfo() {
  const context = useContext(myContext);
  const { mode, loading, setLoading } = context;

  const [products, setProducts] = useState(null);
  const [isWishListed, setIsWishListed] = useState(false);
  const params = useParams();

  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      setProducts(productTemp.data());
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const addCart = (products) => {
    if (products.stock > 0) {
      dispatch(addToCart(products));
      toast.success("Added to cart");
    } else {
      toast.error("Out of stock");
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const toggleWishList = () => {
    setIsWishListed(!isWishListed);
  };

  return (
    <Layout>
      <section
        className={`text-gray-600 body-font overflow-hidden ${
          mode === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="container px-5 py-10 mx-auto">
          {products && (
            <div className="flex flex-wrap lg:w-4/5 mx-auto">
              <div className="lg:w-1/3 w-full mb-6 lg:mb-0 lg:h-auto object-cover object-center rounded border border-gray-200 p-2 hover:border-indigo-600 hover:shadow-lg">
                <img
                  alt="ecommerce"
                  className="w-full h-full object-cover object-center"
                  src={products.imageUrl}
                />
              </div>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2
                  className={`text-sm title-font tracking-widest ${
                    mode === "dark" ? "text-white" : "text-gray-500"
                  }`}
                >
                  {products.brandName}
                </h2>
                <h1
                  className={`text-2xl lg:text-3xl title-font font-medium mb-1 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {products.title}
                </h1>
                <div className="flex mb-4 flex-wrap">
                  <span className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        fill={index < 4 ? "currentColor" : "none"}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className={`w-4 h-4 text-indigo-500 ${
                          index < 4 ? "text-indigo-500" : "text-gray-300"
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                    {[
                      {
                        d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                        viewBox: "0 0 24 24",
                      },
                      {
                        d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                        viewBox: "0 0 24 24",
                      },
                      {
                        d: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
                        viewBox: "0 0 24 24",
                      },
                    ].map((icon, index) => (
                      <a key={index} className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-5 h-5"
                          viewBox={icon.viewBox}
                        >
                          <path d={icon.d} />
                        </svg>
                      </a>
                    ))}
                  </span>
                </div>
                <p
                  className={`leading-relaxed border-b-2 mb-5 pb-5 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {products.description}
                </p>

                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <span
                    className={`title-font font-medium text-2xl ${
                      mode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    ₹{products.salePrice}
                  </span>
                  <div className="ml-4">
                    {products.stock > 0 ? (
                      <span className="text-green-600">In Stock</span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </div>
                  <button
                    onClick={() => addCart(products)}
                    className={`flex mt-4 sm:mt-0 ml-auto text-white ${
                      products.stock > 0
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : "bg-gray-500 cursor-not-allowed"
                    } border-0 py-2 px-6 focus:outline-none rounded`}
                    disabled={products.stock <= 0}
                  >
                    {products.stock > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                  <button
                    onClick={toggleWishList}
                    className={`flex mt-4 sm:mt-0 ml-4 p-2 rounded-full focus:outline-none ${
                      isWishListed
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0l-1.06 1.06-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78v0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default ProductInfo;
