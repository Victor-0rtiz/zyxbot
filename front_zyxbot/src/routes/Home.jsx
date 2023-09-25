
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import logo from "../img/Logo.webp";
import img_1 from "../img/1.webp";
import img_2 from "../img/2.webp";
import img_3 from "../img/3.webp";
import img_4 from "../img/4.webp";
import registro_log from "../img/Registrate.webp";
import facebook from "../img/facebook.webp";
import instagram from "../img/instagram.webp";
import twitter from "../img/twitter.webp";
import tiktok from "../img/tiktok.webp";
import whatsapp from "../img/whatsapp.webp";
import yotube from "../img/yotube.webp";

import Ana_ft from "../img/Anaft.webp";

function Home() {
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

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`py-2 ${scrolling ? 'fixed top-0 left-0 right-0 bg-gray-950 bg-opacity-70' : 'bg-gray-950'} z-50`}>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="text-white text-xl font-poppins font-bold flex space-x-8 items-center">
              <li className="relative flex items-center">
                <a href="#" id="#inicio" className="flex items-center">
                  <img src={logo} alt="Logo ZyxBot" className="w-52 h-auto" />
                </a>
              </li>
              <li className="relative flex items-center justify-center">
                <a href="#inicio" className="hover:text-blue-500">Inicio</a>
              </li>
              <li className="relative flex items-center justify-center">
                <a href="#ventajas" className="hover:text-blue-500">Ventajas</a>
              </li>
              <li className="relative flex items-center justify-center">
                <a href="#" className="hover:text-blue-500">Opiniones</a>
              </li>
              <li className="relative flex items-center justify-center">
                <a href="#" className="hover:text-blue-500">Soporte</a>
              </li>
            </ul>
            <div className="flex space-x-4 font-poppins font-bold">
              <button className="bg-blue-500 text-white w-40 h-10 px-2 py-2 rounded-lg hover:bg-blue-800 hover:text-white">
                INICIAR SESIÓN
              </button>
              <button className="bg-indigo-600 text-white w-40 h-10 px-2 py-2 rounded-lg hover:bg-blue-500 hover:text-white">
                REGISTRARSE
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      <section className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 mr-8 ml-12">
            <h1 className="text-9xl font-raj bg-gradient-to-r from-blue-950 via-blue-900 to-purple-600 text-transparent bg-clip-text mb-12 ">
              ZyxBot
            </h1>
            <h2 className="text-5xl font-bold font-mont mb-4">
              ¡Bienvenidos a ZyxBot!
            </h2>
            <p className="font-popp mb-8 ">
              ¿Buscas respuestas a tus preguntas sobre universidades y programas
              académicos en Nicaragua? ZyxBot está aquí para ayudarte. Nuestra
              inteligencia artificial potenciada te proporcionará información
              precisa y relevante de manera eficiente. Ya sea que estés buscando
              tu primera experiencia universitaria o explorando opciones para
              continuar tu educación, ZyxBot es tu compañero en este viaje
              educativo.
            </p>
            <a
              href="#"
              className="bg-blue-900 text-white text-xl px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              IR AL CHAT
            </a>
          </div>
          <div className="w-1/2">
            <img
              src={img_1}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <img
              src={img_2}
              alt="ZyxBot en movil y ordenador"
              className="w-full h-auto "
            />
          </div>
          <div className="w-1/2  ml-12  ">
            <h2 className="text-5xl  font-bold font-mont mb-4">
              Chat en vivo: la forma más rápida y eficiente de ayudarte
            </h2>
            <p className="font-popp mb-8">
              ¿Qué mejor manera de ofrecerles ayuda que a través de un breve
              chat en nuestro sitio web? Es mucho más rápido que el correo
              electrónico y mucho más eficiente que el teléfono. No hagamos que
              nuestros usuarios esperen. Con ZyxBot, obtendrás respuestas
              instantáneas y asistencia oportuna en tu búsqueda educativa.
              ¡Conversa con nosotros ahora y descubre lo fácil que puede ser tu
              viaje educativo!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-100 via-white to-white ">
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2 ml-12">
            <h2 className="text-5xl font-mont mb-4">
              ZyxBot Evoluciona Contigo
            </h2>
            <p className="font-popp mb-4">
              En ZyxBot, estamos comprometidos a simplificar tu búsqueda
              educativa y a ser tu compañero confiable en cada paso de tu viaje
              académico. Descubre cómo nuestra plataforma integral puede marcar
              la diferencia en tu proceso de toma de decisiones y ayudarte a
              alcanzar tus metas educativas.
            </p>
            <p className="font-popp mb-4">
              Estamos trabajando arduamente en el desarrollo de nuestra
              aplicación móvil para que puedas acceder a la asistencia educativa
              de ZyxBot desde cualquier lugar y en cualquier momento. Mantente
              al tanto, ¡pronto podrás llevar ZyxBot en tu bolsillo!
            </p>
            <p className="font-popp mb-4">
              Estamos agregando funciones emocionantes para hacer que tu
              experiencia sea aún más enriquecedora. Pronto podrás disfrutar de
              características como búsquedas avanzadas, recomendaciones
              personalizadas y más.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={img_3}
              alt="zyxboy en dispositivos moviles"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
      {/* Ventajas */}
      <section id="ventajas" className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
        <div className="container mx-auto justify-center ml-12">
          <h2 className="text-5xl font-mont mb-4 ">Ventajas de ZyxBot</h2>
          <p className=" font-popp mb-4">
            En ZyxBot, estamos comprometidos a simplificar tu búsqueda educativa
            y a ser tu compañero confiable en cada paso de tu viaje académico.
            Descubre cómo nuestra plataforma integral puede marcar la diferencia
            en tu proceso de toma de decisiones y ayudarte a alcanzar tus metas
            educativas.
          </p>
        </div>
        <div className="container mx-auto">
          {/* Card debajo del párrafo */}
          <div className="flex space-x-10 container center">
            <div className="bg-slate-700 rounded-lg py-16  ">
              <h2 className="text-white text-2xl text-center font-semibold mb-4 ">
                Información Confiable
              </h2>
              <p className="text-white text-justify mb-4 ">
                Acceder a información precisa y actualizada es esencial al
                explorar opciones educativas. ZyxBot te brinda la ventaja de
                obtener datos confiables sobre una amplia gama de universidades
                en Nicaragua.
              </p>
              <p className="text-white text-justify mb-4 ">
                Nuestra plataforma te proporciona detalles exhaustivos sobre
                programas académicos, requisitos de admisión, becas y más, para
                que puedas tomar decisiones informadas
              </p>
            </div>

            <div className="bg-slate-700 rounded-lg py-16   ">
              <h2 className="text-white text-2xl text-center font-semibold mb-2">
                Asistencia Virtual
              </h2>
              <p className="text-white text-justify mb-4 ">
                Imagina tener un experto en la información a tu disposición las
                24 horas del día. ZyxBot es tu asistente virtual listo para
                responder a tus preguntas y brindarte orientación en tiempo
                real.
              </p>
              <p className="text-white text-justify mb-4 ml-8 mr-8">
                Nuestra inteligencia artificial está diseñada para comprender
                tus necesidades únicas y proporcionarte respuestas precisas y
                personalizadas
              </p>
            </div>

            <div className="bg-slate-700 rounded-lg py-16 ml-12 mr-12 ">
              <h2 className="text-white text-2xl text-center font-semibold mb-2 ml-8">
                Facilidad de Uso
              </h2>
              <p className="text-white text-justify mb-4 ml-8 mr-8">
                La búsqueda educativa puede ser abrumadora, pero ZyxBot la hace
                fácil. Navegar por nuestra plataforma es intuitivo y sin
                complicaciones.
              </p>
              <p className="text-white text-justify mb-4 ml-8 mr-8 ">
                Hemos diseñado ZyxBot pensando en ti. Te ofrecemos una
                experiencia amigable y accesible para que encuentres la
                información que necesitas de manera rápida y sencilla
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*Registro home */}
      <section className="bg-gray-950 py-16">
        <div className="text-center">
          <h2 className="text-5xl text-white font-mont mb-4">
            Regístrate para Empezar Tu Viaje Educativo
          </h2>
          <p className="text-white font-popp mb-4">
            ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
            mundo de posibilidades educativas.
          </p>
        </div>
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <img
              src={registro_log}
              alt="Imagen de ZyxBot registro"
              className="w-full h-auto"
            />
          </div>
          <form className="w-1/3 ml-8 flex flex-col items-center ">
            <input
              type="text"
              placeholder="Nombre"
              className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />

            <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300 mb-4">
              REGÍSTRARSE
            </button>
            <h3 className="text-center text-white font-popp mb-4 ">
              ¿Ya tienes una Cuenta? Iniciemos sesión
            </h3>

            <div className="flex space-x-4">
              <button className=" w-20 h-11 px-6 py-2  flex items-center rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-white transition duration-300 ease-in-out">
                <img
                  src={facebook}
                  alt="Icono de facebook"
                  className="w-8 h-8"
                />
              </button>
              <button className=" w-20 h-11 px-6 py-2  rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-red-500 transition duration-300 ease-in-out">
                <img src={facebook} alt="Icono de Google" className="w-8 h-8" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/*Seccion de testimonio*/}
      <section className="bg-rose-100 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-mont mb-4">
            ¿Qué dicen nuestros usuarios?
          </h2>
          <p className="text-gray-700 mb-8">
            ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
            mundo de posibilidades educativas.
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex space-x-10">
            <div className="flex flex-col w-1/2">
              <div className="bg-white rounded-md px-4 p-3 border border-black">
                <div className="flex items-center">
                  <img
                    src={Ana_ft}
                    alt="Imagen de perfil de Ana"
                    className="rounded-full w-20 h-20"
                  />
                  <div className="ml-4">
                    <h2 className="text-2xl font-semibold">Ana Gómez</h2>
                    <h3 className="text-xl font-semibold mb-2">
                      anagómez@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="mt-4 px-4">
                  <p>
                    ZyxBot ha hecho que mi búsqueda universitaria sea mucho más
                    fácil. Pude obtener información sobre diferentes programas
                    de estudio y requisitos de admisión de manera rápida.
                    ¡Definitivamente recomiendo esta plataforma!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTAS Y COMENTARIOS */}
      <section className="bg-gray-950 py-16">
        <h2 className="text-5xl text-white text-center font-mont mb-10">
          Envíanos tus consultas y comentarios
        </h2>
        <div className="flex">
          <form className="w-1/3 ml-8 flex flex-col items-center">
            <input
              type="text"
              placeholder="Nombres y Apellidos"
              className="w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Teléfono"
              className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Correo electrónico"
              className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />

            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-64  px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            ></textarea>
            <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300">
              ENVIAR
            </button>
          </form>
          <div className="w-2/3 flex flex-col items-center">
            <img src={logo} alt="Logo de ZyxBot" className="image-style mb-8" />
            <div className="flex space-x-4">
              <img src={twitter} alt="Icono de Twitter" className="w-10 h-10" />
              <img
                src={instagram}
                alt="Icono de instagram"
                className="w-10 h-10"
              />
              <img
                src={facebook}
                alt="Icono de facebook"
                className="w-10 h-10"
              />
              <img src={tiktok} alt="Icono de tiktok" className="w-10 h-10" />
              <img
                src={whatsapp}
                alt="Icono de whatsapp"
                className="w-10 h-10"
              />
              <img src={yotube} alt="Icono de yotube" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </section>

      {/*NUESTRO EQUIPO DE DESARROLLO*/}
      <section className="bg-gradient-to-b from-slate-400 via-white to-white ">
        <div className="container mx-auto flex ml-12  ">
          <div className="w-1/2">
            <h2 className="text-5xl font-mont mb-4 mt-10">
              Nuestro Equipo de Desarrollo
            </h2>
            <p className="text-gray-700 mb-8 ">
              Detrás de ZyxBot se encuentra un equipo apasionado y altamente
              capacitado de profesionales de la tecnología y la educación.
              Nuestra dedicación es impulsar tu éxito académico al brindarte una
              plataforma confiable y eficiente para tu búsqueda educativa.
              Conoce al equipo que hace posible ZyxBot y su compromiso con tu
              viaje educativo.
            </p>
            <div className="flex items-center space-x-4 mb-8">
              <div className="rounded-full bg-black w-20 h-20 flex-shrink-0">
                <img
                  src={img_4}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Ana Gómez desarrollador
                </h2>
                <h3 className="text-xl font-semibold mb-2">
                  anagómez@gmail.com
                </h3>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="rounded-full bg-black w-20 h-20 flex-shrink-0">
                <img
                  src={img_4}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">
                  Ana Gómez desarrollador
                </h2>
                <h3 className="text-xl font-semibold mb-2">
                  anagómez@gmail.com
                </h3>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <img
              src={img_4}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <footer className="bg-zinc-800 text-white py-4">
        <div className="container mx-auto text-center flex justify-center items-center flex-col">
          <h2 className="text-3xl text-white font-mont mb-4">
            SÍGANOS EN LAS REDES SOCIALES
          </h2>
          <div className="flex space-x-4 mb-4">
            <img src={twitter} alt="Icono de Twitter" className="w-10 h-10" />
            <img
              src={instagram}
              alt="Icono de instagram"
              className="w-10 h-10"
            />
            <img src={facebook} alt="Icono de facebook" className="w-10 h-10" />
            <img src={tiktok} alt="Icono de tiktok" className="w-10 h-10" />
            <img src={whatsapp} alt="Icono de whatsapp" className="w-10 h-10" />
            <img src={yotube} alt="Icono de yotube" className="w-10 h-10" />
          </div>
          <h2 className="text-3xl text-white font-mont mb-4">
            REGÍSTRESE EN ZYXBOT AHORA
          </h2>
          <h6>
            ¡Hola! Nos encanta verte por nuestro sitio web. Antes de que
            empieces a utilizar nuestro sitio web, queremos informarte de que
            nos servimos de cookies y tecnologías similares para mejorar tu
            experiencia en el sitio, analizar el tráfico y el uso, personalizar
            el contenido de acuerdo con tus preferencias y mejorar nuestro
            marketing. Si utilizas nuestro sitio web, nos das tu consentimiento
            para que nuestros socios y nosotros recopilemos, utilicemos,
            recuperemos y almacenemos cookies y tecnologías similares en tu
            ordenador o en otros dispositivos. Puedes retirar este
            consentimiento en cualquier momento en la configuración del
            navegador de tu ordenador o tus dispositivos. Haz clic en la
            Política de cookies para consultar cómo puedes controlar el uso de
            cookies mediante tu dispositivo. Tus datos se tratarán de acuerdo
            con nuestra Política de privacidad.
          </h6>
        </div>
        <p className="text-center">
          Copyright &copy; 2023 ZixBot, Inc. Todos los derechos reservados.
        </p>
      </footer>

      <div className="bg-gray-700">
        <form id="formchat" onSubmit={handleSubmit}>
          <label htmlFor="mensaje">Mensaje</label>
          <input
            type="text"
            id="mensaje"
            name="mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
          />
          <input type="submit" value="Enviar mensajes" />
        </form>
        <div className="chat">
          <p>{respuesta}</p>
        </div>
      </div>
    </>
  );
}

export default Home;
