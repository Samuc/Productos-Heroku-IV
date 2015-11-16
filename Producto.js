"use strict";

// Definición de la clase Apuesta: `quien` = código de la persona que hace la apuesta `local, visitante` = goles del local y del visitante
exports.Producto = function (nombre,precio,tipo) {
    this.nombre = nombre;
    this.precio= precio;
    this.tipo= tipo

    this.as_string = as_string;
    this.inserta_db = inserta_db;
}

// Devuelve la apuesta como una cadena
function as_string() {
    return this.nombre + ", " + this.tipo() + ", " + this.precio() ;
}

function inserta_db( db, tabla ) {
    if ( !db) {
	throw new Error("No se ha definido BD");
    };
    var stmt = db.prepare("INSERT INTO "+ tabla + " (nombre,precio,tipo,tipo) VALUES (?,?,?,?)");
    stmt.run( this.nombre, this.precio, this.tipo,this.tipo );
    stmt.finalize();
}
