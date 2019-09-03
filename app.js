//Requires
var express = require('express');
var mongoose = require('mongoose');

//Iniciar variables
var app = express();

//Conexion a la base de datos
mongoose.connect('mongodb://localhost:27017/hospitalDb', (err,res)=>{
    if(err){
            throw err;
    }

    console.log('DB: \x1b[32%s\x1b[32m', ' online')
});

//Escucuchar peticiones
app.listen(
    3000,
    ()=>{
        console.log('express server port 3000: \x1b[32%s\x1b[32m' , ' online')
    }
);

app.get('/', ( req, res, next ) => {

    res.status(200).json({
        ok:true,
        mensaje:'todo ok 200'
    });

});