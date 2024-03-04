const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/reciclaje_comunitario';

mongoose.connect(url);

const db = mongoose.connection;
db.on('Error', console.error.bind(console, 'Error al conectar BD con Mongo'));
db.once('open', function callback(){
    console.log('Conectansose a Mongodb...!');
})
module.exports = db;
