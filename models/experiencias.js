//representa las acciones contra la tabla EXPERIENCIAS
let db = require('../db')


//RECUPERAR TODAS LAS EXPERIENCIAS
exports.index = (done) => {
    db.get().query('SELECT * FROM experiencias', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//EXPERIENCIAS BY CATEGORIA
exports.experienciaByCategoria = (foodType, done) => {
    db.get().query('SELECT e.title, e.id_experiencia, e.price, e.availability, e.number_invitados, e.food_type, e.city, e.main_image, c.name FROM experiencias e, chefs_experiencias ce, chefs c WHERE e.id_experiencia = ce.experiencia_id AND c.id_chef = ce.chef_id AND e.food_type = ?', [foodType], (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//EXPERIENCIAS BY CIUDAD 
exports.experienciaByCiudad = (ciudad, done) => {
    db.get().query('SELECT e.title, e.id_experiencia, e.price, e.availability, e.number_invitados, e.food_type, e.city, e.main_image, c.name FROM experiencias e, chefs_experiencias ce, chefs c WHERE e.id_experiencia = ce.experiencia_id AND c.id_chef = ce.chef_id AND e.city =? ', [ciudad], (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}

//EXPERIENCIAS BY ID  + IMAGENES + INGREDIENTES
exports.experienciaById = (id, done) => {
    //recuperamos las experiencias por id
    db.get().query('SELECT e.*, c.name, c.image FROM experiencias e, chefs_experiencias ce, chefs c WHERE e.id_experiencia = ce.experiencia_id AND c.id_chef = ce.chef_id AND e.id_experiencia = ?', [id], (err, experiencia) => {
        if (err) return done(err, null)
        //recuperamos los ingredientes por id
        db.get().query('SELECT ingredient FROM experiencia_ingredientes WHERE experiencia_id=?', [id], (err, ingredientes) => {
            if (err) return done(err, null)
            //recuperamos las imágenes correspondientes a la experiencia
            db.get().query('SELECT imagen FROM experiencia_imagenes WHERE experiencia_id=?', [id], (err, imagenes) => {
                if (err) return done(err, null)
                experiencia[0].imagenes = []
                imagenes.forEach(img => {
                    experiencia[0].imagenes.push(img.imagen)
                });
                experiencia[0].ingredientes = []
                ingredientes.forEach(ing => {
                    experiencia[0].ingredientes.push(ing.ingredient)
                })
                done(null, experiencia[0])
            })
        })
    })
}

//RECUPERAR TODAS LAS UBICACIONES
exports.ubicaciones = (done) => {
    db.get().query('SELECT id_experiencia,latitude, longitude FROM  experiencias', (err, rows) => {
        if (err) return done(err, null)
        done(null, rows)
    })
}



