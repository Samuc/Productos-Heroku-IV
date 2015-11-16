"use strict";

// Definición de la clase Producto
exports.Producto = function (nombre,precio,tipo) {
    this.nombre = nombre;
    this.precio= precio;
    this.tipo= tipo

    this.as_string = as_string;
    this.inserta_db = inserta_db;
}

// Devuelve el producto como una cadena
function as_string() {
    return this.nombre + ", " + this.precio + ", " + this.tipo ;
}

function inserta_db( db, tabla ) {
    if ( !db) {
	throw new Error("No se ha definido BD");
    };
    var stmt = db.prepare("INSERT INTO "+ tabla + " (nombre,precio,tipo) VALUES (?,?,?)");
    stmt.run( this.nombre, this.precio, this.tipo );
    stmt.finalize();
}
