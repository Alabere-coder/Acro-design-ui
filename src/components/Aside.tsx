import React from "react";

const Aside = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed flex flex-col">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Reports</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Analytics
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Settings</li>
      </ul>
    </div>
  );
};

export default Aside;
