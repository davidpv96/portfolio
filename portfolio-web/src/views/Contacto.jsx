import React, { useState } from 'react';


const Contacto = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      correo: '',
      asunto: '',
      mensaje: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes agregar la lógica para enviar el formulario o cualquier otra acción que desees realizar.
      console.log('Formulario enviado:', formData);
    };
  
    return (
      <div className="container mx-auto p-10 mb-20 dark:bg-neutral-950">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Envíame un Mensaje</h2>
        <form className="bg-gray-100  shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
              Correo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="correo"
              name="correo"
              type="email"
              placeholder="Correo"
              value={formData.correo}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="asunto">
              Asunto
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="asunto"
              name="asunto"
              type="text"
              placeholder="Asunto"
              value={formData.asunto}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mensaje"
              name="mensaje"
              placeholder="Mensaje"
              value={formData.mensaje}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="botones-web"
              type="submit"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
  
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-2 dark:text-white">Datos de Contacto</h2>
          <div className="bg-gray-100 shadow-md rounded p-4 mb-3">
          <p className="text-xl mb-2">
             davidpv96@hotmail.com
          </p>
        </div>
        <div className="bg-gray-100 shadow-md rounded p-4">
          <p className="text-xl">
             +51942171888
          </p>
        </div>
        </div>
      </div>
    );
  };

export default Contacto;