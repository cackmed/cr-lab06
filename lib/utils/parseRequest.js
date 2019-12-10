module.exports = rawRequest => {
//   const methodRegax = 
  console.log(rawRequest);
  console.log(typeof(rawRequest));
  const stringArr = rawRequest.split(' ');
  console.log(stringArr);
  return {
    method: stringArr[0],
    path: stringArr[1]
    
  };
};
