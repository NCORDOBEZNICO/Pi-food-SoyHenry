const express = require('express')
const router = express.Router();
const { Diet } = require('../db')

router.get('/', async (req, res) => {
    const result = await Diet.findAll()
    res.status(200).json(result)
})

module.exports = router;