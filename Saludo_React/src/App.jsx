import { useState } from "react";
import "./App.css";
import { Parrafo } from "./Components";

const App = () => {
  const [count, setCount] = useState(0);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  // creo la constante de mostrar contenido con un nuevo useState con un valor booleano que será true o false

  const toggleContenido = () => {
    //Con un toggle digo que el valor se aparezca o no con un operador not, es como un botón que cambia de true a false
    setMostrarContenido(!mostrarContenido);
  };

  const actualizarEstado = () => {
    setCount((value) => (value + 1) % 24); //Al valor le sumo +1 y lo divido entre 24 para que sea un rango de numeros entre el 0 y el 24 como las horas del reloj
    console.log("estado debajo de la actualizacion", count);
  };

  const saludo = () => {
    if (count >= 6 && count < 12) {
      return <Parrafo texto={"Buenas días ☀️"} />;
    } else if (count >= 12 && count < 20) {
      return <Parrafo texto={"Buenas tardes ☕️"} />;
    } else {
      return <Parrafo texto={"Buenas noches 🌙"} />;
    }
  };

  return (
    <>
      <div>{console.log("estado en el template ", count)}</div>
      {saludo()}

      <div className="card">
        {/* En react las clases se llaman className */}
        <button onClick={() => actualizarEstado()}>count is {count}</button>
      </div>

      <div>
        <button onClick={toggleContenido}>Contenido</button>
        {/* creo un boton con la funcion toggle para cambiar de true a false y mostrar contenido en un parrafo */}
        {mostrarContenido && (
          <div>
            <h2>Contenido Renderizado</h2>
            <p>
              Este es el contenido que se muestra cuando el valor del setState
              es true.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
