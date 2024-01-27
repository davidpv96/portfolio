import React from 'react';
import FoodExpressImg from '../assets/img/proyectos/food-express.jpg'
import DriversImg from '../assets/img/proyectos/driverss-app.png'


const Proyectos = () => {
    const projects = [
        {
          id: 1,
          title: 'Food Express App',
          image: FoodExpressImg,
          technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Express', 'Sequelize' , 'PostgreSQL'],
          visitLink: 'https://ejemplo.com/proyecto1',
        },
        {
          id: 2,
          title: 'Drivers APP',
          image: DriversImg,
          technologies: ['React', 'Redux', 'Bootstrap', 'Node.js', 'Express', 'Sequelize' , 'PostgreSQL'],
          visitLink: 'https://ejemplo.com/proyecto2',
        },
       
      ];
    
      return (
        <div className="container mx-auto p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
    
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
    
                <p className="text-gray-600 mb-4">
                  Tecnologías: {project.technologies.join(', ')}
                </p>
    
                <a
                  href={project.visitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="botones-web text-white py-2 px-12 rounded-full inline-block"
                >
                  Visitar
                </a>
              </div>
            </div>
          ))}
        </div>
      );
};

export default Proyectos;