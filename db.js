//GESTIÖN Y MANEJO DE LAS CONEXIONES A LA BASE DE DATOS
        //la variable PULL contiene todas las conexiones a la base de datos
        //el método CONNECT realiza la conexión a la base de datos. Sólo se ejecuta una sola vez. Se ejecuta en el fichero www.js
        //el método GET recupera la conexión a la base de datos. Lo llamamos cada vez que queramos ejecutar una query.

let mysql = require('mysql')
let pool = null

//especificamos las caracteristicas de la conexión a la base de datos para todo el proyecto
exports.connect = (done) => {
    pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'bEat',
        port: '8889'
    })
    done()
}

//devolvemos el pool con los datos para la conexión a través de la función get().....
exports.get = () => {
    return pool
}


//si quiero crear un projecto express y conectarlo a la base de datos,  creamos el fichero db y conectamos en el www.js 
// Después ya ejecutamos las querys sobre el api.js
// Hay que instalar  mySql      install mysql --save