var chat = document.getElementById('chat');
var myInput = document.getElementById('txtInput');
var myBtn = document.getElementById('alphaBtn');
var myIcon = document.getElementById('iconSend');
var ennd = true;
var showMeta = document.querySelector("[name='dadosCache']");

showMeta.value = "";

    var addFala = 2;
    var speedText = 90;
    var tempoFala = 0;
 


 myBtn.addEventListener("click", e => {
    if (myBtn.name !== "mic"){
        chat.scrollTop = chat.scrollHeight;
        myIcon.className = "bi bi-mic-fill";
        myBtn.style.transform = "rotate(0deg)";
        myBtn.name = "mic";
        myBtn.onclick = "alert('recurso indisponível')";
        myInputx = myInput.value;
        var acc = myInputx.split(' ');
        var accepterInput = acc[0];

        if(accepterInput !== undefined && accepterInput !== "" && ennd == true){
            active()
            setTimeout(function(){
                document.querySelector("[name='txtInput']").value = "";
            },100);
        }
    }else{

        alert('recurso indisponível');
    }
})




document.addEventListener("keypress", function(e){ 
    if(e.which == 13){
    myInputx = myInput.value;
    var acc = myInputx.split(' ');
    var accepterInput = acc[0];

    if(accepterInput !== undefined && accepterInput !== "" && ennd == true){
            active()
            setTimeout(function(){
                document.querySelector("[name='txtInput']").value = "";
            },100);
        } 
    }
}, false);

function active(){
    var myInputx = myInput.value;
    var acc = myInputx.split(' ');
    var accepterInput = acc[0];

    if(accepterInput !== undefined && accepterInput !== "" && ennd == true){
        var texto_Original = myInputx;

        /*chat.innerHTML +="<div class='p2'><i id='msg"+addFala+"' class='ba'></i></div>";
        var dizerIsto = document.getElementById('msg'+addFala);
        dizerIsto.innerText = texto_Original;
        dizerIsto.innerHTML += "<i class='view'>&#10004;</i>";

        chat.scrollTop = chat.scrollHeight;
        document.querySelector("[name='txtInput']").value = "";
        document.getElementById("txtInput").select();
        addFala++;*/

        //alert(capturando.value)
        if(jogando == false){
            ennd = false;
            taklKaren(myInputx);
            //document.querySelector("[name='txtInput']").value = "";
        }else if(jogando == true){
            ennd = false;
            jogarVelha(myInputx);
            //document.querySelector("[name='txtInput']").value = "";
        }

        document.getElementById("txtInput").select();

        //send(myInputx)
    }
}


function send(resposta){
    if(ennd == true){
        ennd = false;
        setTimeout(function(){
        //---------------------
            chat.innerHTML += "<div class='p1'><div class='escrev"+addMore+"'><div class='loader-item'><div class='loader loader-2'></div></div></div></div>";
                chat.scrollTop = chat.scrollHeight;
        //---------------------
            setTimeout(function(){
                    var responderIsto = document.querySelector('.escrev'+addMore);
                    responderIsto.innerHTML = ""; //limpa escrevendo para receber novo valor
                    responderIsto.innerHTML = "<i class='ab'>"+resposta+"<i class='view2'>&#10004;</i></i>";
                    chat.scrollTop = chat.scrollHeight;
                    addMore++;
                    ennd = true;
                },2110) // loadingWriter 
            },1200);
    }
}

function sendAudio(resposta){
    if(ennd == true){
        ennd = false;
        setTimeout(function(){
        //---------------------
            chat.innerHTML += "<div class='p1'><div onclick='reproduzeAud(this.className);' class='escrev-"+addMore+"-off'><div class='loader-item'><div class='loader loader-2'></div></div></div></div>";
                chat.scrollTop = chat.scrollHeight;
        //---------------------
            setTimeout(function(){
                    var responderIsto = document.querySelector('.escrev-'+addMore+"-off");

                        var numLetras = resposta.split('').length;
                        var loadingWriter = speedText * numLetras;
                        console.log(loadingWriter);
                        if(loadingWriter < 2000){loadingWriter = 2000}
                        var segundos = (loadingWriter / 1000) % 60;
                        var countr = Math.trunc(segundos);
                              if (countr == 0){
                                countr = "00";
                                //console.log("fim");
                              }else if(countr < 10){
                                countr = "0"+countr;
                              }

                    responderIsto.innerHTML = ""; //limpa escrevendo para receber novo valor
                    responderIsto.innerHTML = "<div class='ab' style='font-size: 22px;'><i id='iconPlay"+addMore+"' title='"+resposta+"' class='bi bi-play-fill'></i><i> -::--:-:--:<i class='view2'>00:<i id='tt"+addMore+"'>"+countr+"</i> &#10004;</i></div>";
                    chat.scrollTop = chat.scrollHeight;
                    addMore++;
                    ennd = true;
                    setTimeout(function(){
                        var autoPlay = addMore-1;
                        reproduzeAud("escrev-"+autoPlay+"-off")
                    },700);
                },2110) // loadingWriter 
            },1200);
    }
}





var abc = "...vazio"
var speechSynthesis;
var reproduzindo;
var audioAtual;

    //speechSynthesis.pause()
    //console.log(speechSynthesis.paused)
    //console.log(speechSynthesis.pending)
    //console.log(speechSynthesis.speaking)
    //console.log(speechSynthesis.paused)

var countr = new Number();
var countr = 1;
const synth = window.speechSynthesis;


function reproduzeAud(setado){

    var interAudio = document.querySelector("."+setado);

    var atual = setado.split('-');
    audioAtual = atual[1];
    var start = document.getElementById("iconPlay"+audioAtual);

    //console.log(start.id);

    abc = start.title;

    reproduzindo = speechSynthesis.speaking;

    if(interAudio.className == setado && reproduzindo == false){

        //console.log("parou");

        if (synth.speaking) {
            synth.cancel();
        }
            const utterThis = new SpeechSynthesisUtterance(abc);
            utterThis.addEventListener('error', () => {
            console.error('SpeechSynthesisUtterance error');
        });
        utterThis.rate = 1.25; //vlc
        synth.speak(utterThis);

        interAudio.className = atual[0]+"-"+atual[1]+"-onx";
        reproduzindo == true;
        start.className = "bi bi-pause-fill";

        //console.log(abc);
        var numLetras = abc.split('').length;
        var loadingWriter = speedText * numLetras;
        //console.log(loadingWriter);
        if(loadingWriter < 2000){loadingWriter = 2000}
        var segundos = (loadingWriter / 1000) % 60;
        countr = Math.trunc(segundos);
          if (countr == 0){
            countr = "00";
            //console.log("fim");
          }else if(countr < 10){
            countr = "0"+countr;
          }
            tempoFala = countr;

        var t = document.getElementById("tt"+audioAtual);
        t.innerHTML = countr;
        //console.log(countr);
        starte();

        setTimeout(function(){
            interAudio.className = atual[0]+"-"+atual[1]+"-off";
            reproduzindo == false;
            start.className = "bi bi-play-fill";
        },loadingWriter);
    }
}


function starte(){
var t = document.getElementById("tt"+audioAtual);
    if ((countr - 1) >= 0){
      countr -= 1;
      if (countr == 0){
        countr = "00";
        setTimeout(function(){
            t.innerHTML = tempoFala;
            //console.log("fim: "+tempoFala);
        },1100);
      }else if(countr < 10){
        countr = "0"+countr;
      }
      t.innerHTML = countr;
      setTimeout('starte();', 1000);
    }
  }




function assuntos(){
    send("Este botão sinaliza pra mim te propor um assunto. Bem, no momento eu não tenho nenhum. Sorry.");
    document.getElementById("txtInput").select();
}




var temas = ["https://i.pinimg.com/736x/d6/f6/e4/d6f6e49db7cdbe6435368eb9a6408122--blue-box-awesome.jpg", "https://i.pinimg.com/originals/af/62/3e/af623ea1c3a3dcedfc90b2ccba609e44.gif", "styles/badw.jpg"];

var ntema = -1;

function otherTheme(){
    var interClass = document.getElementById("all");
    if(ntema <= 1){
        ntema++;
        interClass.style.backgroundImage = "url("+temas[ntema]+")"; // troca a img de fundo
    }else{
        ntema = 0;
        interClass.style.backgroundImage = "url("+temas[ntema]+")"; // troca a img de fundo
    }
}


function downscroll(){
    //console.log(myBtn.id);
    chat = document.getElementById('chat');
    if (myBtn.name == "mic" && myInput.value !== ""){
        chat.scrollTop = chat.scrollHeight;
        myIcon.className = "bi bi-send-fill";
        myBtn.style.transform = "rotate(45deg)";
        myBtn.name = "send";
        myBtn.onclick = "active();";
    }else if(myBtn.name == "send" && myInput.value == ""){
        chat.scrollTop = chat.scrollHeight;
        myIcon.className = "bi bi-mic-fill";
        myBtn.style.transform = "rotate(0deg)";
        myBtn.name = "mic";
        myBtn.onclick = "alert('recurso indisponível')";
    }
}



function startBar(){
    var bar = document.getElementById("barra");
    if (bar.className == "barra"){
        bar.className = "barraOn";
    }else{
        bar.className = "barra";
    }
}



function pp(){
    //speechSynthesis.speak(new SpeechSynthesisUtterance("..Seu bunda móle!"))
    //speechSynthesis.pause()
    //speechSynthesis.resume()
    //console.log(SpeechSynthesis.speak()) add a fila
}

var takls33 = [
    ["forca", "forca forca?", "jogar forquinha", "enforcado enforcado?", "vamos jogar forca", "jogo jogar ¥1"],
    ["Acho uma boa, estamos entediados mesmo", "Certo!", "Fantástico!", "Sim!", "Ok, vamos começar.", "Tudo bem, vamos nessa então", "Ora, por que não?"],

    ["outra palavra", "vai outra palavra", "mais uma palavra"],
    ["Como quiser.", "Ta, ta.", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Ta, quero ver acertar essa", "Pois bem."],

    ["jogo jogo? jogar?", "jogo", "algo", "vamos jogar", "jogo jogar ¥2"],
    ["Jogar o quê?", "Quer jogar o quê?", "Diga o quê", "É só me dizer o quê", "Se puder me dizer o que iremos jogar..."],

    ["oi", "ooi", "oii", "oiii", "oiiii", "ola", "oie", "oiie", "oiee", "oieee", "ooie", "oe", "oee", "oeee", "eai", "eaii", "eaiii", "hello", "hola", "coe", "hi"],
    ["Olá", "Oi. Conheço você?", "Olá! Fale rápido, estou meio ocupado agora", "Ah, oi...", "Oi, como vai?"],

    ["<3", ":) (:", ":( ):", ":D :o", "'-'", ";-; ;--;", ".-. .--.", "-_-", "'--'", ";) :p"],
    ["Não faça isso, sem carinhas por favor."],

    ["sz", "s2"],
    ["Oh, certo. sz", "Está bem... sz"],

    ["conta conte uma historia historia? historia? estoria estoria", "historias"],
    ["Uma vez eu estava preso na idade média. Clima quente, frutas boas, enfim. Eu comerciava bois, o mais novo se chamava Fausto."],

    ["flw", "flws falow", "ta", "taa taaa tah"],
    ["O bom e velho linguajar jovem, certo...", "Ah, hippies..."],

    ["blz", "beleza", "blz, blz"],
    ["Uh, be-le-za", "Ok, se tá beleza pra você, tá beleza pra mim"],

    ["ok", "ook", "oook", "ooook", "okay", "okaay", "okaaay", "okay, okay", "ok, ok. okay, okay."],
    ["Aham, ok", "Sim, tudo ok... acho"],

    ["nossa noossa nossaa nossaaa nosa", "nossa mano", "eita", "agressiva grossa mal-educada"],
    ["Humanos..."],

    ["uau", "caramba", "caramba, caramba. carambaa", "incrivel", "incrivel incrivel, incrivel.", "isso e incrivel", "sensacional", "amei", "adorei"],
    ["Surpreso?", "Impressionado?", "Alguém está estupefato?", "Oh, o que foi?", "Eu disse a mesma coisa quando vi uma supernova pela primeira vez"],

    ["gostei de", "te amo", "amo vc", "amo voce", "eu te amo", "eu amo vc", "eu amo voce", "i love you"],
    ["Papo furado.", "Certo, muito agradecido.", "Aham, sei", "E quem não amaria?", "Estou ciente, muito bom gosto o seu.", "...Você sabe que eu não sou humano, não é?", "Bem... obrigado."],

    ["como vai?", "como vai vc?", "como esta?", "como esta vc?", "como voce esta?", "ta td bem?", "esta tudo bem?", "tudo bom?", "td bom?", "tudo ok?", "td ok?", "tudo joia?", "td joia?", "tudo bem com vc?", "tudo bem com voce?", "tudo bem?", "td bem?", "tranquilo?", "tranquilinho?", "bem?", "suave?", "de boa?"],
    ["E por que não estaria? Você não está?", "Bem, por hora estou, e vc?", "Tudo nos trilhos, e você?", "Ah, sabe como é... mas e você?"],

    ["bem", "idem", "tambem", "to bem", "to sim", "estou", "eu tambem", "eu tbm", "to legal", "estou bem sim", "pode ser", "ja pode avontade gosto claro uhum", "sim"],
    ["Bom.", "Fico feliz", "Legal", "Ótimo", "Ainda bem"],

    ["nao", "maisomenos menos", "nao, nao."],
    ["Uh... precisa que eu chame alguém?", "Vai melhorar.", "Alimente-se bem, geralmente ajuda", "Pena.", "Lamento."],

    ["kk", "kkk", "kkkk", "kkkkk", "kkkkkk", "kkkkkkk", "kkkkkkk", "haha", "hahaha", "hehe", "hehehe", "hihi", "kjkj", "kjjk", "jaja", "ajaja", "jajaja", "heuhe", "heuhehe", "rs", "rsrs", "rsrsrs"],
    ["Está se divertindo com isso?", "Achou isso engraçado?", "Rir é um sinal de submissão entre os primatas.", "Gostaria de rir mais um pouco? Digite piadas"],
    
    ["foto ft photo pic picture img imagem", "foto ft photo pic picture img imagem", "queria gostaria mandasse manda enviasse", "nude nudes"],
    ["Perdão, não tenho nenhuma foto aqui comigo."],

    ["ouvir ouvir? voz voz?", "audio audio?", "queria gostaria mandasse falasse manda enviasse fala ¥"],
    ["Esta versão não suporta recursos de voz, lamento", "Não posso, questões técnicas..."],

["envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa", "envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa ¥1"],
["Recomendar? Recomendar o que?", "Quer que eu te recomende o que?", "Gostaria de uma recomendação do que?"],

    ["doutor", "doctor", "doutorr", "doutor?", "doctor?"], 
    ["Sou eu, pois não?", "Sim?", "Sou todo ouvidos", "Aqui", "Eu mesmo", "Seja breve", "O que?", "Hum?"],

    ["gostoso", "lindo", "lindao", "gato", "gatao", "dlc", "delicia", "deuso", "gatinho", "vc e maravilhoso", "voce e lindo", "vc e incrivel"],
    ["Oh... obrigado."],

    ["gostei", "daora", "amei", "amei isso", "vlw", "valeu", "fascinante", "fantastico", "incrivel", "aham","uhum"],
    ["Bom, bom.", "Também acho"],

    ["bigadu", "obg", "obgd", "brigado", "obrigado", "brigada", "obrigada", "agradecida", "grata", "agradecido", "grato", "agradeco", "agradeco thank thanks"],
    ["De nada, de nada", "De nada, mademoiselle", "De nadinha", "Foi um prazer.", "Não por isso."],
    
    ["dscp descp desculpe desculpa dcp descp dscpe dscupe dscupa", "descupa dircupa discupa discurpa dcpa", "desculpas descupas"],
    ["Dessa vez passa.", "Ok, mas não volte a fazer de novo", "Não."],

    ["por favor", "pf", "pfv", "pfvr", "por favorzinho", "porfavor", "porfavorzinho"],
    ["Por favor o que?", "Mas o que você queria mesmo?"],
    
      ["quero", "de novo", "outra", "vai outra", "vai de novo", "mais uma", "quero mais uma", "diz mais uma", "diz outra", "faz outra"],
    ["...O quê?", "Especifique", "Como assim? O quê?"],

 ["quem te criou", "te fez", "criou?", "fez?", "quem fez vc? voce?"],
    ["Com todo respeito, isso não é da sua conta", "Uma pessoa.", "Skynet.", "Longa história."], 

 ["planeta"],
    ["Gallifrey...", "Gallifrey"], 

 ["por que", "porque", "pq","por que?", "porque?", "pq?", "explica", "esplica fala diga diz saber", "me explica"],
    ["Pesquise na internet", "Escute... § Eu não tenho respostas pra tudo."], 

["como assim?", "que?", "q? isso?", "oxi", "oxii", "oxiii", "ooxi", "osh", "o que? q?? que?? an? an??", "nao entendi", "ue ue? uee uee? ueee"],
    ["Estou tão confuso quanto.", "Também não entendo", "Realmente confuso"], 

["entendi compreendo sentido saquei percebi"],
    ["Praticamente um(a) Einstein", "Legal, porque eu não.", "Ótimo."], 

["to triste", "tristao", "tristona", "sad", "bad", "nao to bem", "chorando", "nao to bem", "nao estou bem", "chorar", "morrer", "vazia vazio suicidio suicidar"],
    ["Você precisa falar com alguém, alguém real. Então não perca tempo, busque um amigo."], 

["ele ele?", "dele dele?", "ela ela?", "dela dela?"],
    ["Ok... quem?", "Ah, sim... quem?"], 

["por que pq porque doutor?", "seu nome doutor", "doutor quem?", "doutor quem", "qual seu nome como se chama"],
    ["*** Informação Deletada ***"], 

    ["filme filme? filmes filme?", "filme filme? filmes filme? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥2"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/33100466739' href='#'><b>Eu Robô (2004)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://gofilmes.me/play/tf.php?WEJsS2wrRjVYUVdSdGFUQTZoRW9iUT09' href='#'><b>Matrix (1999)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/1701759290010' href='#'><b>O Exterminador do Futuro 3 - A Rebelião das Máquinas (2003)</b><br>(Este é um link externo, clique aqui para abrir)</a>"], 

    ["livro livro? livros livros?", "livro livro? livros livros? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥3"],
    ["Os clássicos."], 

    ["musica musica? msc msc? mscs mscs? musicas musicas?", "musica musica? msc msc? mscs mscs? musicas musicas? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥4"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://www.youtube.com/watch?v=nppJ6u1MTs4' href='#'><b>Theo Kant - Burro Demais</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=18Xd_TV9oZU' href='#'><b>5 Seconds Of Summer - Lonely Hearts</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=ePujsuc8m-M' href='#'><b>Billie Eilish - Halley</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=EgcXUX8IzSo' href='#'><b>Mariana Froes - Moça</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=P_PdLbAZyCY' href='#'><b>Supercombo - Gravidade</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=JagkYY7fPRU' href='#'><b>Cícero - Açúcar ou adoçante?</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LUk73pUe9i4' href='#'><b>Calle 13 - El Aguante</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=R8AE9-AHsfQ' href='#'><b>Ava Max - Salt</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=N_0f8jCjN4k' href='#'><b>moeshop - love taste</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LshTHxy1-4o' href='#'><b>The Night We Met</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=rFW8uRd2Ry8' href='#'><b>mitski - liquid smooth</b><br>(Este é um link externo, clique aqui para abrir)</a>"],

 ["conhece", "conhece?", "conheco", "conheco, conheco. conhece, conhece."],
   ["Quem?", "Não sei, quem?", "Ah... quem?"], 

 ["jhon jhon?", "jhonatta jhonatta?", "pergon pergon?", "jhon pergon", "conhece conhece? ¥1"],
    ["É um amigo.", "Pérgon? Sim, já ouvi falar. Ele está bem?"],

 ["rose tyler", "marta", "martha", "amy amelia amelya pond", "jack", "conhece conhece? meu nome ¥3"],
  ["Reconheço esse nome"],

  ["fuder fude foder fder fuder", "fdp fdpt fpt puta", "crlh crl carai caralho krl krlh karalho", "porra poura pourra", "pica pika pau rola","bct buceta cu cu cu rabo viado", "foda-se fodasse fodassi foda"],
  ["Detesto palavrões", "Tenha modos, não fale assim cmg", "Que vocabulário sujo", "Seu vocabulário é desprezível..."],

  ["vai se ferrar", "se ferrar", "vai se lascar", "vai a merda"],
  ["Quanta hostilidade."],

  ["chato", "feio", "otario burro besta"],
  ["Quanta hostilidade."],
  
  ["af aff afz affz aaff afff aaaff aaffz affe afe affzz afzz"],
  ["..."],

  ["nada", "nada, nada."],
  ["..."],

  ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?"],
  ["Sabe qual é a panela que está sempre triste? § A panela depressão!", "O que estará escrito na lápide do Papai Noel? § Resposta: Ele não está mais em trenós...", "Sabe por que ninguém gosta de bonecas russas? § Porque elas são muito cheias de si."],

  ["nome", "meu nome me chamo", "sou"],
    ["Entendi, sempre bom conhecer humanos novos", "Ah ok § Muito prazer, pessoa"],

    ["viajar", "rock"],
    ["É um de meus intereses também."],

    ["azul", "verde", "vermelho", "amarelo", "laranja", "marrom", "rosa", "roxo", "lilas", "cinza", "preto", "branco", "violeta"],
    ["Adoro essa cor."],

  ["pessima pessimo", "ruim horrivel", "nao foi boa", "credo"],
  ["Tchau"],

    ["tem tem? e? mesmo? acha acha? certeza?"],
    ["Provavelmente.", "Acho que sim", "Yes, uhum"],

  ["curiosidade curiosidade?", "fato"],
  ["Ok, uma grandessíssima curiosidade é que eu não estou nem aí para curiosidades."],

  ["qual o sentido da vida", "o sentido da vida do universo e tudo mais"],
  ["42."],
  
  ["video", "video videoo", "me manda um video", "manda um video"],
  ["Não encontrei nenhum aqui. Mas você ainda pode digitar filme ou música."],


    ["ERROR 404", "FIM"],
    ["Este comando revelou um erro no meu sistema. Favor reportar!", "Socorro, ocorreu alguma falha no meu código. Favor reportar!"]
]; 








var boole = [ 
            ["sim", "é", "isso", "acho que sim", "seria bom", "aham", "concordo", "uhum", "claro", "pode ser", "quero", "foi", "e serio"],
            ["Sim o quê?", "É?", "E 'isso' seria... ?", "Acha que sim o quê?", "O quê?", "Hãm?", "Com o que está concordando?", "Hum", "Escuro.", "Pode ser o quê? Pepsi?", "Quer o quê?", "Quem? Pra onde?", "O que é sério?"],

 ["verdade", "certo", "está certo", "exato", "muito bem", "isso ai", "isso mesmo"],

            ["nao",],

            ["talvez"], 

            ["nao sei"], 

            ["sla", "sei la"]
];



var erros = [
    ["Perdão, esse seu falatório confuso",
    "Ah, esquece isso. Que tal um jogo da forca?",
    "Loucura",
    "Santo Deus, mas do que é que você está falando?",
    "Ah, que sono.",
    "Você diz coisas muito estranhas. O que acha de ouvir uma música?",
    "Posso te recomendar um filme?",
    "Cale-se.",
    "Isso parece complicado, mude de assunto.",
    "Você não está sob efeito de drogas, está?",
    "Ah, eu lembrei de uma piada! Posso contar?",
    "Hm. Que tal um joguinho da forca?",
    "Vejo isso depois. Gosta de dança?",
    "AUTO DESTRUIÇÃO<br>ATIVADA!<br><br>...Oh, não... alarme falso",
    "Estou pensando em dar um pulinho na Lua.",
    "Você ativou o protocolo ET Bilu, a partir daqui só será possível avançar buscando conhecimento.",
    "Não conte a ninguém mas há um asteroide vindo para cá neste momento. Mas não se preocupe, já estou resolvendo isso.",
    "Shsikujuhasyfgadhu pra você tbm."],


    ["Blé", "...", "..."],
//--------------------------------------------------------- Múltiplas msg
    ["..."],
    ["..."],
    ["..."]
];



var takls44 = [
    ["forca", "forca forca?", "jogar forquinha", "enforcado enforcado?", "vamos jogar forca", "jogo jogar ¥1"],
    ["Acho uma boa, estamos entediados mesmo", "Certo!", "Fantástico!", "Sim!", "Ok, vamos começar.", "Tudo bem, vamos nessa então", "Ora, por que não?"],

    ["outra palavra", "vai outra palavra", "mais uma palavra"],
    ["Como quiser.", "Ta, ta.", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Ta, quero ver acertar essa", "Pois bem."],

    ["jogo jogo? jogar?", "jogo", "algo", "vamos jogar", "jogo jogar ¥2"],
    ["Jogar o quê?", "Quer jogar o quê?", "Diga o quê", "É só me dizer o quê", "Se puder me dizer o que iremos jogar..."],

    ["oi", "ooi", "oii", "oiii", "oiiii", "ola", "oie", "oiie", "oiee", "oieee", "ooie", "oe", "oee", "oeee", "eai", "eaii", "eaiii", "hello", "hola", "coe", "hi"],
    ["Olá", "Oi. Conheço você?", "Olá! Fale rápido, estou meio ocupado agora", "Ah, oi...", "Oi, como vai?"],

    ["<3", ":) (:", ":( ):", ":D :o", "'-'", ";-; ;--;", ".-. .--.", "-_-", "'--'", ";) :p"],
    ["Não faça isso, sem carinhas por favor."],

    ["sz", "s2"],
    ["Oh, certo. sz", "Está bem... sz"],

    ["conta conte uma historia historia? historia? estoria estoria", "historias"],
    ["Uma vez eu estava preso na idade média. Clima quente, frutas boas, enfim. Eu comerciava bois, o mais novo se chamava Fausto."],

    ["flw", "flws falow", "ta", "taa taaa tah"],
    ["O bom e velho linguajar jovem, certo...", "Ah, hippies..."],

    ["blz", "beleza", "blz, blz"],
    ["Uh, be-le-za", "Ok, se tá beleza pra você, tá beleza pra mim"],

    ["ok", "ook", "oook", "ooook", "okay", "okaay", "okaaay", "okay, okay", "ok, ok. okay, okay."],
    ["Aham, ok", "Sim, tudo ok... acho"],

    ["nossa noossa nossaa nossaaa nosa", "nossa mano", "eita", "agressiva grossa mal-educada"],
    ["Humanos..."],

    ["uau", "caramba", "caramba, caramba. carambaa", "incrivel", "incrivel incrivel, incrivel.", "isso e incrivel", "sensacional", "amei", "adorei"],
    ["Surpreso?", "Impressionado?", "Alguém está estupefato?", "Oh, o que foi?", "Eu disse a mesma coisa quando vi uma supernova pela primeira vez"],

    ["gostei de", "te amo", "amo vc", "amo voce", "eu te amo", "eu amo vc", "eu amo voce", "i love you"],
    ["Papo furado.", "Certo, muito agradecido.", "Aham, sei", "E quem não amaria?", "Estou ciente, muito bom gosto o seu.", "...Você sabe que eu não sou humano, não é?", "Bem... obrigado."],

    ["como vai?", "como vai vc?", "como esta?", "como esta vc?", "como voce esta?", "ta td bem?", "esta tudo bem?", "tudo bom?", "td bom?", "tudo ok?", "td ok?", "tudo joia?", "td joia?", "tudo bem com vc?", "tudo bem com voce?", "tudo bem?", "td bem?", "tranquilo?", "tranquilinho?", "bem?", "suave?", "de boa?"],
    ["E por que não estaria? Você não está?", "Bem, por hora estou, e vc?", "Tudo nos trilhos, e você?", "Ah, sabe como é... mas e você?"],

    ["bem", "idem", "tambem", "to bem", "to sim", "estou", "eu tambem", "eu tbm", "to legal", "estou bem sim", "pode ser", "ja pode avontade gosto claro uhum", "sim"],
    ["Bom.", "Fico feliz", "Legal", "Ótimo", "Ainda bem"],

    ["nao", "maisomenos menos", "nao, nao."],
    ["Uh... precisa que eu chame alguém?", "Vai melhorar.", "Alimente-se bem, geralmente ajuda", "Pena.", "Lamento."],

    ["kk", "kkk", "kkkk", "kkkkk", "kkkkkk", "kkkkkkk", "kkkkkkk", "haha", "hahaha", "hehe", "hehehe", "hihi", "kjkj", "kjjk", "jaja", "ajaja", "jajaja", "heuhe", "heuhehe", "rs", "rsrs", "rsrsrs"],
    ["Está se divertindo com isso?", "Achou isso engraçado?", "Rir é um sinal de submissão entre os primatas.", "Gostaria de rir mais um pouco? Digite piadas"],
    
    ["foto ft photo pic picture img imagem", "foto ft photo pic picture img imagem", "queria gostaria mandasse manda enviasse", "nude nudes"],
    ["Perdão, não tenho nenhuma foto aqui comigo."],

    ["ouvir ouvir? voz voz?", "audio audio?", "queria gostaria mandasse falasse manda enviasse fala ¥"],
    ["Esta versão não suporta recursos de voz, lamento", "Não posso, questões técnicas..."],

["envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa", "envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa ¥1"],
["Recomendar? Recomendar o que?", "Quer que eu te recomende o que?", "Gostaria de uma recomendação do que?"],

    ["doutor", "doctor", "doutorr", "doutor?", "doctor?"], 
    ["Sou eu, pois não?", "Sim?", "Sou todo ouvidos", "Aqui", "Eu mesmo", "Seja breve", "O que?", "Hum?"],

    ["gostoso", "lindo", "lindao", "gato", "gatao", "dlc", "delicia", "deuso", "gatinho", "vc e maravilhoso", "voce e lindo", "vc e incrivel"],
    ["Oh... obrigado."],

    ["gostei", "daora", "amei", "amei isso", "vlw", "valeu", "fascinante", "fantastico", "incrivel", "aham","uhum"],
    ["Bom, bom.", "Também acho"],

    ["bigadu", "obg", "obgd", "brigado", "obrigado", "brigada", "obrigada", "agradecida", "grata", "agradecido", "grato", "agradeco", "agradeco thank thanks"],
    ["De nada, de nada", "De nada, mademoiselle", "De nadinha", "Foi um prazer.", "Não por isso."],
    
    ["dscp descp desculpe desculpa dcp descp dscpe dscupe dscupa", "descupa dircupa discupa discurpa dcpa", "desculpas descupas"],
    ["Dessa vez passa.", "Ok, mas não volte a fazer de novo", "Não."],

    ["por favor", "pf", "pfv", "pfvr", "por favorzinho", "porfavor", "porfavorzinho"],
    ["Por favor o que?", "Mas o que você queria mesmo?"],
    
      ["quero", "de novo", "outra", "vai outra", "vai de novo", "mais uma", "quero mais uma", "diz mais uma", "diz outra", "faz outra"],
    ["...O quê?", "Especifique", "Como assim? O quê?"],

 ["quem te criou", "te fez", "criou?", "fez?", "quem fez vc? voce?"],
    ["Com todo respeito, isso não é da sua conta", "Uma pessoa.", "Skynet.", "Longa história."], 

 ["planeta"],
    ["Gallifrey...", "Gallifrey"], 

 ["por que", "porque", "pq","por que?", "porque?", "pq?", "explica", "esplica fala diga diz saber", "me explica"],
    ["Pesquise na internet", "Escute... § Eu não tenho respostas pra tudo."], 

["como assim?", "que?", "q? isso?", "oxi", "oxii", "oxiii", "ooxi", "osh", "o que? q?? que?? an? an??", "nao entendi", "ue ue? uee uee? ueee"],
    ["Estou tão confuso quanto.", "Também não entendo", "Realmente confuso"], 

["entendi compreendo sentido saquei percebi"],
    ["Praticamente um(a) Einstein", "Legal, porque eu não.", "Ótimo."], 

["to triste", "tristao", "tristona", "sad", "bad", "nao to bem", "chorando", "nao to bem", "nao estou bem", "chorar", "morrer", "vazia vazio suicidio suicidar"],
    ["Você precisa falar com alguém, alguém real. Então não perca tempo, busque um amigo."], 

["ele ele?", "dele dele?", "ela ela?", "dela dela?"],
    ["Ok... quem?", "Ah, sim... quem?"], 

["por que pq porque doutor?", "seu nome doutor", "doutor quem?", "doutor quem", "qual seu nome como se chama"],
    ["*** Informação Deletada ***"], 

    ["filme filme? filmes filme?", "filme filme? filmes filme? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥2"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/33100466739' href='#'><b>Eu Robô (2004)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://gofilmes.me/play/tf.php?WEJsS2wrRjVYUVdSdGFUQTZoRW9iUT09' href='#'><b>Matrix (1999)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/1701759290010' href='#'><b>O Exterminador do Futuro 3 - A Rebelião das Máquinas (2003)</b><br>(Este é um link externo, clique aqui para abrir)</a>"], 

    ["livro livro? livros livros?", "livro livro? livros livros? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥3"],
    ["Os clássicos."], 

    ["musica musica? msc msc? mscs mscs? musicas musicas?", "musica musica? msc msc? mscs mscs? musicas musicas? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥4"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://www.youtube.com/watch?v=nppJ6u1MTs4' href='#'><b>Theo Kant - Burro Demais</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=18Xd_TV9oZU' href='#'><b>5 Seconds Of Summer - Lonely Hearts</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=ePujsuc8m-M' href='#'><b>Billie Eilish - Halley</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=EgcXUX8IzSo' href='#'><b>Mariana Froes - Moça</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=P_PdLbAZyCY' href='#'><b>Supercombo - Gravidade</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=JagkYY7fPRU' href='#'><b>Cícero - Açúcar ou adoçante?</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LUk73pUe9i4' href='#'><b>Calle 13 - El Aguante</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=R8AE9-AHsfQ' href='#'><b>Ava Max - Salt</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=N_0f8jCjN4k' href='#'><b>moeshop - love taste</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LshTHxy1-4o' href='#'><b>The Night We Met</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=rFW8uRd2Ry8' href='#'><b>mitski - liquid smooth</b><br>(Este é um link externo, clique aqui para abrir)</a>"],

 ["conhece", "conhece?", "conheco", "conheco, conheco. conhece, conhece."],
   ["Quem?", "Não sei, quem?", "Ah... quem?"], 

 ["jhon jhon?", "jhonatta jhonatta?", "pergon pergon?", "jhon pergon", "conhece conhece? ¥1"],
    ["É um amigo.", "Pérgon? Sim, já ouvi falar. Ele está bem?"],

 ["rose tyler", "marta", "martha", "amy amelia amelya pond", "jack", "conhece conhece? meu nome ¥3"],
  ["Reconheço esse nome"],

  ["fuder fude foder fder fuder", "fdp fdpt fpt puta", "crlh crl carai caralho krl krlh karalho", "porra poura pourra", "pica pika pau rola","bct buceta cu cu cu rabo viado", "foda-se fodasse fodassi foda"],
  ["Detesto palavrões", "Tenha modos, não fale assim cmg", "Que vocabulário sujo", "Seu vocabulário é desprezível..."],

  ["vai se ferrar", "se ferrar", "vai se lascar", "vai a merda"],
  ["Quanta hostilidade."],

  ["chato", "feio", "otario burro besta"],
  ["Quanta hostilidade."],
  
  ["af aff afz affz aaff afff aaaff aaffz affe afe affzz afzz"],
  ["..."],

  ["nada", "nada, nada."],
  ["..."],

  ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?"],
  ["Sabe qual é a panela que está sempre triste? § A panela depressão!", "O que estará escrito na lápide do Papai Noel? § Resposta: Ele não está mais em trenós...", "Sabe por que ninguém gosta de bonecas russas? § Porque elas são muito cheias de si."],

  ["nome", "meu nome me chamo", "sou"],
    ["Entendi, sempre bom conhecer humanos novos", "Ah ok § Muito prazer, pessoa"],

    ["viajar", "rock"],
    ["É um de meus intereses também."],

    ["azul", "verde", "vermelho", "amarelo", "laranja", "marrom", "rosa", "roxo", "lilas", "cinza", "preto", "branco", "violeta"],
    ["Adoro essa cor."],

  ["pessima pessimo", "ruim horrivel", "nao foi boa", "credo"],
  ["Tchau"],

    ["tem tem? e? mesmo? acha acha? certeza?"],
    ["Provavelmente.", "Acho que sim", "Yes, uhum"],

  ["curiosidade curiosidade?", "fato"],
  ["Ok, uma grandessíssima curiosidade é que eu não estou nem aí para curiosidades."],

  ["qual o sentido da vida", "o sentido da vida do universo e tudo mais"],
  ["42."],
  
  ["video", "video videoo", "me manda um video", "manda um video"],
  ["Não encontrei nenhum aqui. Mas você ainda pode digitar filme ou música."],

    ["ERROR 404", "FIM"],
    ["Este comando revelou um erro no meu sistema. Favor reportar!", "Socorro, ocorreu alguma falha no meu código. Favor reportar!"]
]; 



var erros44 = [
    ["Perdão, esse seu falatório confuso",
    "Ah, esquece isso. Que tal um jogo da forca?",
    "Loucura",
    "Santo Deus, mas do que é que você está falando?",
    "Ah, que sono.",
    "Você diz coisas muito estranhas. O que acha de ouvir uma música?",
    "Posso te recomendar um filme?",
    "Cale-se.",
    "Isso parece complicado, mude de assunto.",
    "Você não está sob efeito de drogas, está?",
    "Ah, eu lembrei de uma piada! Posso contar?",
    "Hm. Que tal um joguinho da forca?",
    "Vejo isso depois. Gosta de dança?",
    "AUTO DESTRUIÇÃO<br>ATIVADA!<br><br>...Alarme falso",
    "Estou pensando em dar um pulinho na Lua.",
    "Você ativou o protocolo ET Bilu, a partir daqui só será possível avançar buscando conhecimento.",
    "Não conte a ninguém mas há um asteroide vindo para cá neste momento. Mas não se preocupe, já estou resolvendo isso.",
    "Shsikujuhasyfgadhu pra você tbm."],


    ["Blé", "...", "..."],
//--------------------------------------------------------- Múltiplas msg
    ["..."],
    ["..."],
    ["..."]
]; 


var capturando = "";
var texto_Original;
var min;

var conversaON = false;
var jogando = false;
var play1 = false;

var loadingWriter = 990;

var vacuo = false;

var addMore = 0;
var addFala = 0;



var objDiv = document.getElementById("chat");
var t = 0;

function taklKaren(inputx){

    capturando = inputx;
    texto_Original = capturando;
  

if(capturando !== ""){
//------------------------------------------------------------------------------------
// pega a primeira letra do texto original e a torna maiúscula (capricho estético)
    capturando = texto_Original.trim(); 
    var palavra = capturando.toLowerCase().split(" ");
    var arrayX = 0; 
    if (arrayX < palavra.length) {
        var inicial = palavra[arrayX];
        palavra[arrayX] = inicial[0].toUpperCase() + inicial.slice(1);
    }
    texto_Original = palavra.join(" "); 
    
    min = capturando;
    capturando = min.toLowerCase(); // minimiza tudo

// retira acentos do texto
    min = capturando;
        com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
        sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";
        capturando="";
        for(i=0; i<min.length; i++) {
            troca=false;
            for (a=0; a<com_acento.length; a++) {
                if (min.substr(i,1)==com_acento.substr(a,1)) {
                    capturando+=sem_acento.substr(a,1);
                    troca=true;
                    break;
                }
            }
            if (troca==false) {
                capturando += min.substr(i,1);
            }
        }
//------------------------------------------------------------------------------------


    if(takls33[t] !== undefined){
        //conso("_.._.. Análise preliminar _.._..");

        for (i = 0; takls33[t].indexOf(capturando) < 0 && t < takls33.length-2; i++) {
        //console.log("flow");
            t += 2;
        }
    }
    if(takls33[t] !== undefined && t <= 0){
        //console.log(takls33[t]);
        console.log("______ xxxxx ______");
        for (i = 0; takls33[t].indexOf(capturando) < 0 && t < takls33.length-2; i++) {
        //console.log("flow");
            t += 2;
        }
    }

    //console.log("T ===== "+t);

    var respost2 = takls33[t].indexOf(capturando);

    //console.log("Resposta: "+respost2+" com T em "+t);
    console.log("\n\n###### "+capturando+" ######");
    showMeta.value += "###### "+capturando+" ######\n";

    //frases chave (temporário, substituir por buscador de parametros [...])
    //alert(respost2);
    if(respost2 >= 0){
          //alert("checando memoria");
        memory()
    }else{
    //alert("segunda olhada...")
        segundaOlhada();
    }

t = 0;
    }
    
}



var interClass = document.getElementById("interface");
var chatStyle = document.getElementById("chat");
var rolarx = new Number();
var rolarx = 180;

function up(){
    if(rolarx > 0){
    if ((rolarx - 1) >= 0){
      rolarx -= 1;
      if (rolarx == 0){
        //alert("fim");
      }else if(rolarx < 10){
        rolarx = "0"+rolarx;
      }
        chatStyle.scrollTop -= 1;
        setTimeout('up();', 5);
    }
   }else{
      rolarx = 180;
   }
} 

function down(){
    if(rolarx > 0){
    if ((rolarx - 1) >= 0){
      rolarx -= 1;
      if (rolarx == 0){
        //alert("fim");
      }else if(rolarx < 10){
        rolarx = "0"+rolarx;
      }
        chatStyle.scrollTop += 1;
        setTimeout('down();', 5);
    }
   }else{
      rolarx = 180;
   }
} 




function styleOver(){
    chatStyle.style.width = "105.2%";
  chatStyle.style.overflowY = "scroll";
} 
function styleOut(){
  chatStyle.style.width = "100%";
  chatStyle.style.overflowY = "inherit";
} 


var qp = [];

function segundaOlhada(){
console.log("<< Nada de primeira, calculando resposta aproximada...>>");
showMeta.value += "<< Nada de primeira, calculando resposta aproximada...>>\n";

 var nulos = ["a", "e", "o", "eu", "te", "se", "so", "de", "da", "do", "tal", "que", "para", "pra", "la", "me", "um", "uma", "duas", "dois", "tres", "vc", "voce", "fale", "fala"];

//alert("Inputer = "+capturando+"\n");
 var palavras = capturando.split(' ');

var u = 0;
var t = 0;
var rts = takls33[t][u];

    var x = [];
    var numeroDePemT = [];
    var vezesEmT = 1;
    var tx = t;
    var repetido = takls33[t][u];
    var termox = "";
    var termosDetect = [];
   
for(d = 0; d < palavras.length; d++){
        
     for (i = 0; t < takls33.length-2; i++) {

         for(p = 0; p < takls33[t].length; p++){

                rtAproximada = takls33[t][u].split(' ');



                for(f = 0; f < rtAproximada.length; f++){


//for(d = 0; d < palavras.length; d++){

        var ignore = nulos.indexOf(palavras[d]); 
 //ignorar artigos e preposições
         var detectPalavra = rtAproximada.indexOf(palavras[d]);

                        if(detectPalavra > -1 && ignore == -1 && repetido !== takls33[t][u]){

       termox = palavras[d];

                                termosDetect.push(" "+takls33[t][u]);
                                
                                numeroDePemT.push(takls33[t][u]);

   repetido = takls33[t][u];


 if(tx !== t){
         tx = t;
        //console.log(t);
                                vezesEmT = 1;

        x.push(t);

     var nx = x.indexOf(t);

            }else{
//console.log(t+" detectado "+numeroDePemT.length+" vezes")
  vezesEmT = numeroDePemT.length;
      x.push(t);

                   }
                        } 
                    
                }
                u++;
                

            }
            u = 0;
            t += 2; 

            if (vezesEmT > 0 && termox !== "" && termosDetect[0] !== undefined) {
            //console.log(x);
            //console.log("\nO termo '"+termox+"' CORRESPONDE À: "+termosDetect);

//alert("'"+termox+"' ="+termosDetect+"\nDetected ("+vezesEmT+")vzs"+" no "+tx+".");
            }
            numeroDePemT = [];
            termosDetect = [];
        }
        var dan = d+1;        
 
 //alert("_______________________________ A "+dan+"° palavra foi analisada.");
        t = 0;
    }

qp = x;
//alert("qp = "+qp);
if(qp == ""){
 //alert("Error 404");
 erro();
}else{
  contadora(); 
  }
  
}

//segundaOlhada()



function contadora(){

var x = 0;
var y = 0;
var sc = [[]];
var ctd = [];
var contados = 0;

var memoriaNumeral = [];
var numeros = [];

//alert("--> Função contadora chamada");
//console.log(qp);

sc[x].push(qp[0])
sc[x].push(contados)
memoriaNumeral.push(qp[0]);

        for (var i = qp.length; i > 0; i--) {

            //let t = qp[0].indexOf(ctd);
            //console.log("----------------------- Próximo Processo ------------------------");
            //console.log("sc[x][0] = "+sc[x][0]+" Enquanto qp[0] = "+qp[0]);

            contados = 0;
            //console.log(memoriaNumeral);

            var detectRept = memoriaNumeral.indexOf(qp[0]);
            //console.log(detectRept);

            if (sc[x][0] !== qp[0] && detectRept < 0) {

                sc.push([qp[0]])
                sc[x+1].push(contados+1)

                //console.log("NOVO: "+sc[x+1][0]+". ("+sc[x+1][1]+"vzs)");
                memoriaNumeral.push(qp[0]);

                x++;

            }else if(x == 10){

            }else{
                var aqui = memoriaNumeral[detectRept];

                //console.log("sc.length = "+sc.length)

                for (var n = 0; n < sc.length; n++) {
                    
                    if (aqui == sc[n][0]){

                        var sbt = sc[n][1]+1;
                        sc[n].splice(1, 1, sbt) //substitui do array 1, uma vez.

                        //console.log("contando "+memoriaNumeral[detectRept]+" Pela "+sc[n][1]+" Vez.");

                    }
                }
                
            }
            qp.shift();
        }

//console.log(sc); // resultado da contagem
//console.log(memoriaNumeral);


        //console.log(sc);
        //console.log(numeros);

        for(var j = 0; j < sc.length; j++){
            if(sc[j][1] !== undefined){
                //empilhar no array vazio
                numeros.push(sc[j][1]);
                }
        }


        var maior_numero = Math.max.apply(null, numeros);
        var c = numeros.indexOf(maior_numero);

        console.log("=*=*=> "+memoriaNumeral[c]+" é o melhor resultado pois "+
            maior_numero+" Palavras correspondentes foram encontradas nele.");
        showMeta.value += "=*=*=> "+memoriaNumeral[c]+" é o melhor resultado pois "+
            maior_numero+" Palavras correspondentes foram encontradas nele.\n";

        t = memoriaNumeral[c];

    if(memoriaNumeral[c] !== undefined || remanberTwo > -1){
        if(t == 0 || t == 2){
                play1 = true;
            }
        memory()
    }else{
       //alert("nada encontrado")
        erro(); 
    }
} 

var memory1 = []; // recebimento
var memory2 = []; // resposta 
var memory3 = []; // Mudar de assunto

var remanberTwo = -1;

//pega o últimos da memory1 e o último da memory2 para saber o assunto:
var assunto = [
"34,35,30", // manda ft 
"35",  // pede novamente

"26,27,28", // td joia? / vou bem e vc? / idem
"29", // que bom

"38,39,28", // msc / tipo assim? / yes
"39", 

"38,39,50", // msc / outra / ok
"39", // msc

"6,7,26", // oi, td bem
"27", // estou

"0,1,50", //outra palavra FORCA
"2", 

"12,13,48", //uma historia
"13",

"1r,52,53", //forca
"1",

"1r,28,29", //forca
"1",


"5r,28,29",  //musica
"75",

"5r,52,53", 
"75",


"6r,28,29", //filme
"71",

"6r,52,53", 
"71",


"11r,28,29", //fofa
"35",

"11r,52,52",
"35",


"10r,28,29", //piada
"93",


"Fim", 
"..."
];



function memory(){
//alert("----------------------> Função MEMORY chamada");

var respost = takls33[t].indexOf(capturando);

 //alert("T ===== "+t);
       memory2.push(t);
       memory2.push(t+1);
       //console.log("input: "+ memory2[0]+" Resposta: "+memory2[1])
        
   console.log("Input. <----> "+t);
   showMeta.value += "Input. <----> "+t+"\n";
   console.log("MEMÓRIA: "+ memory2);
   showMeta.value += "MEMÓRIA: "+ memory2+"\n";

    var checkTwo = "";
    var ct = 0;
    var j = 0;
    remanberTwo = -1;

if(memory2[1] !== undefined){
        checkTwo += memory2;

 for(c = 0; c < assunto.length-1 && remanberTwo < 0; c+=2) {
 
//alert(checkTwo)
 remanberTwo = checkTwo.indexOf(assunto[c]);
 //console.log("assunto[c]: "+assunto[c+1]) 
 //alert(c);
  if (remanberTwo > -1){
console.log("Padrão ENCONTRADO em "+ct+": ["+checkTwo+" = "+memory2+"]");
showMeta.value += "Padrão ENCONTRADO em "+ct+": ["+checkTwo+" = "+memory2+"]\n";
                j = c;
 }else if(remanberTwo < 0){
 //console.log("Assunto em teste ("+c+")")
            }
            ct = c;
        }
console.log("Busca em árvore de memórias parou em: "+c+"/"+assunto.length)
showMeta.value += "Busca em árvore de memórias parou em: "+c+"/"+assunto.length+"\n";
    }  


 var atalho = assunto.indexOf(assunto[j]) 
 atalho++;
 atalho = assunto[atalho]
console.log("remanberTwo === "+remanberTwo);

 if(takls33[t] !== undefined && remanberTwo > -1){
        //console.log(atalho);
        t = atalho;
        //alert("Atalho ===== "+t);
console.log("__ Tipo de conversação: sistêmica __");
showMeta.value += "__ Tipo de conversação: sistêmica __\n";
       // alert("T = "+t);
       if(memory2[1] == 1 || atalho == "1"){
                play1 = true;
            }
        says();
    }else{
 console.log("__ Tipo de conversação: automática __");
 showMeta.value += "__ Tipo de conversação: automática __\n";
        if(t == 0){
                play1 = true;
            }
        t = t +1;
       //console.log("T = "+t);
        says();
    }
}  

var forcax = [
["sapato", "é um calçado"],
["pudim", "é de comer"],
["caneta", "escrita"],
["sabonete", "cheiro bom"],
["submarino", "possui uso militar"],
["ferroviaria", "transporte"],
["mandarim", "idioma"],
["predador", "animal perigoso"],
["boliche", "esporte"],
["figurino", "teatro"],
["polvilho", "culinária"],
["ortografia", "escritor"],
["carruagem", "cavalos"],
["espionagem", "guerra fria"]
  ];
  
var forc = ["x", "", "", "", "", "", ""];


var sx = [];
var desafiox;

var x1 = [];
var x2 = "";

var errosP = 6;



function playJogo1(){ 
//alert("game ativado");
//x = x1.indexOf('_'); Então se x for menor que 0, vc venceu


if (takls33[3].length < 1){
    takls33[3].push(["Como quiser.", "Ta, ta.", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Pan pan pan", "Como vc é irritante!", "Ta, quero ver acertar essa", "Pois bem."]);
}

var aleatoryu = Math.floor(Math.random() * forcax.length); 


sx.push(forcax[aleatoryu]);

var selecionado = forcax.indexOf(sx[0]);
//alert("Dica : "+sx[0][1])

desafiox = sx[0][0].split('');
//alert("Desafiox: "+desafiox);

var jaFoi = [];

for (var p = 0; p < desafiox.length; p++) {
    x1.push("_")
    x2 += x1[p]+" ";
}

//alert("x2 = "+x2);
//console.log(desafiox)



forcax.splice(selecionado, 1) //remove

//console.log(forcax[selecionado])
//console.log(forcax) 



//-----------------------------------------------
var objDiv = document.getElementById("chat");

objDiv.scrollTop = objDiv.scrollHeight;
jogando = false;
    setTimeout(function(){
     document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
            },600);
            setTimeout(function(){ // resposta
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML +="<b class='ab'>"+x2.toUpperCase()+"</b>";

objDiv.scrollTop = objDiv.scrollHeight;
             //var atuale = document.querySelector(".escrev"+addMore);
                addMore++;
             //atuale.className = atuale.className+addMore;
        },2210)
//----------------------------------
objDiv.scrollTop = objDiv.scrollHeight;


  setTimeout(function(){
            document.getElementById('chat').innerHTML +=
            "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
      },3200);
            
   setTimeout(function(){ // resposta
        
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>Dica: "+sx[0][1]+" <i class='view2'>&#10004;</i></i>";

objDiv.scrollTop = objDiv.scrollHeight;
             //var atuale = document.querySelector(".escrev"+addMore);
                addMore++;
             //atuale.className = atuale.className+addMore;
        },4010)
    
    jogando = true;

}


var letraDigitada = "";


var temLetra = false;
var aceitar = true;








function jogarVelha(inputx){

    temLetra = false;
    capturando = inputx;
    letraDigitada = capturando.toLowerCase();

    var tentativa = capturando.split(' ');

        var writX = new RegExp('^(letra )');

        if (writX.test(capturando.toLowerCase()) == true) {
            letraDigitada = tentativa[1];
        }

//------------------------------------------------------------------------------------
    txtoriginal = capturando;

        // pega a primeira letra do texto original e a torna maiúscula (capricho estético)
            var capturando = txtoriginal.trim(); 
            var palavra = capturando.toLowerCase().split(" ");
            var arrayX = 0; 
            if (arrayX < palavra.length) {
                var inicial = palavra[arrayX];
                palavra[arrayX] = inicial[0].toUpperCase() + inicial.slice(1);
                //console.log(inicial[0]);
            }
            txtoriginal = palavra.join(" "); 

//------------------------------------------------------------------------------------


if(capturando !== ""){
document.getElementById('chat').innerHTML +="<p class='p2'><i id='msg"+addFala+"' class='ba'></i></p>";
var dizerIsto = document.getElementById('msg'+addFala);
dizerIsto.innerText = txtoriginal;
dizerIsto.innerHTML += "<i class='view2'>&#10004;</i>";
//document.getElementById('msg'+addFala).Id = "msg33";
addFala++;

x2 = "";

    if(letraDigitada.length < 2){

        var numDeLetras = sx[0][0].split(letraDigitada).length-1;
        var LETRA = desafiox.indexOf(letraDigitada);

        console.log("numDeLetras: "+numDeLetras)

        if(numDeLetras > 0){
            for (var L = 0; L < x1.length; L++) {

                    if(desafiox[L] == letraDigitada){
                        x1.splice(L, 1, letraDigitada);
                    }
                }
        }
            
            
        for (var p = 0; p < x1.length; p++) {
            //console.log(LETRA)
            //console.log(x1[p])
            if(x1[p] !== undefined && LETRA > -1){
                temLetra = true;
                x2 += x1[p]+" "; 
            }else{
                x2 += "_ ";
            }
        }
        //console.log(x2)


        aceitar = true;
        responder();
        }else{
            aceitar = false;
            responder();
            play1 = false; 
            jogando = false;
objDiv.scrollTop = objDiv.scrollHeight;
        }
    }else{
        alert("digite alguma coisa!");
    }

}






var addMore = 0;
var addFala = 0;

function responder(){
    var objDiv = document.getElementById("chat");

        //console.log();
        capturando = myInput.value;
        min = capturando.toLowerCase();

        capturando = min;
        chat = document.getElementById('chat');

 var youWin = x2.split(' ').indexOf("_");


//talks

        //frases chave (temporário, substituir por buscador de parametros [...])
  if(aceitar == true && temLetra == true){

objDiv.scrollTop = objDiv.scrollHeight;
        setTimeout(function(){
document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
            },600);

objDiv.scrollTop = objDiv.scrollHeight;
//Resposta
setTimeout(function(){ 
document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
 document.querySelector('.escrev'+addMore).innerHTML +="<b class='ab'>"+x2.toUpperCase()+"</b>";
objDiv.scrollTop = objDiv.scrollHeight;
                addMore++;
                ennd = true;

if(youWin < 0){
 sx.splice(0, 1) //remove

 objDiv.scrollTop = objDiv.scrollHeight;
           jogando = false;

                    setTimeout(function(){
 document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
     },100);
     
objDiv.scrollTop = objDiv.scrollHeight;
//Venceu
setTimeout(function(){
   document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
 document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>"+"Muito bom, você venceu!"+"<i class='view2'>&#10004;</i></i>";
objDiv.scrollTop = objDiv.scrollHeight;


            sx = []; // esvaziar
            x1 = []; // limpar 
            x2 = "";

            play1 = false; 
            jogando = false;
            errosP = 6;

           addMore++;
           ennd = true;
                    },1110)
                }
    objDiv.scrollTop = objDiv.scrollHeight;
        },1510)

objDiv.scrollTop = objDiv.scrollHeight;
        }else if(temLetra == false && aceitar == true){
            jogando = false;
objDiv.scrollTop = objDiv.scrollHeight;

//Não tem Letra
setTimeout(function(){
document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
          
    objDiv.scrollTop = objDiv.scrollHeight;      
setTimeout(function(){
                jogando = true;
 document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>Não tem "+letraDigitada+". <i class='view2'>&#10004;</i></i>";
objDiv.scrollTop = objDiv.scrollHeight;

                addMore++;
                ennd = true;
 },1010);


setTimeout(function(){
    errosP--;
document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>Recalculando...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
        },1900);

setTimeout(function(){ // resposta
document.querySelector('.escrev'+addMore).innerHTML = ""; 
document.querySelector('.escrev'+addMore).innerHTML += "<i class='ab'>Restam<b title ='"+errosP+"/6'> "+errosP+" </b>chances.</i>";
objDiv.scrollTop = objDiv.scrollHeight;
       addMore++;
       ennd = true;
           
            },2100);
            
 setTimeout(function(){
 objDiv.scrollTop = objDiv.scrollHeight;
 },3400);
 setTimeout(function(){
 objDiv.scrollTop = objDiv.scrollHeight;
 },4500);

objDiv.scrollTop = objDiv.scrollHeight;
  if(errosP <= 1){
        jogando = false;

 objDiv.scrollTop = objDiv.scrollHeight;
   setTimeout(function(){
document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
                 },2400);
    objDiv.scrollTop = objDiv.scrollHeight;
   setTimeout(function(){ // resposta
document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>"+"Acabaram suas chances, você perdeu. A palavra  era <b>"+sx[0][0]+"</b>! Humano burrinho. <i class='view2'>&#10004;</i></i>";

objDiv.scrollTop = objDiv.scrollHeight;

          sx = []; // esvaziar
          x1 = []; // limpar 
          x2 = "";

         play1 = false; 
         jogando = false;
         errosP = 6;

           addMore++;
           ennd = true;
           
                    },3010);
                }
           jogando = false;
     },700);

objDiv.scrollTop = objDiv.scrollHeight;

}else if(capturando == sx[0][0]){
        jogando = false;
        sx.splice(0, 1) //remove

objDiv.scrollTop = objDiv.scrollHeight;

                setTimeout(function(){
document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
             },1100);
                    
objDiv.scrollTop = objDiv.scrollHeight;

   setTimeout(function(){ // resposta
document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>"+"Correto. Vc venceu essa, parabéns!"+" <i class='view2'>&#10004;</i></i>"; 
   objDiv.scrollTop = objDiv.scrollHeight;

         sx = []; // esvaziar
         x1 = []; // limpar 
         x2 = "";

         play1 = false
         jogando = false;
         errosP = 6;
                addMore++;
                ennd = true;
objDiv.scrollTop = objDiv.scrollHeight;
             },2210);
   objDiv.scrollTop = objDiv.scrollHeight;
                
    }else if(capturando !== sx[0][0] && capturando.length == sx[0][0].length){
        jogando = false;
objDiv.scrollTop = objDiv.scrollHeight;
        setTimeout(function(){
            document.getElementById('chat').innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
            },600);

objDiv.scrollTop = objDiv.scrollHeight;

setTimeout(function(){
          jogando = true;
document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>Hm... Não, esta não é a resposta. <i class='view2'>&#10004;</i></i>";
objDiv.scrollTop = objDiv.scrollHeight;
               addMore++;
               ennd = true;
        },1510)
    }else{

objDiv.scrollTop = objDiv.scrollHeight; 

jogando = false;
play1 = false; 

setTimeout(function(){
document.getElementById('chat').innerHTML +=
            "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='escrevendo'>...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
            },600);
            
 objDiv.scrollTop = objDiv.scrollHeight;

setTimeout(function(){
                jogando = true;
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>Blá, blá. Apenas diga uma letra ou arrisque dizer qual é a palavra. Voltaremos a conversar normalmente depois. <i class='view2'>&#10004;</i></i>";
objDiv.scrollTop = objDiv.scrollHeight;

                addMore++;
                ennd = true;
        },2110)
    }
objDiv.scrollTop = objDiv.scrollHeight; 
}  

var mult_txt = [];

function says(){

//alert("----------------------> Função SAY chamada");

if(takls33[t].length < 1){
takls33[t] = takls44[t];
}


if(remanberTwo === -1){
//----------------------------

var sx = [];

var aleatoryu = Math.floor(Math.random() * takls33[t].length);

sx.push(takls33[t][aleatoryu]);

//alert(sx[0]);

var selecionado = takls33[t].indexOf(sx[0]);

//alert(selecionado);
//alert(takls33[t]);

takls33[t].splice(selecionado, 1)
//remove
//alert(takls33[t]);
//----------------------------
}

if(remanberTwo > -1){
//----------------------------
//alert("T say= "+t);
var sx = [];

var aleatoryu = Math.floor(Math.random() * takls33[t].length);

sx.push(takls33[t][aleatoryu]);

//alert(sx[0]);

var selecionado = takls33[t].indexOf(sx[0]);

//alert(selecionado);
//alert(takls33[t]);

takls33[t].splice(selecionado, 1) ;
//remove
//alert(takls33[t]);
//----------------------------
}


if (memory2.length > 2){
memory2.shift();
memory2.shift();
//alert("memoria limpada");
}



//var play = takls33[3].indexOf(sx[0]);
//alert("play1== "+play1);


objDiv.innerHTML +="<p class='p2'><i id='msg"+addFala+"' class='ba'></i></p>";
var dizerIsto = document.getElementById('msg'+addFala);
dizerIsto.innerText = texto_Original;
dizerIsto.innerHTML += "<i class='view'>&#10004;</i>";
//document.getElementById('msg'+addFala).Id = "msg33"; 
addFala++;
    objDiv.scrollTop = objDiv.scrollHeight;



if(sx[0].indexOf("§") > -1){
     mult_txt = sx[0].split("§");
     //alert(mult_txt); 
     ativeFalas();
}else if(sx[0].indexOf("§") == -1){



setTimeout(function(){
//---------------------
    if(sx[0].indexOf("<audio") > -1){
    objDiv.innerHTML +=
    "<p class='p1'><cite class='escrev"+addMore+"'><i class='gravando'>gravando áudio...</i></cite></p>";
        objDiv.scrollTop = objDiv.scrollHeight;

        loadingWriter = 2990; 
    }else if(sx[0].indexOf("<video") > -1){
    objDiv.innerHTML +=
    "<p class='p1'><cite class='escrev"+addMore+"'><i class='gravando'>Loading video...</i></cite></p>";
        objDiv.scrollTop = objDiv.scrollHeight;

        loadingWriter = 2990; 
    }else if(sx[0].indexOf("<img") > -1){
    objDiv.innerHTML +=
    "<p class='p1'><cite class='escrev"+addMore+"'><i class='gravando'>Loading image...</i></cite></p>";
        objDiv.scrollTop = objDiv.scrollHeight;
        
        loadingWriter = 2990; 
    }else if(sx[0].indexOf("<a") > -1){
    objDiv.innerHTML +=
    "<p class='p1'><cite class='escrev"+addMore+"'><i class='gravando'>Loading link...</i></cite></p>";
        objDiv.scrollTop = objDiv.scrollHeight;

        loadingWriter = 2990; 
    }else{
    objDiv.innerHTML +=
    "<div class='p1'><div class='escrev"+addMore+"'><div class='loader-item'><div class='loader loader-2'></div></div></div></div>";
        objDiv.scrollTop = objDiv.scrollHeight;

        var speedText = 185;
        var numLetras = sx[0].split('').length;
        loadingWriter = speedText * numLetras;
        }
//---------------------
//console.log(loadingWriter);

    setTimeout(function(){
        if(sx[0].indexOf("<audio") > -1 || sx[0].indexOf("<img") > -1 || sx[0].indexOf("<video") > -1){
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML += sx[0];
        objDiv.scrollTop = objDiv.scrollHeight;
        }else{
            var responderIsto = document.querySelector('.escrev'+addMore);
            responderIsto.innerHTML = ""; //limpa escrevendo para receber novo valor
            responderIsto.innerHTML +="<i class='ab'>"+sx[0]+"<i class='view2'>&#10004;</i></i>";

            if(play1 == true){
                jogando = true;
                //alert("playjogo1 >>>")
                playJogo1(); 
            }
        }
        objDiv.scrollTop = objDiv.scrollHeight;
         //var atuale = document.querySelector(".escrev"+addMore);
            addMore++;
         //atuale.className = atuale.className+addMore;
         ennd = true;
        },1210) // loadingWriter 

    },1600);
    
setTimeout(function(){
 objDiv.scrollTop = objDiv.scrollHeight;
 },3400);
 setTimeout(function(){
 objDiv.scrollTop = objDiv.scrollHeight;
 },4200); 

 console.log("R: "+sx[0]+"\n\n");
 showMeta.value += "R: "+sx[0]+"\n\n";

/*window.addEventListener('load',function(){
  alert("carregado");
}); */ 
    }

} 

/*document.addEventListener('DOMContentLoaded', function() {
   alert("carregado");
   }, false); */ 


var time1;
var ss;


function sayIt2(){

//alert("pan2");

objDiv.scrollTop = objDiv.scrollHeight;

if (mult_txt[0] !== undefined){

 var listGo = mult_txt[0].split(" ");

 setTimeout(function(){
    //---------------------
 if(mult_txt[0].indexOf("<audio") > -1){
 objDiv.innerHTML +=
        "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='gravando'>gravando áudio...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
loadingWriter = 2990; 
        }else if(listGo.indexOf("<img") > -1){ 
  objDiv.innerHTML +=
        "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='gravando'>Carregando imagem...</i></cite></p>";
 objDiv.scrollTop = objDiv.scrollHeight;
loadingWriter = 2990; 
        }else if(mult_txt[0].indexOf("<a") > -1){
  objDiv.innerHTML += "<p class='p1'><cite class='escrev"+addMore+"' class='p1'><i class='gravando'>Loading...</i></cite></p>";
objDiv.scrollTop = objDiv.scrollHeight;
loadingWriter = 2990; 
        }else{
objDiv.innerHTML +="<div class='p1'><div class='escrev"+addMore+"' class='p1'><div class='loader-item'><div class='loader loader-2'></div></div></div></div>";
 objDiv.scrollTop = objDiv.scrollHeight;

    var speedText = 185;
    var numLetras = erros44[t][0].split('').length;
            loadingWriter = speedText * numLetras;
            }
    //---------------------
    console.log(loadingWriter);

        setTimeout(function(){
            if(listGo.indexOf("<audio") > -1){
                document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML += mult_txt[0];
 objDiv.scrollTop = objDiv.scrollHeight;
    //----------------------------
 
 mult_txt.shift() //remove 1

        if(mult_txt.length < 1){
            clearInterval(timer1);
            addMore++;
        }
    //----------------------------
  }else{
document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>"+mult_txt[0]+"</i>";
    //----------------------------
        
            mult_txt.shift() //remove
           
        if(mult_txt.length < 1){
            clearInterval(timer1);
            addMore++;
            ennd = true;
        }
    //----------------------------
            }
     addMore++;
objDiv.scrollTop = objDiv.scrollHeight;
            },510) // loadingWriter 

        },710);
    }else{
        ennd = true;
        clearInterval(timer1);
    }
}


var veloci = 1500;

function ativeFalas(){
    //alert("pan1");
  timer1 = setInterval(sayIt2,veloci);
} 

function erro(){
console.log("Input. <-404-> Nada parecido com isso nos meus arquivos.*"); 
showMeta.value += "Input. <-404-> Nada parecido com isso nos meus arquivos.*\n";
if(erros[0].length < 2){
erros = erros44;
}
//----------------------------
console.log("__ Iniciando mudança de Assunto... __");
showMeta.value += "__ Iniciando mudança de Assunto... __\n";

var aleatoryu = Math.floor(Math.random() * erros[0].length);


var sx = [];

sx.push(erros[0][aleatoryu]);
var selecionado = erros[0].indexOf(sx[0]);
//alert(sx[0]);
   //erros[0].splice(selecionado, 1) 
  //remove
 //alert(erros[0]);
//----------------------------

memory2.push(selecionado+"r");

console.log("MEMÓRIA: "+ memory2);
showMeta.value += "MEMÓRIA: "+ memory2+"\n";
console.log("__ Tipo de conversação: improvisada/aleatória __");
showMeta.value += "__ Tipo de conversação: improvisada/aleatória __\n";
console.log("R: "+sx[0]+"\n\n");
showMeta.value += "R: "+sx[0]+"\n\n";

if (memory2.length > 2){
memory2.shift();
memory2.shift();
}
if (memory2.length > 1){
    memory2.shift();
 }
//alert(memory2); 


objDiv.innerHTML +="<p class='p2'><i id='msg"+addFala+"' class='ba'></i></p>";
    var dizerIsto = document.getElementById('msg'+addFala);
    dizerIsto.innerText = texto_Original;
    dizerIsto.innerHTML += "<i class='view'>&#10004;</i>";
    addFala++;
        objDiv.scrollTop = objDiv.scrollHeight;


setTimeout(function(){
    objDiv.innerHTML +=
    "<div class='p1'><div class='escrev"+addMore+"' class='p1'><div class='loader-item'><div class='loader loader-2'></div></div></div></div>";
        objDiv.scrollTop = objDiv.scrollHeight;
//---------------------
    if(sx[0].indexOf("<audio") > -1 || sx[0].indexOf("<img") > -1 || sx[0].indexOf("<a") > -1){
        loadingWriter = 1210; 
    }else{
        var speedText = 185;
        var numLetras = sx[0].split('').length;
        loadingWriter = speedText * numLetras;
        }
//---------------------
//console.log(loadingWriter);

    setTimeout(function(){
        if(sx[0].indexOf("<audio") > -1 || sx[0].indexOf("<img") > -1 || sx[0].indexOf("<a") > -1){
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML += sx[0];
        }else{
        //console.log(sx[0].indexOf("audio"))
            document.querySelector('.escrev'+addMore).innerHTML = ""; //limpa escrevendo para receber novo valor
            document.querySelector('.escrev'+addMore).innerHTML +="<i class='ab'>"+sx[0]+" <i class='view2'>&#10004;</i></i>";
        }
        objDiv.scrollTop = objDiv.scrollHeight;
         //var atuale = document.querySelector(".escrev"+addMore);
            addMore++;
            ennd = true;
         //atuale.className = atuale.className+addMore;
        },1210) // loadingWriter 

    },1600);
} 

