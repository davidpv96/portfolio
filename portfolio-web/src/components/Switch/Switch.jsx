import React from 'react';
import solImage from '../../assets/img/sol.png'
import lunaImage from '../../assets/img/noche.png'

const Switch = ({ darkMode, setDarkMode }) => {
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="switch relative inline-block w-20 h-10 bg-gray-400 rounded-full p-1 text-center cursor-pointer">
      <input
        type="checkbox"
        id="darkModeSwitch"
        className="hidden"
        checked={darkMode}
        onChange={handleDarkModeToggle}
      />
      <div className={`slider absolute inset-0 transition-transform duration-300 ease-in-out transform ${darkMode ? '' : 'translate-x-10'} bg-white rounded-full`}>
        <img
          src={darkMode ? solImage : lunaImage}
          alt={darkMode ? 'Luna' : 'Sol'}
          className="w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </label>
  );
};

export default Switch;