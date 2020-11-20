const url = require('url');

exports.addition = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  const total=parseInt(obj.x) + parseInt(obj.y);
  var response = [
    {
      "le résultat de l'adition des nombre est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.soustraction = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  const total=parseInt(obj.x) - parseInt(obj.y);
  var response = [
    {
      "le résultat de la soustraction des nombre est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.multiplication = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  const total=parseInt(obj.x) * parseInt(obj.y);
  var response = [
    {
      "le résultat de la multiplication des nombre est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.division = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  const total=parseInt(obj.x) / parseInt(obj.y);
  var response = [
    {
      "le résultat de la division des nombre est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.modulo = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  const total=parseInt(obj.x) % parseInt(obj.y);
  var response = [
    {
      "le résultat du modulo des nombre est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.factorielle = function(req, res,obj) {
	
  const reqUrl = url.parse(req.url, true)
  var multiplicateur=1;
  var total=1;
  var max= parseInt(obj.n);
  var nouvTotal=1;
  while(multiplicateur<=max)
  {
	  nouvTotal=total*multiplicateur;
	  total=nouvTotal;
	  multiplicateur++;
	}
	
  var response = [
    {
      "le résultat de la factiorielle est ": "équivalent à "
    },
    total
  ];
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

exports.premier = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  var compteur=0;
  var i=1;
  const max = parseInt(obj.n);
  while (i<=max)
  {
		if(!(max%i))
		{
			compteur++;
		}
		i++;
	}
  if(compteur==2){
      var response = [
		{
		" le nombre suivant": "est premier "
		},
		max
	];
    }
	else{
  var response = [
    {
      " le nombre suivant": " ne fait pas parti des nombres premier"
    },
    max
  ];
  }
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.npremier = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  var compteur=0;
  var nombrePremier=null;
  var j=1;
  const maxPremier=parseInt(obj.n);
  
  while(maxPremier!=compteur){
	  
  var compteurPremier=0;
  var i=1;
  var max = j;
  

  while (i<=max)
    {
		if(!(max%i))
		{
			compteurPremier++;
		}
		i++;
	}
	
	if(compteurPremier==2){
		compteur++;
		nombrePremier=i-1;
		}
	j++;
	}
   
      var response = [
		{
		" le nombre suivant": "le nieme nombre premier du chiffre est "
		},
		nombrePremier
	];
  
  res.statusCode = 200;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}
exports.invalidUrl = function(req, res) {
   var response = [
     {
       "message": "Endpoint incorrect. Ceci n'est pas une options possible."
     }
   ]
   res.statusCode = 404;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response))
}
 