const express = require('express')
const router = express.Router()

const registroactividadescontroller = require('../controller/registroactividadescontroller')

//Mostrar
router.get('/', registroactividadescontroller.visualizar);

//Insertar
router.post('/crear', registroactividadescontroller.crear );

//Post
router.post('/editar', registroactividadescontroller.editar);
//delete
router.get('/borrar/:id', registroactividadescontroller.eliminar)

module.exports = router;