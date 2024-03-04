const Campaña = require('../model/campañamodel');


//insertar
function crear(req, res){
    const campañ = new Campaña({
        titulo: req.body.titulo,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha
        
    });

    
 campañ.save().then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
   
}

//Mostrar
function visualizar(req, res){
   
 Campaña.find({}).then(Accion => {
    if (Campaña.length) {
        return res.render('index', { Campaña: Campaña });
    }
    return res.status(204).send({ message: 'NO CONTENT' });
}).catch(err => res.status(500).send({ err }));
}

function editar(req, res){
    const id = req.body.id_editar
    const titulo = req.body.titulo_editar
    const descripcion = req.body.descripcion_editar
    const fecha = req.body.fecha_editar
   
   
 Campaña.findByIdAndUpdate(id, { titulo:titulo, descripcion:descripcion, fecha:fecha}).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));

}

function eliminar(req, res){
    const id = req.params.id
  
Campaña.findByIdAndDelete(id).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}