const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    if(request.path === '/' && request.method === 'GET') {
      socket.end(createResponse({ body: 'hi' }));
    }
    if(request.path === '/echo' && request.method === 'POST') {
      socket.end(createResponse({ contentType: 'text/plain' }));
    }
    if(request.path === '/red' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>Red</h1>' }));
    }
    if(request.path === '/green' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>Geen</h1>' }));
    }
    if(request.path === '/blue' && request.method === 'GET') {
      socket.end(createResponse({ body: '<h1>Blue</h1>' }));
    }
    socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
  });
});

module.exports = app;
