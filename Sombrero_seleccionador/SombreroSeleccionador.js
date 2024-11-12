/*
  EJERCICIO:
  Cada 1 de septiembre, el Hogwarts Express parte hacia la escuela
  de programación de Hogwarts para magos y brujas del código.
  En ella, su famoso sombrero seleccionador ayuda a los programadores
  a encontrar su camino...
  Desarrolla un programa que simule el comportamiento del sombrero.
  Requisitos:
  1. El sombrero realizará 10 preguntas para determinar la casa del alumno.
  2. Deben existir 4 casas. Por ejemplo: Frontend, Backend, Mobile y Data.
     (Puedes elegir las que quieras)
  Acciones:
  1. Crea un programa que solicite el nombre del alumno y realice 10
     preguntas, con cuatro posibles respuestas cada una.
  2. Cada respuesta asigna puntos a cada una de las casas (a tu elección).
  3. Una vez finalizado, el sombrero indica el nombre del alumno 
     y a qué casa pertenecerá (resuelve el posible empate de manera aleatoria,
     pero indicándole al alumno que la decisión ha sido complicada).
*/

// Declarar variable de las casas con un valor inicial de cero puntos cada una y el usuario es un string vacío por ahora
let userName = "";
let frontEndHouse = 0;
let backEndHouse = 0;
let mobileHouse = 0;
let dataScienceHouse = 0;

// Declarar un array con las preguntas y sus respuestas
const questions = [
  "1. ¿Qué juego prefieres?: \na) SuperMario \nb) Ajedrez \nc) Pokémon Go \nd) Sudoku",
  "2. ¿Con qué actividad te identificas más?: \na) Dibujar \nb) Doblar la ropa \nc) Editar fotos en el teléfono \nd) Acomodar la despensa",
  "3. ¿Dónde te gusta más escuchar música?: \na) Auriculares  \nb) Ordenador \nc) Coche \nd) Televisión",
  "4. ¿Qué superhéroe es tu favorito?: \na) Spider-Man \nb) Superman \nc) Deadpool \nd) Wolverine",
  "5. Si volvieras a cursar una materia, ¿cuál sería?: \na) Biología \nb) Química \nc) Física \nd) Probabilidad y estadística",
  "6. Si te regalaran un dispositivo, ¿cuál elegirías?: \na) MacBook \nb) PC \nc) Smartphone \nd) Playstation",
  "7. ¿Qué recurso utilizarías para administrar tus ahorros?: \na) Aplicación de escritorio \nb) Papel y lápiz \nc) Aplicación móvil \nd) Hojas de cálculo",
  "8. ¿Qué te llama más la atención en un sitio web?: \na) La apariencia \nb) Las validaciones en un formulario \nc) La adaptación a medidas pequeñas \nd) La información que muestra",
  "9. ¿Qué lenguaje de programación es tu favorito?: \na) JavaScript \nb) Python \nc) React \nd) SQL",
  "10. ¿Cúal es tu comida favorita?: \na) Pasta \nb) Pizza \nc) Sopa \nd) Solomillo",
];

userName = prompt("Por favor, ingresa tu nombre:");

// Reccoremos el listado de las preguntas
for (let index = 0; index < questions.length; index++) {
  let quiz = prompt(questions[index]);

  switch (quiz.toLowerCase()) {
    case "a":
      frontEndHouse += 4;
      break;

    case "b":
      backEndHouse += 4;
      break;

    case "c":
      mobileHouse += 4;
      break;

    case "d":
      dataScienceHouse += 4;
      break;

    default:
      alert("Por favor, selecciona una respuesta válida. ❌");

      index--;
      break;
  }
}

let allHouses = {
  "Front-end": frontEndHouse,
  "Back-end": backEndHouse,
  Mobile: mobileHouse,
  "Data Science": dataScienceHouse,
};
let houseNames = Object.keys(allHouses);
let higherScore = Math.max.apply(
  null,
  houseNames.map((houseScore) => allHouses[houseScore])
);
let chosenHouse = houseNames.reduce((house, score) => {
  if (allHouses[score] === higherScore) {
    house.push(score);
  }

  return house;
}, []);
let randomSelection =
  Math.round(Math.random() * (chosenHouse.length - 1) + 1) - 1;

if (chosenHouse.length > 1) {
  console.log(
    `${userName}, tenemos la decisión tomada 🧙🏼 la decisión ha sido complicada, pero perteneces a la casa de ${chosenHouse[randomSelection]} 🪄.`
  );
} else {
  console.log(`${userName}, pertenecerás a la casa de ${chosenHouse[0]}.`);
}
