const express = require('express');
const app = express();

const db = require('./database');

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
})