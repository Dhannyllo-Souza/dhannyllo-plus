const parametrosURL = new URLSearchParams(window.location.search);

const parametrosList = ["title", "link","filme","serie","episodio","player", "open"];

let titleOrigen = "xxx";
let titleURL = "xxx";
let episodioDW = "xxx";

//const pegaParametro = parametrosURL.get(parametrosList[1]);
//console.log(pegaParametro);

let showTitle = parametrosURL.get(parametrosList[0]);
let pegaLink = parametrosURL.get(parametrosList[1]);
let showEpisode = parametrosURL.get(parametrosList[4]);
let simClick = parametrosURL.get(parametrosList[6]);

var legendado = false;
var dublado = false;

$(window).on("load", function(){
   // executa após carregamento da página (DOM, imagens, etc).
   if (pegaLink !== null){
	   if (showTitle == null && showEpisode == null){
	   		siteLink(pegaLink);
	   }else if(showTitle !== null && showEpisode == null){

		  const versoTitulo = showTitle;
			const palavras = versoTitulo.split(" ");

			for (let i = 0; i < palavras.length; i++) {
				const excecoes = ["da", "das", "de", "do", "dos", "e", "é", "com", "por", "pra", "para", "com", "à", "às", "a", "as", "o", "os", "em"];
				if (i > 0){
					const ignore = excecoes.indexOf(palavras[i]);
					if (ignore == -1){
			    		palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
			    	}
				}else{
					palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
				}
			}
			 showTitle = palavras.join(" ");
		   	 siteLink(showTitle+" "+pegaLink);
		}else if(showEpisode !== null){

			//?episodio=1x01_rose_&link=https://drive.google.com/file/d/0B0cnJ5ZQGC0ZYjhXQnZwcTFvM1U

						episodioDW = showEpisode;

					  var resTall = showEpisode.split("_");
					  var resTXP = resTall[0].split("x");

					  resTall.shift();
					  var reccc = resTall.join(" ");

				  const versoTitulo = reccc.replace(/_/g, " ");
				  console.log(versoTitulo);
					const palavras = versoTitulo.split(" ");
					console.log(palavras);

					for (let i = 0; i < palavras.length; i++) {
						const excecoes = ["da", "das", "de", "do", "dos", "e", "é", "com", "por", "pra", "para", "com", "à", "às", "a", "as", "o", "os", "em"];
						if (i > 0){
							const ignore = excecoes.indexOf(palavras[i]);
							if (ignore == -1){
					    		palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
					    	}
						}else{
							palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
						}
					}

					 showEpisode = palavras.join(" ");
					 var restallTitle = "<b style='font-size:1rem;color:#c7c7c7'>["+resTXP[0]+"°T ☆ EP "+resTXP[1]+"]: </b>"+showEpisode;

				   siteLink(restallTitle+" "+pegaLink);
		  
		}
	}else if(simClick !== null && simClick == "chat"){
		chatOpen();
	}
});


/*
function openShare(montador){
	montador = montador.split(" ");
  geral = document.getElementById("interPlay");
  geral.className = "interPlayx";
  openPlayer();
  nome = "Link Compartilhado";
  titulo.innerHTML = nome;
  	var btnShare = `<li>
  									<button onclick="siteLink(this.name)" class='epsx' name="`+montador[0]+` `+montador[1]+`">☆ Clique Aqui ☆</button>
  									</li>`;
    vid.innerHTML = btnShare;
    sm.innerHTML = "<button class='r1' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
}*/



function copiarURL(novo) {
	let showEpisode = parametrosURL.get(parametrosList[4]);
	if (linkx !== "") {
		if(episodioDW !== "xxx"){
			titulo.innerHTML = "<input type='text' id='linkAddress' name='linkAddress'>";

				var dblgdb = "";

		    if (legendado == true){
		      dblgdb = "/?dw=legendado&episodio=";
		      legendado = true;
		      dublado = false;
		    }
		    if (dublado == true){
		      dblgdb = "/?dw=dublado&episodio=";
		      dublado = true;
		      legendado = false;
		    }
		    if (dublado == false && legendado == false){
		      dblgdb = "/?episodio=";
		    }

				let linkNovo = novo+dblgdb+episodioDW+"&link="+linkx;

		    let captureLink = document.querySelector("[name='linkAddress']");
		    console.log(linkNovo)
		    captureLink.value = linkNovo;

		    let textoCopiado = document.getElementById("linkAddress");
		    textoCopiado.select();
		    textoCopiado.setSelectionRange(0, 999);
		    document.execCommand("copy");

		    setTimeout(function(){
			    titulo.innerHTML = "<b class='pisc'>O link foi Copiado.</b>";
			    setTimeout(function(){
			      titulo.innerHTML = nome;
			      notificar = false;
			    },3800);
				},500);
		}else{
			titulo.innerHTML = "<input type='text' id='linkAddress' name='linkAddress'>";
			let linkNovo = novo+"?title=arquivo%20compartilhado"+"&link="+linkx;
		    let captureLink = document.querySelector("[name='linkAddress']");
		    console.log(linkNovo)
		    captureLink.value = linkNovo;

		    let textoCopiado = document.getElementById("linkAddress");
		    textoCopiado.select();
		    textoCopiado.setSelectionRange(0, 999);
		    document.execCommand("copy");

		    setTimeout(function(){
			    titulo.innerHTML = "<b class='pisc'>O link foi Copiado.</b>";
			    setTimeout(function(){
			      titulo.innerHTML = nome;
			      notificar = false;
			    },3800);
				},500);
		 }
  }else{
  	alert("No momento este link não pode ser copiado.")
  }
}



function alterar_url(novo){
	if (nome.indexOf("°T ☆") > -1){
		var sep1 = nome.split(">");
		var sepTXP = sep1[1].split("☆");
		var titleOrigen = sep1[2];
		var sepTitle = titleOrigen.toLowerCase();
		var sebTitlex = sepTitle.replace(/ /g, "_");
		retireXX = sebTitlex.split("_");
		retireXX.pop();
		sebTitlex = retireXX.join("_");
		var SX = sepTXP[0].replace(/[^0-9]/g,'');
		var EPX = sepTXP[1].replace(/[^0-9]/g,'');

		episodioDW = SX+"x"+EPX+""+sebTitlex;

		var dblgdb = "";

    if (legendado == true){
      dblgdb = "/?dw=legendado&episodio=";
      legendado = true;
      dublado = false;
    }
    if (dublado == true){
      dblgdb = "/?dw=dublado&episodio=";
      dublado = true;
      legendado = false;
    }
    if (dublado == false && legendado == false){
      dblgdb = "/?episodio=";
    }

	  let linkNovo = novo+dblgdb+episodioDW+"&link="+linkx;
	  titleURL = linkNovo;

	  //history.pushState({}, null, linkNovo);
	  //alert(linkNovo);
	}
}

//alterar_url("https://bad-wolf-brasil.web.app");


