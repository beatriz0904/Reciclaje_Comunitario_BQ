const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    id: {type: String},
    nombre: {type: String },
    direccion:{type:String },
    correo:{type:String },
    puntos_acumulados:{type:Number}
}, {versionKey:false});


const Usuariomodel = mongoose.model('usuario', usuarioSchema);


module.exports = Usuariomodel;
