const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accionreciclajeSchema = new Schema({
    id: {type: String},
    tipo_material: {type: String },
    cantidad:{type:Number },
    fecha:{type:Date },
   
}, {versionKey:false});


const accionreciclajemodel = mongoose.model('accionreciclaje', accionreciclajeSchema);


module.exports = accionreciclajemodel;