const Usuario = require('../model/usuariomodel');


//insertar
function crear(req, res){
    const user = new Usuario({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        correo: req.body.correo,
        contraseña:req.body.contraseña,
        puntos_acumulados: req.body.puntos_acumulados
        
    })
    
 user.save().then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
   
}

//Mostrar
function visualizar(req, res){
   
 Usuario.find({}).then(Usuario => {
    if (Usuario.length) {
        return res.render('index', { Usuario: Usuario });
    }
    return res.status(204).send({ message: 'NO CONTENT' });
}).catch(err => res.status(500).send({ err }));
}

function editar(req, res){
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const direccion = req.body.direccion_editar
    const correo = req.body.correo_editar
    const contraseña=req.body.contrase_editar
    const puntos_acumulados = req.body.puntos_acumulados_editar

   
 Usuario.findByIdAndUpdate(id, { nombre: nombre, direccion: direccion, correo: correo, contraseña:contraseña, puntos_acumulados: puntos_acumulados }).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));

}

function eliminar(req, res){
    const id = req.params.id
  
Usuario.findByIdAndDelete(id).then(() => {
    res.redirect('/');
}).catch(err => res.status(500).send({ err }));
}

module.exports = {
    visualizar, 
    crear,
    editar, 
    eliminar
}