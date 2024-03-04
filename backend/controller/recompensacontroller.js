const Recompensa = require('../model/recompensamodel');


//insertar
function crear(req, res){
    const recompens = new Recompensa({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        puntos_requeridos: req.body.puntos_requeridos_material,
        stock_disponibles: req.body.stock_disponibles
    });

    
 recompens.save().then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
   
}

//Mostrar
function visualizar(req, res){
   
 Recompensa.find({}).then(Accion => {
    if (Recompensa.length) {
        return res.render('index', { Recompensa: Recompensa });
    }
    return res.status(204).send({ message: 'NO CONTENT' });
}).catch(err => res.status(500).send({ err }));
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const descripcion = req.body.descripcion_editar
    const puntos_requeridos = req.body.puntos_requeridos_editar
    const stock_disponibles = req.body.stock_disponibles_editar
    
   
 Recompensa.findByIdAndUpdate(id, { nombre:nombre, descripcion:descripcion, puntos_requeridos:puntos_requeridos, stock_disponibles: stock_disponibles  }).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));

}

function eliminar(req, res){
    const id = req.params.id
  
Recompensa.findByIdAndDelete(id).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}