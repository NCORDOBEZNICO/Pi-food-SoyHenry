const express = require('express');
const router = express.Router();
const getHome = require('../controllers/getHome')
const getStartDiet = require('../controllers/getStartDiet');
const { Diet } = require('../db')


router.get('/', async (req, res) => {
    try {
        const home = await getHome()
        let auxDiet = await Diet.findAll()
        if(!auxDiet.length) {
            auxDiet = await getStartDiet(home)
        } else {
            const result = auxDiet.map((element) => element.name)
            auxDiet = [...result]
        }
        res.status(200).json({home, auxDiet})
    } catch (error) {
        res.status(400).json({error: error.message})
        
    }
})

module.exports = router;