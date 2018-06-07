var express = require('express');
var router = express.Router();
let modelChefs = require('../../models/chefs')

//CHEFS

//Ruta:api/chefs/index
router.get('/index', (req, res) => {
    modelChefs.index((err, rows)=>{
        if (err) return console.log(err.message)
        res.json(rows)
    })
})


//Ruta:/api/chefs/new
router.post('/new', (req, res) => {
    modelChefs.create({
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age
    },(err, result)=>{
        if(err) console.log(err.message)
        console.log('se ha añadido un chef nuevo')
    })

})

module.exports = router ;

