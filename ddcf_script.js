	var input_depart=document.getElementById("input_depart");
	var input_reprise=document.getElementById("input_reprise");
	var service=document.getElementById("service");
	var service2=document.getElementById("service2");
	var code=document.getElementById("code");
	var code2=document.getElementById("code2");
	var nom=document.getElementById("nom");
	var nom2=document.getElementById("nom2");
	var prenom=document.getElementById("prenom");
	var prenom2=document.getElementById("prenom2");
	var depart=document.getElementById("depart");
	var depart2=document.getElementById("depart2");
	var reprise=document.getElementById("reprise");
	var reprise2=document.getElementById("reprise2");
	var conge=document.getElementById("conge");
	var conge2=document.getElementById("conge2");
	var absence=document.getElementById("absence");
	var absence2=document.getElementById("absence2");
	var observations=document.getElementById("observations");
	var observations2=document.getElementById("observations2");
	var who=document.getElementById("who");
	var progress=document.getElementById("progress");
	var d=new Date();
	var n=d.getDate();
	var m=d.getMonth()+1;
	var y=d.getFullYear();
	var date=document.getElementById("date");
	var jour=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
	var mois=["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
	var cat=["cat0.gif","cat1.gif","cat2.gif","cat3.gif","cat4.gif","cat5.gif","cat6.gif","cat7.gif","cat8.gif","cat9.gif","cat10.gif"];
	var cat_pic=document.getElementById("cat_pic");
	var ts="travaille le samedi, repos le lundi";
	var array_service=	  ["",     "",       "",       "",            "",          "",        "",         "",         "",       "",       "",         "",      "",        "",           "",        "",         "",        "",         "",        "",         "",          "",       "",      "",         "",     "",        "",           "",      "",     "",        "",      "",          "",           "",         "",        "",       "",        "",       "",         "",        "",        "",               "",       "",             "",          "",       "",        "",       "",       "",         "",       "",         "",        ""];
	var array_code=	      ["",     "",       "",       "",            "",          "",        "",         "",         "",       "",       "",         "",      "",        "",           "",        "",         "",        "",         "",        "",         "",          "",       "",      "",         "",     "",        "",           "",      "",     "",        "",      "",          "",           "",         "",        "",       "10977",   "",       "",         "",        "",        "",               "",       "",             "",          "",       "",        "",       "",       "",         "",       "",         "",        ""];
	var array_prenom=	  ["",     "Alice",  "Anh-Mai","Anne-Valérie","Aurélie",   "Aurélie", "Aurélie",  "Béatrice", "Bruno",  "Camille","Catherine","Claire","Clara",   "Chloé",      "Chourouk","Denise",   "Didier",  "Elisabeth","Franck",  "Françoise","Frédérique","Grégory","Hélène","Ivano",    "Joanne","John",   "Juan Carlos","Loïc",  "Luc",  "Marianne","Marie", "Marie-Line","Marie-Odile","Marine",   "Martine", "Martine","Matthieu","Mayrine","Monique",  "Nathalie","Nathalie","Nathalie",       "Nicolas","Olivier",      "Pascal",    "Pascale","Patricia","Sylvie", "Radouan","Sabine",   "Sonia",  "Tamara",   "Violette","Zacharie"];
	var array_nom=		  ["",     "TAVERNY","CATALAN","LALLEMAND",   "POULARD",   "GODEFROY","HAMMOUDI", "BRANELLEC","BOISSEL","BARRÉ",  "CONSTANT", "DUSART","BERLINER","GRÈZE",      "AFOUKATI","POPOFF",   "GUISELIN","DELMÉE",   "LEMÉLEDO","LÉGER",    "BLOEME",    "BOURJOT","LEDEMÉ","LORENZONI","FAISSE","CHAUVIN","ANDIA",      "RIBON", "LAFON","RUHM",    "PAUTRE","MUSSET",    "CAILLET",    "LANNURIEN","AUGUY",   "LAURENT","KLEIN",   "EVRARD", "BOURDEILH","FÉQUANT", "TUGÈNE",  "HANNA-MORELLINI","JODIN",  "GARSON",       "DESROSIERS","OHANA",  "MAHRI",   "PAZ",    "ATIKI",  "FRASZCZAK","NARDOUX","SERPINSKY","DUPONT",  "CARON"];
	var array_visuel=	  ["0.png","0.png",  "0.png",  "path.png",    "bret.png",  "0.png",   "paint.png","tr.png",   "0.png",  "0.png",  "0.png",    "0.png", "ba.png",   "pantone.png","0.png",  "magma.png","di.png",  "0.png",    "0.png",   "0.png",    "fish.png",  "0.png",  "0.png", "0.png",    "mo.png","0.png",  "0.png",      "fr.png","0.png","ca.png",  "0.png", "oscar.png", "mer.png",    "0.png",    "cake.png","0.png",  "se.png",  "mm.png", "0.png",    "0.png",   "0.png",   "co.png",         "tom.png","rorschach.png","0.png",     "0.png",  "0.png",   "paw.png","0.png",  "0.png",    "0.png",  "0.png",    "0.png",   "takeonme.gif"];
	var array_observation=["",     "",       "",       "",            "",          "",        "",         "",         "",       "",       "",         "",      "",        "",           "",        "",         "",        "",         "",        "",         "",          "",       "",      "",         "",     "",        "",           "",      "",     "",        "",      "",          "",           "",         "",        "",       ts,        "",       "",         "",        "",        "",               "",       "",             "",          "",       "",        "",       "",       "",         "",       "",         "",        ""];
	var destCtx=document.getElementById("canvas2").getContext("2d");
	var rcat2;

	if(m<10){m="0"+m;}
	date.innerHTML=n+"/"+m+"/"+String(y).substr(2,2);

	function random_cat(){
		var rcat1=Math.floor(Math.random()*cat.length);
		while(rcat1==rcat2){rcat1=Math.floor(Math.random()*cat.length);}
		cat_pic.setAttribute("src","https://leblog92.github.io/ddcf_media/cats/"+cat[rcat1]);
		rcat2=rcat1;
	}

	document.addEventListener("keyup",update);

	function update(){
		service2.innerHTML=service.innerHTML;
		code2.innerHTML=code.innerHTML;
		nom2.innerHTML=nom.innerHTML;
		prenom2.innerHTML=prenom.innerHTML;
		depart2.innerHTML=depart.innerHTML;
		reprise2.innerHTML=reprise.innerHTML;
		conge2.innerHTML=conge.innerHTML;
		absence2.innerHTML=absence.innerHTML;
		observations2.innerHTML=observations.innerHTML;
	}

	function fill_depart(){
		var d1=new Date(input_depart.value);
		var j1=d1.getDay();
		var n1=d1.getDate();
		var m1=d1.getMonth();
		var y1=d1.getFullYear();
		input_reprise.setAttribute("min",input_depart.value);
		depart.innerHTML=jour[j1]+" "+n1+" "+mois[m1]+" "+y1;
		depart2.innerHTML=jour[j1]+" "+n1+" "+mois[m1]+" "+y1;
	}

	function fill_reprise(){
		var d2=new Date(input_reprise.value);
		var j2=d2.getDay();
		var n2=d2.getDate();
		var m2=d2.getMonth();
		var y2=d2.getFullYear();
		reprise.innerHTML=jour[j2]+" "+n2+" "+mois[m2]+" "+y2;
		reprise2.innerHTML=jour[j2]+" "+n2+" "+mois[m2]+" "+y2;
	}

	function check_conge(){
		conge.innerHTML="X";
		conge2.innerHTML="X";
		absence.innerHTML="";
		absence2.innerHTML="";
	}

	function check_absence(){
		conge.innerHTML="";
		conge2.innerHTML="";
		absence.innerHTML="X";
		absence2.innerHTML="X";
	}
	
	function fill_name(){
		code.innerHTML=array_code[who.selectedIndex];
		code2.innerHTML=array_code[who.selectedIndex];
		nom.innerHTML=array_nom[who.selectedIndex];
		nom2.innerHTML=array_nom[who.selectedIndex];
		prenom.innerHTML=array_prenom[who.selectedIndex];
		prenom2.innerHTML=array_prenom[who.selectedIndex];
		observations.innerHTML=array_observation[who.selectedIndex];
		observations2.innerHTML=array_observation[who.selectedIndex];
		document.getElementById("visuel").style.opacity=0;
		var img=new Image();
		img.src="https://leblog92.github.io/ddcf_media/visuels/"+array_visuel[who.selectedIndex];
		img.onload=function(){
			setTimeout(function(){
				document.getElementById("visuel_img").setAttribute("src","https://leblog92.github.io/ddcf_media/visuels/"+array_visuel[who.selectedIndex]);
				document.getElementById("visuel").style.opacity=1;
			},2000);
		};
	}
	
	function show_cat(){
		random_cat();
	}
	
	function hide_cat(){
		cat_pic.setAttribute("src","https://leblog92.github.io/ddcf_media/wait.gif");
	}

	var canvas=document.getElementById("canvas");
	var ctx=canvas.getContext("2d");
	var pos={x:0,y:0};

	document.addEventListener("mousemove",draw);
	document.addEventListener("mousedown",setPosition);
	document.addEventListener("mouseenter",setPosition);

	function setPosition(e){
		pos.x=(e.clientX-canvas.getBoundingClientRect().left)*1.18;
		pos.y=(e.clientY-canvas.getBoundingClientRect().top)*1.7;
	}

	function draw(e){
		if(e.buttons!==1) return;
		ctx.beginPath();
		ctx.lineWidth=2;
		ctx.lineCap="round";
		ctx.strokeStyle="#333";
		ctx.moveTo(pos.x,pos.y);
		setPosition(e);
		ctx.lineTo(pos.x,pos.y);
		ctx.stroke();
		destCtx.drawImage(document.getElementById("canvas"), 0, 0);
	}

	function erase(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		destCtx.clearRect(0,0,canvas.width,canvas.height);
	}
	
	var count=0;
	function preloadImage(url){
		var img=new Image();
		img.src=url;
		img.onload=function(){
			count++;
			document.getElementById("progress").innerHTML=Math.round(count/(cat.length+array_visuel.length)*100)+"%";
			document.getElementById("progress").style.width=Math.round(count/(cat.length+array_visuel.length)*100)+"%";
			if(count==cat.length+array_visuel.length){
				document.getElementById("progress").style.opacity=0;
			}
		}
	}
	
	function init(){
		for(var i=0;i<cat.length;i++){
			preloadImage("https://leblog92.github.io/ddcf_media/cats/"+cat[i]);
		}

		for(var i=0;i<array_visuel.length;i++){
			preloadImage("https://leblog92.github.io/ddcf_media/visuels/"+array_visuel[i]);
		}
	}
	
	init();