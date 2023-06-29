const { Recipe } = require('../db');
const { API_KEY } = process.env
const axios = require('axios');


const getHome =  async () => {

    const aux = Recipe.findAll()

    let { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);

    // Utilizo desestructuracion para traerme a data y guardarlo en una variable result.


    const { result } = data;

    let obj = [];



    //Si result no esta vacio utilizamos map que nos devuelve las recetas.
    if(result.length){

        obj = result.map((element) => {
            return {
                id: element.id,
                title: element.title,
                healthScore: element.healthScore,
                summary: element.summary.replace(/<[^>]+>/g, ''),
                image: element.image,
                diet: element.diets? element.diets: "steps not found"
            }
        })
    }

    return [...aux, ...obj]
}

module.exports = getHome;