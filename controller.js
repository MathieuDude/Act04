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
	//MonString.replace("%20", " ")
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
      "message ": "["+ startPosG +","+ endPosG +"]"
    },
	{
      "message ": MonString.length
    },
	{
      "Pas modif ": StringPasModif
    },
	{
      "Modif ": MonString
    }
	
  ];
  
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.inversePhrase = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString= JSON.stringify(obj.s);
  MonString = MonString.substring(2,MonString.length-2);

  var stringTable = MonString.split(' ');
  var finalString;
  var firstLoop = true;
  
  //THIS
  // for (let i = stringTable.length-1; i >= 0; i--) {
  //   if(firstLoop){
  //     finalString = stringTable[i];
  //     firstLoop = false;
  //   } else{
  //     finalString = finalString + ' ' + stringTable[i];
  //   }  
  // }
  //VS
  //THAT
  stringTable.reverse();
  finalString = stringTable.join(' ')

  var response = [
    {
      "message ": finalString
    }
  ];
  
  res.statusCode = 200;
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.inverseMot = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString= JSON.stringify(obj.s);
  MonString = MonString.substring(2,MonString.length-2);

  var splitString = MonString.split("");
  var reverseArray = splitString.reverse(); 
  var finalString = reverseArray.join("");

  var response = [
    {
      "message ": finalString
    }
  ];
  
  res.statusCode = 200;
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.retireCharDebut = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  
  var counter = 0;

  MonString = MonString.substring(2,MonString.length-2);
  monChar = monChar.substring(2, monChar.length-2);

  var splitString = MonString.split("");

  splitString.forEach(element => {
    if(element==monChar)
    {
      counter++;
  }});

  var finalString = MonString.substring(counter);

  var response = [
    {
      "message ": finalString
    }
  ];
  
  res.statusCode = 200;
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.retireCharFin = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  
  var counter = 0;

  MonString = MonString.substring(2,MonString.length-2);
  monChar = monChar.substring(2, monChar.length-2);
  console.log(monChar);

  var splitString = MonString.split("");

  var reversed = splitString.reverse();

  reversed.forEach(element => {
    if(element==monChar)
    {
      counter++;
  }});
  
  var finalString = MonString.substring(0,MonString.length-counter);

  var response = [
    {
      "message ": finalString
    }
  ];
  
  res.statusCode = 200;
  
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response));


};

exports.retireCharDebutFin = function(req, res, obj) {
  
  const reqUrl = url.parse(req.url, true);
  //base error code that way if a response is sent ahead of time it's an error
  res.statusCode = 400;
  //received string
  var MonString = JSON.stringify(obj.s);
  var monChar = JSON.stringify(obj.c);
  
  var counter = 0;



  // MonString = MonString.substring(2,MonString.length-2);
  // monChar = monChar.substring(2, monChar.length-2);
  // console.log(monChar);

  // var splitString = MonString.split("");

  // var reversed = splitString.reverse();

  // reversed.forEach(element => {
  //   if(element==monChar)
  //   {
  //     counter++;
  // }});
  
  // var finalString = MonString.substring(0,MonString.length-counter);

  var response = [
    {
      "message ": finalString
    }
  ];
  
  res.statusCode = 200;
  
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
 