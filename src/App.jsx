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
      className={`${darkMode ? "day" : "night"} transition-all duration-300`}
    >
      <header className="flex  justify-between px-20 pt-5">
        <h2 className="text-4xl text-white">Weather</h2>
        {darkMode ? (
          <HiSun
            className="text-4xl text-yellow-500 cursor-pointer transition-all duration-300"
            onClick={handleDarkModeToggle}
          />
        ) : (
          <HiMoon
            className="text-4xl text-gray-300 cursor-pointer transition-all duration-300"
            onClick={handleDarkModeToggle}
          />
        )}
      </header>
      <Search />
    </div>
  );
}

export default App;
