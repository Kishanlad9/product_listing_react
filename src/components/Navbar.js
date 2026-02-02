import React from "react";
import logo from "./../logo.png";
const Navbar = () => {
  return (
    <div className="w-full px-5 flex justify-between items-center bg-blue-500">
      <div className="w-[150px]">
        <img src={logo} alt="logo" className="w-full" />
      </div>
      <div className="flex gap-x-5">
        <a href="/" className="text-xl font-medium">
          Home
        </a>
        <a href="/" className="text-xl font-medium">
          Products
        </a>
        <a href="/" className="text-xl font-medium">
          Cart
        </a>
      </div>
    </div>
  );
};

export default Navbar;
