'use strict';

module.exports = function(grunt) {

    // Configuración del proyecto
    grunt.initConfig({
	// incluye la configuración
	pkg: grunt.file.readJSON('package.json'),
	docco: {
	    src: ['*.js'],
	    options: {
		output: 'docs/'
	    }
	},
	shell: {
	    options: {
		stderr: false
            },
            db: {
		command: 'sqlite3 productos.db.sqlite3 < productos.sql'
            },
	    clean: {
		command: 'rm productos.db.sqlite3'
            },
	    // para probar el despliegue
	    puts: {
		command: 'curl -X PUT http://localhost:5000/producto/Pollo/15/Carne; curl -X PUT http://localhost:5000/producto/Macarrones/3/Pasta;'
	    }
	}
    });

    // Carga el plugin de grunt para hacer esto
    grunt.loadNpmTasks('grunt-docco');
    grunt.loadNpmTasks('grunt-shell');

    // Tarea por omisión: generar la documentación
    grunt.registerTask('default', ['docco']);

    // Otras tareas
    grunt.registerTask('creadb', ['shell:db']);
    grunt.registerTask('borradb', ['shell:clean']);
    grunt.registerTask('put', ['shell:puts']);
};
