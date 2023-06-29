const express = require('express')
const router = express.Router()
const { getRecipeId } = require('../controllers/getRecipeId')
const { postRecipe } = require('../controllers/postRecipe')
const { getRecipe } = require('../controllers/getRecipe')


//Ruta por id

router.get('/:idReceta', async (req, res) => {
    try {
        const { idReceta } = req.params;
        if(idReceta.includes("-")) result = await getRecipeId(idReceta)
        else result = await getRecipeId(parseInt(getRecipeId))
        res.status(200).json(result)
        
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

//Ruta post

router.post('/', async (req, res) => {

    const {title, summary, healthScore, step, score, image, diet } = req.body; 

    try {
        const result = await postRecipe(title, summary, healthScore, step, score, image, diet)
        res.status(201).json(result) //201 creado con exito

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
})

//ruta get Name por query

router.get('/', async (req, res) => {
    try {
        const {name} = req.query
        console.log("back name : ", name)
        const result = await getRecipe(name)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})



module.exports = router;
