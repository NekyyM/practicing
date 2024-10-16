import "./style.css";

const COLOR_PALETTE = {
  "#ACBEA3": "Ash gray",
  "#999AC6": "Cool gray",
  "#C05746": "Jasper",
  "#422040": "Dark purple",
  "#16697A": "Caribbean current",
};
const addOptionsToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPickerSelect.append(option);
  });
};

addOptionsToColorPicker();

//Llamo al elemento del html con query selector con el nombre de su ID y hago con el método objetcs.keys un objeto con los colores
/* para poder recorrerlo con un bucle forEach como si fuera un array teniendo resultados infinitos */

const addEventListenerToColorPicker = () => {
  const colorPickerSelect = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPickerSelect.addEventListener("change", (event) => {
    const newColor = event.target.value;
    //Se almacena el código de color
    document.body.style.backgroundColor = newColor;
    //Le asigno al h2 que muestra el valor de la clave que hay almacenada en newColor
    document.body.style.backgroundColor = newColor;
    //Se aplica el background color con el código de color seleccionado
    colorName.innerText = COLOR_PALETTE[newColor];
  });
};

addEventListenerToColorPicker();

//Con un escuchador de evento le añado un select para que cada vez que cambie gracias al evento change se setee el valor
// del target del evento
