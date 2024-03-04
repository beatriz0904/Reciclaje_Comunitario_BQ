const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recompensaSchema = new Schema({
    id: {type: String},
    nombre: {type: String },
    descripcion:{type:String },
    puntos_requeridos:{type:String },
    stocks_disponibles:{type:Number}
}, {versionKey:false});


const recompensamodel = mongoose.model('recompensa', recompensaSchema);


module.exports = recompensamodel;
