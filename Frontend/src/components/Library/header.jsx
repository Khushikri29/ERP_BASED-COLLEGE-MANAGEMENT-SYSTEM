// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white border-b h-16 flex items-center justify-end px-6">
      <span className="text-gray-700 mr-4">Welcome, Dr. [Name]</span>
      <div className="w-10 h-10 rounded-full bg-gray-300">
        {/* Placeholder for User Profile Image */}
      </div>
    </header>
  );
};

export default Header;
