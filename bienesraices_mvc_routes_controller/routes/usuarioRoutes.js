import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Mundo desde Express');
})

router.get('/nosotros', (req, res) => {
    res.json({msg: 'Hola desde nosotros'})
})

export default router;