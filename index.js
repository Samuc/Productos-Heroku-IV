"use strict";

var express = require('express');
var app = express();

var producto = require("./Producto.js");

var productos = new Object;

// Establece el IP y el puerto dependiendo del PaaS que sea
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
app.set('port', (process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 5000));
app.use(express.static(__dirname + '/public'));

// Aniade un producto
app.put('/producto/:nombre/:precio/:tipo', function( req, response ) {
    var nuevo_producto = new producto.Producto(req.params.nombre,req.params.precio,
				      req.params.tipo);
    productos[nuevo_producto] = nuevo_producto;
    response.status(200).send( nuevo_producto );
});


app.get('/', function(request, response) {
    response.send( "Ésto es el INDEX" );
});


// Baja todas las porras que haya en un momento determinado
app.get('/productos', function(request, response) {
    response.send( productos );
});



// Escucha en un puerto determinado.
app.listen(app.get('port'), server_ip_address, function() {
  console.log("Node app is running at " + server_ip_address + ":" + app.get('port'));
});

// Exporta la variable para poder hacer tests
module.exports = app;
