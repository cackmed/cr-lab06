module.exports = rawRequest => {
  const stringArr = rawRequest.split(' ');
  
  const request = { method: stringArr[0], path: stringArr[1] };
  
  
  request.body = rawRequest.split('\r\n\r\n')[1];
  return request;
};
