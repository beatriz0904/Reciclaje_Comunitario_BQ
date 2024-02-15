const express = require('express')
const router = express.Router()

const campañacontroller = require('../controller/campañacontroller')

//Mostrar
router.get('/', campañacontroller.visualizar);

//Insertar
router.post('/crear', campañacontroller.crear );

//Post
router.post('/editar', campañacontroller.editar);
//delete
router.get('/borrar/:id', campañacontroller.eliminar)

module.exports = router;