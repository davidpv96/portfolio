import React from 'react';
import Tecnologias from '../MainContent/Tecnologias/Tecnologias';



const HomeInfo = () => {
    return(
    <div>

<div className="container mx-auto    w-full p-0 mt-8">
 

  <div className="mb-5">
    <p className="text-lg">
      Soy <b>Full Stack Developer Jr.</b> Graduado de Henry Bootcamp con 8 meses de formación.
      Bachiller en Ingeniería Informática. Mis habilidades incluyen <b>HTML, CSS, JavaScript,
      ReactJS, Redux, NodeJS, Express, Sequelize, y manejo de Git y GitHub.</b>
    </p>
    <p className="text-lg mt-4">
      He adquirido experiencia en el desarrollo de proyectos personales y estoy apasionado por
      aprender continuamente para mejorar mis habilidades técnicas y blandas.
    </p>
    
  </div>
</div>
<div>
  <Tecnologias  />
</div>
</div>
    )

};

export default HomeInfo;