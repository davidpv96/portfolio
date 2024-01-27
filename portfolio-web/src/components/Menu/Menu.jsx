// components/TabBar.js
import React from 'react';
import { Link } from 'react-router-dom';



const Menu = () => {
  return (
    <div className=" md:bg-slate-600 text-white py-4 px-2 flex justify-around shadow-md md:rounded-2xl md:p-5 md:w-3/5">
    <Link to="/" className="flex flex-col items-center justify-center hover:text-gray-300 focus:text-gray-300">
          <svg width="30px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_iconCarrier">
            <circle cx="12" cy="6" r="4" stroke=" white" strokeWidth="1.5" fill="none" />
            <path
                d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                stroke="white"
                 strokeWidth="1.5"
                 fill="none"
             />
               </g>
            </svg>
          <span>Sobre Mí</span>
     </Link>

<Link to="/experience" className="flex flex-col items-center justify-center hover:text-gray-300 focus:text-gray-300">
<svg fill="#ffffff" width="30px" height="40px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M30.964 21.759v-8.067l0.503-0.265c0.327-0.17 0.533-0.507 0.537-0.876s-0.195-0.709-0.518-0.886l-15.045-8.050c-0.301-0.165-0.665-0.164-0.968 0.003l-14.963 8.060c-0.319 0.178-0.515 0.514-0.513 0.88s0.203 0.7 0.525 0.874l6.574 3.499c-0.082 0.145-0.133 0.311-0.133 0.49v8.462c0 0.285 0.122 0.558 0.335 0.747 0.217 0.192 2.295 1.878 8.648 1.878 6.331 0 8.465-1.593 8.688-1.774 0.233-0.189 0.367-0.474 0.367-0.774v-8.679c0-0.14-0.029-0.274-0.081-0.395l4.044-2.136v7.016c-0.593 0.347-0.995 0.983-0.995 1.719 0 1.105 0.895 2 2 2s2-0.895 2-2c0-0.741-0.407-1.38-1.005-1.725zM23.001 25.387c-0.786 0.378-2.866 1.122-7.055 1.122-4.215 0-6.248-0.792-6.983-1.173v-7.41l6.494 3.457c0.148 0.080 0.312 0.12 0.475 0.12 0.159 0 0.318-0.038 0.463-0.114l6.607-3.489v7.488zM15.939 19.369l-12.863-6.83 12.885-6.905 12.925 6.886z"/> </g>

</svg>
  <span>Experiencia</span>
</Link>

<Link to="/proyectos" className="flex flex-col items-center justify-center hover:text-gray-300 focus:text-gray-300">
<svg width="30px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15M9 7V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7M9 7H15" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
          <span>Proyectos</span>
     </Link>

     <Link to="/contactame" className="flex flex-col items-center justify-center hover:text-gray-300 focus:text-gray-300">
     <svg width="30px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier"> <path d="M7 9H17M7 13H17M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g>

</svg>
          <span>Contáctame</span>
     </Link>



  </div>
  );
};


export default Menu;