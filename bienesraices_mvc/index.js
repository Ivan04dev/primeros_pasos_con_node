// Utilizando common js 
const express = require('express');

// Crea la app
const app = express()

// Routing 
app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express');
})

app.get('/nosotros', (req, res) => {
    res.json({msg: 'Hola desde nosotros'})
})

// Define el puerto 
const port = 3000;

// Inicia la app 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})