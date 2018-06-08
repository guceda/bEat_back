let db = require('../db')

//RECUPERAR TODOS LOS INVITADOS
exports.index = (done) => {
    db.get().query('SELECT * FROM invitados', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//CREAMOS UN NUEVO INVITADO
exports.create = ({email, password, name, surname, age} ,done) =>{
    let values = [email, password, name, surname, age]
    db.get().query('INSERT into invitados (email, password, name, surname, age) VALUES (?, ?, ?, ?, ?)', values, (err, result)=>{
        if(err) return done(err, null)
        done(null, result)
    })
}

//BUSCAMOS INVITADO POR EMAIL PARA LOGIN
exports.login = (email, done)=>{
    db.get().query('SELECT * FROM invitados WHERE email=?', [email], (err, inv)=>{
        if(err) return done(err, null)
        done(null, inv)
        console.log(inv);
        
    })
}

//BUSCAMOS INVITADO POR EMAIL PARA REGISTRO
exports.checkRegistro = (email, done)=>{
    db.get().query('SELECT * FROM invitados WHERE email=?', [email], (err, inv)=>{
        if(err) return done(err, null)
        done(null, inv)
        console.log(inv);
        
    })
}
