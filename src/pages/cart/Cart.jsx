

// import { useContext, useEffect, useState } from 'react';
// import myContext from '../../context/data/myContext';
// import Layout from '../../components/layout/Layout';
// import Modal from '../../components/modal/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteFromCart } from '../../redux/cartSlice';
// import { toast } from 'react-toastify';
// import { addDoc, collection } from 'firebase/firestore';
// import { fireDB } from '../../fireabase/FirebaseConfig';

// function Cart() {
//   const context = useContext(myContext);
//   const { mode } = context;

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const deleteCart = (item) => {
//     dispatch(deleteFromCart(item));
//     toast.success('Delete cart');
//   };

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const [totalAmount, setTotalAmount] = useState(0);
//   // const [totalGST, setTotalGST] = useState(0);

//   useEffect(() => {
//     let tempAmount = 0;
//     // let tempGST = 0;

//     cartItems.forEach((cartItem) => {
//       const itemSalePrice = parseInt(cartItem.salePrice);
//       // const itemGST = itemSalePrice * 0.18; // 18% GST
//       tempAmount += itemSalePrice;
//       // tempGST += itemGST;
//     });

//     setTotalAmount(tempAmount);
//     // setTotalGST(tempGST);
//   }, [cartItems]);

//   const shipping = 100;
//   const grandTotal = totalAmount + shipping;

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const buyNow = async () => {
//     if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
//       return toast.error('All fields are required', {
//         position: 'top-center',
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     }

//     const addressInfo = {
//       name,
//       address,
//       pincode,
//       phoneNumber,
//       date: new Date().toLocaleString('en-US', {
//         month: 'short',
//         day: '2-digit',
//         year: 'numeric',
//       }),
//     };

//     var options = {
//       key: 'rzp_test_eKrFvUHKiJyWWY',
//       key_secret: 'VEU5sdxuZ6V5tyaW8nqllu9P',
//       amount: parseInt(grandTotal * 100),
//       currency: 'INR',
//       order_receipt: 'order_rcptid_' + name,
//       name: 'E-Bharat',
//       description: 'for testing purpose',
//       handler: function (response) {
//         console.log(response);
//         toast.success('Payment Successful');

//         const paymentId = response.razorpay_payment_id;

//         const orderInfo = {
//           cartItems,
//           addressInfo,
//           date: new Date().toLocaleString('en-US', {
//             month: 'short',
//             day: '2-digit',
//             year: 'numeric',
//           }),
//           email: JSON.parse(localStorage.getItem('user')).user.email,
//           userid: JSON.parse(localStorage.getItem('user')).user.uid,
//           paymentId,
//           status: 'Pending', // Initial status
//           grandTotal: grandTotal.toFixed(2) // Include grand total
//         };

//         try {
//           const orderRef = collection(fireDB, 'order');
//           addDoc(orderRef, orderInfo);
//         } catch (error) {
//           console.log(error);
//         }
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     var pay = new window.Razorpay(options);
//     pay.open();
//     console.log(pay);
//   };

//   return (
//     <Layout>
//       <div className={`h-screen bg-gray-100 pt-5 mb-[60%] ${mode === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
//           <div className="md:flex md:space-x-6">
//             <div className="w-full md:w-2/3">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item, index) => {
//                   const { title, salePrice, imageUrl } = item;
//                   return (
//                     <div
//                       className={`mb-6 rounded-lg border bg-white p-6 shadow-md sm:flex sm:justify-start ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}
//                       key={index}
//                     >
//                       <img src={imageUrl} alt="product-image" className=" rounded-lg sm:w-20" />
//                       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                         <div className="mt-5 sm:mt-0">
//                           <h2 className="text-lg font-bold">{title}</h2>
                        
//                           <p className="mt-1 text-xs font-semibold">₹{salePrice}</p>
//                         </div>
//                         <div
//                           onClick={() => deleteCart(item)}
//                           className="mt-4 flex justify-between sm:mt-0 sm:block"
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6 cursor-pointer"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                             />
//                           </svg>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p className="text-center text-lg">Your cart is empty</p>
//               )}
//             </div>

//             <div className="mt-6 md:mt-0 md:w-1/3">
//               <div className={`rounded-lg border bg-white p-6 shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
//                 <div className="mb-2 flex justify-between">
//                   <p>Subtotal</p>
//                   <p>₹{totalAmount}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p>Shipping</p>
//                   <p>₹{shipping}</p>
//                 </div>
//                 {/* <div className="flex justify-between">
//                   <p>GST (18%)</p>
//                   <p>₹{totalGST.toFixed(2)}</p>
//                 </div> */}
//                 <hr className="my-4" />
//                 <div className="flex justify-between mb-3">
//                   <p className="text-lg font-bold">Total</p>
//                   <p className="text-lg font-bold">₹{grandTotal.toFixed(2)}</p>
//                 </div>
//                 <Modal
//                   name={name}
//                   address={address}
//                   pincode={pincode}
//                   phoneNumber={phoneNumber}
//                   setName={setName}
//                   setAddress={setAddress}
//                   setPincode={setPincode}
//                   setPhoneNumber={setPhoneNumber}
//                   buyNow={buyNow}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Cart;


// import { useContext, useEffect, useState } from 'react';
// import myContext from '../../context/data/myContext';
// import Layout from '../../components/layout/Layout';
// import Modal from '../../components/modal/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteFromCart, incrementItemQuantity, decrementItemQuantity } from '../../redux/cartSlice';
// import { toast } from 'react-toastify';
// import { addDoc, collection } from 'firebase/firestore';
// import { fireDB } from '../../fireabase/FirebaseConfig';

// function Cart() {
//   const context = useContext(myContext);
//   const { mode } = context;

//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);

//   const deleteCart = (item) => {
//     dispatch(deleteFromCart(item));
//     toast.success('Item removed from cart');
//   };

//   const incrementQuantity = (item) => {
//     dispatch(incrementItemQuantity(item));
//   };

//   const decrementQuantity = (item) => {
//     dispatch(decrementItemQuantity(item));
//   };

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cartItems));
//   }, [cartItems]);

//   const [totalAmount, setTotalAmount] = useState(0);

//   // useEffect(() => {
//   //   let tempAmount = 0;

//   //   cartItems.forEach((cartItem) => {
//   //     const itemSalePrice = parseFloat(cartItem.salePrice);
//   //     if (!isNaN(itemSalePrice)) {
//   //       tempAmount += itemSalePrice * (cartItem.quantity || 0); // Ensure quantity is a number
//   //     }
//   //   });

//   //   setTotalAmount(tempAmount);
//   // }, [cartItems]);

//   useEffect(() => {
//     let tempAmount = 0;
  
//     cartItems.forEach((cartItem) => {
//       console.log('Sale Price:', cartItem.salePrice);
//       console.log('Quantity:', cartItem.quantity);
    
//       const itemSalePrice = parseFloat(cartItem.salePrice) || 0;
//       const itemQuantity = parseFloat(cartItem.quantity) || 0;
//       if (!isNaN(itemSalePrice) && !isNaN(itemQuantity)) {
//         tempAmount += itemSalePrice * itemQuantity;
//       }
//     });
    
  
//     setTotalAmount(tempAmount);
//   }, [cartItems]);
  

//   const shipping = 100;
//   const grandTotal = totalAmount + shipping;

//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const buyNow = async () => {
//     if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
//       return toast.error('All fields are required', {
//         position: 'top-center',
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     }

//     const addressInfo = {
//       name,
//       address,
//       pincode,
//       phoneNumber,
//       date: new Date().toLocaleString('en-US', {
//         month: 'short',
//         day: '2-digit',
//         year: 'numeric',
//       }),
//     };

//     const options = {
//       key: 'rzp_test_eKrFvUHKiJyWWY',
//       key_secret: 'VEU5sdxuZ6V5tyaW8nqllu9P',
//       amount: Math.round(grandTotal * 100), // Ensure amount is an integer
//       currency: 'INR',
//       order_receipt: 'order_rcptid_' + name,
//       name: 'E-Bharat',
//       description: 'for testing purpose',
//       handler: async function (response) {
//         console.log(response);
//         toast.success('Payment Successful');

//         const paymentId = response.razorpay_payment_id;

//         const orderInfo = {
//           cartItems,
//           addressInfo,
//           date: new Date().toLocaleString('en-US', {
//             month: 'short',
//             day: '2-digit',
//             year: 'numeric',
//           }),
//           email: JSON.parse(localStorage.getItem('user'))?.user?.email || '', // Handle potential null/undefined
//           userid: JSON.parse(localStorage.getItem('user'))?.user?.uid || '', // Handle potential null/undefined
//           paymentId,
//           status: 'Pending',
//           grandTotal: grandTotal.toFixed(2) // Include grand total
//         };

//         try {
//           const orderRef = collection(fireDB, 'order');
//           await addDoc(orderRef, orderInfo);
//         } catch (error) {
//           console.error('Error adding document: ', error); // Added error logging
//         }
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     var pay = new window.Razorpay(options);
//     pay.open();
//     console.log(pay);
//   };

//   return (
//     <Layout>
//       <div className={`h-screen bg-gray-100 pt-5 mb-[60%] ${mode === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
//         <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
//         <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
//           <div className="md:flex md:space-x-6">
//             <div className="w-full md:w-2/3">
//               {cartItems.length > 0 ? (
//                 cartItems.map((item, index) => {
//                   const { title, salePrice, imageUrl, quantity } = item;
//                   return (
//                     <div
//                       className={`mb-6 rounded-lg border bg-white p-6 shadow-md sm:flex sm:justify-start ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}
//                       key={index}
//                     >
//                       <img src={imageUrl} alt="product-image" className="rounded-lg sm:w-20" />
//                       <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                         <div className="mt-5 sm:mt-0">
//                           <h2 className="text-lg font-bold">{title}</h2>
//                           <p className="mt-1 text-xs font-semibold">₹{salePrice}</p>
//                         </div>
//                         <div className="mt-4 sm:mt-0 sm:flex sm:items-center">
//                           <div className="flex items-center space-x-2">
//                             <button
//                               onClick={() => decrementQuantity(item)}
//                               className="text-lg font-bold px-2 rounded border border-gray-300 hover:bg-gray-100"
//                             >
//                               -
//                             </button>
//                             <span>{quantity}</span>
//                             <button
//                               onClick={() => incrementQuantity(item)}
//                               className="text-lg font-bold px-2 rounded border border-gray-300 hover:bg-gray-100"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <div
//                             onClick={() => deleteCart(item)}
//                             className="ml-4 flex justify-between sm:block"
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               strokeWidth={1.5}
//                               stroke="currentColor"
//                               className="w-6 h-6 cursor-pointer"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                               />
//                             </svg>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })
//               ) : (
//                 <p className="text-center text-lg">Your cart is empty</p>
//               )}
//             </div>

//             <div className="mt-6 md:mt-0 md:w-1/3">
//               <div className={`rounded-lg border bg-white p-6 shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
//                 <div className="mb-2 flex justify-between">
//                   <p>Subtotal</p>
//                   <p>₹{totalAmount.toFixed(2)}</p>
//                 </div>
//                 <div className="flex justify-between">
//                   <p>Shipping</p>
//                   <p>₹{shipping}</p>
//                 </div>
//                 <hr className="my-4" />
//                 <div className="flex justify-between mb-3">
//                   <p className="text-lg font-bold">Total</p>
//                   <p className="text-lg font-bold">₹{grandTotal.toFixed(2)}</p>
//                 </div>
//                 <Modal
//                   name={name}
//                   address={address}
//                   pincode={pincode}
//                   phoneNumber={phoneNumber}
//                   setName={setName}
//                   setAddress={setAddress}
//                   setPincode={setPincode}
//                   setPhoneNumber={setPhoneNumber}
//                   buyNow={buyNow}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }

// export default Cart;


import { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart, incrementItemQuantity, decrementItemQuantity } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import { addDoc, collection } from 'firebase/firestore';
import { fireDB } from '../../fireabase/FirebaseConfig';

function Cart() {
  const context = useContext(myContext);
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success('Item removed from cart');
  };

  const incrementQuantity = (item) => {
    dispatch(incrementItemQuantity(item));
  };

  const decrementQuantity = (item) => {
    dispatch(decrementItemQuantity(item));
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let tempAmount = 0;

    cartItems.forEach((cartItem) => {
      const itemSalePrice = parseFloat(cartItem.salePrice) || 0;
      const itemQuantity = parseFloat(cartItem.quantity) || 0;
      if (!isNaN(itemSalePrice) && !isNaN(itemQuantity)) {
        tempAmount += itemSalePrice * itemQuantity;
      }
    });

    setTotalAmount(tempAmount);
  }, [cartItems]);

  const shipping = 100;
  const grandTotal = totalAmount + shipping;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const buyNow = async () => {
    if (name === '' || address === '' || pincode === '' || phoneNumber === '') {
      return toast.error('All fields are required', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }

    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }),
    };

    const options = {
      key: 'rzp_test_eKrFvUHKiJyWWY',
      key_secret: 'VEU5sdxuZ6V5tyaW8nqllu9P',
      amount: Math.round(grandTotal * 100), // Ensure amount is an integer
      currency: 'INR',
      order_receipt: 'order_rcptid_' + name,
      name: 'E-Bharat',
      description: 'for testing purpose',
      handler: async function (response) {
        console.log(response);
        toast.success('Payment Successful');

        const paymentId = response.razorpay_payment_id;

        const orderInfo = {
          cartItems,
          addressInfo,
          date: new Date().toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          }),
          email: JSON.parse(localStorage.getItem('user'))?.user?.email || '', // Handle potential null/undefined
          userid: JSON.parse(localStorage.getItem('user'))?.user?.uid || '', // Handle potential null/undefined
          paymentId,
          status: 'Pending',
          grandTotal: grandTotal.toFixed(2) // Include grand total
        };

        try {
          const orderRef = collection(fireDB, 'order');
          await addDoc(orderRef, orderInfo);
        } catch (error) {
          console.error('Error adding document: ', error); // Added error logging
        }
      },
      theme: {
        color: '#3399cc',
      },
    };

    var pay = new window.Razorpay(options);
    pay.open();
  };

  return (
<>
<Layout>
      <div className={`h-screen bg-gray-100 pt-5 ${mode === 'dark' ? 'bg-gray-900 text-white' : ''}`}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="">
              {cartItems.length > 0 ? (
                cartItems.map((item, index) => {
                  const { title, salePrice, imageUrl, quantity } = item;
                  return (
                    <div
                      className={`mb-6 rounded-lg border bg-white p-6 shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}
                      key={index}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <img src={imageUrl} alt="product-image" className="rounded-lg w-full sm:w-20 object-cover" />
                        <div className="sm:ml-4 flex flex-col sm:flex-row sm:justify-between w-full mt-4 sm:mt-0">
                          <div className="mb-4 sm:mb-0">
                            <h2 className="text-lg font-bold">{title}</h2>
                            <p className="mt-1 text-xs font-semibold">₹{salePrice}</p>
                          </div>
                          <div className="flex flex-col sm:flex-row items-center">
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => decrementQuantity(item)}
                                className="text-lg font-bold px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                              >
                                -
                              </button>
                              <span>{quantity}</span>
                              <button
                                onClick={() => incrementQuantity(item)}
                                className="text-lg font-bold px-2 py-1 rounded border border-gray-300 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <div
                              onClick={() => deleteCart(item)}
                              className="ml-4 flex items-center cursor-pointer"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-lg">Your cart is empty</p>
              )}
            </div>

            <div className="mt-6 md:mt-0 md:w-1/3">
              <div className={`rounded-lg border bg-white p-6 shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : ''}`}>
                <div className="mb-2 flex justify-between text-sm md:text-base">
                  <p>Subtotal</p>
                  <p>₹{totalAmount.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <p>Shipping</p>
                  <p>₹{shipping}</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-3 text-lg font-bold">
                  <p>Total</p>
                  <p>₹{grandTotal.toFixed(2)}</p>
                </div>
                <Modal
                  name={name}
                  address={address}
                  pincode={pincode}
                  phoneNumber={phoneNumber}
                  setName={setName}
                  setAddress={setAddress}
                  setPincode={setPincode}
                  setPhoneNumber={setPhoneNumber}
                  buyNow={buyNow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
</>

   
  );
}

export default Cart;
