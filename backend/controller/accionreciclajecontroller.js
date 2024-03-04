const Accion = require('../model/accionreciclajemodel');


//insertar
function crear(req, res){
    const action = new Accion({
        tipo_material: req.body.tipo_material,
        cantidad: req.body.cantidad,
        fecha: req.body.fecha
        
    
    })
    
 action.save().then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
   
}

//Mostrar
function visualizar(req, res){
   
 Accion.find({}).then(Accion => {
    if (Accion.length) {
        return res.render('index', { Accion: Accion });
    }
    return res.status(204).send({ message: 'NO CONTENT' });
}).catch(err => res.status(500).send({ err }));
}

function editar(req, res){
    const id = req.body.id_editar
    const tipo_material = req.body.tipo_material_editar
    const cantidad = req.body.cantidad_editar
    const fecha = req.body.fecha_editar
    
   
 Accion.findByIdAndUpdate(id, { tipo_material:tipo_material, cantidad:cantidad, fecha:fecha }).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));

}

function eliminar(req, res){
    const id = req.params.id
  
Accion.findByIdAndDelete(id).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}