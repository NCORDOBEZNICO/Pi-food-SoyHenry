const { API_KEY } = process.env
const { Recipe } = require('../db')
const axios = require('axios');

module.exports = getRecipeId = async (id) => {
    if(typeof id === 'number') {
        let { data } = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)
        const result = data;

        return({
            id: result.id,
            title: result.title,
            summary: result.summary,
            healthScore: result.healthScore,
            image: result.image,
            dishTypes: result.dishTypes,
            diet: result.diet,
        })
    } else {
        return await Recipe.findByPk(id);
    }
}