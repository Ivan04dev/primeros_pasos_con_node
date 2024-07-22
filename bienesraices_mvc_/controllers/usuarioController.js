const formularioLogin = (req, res) => {
    res.render('auth/login', {
        title: 'Iniciar Sesión'
    })
}

const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
        title: 'Crear Cuenta'
    })
}

const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
        title: 'Recupera tu acceso'
    })
}

export {
    formularioLogin,
    formularioRegistro,
    formularioOlvidePassword
}