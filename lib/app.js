const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    
    if(request.path === '/' && request.method === 'GET') {
      
      socket.end(createResponse({ body: 'hi', contentType: 'text/plain', status: '200 OK' }));
    }
    else if(request.path === '/echo' && request.method === 'POST') {
      console.log('I made it', request);
      socket.end(createResponse({ contentType: 'text/plain' }));
    }
    else if(request.path === '/red' && request.method === 'GET') {
      
      socket.end(createResponse({ body: '<h1>Red</h1>' }));
    }
    else if(request.path === '/green' && request.method === 'GET') {
      
      socket.end(createResponse({ body: '<h1>Green</h1>' }));
    }
    else if(request.path === '/blue' && request.method === 'GET') {
      
      socket.end(createResponse({ body: '<h1>Blue</h1>' }));
    }
    else 
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
