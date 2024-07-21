// Utilizando módulos 
import express from 'express';
import usuarioRoutes from  './routes/usuarioRoutes.js';

// Crea la app
const app = express()

// Habilitar Pug
app.set('view engine', 'pug');
app.set('views', './views')

// Routing 
app.use('/auth', usuarioRoutes)

// Define el puerto 
const port = 3000;

// Inicia la app 
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
})