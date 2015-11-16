var assert = require("assert"),
producto = require(__dirname+"/../Producto.js");

// si se quiere probar la base de datos, ejecutar antes `grunt creadb`
describe('Producto', function(){
    // Testea que se haya cargado bien la librería
    describe('Carga', function(){
	it('Debería estar cargado el módulo', function(){
	    assert(producto, "Cargado");
	});

    });

    var nuevo_producto = new producto.Producto("Pollo", "5", "Carne");
    describe('ID', function(){
	it('Debería generar ID correcto', function(){
	    assert.equal(nuevo_producto.as_string(), "Pollo, 5, Carne");
	});
    });

    describe('Crea', function(){
	it('Debería crearse correctamente', function(){
	    assert.equal(nuevo_producto.nombre, "Pollo");
	});
    });

});
