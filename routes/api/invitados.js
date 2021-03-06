var express = require('express');
var router = express.Router();
let modelInvitados = require('../../models/invitados')

//RECUPERAMOS TODOS LOS INVITADOS
//Ruta:api/invitados/index
router.get('/index', (req, res) => {
    modelInvitados.index((err, rows) => {
        if (err) return console.log(err.message)
        res.json(rows)
    })
})


//NUEVO INVITADO
//Ruta:/api/invitados/new
router.post('/new', (req, res) => {
    modelInvitados.checkRegistro(req.body.email, (err, result) => {
        if (result.length === 0) {
            modelInvitados.create({
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                surname: req.body.surname,
                age: req.body.age
            }, (err, resultado) => {
                if (err) console.log(err.message)
                res.json(resultado.insertId)
            })
        } else {
            res.json({ ERROR_NODE: 'el email ya existe' })
        }
    })
})


//LOGIN INVITADOS
//Ruta:api/invitados/login
router.post('/login', (req, res) => {
    modelInvitados.login(req.body.email, (err, result) => {
        if (err) return console.log(err.message)
        if (result.length === 0) {
            res.json({ error: 'No existe ningún usuario con este email' })
        } else {
            if (result[0].password === req.body.password) {
                res.json(result[0])
            } else {
                res.json({ error: 'La contraseña es incorrecta' })
            }
        }
    })
})


module.exports = router;




