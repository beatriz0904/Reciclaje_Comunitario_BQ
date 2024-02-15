const express = require('express')
const router = express.Router()

const accionreciclajecontroller = require('../controller/accionreciclajecontroller')

//Mostrar
router.get('/', accionreciclajecontroller.visualizar);

//Insertar
router.post('/crear', accionreciclajecontroller.crear );

//Post
router.post('/editar', accionreciclajecontroller.editar);
//delete
router.get('/borrar/:id', accionreciclajecontroller.eliminar)

module.exports = router;