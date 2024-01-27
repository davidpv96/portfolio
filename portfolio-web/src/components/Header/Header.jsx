// components/Header.js
import React, { useState } from 'react';
import Switch from '../Switch/Switch';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`font-sans ${darkMode ? 'dark-mode' : ''}`}>
      <header className=" bg-gray-100 text-white py-4 flex items-center justify-center mx-auto">
        {/* Switch para Dark Mode */}
        <Switch darkMode={darkMode} setDarkMode={setDarkMode}/>
      </header>
    </div>
  );
};


export default Header;