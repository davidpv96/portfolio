import {React, useState,useEffect} from 'react';
import { Routes, Route } from "react-router-dom";
import Landing from './views/Landing/Landing';
import Proyectos from './views/Proyectos';
import Experiencia from './views/Experiencia';
import Header from './components/Header/Header';
import TabBar from './components/TabBar/TabBar';
import Contacto from './views/Contacto';
import MainContent from './components/MainContent/MainContent';
import { useMediaQuery } from 'react-responsive';



// import Experience from './views/Experience';
// import Projects from './views/Projects';
// import Contact from './views/Contact';

const App = () => {

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if(darkMode === true){
      document.querySelector('html').classList.add('dark')
    }
    else{
      document.querySelector('html').classList.remove('dark')
    }
  
  }, [darkMode])
  
  const isDesktop = useMediaQuery({ minWidth: 769 });
  return (
    <>

<div className='App'>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="md:bg-gradient-to-r from-blue-200 to-orange-100 ">
        <Routes>
          {isDesktop ? (
            <>
              <Route path="/" element={<MainContent page="landing" />} />
              <Route path="/experience" element={<MainContent page="experience" />} />
              <Route path="/proyectos" element={<MainContent page="proyectos" />} />
              <Route path="/contactame" element={<MainContent page="contacto" />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Landing />} />
              <Route path="/experience" element={<Experiencia />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/contactame" element={<Contacto />} />
            </>
          )}
          {/* Otras rutas y componentes según sea necesario */}
        </Routes>
      </div>
        <TabBar />
      </div>

    </>
  )
};

export default App;