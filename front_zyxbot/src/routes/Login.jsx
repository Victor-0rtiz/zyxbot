import React from "react";
import loginCover from "../img/LoginCover.webp";
import google from "../img/google.webp";
import facebook from "../img/facebook.webp";

const Login = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 h-screen w-full">
      <div className="bg-gray-950 flex flex-col justify-center items-center">
        <form className="max-w-[400px] w-full mx-auto bg-slate-950 p-10 px-8 rounded-lg">
          {/* Tus campos de entrada aquí */}
          <div className="mb-4 flex flex-col">
            <input
              type="text"
              placeholder="Usuario"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>
          <div className="mb-4 flex justify-center text-xl">
            <button className=" w-60 h-12 text-center font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg ">
              <a href="/chat">INICIAR</a>
            </button>
          </div>
          <h3 className="text-center text-white font-semibold mb-4">
            ¿Ya tienes una Cuenta? Iniciemos sesión
          </h3>
          <div className="mb-4 flex justify-center items-center text-xl">
            <button className="w-60 h-12 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg flex items-center">
              <img
                src={facebook}
                alt="Icono de Facebook"
                className="w-8 h-8 mr-8"
              />
              Facebook
            </button>
          </div>
          <div className="mb-4 flex justify-center items-center text-xl">
            <button className="w-60 h-12 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg flex items-center">
              <img
                src={google}
                alt="Icono de Google"
                className="w-8 h-8 mr-8"
              />
              Google
            </button>
          </div>
        </form>
      </div>

      <div className="sm:col-span-2 hidden sm:block">
        <img
          src={loginCover}
          alt="Aqui se muestra imagen del login"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Login;
