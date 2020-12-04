const http = require('http');
const url = require('url');
const queryString = require('query-string');
module.exports = http.createServer((req, res) => {
	var coursOps = require('./controller.js');
  const reqUrl =  url.parse(req.url, true);
	const parsed = queryString.parse(reqUrl.search);
	
  // GET endpoint
  if(reqUrl.pathname == '/api/ModifString/' && req.method === 'GET') {
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.help(req, res);
	

  } else if(reqUrl.pathname == '/api/ModifString/carConsec' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.caractereConsecutif(req, res, parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/caractereConsecutifDebFin' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.caractereConsecutifDebFin(req, res ,parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/inversePhrase' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.inversePhrase(req, res ,parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/inverseMot' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.inverseMot(req, res ,parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/retireCharDebut' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.retireCharDebut(req, res ,parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/retireCharFin' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.retireCharFin(req, res ,parsed);
	
  
  }
  else if(reqUrl.pathname == '/api/ModifString/retireCharDebutFin' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.retireCharDebutFin(req, res ,parsed);
	
  
  }
  //censure
  else if(reqUrl.pathname == '/api/ModifString/censure' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.censure(req, res ,parsed);
	
  
  }

  else if(reqUrl.pathname == '/api/ModifString/ajoutCensure' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.ajoutCensure(req, res ,parsed);
	
  
  }

  else if(reqUrl.pathname == '/api/ModifString/listerMotsCensurer' && req.method === 'GET'){
	  console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.listerMotsCensurer(req, res ,parsed);
	
  
  }

  else {
    // POST endpoint
    console.log('Request type: ' + req.method + ' Endpoint: ' + req.url);
    coursOps.invalidUrl(req, res);
  }
})