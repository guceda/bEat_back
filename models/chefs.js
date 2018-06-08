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


//BUSCAMOS CHEF POR EMAIL
/* Para llamar a esta función: */
exports.login = (email, done)=>{
    db.get().query('SELECT * FROM chefs WHERE email=?', [email], (err, chef)=>{
        if(err) return done(err, null)
        done(null, chef)
        console.log(chef);
        
    })
}


//BUSCAMOS CHEF POR EMAIL PARA REGISTRO
exports.checkRegistro = (email, done)=>{
    db.get().query('SELECT * FROM chefs WHERE email=?', [email], (err, chef)=>{
        if(err) return done(err, null)
        done(null, chef)
        console.log(chef);
        
    })
}