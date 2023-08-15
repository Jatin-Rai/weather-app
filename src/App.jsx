import { useEffect, useState } from "react";
import Search from "./components/Search/Search";

import { HiSun, HiMoon } from "react-icons/hi";

import "./index.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`${darkMode ? "night" : "day"} transition-all duration-300`}
    >
      <header className="flex  justify-between px-20 pt-5">
        <h2 className="text-4xl text-white">Weather</h2>
        {darkMode ? (
          <div className="group cursor-pointer" onClick={handleDarkModeToggle}>
            <HiMoon className="text-4xl text-gray-300 transition-all duration-300 group-hover:scale-100" />
            <span className="p-4 rounded-md text-white absolute top-12 right-10 hidden group-hover:block">
              Dark Mode
            </span>
          </div>
        ) : (
          <div className="group cursor-pointer" onClick={handleDarkModeToggle}>
            <HiSun className="text-4xl text-yellow-400 transition-all duration-300" />
            <span className="p-4 rounded-md text-yellow-400 absolute top-12 right-10 hidden group-hover:block">
              Light Mode
            </span>
          </div>
        )}
      </header>
      <Search />
    </div>
  );
}

export default App;
