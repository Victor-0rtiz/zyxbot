import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Index() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

 async function fetchData (){
    try {
      const response = await fetch("http://127.0.0.1:8000/consume-api", {
        method: "POST",
        body: JSON.stringify({ mensaje: mensaje }),
      });

      const data = await response.json();
      console.log(data);
      setRespuesta(data.respuesta); // actualiza la propiedad 'respuesta' en lugar de 'respuesta'
    } catch (error) {
      setRespuesta(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div className="flex items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 ">
          <a href="/" className="text-blue-500 hover:text-blue-800">
            <img src="" alt="no hay imagen" />
          </a>
          <a
            href="inicio"
            className="text-blue-500 hover:text-blue-800  text-white"
          >
            Inicio
          </a>
          <a
            href="ventajas"
            className="text-blue-500 hover:text-blue-800  text-white"
          >
            Ventajas
          </a>
          <a
            href="opiniones"
            className="text-blue-500 hover:text-blue-800  text-white"
          >
            Inicio
          </a>
          <a
            href="soporte"
            className="text-blue-500 hover:text-blue-800  text-white"
          >
            Inicio
          </a>
        </div>
        <div className="flex gap-1 sm:gap-2 md:gap-3 lg:gap-2 xl:gap-3">
          <a
            href="soporte"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Iniciar sesion
          </a>
          <a
            href="soporte"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          >
            Registrarse
          </a>
        </div>
      </nav>

      <div className="bg-gray-700">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="mensaje" // Agrega el atributo 'name' al campo
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
        <p>{respuesta}</p>
      </div>
    </>
  );
}

export default Index;
