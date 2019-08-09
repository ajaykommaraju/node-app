var request = require('supertest');
var app = require('../index.js');
describe('GET /', function() {
 it('respond with hello world, this is Ajay Kumar Kommaraju', function(done) {
 //navigate to root and check the the response is "hello world, this is Ajay Kumar Kommaraju"
 request(app).get('/').expect('hello world, this is Ajay Kumar Kommaraju', done);
 });
});
