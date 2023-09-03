var titulo = document.getElementById("topo");

var vid = document.getElementById("vd");
var sm = document.getElementById("sumir"); 

function tvOn() {
  frameTv = document.getElementById("tvOn");
  frameTv.scrollTop += 40;
}

//https://vanfem.com/v/-pwjxbp5lnklp16

var nome = "Mundial Player";
var arqvd = "";
var linkx = "";

var onPlay = false;

var player = "normal";
var vide;
function playVide(){
  var vide = document.getElementById("player");
  if(player == "normal"){
   vide.play();
  }else if(player == "youtube"){
    titulo.innerHTML = nome; 
    vide.src = "https://www.youtube.com/embed/"+arqvd+"?controls=1&autoplay=1";
  }else if(player == "okru"){
    titulo.innerHTML = nome; 
    vide.src = "https://ok.ru/videoembed/"+arqvd+"?autoplay=1";
  }else if(player == "gdrive"){
    titulo.innerHTML = "<b class='pisc'>Falha na execução automática do vídeo.</b>";
        setTimeout(function(){
          titulo.innerHTML = nome;
        },7500);
  }else if(player == "facebook"){
    titulo.innerHTML = nome; 
    vide.src = "https://www.facebook.com/v2.3/plugins/video.php?&autoplay=true&href=https://www.facebook.com/redbull/videos/"+arqvd+"/&locale=pt_BR&sdk=joey";
  }
}
function pauseVide(){
   vide.pause();
}


function openPlayer(){
  var p = document.getElementById("allplayer");
  if (p.className == "allplayerOff"){
    p.className = "allplayerOn";
     onPlay = true;
  }else{
    playerReload();
    p.className = "allplayerOff";
    onPlay = false;
  }
}


function playerReload(){
  nome = "Mundial Player";
  titulo.innerHTML = nome;
  var x1 = `<p id="p">Este player integrado reproduz e incorpora links de download, youtube, google drive, MEGA, ok.ru, facebook e outos.</p><br>
<button onclick="siteLink('link');" class="opcs">Add Link</button>`;
  var x2 = `
    <button class='r1' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
setTimeout(function(){
    vid.innerHTML = x1;
    sm.innerHTML = x2;
    geral = document.getElementById("interPlay");
    geral.className = "interPlay";
   }, 500);  
}


function arq(){
 var show = document.getElementById("p");

show.innerHTML = "";
sm.innerHTML = "";
show.style.marginTop = "5%";
  setTimeout(function(){
   show.innerHTML = "Clique na opção abaixo e selecione em seus <b>arquivos</b> ou <b>galeria</b> o vídeo que deseja reproduzir.";
   sm.innerHTML = "<input id='arquivo' onchange='anexar(this)'  type='file' accept='*/*'><button class='r1' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
  },500);
} 


function anexar(select){ 
var sr = document.getElementById("x");

arqvd = select.value;
//alert(arqvd);
titlevd = arqvd.split('');
arqvdx = [];
vvv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ0123456789.-_()";
validos = vvv.split('');

var okt = 0;
naveg = 0;

for(var i = titlevd.length -1; i >= 0 && okt > -1; i--){
  arqvdx.unshift(titlevd[i]);
  okt = validos.indexOf(titlevd[i]);
  if (arqvdx.length < titlevd.length){
    naveg = 1;
  }else{
    naveg = 0;
  }
}
 
arqvd = "";


for(var f = naveg; f <= arqvdx.length-1; f++){
  arqvd += arqvdx[f];
} 

if(arqvd.indexOf(".mp4") > -1){
   namex = arqvd.split('.');
   nome = namex[0]; 
   titulo.innerHTML = nome; 
   vid.innerHTML = "<video preload='meta' controls='controls' id='player'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
   sm.innerHTML = ""; 
   sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' download='MD_video1.mp4' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='fullscreen mode' onclick='openFullscreen()'><i class='bi bi-arrows-fullscreen'></i></button>";
 setTimeout(function(){
   //sm.innerHTML = "";
   var x = document.getElementById("local");
   //alert(x.href);
   }, 5000);
   }else if(arqvd.indexOf("c:") > -1){
      alert("Erro: O navegador se recusa a informar o caminho exato até esse vídeo. Informe-o manualmente.");
   }else{
      alert("Arquivo inválido!"); 
   }
}


//https://static.wikia.nocookie.net/tardis/images/5/5f/Sontaran_occupied_Rio_de_Janeiro.jpg/revision/latest?cb=20211205233438


var notificar = false;
var quartaEpsx = ["<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]: </b>A Viagem dos Condenados https://play.midiaflixhd.com/tv/57243/4/1/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>01</i>]: </b><b class='pisc'> <i class='risc'>Parceiros no Crime</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]: </b>Parceiros no Crime https://play.midiaflixhd.com/tv/57243/4/2/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>02</i>]: </b><b class='pisc'> <i class='risc'>Os Fogos de Pompeia</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]: </b>Os Fogos de Pompéia https://play.midiaflixhd.com/tv/57243/4/3/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>03</i>]: </b><b class='pisc'> <i class='risc'>Planeta dos Ood</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]: </b>Planeta dos Ood https://play.midiaflixhd.com/tv/57243/4/4/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>04</i>]: </b><b class='pisc'> <i class='risc'>O Estratagema Sontaran</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]: </b>O Estratagema Sontaran https://play.midiaflixhd.com/tv/57243/4/5/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>05</i>]: </b><b class='pisc'> <i class='risc'>O Céu Envenenado</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]: </b>O Céu Envenenado https://play.midiaflixhd.com/tv/57243/4/6/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>06</i>]: </b><b class='pisc'> <i class='risc'>A Filha do Doutor</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]: </b>A Filha do Doutor https://play.midiaflixhd.com/tv/57243/4/7/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>07</i>]: </b><b class='pisc'> <i class='risc'>O Unicórnio e a Vespa</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]: </b>O Unicórnio e a Vespa https://play.midiaflixhd.com/tv/57243/4/8/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>08</i>]: </b><b class='pisc'> <i class='risc'>Silêncio na Biblioteca</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]: </b>Silêncio na Biblioteca https://play.midiaflixhd.com/tv/57243/4/9/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>09</i>]: </b><b class='pisc'> <i class='risc'>Floresta dos Mortos</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]: </b>Floresta dos Mortos https://play.midiaflixhd.com/tv/57243/4/10/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>10</i>]: </b><b class='pisc'> <i class='risc'>Meia-Noite</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]: </b>Meia-Noite https://play.midiaflixhd.com/tv/57243/4/11/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>11</i>]: </b><b class='pisc'> <i class='risc'>Vire à Esquerda</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]: </b>Vire à Esquerda https://play.midiaflixhd.com/tv/57243/4/12/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>12</i>]: </b><b class='pisc'> <i class='risc'>A Terra Roubada</i></b>", "<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]: </b>A Terra Roubada https://play.midiaflixhd.com/tv/57243/4/13/dub", "<b style='font-size:1rem;color:#'>[4°T ☆ EP <i class='risc'>13</i>]: </b><b class='pisc'> <i class='risc'>O Fim da Jornada</i></b>"];
var epx = 0;


function siteLink(x){
  console.log(x);
  var s = x;
  arqvd = s;

  if(arqvd == "link"){
    var s = prompt("Cole seu link aqui");
  }
  
  arqvd = s;

  if(arqvd.indexOf("://") > -1 || arqvd.indexOf(".mp4") > -1 || arqvd.indexOf(".m3u8") > -1 || arqvd.indexOf(".pdf") > -1 || arqvd.indexOf(".cbr") > -1){

    geral = document.getElementById("interPlay");
    geral.className = "interPlay";
    const dispositivoMovel = () => window.innerWidth <= 480;
    var phone = true;

      if(!dispositivoMovel()){
        phone = false;
      }

    var u = arqvd;
    var v = u.split('\n');
    var d = u.split(' ');

    if(v.length > 1){
       var x = v.length-1;
       nome = v[0];
       arqvd = v[x];
       //alert(arqvd);
     }else if(d.length > 1){ 
       var x = d.length-1;
       arqvd = d[x];
       //alert(arqvd);
       nome = "";
       for(var i = 0; i <= x-1; i++) {
         nome += d[i]+" ";
       }

     }else{
       arqvd = u;
     }


     var yt1 = arqvd.indexOf("youtube.com/");
     var yt2 = arqvd.indexOf("youtu.be/");
     var yt3 = arqvd.indexOf("youtube.com/watch?v");

     var ytL1 = arqvd.indexOf("youtube.com/playlist?list=PL");

     var vm1 = arqvd.indexOf("https://vimeo.com/");

     var pp1 = arqvd.indexOf(".mp4");
     var pp2 = arqvd.indexOf(".m3u8");
     var hq1 = arqvd.indexOf(".pdf");
     var hq2 = arqvd.indexOf(".cbr");

     var fm1 = arqvd.indexOf("filmeseries.top/embed/");
     var fm2 = arqvd.indexOf("https://play.midiaflixhd.com/");
     var fm3 = arqvd.indexOf("https://servedk.xyz/");
     var fm4 = arqvd.indexOf("https://feurl.com/");
     var fm5 = arqvd.indexOf("https://mixdrop.to/");
     var fm6 = arqvd.indexOf("https://gofilmes.me/play/");
     //https://seriesgratis.site/eps.html?serie=assistir-two-and-a-half-man-dois-homens-e-meio

     var sd1 = arqvd.indexOf("https://vfilmesonline.net/");
     var sd2 = arqvd.indexOf("https://filmesmp4.com/");


     var am1 = arqvd.indexOf("tudogostoso.blog/make/check/?list=");

     var gd1 = arqvd.indexOf("https://drive.google.com/open?id");
     var gd2 = arqvd.indexOf("https://drive.google.com/file/d");

     var mg1 = arqvd.indexOf("https://mega.nz/file/");

     var ru1 = arqvd.indexOf("ok.ru/videoembed/");
     var ru2 = arqvd.indexOf("ok.ru/video/");

     var mru1 = arqvd.indexOf("my.mail.ru/video/");

     var vk1 = arqvd.indexOf("vk.com/video_ext.php?");

     var fb1 = arqvd.indexOf("facebook.com/");

     var rd1 = arqvd.indexOf("https://sinalpublico.com/");


     var loadingx = true;



      if(yt1 > -1 && ytL1 == -1 || yt2 > -1 && ytL1 == -1){
        player = "youtube";
        var three = false;
        if(yt3 > -1){
          three = true;
          var codes = arqvd.split('youtube.com/watch?v');
          var codex = codes[1].split('=');
          arqvd = codex[1];
        }
        if(yt1 > -1 && three == false){
          var codes = arqvd.split('youtube.com/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
        }
        if(yt2 > -1 && three == false){
          var codes = arqvd.split('youtu.be/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
        }
        if(nome == "Mundial Player"){
          nome = "YouTube";
        }

        var pulo = "";
        var hunterP = nome.indexOf("Episódio");
        if(hunterP > -1){
          pulo = "&start=64";
        }
        var parametros = "?rel=0&controls=2&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&hl=pt-BR"+pulo;

           titulo.innerHTML = nome; 

           if(nome.indexOf("hidden>") == -1){
           linkx = "https://www.youtube-nocookie.com/embed/"+arqvd+parametros;
           vid.innerHTML = "<iframe id='player' src='"+linkx+"' allow='accelerometer; autoplay; gyroscope; picture-in-picture' frameborder='0' scrolling='no' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' allowfullscreen></iframe>";
            }

           if(nome.indexOf("hidden>") > -1){
            linkx = "https://riservato-xyz.frama.io/watch/?v="+arqvd;
            vid.innerHTML = "<iframe id='player' src='"+linkx+"' allow='accelerometer; autoplay; gyroscope; picture-in-picture' frameborder='0' scrolling='no' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' allowfullscreen></iframe>";
           }
           //https://riservato-xyz.frama.io/watch/?v=
           sm.innerHTML = "";

           linkx = "https://youtu.be/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://www.y2mate.com/pt/youtube/`+arqvd+`' target='_blank'><i class='bi bi-download'></i></a>
                           <a href='`+linkx+`' target='_blank' class='externox'><button spoiler-alert='Tem certeza? Fora do site você estará exposto(a) a spoilers.' class='combx'>YouTube</button></a>
                           <button onclick='informs(this.name);' title='Player info' name='youtube.com\n\n>> Pode ocorrer erro na indexação de vídeos privados.' class='combx'>Info</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;

        }else if(ytL1 > -1){
          player = "youtubePlaylist";
          if(ytL1 > -1){
            var codes = arqvd.split('youtube.com/playlist?list=PL');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Playlist do YouTube";
          }
           titulo.innerHTML = nome;
           var parametros = "&controls=3&color=white&iv_load_policy=3&showinfo=0&modestbranding=1&rel=0";

           vid.innerHTML = "<iframe id='player' src='http://www.youtube-nocookie.com/embed?listType=playlist&list=PL"+arqvd+parametros+"' frameborder='0' scrolling='no' allow='accelerometer; autoplay; gyroscope; picture-in-picture' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://invidious.namazso.eu/playlist?list=PL"+arqvd+"&dark_mode=true&hl=pt-BR&iv_load_policy=3&quality=medium&related_videos=false&region=3166&controls=1&player_style=youtube' target='_blank'><i class='bi bi-download'></i></a><a href='https://youtube.com/playlist?list=PL"+arqvd+"' target='_blank' class='externo'><button class='comb'>Abrir no YouTube</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>"
        }else if(vm1 > -1){
          player = "vimeo1";
          if(vm1 > -1){
            var codes = arqvd.split('https://vimeo.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Vimeo";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://player.vimeo.com/video/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://www.savethevideo.com/pt/vimeo-downloader?url=https://vimeo.com/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='informs(this.name);' name='Player adaptado para: vimeo.com' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(rd1 > -1){
          player = "redecanais";
          if(rd1 > -1){
            var codes = arqvd.split('https://sinalpublico.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Rede Canais";
          }

            titulo.innerHTML = nome;
            vid.innerHTML = "<a id='player' href='https://sinalpublico.com/"+arqvd+"' target='_blank'><img style='width:100%; max-height:330px; min-height:270px;' src='https://www.shutterstock.com/shutterstock/videos/1060345952/thumb/5.jpg?ip=x480'></a>";
            
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' href='#'><i class='bi bi-download'></i></a><a href='#' class='externo'><button onclick='informs(this.name);' name='Player adaptado para: redecanais.to | Se não deseja ser redirecionado, feche isso e selecione outro player.' class='comb'>Info</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(fm1 > -1){
          player = "filmes1";
          if(fm1 > -1){
            var codes = arqvd.split('https://filmeseries.top/embed/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Filme";
          }
           titulo.innerHTML = nome;

           linkx = "https://filmeseries.top/embed/"+arqvd;
           vid.innerHTML = "<iframe id='player' src='"+linkx+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='filmeseries.top' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(fm2 > -1){
          player = "midiaflixhd";
          if(fm2 > -1){
            var codes = arqvd.split('https://play.midiaflixhd.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }

          titulo.innerHTML = nome;
          if(notificar == true ){
            titulo.innerHTML = quartaEpsx[epx+1];
            setTimeout(function(){
              titulo.innerHTML = nome;
              notificar = false;
            },7500);
          }

          if(nome.indexOf("hidden>") > -1){
            titulo.innerHTML = "<i class='pisc'>(ignore o título abaixo)</i>";
            setTimeout(function(){
              titulo.innerHTML = nome;
              notificar = false;
            },5500);
          }
 

           vid.innerHTML = "<iframe id='player' class='externop' src='https://play.midiaflixhd.com/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen=''  sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           linkx = "https://play.midiaflixhd.com/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='midiaflixhd.com' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(fm3 > -1){
          player = "midiaflixhd";
          if(fm3 > -1){
            var codes = arqvd.split('https://servedk.xyz/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }

          titulo.innerHTML = "<b class='pisc'>Basta clicar três vezes para o vídeo abrir.</b>";
          setTimeout(function(){
            titulo.innerHTML = nome;
          },7500); 
           vid.innerHTML = "<iframe id='player' src='https://servedk.xyz/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><button onclick='informs(this.name);' name='Player adaptado para: servedk.xyz' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm4 > -1){
          player = "midiaflixhd";
          if(fm4 > -1){
            var codes = arqvd.split('https://feurl.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
           titulo.innerHTML = nome;
           vid.innerHTML = "<iframe id='player' src='https://feurl.com/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a'><i class='bi bi-download'></i></a><a href='https://feurl.com/"+arqvd+"' target='_blank' class='externo'><button class='comb'>Abrir no Site</button></a><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(fm5 > -1){
          player = "midiaflixhd";
          if(fm5 > -1){
            var codes = arqvd.split('https://mixdrop.to/e/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
          titulo.innerHTML = "<b class='pisc'>Basta clicar três vezes para o vídeo abrir.</b>";
          setTimeout(function(){
            titulo.innerHTML = nome;
          },7500);
           vid.innerHTML = "<iframe id='player' src='https://mixdrop.to/e/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://mixdrop.co/f/"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='informs(this.name);' name='Player adaptado para: mixdrop.to' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";

           linkx = "https://mixdrop.to/e/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://mixdrop.co/f/`+arqvd+`' target='_blank'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='mixdrop.to' class='comb'>Info</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(fm6 > -1){
          player = "midiaflixhd";
          if(fm6 > -1){
            var codes = arqvd.split('https://gofilmes.me/play/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
            titulo.innerHTML = nome;
           vid.innerHTML = "<iframe id='player' class='gmplayer' src='https://gofilmes.me/play/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           linkx = "https://gofilmes.me/play/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='gofilmes.me' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;

        }else if(sd1 > -1){
          player = "midiaflixhd";
          if(sd1 > -1){
            var codes = arqvd.split('https://vfilmesonline.net/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
           titulo.innerHTML = nome;
           vid.innerHTML = "<iframe id='player' src='https://vfilmesonline.net/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           linkx = "https://vfilmesonline.net/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='vfilmesonline.net' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(sd2 > -1){
          player = "midiaflixhd";
          if(sd2 > -1){
            var codes = arqvd.split('https://filmesmp4.com/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Player Externo";
          }
           titulo.innerHTML = nome;
           vid.innerHTML = `<iframe id="player" src="https://filmesmp4.com/`+arqvd+`" loading="lazy" scrolling="no" async="" sandbox="allow-scripts allow-same-origin" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" referrerpolicy="no-referrer" width="100%" height="100%" frameborder="0"></iframe>`;

           linkx = "https://filmesmp4.com/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='filmesmp4.com' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;

        }else if(am1 > -1){
          player = "tudogostoso";
          if(am1 > -1){
            var codes = arqvd.split('tudogostoso.blog/make/check/?list=');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Arquivo Externo";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://tudogostoso.blog/make/check/?list="+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";

           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://tudogostoso.blog/make/check/?list="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='informs(this.name);' name='Player adaptado para: tudogostoso.blog' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else if(gd1 > -1 || gd2 > -1){
          player = "gdrive";
          if(gd1 > -1){
            var codes = arqvd.split('https://drive.google.com/open?id');
            var codex = codes[1].split('=');
            arqvd = codex[1];
          }
          if(gd2 > -1){
            var codes = arqvd.split('https://drive.google.com/file/d');
            var codex = codes[1].split('/');
            arqvd = codex[1];
          }
          if(nome == "Mundial Player"){
            nome = "Arquivo Google Drive";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://drive.google.com/file/d/"+arqvd+"/preview?foo=bar' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";

           /*sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='https://drive.google.com/uc?export=download&id="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='informs(this.name);' name='Player adaptado para: drive.google.com (os links possuem limite de visualizações diárias, resultando ocasionalmente em erros. Mas você ainda poderá baixar o episódio ou selecionar outro player do site).' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";*/

           linkx = "https://drive.google.com/file/d/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://drive.google.com/uc?export=download&id=`+arqvd+`' target='_blank'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='drive.google.com\n\n>> os links possuem limite de visualizações diárias, resultando ocasionalmente em erros. Mas você ainda poderá baixar o episódio ou selecionar outro player do site.' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(mg1 > -1){
          player = "mega";
          if(mg1 > -1){
            var codes = arqvd.split('https://mega.nz/file/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "MEGA";
          }
           titulo.innerHTML = nome; 
           vid.innerHTML = "<iframe id='player' src='https://mega.nz/embed/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";

           linkx = "https://mega.nz/file/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://mega.nz/file/`+arqvd+`' target='_blank'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='mega.nz' class='comb'>Info</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(ru1 > -1 || ru2 > -1){
          if(ru1 > -1){ 
          var codes = arqvd.split('ok.ru/videoembed/');
          var codex = codes[1].split('/');
          arqvd = codex[0];
          }
          if(ru2 > -1){
            var codes = arqvd.split('ok.ru/video/');
            var codex = codes[1].split('/');
            arqvd = codex[0];
          }
          if(nome == "Mundial Player"){
            nome = "importado de: ok.ru/video";
          }
           titulo.innerHTML = nome; 
           player = "okru";
           vid.innerHTML = "<iframe id='player' allowfullscreen='' mozallowfullscreen='' scrolling='no' src='https://ok.ru/videoembed/"+arqvd+"' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";

           sm.innerHTML = "";
           sm.innerHTML = "<button onclick='informs(this.name);' name='Player adaptado para: ok.ru' class='comb'>Info</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";

           linkx = "https://ok.ru/video/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://okvid.download/' target='_blank'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='ok.ru/video' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;

        }else if(mru1 > -1){
          player = "my.mail";
          if(mru1 > -1){
            var codes = arqvd.split('my.mail.ru/video/');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Importado de my.mail.ru";
          }
           titulo.innerHTML = "<b class='pisc'>Caso fique com algo sobre o vídeo, clique em pause e depois em play.</b>";
            setTimeout(function(){
              titulo.innerHTML = nome;
            },8500); 
           vid.innerHTML = "<iframe id='player' src='https://my.mail.ru/video/"+arqvd+"' frameborder='0' scrolling='no' sandbox='allow-same-origin allow-scripts' allowfullscreen></iframe>";

           linkx = "https://my.mail.ru/video/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='my.mail.ru/video/' class='combx'>Info</button>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(vk1 > -1){
          player = "vk.com";
          if(vk1 > -1){
            var codes = arqvd.split('vk.com/video_ext.php?');
            var codex = codes[1];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Importado de vk.com";
          }
           titulo.innerHTML = nome;
           
           vid.innerHTML = "<iframe id='player' src='https://vk.com/video_ext.php?"+arqvd+"' frameborder='0' sandbox='allow-same-origin allow-scripts' allow='accelerometer; autoplay; encrypted-media; fullscreen; gyroscope; picture-in-picture' allowfullscreen></iframe>";

           linkx = "https://vk.com/video_ext.php?"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a'><i class='bi bi-download'></i></a>
                           <button onclick='informs(this.name);' title='Player info' name='vk.com' class='comb'>Info</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(hq1 > -1){
          player = "pdf";
          if(hq1 > -1){
            var codes = arqvd.split('.pdf');
            var codex = codes[0];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Leitor de PDF";
          }
           titulo.innerHTML = nome;
           
           vid.innerHTML = "<object id='player' class='hq' data='"+arqvd+".pdf' type='application/pdf' typemustmatch><p style='padding: 7px;'>Seu navegador não possui um <b>plugin PDF</b> para visualização online, mas você ainda pode baixar o arquivo <a title='download' href='"+arqvd+".pdf' style='color:#4bbaec;line-height:1.5;'>Clicando Aqui</a><br><br>No entanto, recomendamos que baixe e execute arquivos do tipo <b>.cbr</b> pois possuem uma melhor qualidade de imagem.</p></object>";
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='"+arqvd+".pdf' target='_blank'><i class='bi bi-download'></i></a><button onclick="alert('Rose Tyler em sua encarnação Bad Wolf está de volta na vida do Doutor. Mas não um dos que ela já conhece, e sim o Décimo Primeiro e o Oitavo.');" class='comb'>Sinopse</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(hq2 > -1){
          player = "cbr";
          if(hq2 > -1){
            var codes = arqvd.split('.cbr');
            var codex = codes[0];
            arqvd = codex;
          }
          if(nome == "Mundial Player"){
            nome = "Leitor de HQ";
          }
           titulo.innerHTML = nome;
           
           vid.innerHTML = "<object id='player' class='hq' data='"+arqvd+".cbr' type='application/cbr' typemustmatch><p style='padding: 7px;'>Seu navegador não possui <b>plugin</b> para visualização online deste tipo de arquivo, mas você ainda pode baixá-lo <a title='download' href='"+arqvd+".cbr' style='color:#4bbaec;line-height:1.5;'>Clicando Aqui</a><br><br>Caso esteja acessando pelo seu celular, recomendamos o uso <a title='download' href='https://play.google.com/store/apps/details?id=org.readera&hl=pt_BR&gl=US' style='color:#4bbaec;line-height:1.5;'>Deste App</a> para executar e ler arquivos deste tipo que forem <b>baixados</b>.</p></object>";
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='"+arqvd+".cbr' target='_blank'><i class='bi bi-download'></i></a><button onclick="alert('Rose Tyler em sua encarnação Bad Wolf está de volta na vida do Doutor. Mas não um dos que ela já conhece, e sim o Décimo Primeiro e o Oitavo.');" class='comb'>Sinopse</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(fb1 > -1){
          var arqvdOriginal = arqvd;
          var xfb = "facebook.com/";
          var fb2 = arqvd.indexOf("/videos/");
          var fb3 = arqvd.indexOf("/posts/");
          var fb4 = arqvd.indexOf("/permalink/");
          
          if(fb2 > -1){
            xfb = "/videos/";
          }
          if(fb3 > -1){
            xfb = "/posts/";
          }
          if(fb4 > -1){
            xfb = "/permalink/";
          }
          if(nome == "Mundial Player"){
            nome = "Facebook";
          }

          var codes = arqvd.split(xfb);
          var codex = codes[1].split('/');
          arqvd = codex[0];
          console.log(arqvd);

           titulo.innerHTML = nome; 
           player = "facebook";
           vid.innerHTML = "<iframe id='player' style='max-width: 390px; min-height: 285px' src='https://www.facebook.com/v2.3/plugins/video.php?&container_height=340&href=https://www.facebook.com/redbull/videos/"+arqvd+"/&locale=pt_BR&sdk=joey' webkitallowfullscreen='' mozallowfullscreen='' frameborder='0' scrolling='no' msallowfullscreen='' sandbox='allow-scripts allow-same-origin allow-forms' referrerpolicy='no-referrer' async='' allowfullscreen></iframe>";
           

           linkx = "https://www.facebook.com/videos/"+arqvd;
           sm.innerHTML = ""; 
           sm.innerHTML = `<a id='local' class='a' title='download' href='https://fdown.net/pt' target='_blank'><i class='bi bi-download'></i></a>
                           <a href='`+linkx+`' target='_blank' class='externox'><button spoiler-alert='Tem certeza? Fora do site você estará exposto(a) a spoilers.' class='combx'>Facebook</button></a>
                           <button onclick="copiarURL('https://bad-wolf-brasil.web.app/')" title='Copiar link' class='combx'>Copy</button>
                           <button class='r2' title='Fechar' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>`;
        }else if(pp1 > -1 || pp2 > -1){
          loadingx = false;
          if(nome == "Mundial Player"){
            nome = "Sem Título";
          }
           player = "normal";
           titulo.innerHTML = nome; 
           vid.innerHTML = `
                <form class="video-container" action="" method="GET">
                    <!-- Chamar elemento vídeo com class jlplayer-video -->
                    <video id="player" poster="https://thumbs.gfycat.com/BleakPlayfulAlabamamapturtle-max-1mb.gif" preload="auto" class="jlplayer-video">
                        <source src="`+arqvd+`" type="video/mp4">
                        <!-- <track kind="captions" src="legenda.vtt" default> -->
                    </video>
                </form>
            `;

            playerExecute();

           //vid.innerHTML = "<video preload='auto' preload='meta' controls='controls' id='player'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }else{
          if(nome == "Mundial Player"){
            nome = "Sem Título";
          }
           player = "normal";
           titulo.innerHTML = nome; 
           vid.innerHTML = "<video preload='meta' controls='controls' id='player' class='video'><source src='"+arqvd+"' type='video/mp4'/>O seu navegador não suporta a tag de vídeo</video>";
           sm.innerHTML = ""; 
           sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
        }
       if(onPlay == false){
             openPlayer();
             onPlay = true;
         }

         if(loadingx == true){
           geral = document.getElementById("interPlay");
           geral.className = "interPlay";

           var vidFrame = document.getElementById("player");
           vidFrame.style.backgroundImage = "url(https://i.pinimg.com/originals/cf/ce/2f/cfce2fa4cc0ccdc49cf1482c355a50b8.gif)";
          setTimeout(function(){
            var vidFrame = document.getElementById("player");
            vidFrame.style.backgroundImage = "url()";
          }, 22500);
        }

        geral = document.getElementById("allWho");
        
        //geral.scrollTop = 0;

    }else{
      alert("Link vazio ou inválido.");
   }
}




function informs(a){
  alert(a);
}


function sincronizar(){
  sm.innerHTML = "";
  setTimeout(function(){ 
  sm.innerHTML = "<button id='t'><b>Loading...</b></button><button onclick='stop();' class='r'>&#10003;</button><button onclick='back();' class='r'>&#10007;</button>";
  time(); 
  },500);
}

var countr = new Number();
var countr = 60;

var sincronia = "";

var mtt = 0;

function relogio(){
var sincron = document.getElementById("t");

 var data = new Date ();
 var horas = data.getHours();
 var minutos = data.getMinutes();
 var segundos = data.getSeconds();


   if(horas < 10){
    horas = "0"+horas;
    }
   if(minutos < 10){
    minutos = "0"+minutos;
   }
   if(segundos < 10){
   segundos = "0"+segundos;
   } 
 titulo.innerHTML="<b style='font-size:1rem;color:#c7c7c7'>Horário Local:</b> "+horas+"h "+minutos+":"+segundos;
 minutos++;
 var m = minutos;
 mtt = segundos;
 if(minutos < 10){
    minutos = "0"+minutos;
   }
 sincronia = horas+":"+minutos;
 sincron.innerHTML = "Play às <b>"+horas+"h e "+m+" minutos</b> ?";
}

var cron;
function time(){
  cron = setInterval("relogio()", 1000);
} 

function stop(){
  clearInterval(cron);
  countr = 60-mtt;
  titulo.innerHTML = "Start às "+sincronia+", aguarde..."; 
  starte(); 
}


function starte(){
var sincron = document.getElementById("t");

    if ((countr - 1) >= 0){
      countr -= 1;
      sincron.innerHTML = "Contagem: "+countr;
      if (countr == 0){
        countr = "";
        sincron.innerHTML = "Sincronizado";
        titulo.innerHTML = nome;
        playVide();
      setTimeout(function(){ 
          sm.innerHTML = "";
          sm.innerHTML = "<button style='float: none; border: none; color: #494fa7;' onclick='back();' class='r'><i class='bi bi-bullseye'></i></button>";
        },2000);
      }else if(countr < 10){
       countr = "0"+countr;
       sincron.innerHTML = "Contagem: "+countr;
      }
      //alert(t);
      setTimeout('starte();', 1000);
    }
  }

function back(){
clearInterval(cron); 
  titulo.innerHTML = nome; 
  sm.innerHTML = "";
 setTimeout(function(){
    if(player == "normal"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='"+arqvd+"' download='MD_video1.mp4'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "youtube"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://invidious.namazso.eu/watch?v="+arqvd+"&dark_mode=true&hl=pt-BR&iv_load_policy=3&quality=medium&related_videos=false&region=3166&controls=1&player_style=youtube' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "okru"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://okvid.download/' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "gdrive"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://drive.google.com/uc?export=download&id="+arqvd+"' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }else if(player == "facebook"){
      sm.innerHTML = "<a id='local' class='a' title='download' href='https://ssyoutube.com/pt/how-to-download-facebook-video' target='_blank'><i class='bi bi-download'></i></a><button onclick='sincronizar();' class='comb'>Sincronizar</button><button class='r2' title='closed' onclick='openPlayer()'><i class='bi bi-x-lg'></i></button>";
    }
   }, 500);
}

function goplay(){
   sm.innerHTML = "";
  setTimeout(function(){ 
      sm.innerHTML = "<button style='float: none; border: none; color: #494fa7;' onclick='back();' class='r'><i class='bi bi-bullseye'></i></button>";
    },2000);
}

