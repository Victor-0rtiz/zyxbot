import React from "react";
import regisroCover from "../img/RegistroCover.webp";
import facebook from "../img/facebook.webp";
import google from "../img/google.webp";

const Registro = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 h-screen w-full">
      <div className="sm:col-span-2 hidden sm:block">
        <img
          src={regisroCover}
          alt="Aqui se muestra imagen del login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-gray-950 flex flex-col justify-center items-center ">
        <form className="max-w-[400px] w-full mx-auto bg-slate-950 p-10 px-8 rounded-lg">
          <div className="mb-4 flex flex-col">
            <input
              type="text"
              placeholder="Nombre"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          <div className="mb-4 flex justify-center">
            <button className="font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-200 transition duration-300">
              <a href="/chat">REGÍSTRARSE</a>
            </button>
          </div>
            <h3 className="text-center text-white font-semibold mb-4">
              ¿Ya tienes una Cuenta? Iniciemos sesión
            </h3>
          </div>
          <div className="flex space-x-4 justify-center">
            {/* Botón 2 */}
            <div className="mb-4">
              <button className="text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-white transition duration-300 ease-in-out">
                <img src={facebook} alt="" className="w-8 h-8" />
              </button>
            </div>

            {/* Botón 3 */}
            <div className="mb-4">
              <button className="text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-red-500 transition duration-300 ease-in-out">
                <img src={google} alt="" className="w-8 h-8 " />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;
