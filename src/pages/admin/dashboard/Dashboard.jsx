// import React, { useContext } from "react";
// import { FaUserTie } from "react-icons/fa";
// import myContext from "../../../context/data/myContext";
// import Layout from "../../../components/layout/Layout";
// import DashboardTab from "./DashboardTab";

// function Dashboard() {
//   const context = useContext(myContext);
//   const { mode, product, user, order } = context;

//   // Calculate total number of products
//   const totalProducts = product.length;

//   // Calculate total number of users
//   const totalUsers = user.length;

//   // Calculate total number of orders
//   const totalOrders = order.length;

//   return (
//     <Layout>
//       <section className="text-gray-600 body-font mt-10 mb-10">
//         <div className="container px-5 mx-auto mb-10">
//           <div className="flex flex-wrap -m-4 text-center">
//             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//               <div
//                 className={`border-2 hover:shadow-purple-600 shadow-${
//                   mode === "dark" ? "inset" : "md"
//                 } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
//                 style={{
//                   background:
//                     mode === "dark"
//                       ? "rgb(46 49 55)"
//                       : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
//                   color: mode === "dark" ? "white" : "",
//                   borderColor: "black",
//                 }}
//               >
//                 <div className="w-12 h-12 mb-3 inline-block">
//                   <img
//                     src="https://cdn-icons-png.freepik.com/256/15601/15601469.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
//                     alt="Custom Icon"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2
//                   className="title-font font-medium text-3xl text-black fonts1"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   {totalProducts}
//                 </h2>
//                 <p
//                   className="text-purple-500 font-bold"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   Total Products
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//               <div
//                 className={`border-2 hover:shadow-purple-600 shadow-${
//                   mode === "dark" ? "inset" : "md"
//                 } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
//                 style={{
//                   background:
//                     mode === "dark"
//                       ? "rgb(46 49 55)"
//                       : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
//                   color: mode === "dark" ? "white" : "",
//                   borderColor: "black",
//                 }}
//               >
//                 <div className="w-12 h-12 mb-3 inline-block">
//                   <img
//                     src="https://cdn-icons-png.freepik.com/256/6054/6054136.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
//                     alt="Custom Icon"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2
//                   className="title-font font-medium text-3xl text-black fonts1"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   {totalOrders}
//                 </h2>
//                 <p
//                   className="text-purple-500 font-bold"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   Total Orders
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//               <div
//                 className={`border-2 hover:shadow-purple-600 shadow-${
//                   mode === "dark" ? "inset" : "md"
//                 } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
//                 style={{
//                   background:
//                     mode === "dark"
//                       ? "rgb(46 49 55)"
//                       : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
//                   color: mode === "dark" ? "white" : "",
//                   borderColor: "black",
//                 }}
//               >
//                 <div className="w-12 h-12 mb-3 inline-block">
//                   <img
//                     src="https://cdn-icons-png.freepik.com/256/143/143427.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
//                     alt="Custom Icon"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2
//                   className="title-font font-medium text-3xl text-black fonts1"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   {totalUsers}
//                 </h2>
//                 <p
//                   className="text-purple-500 font-bold"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   Total Users
//                 </p>
//               </div>
//             </div>
//             <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
//               <div
//                 className={`border-2 hover:shadow-purple-600 shadow-${
//                   mode === "dark" ? "inset" : "md"
//                 } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
//                 style={{
//                   background:
//                     mode === "dark"
//                       ? "rgb(46 49 55)"
//                       : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
//                   color: mode === "dark" ? "white" : "",
//                   borderColor: "black",
//                 }}
//               >
//                 <div className="w-12 h-12 mb-3 inline-block">
//                   <img
//                     src="https://cdn-icons-png.freepik.com/256/747/747166.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
//                     alt="Custom Icon"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h2
//                   className="title-font font-medium text-3xl text-black fonts1"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   1000
//                 </h2>
//                 <p
//                   className="text-purple-500 font-bold"
//                   style={{ color: mode === "dark" ? "white" : "" }}
//                 >
//                   Total Sale
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <DashboardTab />
//       </section>
//     </Layout>
//   );
// }

// export default Dashboard;


import React, { useContext } from "react";
import { FaUserTie } from "react-icons/fa";
import myContext from "../../../context/data/myContext";
import Layout from "../../../components/layout/Layout";
import DashboardTab from "./DashboardTab";

function Dashboard() {
  const context = useContext(myContext);
  const { mode, product, user, order } = context;

  // Calculate total number of products
  const totalProducts = product.length;

  // Calculate total number of users
  const totalUsers = user.length;

  // Calculate total number of orders
  const totalOrders = order.length;

  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 w-full">
              <div
                className={`border-2 hover:shadow-purple-600 shadow-${
                  mode === "dark" ? "inset" : "md"
                } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
                style={{
                  background:
                    mode === "dark"
                      ? "rgb(46 49 55)"
                      : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
                  color: mode === "dark" ? "white" : "",
                  borderColor: "black",
                }}
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/15601/15601469.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                    alt="Custom Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalProducts}
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Products
                </p>
              </div>
            </div>
            <div className="p-4 w-full">
              <div
                className={`border-2 hover:shadow-purple-600 shadow-${
                  mode === "dark" ? "inset" : "md"
                } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
                style={{
                  background:
                    mode === "dark"
                      ? "rgb(46 49 55)"
                      : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
                  color: mode === "dark" ? "white" : "",
                  borderColor: "black",
                }}
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/6054/6054136.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                    alt="Custom Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalOrders}
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Orders
                </p>
              </div>
            </div>
            <div className="p-4 w-full">
              <div
                className={`border-2 hover:shadow-purple-600 shadow-${
                  mode === "dark" ? "inset" : "md"
                } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
                style={{
                  background:
                    mode === "dark"
                      ? "rgb(46 49 55)"
                      : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
                  color: mode === "dark" ? "white" : "",
                  borderColor: "black",
                }}
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/143/143427.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                    alt="Custom Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  {totalUsers}
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Users
                </p>
              </div>
            </div>
            <div className="p-4 w-full">
              <div
                className={`border-2 hover:shadow-purple-600 shadow-${
                  mode === "dark" ? "inset" : "md"
                } bg-gray-100 border-gray-300 px-4 py-3 rounded-xl`}
                style={{
                  background:
                    mode === "dark"
                      ? "rgb(46 49 55)"
                      : "linear-gradient(90deg, rgba(172,174,245,1) 0%, rgba(222,222,247,1) 45%, rgba(207,208,249,1) 100%)",
                  color: mode === "dark" ? "white" : "",
                  borderColor: "black",
                }}
              >
                <div className="w-12 h-12 mb-3 mx-auto">
                  <img
                    src="https://cdn-icons-png.freepik.com/256/747/747166.png?uid=R147306243&ga=GA1.1.1087679078.1714562823&semt=ais_hybrid"
                    alt="Custom Icon"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2
                  className="title-font font-medium text-3xl text-black"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  1000
                </h2>
                <p
                  className="text-purple-500 font-bold"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  Total Sale
                </p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  );
}

export default Dashboard;

