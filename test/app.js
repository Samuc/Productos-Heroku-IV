var request = require('supertest'),
should = require('should'),
app = require('../index.js'),
nombre_test = "Pollo";

describe( "Aniade producto", function() {
    it('should return correct type', function (done) {
	request(app)
	    .put('/producto/Pollo/5/carne')
	    .expect('Content-Type', /json/)
	    .expect(200,done);
    });
    it('should return ID', function (done) {
	request(app)
	    .put('/producto/Pollo/5/carne')
	    .expect('Content-Type', /json/)
	    .expect(200)
	    .end( function ( error, resultado ) {
		if ( error ) {
		    return done( error );
		}
		resultado.body.should.have.property('nombre', nombre_test);
		done();
	    });
    });
    it('should return all products correctly', function (done) {
	request(app)
	    .get('/producto/'+ nombre_test)
	    .expect('Content-Type', /json/)
	    .expect(200)
	    .end( function ( error, resultado ) {
		if ( error ) {
		    return done( error );
		}
		resultado.body.should.have.property('local','mad');
		done();
	    });
    });
});
