import { useState } from "react";


function Navbar() {
    const[isDarkMode, setIsDarkMode] = useState(false);

    function handleThemeChange() {
        setIsDarkMode(!isDarkMode);
    }
  return (
    <nav className="navbar">
      <h1>Where in the world?</h1>
      <button
          className="theme-button"
          onClick={handleThemeChange}
          aria-label="Toggle color theme"
        >
         {isDarkMode ? "☀ Light Mode" : "☾ Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;