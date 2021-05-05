const express = require("express");
const conectDB = require('./config/db')
const cors = require("cors");

const app = express();


//FUNCION PARA CONECTAR A LA BASE DE DATOS
conectDB();

app.use(cors());

app.use(express.json());

app.get('/', function(req, res) {
    res.send('Hola, esta es la api del desafio para el desafio de ripley');
  });

app.use('/api/transferencias', require('./routes/transferencia'));
app.use('/api/destinatarios', require('./routes/destinatario'));

const PORT = process.env.PORT || 5000;
//INCIALIZADOR DEL SERVIDOR
app.listen(PORT, ()=>{
    console.log("Servidor corriendo en el puerto 3000")
})