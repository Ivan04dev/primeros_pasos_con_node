import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo desde Express')
})

router.get('/nosotros', (req, res) => {
    res.json({msg: 'Hola desde nosotros'})
})

router.get('/login', (req, res) => {
    res.render('auth/login', {
        autenticado : true,
        nombre : 'Ivan'
    })
})

export default router;