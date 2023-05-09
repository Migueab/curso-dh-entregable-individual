
const express = require ('express');
const app = express();
const path = require ('path');

const publicPath = path.join (__dirname , './public');

const PORT = process.env.PORT || 3000;

app.use ( express.static (publicPath));

app.listen ( 3000 , () => {

    console.log ( "Servidor corriendo");

});

app.get ( '/home' , ( req , res ) =>{

    res.sendFile ( path.join ( __dirname , '/views/index.html' ));

});


app.get ( '/registracion' , ( req , res ) => {

    res.sendFile ( path.join (__dirname , '/views/register.html'));
});

app.get ( '/iniciarsesion' , ( req , res ) => {

    res.sendFile ( path.join (__dirname , '/views/login.html'));
});
