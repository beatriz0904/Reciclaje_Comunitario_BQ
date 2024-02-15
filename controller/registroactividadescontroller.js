const RegistroActividades = require('../model/registroactividadesmodel');


//insertar
function crear(req, res){
    const actividades = new RegistroActividades({
        tipo: req.body.tipo,
        fecha: req.body.fecha
        
    });

    
 actividades.save().then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
   
}

//Mostrar
function visualizar(req, res){
   
 RegistroActividades.find({}).then(Accion => {
    if (RegistroActividades.length) {
        return res.render('index', { RegistroActividades: RegistroActividades });
    }
    return res.status(204).send({ message: 'NO CONTENT' });
}).catch(err => res.status(500).send({ err }));
}

function editar(req, res){
    const id = req.body.id_editar
    const tipo = req.body.tipo_editar
    const fecha = req.body.fecha_editar
   
   
 RegistroActividades.findByIdAndUpdate(id, { titulo:titulo, descripcion:descripcion, fecha:fecha}).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));

}

function eliminar(req, res){
    const id = req.params.id
  
RegistroActividades.findByIdAndDelete(id).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}