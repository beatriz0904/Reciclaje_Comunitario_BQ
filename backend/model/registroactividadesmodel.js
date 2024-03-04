const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registroactividadSchema = new Schema({
    id: {type: String},
    tipo: {type: String },
    fecha:{type:Date },
   
}, {versionKey:false});


const registroactividadesmodel = mongoose.model('registroactividad', registroactividadSchema);


module.exports = registroactividadesmodel;