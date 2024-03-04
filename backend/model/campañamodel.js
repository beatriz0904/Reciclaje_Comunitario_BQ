const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campañaSchema = new Schema({
    id: {type: String},
    titulo: {type: String },
    descripcion:{type:String },
    fecha:{type:Date },
   
}, {versionKey:false});


const campañamodel = mongoose.model('campaña', campañaSchema);


module.exports = campañamodel;