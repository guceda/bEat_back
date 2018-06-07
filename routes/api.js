var express = require('express');
var router = express.Router();
let routerExperiencias = require('./api/experiencias')
let routerInvitados = require('./api/invitados')
let routerChefs = require('./api/chefs')

router.use('/experiencias', routerExperiencias )
router.use('/invitados', routerInvitados)
router.use('/chefs', routerChefs)



module.exports = router