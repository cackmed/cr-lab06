const request = require('supertest');
const app = require('../lib/app');

describe('when you hit a route it responses in the right way', () => {

  it('should return a string "hi" when a user hits the "/" endpoint', async(done) => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
        done();
      });
  });
  
  it('should return <h1>red</h1> when a user hits the "red" endpoint', async(done) => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>red</h1>');
        done();
      });
  });
  
  it('should return <h1>blue</h1> when a user hits the "blue" endpoint', async(done) => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>blue</h1>');
        done();
      });
  });
  
  it('should return <h1>green</h1> when a user hits the "green" endpoint', async(done) => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>green</h1>');
        done();
      });
  });
  
  it('should return the body when a user hits the "echo" endpoint', async(done) => {
    return request(app)
      .post('/echo')
      .send({
        number: 1
      })
      .then(res => {
        expect(res.text).toEqual('{"number":1}');
        done();
      });
  });
});
  
