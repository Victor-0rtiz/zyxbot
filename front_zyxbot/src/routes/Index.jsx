import { useState } from 'react';
import { Outlet } from "react-router-dom";

function Index() {
  const [mensaje, setMensaje] = useState("");
  const [respuesta, setRespuesta] = useState("");

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/mensaje", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mensaje: mensaje }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRespuesta(data.respuesta);
      })
      .catch((error) => {
        console.error(error);
      });
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
        <form id="formchat" onSubmit={handleSubmit}>
          <label htmlFor="mensaje">Mensaje</label>
          <input type="text" id="mensaje" name="mensaje" value={mensaje} onChange={handleMensajeChange} />
          <input type="submit" value="Enviar mensajes" />
        </form>
        <div className="chat">
            <p>{respuesta}</p>
        </div>
      </div>
    </>
  );
}

export default Index;
