// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/5 bg-blue-900 text-white">
//         <div className="p-4 text-2xl font-bold text-center">Dashboard</div>
//         <nav className="mt-6">
//           <ul>
//             <li className="p-3 hover:bg-blue-700">
//               <Link to="/page1">Page 1</Link>
//             </li>
//             <li className="p-3 hover:bg-blue-700">
//               <Link to="/page2">Page 2</Link>
//             </li>
//           </ul>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/5 bg-blue-900 text-white flex flex-col">
//         <div className="p-4 text-2xl font-bold text-center border-b border-blue-700">
//           Dashboard
//         </div>
//         <nav className="flex-1 mt-6">
//           <ul>
//           <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/">Dashboard</Link>
//             </li>
//             <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/page1">Page 1</Link>
//             </li>
//             <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/page2">Page 2</Link>
//             </li>
//           </ul>
//         </nav>
//         <footer className="p-4 text-sm text-center border-t border-blue-700">
//           © 2024 My Dashboard
//         </footer>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h1>
//           <div>
//             <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
//               love
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 bg-white rounded-lg m-4 shadow">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-1/5 bg-blue-900 text-white flex flex-col">
//         <div className="p-4 text-2xl font-bold text-center border-b border-blue-700">
//           Dashboard
//         </div>
//         <nav className="flex-1 mt-6">
//           <ul>
//             <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/">Dashboard</Link>
//             </li>
//             <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/page1">Page 1</Link>
//             </li>
//             <li className="p-3 hover:bg-blue-700 transition duration-200">
//               <Link to="/page2">Page 2</Link>
//             </li>
//           </ul>
//         </nav>
//         <footer className="p-4 text-sm text-center border-t border-blue-700">
//           © 2024 My Dashboard
//         </footer>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-md p-4 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">Welcome to the Dashboard</h1>
//           <div>
//             <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
//               Welcome
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 p-6 bg-white rounded-lg m-4 shadow overflow-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };
// export default Layout;

import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaChartBar, } from "react-icons/fa"; // For icons

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold text-center border-b border-blue-700">
          Dashboard
        </div>
        <nav className="flex-1 mt-6">
          <ul>
            {/* Sidebar links with icons */}
            <li
              className={`p-3 hover:bg-blue-700 transition duration-200 ${
                location.pathname === "/" ? "bg-blue-700" : ""
              }`}
            >
              <Link to="/" className="flex items-center">
                <FaHome className="mr-2" /> Dashboard
              </Link>
            </li>
            <li
              className={`p-3 hover:bg-blue-700 transition duration-200 ${
                location.pathname === "/page1" ? "bg-blue-700" : ""
              }`}
            >
              <Link to="/page1" className="flex items-center">
                <FaChartBar className="mr-2" /> Page 1
              </Link>
            </li>
            <li
              className={`p-3 hover:bg-blue-700 transition duration-200 ${
                location.pathname === "/page2" ? "bg-blue-700" : ""
              }`}
            >
              <Link to="/page2" className="flex items-center">
                <FaChartBar className="mr-2" /> Page 2
              </Link>
            </li>
          </ul>
        </nav>
        <footer className="p-4 text-sm text-center border-t border-blue-700">
          © 2024 My Dashboard
        </footer>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Your Dashboard</h1>
          <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition">
          Dashboard
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 bg-white rounded-lg m-4 shadow-lg overflow-auto">
          {/* Dashboard Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example Card */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Revenue</h3>
              <p className="text-3xl font-bold text-gray-800">$24.5K</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Net Profit Margin</h3>
              <p className="text-3xl font-bold text-gray-800">9.5%</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-700">Customer Lifetime Value</h3>
              <p className="text-3xl font-bold text-gray-800">$2,176</p>
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;



