#!/usr/bin/env nodejs


var producto = require("../Producto.js");
assert= require("assert");

var nuevo_producto = new apuesta.Apuesta('Queso','4','Lacteo');
assert(nuevo_producto, "Producto creado");
assert.equal(nuevo_producto.as_string(), "Queso, Lacteo, 4","Creado");
console.log("Si has llegado aquí, han pasado todos los tests");

