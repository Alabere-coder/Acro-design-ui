import React from "react";

const MainScreen = () => {
  return (
    <div className="ml-64 p-8">
      <nav className="h-10 border-b-2 border-gray-400"></nav>
      <h1 className="text-3xl font-bold mb-4">Dashboard Content</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <p>This is the main content area of the dashboard.</p>
        {/* Additional content here */}
      </div>
    </div>
  );
};

export default MainScreen;
