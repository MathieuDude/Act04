const url = require('url');

exports.help = function(req, res) {
  var response = [
     {
       "message": "Get this help message"
     }
   ]
   res.statusCode = 200;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response));
}

exports.caractereConsecutif = function(req, res,obj) {
  const reqUrl = url.parse(req.url, true);
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
		  //-1 car compteur++ a la fin
		  ChaineTrouvee=PremiereChaine-1;
	  } 
	  Compteur++;
  }
  //2 est les '' dans la chaine
    if((PremiereChaine!=-1)&&(LongueurMax>2)&&(LongueurRecherche>0)&&(obj.n % 1 === 0))
  {
	res.statusCode = 200;
  }
  var response = [
  {
      "statuscode": res.statusCode
    },
    {
      "Position ": ChaineTrouvee	
    }	
  ];
  

  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));
};

exports.caractereConsecutifDebFin = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString= JSON.stringify(obj.s);
  var StringPasModif=JSON.stringify(obj.s);
  var startPos=0;
  var endPos;
  var startPosSet = false;
  var startChar;
  var startPosG;
  var endPosG;
  var currentLength=0;
  var maxLength=0;
  //si la chaine est entouree par des coma
  if((MonString.length>4)&&(MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
  {
	MonString = MonString.substring(1,MonString.length-1);
	res.statusCode = 200;
	  for (let i = 0; i < MonString.length; i++) {
		
		if(MonString[i] == MonString[i+1])
		{
		  
			startChar = MonString[i];
			endPos=i+1;
			currentLength++;
			if(currentLength>maxLength)
			{
			  maxLength=currentLength;
			  startPosG=startPos;
			  endPosG=endPos;
			}
		}
		else if(i==0)
		{
		  currentLength=0;
		  startPosG=0;
		  endPosG=1;
		}
		else
		{
		  currentLength=0;
		  startPos=i;
		}
	  }
  }
  else if((MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
  {
	  //si la chaine est vide
	  startPosG=0;
	  endPosG=0;
	  res.statusCode = 200;
  }

  var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "Position ": "["+ startPosG +","+ endPosG +"]"
    }	
  ];
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.inversePhrase = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 200;
  var finalString;
  //received string
  var MonString= JSON.stringify(obj.s);
  if((MonString.length>4)&&(MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
  {
	  MonString = MonString.substring(2,MonString.length-2);
	  var stringTable = MonString.split(' ');
	  stringTable.reverse();
	  finalString = stringTable.join(' ')
  }
  else
  {
      res.statusCode = 400;
  }
	
  var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "message ": finalString
    }
  ];
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.inverseMot = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString= JSON.stringify(obj.s);
  var finalString;

if((MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
  {
	  MonString = MonString.substring(2,MonString.length-2);
  var inversTemp;
    var answer='';
    var temp='';
    for (let i=0; i< MonString.length;i++){
        if(MonString[i] != ' ')
		{
            temp += MonString[i]+"";
		}
        else
		{
			inversTemp=temp.split('').reverse().join('');
            answer = answer+ ' ' +inversTemp;
            temp = '';
		}
    
	}
	inversTemp=temp.split('').reverse().join('');
	answer = answer + ' ' +inversTemp;
	finalString=answer;
	 res.statusCode = 200;
	 }
  else
  {
      res.statusCode = 400;
  }
	 
  var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "message ": finalString
    }
  ];

  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.retireCharDebut = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 200;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  

   
	var finalString=MonString;
	if(!monChar)
	{
		res.statusCode = 400;
    }
	else
	{
		if((MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
		{ 	
			if((monChar.charAt(1)=="’")&&(monChar.charAt(monChar.length-2)=="’"))
			{ 
				MonString = MonString.substring(2,MonString.length-2);
				monChar = monChar.substring(2, monChar.length-2);
				if(monChar.length==1)
				{
					let compteur=0;
					while(MonString[compteur] == monChar)
					{
						compteur++;
					}
					finalString=MonString;
					if(compteur>0)
					{
						finalString = MonString.substring(compteur);
					}
				}
				else
				{
					res.statusCode = 400;
				}
			}
			else
			{
				res.statusCode = 400;
			}
		}
		else
		{
			res.statusCode = 400;
		}
	}
    var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "message ": finalString
    }
  ];
  
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.retireCharFin = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 200;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  

	var finalString=MonString;
	if(!monChar)
	{
		res.statusCode = 400;
    }
	else
	{
		if((MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
		{ 	
			if((monChar.charAt(1)=="’")&&(monChar.charAt(monChar.length-2)=="’"))
			{ 
				MonString = MonString.substring(2,MonString.length-2);
				monChar = monChar.substring(2, monChar.length-2);
				if(monChar.length==1)
				{
					let compteur=MonString.length;
					while(MonString[compteur-1] == monChar)
					{
						compteur--;
					}
					finalString=MonString;
					if(compteur<MonString.length)
					{
						finalString = MonString.substring(0,compteur);
					}
				}
				else
				{
					res.statusCode = 400;
				}
			}
			else
			{
				res.statusCode = 400;
			}
		}
		else
		{
			res.statusCode = 400;
		}
	}
    var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "message ": finalString
    }
  ];
  
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};
exports.retireCharDebutFin = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 200;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  

	var finalString=MonString;
	if(!monChar)
	{
		res.statusCode = 400;
    }
	else
	{
		if((MonString.charAt(1)=="’")&&(MonString.charAt(MonString.length-2)=="’"))
		{ 	
			if((monChar.charAt(1)=="’")&&(monChar.charAt(monChar.length-2)=="’"))
			{ 
				MonString = MonString.substring(2,MonString.length-2);
				monChar = monChar.substring(2, monChar.length-2);
				if(monChar.length==1)
				{
					let compteur=MonString.length;
					while(MonString[compteur-1] == monChar)
					{
						compteur--;
					}
					finalString=MonString;
					if(compteur<MonString.length)
					{
						finalString = MonString.substring(0,compteur);
					}
					compteur=0;
					while(finalString[compteur] == monChar)
					{
						compteur++;
					}
					if(compteur>0)
					{
						finalString = finalString.substring(compteur);
					}
				}
				else
				{
					res.statusCode = 400;
				}
			}
			else
			{
				res.statusCode = 400;
			}
		}
		else
		{
			res.statusCode = 400;
		}
	}
    var response = [
	{
      "statuscode": res.statusCode
    },
    {
      "message ": finalString
    }
  ];
    
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};
var motsCensurer = ['esti', 'fuck', 'tabarnak', 'patatipatata'];

exports.censure = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  var MonString= JSON.stringify(obj.s);
  MonString = MonString.substring(2,MonString.length-2);

  motsCensurer.forEach(element => {
    MonString = MonString.replace(element, 'joli');
  });

  var finalString = MonString;
  res.statusCode = 200;
  if(finalString == null || finalString == '' || typeof finalString != 'string')
  {
    res.statusCode = 400;
    finalString = 'L’argument ‘s’ doit recevoir une chaine de caractère.';
  }

  var response = [
    {
      "message ": finalString
    }
  ];
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.ajoutCensure = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString= JSON.stringify(obj.s);
  MonString = MonString.substring(2,MonString.length-2);

  var message;

  console.log(MonString);

  if(MonString == null || MonString == '' || typeof MonString != 'string' || MonString == ' ')
  {
    res.statusCode = 400;
    message = 'L’argument ‘s’ doit recevoir une chaine de caractère.';
  }
  else{
    motsCensurer.push(MonString);
    res.statusCode = 200;
    message = 'Chaîne ajouté';
    console.log(motsCensurer);
  }

  var response = [
    {
      "message ": message
    }
  ];
  
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));
};

exports.listerMotsCensurer = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var tri = JSON.stringify(obj.tri);
  var triTemp = tri;
  if(tri != null)
  {
    tri = tri.substring(2,tri.length-2);
    if(tri == null || tri == '' || tri == ' ')
    {
      tri = triTemp.substring(1, triTemp.length-1)
    }
  }

  var listeCensure;
  console.log(tri);

  if(tri=='' || tri == null && typeof tri != 'number')
  {
    listeCensure = motsCensurer;
    res.statusCode = 200;
  }
  else if(tri == 'croissant' && typeof tri != 'number')
  {
    listeCensure = motsCensurer.sort();
    res.statusCode = 200;
  }
  else if(tri == 'decroissant' && typeof tri != 'number'){
    listeCensure = motsCensurer.sort().reverse();
    res.statusCode = 200;
  }
  else if (tri == 'longueur' && typeof tri != 'number') {
    listeCensure = motsCensurer.sort(function(a, b){
      return b.length - a.length;
    });
    res.statusCode = 200;
  }
  else {
    listeCensure = 'L’argument ‘tri’ doit être soit ‘croissant’, ‘décroissant’ ou ‘longueur’';
    res.statusCode = 400;
  }

  var response = [
    {
      "message ": listeCensure
    }
  ];
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));
};


exports.supprimerCensure = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var mot= JSON.stringify(obj.s);
  mot = mot.substring(2,mot.length-2);

  var message = 'Mot supprimer de la liste de censure.';
  res.statusCode = 200;

  if(!motsCensurer.includes(mot))
  {
    message = 'Le mot n\'est pas dans la liste de mots censuré.';
  }

  if(typeof mot != 'string' || mot == '' || mot == ' ')
  {
    message = 'L\'argument "s" doit etre un string.';
    res.statusCode = 400;
  }

  for( var i = 0; i < motsCensurer.length; i++){ 
    if ( motsCensurer[i] === mot) { 
      motsCensurer.splice(i, 1); 
    }
  }

  var response = [
    {
      "message ": message
    }
  ];
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));
};

exports.remplaceBlancEspace = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  res.statusCode = 400;

  var MonString= JSON.stringify(obj.s);
  MonString = MonString.substring(2,MonString.length-2);

  var message;
  console.log("'" + MonString + "'");

  if(typeof MonString != 'string' || MonString == '')
  {
    message = 'L\'argument "s" doit etre un string.';
    res.statusCode = 400;
  }
  else{
    message = MonString.replace(/  +/g, ' ');
    res.statusCode = 200;
  }
   var response = [
    {
      "message ": message
    }
  ];
  
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));
};
  
exports.invalidUrl = function(req, res) {
   var response = [
     {
       "message": "Endpoint incorrect. Ceci n'est pas une options possible."
     }
   ]
   res.statusCode = 404;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response));
};
 