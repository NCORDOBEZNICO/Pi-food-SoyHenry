const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipe = require('./recipeRoutes.js')
const home = require('./homeRoute.js')
const diet = require('./dietRoute.js')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipe', recipe);
router.use('/home', home);
router.use('/diet', diet);




module.exports = router;
