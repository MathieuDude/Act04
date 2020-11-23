const url = require('url');

exports.help = function(req, res) {
  var response = [
     {
       "message": "Get this help message"
     }
   ]
   res.statusCode = 200;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response))
}

exports.caractereConsecutif = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true)
  var LongueurRecherche= parseInt(obj.n);
  var MonString= JSON.stringify(obj.s);
  //la chaine recu est "chainerecu", non retirons donc les guillemets
  MonString=MonString.substring(1,MonString.length-1);
  var PremiereChaine=0;
  var Compteur=0;
  var NombreFoisConsecutif=0;
  var ChaineTrouvee=-1;
  //cherche le premier caractere
  var CharRechercher=MonString.charAt(Compteur);
  const LongueurMax= MonString.length;
  res.statusCode = 400;
  
  while((Compteur<LongueurMax)&&(ChaineTrouvee==-1))
  {
	  if(MonString.charAt(Compteur)==CharRechercher)
	  {
		  NombreFoisConsecutif++;
	  }
	  else
	  {
		  CharRechercher=MonString.charAt(Compteur);
		  PremiereChaine=Compteur;
		  NombreFoisConsecutif=1;
	  }
	  
	  if(NombreFoisConsecutif==LongueurRecherche)
	  {
		  ChaineTrouvee=PremiereChaine;
	  } 
	  Compteur++;
  }
  
  var response = [
    {
      "message ": "la première chaîne de n charactère consécutive est à la position"
    },
    ChaineTrouvee	
  ];
  
  if(PremiereChaine!=-1)
  {
	res.statusCode = 200;
  }
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
 