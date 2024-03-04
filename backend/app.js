/*const express = require('express');
const app = express();

const db = require('./src/database');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const usuariosrouter = require('./router/usuariosrouter');
app.use(usuariosrouter);

const accionesreciclajerouter = require('./router/accionesreciclajerouter');
app.use(accionesreciclajerouter);

const recompensarouter = require('./router/recompensarouter');
app.use(recompensarouter);

const campañarouter = require('./router/campañarouter');
app.use(campañarouter);

const registroactividadesrouter = require('./router/registroactividadesrouter');
app.use(registroactividadesrouter);



app.listen(3000, ()=>{
    console.log('Server is up!');
})*/
const express = require('express');
const app = express();

// Configuración de middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.post('/login', (req, res) => {
  // Aquí maneja la lógica de autenticación
  const { email, password } = req.body;
  // Verifica credenciales y responde apropiadamente
});

// Configuración de las rutas para diferentes recursos utilizando routers
const usuariosrouter = require('./router/usuariosrouter');
app.use(usuariosrouter);

const accionesreciclajerouter = require('./router/accionesreciclajerouter');
app.use(accionesreciclajerouter);

const recompensarouter = require('./router/recompensarouter');
app.use(recompensarouter);

const campañarouter = require('./router/campañarouter');
app.use(campañarouter);

const registroactividadesrouter = require('./router/registroactividadesrouter');
app.use(registroactividadesrouter);

// Configuración del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
