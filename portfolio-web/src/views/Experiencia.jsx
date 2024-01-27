import React from 'react';

const Experiencia = () => {
    return (
        <div className="container mx-auto p-10 relative mb-20 ">
          <h1 className="text-3xl font-bold mb-6 text-center border-b-2 border-y-yellow-500 pb-2">Experiencia</h1>
    
          <div className="flex flex-col items-center space-y-8">
            {/* Timeline Item 1 */}
            <div className="relative w-2/3">
              <div className="absolute bg-gray-500 h-full left-1/2 top-0 transform -translate-x-1/2"></div>
              <div className="flex items-center mb-8">
                <div className="w-6 h-6 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Soy Henry Bootcamp - Food Express App</h2>
                  <p className="text-gray-700 mb-4">Participé en la creación de una plataforma para explorar menús, hacer pedidos personalizados y asegurar pagos seguros, facilitando la interacción del cliente y brindando herramientas administrativas.</p>
                  <p className="text-gray-500">10 Nov - 15 Dic 2023</p>
                </div>
              </div>
            </div>
    
            {/* Timeline Item 2 */}
            <div className="relative w-2/3">
              <div className="absolute bg-gray-500 h-full left-1/2 top-0 transform -translate-x-1/2"></div>
              <div className="flex items-center mb-8">
                <div className="w-6 h-6 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Henry Bootcamp - Proyectos</h2>
                  <p className="text-gray-700 mb-4">Drivers App: Muestra, filtra, busca detalles y crea su propia lista personalizada de Drivers. Rick and Morty: Busca, filtra, guarda tus personajes favoritos y detalla información.</p>
                  <p className="text-gray-500">10 Jun - 30 Oct 2023</p>
                </div>
              </div>
            </div>
    
            {/* Timeline Item 3 */}
            <div className="relative w-2/3">
              <div className="absolute bg-gray-500 h-full left-1/2 top-0 transform -translate-x-1/2"></div>
              <div className="flex items-center mb-8">
                <div className="w-6 h-6 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Millennial Corporation SAC - Desarrollador Web</h2>
                  <p className="text-gray-700 mb-4">Brindar soporte técnico a la aplicación web. Agregué funcionalidad adicional a la aplicación web usando PHP y Javascript. Inventario de Productos.</p>
                  <p className="text-gray-500">2019-2021</p>
                </div>
              </div>
            </div>
    
            {/* Timeline Item 4 */}
            <div className="relative w-2/3">
              <div className="absolute bg-gray-500 h-full left-1/2 top-0 transform -translate-x-1/2"></div>
              <div className="flex items-center">
                <div className="w-6 h-6 bg-yellow-500 rounded-full mr-4"></div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Aloha Store Corporation SAC - Administrador Web / Desarrollador</h2>
                  <p className="text-gray-700 mb-4">Soporte técnico a la aplicación web. Creación de una app ecommerce y desplegarla en IOS/Android. Inventario de Productos.</p>
                  <p className="text-gray-500">2017-2019</p>
                </div>
              </div>
            </div>
          </div>
           {/* Formación Académica */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center border-b-2 border-y-yellow-500 pb-2">Formación Académica</h2>
        <p className="mb-2  md:text-center">
          <span className="font-semibold">Full Stack Developer</span> - Soy Henry Bootcamp
        </p>
        <p className="mb-2 md:text-center">
          <span className="font-semibold ">Bachiller en Ing. Informática</span> - Universidad Nacional de Piura
        </p>
        <p className="mb-2 md:text-center ">
          <span className="font-semibold">Inglés Intermedio</span> - Pontificia Universidad Católica del Perú
        </p>
      </div>
        </div>
      );
};

export default Experiencia;