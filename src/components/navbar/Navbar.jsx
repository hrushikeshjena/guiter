// /* eslint-disable react/no-unescaped-entities */
// /* eslint-disable react/no-unknown-property */
// import { Fragment, useContext, useState } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// import { Link } from 'react-router-dom'
// import { BsFillCloudSunFill } from 'react-icons/bs'
// import { FiSun } from 'react-icons/fi'
// import myContext from '../../context/data/myContext'
// import { RxCross2 } from 'react-icons/rx'

// import { useSelector } from 'react-redux';



// export default function Navbar() {
//   const [open, setOpen] = useState(false)

//   const context = useContext(myContext)
//   const { toggleMode, mode } = context

//   const user = JSON.parse(localStorage.getItem('user'))

//   const logout = () => {
//     localStorage.clear('user')
//     window.location.href = "/"
//   }
  


//   const cartItems = useSelector((state) => state.cart)


//   return (
   
//     <div className="bg-white sticky top-0 z-50">
//       {/* Mobile menu */}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>
    
//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
//                 <div className="flex px-4 pb-2 pt-28">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <RxCross2 />
//                   </button>
//                 </div>
//                 <div className="space-y-6 border-t border-gray-200 px-4 py-6">
//                   <Link to={'/allproducts'} className="text-sm font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
//                     All Products
//                   </Link>
//                   <div className="flow-root">
//                     <Link to={'/'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
//                       Order
//                     </Link>
//                   </div>
    
//                   {user?.user?.email === 'zounds2024.musik@gmail.com' && (
//                     <div className="flow-root">
//                       <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
//                         Admin
//                       </Link>
//                     </div>
//                   )}
    
//                   {user ? (
//                     <>
//                       <div className="flow-root">
//                         <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
//                           Logout
//                         </a>
//                       </div>
//                     </>
//                   ) : (
//                     <div className="flow-root">
//                       <Link to={'/login'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
//                         Sign In
//                       </Link>
//                     </div>
//                   )}
//                   <div className="flow-root">
//                     <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
//                       <img
//                         className="inline-block w-10 h-10 rounded-full"
//                         src="data:image/jpeg;base64,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"
//                         alt="Dan_Abromov" />
//                     </Link>
//                   </div>
//                 </div>
//                 <div className="border-t border-gray-200 px-4 py-6">
//                   <a href="#" className="-m-2 flex items-center p-2">
//                     <img
//                       src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
//                       alt=""
//                       className="block h-auto w-5 flex-shrink-0"
//                     />
//                     <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
//                     <span className="sr-only">, change currency</span>
//                   </a>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>
   
//       {/* desktop  */}
//       <header className="relative bg-red">
//         {/* <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
//           Get free delivery on orders over ₹300
//         </p> */}

//         <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 shadow-xl" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '#acaef5', color: 'white' }}>
//           <div className="">
//             <div className="flex h-16 items-center">
//               <button
//                 type="button"
//                 className="rounded-md p-2 text-white lg:hidden"
//                 onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '#acaef5', color: 'white' }}
//               >
//                 <span className="sr-only">Open menu</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//               </button>

//               {/* Logo */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to={'/'} className='flex'>
//                   <div className="flex ">
//                     <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>Zound's Musik</h1>
//                   </div>
//                 </Link>
//               </div>

//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

//                   <Link to={'/allproducts'} className="text-lg font-medium" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
//                     All Products
//                   </Link>
//                   <Link to={'/orderes'} className="text-lg font-medium" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
//                     Order
//                   </Link>

//                   {user?.user?.email === 'zounds2024.musik@gmail.com' ?
//                     <Link to={'/dashboard'} className="text-lg font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : 'black', }}>
//                       Admin
//                     </Link> : ""
//                   }


//                   {user ? <a onClick={logout} className="text-lg font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : 'black', }}>
//                     Logout
//                   </a> : <Link to={'/signup'} className="text-lg font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : 'black', }}>
//                     Signup
//                   </Link>}

//                 </div>

//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
//                     <img
//                       src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
//                       alt=""
//                       className="block h-auto w-8 flex-shrink-0" // Increased size here
//                     />
//                     <span className="ml-3 block text-lg font-medium" style={{ color: mode === 'dark' ? 'white' : 'black' }}>INDIA</span>
//                   </a>
//                 </div>
//                 <div className="hidden lg:ml-8 lg:flex">
//                   <a href="#" className="flex items-center text-gray-700 ">
//                     <img
//                       className="inline-block w-10 h-10 rounded-full"
//                       src="data:image/jpeg;base64,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"
//                       alt="Dan_Abromov" />
//                   </a>
//                 </div>

//                 {/* Search */}
//                 <div className="flex lg:ml-6">
//                   <button className='' onClick={toggleMode}>
//                     {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
//                     {mode === 'light' ?
//                       (<FiSun className='' size={30} />
//                         // eslint-disable-next-line no-constant-condition
//                       ) : 'dark' ?
//                         (<BsFillCloudSunFill size={30} />
//                         ) : ''}
//                   </button>
//                 </div>

//                 {/* Cart */}
//                 <div className="ml-4 flow-root lg:ml-6">
//                   <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
//                     </svg>
//                     <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
//                     <span className="sr-only">items in cart, view bag</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }





/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-unknown-property */
import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/data/myContext";
import { RxCross2 } from "react-icons/rx";

import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { toggleMode, mode } = context;

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link
                    to={"/allproducts"}
                    className="text-sm font-medium text-gray-900"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Order
                    </Link>
                  </div>

                  {user?.user?.email === "zounds2024.musik@gmail.com" && (
                    <div className="flow-root">
                      <Link
                        to={"/dashboard"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Admin
                      </Link>
                    </div>
                  )}

                  {user ? (
                    <>
                      <div className="flow-root">
                        <a
                          onClick={logout}
                          className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                          style={{ color: mode === "dark" ? "white" : "" }}
                        >
                          Logout
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="flow-root">
                      <Link
                        to={"/login"}
                        className="-m-2 block p-2 font-medium text-gray-900"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Sign In
                      </Link>
                    </div>
                  )}
                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="Dan_Abromov"
                      />
                    </Link>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-red">
        {/* <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over ₹300
        </p> */}

        <nav
          aria-label="Top"
          className="px-4 sm:px-6 lg:px-8 shadow-xl"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "#acaef5",
            color: "white",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md p-2 text-white lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor:
                    mode === "dark" ? "rgb(80 82 87)" : "#acaef5",
                  color: "white",
                }}
              >
                <span className="sr-only">Open menu</span>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"} className="flex">
                  <div className="flex ">
                    <h1
                      className=" text-2xl font-bold text-black  px-2 py-1 rounded"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Zound's Musik
                    </h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={"/allproducts"}
                    className="text-lg font-medium"
                    style={{ color: mode === "dark" ? "white" : "black" }}
                  >
                    All Products
                  </Link>
                  <Link
                    to={"/orderes"}
                    className="text-lg font-medium"
                    style={{ color: mode === "dark" ? "white" : "black" }}
                  >
                    Order
                  </Link>

                  {user?.user?.email === "zounds2024.musik@gmail.com" ? (
                    <Link
                      to={"/dashboard"}
                      className="text-lg font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "black" }}
                    >
                      Admin
                    </Link>
                  ) : (
                    ""
                  )}

                  {user ? (
                    <a
                      onClick={logout}
                      className="text-lg font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "black" }}
                    >
                      Logout
                    </a>
                  ) : (
                    <Link
                      to={"/signup"}
                      className="text-lg font-medium text-gray-700 cursor-pointer  "
                      style={{ color: mode === "dark" ? "white" : "black" }}
                    >
                      Signup
                    </Link>
                  )}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a
                    href="#"
                    className="flex items-center"
                    style={{ color: mode === "dark" ? "white" : "black" }}
                  >
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-8 flex-shrink-0" // Increased size here
                    />
                    <span
                      className="ml-3 block text-lg font-medium"
                      style={{ color: mode === "dark" ? "white" : "black" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISEhAVEhAVFhYVFRcWEhYVFRUQFRIWFxUVFRUYHiggGBolGxUVITEhJSorLy4vGB8zODMtNygtLi0BCgoKDg0OGBAQFysdFR0rKy0tLSstLSsrLSstLSstKy0tLS0rLS0tLSstLS0tLS0tLTcrLTctKys3NzctNy0rK//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAFAgMEBgABBwj/xABIEAABAwIDBAUHCQUIAQUAAAABAAIRAyEEEjEFQVFxBhMiYbEHIzIzc4GRFDRCUnKSobLRFVOCwfAWJCVDYnTC4aI1ZLPD8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EAB8RAQEAAgMAAwEBAAAAAAAAAAABAhESITEDE0FRIv/aAAwDAQACEQMRAD8A7a9gIggEd6re1Oh1J8uonqX912E97d3uVnWI0HHekuGq4WOvbDSYDx6JPDuKYwmKaWgg2Vt8s1IHZzp3VGHxQPo1sJpwlF2pLAfwWdxVsLxlKnUEOAPeq3j9mFl29pq6BV2SBuUWtgBBspsOZaFPIt83xHtv/rauirn3khEU8WOFf/g1dBWmPicvUfHerfyPghuwfUM5InjfQdyPghmwPUM5J0k54UHDmKb/AHqe5Ca9TLSqe9BU1gMMHMJjUoH0hwIDSSLKzbEHmhyQ3pdR8w+NYKmzpUcS6ZbHB84wbr8lRKjV0vD4ovBpvF+9U/pBss03FwHZJU438XlATD0ZIHFXLZ2y8jAc0oBs7DzBVvw4BYAnl2WPRVGm1SBTakMYpGHoF7msb6TiGjmTAWWo03Vq8mWDacWakerpuP8AE6Gj8CVc9odM8HRZD6va+qLumfgqW7Z2EwcjE4lznaOax+Rp7rdp34IfU6ZYSl81w0O45GN/8jLlUupqFZu7oxtDptiqgPU0q2XccmUfGJVNxYxOJc4vcxgGpqPAj3uun8V0sq1DIpsbO8lzz+JhRHbXqu1eByY0fjEo7o6QMRs2kzXEU3u/0Co//jCmYHZ1GoI+Uva7h8mcG/fLh4JylVJ1cT71MplK4ynMrEfFbJw7Yy1a73b4ptAnmSoBwNRx7OYD/VUv8GhGHhKoWKnjFcqEHYTvpuj3k+KkV9i4eAGMeXb3Ofqe4SjDm5k5SwJKcwibnVZOwm7mf+SjVth1foNa0c5V5pbOO8/iFjsLSb6T2jm4KuMTyqgjZOJG5h5FZ+y8T9UfFXartPCs/wAxpPdfwTH9oMP3/dKNHt3NYsWLdipPleH+HP8Ats8SnOidP+5Yf2bfBa8rQ/w6p9pninuiA/uWH9m3wCkH6+GQ7EYWxR57VGrUrFKmBeSkQMaOGIP5Ar8qJ5MBfHj/ANwfyBXtVj4L6Yxp7DuR8EM6P+oZyRLHeg7kfBDej/qGckEIOVYxlf1rVZ3KqV29usgqNbD9U3kl7TohzSDoVrYg80EvadTKwngEvw3MtobEb8oIaNyG9KcHhxSLar2tcQIB9K5gEDXVXIVWN67EVJ6tjS8mJORjZMfBcT27tl2JrPxDuy11qYP0WT2YHGP5rORpabo5aQcfSgkCN8cEV2NtWkwPNaKhOjGZnFvdDW+JVXq4kRdx4wN/2j/JZ+1XBuVvZb9UEgfgr0W3RdlbToV3Fgw9SjAmXtcA4b4MQESik0hzSJBkEcQVypm3cQIy1ngDQZiRHxWsJtCDcvaDMuY8ggnflNjySuI2uW3tmGrVdWbWOZxkhxNu4dyl7I8n+0a1MVaXVlh0zvDSe8CFC2NXbWyMbU6x5IaSRldJMSW+9ei9m4VtKkym0QGtA+ARILXBcR0P2pT9LDNI7iDpyKGVMNiWelRa3mHBei3Vm5iCRrF1X+nGzqD6Lnl7WOa08L20KmxUritLEVdzaf3ipbcRXj0WfeQp1MNcS0yE1XrHQGyzt00xx2NjGVj+7+Kz5VW+tTCA4Ss1sybqV14OiJkLiJOxtUa12jkFH/axNvlbj3NCGYkPIIAQilhajXTlsrlRViqbUZvqV3/xR/NRKm1ae6iT9p8qC8JotWfOtOMTHbYf9FlNnJsn4lN/tmt9cfdaoxbCblHKjUewFixYutyqd5Vx/h1X7TPzJ7od8yw3s2/lCa8qv/p1Xm3xTvQ35lhvZt/KEgLOCaqNspBCbeEgrnk19PaH+4P5ArwqP5OPWbQ/3H/EK8J4+HfTGM9B3I+CGdH/AFDOSJY30Hcj4IbsD1DOSCESqpiKkPrK1lVbEsvWKCozsQ+abySNv+qcl7D9U3kmek4/u9SNcpSvhxRenmPZQ2e9oN60Uo3kOHaA4WEe9cv2T0Xr4oPexsUmWL4sDwA3lWPFUKmKqYahUdDc/C94B/BXuG0WCjTtTaIgd3iVnctRvjhyrlFXosxvpEuPw8ELxOwWi4JC6PtSnMmIVax7Fh9mUvrf68deKHi8MWnvGv6qOUd2gy8oJWbB7v5Lpwy3HLnjxol0Y2mMNiqFdwzNpvBO85J7UC14XpWr0zpuosq0y3LUY1zS4kHK4AiW7j3LyvScAQXNLm7wDBI7iu69AugNDEYSm+u17ARNMtxQqNqU3XDhlAyxpBG5PLf4nHX6RtbaQrOmpiSBwYS3wQmrhcK4yXPce9zneJVix3QnBUg7+8uDhpLh4Qqhi8Jk9EucOMahY1tBR+DwhaA2ic3FQx0fY46WQ041zdzvgls2y7i74JdH2Jnoqw7oTf8AY4TIqQh1TbFT6xTI2rUm5Mc1UkTbR3+yYj18fBQcVsEs0xAP8KDnatQ7z8UzVxrzvhTyiuFIxmHcDcCOIUIiE/1xm5lN14Wdu6uTURahTacISOrKonsFYsWSuxyKh5Vf/Tq3Nn5k70M+ZYb2bfAJjyrn/Dqv2meKe6F/MsN7NvgEgNFJdolpLkBWfJz6zaH+4/4hXdUjydet2j/uP+IV2Rj4d9MY30Hcj4IbsD1DOSI48+bfyPgh3R/1DOSCECgNSn61Hig+W1RBVL2MPNhNdIT5l/JO7I9WEjbg82UU3L8EZxzLRkGn8BJJ95CNY2qGS55DR3kD8SmBRNPH1XZZaabTNhlbkacxnW7ctt55qo9Igw5nVi6pVk6SQ3fln3rDKN8c+IlisZTeTke13JwKCbRqsa25AQvZjwTLGwRAuIsSB7/+k7jKMYgB8uZBMOjUC2g96y4dt78msdg2LxDDpP3THxQfF0jHdcgqx44RJbRkcSLoTkBDrZeI3TOq2x/y57eU2hbPohxgifod4c8EMP3l1LYPSV+GwtOhTommAJINQnK913xewmfiqd0KwOY13RYZW++Sf0VmdgVWXacdRIqdJajtWhN/tpx1A+CYOBCQcEFHFfKJg2nTOrR+C2NsUR9AH4IecGFEpYIZiiY6Fy2J1trUnf5Y+KiGnTeCQIWxhRwSqDIDkUY6BciS9Le66aeVz/roILU09qkwkZU5S0ZaxahO1Cm5T2WnrZaWLF3OJTPKy7/D3/ab4qV0L+Y4b2bfAKF5Wz/h7/tNUzoX8yw3s2+CVA2tHetpLtEBV/J27z20f9x/xCvEqheTw+f2h7c+AV6JRPBfTG0XebfyKgdHvUU+SlbUd5p/2SonR71FPkmX6JFCQ61TmipQabVeZSFTdkerCTtn1a3sj1YWtseh70GqGOr0q73lkh9NhokmYLm1GnSNxBHvQDauBawQahpt1LbC51vF0Rql9DE1G/5RzOHtHvz6co+CqvSXavWVOqzQJlx4NnxN1yZW26duOGMidgMCw5cjYYTJcSAXRvgmYQDpezzhc0gEGx3f1Cdx+EzhppsED0XucGxxLZP4hV3bmGrP9Ko3lmkO4GwRMe52dy6s0m4KoxzjTd2iN82I7ioW2KIB7IgdyF0jUp7geRUp2ONRhzek0xPEGf0V8bLtnLNaNbNxr6TwWPcB1gLmgmDJAMt3yLLpuIDVzPYGCNbENAEgEOd9lpB8YHvV/fRdxV9s9QpxCQ4jimzhjxTb8KeKB0U544pl1RoWnYQ8VBGEJfBNkF0l/KWpWHIOaEz8gCcwlKMynJWILVFzzSJghLdqeZWsi53QkVGgiygvspMwmcRUBHegVFeUlKMJHWBUl62WFJL026qu5xKd5XD/AHB32mqf0M+ZYb2bfAIP5Wq84Ej/AFBF+hnzLDezb+UJUDa07QrFp2hQFT8nfr9oe3PgFelzzoDUjEY/2x/kr11qJ4L6a2v6p/2SovR71FPkFrbVXzVT7JWdHvm9P7ITpQSKDA9mrzKMFAXutV5lIUT2QfNhI2x6HvW9jnzYSdsnse9Bq109ww+TMqgdprmgnflIIH4rl1fDdY/O1wzGNRIzNmxG8QV3TG4FtfDuou9F7YneDuI5GFxHaFGrhaxpVWw9rpNrFs2eDvBhZZ497jf48+tUW2Fg2BrnYrDvxNYn6wbRDZtEXA9y3tqthSCGbOpiIv1ndB+j705UqufSBpPyv3bweIIVOxzsVJDoGu4rL1vuQN2qym6pLGZOIDpGg3/FQq9UZYHGfhu8U5ijlBkyeKFZyVpjNsM8tV0LyY4YOp4moQPTa0GL+jJE+8K21KAVP6D4otw5YzdUdm7yQCCfdA9yOOrvKVt31BJP2pbwAkdUCoD2PJmVrNUCctKyf1LdSCb+TTcKC41L3UeliqodCey1ErGscwSUjCPBzJnFdZUEOK3s+kQXKclYhVWh2jzKYxb4aYT9Woczh3lQ8a7slc/66PwAftF8lMPxjuKadqUhy7ZjP44rlf6edi3Hekde7imlifGFuvZlUmE1BIW2V0tpkKiULyqMjB/xBWPod8yw3s2/lCrnlZafkndmH81Y+iHzPD+zb+UJbAytO0KxacbFAUXoO+MRjvbFXkPXPehzj8pxvtXeKvYfZTj4eXqHtt/mqnIqV0e+b0/shDNuE9VU5FEuj/qKf2QqIRKr1U2q81YCVW6z7VeaCoxsY+bCTtk9j3rNjHzQSdtHse9BpeH9EclQfKLgmVn39NrQMw1BuYPdcK+YdwytnfYd5VN8oVPq6tOr9Gp5t15AqNDizlLQ74BR8m+LT4tcu3LDjHUZYXEGdxOncUNxe2s0/wBf0VZdo4JryczQ4H+rFVnHbJaDZsDmSs5ljWtxyniv16hcUukyFLqYS8AJNanlCrlPxEx/op0UxTmVXkeiG9oTY38YBXRaIa9rXt9FwkfoqVsjAGlQBeIfV7R4tbbLbl4o1s/a5oebLczDcXEg7/HuTTR8UQkvw/co37TDh2b/ANcEmltJwEFqm2nIS8iY3pr5OJnem/lXaLiPwUaptI5rBPZ6TqlONQmMPBLoTWK2i5wjKmNjsdLpU5KxgYaBzv5lM4yl2Spjn9t47ym8Y2Glc2/9N9dKNUFzzTbk5W9J3NNuXoRw0hbhYtpk9fYi2gSqVeBdPMghNYmjIMJBSPKxiAcHH+oeBVl6J/M8P7Nv5QqR5T2kYcA/W/VXfot80w/s2/lCQFpWnaHkslJebHkgOf8AQ75xjPau8VcwSqV0OcevxftXeKvTNFONVkG7cnqanIol0fPmKf2Qoe2XDqKnIqVsA+Yp8gqSIuNiqxXNqvNWVxsUEp4MvFT6IJ1Onu4plU/Yp801O4uk18NdpN7xCimoKdOGGGtkFzrFxGuUe5ZRZmvdwcQBeG3g5m8v5WCcg2kN9YLwxrRlbvzOOpPGPFQumGzhXw1WkZOYS0jVlVsGmR/EApePxrKbu25rYjKDrn3R7re9UvpX0pxGZjKLWtpPu58B7iZO42AEd8os3BLpRaGMLpY+1RtnDv4+9JxZkIjtvZT6rRiWiMU21ZgECoyJD2gfSE7raoE2pOtu7eOa488ONdvx58oh1KN5hSdgbH6+rJE02H3F+sT3CXe4cUUwmCZlL6pc2k2JytlznHRre835J+ptOtAbhgKDBIa0BromD2jHaNrrT48be6j5cpOoVj8udwvDYaOySd+nfIif9Peh20aFmnQNyzxgmJt/V1LoYl5M1GlxdJzCA6OJbzO6Fldgc10HM0AzMyJM3EgRpuPNb66c2zWBpuiwnjESCTJ3d6I0axsCJ57uHA+9RtlXAi0/+UQYJ0G5GcOwERdwkyZkhpNnAnd8SEoKj5WH+rfFNHAtmVOq4QZWGL30toCZjNcaCAtVsObgHTceBNpjkUXE5khOw7UnD0wHHksc4wSBMC5trvhRdl4vNUcDuWWfTbDsOrCKj+ajYy4Kl45h6x0cUzWonKVyX11SdKHXHadzTZRjEbKOY96ZqbKcF2z5MdOK/HkFlaU52zjK3+zXKvsx/pcMnqyniC0xlMKS7E20TJriR2SpJAI0VIc68rlYHDNjXP8AyKt3Rr5rQ9m3wCpXlcpZaDDuzfqrt0d+bUPZt8AkBKVp5seSxJqGx5HwQFA6GHzuL9s7xV1DyqL0RnrMUR+9d+ZWs4sqIeV7Zt4+YqciiGwfUU+QVc29iz1L+Ss/R0Rh2OvpaNVcJLfa3vO/4KLi3QA2+Z0Ab8s98Wt3JypVBqEAZpGndMaG0WPwQWpiHF5EgzxaYLmgBtxAsRoJPeIV6LZ/GVMxDBYA3IiI+rI9GC4d5vqiGHEBugb2QBliBaDuy2GiFVXiSQ3MW2dlBJiRLf1HCLFFsMzLA0EEdlsCBOUd0Dw3WBZBXSLAmo9sbidYFplzrcJKj19jU30yx8H4EkEkZhI33ueHeiuPklriSIN+GQiCDMSIueC3hn6kCCZbBBFwARDgLi4vpw3oAF+zQwiSJAcWmJzSQQI1sImOO5V7pRsLOyo+mya7CC0AAE2zPZIEGQZEnWBIVyYGkAy1zZzS4zLgSHGbcAB+KBdLq7mUgyS3rSGEg36oAud2fomSGmErJZ2MbZdxUa2MzMbhqADmxFR4vmeSHHJ3WAnfGgF0Ro7Ky0g5sBzoIzNM5yAJcBcm4/VPbF2WGljiMpLiL69lrrm+gzA2/kjrmDKXTILCI9KWkQ0ugmYvJBgg9yOOhct3YKzZjW2LWybNEXi1yI467tEw/AtFOo7KG8Zsc4JEk3ndpJsj5b2stvRGjoOaYaA28NIad/uUeq3MJDtHEWuTEF7YJPwiRlKNFsBpYLKIuIi8zrBMA7pECyIYKnEkXvf0YBFspOv9G+5KdQHYkWIJG+LE5srjJOgi6lsZAdBDXWcTDZ+qMw3zB10tCNHtHptbvDcmVttZJmzZFxoALa6aLe0xlaZgExEEHMXA9kt1EEaf9wrAm5dAHnN5LQSXAGZmTrFlB2/UDqtKkPRyyIN4I7PaFzv8d6KEKlSOQneSZkQ4kdltg6TE7+PFQBlbUDrDMPxPHhvRvagyMp0/8wkuIBIkECAbxOqEbXplrntMW7WhkgtF/jKzzm2mF0GYl/nXhK3KKXHrCTrAUiJ1XBn1XfjdwMxbTMpqZsplcXTVNl0pRo2zCrfUBS3myjR3p7pPRBoglPZwAgdTaBmyZq41zl6G3nbVbyv4oOw7ANc38irrsD5tR+w3wXOfKYyKLO9y6PsT5vR+w3wQacUmqeyeR8FspFY9l3I+CA550Td28T31X+KsgVW6Kjt1/aP/ADKzqMRn6H7ePmX8lesLQ6unSpx6LWj+MaiPjdVJ2Gzvps3OqMB5ZgSrTiqsuPaAIMCYPpAaDjY/BaSFETHPIOYkkgy20AkjsjfxiUFx5Da0jRxL7/W0i/o2M2j8UW2gw5D2fRaTAvIaeyAI4CbcN6HU6ed4qBxDcrHRAnLkiGgQbwLm/ZsFaal7PgtDiL2AguIhxlsiJFiJJH4IgyRpO8mZ9MQJI3A62CZBMSbNhxIE5gLXEX5jksABJIaHTlcCII3x8JNxuO8oBvE0yGtkgBpBdJcewCLTqJIJ3++Vo1ROsECCIP03djuBkG947lrEg9kmQWk3kAGYAGnozlAOtrrA863BLSS1wIhwPEWA399kA1UF8peZdBGmY5W2G6Zi456IH0oIeGW0zG4mx1A3b2/9oq6CGPkPaYeDmJLhF3dnfoANChu2sxbBBBveTduWc0ajhB7+KcJqkCcroBh7x2bmBTdAzWk7jeNE+82GXLldAbb/AC3EdmNSb8hZJwcy2YzANDokdrq36CYAvPHRSchEuJOXKWkEElzbgE3mZnTWU76IbDQCAQAS45QJtcgGI3DU8VGdOUuAya2INniRMj0tRYa8VLc2HBpaYLdQYiC0ABpJIaZ5WMpJGY2dlLTxEhzhJbcmAQIiJ4JBBfSABLg2CBAywS4gkiDqTuHfxTGKeTmEQbEyPSaQTYmwgtOvwClPqgZSABLjAJy2Lu0IGroE3G/UKM6mDAnLbMJdfI0A5tbmXawRaCkZeyB9N2WDmLnX+iQNYvYX7wEBxVXrNoAaNDBIMyG3nS+gBRk4trC86loEmYzPDTF5iD8L9yquExh+WV6twcheRrdreJGknwStOQSrvFWpUfGZmjdbBoJB4yTvCZ6QU/OU3HR7SBuNhoI1H/azA07aahuYl2o7RMt0Guu/3Le3rDDsILnBr3GAG2c7MBIga2nvuoq1bxbw0te6wNtZvrrv3pqptNnFK6UUv7u8gQWlruXH8FR+tdxWGXwzK7bY/Lxmlvfj2HeExTxzZ1VX608VrrDxR9EP76tdfaLdxUX5cOKrjqh4pPWHin9ML7q9ItqQsfWSQ4LHuELXblVDyjVppUx/qXT9jeopfYb4LlXlFe3JSuPSG9dT2QfM0vsN8E4tNKRX9F3I+CVKbxJ7DuR8EBzvoq3tVvaO8VbsNTG9VjodlPW+0d4q30MqWE6LO6pWHpjraZsIJPDRp3qTUr+dqtMzYgHQwBdo3i9yb6pDXtzN7QBNt034TaVH26/JUZUBF2lrhP0ZEOgXN4HvhaaLfRfXkOGZwywc4gxIgy21wAff8UzhGFlNzDILC5rS5oJjO4sIaLmA4b9Ew5zoaLkSG2JswZZIMz/PnCKUDeBAsDeb6A6Gd0X8EyNDEFxaIsZdbSRMTcRJndeDwS3UpztgFrgANwDSCC0wZ48B8FrDuntR5s75iA0iJv6JvzWNIEyDnBJALiJL9L6AnLpuQCXzLSSAB6VzqcwaBpxFiN4hMOqCT2wDAYRaRUIloaCYDiLwR4J0vvmzF1nSADBIcLtvY6j/APEyyqNQQ9pGZuUtjWIaN41OZBm61M5YzaHNMD0W5YEaGY7jwQzaLS9oLQXntgbjlc3eOZHepmJv6RMhwdmGUDS+WfoRrv1QjFYvsFzSA8FzZiYOUEXFiCLzpcd6ZJezq+hLXN7Tm6icrabzmgE8tNynublEsY3KBDbw3K6JknQa25IZsh8ZDJAJzEHKYJY+ZcLZtBGlkVPDK3IARYAAOAsWC+8xfTKilEDEjttAEBoMAEXAyw5wtGmm6LJDq5IBEHMTJIIOcO7Jyaka3m0BLxrhYB3aygdqHX4ugidfxUA6uMNjdeJbAkucd8g6dyZN1sSYdq12voi1xIPeUMxm0XAwAMsNEAXDCCJIOg/RP1KLRILpaCYkmNQYOunehOLecwOhgzDpE5jAjebpVURcTWgmIkRr2hA1E8iIUKm6amLIHZyU27rFxk68vxS8Y8CXOfbW8aAAweSH7HxWehVrGA6pUGrtGjK1o4bvxWVXFuw1wA0zJB1JhtrBvC3uUTabw6qYnLTAa2SDvObf3696k7MPYD5dLWmO1vIi41PH3oWX3hzhmuTEm4BLoG+x0TojWOoB+Hrj60iIIvcZuX6Lly7BtSmGYf0tSNTO8kxPeYXJMY0Co8SLOcNf9RS8M0sWpHEfFZI4j4phorUpUjiPiskcR8UB7H2BRacLhiWgk0aU2GvVtU/qG/Ub90KH0e+a4b2NL/42ogmRl2FpnWm082hOCmOA+CUsQCcg4D4LCwcB8EpYgGm4dg0Y0cmhK6pv1R8AlrEAjqm/VHwC06k06tB5gJxYgBOJ2th2OaCWwXuYXRZjmsc4gmP9JnhvSq+2MOwsGYEvJAytLt1QyYGk0njmFqtsKk81C4vJfmntQAHscwwAODzc30vYJNLo9Sa4ODnghwc3tCGiapygR6Pn6nf2tbCAFUts4VzA7O1oLA+HNghpiJEa3Fu8JTtsYcFozAhznNnKcocxpc7M6IEQfeDwKZo9HKLTIzEwwEnLJ6vLkJdlmwY0axA0m6crbCpOLsxeczi5wzAAhzHMc2ANCHG+ul7IDWI21h2sLw5r4BdlAvY3mR2ffCkPxNANY4lmV5ysMekbnswLiATPASoh6O0j1kue7rRFaXA9aNBnERYWtFtZT/7IZFMB72imfNw4S1pBBYDF25TF50EXEoBD9rYTfUp8NOV9NLi+hlSqTqLgwtyEOBy2FwNYB4b1Do9HqLTPbJDQwS7Sk0tLGC2gyiN9zJKn4bCMY0NaNC4gm5Be4udfmUAKxe3MPSDi6m4BtXqT2Gt7YpipIDiJGVwiLncCt4nbVOn1mfDVGinBd2aRGV2e9nn6psYJzNABJhO4jYFN5eXVKhNRxce00WdTFNzRDbAsa0ceyCCDJTuI2RTc17Mz2h7nOfldBeHsyFruLcsN4iBBkSgIOP29RpF3W4d7MsXIowQ4PIIOe1qbjBgmwAkwl4nbOHY5zeqLnNy6MaAS5tVxDS4gS0Uak6aRrZSa+xKTgRLmkuL8wd2pdT6oi406vs/93Tf9m8LDmii0McGNc0DsltN7ngEHiXunjKAaftihmDBh3uc4TTApsmq2HEuZJEABpPayzFpRPDspVGMqNY0te0Oacgu1wkHTgVEfsRpc5/W1cznZwQWAsdlLeycsxlc5sGRc77ojh6LWNaxohjQGtHBrRAHwCAR8jp/u2fcH6LBgqX7pn3G/on1iAZ+Ss+o37oWDC0/3bfuj9E8sQDLsMw6saf4Qk/IaX7pn3G/opCxAR/kNL90z7jf0WfIaX7pn3G/opCxAR/kNL90z7jf0WfIaX7pn3G/opCxAf//Z"
                      alt="Dan_Abromov"
                    />
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <button className="" onClick={toggleMode}>
                    {/* <MdDarkMode size={35} style={{ color: mode === 'dark' ? 'white' : '' }} /> */}
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : // eslint-disable-next-line no-constant-condition
                    "dark" ? (
                      <BsFillCloudSunFill size={30} />
                    ) : (
                      ""
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
