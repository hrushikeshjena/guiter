// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import myContext from '../../context/data/myContext';
// import Layout from '../../components/layout/Layout';
// import Loader from '../../components/loader/Loader';

// function Order() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const userid = user ? user.user.uid : null;
//   const email = user ? user.user.email : null;
//   const context = useContext(myContext);
//   const { mode, loading, order } = context;
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userid) {
//       navigate('/login'); // Navigate to the sign-in page if not logged in
//     } else if (email === "zounds2024.musik@gmail.com") {
//       navigate('/dashboard'); // Navigate to the Dashboard page
//     }
//   }, [email, userid, navigate]);

//   if (!userid) {
//     return null; // Return null to prevent rendering while redirecting
//   }

//   const userOrders = order.filter(obj => obj.userid === userid);

//   return (
//     <Layout>
//       {loading && <Loader />}
//       {userOrders.length > 0 ? (
//         <div className="h-full pt-10">
//           <table className={`min-w-full ${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
//             <thead>
//               <tr>
//                 <th className="py-2 px-4 border-b">S.NO</th>
//                 <th className="py-2 px-4 border-b">Payment ID</th>
//                 <th className="py-2 px-4 border-b">Address</th>
//                 <th className="py-2 px-4 border-b">Pincode</th>
//                 <th className="py-2 px-4 border-b">Phone Number</th>
//                 <th className="py-2 px-4 border-b">Email</th>
//                 <th className="py-2 px-4 border-b">Date</th>
//                 <th className="py-2 px-4 border-b">Image</th>
//                 <th className="py-2 px-4 border-b">Title</th>
//                 <th className="py-2 px-4 border-b">Price</th>
//                 <th className="py-2 px-4 border-b">Grand Total</th>
//                 <th className="py-2 px-4 border-b">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userOrders.map((order, orderIndex) => (
//                 <React.Fragment key={orderIndex}>
//                   {order.cartItems.map((item, itemIndex) => (
//                     <tr key={`${orderIndex}-${itemIndex}`}>
//                       <td className="py-2 px-4 border-b">{orderIndex + 1}</td>
//                       <td className="py-2 px-4 border-b">{order.paymentId}</td>
//                       <td className="py-2 px-4 border-b">{order.addressInfo.address}</td>
//                       <td className="py-2 px-4 border-b">{order.addressInfo.pincode}</td>
//                       <td className="py-2 px-4 border-b">{order.addressInfo.phoneNumber}</td>
//                       <td className="py-2 px-4 border-b">{order.email}</td>
//                       <td className="py-2 px-4 border-b">{order.addressInfo.date}</td>
//                       <td className="py-2 px-4 border-b">
//                         <img src={item.imageUrl} alt="product-image" className="w-20 h-20 object-cover" />
//                       </td>
//                       <td className="py-2 px-4 border-b">{item.title}</td>
//                       <td className="py-2 px-4 border-b">₹{item.price}</td>
//                       <td className="py-2 px-4 border-b">₹{order.grandTotal}</td>
//                       <td className="py-2 px-4 border-b">{order.status}</td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>

//           <div className="mt-8"></div> {/* Space after the table */}
//         </div>
//       ) : (
//         <h2 className='text-center text-2xl text-white'>No Orders</h2>
//       )}

//       {/* Footer part */}
//       <footer className="mt-8">
//         {/* Your footer content here */}
//       </footer>
//     </Layout>
//   );
// }

// export default Order;


import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user ? user.user.uid : null;
  const email = user ? user.user.email : null;
  const context = useContext(myContext);
  const { mode, loading, order } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (!userid) {
      navigate('/login'); // Navigate to the sign-in page if not logged in
    } else if (email === "zounds2024.musik@gmail.com") {
      navigate('/dashboard'); // Navigate to the Dashboard page
    }
  }, [email, userid, navigate]);

  if (!userid) {
    return null; // Return null to prevent rendering while redirecting
  }

  const userOrders = order.filter(obj => obj.userid === userid);

  return (
    <Layout>
      {loading && <Loader />}
      {userOrders.length > 0 ? (
        <div className="h-full pt-10 px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table
              className={`min-w-full ${mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black'} table-auto`}
            >
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b text-left">S.NO</th>
                  <th className="py-2 px-4 border-b text-left">Payment ID</th>
                  <th className="py-2 px-4 border-b text-left">Address</th>
                  <th className="py-2 px-4 border-b text-left">Pincode</th>
                  <th className="py-2 px-4 border-b text-left">Phone Number</th>
                  <th className="py-2 px-4 border-b text-left">Email</th>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                  <th className="py-2 px-4 border-b text-left">Image</th>
                  <th className="py-2 px-4 border-b text-left">Title</th>
                  <th className="py-2 px-4 border-b text-left">Price</th>
                  <th className="py-2 px-4 border-b text-left">Grand Total</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {userOrders.map((order, orderIndex) => (
                  <React.Fragment key={orderIndex}>
                    {order.cartItems.map((item, itemIndex) => (
                      <tr key={`${orderIndex}-${itemIndex}`}>
                        <td className="py-2 px-4 border-b">{orderIndex + 1}</td>
                        <td className="py-2 px-4 border-b">{order.paymentId}</td>
                        <td className="py-2 px-4 border-b">{order.addressInfo.address}</td>
                        <td className="py-2 px-4 border-b">{order.addressInfo.pincode}</td>
                        <td className="py-2 px-4 border-b">{order.addressInfo.phoneNumber}</td>
                        <td className="py-2 px-4 border-b">{order.email}</td>
                        <td className="py-2 px-4 border-b">{order.addressInfo.date}</td>
                        <td className="py-2 px-4 border-b">
                          <img src={item.imageUrl} alt="product-image" className="w-20 h-20 object-cover" />
                        </td>
                        <td className="py-2 px-4 border-b">{item.title}</td>
                        <td className="py-2 px-4 border-b">₹{item.price}</td>
                        <td className="py-2 px-4 border-b">₹{order.grandTotal}</td>
                        <td className="py-2 px-4 border-b">{order.status}</td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8"></div> {/* Space after the table */}
        </div>
      ) : (
        <h2 className='text-center text-2xl text-white'>No Orders</h2>
      )}

      {/* Footer part */}
      <footer className="mt-8">
        {/* Your footer content here */}
      </footer>
    </Layout>
  );
}

export default Order;

