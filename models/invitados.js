let db = require('../db')

//RECUPERAR TODOS LOS INVITADOS
exports.index = (done) => {
    db.get().query('SELECT * FROM invitados', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//CREAMOS UN NUEVO INVTADO
/* Para llamar a esta función: 
invitados.create({email, password, name, surname, age, image},(err, result)=>{ }) */
exports.create = ({email, password, name, surname, age} ,done) =>{
    let values = [email, password, name, surname, age]
    db.get().query('INSERT into invitados (email, password, name, surname, age) VALUES (?, ?, ?, ?, ?)', values, (err, result)=>{
        if(err) return done(err, null)
        done(null, result)
    })
}


//BUSCAMOS INVITADO POR USUARIO Y CONTRASEÑA
/* Para llamar a esta función: 
personas.show(3,(err, rows)=>{ }) */

exports.show = (email, password, done)=>{
    db.get().query('SELECT * FROM invitados WHERE email=? AND password=?', [email, password], (err, rows)=>{
        if(err) return done(err, null)
        done(null, rows[0])
    })
}