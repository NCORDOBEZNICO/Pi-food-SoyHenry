const { Diet } = require('../db');

const getStartDiet = async (recipes) => {
  let dietArray = [];

  for (const element of recipes) {
    dietArray = [...dietArray, ...element.diet]; // Guardo los elementos en un mismo arreglo
  }

  const result = [...new Set(dietArray)]; // Devuelve un arreglo borrando los elementos repetidos.

  // Utilizo el ciclo for...of para recorrer cada elemento y crear un nuevo registro en la DB utilizando el modelo Diet
  for (const element of result) {
    // Utilizo async/await para que espere que se resuelva la promesa anterior antes de seguir con la siguiente
    await Diet.create({ name: element });
  }

  return result;
}

module.exports = getStartDiet;
