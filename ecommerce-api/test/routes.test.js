const assert = require('assert');
const proxyquire = require('proxyquire');

    //filteredProducts,
const { mockProds, ProductsServiceMock } = require('../utils/mocks/products');
const testServer = require('../utils/testServer');

describe('routes - products', function() {
  const route = proxyquire('../routes/ecommerce', {
    '../services/products': ProductsServiceMock
  });

  const request = testServer(route);
  describe('GET products', function() {
    
    // test de generacion de datos de ML
    it('should respond with status 200', function(done) {
      request.get('/products/generate/ML').expect(200, done);
    });

    // test de generacion de datos de Kichink
    it('should respond with status 200', function(done) {
        request.get('/products/generate/Kichink').expect(200, done);
      });
    
    /// test listado de productos Kichink
    it('should respond with the list products', function(done) {
      request.get('/products/Kichink').end((err, res) => {
        assert.deepEqual(res.body, {
          data: mockProds.filter(item => item.name == 'Kichink'),
          message: 'success'
        });

        done();
      });
    });

    /// test listado de productos ML
    it('should respond with the list products', function(done) {
        request.get('/products/ML').end((err, res) => {
          assert.deepEqual(res.body, {
            data: mockProds.filter(item => item.name == 'ML'),
            message: 'success'
          });
  
          done();
        });
      });


  });
});