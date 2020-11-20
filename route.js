const http = require('http');
const url = require('url');
const queryString = require('query-string');
module.exports = http.createServer((req, res) => {
	var coursOps = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
	const parsed = queryString.parse(reqUrl.search);
  // GET endpoint
  if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='.') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.addition(req, res,parsed);
  // POST endpoint
  } else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='-'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.soustraction(req, res,parsed);
  // POST endpoint
  
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='*'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.multiplication(req, res,parsed);
  // POST endpoint
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='/'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.division(req, res,parsed);
  // POST endpoint
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='%'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.modulo(req, res,parsed);
  // POST endpoint
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='!'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.factorielle(req, res,parsed);
  // POST endpoint
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='p'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.premier(req, res,parsed);
  // POST endpoint
	}else if(reqUrl.pathname == '/math' && req.method === 'GET' && parsed.op=='np'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.npremier(req, res,parsed);
  // POST endpoint
	}else {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.invalidUrl(req, res);
  }
})