import React from 'react';


import HTMLImage from '../../../assets/img/tecnologias/html.png';
import CSSImage from '../../../assets/img/tecnologias/css.png';
import JavaScriptImage from '../../../assets/img/tecnologias/javascript.png';
import NodeImg from '../../../assets/img/tecnologias/node.png';
import ReactImg from '../../../assets/img/tecnologias/react.png';
import ReduxImg from '../../../assets/img/tecnologias/redux.png';
import TailwindImg from '../../../assets/img/tecnologias/tailwind.png';
import PostgreImg from '../../../assets/img/tecnologias/postgre.png';
import Bootstrap from '../../../assets/img/tecnologias/bootstrap.png';
import ReactNativeImg from '../../../assets/img/tecnologias/reactnative.png';
import ExpressImg from '../../../assets/img/tecnologias/express.png';
import GitHubImg from '../../../assets/img/tecnologias/github.png';
// Agrega las demás imágenes según sea necesario

const Tecnologias= () => {
    const technologies = [
      { name: 'HTML', image: HTMLImage },
      { name: 'CSS', image: CSSImage },
      { name: 'JavaScript', image: JavaScriptImage },
      { name: 'Node', image: NodeImg},
      { name: 'React', image: ReactImg },
      { name: 'Redux', image: ReduxImg },
      { name: 'Tailwind', image: TailwindImg },
      { name: 'Postgre', image: PostgreImg },
      { name: 'Bootstrap', image: Bootstrap },
      { name: 'React Native', image: ReactNativeImg },
      { name: 'Express', image: ExpressImg },
      { name: 'GitHub', image: GitHubImg }



      // Agrega las demás imágenes y nombres según sea necesario
    ];
  
    
        return (
            <div className="container mx-auto p-8 mb-20">
            <h2 className="text-3xl font-bold mb-4 text-center dark:text-white">Tecnologías que Domino</h2>
      
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center border rounded-lg p-4 dark:bg-white">
                  <img src={tech.image} alt={`Technology ${index + 1}`} className="mx-auto mb-2 object-contain w-16 h-16" />
                </div>
              ))}
            </div>
          </div>
          );
    
  };
  
  export default Tecnologias;