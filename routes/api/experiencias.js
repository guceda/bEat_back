var express = require('express');
var router = express.Router();
let modelExperiencia = require('../../models/experiencias')


//EXPERIENCIAS

//Ruta: api/experiencias/index
router.get('/index', (req, res) => {
    modelExperiencia.index((err, rows) => {
        if (err) return console.log(err.message)
        res.json(rows)
    })
})

//Ruta: api/experiencias/tipo/china
router.get('/tipo/:tipo', (req, res)=>{
    let tipoExperiencia = req.params.tipo
    modelExperiencia.experienciaByCategoria(tipoExperiencia, (err, rows)=>{
        if (err) return console.log(err.message)
        res.json(rows)
    })
})

//Ruta: api/experiencias/ciudad/madrid
router.get('/ciudad/:ciudad', (req, res)=>{
    let ciudadExperiencia = req.params.ciudad
    modelExperiencia.experienciaByCiudad(ciudadExperiencia, (err, rows)=>{
        if(err) return console.log(err.message)
        res.json(rows)
    })
})

//Ruta: api/experiencias/id/1
router.get('/id/:id', (req, res)=>{
    let idExperiencia = req.params.id
    modelExperiencia.experienciaById(idExperiencia, (err, rows)=>{
        if(err) return console.log(err.message)
        res.json(rows)
    })
})

//Ruta: api/experiencias/ubicaciones
router.get('/ubicaciones', (req, res) => {
    modelExperiencia.ubicaciones((err, rows) => {
        if (err) return console.log(err.message)
        res.json(rows)
    })
})



module.exports = router

