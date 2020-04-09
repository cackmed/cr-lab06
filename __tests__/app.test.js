const request = require('supertest');
const app = require('../lib/app');

describe('when you hit a route it responses in the right way', () => {

  it('should return a string "hi" when a user hits the "/" endpoint', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual('hi');
      });
  });
  
  it('should return <h1>red</h1> when a user hits the "red" endpoint', () => {
    return request(app)
      .get('/red')
      .then(res => {
        expect(res.text).toEqual('<h1>Red</h1>');
      });
  });
  
  it('should return <h1>blue</h1> when a user hits the "blue" endpoint', () => {
    return request(app)
      .get('/blue')
      .then(res => {
        expect(res.text).toEqual('<h1>Blue</h1>');
      });
  });
  
  it('should return <h1>green</h1> when a user hits the "Green" endpoint', () => {
    return request(app)
      .get('/green')
      .then(res => {
        expect(res.text).toEqual('<h1>Green</h1>');
      });
  });
  
  it('should return the body when a user hits the "echo" endpoint', () => {
    return request(app)
      .post('/echo')
      .send('houston do you copy')
      .then(res => {
        expect(res.text).toEqual('houston do you copy');
        expect(res.status).toEqual(200);

      });
  });
});
  
