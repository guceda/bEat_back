var express = require('express');
var router = express.Router();
let modelInvitados = require('../../models/invitados')

//Ruta:api/invitados/index
router.get('/index', (req, res) => {
    modelInvitados.index((err, rows)=>{
        if (err) return console.log(err.message)
        res.json(rows)
    })
})


//Ruta:/api/invitados/new
router.post('/new', (req, res) => {
    modelInvitados.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    },(err, result)=>{
        if(err) console.log(err.message)
        console.log('se ha añadido un invitado nuevo')
    })

})

module.exports = router ;

