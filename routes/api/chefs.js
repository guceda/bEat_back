var express = require('express');
var router = express.Router();
let modelChefs = require('../../models/chefs')


//RECUPERAMOS TODOS LOS CHEFS
//Ruta:api/chefs/index
router.get('/index', (req, res) => {
    modelChefs.index((err, rows) => {
        if (err) return console.log(err.message)
        res.json(rows)
    })
})


//LOGIN CHEFS
//Ruta:api/chefs/login
router.post('/login', (req, res) => {
    modelChefs.login(req.body.email, (err, result) => {
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


//NUEVO CHEF
//Ruta:/api/chefs/new
router.post('/new', (req, res) => {
    modelChefs.checkRegistro(req.body.email, (err, result) => {
        if (result.length === 0) {
            modelChefs.create({
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
            res.json({ERROR_NODE:'el email ya existe'})
        }
    })
})


module.exports = router;

