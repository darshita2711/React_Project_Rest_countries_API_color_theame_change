
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import CountryDetails from "./pages/CountryDetails";
import HomePage from "./pages/HomePage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleThemeChange() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "app-shell dark" : "app-shell"}>

      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleThemeChange}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/country/:code"
          element={<CountryDetails />}
        />
      </Routes>

    </div>
  );
}

export default App;
