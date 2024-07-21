// Utilizando módulos 
import express from 'express';
import usuarioRoutes from  './routes/usuarioRoutes.js';

// Crea la app
const app = express()

// Routing 
app.use('/', usuarioRoutes)

// Define el puerto 
const port = 3000;

// Inicia la app 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})