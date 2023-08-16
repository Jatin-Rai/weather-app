import React from "react";

import { HiSun, HiMoon } from "react-icons/hi";

const Header = ({ darkMode, handleDarkModeToggle }) => {
  return (
    <header className="flex justify-between px-6 sm:px-8 pt-3 sm:pt-5">
      <h2 className="text-2xl sm:text-4xl text-white">Weather</h2>
      <div className="group cursor-pointer" onClick={handleDarkModeToggle}>
        {darkMode ? (
          <>
            <HiMoon className="text-gray-300 text-3xl transition-all duration-300 group-hover:scale-100" />
            <span className="p-2 text-white absolute top-10 right-5 hidden group-hover:block">
              Dark Mode
            </span>
          </>
        ) : (
          <>
            <HiSun className="text-yellow-400 text-3xl transition-all duration-300" />
            <span className="p-2 text-yellow-600 absolute top-10 right-5 hidden group-hover:block">
              Light Mode
            </span>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
