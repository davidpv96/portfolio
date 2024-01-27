// components/MainContent.js
import React from 'react';
import Tecnologias from './Tecnologias/Tecnologias'
import Proyectos from '../../views/Proyectos';
import Experiencia from '../../views/Experiencia';
import Contacto from '../../views/Contacto';
import HomeInfo from '../HomeInfo/HomeInfo';
import Menu from '../Menu/Menu';
import { Link} from 'react-router-dom';
import ImageProfile from '../../assets/img/davidcb2.jpg'
import GitHubIcon from '../../assets/img/social/github.png'
import LinkedinIcon from '../../assets/img/social/linkedin.png' 
import EmailIcon from '../../assets/img/info/correo.png'
import PhoneIcon from '../../assets/img/info/telefono.png'
import LocationIcon from '../../assets/img/info/mapa.png'
import DownloadIcon from '../../assets/img/info/descargar.png'
const MainContent = ({ page }) => {
  console.log('Current page:', page);
  return (
    <div className="container mx-auto p-14 flex flex-col items-center md:flex-row md:p-0 md:py-28 md:items-start dark:bg-zinc-900 dark:md:bg-fondoDark dark:bg-cover">
      <h1 className="text-4xl font-bold mb-4  md:hidden dark:text-white" >Sobre Mí</h1>
    <div className='dark:md:bg-neutral-950 md:sticky md:top-40 md:flex md:flex-col md:items-center md:w-1/3 md:bg-white md:p-14 md:mt-28 md:mr-10 md:rounded-2xl md:shadow-lg '>
    <div className="relative flex flex-col md:flex-column md:items-center">
  {/* Imagen */}
  <img
    src={ImageProfile}
    alt="Mi Imagen"
    className="md:w-5/6 rounded-2xl shadow-lg mb-8 md:mb-0 md:absolute md: -top-48 md:left-0 md:right-0 md:mx-auto"
  />

  {/* Información personal */}
  <div className="md:relative md:z-10 md:mt-12 ">
    {/* Nombre */}
    <h1 className="text-3xl font-semibold mb-2 text-center md:text-center dark:text-white">
      David Peñavasquez
    </h1>

    {/* Título */}
    <h2 className="text-xl text-stone-500 text-center md:text-center dark:p-1 dark:bg-zinc-800 dark:rounded-2xl">
      Full Stack Developer
    </h2>
  </div>
</div>

    {/* Redes Sociales */}
    <div className="flex justify-center space-x-4 md:mt-5 mt-5">
        {/* GitHub */}
        <Link to="https://github.com/davidpv96" target="_blank" className=' p-3  bg-gray-100 rounded-lg dark:bg-zinc-800'>
          <img
            src={GitHubIcon}
            alt="GitHub"
            className="w-7 cursor-pointer  "
          />
        </Link>

        {/* LinkedIn */}
        <Link to="https://www.linkedin.com/in/david-pe%C3%B1avasquez-vasquez-dev/" target="_blank" className='dark:bg-zinc-800 p-3 bg-gray-100 rounded-lg'>
          <img
            src={LinkedinIcon}
            alt="LinkedIn"
            className="w-7 cursor-pointer"
          />
        </Link>
        {/* Agrega más redes sociales según sea necesario */}
      </div>
         {/* Información Adicional */}
      <div className="  w-full text-center mb-5 mt-5 bg-gray-100 p-6 rounded-xl dark:bg-zinc-800">
        <div className="flex items-center mb-4 border-b border-neutral-200 dark:border-neutral-500 pb-2">
          <div className='bg-white dark:bg-neutral-950 pr-2 pl-3 pt-2 pb-2 mr-3 rounded-lg'>
          <img src={PhoneIcon} alt="Phone Icon" className="w-5 h-5 mr-2 " />
          </div>
          <div className='block '>
          <p className="text-sm text-left  text-neutral-500">Celular</p>
          <p className="text-sm text-left  dark:text-white">+51942171888</p>
          </div>
        </div>

        <div className="flex items-center mb-4  border-b border-neutral-200 dark:border-neutral-500  pb-2">
          <div className='bg-white dark:bg-neutral-950 pr-2 pl-3 pt-2 pb-2 mr-3 rounded-lg'>
          <img src={EmailIcon}  alt="Email Icon" className="w-5 h-5 mr-2" />
          </div>
          <div className='block'>
          <p className="text-sm text-left  text-neutral-500">Email</p>
          <p className="text-sm dark:text-white">davidpv96@hotmail.com</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <div className=' dark:bg-neutral-950 bg-white pr-2 pl-3 pt-2 pb-2 mr-3 rounded-lg'>
          <img src={LocationIcon} alt="Location Icon" className="w-5 h-5 mr-2" />
          </div>
          <div className='block'>
          <p className="text-sm text-left  text-neutral-500">Ciudad</p>
          <p className="text-sm  dark:text-white">Lima, Perú</p>
          
          </div>
        </div>
      </div>

      <div className=" flex justify-center">
  {/* Botón de Descarga */}
  <a
    href="https://drive.google.com/file/d/1axHcrahhcGd3MFDfogwu3DdiHvWBIxHM/view?usp=sharing" target="_blank"  // Reemplaza con la ruta correcta de tu currículum
    download="David_Penavasquez_CV.pdf"
    className=" botones-web  flex items-center"
  >
    <img
      src={DownloadIcon}  // Reemplaza con la ruta de tu icono
      alt="Icono de descarga"
      className="w-6 h-6 mr-2"  // Ajusta el tamaño y el margen del icono según sea necesario
    />
    Descargar CV
  </a>
</div>
</div>
<div className='md:w-2/3 md:py-14 md:mt-16'>
 
     <div className='hidden md:flex md:justify-end  md:mb-10'>
      <Menu  />
     </div>
     <div className='md:bg-white md:p-14  md:rounded-2xl md:shadow-lg md:hidden'>

<div className="container mx-auto    w-full p-0 mt-8">
 

  <div className="mb-5">
    <p className="text-lg dark:text-white">
      Soy <b>Full Stack Developer Jr.</b> Graduado de Henry Bootcamp con 8 meses de formación.
      Bachiller en Ingeniería Informática. Mis habilidades incluyen <b>HTML, CSS, JavaScript,
      ReactJS, Redux, NodeJS, Express, Sequelize, y manejo de Git y GitHub.</b>
    </p>
    <p className="text-lg mt-4 dark:text-white">
      He adquirido experiencia en el desarrollo de proyectos personales y estoy apasionado por
      aprender continuamente para mejorar mis habilidades técnicas y blandas.
    </p>
    
  </div>
</div>
<div>
  <Tecnologias  />
</div>
</div>
<div className='md:bg-white md:p-14  md:rounded-2xl md:shadow-lg dark:bg-neutral-950'>
       {/* Renderiza el componente específico según la prop 'page' */}
      
       
       {page === 'proyectos' && <Proyectos />}
       {page === 'experience' && <Experiencia />}
       {page === 'contacto' && <Contacto />}
       {page === 'landing' && <HomeInfo />}
       


</div>
</div>

    </div>
  
  );
};

export default MainContent;