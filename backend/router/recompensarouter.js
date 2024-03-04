const express = require('express')
const router = express.Router()

const recompensacontroller = require('../controller/recompensacontroller')

//Mostrar
router.get('/', recompensacontroller.visualizar);

//Insertar
router.post('/crear', recompensacontroller.crear );

//Post
router.post('/editar', recompensacontroller.editar);
//delete
router.get('/borrar/:id', recompensacontroller.eliminar)

module.exports = router;