"use client";
import React, { useState } from 'react';
import sky from "../../../public/assets/sky.png";
import Image from "next/image";



function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar bg-base-100" style={{ borderBottom: '1px solid #E0E7FF' }}>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl"><Image src={sky} alt="Sky Logo" width={50} /></a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <nav className="hidden md:flex items-center space-x-4">
            <li><a>Home</a></li>
            <li><a>Profile</a></li>
            <li><a>Login</a></li>
            <li><a>Signup</a></li>
          </nav>

          <nav className="md:hidden mt-0 md:mt-0">
            <div className="relative">
              <button
                className="btn btn-ghost btn-circle"
                onClick={toggleDropdown}
              >
                 <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 max-h-40 overflow-y-auto">
                  <ul className="menu menu-sm dropdown-content">
                    <li><a>Home</a></li>
                    <li><a>Profile</a></li>
                    <li><a>Login</a></li>
                    <li><a>Signup</a></li>
                  </ul>
                </div>
              )}
            </div>
          </nav>
        </ul>
      </div>
    </div>
  );
}


export default Header;