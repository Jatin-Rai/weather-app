import { useState } from "react";
import Search from "./components/Search/Search";

import "./index.css";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "night" : "day"
      } transition-all duration-300`}
    >
      <Header darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
      <Search />
    </div>
  );
}

export default App;
