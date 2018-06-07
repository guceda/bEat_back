let db = require('../db')

//RECUPERAR TODOS LOS CHEFS
exports.index = (done) => {
    db.get().query('SELECT * FROM chefs', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//CREAMOS UN NUEVO CHEF
/* Para llamar a esta función: 
chefs.create({email, password, name, surname, age, image},(err, result)=>{ }) */
exports.create = ({email, password, name, surname, age} ,done) =>{
    let values = [email, password, name, surname, age]
    db.get().query('INSERT into chefs (email, password, name, surname, age) VALUES (?, ?, ?, ?, ?)', values, (err, result)=>{
        if(err) return done(err, null)
        done(null, result)
    })
}


//BUSCAMOS CHEF POR USUARIO Y CONTRASEÑA
/* Para llamar a esta función: 
chefs.show(3,(err, rows)=>{ }) */

exports.show = (email, password, done)=>{
    db.get().query('SELECT * FROM chefs WHERE email=? AND password=?', [email, password], (err, rows)=>{
        if(err) return done(err, null)
        done(null, rows[0])
    })
}
