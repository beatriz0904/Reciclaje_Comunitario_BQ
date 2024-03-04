const express = require('express');
const router = express.Router();
const Usuario = require('./usuariomodel');

router.post('/login', (req, res) => {
  const { correo, contrasena } = req.body;
  Usuario.findOne({ correo, contrasena }, (err, usuario) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error en el servidor' });
    } else if (!usuario) {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    } else {
      res.status(200).json({ message: 'Inicio de sesión exitoso', usuario });
    }
  });
});

module.exports = router;
