import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../img/Logo.webp";
import img_1 from "../img/1.webp";
import img_2 from "../img/2.webp";
import img_3 from "../img/3.webp";
import img_4 from "../img/4.webp";
import registro_log from "../img/Registrate.webp";
import facebook from "../img/facebook.webp";








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

  return (
    <>
      <nav className="bg-gray-950 py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <ul className="text-white text-2xl font-poppins font-bold flex space-x-6 items-center">
              <li>
                <a href="#">
                  <img src={logo} alt="Logo ZyxBot" className="w-100 h-24 " />
                </a>
              </li>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Ventajas</a>
              </li>
              <li>
                <a href="#">Opiniones</a>
              </li>
              <li>
                <a href="#">Soporte</a>
              </li>
            </ul>
            <div className="flex space-x-4 font-poppins font-bold">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-800 hover:text-white">
                INICIAR SESIÓN
              </button>
              <button className="bg-blue-900 text-white px-4 py-2 rounded-lg   hover:bg-blue-500 hover:text-white">
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

      <section className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
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
        <div className="container mx-auto  ">
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
      {/*Registro home*/}
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
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 ml-8 flex flex-col items-center ">
            {/* Input 1 */}
            <div className="mb-4 ">
              <input
                type="text"
                placeholder="Nombre"
                className="px-20 py-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 2 */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Apellido"
                className="px-20 py-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 3 */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="px-20 py-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 4 */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Confirmar Contraseña"
                className="px-20 py-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
              />

              <h3 className="text-center text-white font-popp ">
                ¿Ya tienes una Cuenta? Iniciemos sesión
              </h3>
            </div>

            {/* Botón 1 */}
            <div className="mb-4 ">
              <button className=" font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-200 transition duration-300   ">
                REGÍSTRARSE
              </button>
            </div>

            <div className="flex  space-x-4">
              {/* Botón 2 */}
              <div className="mb-4">
                <button className=" text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-white transition duration-300 ease-in-out">
                  <img src={facebook} alt="" className="w-10 h-10" />
                </button>
              </div>

              {/* Botón 3 */}
              <div className="mb-4">
                <button className=" text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-red-500 transition duration-300 ease-in-out">
                  <img src={facebook} alt="" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Seccion de testimonio*/}

      <section className="bg-rose-100 py-16">
        <div className="text-center">
          <h2 className="text-5xl  font-mont mb-4 ">
            ¿Qué dicen nuestros usuarios?
          </h2>
          <p className="text-gray-700 mb-8">
            ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
            mundo de posibilidades educativas.
          </p>
        </div>

        <div className="container mx-auto">
          <div className="flex space-x-10">
            {/* Tarjetas en la parte izquierda */}
            <div className="flex flex-col space-y-4 w-1/2">
              {/* Card 1 */}
              <div className="bg-white rounded-md p-4 border border-black flex">
                <div className="rounded-full bg-black w-20 h-20 mx-4 flex-shrink-0">
                  {/* Agrega tu imagen redonda aquí */}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">Ana Gómez</h2>
                  <h3 className="text-xl font-semibold mb-2">
                    anagómez@gmail.com
                  </h3>
                  <p className="mr-12">
                    {" "}
                    {/* Agrega margen a la izquierda */}
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
        <div className="container mx-auto flex items-center justify-center  ">
          <div className="w-1/3 ml-8 flex flex-col items-center">
            {/* Input 1 */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="px-10 py-4 bg-zinc-800 text-white  text-xl rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 2 */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Teléfono"
                className="px-10 py-4 bg-zinc-800 text-white  text-xl rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 3 */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="px-10 py-4 bg-zinc-800 text-white text-xl rounded-md focus:outline-none focus:bg-gray-700"
              />
            </div>

            {/* Input 4 */}
            <div className="mb-4 relative">
              <textarea
                placeholder="Mensaje"
                rows="4"
                className="px-10 py-4 bg-zinc-800 text-white  text-xl rounded-md focus:outline-none focus:bg-gray-700"
              ></textarea>
            </div>

            {/* Botón 1 */}
            <div className="mb-4 flex justify-center">
              <button className="bg-gradient-to-r from-blue-950 via-blue-800 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-red transition duration-300">
                REGÍSTRARSE
              </button>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <div className="mb-4">
              <img
                src={logo}
                alt="Imagen de ejemplo"
                className="w-full h-auto"
              />
            </div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Imagen de ejemplo"
                className="w-16 h-16"
              />
            </div>
            <div className="mb-4">
              <img
                src={logo}
                alt="Imagen de ejemplo"
                className="w-16 h-16"
              />
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
