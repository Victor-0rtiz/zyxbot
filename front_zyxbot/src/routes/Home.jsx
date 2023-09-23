import { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../img/Logo.webp";
import img_1 from "../img/1.webp";
import img_2 from "../img/2.webp";
import img_3 from "../img/3.webp";

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
                  <img src={logo} alt="Logo ZyxBot" className="w-100 h-24 "  />
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
                {" "}
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
          <div className="w-1/2 mr-8">
            <h1 className="text-[161.63px] font-bold font-['Rajdhani'] bg-gradient-to-r from-blue-950 via-blue-900 to-purple-600 text-transparent bg-clip-text ">
              ZyxBot
            </h1>
            <h2 className="text-3xl font-bold font-Montserrat mb-4">
              ¡Bienvenidos a ZyxBot!
            </h2>
            <p className="text-gray-700 font-Poppins font-medium mb-8 ">
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
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
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
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 ml-8">
            <h2 className="text-3xl  font-bold font-Montserrat mb-4">
              Chat en vivo: la forma más rápida y eficiente de ayudarte
            </h2>
            <p className="text-gray-700 mb-8">
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
          <div className="w-1/2 mr-8">
            <h2 className="text-3xl f font-bold font-Montserrat mb-4">
              ZyxBot Evoluciona Contigo
            </h2>
            <p className="text-gray-700 mb-8">
              En ZyxBot, estamos comprometidos a simplificar tu búsqueda
              educativa y a ser tu compañero confiable en cada paso de tu viaje
              académico. Descubre cómo nuestra plataforma integral puede marcar
              la diferencia en tu proceso de toma de decisiones y ayudarte a
              alcanzar tus metas educativas.
            </p>
            <p className="text-gray-700 mb-8">
              Estamos trabajando arduamente en el desarrollo de nuestra
              aplicación móvil para que puedas acceder a la asistencia educativa
              de ZyxBot desde cualquier lugar y en cualquier momento. Mantente
              al tanto, ¡pronto podrás llevar ZyxBot en tu bolsillo!
            </p>
            <p className="text-gray-700 mb-8">
              Estamos agregando funciones emocionantes para hacer que tu
              experiencia sea aún más enriquecedora. Pronto podrás disfrutar de
              características como búsquedas avanzadas, recomendaciones
              personalizadas y más.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src={img_3}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-rose-100 via-white to-white py-16">
        <div className="container mx-auto justify-center">
          <h2 className="text-3xl  font-bold font-Montserrat mb-4 ">Ventajas de ZyxBot</h2>
          <p className="text-gray-700 mb-8">
            En ZyxBot, estamos comprometidos a simplificar tu búsqueda educativa
            y a ser tu compañero confiable en cada paso de tu viaje académico.
            Descubre cómo nuestra plataforma integral puede marcar la diferencia
            en tu proceso de toma de decisiones y ayudarte a alcanzar tus metas
            educativas.
          </p>
        </div>
        <div className="container mx-auto ">
            {/* Párrafo adicional */}

            {/* Card debajo del párrafo */}
            <div className="flex space-x-20 container center">
              <div className="bg-slate-700 rounded-lg ">
                <h3 className="text-white text-2xl text-center font-semibold mb-4 ">
                  Información Confiable
                </h3>
                <p className="text-white text-center mb-4">
                  Acceder a información precisa y actualizada es esencial al
                  explorar opciones educativas. ZyxBot te brinda la ventaja de
                  obtener datos confiables sobre una amplia gama de
                  universidades en Nicaragua.
                </p>
                <p className="text-white text-center mb-4">
                  Nuestra plataforma te proporciona detalles exhaustivos sobre
                  programas académicos, requisitos de admisión, becas y más,
                  para que puedas tomar decisiones informadas
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg  ">
                <h3 className="text-white text-2xl text-center font-semibold mb-2">
                  Asistencia Virtual
                </h3>
                <p className="text-white text-center mb-4">
                  Imagina tener un experto en la información a tu disposición
                  las 24 horas del día. ZyxBot es tu asistente virtual listo
                  para responder a tus preguntas y brindarte orientación en
                  tiempo real.
                </p>
                <p className="text-white text-center mb-4">
                  Nuestra inteligencia artificial está diseñada para comprender
                  tus necesidades únicas y proporcionarte respuestas precisas y
                  personalizadas
                </p>
              </div>

              <div className="bg-slate-700 rounded-lg p-1">
                <h3 className="text-white text-2xl text-center font-semibold mb-2">
                  Facilidad de Uso
                </h3>
                <p className="text-white text-center mb-4">
                  La búsqueda educativa puede ser abrumadora, pero ZyxBot la
                  hace fácil. Navegar por nuestra plataforma es intuitivo y sin
                  complicaciones.
                </p>
                <p className="text-white text-center mb-4">
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
          <h2 className="text-3xl text-white font-semibold mb-4">
            Regístrate para Empezar Tu Viaje Educativo
          </h2>
          <p className="text-white mb-8">
            ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
            mundo de posibilidades educativas.
          </p>
        </div>
        <div className="container mx-auto flex items-center justify-center">
          <div className="w-1/2">
            <img
              src={img_2}
              alt="Imagen de ejemplo"
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/2 ml-8 ">
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
                className="px-20 py-4 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700"
              />

              <h3 className="text-center text-white">
                ¿Ya tienes una Cuenta? Iniciemos sesión
              </h3>
            </div>

            {/* Botón 1 */}
            <div className="mb-4 ">
              <button className=" bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg hover:bg-red transition duration-300   ">
                REGÍSTRARSE
              </button>
            </div>

            {/* Botón 2 */}
            <div className="mb-4">
              <button className="bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out">
                Iniciar Sesión
              </button>
            </div>

            {/* Botón 3 */}
            <div className="mb-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-md hover:bg-red-500 transition duration-300 ease-in-out">
                Olvidé mi Contraseña
              </button>
            </div>
          </div>
        </div>
      </section>

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

export default Home;
