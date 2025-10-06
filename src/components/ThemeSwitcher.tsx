import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm">{darkMode ? "Dark" : "Light"}</span>
      <div className="relative">
        <input
          type="checkbox"
          id="theme-toggle"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          className="sr-only"
        />
        <label
          htmlFor="theme-toggle"
          className="block w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full cursor-pointer relative transition-colors duration-300"
        >
          <span
            className={`absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-6" : ""
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
