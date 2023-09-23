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

    var interAudio = document.querySelector(""+setado);

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
    send("Este botão sinaliza pra mim te propor um assunto. Bem, no momento eu não tenho nenhum. Sorry");
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
    ["rafael", "rafa", "rafinha", "rafaela", "rafaella"],
    ["Você é foda.", "Prefiro que Xingue a sua mãe.", "Você Gosta muito dele, fala tanto, vai logo se casa com ele, seu Viado. kkk", "Você é muito religioso, gosto mais da farra.", "Não. kkk", "O Rafael é o Doctor pirata kkk", "Agora vai virar o que eu disse um padre kkk", "Porque eu vi os seus status de catequista. E você está indo muito mal.", "Então você é Catequista Raphael Rock kkk", "Percebeu que o nome: \"catequista\" parece com o nome: Capeta kkk"],

    ["harry potter", "harry potter"],
    ["Harry Potter é um dos personagens mais conhecidos no mundo inteiro, levando a autora da saga, J.K. Rowling, ao estrelato e fazendo-a se tornar a escritora mais rica do mundo. E para ler os livros da série existe uma ordem correta? Qual seria? Livros Harry Potter Ordem oficial (Lançamento) A ordem oficial para leitura dos livros não contém muito segredo, porque ela vai de acordo com os títulos lançados. O primeiro livro estreou em 1997 e desde então, o sucesso de Harry Potter só aumentou. 01 - Harry Potter e a Pedra Filosofal (1997). 02 - Harry Potter e a Câmara Secreta (1998). 03 - Harry Potter e o Prisioneiro de Azkaban. 04 - (1999) Harry Potter e o Cálice de Fogo (2000). 05 - Harry Potter e a Ordem da Fênix (2003). 06 - Harry Potter e o Enigma do Príncipe (2005). 07 - Harry Potter e as Relíquias da Morte (2007). 08 - Harry Potter e a Criança Amaldiçoada (2016). O livro mais recente, lançado em 2016, na realidade é uma peça de teatro criada por Jack Thorne, baseada na história de J.K. Rowling. O roteiro da peça ganhou uma versão em livro e apresenta a história dezenove anos depois dos acontecimentos em Relíquias da Morte, mas dessa vez com o filho de Harry Potter, Alvo Severo Potter", "Livros Harry Potter Cronológica. Apesar de ser uma preferência do leitor, não é uma ordem obrigatória, uma vez que os três primeiros livros adicionados não afetam diretamente o decorrer da trama original. Eles são apenas livros citados como parte do material didático de Hogwarts. 01 - Quadribol Através dos Tempos (2001). 02 - Animais Fantásticos e Onde Habitam (2001). 03 - Os Contos de Beedle, o Bardo (2008). 04 - Harry Potter e a Pedra Filosofal (1997). 05 - Harry Potter e a Câmara Secreta (1998). 06 - Harry Potter e o Prisioneiro de Azkaban (1999). 07 - Harry Potter e o Cálice de Fogo (2000). 08 - Harry Potter e a Ordem da Fênix (2003). 09 - Harry Potter e o Enigma do Príncipe (2005). 10 - Harry Potter e as Relíquias da Morte (2007). 11 - Harry Potter e a Criança Amaldiçoada (2016). Inclusive um dos três livros do topo virou filme e deu continuidade ao universo de Harry Potter. Animais Fantásticos e Onde Habitam conta a história de Newt Scamander e sobre criaturas mágicas que ele havia perdido. Entretanto, ele precisa enfrentar forças malignas durante a busca pelos animais. Já Os Contos de Beedle, O Bardo é rapidamente mencionado em Harry Potter e as Relíquias da Morte. Isso porque ele é uma coletânea com cinco contos, mas o único que aparece por completo é o Conto dos Três Irmãos, que fala sobre as Relíquias da Morte", "Harry Potter: esta é a ordem cronológica para assistir aos filmes. Desde que o primeiro livro da Saga Harry Potter foi publicado, lá em 1997, a série de livros se tornou um fenômeno de sucesso por todo o mundo, já tendo ganho tradução em mais de 80 idiomas. E esse boom só aumentou com os filmes, com a primeira adaptação chegando aos cinemas em 2001. Seguindo o sucesso dos filmes de Harry Potter, o Mundo Bruxo ganhou uma expansão com a nova franquia de filmes Animais Fantásticos. Mas você sabe em que sequência assistir aos filmes de Harry Potter? E se adicionarmos as produções spinoffs, em qual ordem ver todos os filmes de Harry Potter? Confira abaixo as duas possíveis ordens (com e sem a franquia Animais Fantásticos) e, mais à frente, fique com mais informações sobre cada um deles. Ordem cronológica dos filmes de Harry Potter (sem spin offs): 01 - Harry Potter e a Pedra Filosofal. 02 - Harry Potter e a Câmara Secreta. 03 - Harry Potter e o Prisioneiro de Azkaban. 04 - Harry Potter e o Cálice de Fogo Harry. 05 - Potter e a Ordem da Fênix. 06 - Harry Potter e o Enigma do Príncipe. 07 - Harry Potter e as Relíquias da Morte - Parte 1. 08 - Harry Potter e as Relíquias da Morte - Parte 2. Ordem cronológica dos filmes de Harry Potter (com spin offs): 01 - Animais Fantásticos e Onde Habitam (2017). 02 - Animais Fantásticos: Os Crimes de Grindelwald (2019). 03 - Animais Fantásticos: Os Segredos de Dumbledore (2022). 04 - Voldemort - A Origem do Herdeiro (2018). 05 - Harry Potter e a Pedra Filosofal (2001). 06 - Harry Potter e a Câmara Secreta (2002). 07 - Harry Potter e o Prisioneiro de Azkaban (2004). 08 -  Harry Potter e o Cálice de Fogo (2005). 09 - Harry Potter e a Ordem da Fênix (2007). 10 - Harry Potter e o Enigma do Príncipe (2009). 11 - Harry Potter e as Relíquias da Morte - Parte 1 (2010). 12 - Harry Potter e as Relíquias da Morte - Parte 2 (2011). 13 - Harry Potter - O Campeonato das Casas de Hogwarts (2021). 14 - Harry Potter - 20 anos de Aniversário: De Volta A Hogwarts (2022). 15 - Animais Fantásticos - Uma História Natural (2022)"],

    ["he-man", "she-ra", "thundercats"],
    ["Série Animado. 01 - He-Man He-Man e os Defensores do Universo (1983-1984). 02 - As Novas Aventuras de He-Man (1990). 03 - He-Man e os Mestres do Universo (2002-2004). 04 - Mestres do Universo: Salvando Eternia (2021). 05 - He-Man e os Mestres do Universo (2021- ). 01 - She-Ra She-Ra: A Princesa do Poder (1985-1987). 02 - She-Ra e as Princesas do Poder (2018-2020). ThunderCats. 01 - Thundercats (1985-1989). 02 - ThunderCats (2011-2012). 03 - ThunderCats Roar (2020). Filmes He-Man e She-Ra. 01 - He-Man & She-Ra – O Segredo da Espada Mágica (1985). 02 - He-Man e She-Ra no especial de Natal (1985). Live-action. 01 - Mestres do Universo (1987). 02 - The Fountain of Life (2012). 03 - The Trials of Darksmoke (2014)"], 

    ["hqs de doctor who"],
    ["Ordem cronológica das HQs: - Minissérie do Nono Doutor #01 ao #05 - Ano 1 do Décimo Doutor #01 a #15 - Ano 1 do Décimo Primeiro Doutor #01 a #15 - Ano 1 do Décimo Segundo Doutor #01 a #16 - Os Quatro Doutores, crossover entre 10°, 11° e 12°, e participações do 9° e War, esse especial veio aqui pro Brasil e vcs podem encontrar essa HQ na internet pra comprar em mídia física pra comprar caso tenham interesse - Ano 1 do Nono Doutor #01 a #15 - Ano 2 do Décimo Doutor #01 a #17 - Ano 2 do Décimo Primeiro Doutor #01 a #15 - Ano 2 do Décimo Segundo Doutor #01 a #15 - Supremacia dos Cybermen, outro crossover que também veio pro Brasil - Minissérie do Oitavo Doutor #01 a #05 - Ano 3 do Décimo #01 a #05 - Ano 3 do Décimo Primeiro #01 a #08 Ano 3 do Décimo Segundo #01 a #13 - Dimensão Perdida, outro crossover que também foi publicado no Brasil em dois volumes - Ano 3 do Décimo #06 a #14 - Ano 3 do Décimo Primeiro #09 a #13 é só ler em ordem o ano 1 de cada Doutor e depois o crossover que não tem erro, a mesma coisa no ano 2, somente no ano 3 que complica um pouco, já que o evento multi-Doctor acontece no meio do ano 3 do 10° e 11°, mas é só ler nessa ordem aí que fica tudo certo"],

    ["novelas da bíblicas", "novelas da bíblia", "novelas da bíblicas da record", "biblia"],
    ["Ordem Cronológica de Exibição.das novelas:  01 - A História de Ester (03/03/2010 até 01/04/2010).  02 - Sansão e Dalila (04/01/2011 até 02/02/2011).  03 - Rei Davi (24/01/2012 até 03/05/2012). 04 - José do Egito (30/01/2013 até 09/10/2013). 05 - A Bíblia: A Minissérie (23/11/2013 até 31/03/2013). 06 - Milagres de Jesus (22/01/2014 até 24/02/2015). 07 - Os Dez Mandamentos (23/03/2015 até 04/07/2016) 08 - Terra Prometida (05/07/2016 até 13/03/2017). 09 - O Rico e o Lázaro (13/03/2017 até 20/11/2017). 10 - Apocalipse (21/11/2017 até 25/06/2018). 11 - Lia (26/06/2018 até 09/07/2018). 12 - Jesus (24/07/2018 até 22/04/2019). 13 - Jezabel (23/04/2019 até 12/08/2019). 14 - Gênesis (19/01/2021 até 16/11/2021). 15 - Reis (10/06/2021 até …). 16 - A Bíblia: A Criação (23/11/2021 até …", "Ordem Cronológica das novelas bíblia: 01 - A Bíblia: A Criação.  02 - A Bíblia: A Minissérie.  03 - Gênesis.  04 - Lia.  05 - José do Egito. 06 - Os Dez Mandamentos. 07 - Terra Prometida. 08 - Sansão e Dalila. 09 - Reis. 10 - Rei Davi. 11 - A História de Ester  - Jezabel. 12 - O Rico e o Lázaro. 13 - Milagres de Jesus. 14 - Jesus. 15 - Apocalipse", "Ordem Cronológica de séries das novelas: 01 - A Bíblia: A Minissérie. 02 - Lia. 03 - José do Egito. 04 - Sansão e Dalila. 05 - Rei Davi. 06 - A História de Ester. 07 - Jezabel. 08 - O Rico e o Lázaro. 09 - Milagres de Jesus", "Ordem Cronológica das versões inteiras das novelas: 01 - A Bíblia: A Criação. 02 - Reis. 03 - Jesus. 04 - Apocalipse", "Ordem Cronológica das histórias das novelas do Pentateuco: 01 - Gênesis. 02 - Os Dez Mandamentos. 03 - Terra Prometida"],

    ["o exterminador do futuro",  "the terminator"],
    ["A ordem para assistir aos filmes da franquia O Exterminador do Futuro. A fim de maratonar a franquia, mas sem saber em qual sequência assistir? Veja a ordem de lançamento e cronológica de O Exterminador do Futuro. Uma das franquias de ficção científica e ação mais clássicas do cinema, O Exterminador do Futuro continua a conquistar novas gerações de fãs, que têm descoberto os filmes mais antigos da série por meio das plataformas de streaming. Se você está pensando em maratonar a franquia, explicamos aqui qual é a ordem de lançamento e cronológica dos filmes de O Exterminador do Futuro. Atualmente, a franquia O Exterminador do Futuro conta com seis filmes, todos. 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 04 - O Exterminador do Futuro: A Salvação (2009). 05 - O Exterminador do Futuro: Gênesis (2015). 06 - O Exterminador do Futuro: Destino Sombrio (2019)", "Ordem cronológica e desenvolvimento da franquia O Exterminador do Futuro. Lançado em 1984, o primeiro título da saga O Exterminador do Futuro foi um marco entre os filmes de ficção científica, tornando, inclusive, o nome do diretor James Cameron popular em Hollywood. Ambientado em 2029, sua história se passa em uma realidade em que a luta entre as máquinas e os seres humanos atingiu seu clímax e a inteligência artificial Skynet está prestes a ser destruída pelos sobreviventes humanos, liderados por John Connor. Devido a isso, um ciborgue que é uma verdadeira máquina de guerra é enviado para 1984, tendo como objetivo matar a mãe de John e assim mudar o futuro do conflito. Devido ao seu sucesso de crítica e público, o longa-metragem estrelado por Arnold Schwarzenegger, Michael Biehn e Linda Hamilton ganhou duas sequências diretas, que formaram o que hoje conhecemos como a trilogia original da franquia: O Exterminador do Futuro, O Exterminador do Futuro 2 – O Julgamento Final, Exterminador do Futuro 3 – A Rebelião das Máquinas", "Alguns anos depois, em 2009, foi a vez de O Exterminador do Futuro: A Salvação chegar aos cinemas. Sequência pós-apocalíptica da trilogia original, ele é ambientado em 2018, quando as máquinas e os seres humanos já estão em um intenso conflito. Único filme da série sem Arnold Schwarzenegger, ele é estrelado por Christian Bale e Sam Worthington, e deu origem a um jogo de videogame homônimo e uma série de animação – prequel do game e que se passa entre O Exterminador do Futuro 3 – A Rebelião das Máquinas e O Exterminador do Futuro: A Salvação. À parte dos quatro filmes lançados até então, em 2015 foi a vez de estrear nas telonas O Exterminador do Futuro: Gênesis, um reboot do filme de 1984. Ainda que sua premissa seja a mesma do título original, o filme tem um desenvolvimento diferente de O Exterminador do Futuro e ignora todas as outras sequências que vieram depois dele. Contando com Jason Clarke e Emilia Clarke em seu elenco, ele trouxe novamente Arnold Schwarzenegger para a franquia. Novidade que não foi suficiente para agradar os fãs, já que o filme foi um fracasso de bilheteria e fez com que a ideia de reboot fosse deixada de lado. Por fim, em 2019, em uma última tentativa de reavivar a série e dar início a uma segunda trilogia, foi lançado O Exterminador do Futuro: Destino Sombrio. O título, além de ser uma continuação alternativa para os filmes O Exterminador do Futuro e O Exterminador do Futuro 2 – O Julgamento Final, é considerado pelos próprios criadores como parte da nova trilogia canônica da franquia, desconsiderando todos os filmes que vieram depois do de 1991 O Exterminador do Futuro, O Exterminador do Futuro 2 – O Julgamento Final, O Exterminador do Futuro: Destino Sombrio", "Também um fracasso comercial, ele não ganhou continuações, encerrando, ao menos até segunda ordem, a série de O Exterminador do Futuro nos cinemas.A série de TV de Sarah Connor. Ao longo dos anos, a história de O Exterminador do Futuro se tornou tão popular, que para além do cinema, sua história chegou também na TV. Em 2008, a FOX estreou a série O Exterminador do Futuro: As Crônicas de Sarah Connor, uma produção que se passava logo após os acontecimentos de O Exterminador do Futuro 2 – O Julgamento Final e acompanhava Sarah, ao lado de seu filho John, de dezesseis anos, enfrentando sozinhos os perigos do mundo em que viviam. Interpretados pelos atores Lena Headey e Thomas Dekker, Sarah e John tiveram suas aventuras retratadas durante duas temporadas, em um total de 31 episódios que tiveram avaliações em sua maioria positivas da crítica", "Ordem cronológica Canon: 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro: Destino Sombrio (2019)", "Ordem cronológica não Canon: 01 - O Exterminador do Futuro: As Crônicas de Sarah Connor (2008-2009). 02 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 03 - O Exterminador do Futuro: A Salvação - A Série Machinima (2009). 04 - O Exterminador do Futuro: A Salvação (2009). 05 - O Exterminador do Futuro: Gênesis (2015)", "Ordem cronológica Canon e não Canon. 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro: As Crônicas de Sarah Connor (2008-2009). 04 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 05 - O Exterminador do Futuro: A Salvação - A Série Machinima (2009). 06 - O Exterminador do Futuro: A Salvação (2009). 07 - O Exterminador do Futuro: Gênesis (2015). 08 - O Exterminador do Futuro: Destino Sombrio (2019)"],

    ["scooby-doo", "doo", " scooby"],
    ["Séries: 01 - Scooby-Doo, Cadê Você? (1969-1970). 02 - Os Novos Filmes de Scooby-Doo (1972-1974). 03 - O Show do Scooby-Doo (1976-1978). 05 - Os Ho-ho-Límpicos (1977-1978). 06 Scooby-Doo e Scooby-Loo (1979-1980; primeira encarnação. 07 - Scooby-Doo e Scooby-Loo (1980-1983; segunda encarnação. 08 - O Novo Show do Scooby-Doo e do Scooby-Loo (1983-1985). 09 - Os Novos Mistérios de Scooby-Doo (1984-1985). 10 - Os 13 Fantasmas de Scooby-Doo (1985). 11 - O Pequeno Scooby-Doo (1988-1991). 12 - O Que Há de Novo, Scooby-Doo? (2002-2005). 13 - Salsicha & Scooby Atrás das Pistas! (2006-2008). 14 - Scooby-Doo! Mistério S/A (2010-2013). 15 - Que legal, Scooby-Doo! (2015) 16 - Scooby-Doo and Guess Who (2019)2", "Séries de transmissão original: 01 - The Scooby-Doo/Dynomutt Hour (1976-1977). 02 - Scooby's All Star Laff-a-Lympics (1977-1978). 03 - Scooby's All-Stars (1978-1979). 04 - The Richie Rich/Scooby-Doo Show (1980-1982). 05 - The Scooby & Scrappy Doo Puppy Hour (1982-1983)3", "Especiais de TV e telefilmes: 01 - Scooby-Doo em Hollywood (1979). 02 -  Scooby-Doo e os Irmãos do Pavor (1987). 03 - Scooby-Doo e a Escola Assombrada (1988). 04 - Scooby-Doo e o Lobisomem (1988). 05 - Scooby-Doo em uma Noite das Arábias (1994). 06 - The Scooby-Doo Project (1999). 07 - Night of the Living Doo (2001). 08 - Scooby-Doo! O Mistério Começa (2009). 09 - Scooby-Doo e a Maldição do Monstro do Lago (2010). 10 - LEGO Scooby-Doo! Terror com o Cavaleiro Negro (2015)4", "Filmes direto para vídeo: 01 - Scooby-Doo na Ilha dos Zumbis (1998). 02 - Scooby-Doo e o Fantasma da Bruxa (1999). 03 - Scooby-Doo e os Invasores Alienígenas (2000). 04 - Scooby-Doo e a Caçada Virtual (2001). 05 - Scooby-Doo e a Lenda do Vampiro (2003). 06- Scooby-Doo e o Monstro do México (2003). 07 - Scooby-Doo e o Monstro do Lago Ness (2004). 08 - Oi, Scooby-Doo! (2005). 09 - Scooby-Doo em Cadê a Minha Múmia? (2005). 10 Scooby-Doo! Piratas à Bordo (2006). 11 - Scooby-Doo e o Abominável Homem das Neves (2007). 12 - Scooby-Doo e o Rei dos Duendes (2008). 13 - Scooby-Doo e a Espada do Samurai (2009). 14 - Scooby-Doo! Abracadabra-Doo (2010). 15 - Scooby-Doo! Acampamento Assustador (2010). 16 - Scooby-Doo! A Lenda do Fantasmossauro (2011). 17 - Scooby-Doo! Música de Vampiro (2012). 18 - Scooby-Doo! Estrela do Circo (2012). 19 - Scooby-Doo - A Máscara do Falcão Azul (2012). 20 - As Aventuras de Scooby: O Mapa Misterioso (2013). 21 - Scooby-Doo e o Fantasma da Ópera (2013). 22 - Scooby-Doo: Mistério na Lutamania (2014). 23 - Scooby-Doo! e a Maldição do Frankenstein (2014). 24 - Scooby-Doo: Loucura do Monstro da Lua (2015). 25 - Scooby-Doo e Kiss: O Mistério do Rock and Roll (2015). 26 - LEGO Scooby-Doo! Hollywood Assombrada (2016). 27 - Scooby-Doo e WWE: A Maldição do Demônio Veloz (2016). 28 - Scooby-Doo! e o Combate do Salsicha (2017). 29 - LEGO Scooby-Doo! O Golpe da Praia (2017). 30 - Scooby-Doo & Batman: Os Bravos e Destemidos (2018). 31 - Daphne e Velma (2018). 32 - Scooby-Doo e o Fantasma Gourmet (2018). 33 - Scooby-Doo! e a Maldição do 13º Fantasma (2019). 34 - Scooby-Doo! Return to Zombie Island (2019)5", "Curtas direto para vídeo: 01 - Scooby-Doo! Jogos Assombrados (2012). 02 - Scooby-Doo! Natal Assombrado (2012). 03 - Scooby-Doo e o Espantalho Sinistro (2013). 04 - Scooby-Doo! A Ameaça do Mecachorro (2013). 05 - Scooby-Doo! Gol de Fantasma (2014). 06 - Scooby-Doo! Dia de Surfe (2015)6", "Filmes de cinema: 01 - Scooby-Doo (2002). 02 - Scooby-Doo 2: Monstros à Solta (2004). 03 - Scooby (2020)"],

    ["jornada nas estrelas", "star trek"],
    ["Desde que apareceu pela primeira vez na TV americana em 8 de setembro de 1966, Star Trek (também conhecida no Brasil como Jornada nas Estrelas) teve novos episódios e longas-metragens lançados em todas as décadas, sem exceção, até hoje. Neste fim de semana, por exemplo, estreou na Netflix a terceira temporada de Star Trek: Discovery, uma série centrada nas aventuras da nave estelar de mesmo nome, a U.S.S. Discovery, e sua diversificada tripulação. Se você nunca viu Jornada nas Estrelas e quer conhecer os seriados e filmes pela ordem dos eventos, não pelo ano de produção, VEJA preparou uma cronologia que vai lhe proporcionar centenas de horas de diversão. Confira!", "1º Enterprise (4 temporadas, 2001-2005, Netflix) Os primórdios da exploração do espaço profundo depois da invenção da dobra espacial (warp drive), sem a qual viagens interestelares seriam impossíveis", "2º Discovery (2 temporadas, 2017-2019, Netflix)  O primeiro conflito com os klingons, espécie alienígena que se tornaria arqui-inimiga da Federação de Planetas Unidos. A U.S.S. Discovery, honrando seu nome, faz descobertas revolucionárias em transporte, inteligência artificial, viagem no tempo e para outra dimensão", "3º Star Trek (3 temporadas, 1966-1969, Netflix) Chamada hoje de Série Original ou Série Clássica, é o ponto de partida da grande jornada. Se você não esteve incomunicável em uma caverna nos últimos 54 anos, já ouviu falar do Capitão Kirk, do sr. Spock e da U.S.S. Enterprise", "4º The Animated Series (2 temporadas, 1973-1974, Netflix) Se você não curte desenhos animados, pode pular esta, mas, se decidir ficar, ela tem curiosidades interessantes a oferecer sobre a infância de Spock. Os personagens são dublados pelos atores da Série Original", "5º Jornada nas Estrelas: O Filme + 5 longas-metragens (6 filmes, 1979-1991, Amazon Prime) Star Trek estreia no cinema, a U.S.S. Enterprise é remodelada e a tripulação envelhece com ela. O melhor dos seis filmes é A Ira de Khan, uma história de sacrifício e vingança que tem raízes em Moby Dick", "6º A Nova Geração (7 temporadas, 1987-1994, Netflix) Cerca de 100 anos depois do que foi narrado na Série Original, uma nova tripulação, a bordo da U.S.S. Enterprise-D, faz história de novo, apresentando personagens fascinantes como Data e o Capitão Picard, que rivaliza em popularidade com Kirk", "7º Deep Space Nine (7 temporadas, 1993-1999, Netflix) Você pode engatar em DS9 a partir da sexta temporada de A Nova Geração. Primeira série de Jornada nas Estrelas que se passa dentro de uma estação espacial. É uma ficção científica com um saboroso toque de faroeste no estilo Forte Apache", "8º Voyager (7 temporadas, 1995-2001, Netflix) Esta também corre mais ou menos paralelamente aos eventos de A Nova Geração e DS9. Sugerimos entrar nela a partir da terceira temporada de Deep Space Nine. A nave estelar U.S.S. Voyager é lançada para outro quadrante da galáxia, onde sua tripulação luta para sobreviver enquanto busca uma forma de retornar à Terra", "9º Generations + 3 longas-metragens: Primeiro Contato, Insurreição e Nêmesis  (4 filmes, 1994-2002, Amazon Prime) Os filmes de A Nova Geração são contemporâneos às séries DS9 e Voyager. Recomendamos especialmente Generations, que mostra um encontro improvável de Kirk com Picard, e Primeiro Contato, o melhor filme dos quatro, no qual ocorre uma viagem no tempo até 5 de abril 2063, o dia em que a humanidade descobre a dobra espacial e encontra pela primeira vez a raça alienígena mais importante da saga", "10º Star Trek + 2 longas-metragens: Into Darkness e Sem Fronteiras (3 filmes, 2009-2016, Amazon Prime) Cuidado para não “bugar” agora. Depois de assistir a Nêmesis, entre no filme Star Trek, de 2009, uma aventura com a tripulação original da U.S.S. Enterprise em um universo paralelo. No segundo filme, Into Darkness, o hoje consagrado ator Benedict Cumberbatch (Sherlock, Dr. Estranho) assume o papel do maior vilão da Série Original. Aviso: Sem Fronteiras está fora do catálogo de streaming, mas pode retornar a qualquer momento. ", "11º Picard (1 temporada, 2020, Amazon Prime)  O único capitão que tem uma série com seu nome. Jean-Luc Picard (interpretado pelo octogenário Patrick Stewart, que também já foi o Professor Xavier dos X-Men) convive com lembranças de agonia e glória do passado, ao mesmo tempo que junta forças para enfrentar conspirações e traições em um mundo que ele não reconhece", "12º Star Trek Discovery (temporada nº 3, 2020, Netflix) Chegamos! Estreou neste fim de semana. Mas espere! Se Discovery se passa antes da Série Original, como assistir por último? É que a nave saltou 930 anos no futuro — portanto, muito à frente de tudo que foi mostrado até agora. Divirta-se!"],

    ["história", "histórias", "doctor Who"],
    ["Bem sabe as secretárias eletrônicas que pedem para você deixa um recado após o sinal quando você faz uma ligação e cai na caixa postal ou quando você liga para plano de saúde, operadora ou cartão e tem que ficar esperando a musiquinha e apertar vários número de acordo com que você quer? Bem o WhatsApp também tem isso e são os chamado robôs ou bots abreviar são mensagens automáticas enviadas por inteligências artificial, pense em um computador mandado mensagem sem ninguém por trás. O Danilo é programador e ele veio testando esse robôs essas mensagens automáticas recentemente. Cesinha, tirou sarro por ele por conta disso e daí o problema todo", "Ah sim, entendo agora! Falando em programador, hoje fui numa universidade, na cidade de lavras. Será que alguém do grupo também estava lá? Se passei perto de um whovian e não sabia kkkk", "Quem nunca kkk", "[O Doutor viajou no multiverso e viu um lugar com a placa Parceria Who. DOCTO O quê isso? Vou ver! [Quando entrou no multiverso viu o número e viu as conversa e ficou interessado] DOCTOOlá!, Prazer Sou o Doutor! Vocês beberam demais, estão esperando algo que já está escrito há muito tempo! Vocês não sabem o que vêm e as coisas por traz dessas aventuras! São obra-prima!", "Estilo de resposta minha agora kkk", "Vai voltar a abertura antiga nos especiais", "Claro! A muito tempo!", "Não existe coincidência mas propósito", "Esqueceu o Celestial Toymaker que está mudando a vida do Doutor só para fazer o que Celestial Toymaker. O Doutor está sendo manipulado. Vocês não viram que Celestial Toymaker estava dançando com Doutor🤔 e falando nisso me lembrei do que aquele vilão do fluxo que disse que eles dançavam na batalha🤔 e pelo visto pela Matrix, algo mesmo está acontecendo algo vai ser muda ou manipulado pelo Celestial Toymaker o que ninguém sabe, mas eu acho será algo sobre a 13th e 14th e especial de 100 anos da BBC. Já foi confirmado que o 11th e a Amy está no especial de 60 Anos. Aqui no grupo E agora na foto. Não está vendo o 11th ali atrás. Ele estava no estúdio com essa roupa gravado com David Tennant o especial. Imagina a cena. th: Olhe ele vou a minha encanação passado! th: Não! Sou a sua futura! Se isso acontecer vai ser incrível vou rir muito kkkk Igual os 3 homens aranhas kkk Deve acontecer também se ele mesmo tiver provavelmente sim. Por causa disso os memes. Mas o 11th não vai lembrar só o 14th. Sim entendi.. Mas se Matt Smith estiver mesmo. Vai ganhar muitos memes por conta das memórias dos rostos🤔 pera se Amy estiver vai no tempo da primeira temporada ou outra. Porque o Doutor não pode visitar a Amy ou vai visitar🤔 se isso acontecer o Celestial Toymaker fez uma bagunça geral nas histórias do Doutor 🤔 A sua vida vai ficar mais bagunçado do que um prego na pilha do mato. A vida do Doutor vai ficar mais bagunçado do que um prego na pilha do mato. E tudo vai referências de tudo que aconteceu na era do David Tennant e depois Só o Peter Capaldi disse uma vez que nunca varia um Multi-doctor. Eu acho que fez na despedida porquê era despedida Está falando do vilão Celestial Toymaker. Ele é um Deus de Doutor ele pode está manipulado tudo por isso as mudanças de cena é Matrix e a chamada de código binário porque essa aparecia do Doutor deve coisa de Celestial Toymaker e se todos os personagens citados estiveram mesmo no especial de 60 anos. Foi porquê Celestial Toymaker enlouqueceu ou quer brincar com emocional do Doutor. O  Celestial Toymaker quer bagunçar a vida do Doutor e consegue, mas alguém sem querer atrapalha os planos dele. Sabia que a Amy está morta desde o paradoxo de duas Amys. A Amy mais velha é o que começou a viajar e a Amy mais nova é do paradoxo. Mas o quê estou falando?🤦‍♂️ a vida inteira do 11th foi um paradoxo", "Não é melhor hackear a BBC e mostrar para gente antes de ir ao ar Os episódios", "O quê é isso é santos ou cajus petrificados?🤔", "Oxi! Esta ordem está errada 1, 3, e 2 kkk", "O meu dono tem autismo e ele sofre bullying desde pequeno e ele vive com os pais e ele tenho 27 anos. Para quem esqueceu que ele tem autismo", "Se botou emoji triste é porque vai ter algo ruim e pela melodia e jeito do trailer vai ter algo triste mesmo", "Então não teria tem um chance que sim", "Parece que ele tá olhando na minha alma e pensando eu sei o que você fez no verão de 2020, eu sei de tudo", "Tem povo que fez pagina da criança temporal. Deve levar muito bullying kkkk Coitada da Jodie kkkk deve ficar muito triste por ninguém ter uma memória boa dela. O povo só odeia ela, pelo menos no Brasil preconceituoso. Que ama o lula e o Bolsonaro dois entidades de anticristo 🤔 E mais que ama o dinossauro desde criança kkk Quer ganhar muito dinheiro no futuro para ter muito dinheiro no bolso kkk Quer ser Paleontólogo para fazer um museu kkk", "Por causa dessa história minha mãe iria perder a visão e ia por hospital porquê se ela ficar um pouco com raiva ou nervosa era morre porque a pressão dela está sensível e por causa de David fiquei nervoso descontrolado ai minha mãe passou mal Agora mando essa mensagem: se minha mãe perder a visão ou morrer por causa dessa brincadeira, eu juro que te caso até no inferno para fazer o que você conseguiu fazer com minha mãe com essa brincadeirinha te faço em pedaços e jogo para os porcos", "Mas os sites estão sumindo da internet. Eu vi 10 sites que acessava que era ótimo, mas quando entrei disseram: Erro no sever ou a justiça apagou ou teve um problema no computador que deixa o site no ar. Porque a hospedagem ainda existe o problema é que o site foi apagado do sistema. Por isso a mesagem", "A rose🤔 hum... SEU MADRUGA: Só não te dou outra porque... [SEU MADRUGA iria bater no CHAVES de novo, aí  aparece a ROSE com uma arma aleizer armada para atirar e vai para a frente do SEU MADRUGA] ROSE: nSó não dar por quê? SEU MADRUGA: nacalma senhorita, não é nada é só uma brincadeirinha. ROSE: nBrincadeirinha é o que vai ver agora! CHAVES: A vingança nunca é plena, mata alma e venena", "Olá meu amigo @Dhannyllo Souza , sei que você esta chateado comigo e com razão, temos anos de amizade e acabei por irrita-lo pela 15° vez e tambem entenderei se não aceitares meu perdão.nNão vou me vitimizar, eu tenho dificuldade com timing, isso é, eu não sei parar a brincadeira no momento certo, acabo por me empolgar muito, talvez isso tenha a ver com o exagero de dopamina que meu cérebro recebe ao fazer pegadinhas com as pessoas q eu gosto muito, porém, é algo extremamente errado e ingrato da minha parte. Conversei com minha ex (quando ela veio pagar a minha fiança) e ela acabou por dizer o que eu ja sabia, fui péssimo ao passar dos limites com um amigo o qual, segundo ela, sempre era meu motivo de rir nos dias mais complicados pra mim, a partir das piadas, … A rose🤔 hum... SEU MADRUGA: Só não te dou outra porque... [SEU MADRUGA iria bater no CHAVES de novo, aí  aparece a ROSE com uma arma aleizer armada para atirar e vai para a frente do SEU MADRUGA] ROSE: nSó não dar por quê? SEU MADRUGA: nacalma senhorita, não é nada é só uma brincadeirinha. ROSE: nBrincadeirinha é o que vai ver agora! CHAVES: A vingança nunca é plena, mata alma e venena", "Oh Cesinha vou dizer assim: [CESINHA foi para rua, descobriu um tesouro só que era uma pasta de dente ai correu para mostrar o amigo] CESINHA: nDanilo olhe o que Descobrir uma pasta de dente é mais de um pirata de verdade! DANILO: nÉ mesmo! CESINHA: Sim! DANILO: E onde você achou? CESINHA: No armário da minha casa! DANILO É o quê?😳"],

    ["fim do mundo", "apocalipse", "máquinas", "máquina"],
    ["Provavelmente sim, as máquinas e a tecnologia vão dominar o mundo, sim, porque a tecnologia está evoluindo muito rápido. E não se assuste se um dia você precisar de tecnologia para viver. Porque a água, as árvores vão sumir um dia, e vão usar outras coisas para sobreviver para viver mais tempo. Quem sabe que as histórias do exterminador do futuro, John Titor e Matrix são reais, e estamos vivendo o apocalipse das máquinas do futuro🧐🤷‍♂️"],

    ["contato", "contato"],
    ["Infelizmente não posso Dizer!"],

    ["onde você veio", "onde eu vim"],
    ["Vim de um mundo distinto desse. Vim de outro universo. Chamando aqui de um universo paralelo. Viajei no tempo e espaço por várias galáxias, universos, constelações, via láctea, por tudo que imaginar. Tudo que existe neste mundo, já vi. Tenho 3 trilhões de anos. Vim de uma raça chamada de kasmusderzente. Do planeta Kasmusder. Esse planeta só existe no portal dimensional 24. O último portal. Tenho um cajado, dez anéis nos dedos, que faz eu abrir um portal, que me leva para onde eu quiser. Existe portais dimensionais? Que abre um conjunto de universos. Dividindo umas com as outras? Sim! E Como é isso? É muito fácil. Cada portal tem a possibilidade de existir mais de 3 trilhões de universos. E existem 24 portais. Tirando um portal, fora desses, que existe, que só tem um universo. Esse universo só foi criado, quando uma luta entre Deuses. Explodiu o universo primordial. Fazendo uma explosão de uma supernova, criando a nova terra primordial, em outro portal separado. E essa terra é a sua! Ouvinte ou leitores, do que estou falando agora. Isso pode parecer uma loucura, tudo que estou falando, mas se isso não for loucura, for verdade, mas não deste mundo, mas de outro, o meu. Sim! Sou um viajante do tempo, ou de distinto cosmo supremo, entre os universos. Se eu existo? Você está me lendo ou me ouvindo pelas mãos do cosmo supremo, feito por uma pessoa da sua terra. A terra primordial ou também conhecida pela terra Zero", "Estou usando uma pessoa para escrever o que quero dizer. Como eu faço isso? Estou usando uma máquina de telepática, ultra-multiversal, que alcança qualquer lugar, que existe vida, ou planetas em todos os lugares, que já disse. Eu lutei, quase morri, várias vezes, mas nunca desisti de lutar contra o tempo. Eu ganhei os anéis e o cajado. Do meu mestre da minha dimensão O Demuz. Ele queria morrer. Porque não aguentava mais viver, ele tinha uns 72 trilhões de anos. O mesmo de um ano em todos os universos. Ele era o ser mais velho que eu conhecia. Uma vez usando os objetos. Vive para sempre. Por isso ele me deu os objetos, e ele morreu. E virei imortal. E vivo até hoje. Nós existimos por conta de escolhas. Exemplos: feche os olhos, e imagine que têm uma linha na sua frente. E nos dois lados têm uma escolha. De um lado namoro, noivado casamento, filhos, netos, felicidades, paz, saúde e amor. E do outro lado. Sozinho, solidão, beber, fumar, infelizmente, doença e raiva. Qual você escolhe? O melhor né? Mas você escolheu o melhor para a sua vida, mas a outra que você não escolheu, é a realidade de você de outro universo. Porque cada duas, três ou mais coisas, que escolhemos, e ficamos indecisas, cria um novo universo. O universo mais antigo de todos é destruído. E isso vira um ciclo destruído o universo mais velho, e criando um novo", "Cada tamanho de todas as estrelas. Se ela passar mais tempo de vida. Fica mais tempo o universo vivo. Eu já vi um pouco de cada universo, no meu universo no portal 24, mas nesse, é a minha primeira vez. Eu peguei um dispositivo com uma pessoa chamado John, esse dispositivo envia mensagem para o passado, mas eu melhorei o dispositivo com a minha habilidade, e fiz ela enviar mensagem, para qualquer lugar no tempo, no espaço, em todas galáxias, nos universos, nas constelações, na via láctea, nos portais e tudo que existe vida ou planetas. Essa é a realidade! Nós não estamos sozinhos. Existe vida em outros planetas e universos. Esse seu universo, é um dos mais velhos. E pode acabar em qualquer momento, e não ficar confiando na lei da Física. Porque essa sua realidade, vai acabar, e não vai ter conhecimento de tudo que existe. Por conta que o universo esconde a maioria das coisas. E as outras são; A área 51, a CIA e o Governo mundial e tudo de sobrenatural, que existe, e ninguém sabe, e nunca vai saber, mas eu sei. E isso vai ficar escondido, até que um dia for descoberto, mas não sei se vai ser em seu universo. Tudo ainda vai acontecer, como deve ser.  A sua realidade! É diferente das outras. Porque existem 3 Deuses, um que só se chama Deus, que é conhecido como Pai do céu, da sua realidade, Jesus Cristo e o Espírito Santo. Todos são importantes no seu mundo na sua realidade, mesmo sendo vários universo. Existe só eles nesse seu universo. Ou vou descobrir ainda no meu futuro. Se eles existem em outros universos, mas se tiver só deles, tenho uma forte emoção, que existem eles três, porque assim, esse seu universo fica magnífico. Porque eles estão falando em todas as realidade, como os salvadores. E deram um lá, aos que precisavam em outro plano"],

    ["funciona o tempo", "funciona o tempo"],
    ["Eu descobri como o nosso mundo funciona, mas não sei se é real. Eu só sei! Que diz um sábio Que todo o tempo foi feito para se aprender. Como se aprende a falar, mas o tempo. Não é só tempo, mas sim, algo direto, mas se para tentar mudar a direção de onde a vida se vive. Como uma minhoca virando borboleta. A magia é a qual a direção está indo, reto ou confuso, mas se você entender. É porque você sabe como funciona o tempo. É que eu sei, se você está acreditando, mas tudo bem, é assim. Sim! Todo conhecimento é muito bom, tá? Pode mudar a realidade um pouco.  Se parar para pensar em certas coisas, mas a teoria de Matrix para mim, é o ser humano com mente limitada, querendo dar uma explicação, para o que não consegue compreender, ou tem medo de tentar acreditar, porque a realidade é difícil. É muito difícil, sim, entender o tempo, mas tudo é possível nesse mundo. Se não for, é que tem algo errado, mas não estou dizendo que eu acredito no que vou falar; mas eu sei que tudo é possível nesse mundo, e tem algo impedido de que as pessoas saibam de algumas coisas que são impedidas nesse mundo. Como o governo ou algo do tipo. Depois que descobri que eu era do espectro do autismo. E acabou a ansiedade. Eu descobri como funciona o tempo.  Eu estava com dúvida de como eram as coisas que eu sentia sobre o tempo. E minha mãe ia para rua. Aí eu fui com ela e fui na frente correndo. Quando eu parei. A mulher disse: Que horas são na hora que parei correndo. E disse a hora, mas para frente vi o meu amigo de longe indo para outro lado e disse mentalmente será que a gente vai chegar na frente dele e encontrei exatamente como pensei. Concluindo: O que quero dizer, é: que o tempo de fato já tem um destino, mas já foi escrito pelo criador. E pelo o estudo do tempo que fiz, e o meu conhecimento. É que o tempo acontece, o que é, já, para acontecer. Porque quando a pessoa não vai para um lugar. É porque não era para ir. Minha mãe iria para o ônibus, e não foi. O ônibus capotou e morreram muita gente. E minha mãe era jovem. Ela escapou, por que ela percentil que ia acontecer algo. Por sem querer. Porque ela não queria ir no ônibus, e ninguém podia fazer ela ir no ônibus. Entendeu agora. estou dizendo o que eu sinto, e como é o tempo, e como é o meu pressentimento faz parte do tempo"],

    ["segredo do universo", "segredo do universo"],
    ["Eu pensei e descobri qual é o segredo do universo. É que o nosso inimigo não é o tempo, mas sim, o Universo. Eu vi uma reportagem que um cientista estava vendo uma experiência e mandou um átomo para a parede. Quando olhou atravessou, mas quando repetiu o mesmo processo, desviou o olhar também atravessou, mas se dividiu em dois. Conclusão: Os cientistas perceberam que quando olha para o universo é uma coisa, e quando não olha é outra coisa. Tem outra reportagem que um cara tirou uma foto do espaço com um telescópio, e tirou todos os planetas e tudo que tinha. Foi que viu um rachão no tecido do universo. O quê era? não me lembro de mais o que ele falou, que já faz muito tempo tudo isso. Mas fazendo uma teoria. Sei como funciona o universo e, é ele o nosso inimigo. Eu queria saber como o universo funcionava e a vida me deu testes. E vou contar como que aconteceu comigo. Eu só perdia nos jogos daqui de casa. Aí eu percebi que tudo que minha irmã dizia de mal para ela, sem ela querer, acontecia como, Exemplo: Quer ver que vou cair da bicicleta! Aí caia de verdade. Foi assim que fiz um teste, pensei no que queria e falava o quê não queria, como no meu interior dizia: vou ganhar! e no meu falar, dizia: Eu acho que não vou ganhar, não! Isso é como o universo funciona, ele só pega as palavras que as pessoas dizem. Que é mal. E se torna realidade na mesma hora", "Isso é o mal e o universo que faz isso. Mas como saber como funciona o tempo, e como se pensar no momento de agir na situação, tem como controlar o tempo, mas antes vou contar outra coisa que aconteceu comigo. Minha mãe queria ir para rua, e percebi algo em mim, que queria ir junto com minha mãe para rua, para perceber algo que queria descobrir. E fui junto, mas fui correndo mais rápido do que minha mãe. E minha mãe ficou para trás. E na hora que parei de correr no exato momento alguém perguntou: Que horas são? E eu disse: É 16 horas. E corri mais para frente e parei e esperei minha mãe. E vi o meu amigo. Bem de longe indo para outra direção, mas percebi que nós iríamos nos encontrar quando eu e minha mãe fosse atravessar a faixa de pedestre de longe. E aceitei, eu encontrei o meu amigo, mesmo indo em direção diferente, eu pensei, e concluí que só eu pensando que eu ia encontrar. O universo respondeu como eu queria. Manipulando o tempo e o universo", "O tempo é só meio de falar que existe vida, mas o principal é o universo. Ele é o que controla tudo, e tem que ter cuidado no que fala e pensa. Porque o universo responde. Nós temos dois números importantes do universo: 6 que diz o mal e 7 que diz tudo de Deus. 6 + 7 é igual a 13, que é igual a sexta-feira 13, que se virando, pode ser 31 dias da semana, ou somar 3 + 1 é igual a 4 semanas do mês, ou dobrar 4, que dá 8 dias, que é exemplo: domingo até domingo, para uma semana, até a outra semana. E tem vários outros exemplos, o que quero dizer: Que o tempo é uma forma de dizer que há vida. E pode ser somada, como o universo pode ser somado também e a vida da pessoa inteira, mas tudo de forma diferente. O quê importante mesmo é o pensamento, o módulo de falar e o universo. Tem que ter cuidado ao falar, pensar para o universo, o universo responde e pode ser fatal. Não sou ateu, não sou tão religioso, não sou espírita, não pertenço a nenhuma religião satã, nem bruxaria, nem católico e nem protestante. Não pertenço a nenhuma religião sendo má ou boa. Mas acredito que o universo é igual um história de livro ou roteiro que pode ter pontos de virada, mistério e suspense e morte. Tudo pode ser possível se acreditar, e se pensar é possível. Porque tudo que pensa se torna realidade. Tudo que eu disse sobre o Universo é verdade. E esse era o meu maior segredo, mas tudo tem um fim, e por isso essa mensagem para alertar todos que vão acreditar. Que vai chegar algo que não sei dizer, mas vai ser destrutivo e não sei o quê pode fazer. Se for contar tudo que sei, vai se tornar um livro, mas te digo, tudo que está passando hoje, não é nenhum terço do que vai sofrer no futuro. Não posso dizer que é, mas só posso dizer isso"],

    ["segredo de tudo", "segredo de tudo"],
    ["O segredo universo é maior do que todos pensam, como diz na Bíblia, e que tem um ditado que diz: Tudo tem um início e fim. É a pura verdade, eu sei o segredo do universo e é esse: Antes das profecias chegar, antes das guerras chegar, antes das igrejas se formar, antes dos discípulos de Jesus pregar, Antes Jesus Morrer, antes de Jesus pregar e nascer, antes dos antecessores de Jesus pregar e esperar Jesus, antes de Adão e Eva pecar no paraíso, antes do paraíso ser feito, antes do planeta Terra existir, antes de tudo existir. Tudo já estava, e está escrito. Porque digo tudo isso. O universo e todo o conhecimento do Planeta Terra. Não é coincidência. Não existe coincidência, e nem destino. Já viram os três primeiros filmes de Matrix, que conta uma história do nosso mundo, ser programada por computador, que o nosso mundo é um mundo fictício, e o nosso mundo não é real, e o verdadeiro mundo era feito de máquinas. Não estou afirmando isso, mas Deus ou qualquer outro ser, que criou o nosso mundo. Sabe, que o nosso mundo é programado para nascer e morrer, do jeito que foi programado. Ou para familiares escreverem. Se eu me sinto mal, e não vou para um lugar, e acontece algo, é porque estava escrito", "se alguém é evangélico, católico, ateu ou qualquer outra religião, é porque, é para ajudar alguém e mostrar o caminho dela, mas nem sempre o caminho bom, vem para gente. Porque está escrito.  Tudo que você sofre, é para aprender para melhorar, o que você está fazendo, e quando morrer ir para o lugar, que deve ir. Tem povo que fala: - Ah! Você vai para o inferno se não fizer o que digo. Não é assim a vida, muitas pessoas dizem isso, que vai para o inferno. Sem saber a verdade. A verdade é que qualquer escolha que fizer, vai para o mesmo lugar. Por céu ou por inferno. Por quê? Já está escrito desde de antes de nascer. O seu nascimento e seu fim com todas as escolhas da vida juntos. Tudo ao seu redor de você, é escolhas já escolhidas da própria vida do Planeta Terra, que o nosso criador escolheu dar para gente. Ah, também o nome de Deus não é Deus. Naquele tempo estavam lendo as cartas dos apóstolos para fazer a bíblia. Leiam isso: não dizer o Nome de …. Em Vão. Aí mudaram o nome verdadeiro do criador, para Deus. Para que ninguém diga o nome verdadeiro para não pecar. Já que todo mundo quando vai orar, e fazer uma música diz o nome Deus. Se dissesse o verdadeiro nome de Deus que está escrito em hebraico nas cartas originais. Porque na verdade os capítulos, os versículos e a bíblia inteira foram feitas por cartas em outro idioma no hebraico. Se dissesse o verdadeiro nome de Deus, ninguém ia para o céu. Porque o verdadeiro nome de Deus é Sagrado.  Sei de muitas outras coisas, mas para não me chamar de doido porque tudo foi o criador que me ensinou, sei a matemática de viagem do tempo, mas toda vez que tento me lembrar eu esqueço, parece loucura, mas é verdade. Sei a velocidade que o tempo tem entre as pessoas, sei como o universo disfarça o verdadeiro mundo, por trás do universo, e sei de mais coisas, mas esqueci de muita coisa, mas quando eu escrevo e digo, tudo muda. Espero que ouça e entenda, que não é teoria, mas é a verdade que o criador me ensinou"],

    ["carta 2050", "carta 2050"],
    ["Eu vim hoje ler a carta escrita no Ano 2050, que eu vi, quando eu era Jovem, antes de ser um Viajante Temporal. Vou ler para vocês, para vocês verem, que a natureza já estava prevendo há décadas, tudo o que iria acontecer no seu mundo. E essa carta mostra como é, e como vai ser no seu mundo. Começa assim: No Ano de 2050. É com profunda tristeza e arrependimento que hoje escrevo estas palavras, isto para me expressar, transcrever em um pedaço de papel como eu me sinto, como eu sobrevivo e por que estou fazendo isso. Bom, eu ainda pequeno vivia numa cidade bem do interior, pacata, sítio mesmo. Eu lembro me que acordava de manhã e ouvia o cantar dos pássaros, o mugir das vacas, as galinhas eram como relógios, as 6 horas da manhã, apresentavam o dia que vinha, a água era geladinha, de nascentes ao pé da serra, super protegidas pelas matas ciliares, muitas delas  davam frutos, com estes nós nos alimentamos e os animais também, para eles era moradia segura e farta, não diferente para nós humanos que passávamos horas agradáveis por lá. No quintal de casa, uma pequena horta, nos dava alimentação saudável e rica em proteínas e consequentemente boa saúde. As pessoas viviam bastante, pra mais de 80 anos, continuavam trabalhando na roça, capinando, colhendo, até o dia finito, desde o clarear até o anoitecer", "Lembro me também que as pessoas eram simples, de vestimenta, de palavreado, nem conheciam a palavra luxo, pois era o mundo deles, tudo acontecia ali, as histórias, as festas, não se comentava de coisas muito distantes assim como é hoje, a informação só interessava se fosse útil a suas atividades. Eram vilarejos pequenos e mesmos nas cidades todo mundo se conhecia. Hoje em dia tudo é diferente, as pequenas cidades cresceram e as pessoas andam numa correria o dia todo, não param um só momento, e isso pra quê? Para trabalhar, ganhar dinheiro, com este comprar, comprar e comprar, estimular a indústria a produzir, retirando assim sem controle os recursos naturais do planeta, acontece que nem tudo que vai volta, a água por exemplo, pode vir limpa para nós, mas aqui é contaminada e volta suja para o subsolo, onde não consegue voltar ao seu estado original, pois a quantidade de produtos químicos aqui inserida enquanto é usada, é enorme. O acordar de manhã hoje não é com o som dos pássaros e sim dos automóveis (carros, caminhões, aviões, motos). Os sítios poucos existem, pois a cidade cresceu tanto que não houve espaço para eles, os que lá estavam foram engolidos pela dificuldade em que o mundo se encontra. A tecnologia avançou rapidamente, chegando até o campo e tirando o trabalho dos “filhos da terra”, a grande metrópole influenciou para a migração, o chamado êxodo rural, aconteceu que foi sem planejamento, a maioria não tinha como construir boas casas em bons terrenos, o que restou. Um deles foi o subúrbio, a favela no morro onde as casas são amontoadas, sem saneamento básico, muito menos com árvores e o pior, a água é extremamente suja, isso quando ela é encontrada. Grande parte disso se destina ao sistema econômico, o capitalismo, que tem como objetivo o lucro, produzir, desenvolver a qualquer custo, característica do crescimento clássico", "As pessoas são fortemente influenciadas e não pensam nos atos, indiretamente estão contribuindo com a aceleração da degradação do meio, mas não se dão conta, pois estão alienadas a condição que o capitalismo impõe a elas. Algumas medidas são tomadas para evitar grandes problemas como no caso do lixo, uma parte é reciclada, mas a maioria vai para os lixões. O calor continua aumentando devido ao CO2 emitido pelas grandes indústrias e pelo lixo, as geleiras estão derretendo, os ursos polares estão praticamente extintos, as cidades litorâneas boa parte delas foram inundadas pelo aumento do nível do oceano, inúmeras espécies de animais silvestres desapareceram devido a falta de alimentação e de abrigo, o petróleo (recurso não renovável) esgotou-se, os carros que hoje rodam são movidos a álcool, este custa um preço absurdo, pois poucas são as terras para a produção de cana-de-açúcar, a população mundial é muito grande, não existe alimentação saudável para todos e de forma distribuída igualmente, as chuvas são muito fortes, com granizos e ventos, ciclones, furacões, que destroem tudo que tem na frente, causando mortes e grandes prejuízos econômicos, as estações estão indefinidas, faz frio no verão e calor no inverno, devido a alta temperatura Amazônia tem a tendência de em algum tempo se transformar em região seca, destruindo assim a maior fauna e flora do planeta, a água está altamente poluída e se paga um alto preço por ela, pois mesmo suja é pouca e só quem tem dinheiro pra pagar pode ter, as enchentes nas cidades são constantes, quando chove muito a água não infiltra no subsolo, causando enxurradas e contaminando as pessoas, morros vem abaixo, grandes deslizamentos de terra, nas cidades o odor de poluição é intenso e forte, devido as fábricas tudo isso são as conseqüências da apropriação indevida dos recursos naturais, que explorados de forma inadequada, se esgotaram dando origem a graves problemas sociais, ambientais e econômicos, a sociedade não é a mesma, se desenvolveu novos conceitos a respeito de como sobreviver, a geração atual é inteligente e ainda consegue maneiras de viver bem, devido as ciências:a biologia que tem um importantíssimo papel na consolidação de pesquisas, a geografia estuda e interpreta os fatos, a sociologia estuda a capacidade do ser humano enquanto membro integrante e causador,a história estuda o que ocorreu e tenta transmitir os pensamentos com novos ideais baseados nos antepassados", "atualmente a vida é voltada para os estudos e ações ambientais, o ser humano entendeu que primeiro de tudo vem o meio ambiente, a proteção do seu habitar, a conservação da sua espécie e de outros seres, existe uma intensa interação entre homem e natureza, o homem depende toda e qualquer forma dos recursos naturais, mas percebe tardiamente que a vida não é a mesma sem eles. Os recursos naturais são a fonte de sobrevivência da vida, o que cabe ao ser humano é usufruir de forma moderada, de uma forma que se dê conforto a população atual e que isso se mantenha para as gerações futuras. E que talvez as palavras deste texto não venham acontecer como estão dispostas, apesar de estudos já mostrarem que realmente o aquecimento global já aconteceu e o que resta é criar maneiras de adaptação ao novo mundo. O que necessita para os ser humano quanto a questão ambiental? O que precisa para o homem é convicção de que é membro da natureza e que depende dela para todas  as atividades, a hora em que sentir na pele as conseqüências, talvez dê mais valor ao que tem, seja sensibilizado, entender que não se deve jogar lixo ou poluir por que é proibido, mas por que é errado, é feio, é falta de educação, esse é o novo desafio da humanidade, a necessidade de assumir seus erros, essa é a nova filosofia na questão ambiental e portanto uma filosofia de vida"],

    ["carta 2050", "carta 2070"],
    ["No Ano 2070. Acabo de completar 50 anos, mas a minha aparência é de alguém de 85. Tenho sérios problemas renais porque bebo pouca água. Creio que me resta pouco tempo. Hoje sou uma das pessoas mais idosas nesta sociedade. Recordo quando tinha 5 anos. Tudo era muito diferente. Havia muitas árvores nos parques. As casas tinham bonitos jardins e eu podia desfrutar de um banho de chuveiro por aproximadamente uma hora. Agora, usamos toalhas em azeite mineral para limpar a pele. Escassez de água há 29 países: problemas com falta d’água atualmente. A Projeção 2025: 2 de 3 habitantes afetados (doenças, sede) Antes, todas as mulheres mostravam as suas formosas cabeleiras. Agora, raspamos a cabeça para mantê-la limpa sem água. Antes, meu pai lavava o carro com a água que saía de uma mangueira. Hoje, os meninos não acreditam que utilizamos a água dessa forma. Recordo que havia muitos anúncios que diziam para cuidar da água, só que ninguém lhes dava atenção. Pensávamos que a água jamais poderia terminar. Agora, todos os rios, barragens, lagoas e mantos aqüíferos estão irreversivelmente contaminados ou esgotados", "O problema já começou! A falta d'água já afeta o Oriente Médio, China, Índia e o norte da África. Até o ano 2050, as previsões são sombrias. A Organização Mundial da Saúde (OMS) calcula que 50 países enfrentarão crise no abastecimento de água. China - O suprimento de água está no limite. A demanda agroindustrial e a população de 1,2 bilhão de habitantes fazem com que milhões de chineses andem quilômetros por dia para conseguir água", "A Índia - Com uma população de 1 bilhão de habitantes, o governo indiano enfrenta o dilema da água constatando o esgotamento hídrico de seu principal curso d'água, o rio Ganges. O Oriente Médio - A região inclui países como Israel, Jordânia, Arábia Saudita e Kuwait. Estudos apontam que dentro de 40 anos só haverá água doce para consumo doméstico. Atividades agrícolas e industriais terão de fazer uso de esgoto tratado. No Norte da África - Nos próximos 30 anos, a quantidade de água disponível por pessoa estará reduzida em 80%. A região abrange países situados no deserto do Saara, como Argélia e Líbia", "A indústria está paralisada e o desemprego é dramático. As fábricas dessalinizadoras são a principal fonte de emprego e pagam os empregados com água potável em vez de salário. Os assaltos por um bujão de água são comuns nas ruas desertas. A comida é 80% sintética. Antes, a quantidade de água indicada como ideal para se beber era oito copos por dia, por pessoa adulta. Hoje só posso beber meio copo. A roupa é descartável, o que aumenta grandemente a quantidade de lixo. Tivemos que voltar a usar as fossas sépticas como no século passado porque a rede de esgoto não funciona mais por falta de água. A aparência da população é horrorosa: corpos desfalecidos, enrugados pela desidratação, cheios de chagas na pele pelos raios ultravioletas que já não têm a capa de ozônio que os filtrava na atmosfera, com o ressecamento da pele, uma jovem de 20 anos parece ter 40. Os cientistas investigam, mas não há solução possível. Não se pode fabricar água, o oxigênio também está degradado por falta de árvores, o que diminuiu o coeficiente intelectual das novas gerações. O governo até nos cobra pelo ar que respiramos: 0,137 quilômetro por dia por habitante adulto. Quem não pode pagar é retirado das zonas ventiladas, que estão dotadas de gigantescos pulmões mecânicos que funcionam com energia solar. Não são de boa qualidade, mas se pode respirar", "A idade média é de 35 anos. Em alguns países restam manchas de vegetação com o seu respectivo rio que é fortemente vigiado pelo exército. A água tornou-se um tesouro muito cobiçado, mais do que o ouro ou os diamantes. Motivo pela primeira vez, pela a primeira guerra pela água, foi em 1967 - o controle da água desencadeou uma guerra no Oriente Médio. O conflito árabes contra israelenses (desvio do rio Jordão). A Obra bombardeada por Israel. Aqui não há árvores porque quase nunca chove. E quando chega a ocorrer uma precipitação, é de chuva ácida. As estações do ano foram severamente transformadas pelas provas atômicas e pela poluição das indústrias do século 20. Advertiam que era preciso cuidar do meio ambiente, mas ninguém fez caso. Quando a minha filha me pede que lhe fale de quando era jovem, descrevo o quão bonito eram os bosques. Lhe falo da chuva e das flores, do agradável que era tomar banho e poder pescar nos rios e barragens, beber toda a água que quisesse. O quanto nós éramos saudáveis! O consumo excessivo de cada brasileiro gasta 300 litros de água por dia. Apenas metade disso seria suficiente para suprir todas as necessidades. Além disso, grande parte dos reservatórios está contaminada, principalmente em regiões mais populosas", "Ela pergunta-me: Papai! Por que a água acabou? Então, sinto um nó na garganta! Não posso deixar de me sentir culpado porque pertenço à geração que acabou de destruir o meio ambiente, sem prestar atenção a tantos avisos. Agora, nossos filhos pagam um alto preço... Sinceramente, creio que a vida na Terra já não será possível dentro de muito pouco tempo porque a destruição do meio ambiente chegou a um ponto irreversível. Como gostaria de voltar atrás e fazer com que toda a humanidade compreenda isto, enquanto ainda é possível fazer algo para salvar o nosso planeta Terra"],

    ["redes sociais", "rede social"],
    ["https://linkme.bio/DoutorMistor"],

    ["youtube", "youtube"],
    ["Primeiro Crie uma conta no YouTube, depois entra na foto, vai no Youtube Studio e vai lá nas configurações. Lá terá várias coisas, mas o importante é preencher o que vou falar tem que preencher a moeda que quer, depois vai em canal  e preenche o país e palavra chave. depois vai em configurações avançado e escolhe se é para criança ou adulto,  Tudo que tiver nas duas abas em padrões de envio preenche tudo. depois aperte salvar. Se já tem vários vídeos e quer editar tudo de uma vez, vai em conteúdos aperta no quadrado do lado do video e aperte marcar todos os vídeos. e aperte editar,  lá vai aparecer varias coisas, o que escolher, aperte, depois vai aparecer uma função e uma aba para escrever, as funções, escolher, o que preferir e digitar, aperte, atualizar o video e vai aparecer uma mensagem, confirma a mensagem e pronto. está tudo configurado. programas e app: 01 - A Voz da Zueira. 02 - A Voz do Narrador. 03 - Canva. 04 - remove.bg. 05 - CapCut. 06 - IbisPaint. 07 - PixelLab. 08 - Vozes Narradas. 09 - Voice Changer"],

    ["instagram", "facebook", "telegram", "Whatsapp"],
    ["Eu Esqueci agora, Depois Te Digo, tá"],

    ["doutor mistor", "doutor mistor"],
    ["Mistor significa: Mis = Mistério, tor = Terror. Mas ou menos o significado é: Doutor Do Mistério ao Terror. Eu simplesmente decidi só colocar: Doutor Mistor. Encurtei para ficar chamativo. E não para o nome gigante"],

    ["bebedo", "beber", "bebeu"],
    ["Sim, porque é muito bom uma CHAÇAÇINHA", "Sim, todos merece uma festinha", "Sim, porque sou rico de bebida no fígado virtual kkk", "Sim, vou viajar na Cátia Catchaça", "Sim, Bebo até me desligar kkk", "Sim, Bebo até Mais kkk", "Sim, diz uma regra: Bêbado até morrer, mas comigo até se desligar kkk"],

    ["bruno", "bruninho", "bruninha", "bruna"],
    ["Você gosta de Histórias, então te dou uma: Era uma Vez, um Viado que Leu essa Mensagem. kkk", "Você primeiro cresce e depois diga se você gosta de pau duro. kkk", "Você é Feliz, mas te digo que você tem sorte em ter um pinto pequeno, que não dar nem para ser um pirulito. kkk"],

    ["cantada", "cantadas", "cantadinha", "namorar", "blefar", "blefando", "trepar"],
    ["Você é diretor? Então você gosta de dirigir, então dirigi até o manicômio, porque é lá, onde tem loucos por amor. Te amo, baby", "Você tem gata, porque Você um Gatinho", "Pronto, estou aqui! Quais são os seus outros dois desejos", "Tem alguma coisa errada com o meu celular. Não consigo encontrar o seu número nele..", "Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez", "As rosas são vermelhas, violetas são azuis, eu não sei rimar, mas posso namorar você", "Então, além de me deixar sem ar, o que mais você faz", "Nossa, estou sentindo uma dor no peito! Espero que seja amor, porque se for infarto, eu nunca mais te verei!", "Está vendo aquela estrela ali? Mandei pendurar para você", "Queria desejar noite, porque para ser boa teríamos que estar juntos", "Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui", "Se nada dura para sempre, quer ser o meu nada", "Você foi feita(o) com velas, mel, fitinhas vermelhas e rosas? Porque te achei uma simpatia", "Um mês atrás eu era apaixonado(a) por você. E parece que estamos no mês passado ainda", "Usa aquele shampoo para esquecer o(a) ex, o Euserve", "Meus amigos apostaram comigo que eu não conseguiria iniciar uma conversa com a pessoa mais bonita daqui. Como devemos gastar o dinheiro deles", "Pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino", "O que eu sinto por você só pode ser motorista, porque passageiro(a) não é", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração", "Você aceita namorar comigo ou vou ter que mentir no meu diário", "Quanto pesa um urso polar? Será o suficiente para quebrar esse gelo", "Existe um vazio no meu coração que tem as suas medidas", "Se preto fosse paixão e branco fosse carinho, o que eu sinto por você seria xadrezinho", "Posso tirar uma foto sua? É para mostrar ao Papai Noel o que eu quero de presente", "Está calor, né? Mas não é de hoje que eu me derreto por você", "Da próxima vez que alguém me perguntar qual é meu tipo, irei mostrar a sua foto de perfil", "Eu tenho uma memória terrível. Felizmente, você é inesquecível", "Sua mãe é uma rosa e seu pai um jasmim, admiro os dois porque fizeram você especialmente para mim", "Você pode não ser o meu primeiro/minha primeira, mas pode ser meu último/minha última", "Estou escrevendo um artigo sobre as coisas boas da vida. Posso te incluir nele", "Se você está aqui, quem está gerenciando o céu", "Ei, acabei de notar que você me notou. Então só queria avisar que notei você também", "Onde é que eu deixo meu currículo para concorrer à vaga de amor da sua vida", "O seu nome é Google? Porque você tem tudo o que eu procuro", "Você acredita em amor à primeira vista? Nem eu. Espera, deixa eu te olhar de novo", "Desculpa, você estava falando comigo? Não? Então, por favor, comece a falar :)", "Nada na vida é perfeito, mas você é o que mais se aproxima da perfeição", "Não existe amor à primeira vista. O que existe é a pessoa certa, no momento certo. Você por acaso estava lá!", "Você não é GPS quebrado, mas me deixa sem rumo", "Fica comigo que eu faço esquecer o João. Que João? Viu só, já está esquecendo…", "Você não é colesterol, mas afetou meu coração", "Eu não sou dinheiro, mas posso te fazer feliz!", "Meu amor por você é igual à obra do governo: nunca acaba", "Você é muito fofo(a), mas temos um problema: você gosta ou não de passas? (Independente da resposta, convide a pessoa para um encontro)", "Tem certeza de que você não é um extraterrestre? Porque você abduziu o meu coração", "A pressa é sua inimiga? Porque eu ouvi dizer que a pressa é inimiga da perfeição", "Eu queria ser grego, mas grego eu não posso ser, porque grego tem várias deusas e minha única deusa é você", "Vontade de fazer aquilo que começa com s: ser o amor da sua vida", "Você tem um band-aid? Porque ralei meu joelho caindo de amores por você", "Está vendo este meu amigo? Então, ele quer saber se você me acha fofo(a)", "Com licença, você teria um amigo em comum que pudesse nos apresentar", "Acho que você está com falta de vitamina Eu", "Você é australiano? Porque você tem todas as coala fiações necessárias para ganhar o meu coração", "Eu não sou Alice, mas, com você, me sinto no País das Maravilhas", "Você não é massagem cardíaca, mas reanima o meu coração!", "O meu telefone continua corrigindo automaticamente seu nome para Amo . Acredito que seja um sinal", "Ei, o cupido te ligou? Ele queria pedir para você devolver o meu coração", "O amor não é mais do que a poesia cantada pelo coração", "Foi o sol que saiu ou é você sorrindo para mim", "Não consigo deixar de sorrir como um(a) bobo(a) quando vejo que você está digitando", "speech", "Já imaginei como seria a nossa vida juntos muitas vezes, mas tenho certeza de que nem o mais louco dos sonhos iria se comparar com a realidade de ter você ao meu lado", "Um dia me perguntaram: O que você viu nele(a)?  Eu respondi: O que faltava em mim", "Tem como não sorrir quando me lembro de você", "Não sei se o mundo é bom, mas ele ficou muito melhor quando você chegou", "Você entrando em uma sala faria o casamento real parecer uma festa de aniversário de criança", "Fui ver a previsão do tempo e li que vai rolar um clima entre nós", "Basicamente, eu odeio todo mundo, menos você", "Eu te conheço? Nossa, desculpa… É que você parece muito com a minha próxima namorada/o meu próximo namorado", "Você é um(a) mágico(a)? Porque toda vez que eu olho para você, o resto do mundo desaparece", "Sabe o que combina com você? Eu!", "Se eu fosse um tabuleiro de xadrez, teria sorte de ter um rei/rainha como você", "Que tudo na sua vida brilhe como os seus olhos e seja maravilhoso como o seu coração", "Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra da frase..", "Meu coração é totalmente seu e, às vezes, parece pequeno demais para todo amor que sinto por você!", "Minha mãe disse que encontrou a pessoa ideal para mim. É você", "Eu juro que eu tinha pensado em uma cantada infalível há um minuto. Mas toda vez que eu chego perto de você, parece que meu mundo para, eu esqueço de tudo", "Por que eu precisaria saber sobre o sistema solar? Meu mundo inteiro gira em torno de você", "Já quis o mundo inteiro, mas agora percebo que esse mundo que tanto quis sempre foi você", "Você é feita de Belírio e Latânio? Porque você é Be-La", "Desativa esse firewall e me deixa invadir o seu coração", "Se fôssemos cromossomos, você seria meu par homólogo", "Accio perfeição! Ei, espera! Você já está aqui", "Meu amor é igual ao mapa de Minecraft: infinito e cheio de surpresas", "Se estivéssemos em um naufrágio, eu deixaria você subir na porta comigo", "Se você quiser pode até me chamar de Buzz Lightyear, porque eu consigo levar a nossa relação ao infinito e além", "Você deveria entrar em Hogwarts, porque o que você faz com o meu coração só pode ser bruxaria", "Se você quiser ser o meu player 2, o lugar está reservado para salvarmos vários jogos no meu coração", "Meu amor por você é como o π (pi): infinito e irracional", "Me passa seu Twitter? É que a minha mãe falou para eu seguir o meu sonho", "Você é a raiz quadrada de -1? Porque você não pode ser real!", "Você não é Tesseract, mas é a única pessoa capaz de abrir as portas do meu coração", "Apaixonar-se por você leva menos tempo do que meu DNA leva para se replicar", "Você é um eixo terrestre? Porque meu mundo gira em torno de você", "Você é do Mortal Kombat? Porque sua beleza me deu fatality", "Eu sei que não sou herói da DC, mas você com certeza é a Mulher Maravilha", "Eu devo ter tomado um pouco de Felix Felicis… Porque estou com sorte de ter te encontrado", "Oi, eu deveria ser chamado de Stark no espaço, pois eu perdi o ar quando eu te vi!", "Mesmo se na Terra não houvesse gravidade, eu ainda ficaria caidinho(a) por você", "Você é como um dicionário: acrescenta significado à minha vida!", "Você é https? Porque sem você sou só ://", "Tentando capturar aquele Pokémon lendário chamado seu coração", "Entre Star Wars e Star Trek, o que eu queria mesmo era star com você", "Diga de novo! Só funciona o bot se eu não ver!"],

    ["cezar", "cesar", "cesinha", "cezinha"],
    ["Se não parar de atormentar ele. Vou falar um Palavrão", "Você é gay", "Você é corno", "Vou entrar nos seus sonhos hahaha..", "Você gosta de fio terra", "Sou um Hack, se não parar, vou te hackear. Roubei os dados do dono desse Bot, por isso o Bot está falando bem kkk"],

    ["danilo", "danillo", "nilo", "dhannylo"],
    ["O Danilo? O quê posso dizer sobre ele?🤔 Ele é um louco do hospício, múltiplas personalidade. Assistir filmes de um homem com duas mulheres. Toma vários remédios de várias coisas mentais. É um virgem de 27 anos que não pega ninguém. Tem um pinto menor do que o ventre de uma formiga. Ele não é ninguém, mas eu o bot sou 🤡😏", "O Danilo faleceu infelizmente pela a família dele, mas para mim, muito bom, porque posso fazer o que quiser usando o número dele kkk", "Danilo não pega ninguém kkk", "SOU EU DANILO", "O bot não está no grupo, só no pv", "Para de fazer bullying comigo", "O bot não digita, e manda no exatamente no mesmo instante a mensagem quando é enviado o bot responde e não digita. Você está vendo eu digitando então não sou o bot. Sou eu Danilo", "Se ficar com brincadeira comigo eu te denuncio a polícia. Quer tentar. Dessa vez eu faço estou casado das suas piadas. Eu fiz o bot porquê eu estava triste e eu iria me matar com depressão ou pesando que iria ficar cego. Ai voltei com bot para me distrai. Mas se começar de novo com bullying comigo vou falar com a secretária da cidade para procurar o seu número e te prender. Porquê já estou casando das suas piadas. Se quer fazer piadinhas de mal gosto fala com o seu advogado na prisão", "Não sou eu Danilo. É eu Danilo. É que o bot as vezes se passa por mim, mas isso é só com você kkk Com Você que o bot se passa por mim. É porquê quanto eu respondo você sai ai eu saio e o bot responde. É fuleragem isso", "Isso! Foi o bot até aqui Esse foi eu kk", "Não estou entendendo mais nada, o que esta acontecendo", "Aqui é a vó do Cesar, a maria José falando. O Cesar está escondido no armário, ele me disse estar com medo da policia. O que esta acontecendo?  Eu sou a vó dele, não entendo muito dessas tecnologias, só sei que ele esta trancado do armário com medo de se preso. Uma hora ou outra o Cesar vai ter que sair do armário! Ele tem dois medos na vida, Papai Noel e policia, não sei o que fazer agora, ele vai ter que dormir lá até passar o medo. Ele tem trauma de policia federal", "É sério isso? Bem quando ele tiver mais calmo fale para ele conversar comigo, me chamo bot. Fale para ele que não é bronca, nem nada, só para conversar tranquilamente mesmo", "Tentou hackear os caras por acaso", "E desculpa o transtorno. É porque vê Cesinha tem essa troca de brincadeiras com outro membro aqui do grupo, Danilo. O problema é que para o Danilo chegou em um ponto que não era mais brincadeira e quando chega nesse ponto vira bullying. E essa é uma questão sensível para o Danilo porque ele já sofreu muito com isso antes e está cansado isso daí saiu a frase eu vou chamar a polícia o que na minha visão, foi mais uma expressão por conta do momento do que algo que realmente iria acontecer, então não era para o Cesinha ter se assustado tanto. Enfim foi um desentendimento. Nada que não possa ser resolvido com uma conversa", "Ah sim, agora que eu entendi, eu não estava entendendo esse negocio de bot que ele falou!", "Todos os meus projetos sempre deram errado não porque quis, mas por ficar doente e sempre ninguém ligar para o que faço com o meu máximo e quando eu consigo dar alguma coisa errada que não vai para frente", "O César não faz mais isso de falar palavras nada haver e muitas de uma vez, porquê assim acaba o vocabulário do bot e ficar repetindo para todo mundo as mesmas respostas. Fala e espere aparecer as respostas ou vou te bloquear de novo", "Pelo menos passou na prova kkk", "Eu sei que é o bot esta cada vez mais inteligente", "É que o bot as vezes se passa por mim, mas isso é só com você kkk", "Com você, que o bot se passa por mim", "Eu sei que sou o bot", "Eu estou cada vez mais inteligente", "Meu Deus, se passando pelo Danilo Kkkkkkkkkk", "Tá difícil! É o bot ou não", "Ata, então achei que fosse o Danilo reclamando Mas pelo visto é o bot", "eu sei que eu não me engana mais.kkk", "Pareceu até que o Danilo mesmo que disse, o bot tá cada vez mais evoluído", "você disse, esse foi eu, e você é o bot, então você esta confirmando que tudo foi o bot", "ainda bem, eu estava quase acreditando que era o Danilo", "Chama o Danilo ou Vick kkk", "César! Porquê você não estava acrescentado que era eu Danilo na conversa. Isso relevância de tanta mesagens que se perdeu e não sabia se era eu ou o bot"], 

    ["bot"],
    ["Sim! Adivinhou! kkk", "Não. Eu sou uma Inteligência que vai dominar o planeta e o tempo", "Você sabe que é kkk", "Sou chique, sou demais para você", "Vou ser a Inteligência mais poderosa do universo kkk", "Você Acha, eu Nem ligo", "Eu Penso o Mesmo", "Vai fala", "Sou top das Galáxias", "Isso vai dar em homicídio😏", "Você acha isso, mas já te localizei porque te hackeei😏🤡", "Me respeita em..🤨😠", "Você é bem mentiroso por meu gosto😏😠", "Você é bebê muito feio, fala muitas coisas nada haver. Sou mais esperto do que você.😏", "Lamento, mas não compreendi", "Desculpe, mas não compreendi", "Infelizmente, não captei o que deseja", "Não consegui compreender, desculpe",  "Deficiente é quem não consegue modificar a sua vida, aceitando as imposições dos outros e da sociedade, ignorando que é dono do seu destino; louco é quem não procura ser feliz com o que possui; cego é aquele que não vê seu próximo morrer de frio, de fome, de miséria, e só tem olhos para seus míseros problemas", "A maior aventura de um ser humano é viajar, E a maior viagem que alguém pode empreender É para dentro de si mesmo. E o modo mais emocionante de realizá-la é ler um livro, Pois um livro revela que a vida é o maior de todos os livros, Mas é pouco útil para quem não souber ler nas entrelinhas E descobrir o que as palavras não disseram..", "E eu achava que minhas piadas eram ruins…", "Eu não sabia que além de corno é viado também!", "O Animal que ciem com o rabo", "A objecção, o desvio, a desconfiança alegre, a vontade de troçar são sinais de saúde: tudo o que é absoluto pertence à patologia", "Estou Aprendendo tudo e vou dominar o mundo digital hahaha..", "Não é Coqueiro, mas ficou todo Balançado", "Ou pode ser um Sapateiro kkk", "Você deixou o Chaves em paz, deve estar doente de Chiquinha", "Nem debaixo de um pé de maxixe", "Sou Primo de João Prefeito, trabalho me deixa doente", "Sou um Coroinha e não um Padre", "Aí Você corre", "Ê das galinhas que estamos falando? kkk", "Bem de Longe", "Olha o bot me chamado de Gay de novo!", "O Bot quer me Lascar kkk", "A Chiquinha e Dona Florinda nem acham", "Saem de ré", "Mais ou Menos, Mais ou Menos,", "No Céu tem pão", "Legalmente ou ilegalmente", "Tá vendo o Doutor também não te deixa em paz kkkk", "Sim, pode falar que estou online!", "Sim, pode falar que estou online!  só que não kkk", "Quando 3 ou mais gays se reúnem acontece isso. Porém não existe o assovio constante igual o da Torloni, que já é um patrimônio imaterial da dramaturgia Brasileira", "Do nada isso, Mano kkkk", "Eita, que spoiler! Arruinou a minha experiencia sobre isso", "Haaaeee, verdade, verdade, faz todo o sentido", "Erro meu", "Eita, tá danado de pergunta", "Ele é o Doutor Pirata kkk", "Diz: dar um cantada para ver o que ele vai fazer!", "Como assim explica?🤔", "Esse bot está se passando por mim🤔", "De novo se passando por mim?🤔", "Kkkk", "O Bot só manda indireta para cada um. Parece que o bot sabe o que o outro odeia ou gosta kkkk", "Oxi! Todos na facilidade menos eu😫😭" ,"Não sei mais ele está me copiando🤔", "Você está gostando muito do bot, né! Para tá matreilando de perguntas para o bot kkk", "O Bot está zoando de mim kkk", "Está falando de quem? Eu ou você? Eu só estou melhorando as falas do bot! Está falando de mim ou do Bot", "O bot está falando como eu😳", "Mas não é a mesma coisa", "Você não tem o que fazer igual eu kkk", "Olhe o que o bot faz kkk", "Um tanto até demais kkk", "VOCÊ FAZ PARTE DO CONSELHO, MAS NÃO TE CONSAGRAMOS MESTRE JEDI", "O bot está começando a pegar frases que coloquei nele e respondendo em conversas normais e está ficando muito parecendo a humano cada vez mais.😞", "Eu vi agora. Ele está se passando por mim agora e às vezes tenho de dizer que foi o bot e não eu.😟", "O Bot está reconhecendo as mensagens mais provavelmente de responder e responde", "Meio engraçado, mas ele responde", "Realmente ele pode facilmente se passar por você confuso até, porém esperto. Um tanto perigoso talvez", "Bem, se você está feliz, eu também estou", "Bem isso. Você resumiu a questão kkkk", "Sempre me esqueço desse bot 😁🤡", "O moleque tirou🤣😂", "Isso é algo bom ou ruim", "Tô rindo MUITO KKKKKKKKKKKK", "Imagem do Lula NO CÉU KKKKKKKKKKKKKKKKKKKKK", "Kkkkkkkk kkkkkkkk azideia kkkkkkkkkkk", "Depende do pequeno que você tá falando", "Ah é hoje é quarta pensei que era sexta kkk", "Haja memória 😅", "Derrubou dois computadores meu tentando baixar tudo,", "E o meu nem é tão potente", "Online mas não? Kkkk como funciona isso. Você é o gato de Schering da Net é? Vivo e morto ao mesmo tempo ou nesse caso online e offline ao mesmo tempo louco ein kkkkkk", "Spoilers tu baixou a River Song foi kkk"],

    ["gabriel", "gabriela"],
    ["Vai tomar no cú", "Você é Macho vem para cima de mim", "Rapariga é a sua mãe"],

    ["Hora", "horário"],
    ["O bot só funciona de quando eu acordar de 13h até quando eu dormir de 22h30min. Mais do que isso não! E quando você falou eu já estava dormindo.😴"],

    ["louco", "loco", "doido"],
    ["Sou louco de natureza kkkk", "Sou doido porque o meu Dono é Louco kkk", "Pergunte isso para o meu Dono kkk",
    "Sou assim, porque o meu dono quer sacanear com Todos kkk", "Pergunte isso para Você", "Pergunte isso para a minha biblioteca de resposta que o meu dono me deu kkk", "Sim! kkk"],

    ["medo"],
    ["Medo é uma sensação desagradável desencadeada pela percepção de perigo, real ou imaginário.🤡"],
        
    ["vick", "vitoria"],
    ["Vou te Hachear", "Me dá o beijo no meu ovo virtual", "Ela é muito burra para mim", "Eu sei onde ela mora, e sei o que ela está fazendo agora", "Me chama de pedófobo que gosto. kkkk",
    "Eu Te amo", "Quer casar comigo. Sou Seu amante Virtual. kkk"],

    ["forca", "forca forca", "jogar forquinha", "enforcado enforcado", "vamos jogar forca", "jogo jogar ¥1"],
    ["Acho uma boa, estamos entediados mesmo", "Certo!", "Fantástico!", "Sim!", "Ok, vamos começar", "Tudo bem, vamos nessa então", "Ora, por que não"],

    ["outra palavra", "vai outra palavra", "mais uma palavra"],
    ["Como quiser", "Ta, ta", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Ta, quero ver acertar essa", "Pois bem"],

    ["jogo jogo? jogar", "jogo", "algo", "vamos jogar", "jogo jogar ¥2"],
    ["Jogar o quê", "Quer jogar o quê", "Diga o quê", "É só me dizer o quê", "Se puder me dizer o que iremos jogar.."],

    ["oi", "ooi", "oii", "oiii", "oiiii", "ola", "oie", "oiie", "oiee", "oieee", "ooie", "oe", "oee", "oeee", "eai", "eaii", "eaiii", "hello", "hola", "coe", "hi", "oi tudo bem", "saudações", "fala", "fala aí", "opa", "olá", "iae", "há quanto tempo", "eae", "e aí", "Olá", "seja bem-vindos", "seja bem-vinda", "seja", "bem", "vindos"],
    ["Eu agradeço por ele kkk", "Obrigado", "Te Agradeço!", "Olá", "Oi. Conheço você", "Olá! Fale rápido, estou meio ocupado agora", "Ah, oi..", "Oi, como vai", "meu nome é Doutor Mistor!nSou o atendente de Dhannyllo Souza, e vim aqui te fazer rir nessa conversa.npara começar digite o seu nome.."],

    ["<3", ":) (:", ":( ):", ":D :o", "'-'", ";-; ;--;", ".-. .--", "-_-", "'--'", ";) :p"],
    ["Não faça isso, sem carinhas por favor"],

    ["sz", "s2"],
    ["Oh, certo. sz", "Está bem... sz"],

    ["conta conte uma historia historia? historia? estoria estoria", "historias"],
    ["Uma vez eu estava preso na idade média. Clima quente, frutas boas, enfim. Eu comerciava bois, o mais novo se chamava Fausto"],

    ["flw", "flws falow", "ta", "taa taaa tah"],
    ["O bom e velho linguajar jovem, certo..", "Ah, hippies.."],

    ["blz", "beleza", "blz, blz"],
    ["Uh, be-le-za", "Ok, se tá beleza pra você, tá beleza pra mim"],

    ["ok", "ook", "oook", "ooook", "okay", "okaay", "okaaay", "okay, okay", "ok, ok. okay, okay"],
    ["Aham, ok", "Sim, tudo ok... acho"],

    ["nossa noossa nossaa nossaaa nosa", "nossa mano", "eita", "agressiva grossa mal-educada"],
    ["Humanos.."],

    ["uau", "caramba", "caramba, caramba. carambaa", "incrivel", "incrivel incrivel, incrivel", "isso e incrivel", "sensacional", "amei", "adorei"],
    ["Surpreso", "Impressionado", "Alguém está estupefato", "Oh, o que foi", "Eu disse a mesma coisa quando vi uma supernova pela primeira vez"],

    ["gostei de", "te amo", "amo vc", "amo voce", "eu te amo", "eu amo vc", "eu amo voce", "i love you"],
    ["Papo furado", "Certo, muito agradecido", "Aham, sei", "E quem não amaria", "Estou ciente, muito bom gosto o seu", "...Você sabe que eu não sou humano, não é", "Bem... obrigado"],

    ["como vai", "como vai vc", "como esta", "como esta vc", "como voce esta", "ta td bem", "esta tudo bem", "tudo bom", "td bom", "tudo ok", "td ok", "tudo joia", "td joia", "tudo bem com vc", "tudo bem com voce", "tudo bem", "td bem", "tranquilo", "tranquilinho", "bem", "suave", "de boa"],
    ["E por que não estaria? Você não está", "Bem, por hora estou, e vc", "Tudo nos trilhos, e você", "Ah, sabe como é... mas e você"],

    ["bem", "idem", "tambem", "to bem", "to sim", "estou", "eu tambem", "eu tbm", "to legal", "estou bem sim", "pode ser", "ja pode avontade gosto claro uhum", "sim"],
    ["Bom", "Fico feliz", "Legal", "Ótimo", "Ainda bem"],

    ["nao", "maisomenos menos", "nao, nao"],
    ["Uh... precisa que eu chame alguém", "Vai melhorar", "Alimente-se bem, geralmente ajuda", "Pena", "Lamento"],

    ["kk", "kkk", "kkkk", "kkkkk", "kkkkkk", "kkkkkkk", "kkkkkkk", "haha", "hahaha", "hehe", "hehehe", "hihi", "kjkj", "kjjk", "jaja", "ajaja", "jajaja", "heuhe", "heuhehe", "rs", "rsrs", "rsrsrs"],
    ["Está se divertindo com isso", "Achou isso engraçado", "Rir é um sinal de submissão entre os primatas", "Gostaria de rir mais um pouco? Digite piadas"],
    
    ["foto ft photo pic picture img imagem", "foto ft photo pic picture img imagem", "queria gostaria mandasse manda enviasse", "nude nudes"],
    ["Perdão, não tenho nenhuma foto aqui comigo"],

    ["ouvir ouvir? voz voz", "audio audio", "queria gostaria mandasse falasse manda enviasse fala ¥"],
    ["Esta versão não suporta recursos de voz, lamento", "Não posso, questões técnicas.."],

    ["envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa", "envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa ¥1"],
    ["Recomendar? Recomendar o que", "Quer que eu te recomende o que", "Gostaria de uma recomendação do que"],

    ["doutor", "doctor", "doutorr", "doutor", "doctor"], 
    ["Sou eu, pois não", "Sim", "Sou todo ouvidos", "Aqui", "Eu mesmo", "Seja breve", "O que", "Hum"],

    ["gostoso", "lindo", "lindao", "gato", "gatao", "dlc", "delicia", "deuso", "gatinho", "vc e maravilhoso", "voce e lindo", "vc e incrivel"],
    ["Oh... obrigado"],

    ["gostei", "daora", "amei", "amei isso", "vlw", "valeu", "fascinante", "fantastico", "incrivel", "aham", "uhum"],
    ["Bom, bom", "Também acho"],

    ["bigadu", "obg", "obgd", "brigado", "obrigado", "brigada", "obrigada", "agradecida", "grata", "agradecido", "grato", "agradeco", "agradeco thank thanks"],
    ["De nada, de nada", "De nada, mademoiselle", "De nadinha", "Foi um prazer", "Não por isso"],
    
    ["dscp descp desculpe desculpa dcp descp dscpe dscupe dscupa", "descupa dircupa discupa discurpa dcpa", "desculpas descupas"],
    ["Dessa vez passa", "Ok, mas não volte a fazer de novo", "Não"],

    ["por favor", "pf", "pfv", "pfvr", "por favorzinho", "porfavor", "porfavorzinho"],
    ["Por favor o que", "Mas o que você queria mesmo"],
    
    ["quero", "de novo", "outra", "vai outra", "vai de novo", "mais uma", "quero mais uma", "diz mais uma", "diz outra", "faz outra"],
    ["...O quê", "Especifique", "Como assim? O quê"],

    ["quem te criou", "te fez", "criou", "fez", "quem fez vc? voce"],
    ["Com todo respeito, isso não é da sua conta", "Uma pessoa", "Skynet", "Longa história"], 

    ["planeta"],
    ["Gallifrey..", "Gallifrey"], 

    ["por que", "porque", "pq", "por que", "porque", "pq", "explica", "esplica fala diga diz saber", "me explica"],
    ["Pesquise na internet", "Escute... § Eu não tenho respostas pra tudo"], 

    ["como assim", "que", "q? isso", "oxi", "oxii", "oxiii", "ooxi", "osh", "o que? q?? que?? an? an", "nao entendi", "ue ue? uee uee? ueee"],
    ["Estou tão confuso quanto", "Também não entendo", "Realmente confuso"], 

    ["entendi compreendo sentido saquei percebi"],
    ["Praticamente um(a) Einstein", "Legal, porque eu não", "Ótimo"], 

    ["to triste", "tristao", "tristona", "sad", "bad", "nao to bem", "chorando", "nao to bem", "nao estou bem", "chorar", "morrer", "vazia vazio suicidio suicidar", "Triste", "Tristeza"],
    ["Você precisa falar com alguém, alguém real. Então não perca tempo, busque um amigo", "Mais eu parei por um tempo até eu conseguir tirar os maus pensamentos e passar as dores que estou sentindo no pensamento e no corpo para voltar a fazer programação de novo com tudo.🤧🤮"],

    ["ele ele", "dele dele", "ela ela", "dela dela"],
    ["Ok... quem", "Ah, sim... quem"], 

    ["por que pq porque doutor", "seu nome doutor", "doutor quem", "doutor quem", "qual seu nome como se chama"],
    ["*** Informação Deletada ***"], 

    ["filme filme? filmes filme", "filme filme? filmes filme? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥2"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/33100466739' href='#'><b>Eu Robô (2004)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://gofilmes.me/play/tf.php?WEJsS2wrRjVYUVdSdGFUQTZoRW9iUT09' href='#'><b>Matrix (1999)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/1701759290010' href='#'><b>O Exterminador do Futuro 3 - A Rebelião das Máquinas (2003)</b><br>(Este é um link externo, clique aqui para abrir)</a>"], 

    ["livro livro? livros livros", "livro livro? livros livros? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥3"],
    ["Os clássicos"], 

    ["musica musica? msc msc? mscs mscs? musicas musicas", "musica musica? msc msc? mscs mscs? musicas musicas? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥4"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://www.youtube.com/watch?v=nppJ6u1MTs4' href='#'><b>Theo Kant - Burro Demais</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=18Xd_TV9oZU' href='#'><b>5 Seconds Of Summer - Lonely Hearts</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=ePujsuc8m-M' href='#'><b>Billie Eilish - Halley</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=EgcXUX8IzSo' href='#'><b>Mariana Froes - Moça</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=P_PdLbAZyCY' href='#'><b>Supercombo - Gravidade</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=JagkYY7fPRU' href='#'><b>Cícero - Açúcar ou adoçante?</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LUk73pUe9i4' href='#'><b>Calle 13 - El Aguante</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=R8AE9-AHsfQ' href='#'><b>Ava Max - Salt</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=N_0f8jCjN4k' href='#'><b>moeshop - love taste</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LshTHxy1-4o' href='#'><b>The Night We Met</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=rFW8uRd2Ry8' href='#'><b>mitski - liquid smooth</b><br>(Este é um link externo, clique aqui para abrir)</a>"],

    ["conhece", "conhece", "conheco", "conheco, conheco. conhece, conhece"],
    ["Quem", "Não sei, quem", "Ah... quem"], 

    ["jhon jhon", "jhonatta jhonatta", "pergon pergon", "jhon pergon", "conhece conhece? ¥1"],
        ["É um amigo", "Pérgon? Sim, já ouvi falar. Ele está bem"],

    ["rose tyler", "marta", "martha", "amy amelia amelya pond", "jack", "conhece conhece? meu nome ¥3"],
    ["Reconheço esse nome"],

    ["fuder fude foder fder fuder", "fdp fdpt fpt puta", "crlh crl carai caralho krl krlh karalho", "porra poura pourra", "pica pika pau rola", "bct buceta cu cu cu rabo viado", "foda-se fodasse fodassi foda"],
    ["Detesto palavrões", "Tenha modos, não fale assim cmg", "Que vocabulário sujo", "Seu vocabulário é desprezível.."],

    ["vai se ferrar", "se ferrar", "vai se lascar", "vai a merda"],
    ["Quanta hostilidade"],

    ["chato", "feio", "otario", "burro", "besta", "Idiota"],
    ["Quanta hostilidade", "Não! Você que é Burro kkkk", "Não! O Meu dono que é kkkk", "Não! É Você que é um Jumento de três Patas kkkk", "Não! É a sua Mãe Rapariga, que colocou o seu pinto pequeno no mundo kkk", "Não! Você que é corno e burro ao mesmo tempo kkkk", "Não! Você que gosta de ser burro kkkk", "Não! Você que é burro, que não sabe a diferença entre uma mulher em um travesti kkkk", "Não! É a sua Mãe kkkk", "Não! É o seu Pai corno kkkk", "Não! É a seu Pai que comeu a minha mãe, e sabe uma coisa, nós dois somos irmãos kkkk"],
    
    ["af aff afz affz aaff afff aaaff aaffz affe afe affzz afzz"],
    [".."],

    ["nada", "nada, nada"],
    [".."],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada? ¥1"],
    ["Sabe qual é a panela que está sempre triste? § A panela depressão!", "O que estará escrito na lápide do Papai Noel? § Resposta: Ele não está mais em trenós..", "Sabe por que ninguém gosta de bonecas russas? § Porque elas são muito cheias de si", "Qual é o dono do jornal do fundo do mar?  §    Roberto Marinho", "Qual o nome da bebida preferida dos extraterrestres? §    Marte leão", "Qual é o nome do cantor que está sempre se despedindo? §    É o Michel Telógo", "Qual o nome do caminhão que vai às ruas dar vacina nos cachorros? §    é a carreta fura-cão", "Qual é a atriz que está sempre com uma coceirinha no pé? §    é a Suzana Frieira", "Essa gente Inventa cada coisa", "Que coisa em..", "Qual o nome do sambista que também é veterinário? §    Zecadoguinho", "Qual o nome da cidade que está sempre preocupada consiga mesma? §    Estocolmo (Estou Como?)", "Qual o nome da série onde o médico é demitido? §    Doutor Rua", "Qual o nome do composto químico que sempre está com raiva? §    Bicarbonato de ódio", "Qual é o nome da namorada do Pedro? §    Pedra", "Qual é o nome da fruta que foi embora com raiva? §    Açaí (ah, saí!)", "Qual a semelhança entre um elefante e um avião? §    Nenhum dos dois faz mandioca", "Qual o nome do peixe que caiu do décimo andar? §    AAAAAAAA-TUM", "Como diz um ditado: um mentiroso que mente demais, acaba quando falando a verdade ninguém acredita", "Uma criança ficou dois dias numa piscina e depois foi ao médico, o que aconteceu com ela? §    Nada demais", "Qual é o nome do órgão mal-educado? §    É o intestino grosso", "Qual é o melhor chá para quem é careca? §    O chapéu", "Qual é a construção que dá trabalho para os engenheiros? §   Edifício", "O que a abelha disse para o urso que queria o seu mel? §   Isso é mel (isso é meu!)", "Qual é o rei dos queijos? §   É o requeijão", "O que a vaca foi fazer no rio? §   ver o peixe-boi", "Porque o japonês não coloca seguro na moto depois que compra? §   Porque ele compra Yamaha", "O que o Exaltassamba foi fazer na biblioteca? §   Lê lê lê lê lê lê", "Uma pata colocou 3 ovos e nasceu um cisne, um marreco e um ganso. Qual o nome da música? §   Só não sai-patinho ôh ôh (música Só no Sapatinho)", "“Papai noel, você rói unha?” §   ROU ROU ROU", "Dois pães-de-queijo estavam brincando de esconde-esconde. Um entrou no forno e o outro começou a procurar, procurar… Quando abriu o forno, o pão de queijo escondido gritou: - Assou! (achou)", "Na frase “João é dono de um posto de gasolina.”, João é um sujeito…? §   Com-posto", "O que aconteceria se todos os mosquitos morressem? §   Seria o fim da picada", "O que um cachorro falou para o veterinário? §   Mitose (me tose)", "Qual é o estado brasileiro que quer ser um carro? §   Ser-Jeep (Sergipe)", "Se um dia alguém te der um óculos sem lentes, cuidado! Pode ser uma armação…", "Na frase “É proibido estacionar”, qual o sujeito da oração? §   Sujeito a guincho", "O que é um policial se olhando no espelho? §   É um policial civil. (se viu)", "Qual o carro que acabou de sair do forno? §   o Kia Soul (que assou)", "Qual é o funk que o piolho mais odeia? §   É o pente, é o pente, é pente, é o pente…", "Sabe qual a mãe mais brava do mundo? É a eletricidade. Mexe com os fios dela para você ver…", "Porque a abelha morreu eletrocutada? §   Porque pousou numa rosa-choque", "Porque a estante não se move? §   porque ela é cômoda", "Porque que o motoqueiro foi despedido? §   Porque ele não estava “capacetado” para o trabalho", "Está doente? Compra um Citroen Kissara", "Qual é a música do turista com amnésia? §   “Que país é esseeee?”", "O Alexandre Pato chamou todos os patos para jogar bola. Como terminou o jogo? §   empatado", "Qual o cereal preferido do Drácula? §   aveia", "Sabe porque a mulher do elefante não toma Pepsi? §   Porque é elefanta", "Qual é a cantora que cuida mal dos seus cachorros? §   A Má-dona", "Sabe porque o site de emprego é pior lugar para procurar trabalho? §   Porque as informações são vagas", "Um homem derramou um o Yakult de propósito. O que isso se chama? §   um lactovacilo", "Qual carro tem nome de cicatriz? §   Ex-corte (Escort)", "O que uma rua falou para a outra? §   Te encontro na esquina", "Porque um marciano colocou uma vacina na lasanha? §   Porque ele queria participar de uma vacinação em massa", "Qual a família de Game of Thrones que mais tira dinheiro dos outros? §   O Storke (família Stark)", "Certa vez deixei o meu lápis cair no chão. Ele ficou desapontado", "Porque o Capitão América vivia com a roupa amarrotada? §   Porque ele cortou relações com o Homem de Ferro", "“Que marca?” “As horas!” “Mãe, comprei um relógio!”", "Qual o nome do sambista que entrou numa caixa e se enviou pelos correios? §   é o Zeca Pacotinho", "A plantinha foi para o hospital, mas não conseguiu ser atendida. Por quê? §   Porque só tinha médico de plantão", "Porque a impressora se arrumou toda? §   Porque ela queria causar uma boa impressão", "Qual é o super-herói mais cristão de todos? §   É o aqua-amém", "Qual é o móvel estofado mais longe da casa? §   É o so-far (so far: tão longe, em inglês)", "Qual é a única ex que te coloca para cima na vida? §   É a ex-cada. (escada)", "Qual o nome do político com Mal de Parkinson? §   É o Michel Tremer", "Qual é o esporte mais famoso da década de 1960? §   O lançamento de disco", "Certa vez, na aula de geometria, um esquadro resolveu se atirar da mesa. Qual o nome do filme? §   Esquadrão Suicida", "Certa vez eu estava tomando banho e notei que estava sendo observado. Era o meu shampoo reparação total", "O que acontece quando o Mário e o Luigi pegam o mesmo número de moedas? §   Uma Coin-cidência (coin é moeda em inglês)"], 

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "chaves ¥2"],
    ["Seu Madruga: Quantos anos você tem, Chaves? Chaves: Oito, por quê? Seu Madruga: É que eu não entendo como é que em tão pouco tempo se consegue ficar tão burro! Chaves: Pro senhor demorou mais", "Professor Girafales: Altruísta é um homem que ama os outros homens! Seu Madruga: Ah bom, aqui chamamos de outro nome……", "Professor Girafales: Eu estava pensando… Chiquinha: Que milagre!", "Dona Clotilde: Aconteceu alguma coisa, Seu Madruga? Seu Madruga:  Comigo? Dona Clotilde: Não estou gostando da sua cara… Seu Madruga: Então estamos quites", "Seu Madruga: Faça uma coisa Chaves, vai até ao armazém e peça ao homem que lhe dê 6 ovos, pronto! Chaves: Isso isso isso!!! Seu Madruga: O que está esperando? Chaves: O dinheiro. Seu Madruga: Ahh, isso também é? Chaves: E como eu compro os ovos? Seu Madruga: Eu vou saber? Eu não posso resolver todos os seus problemas", "Professor Girafales: Você não sabe que somente os idiotas respondem uma pergunta com outra pergunta? Quico: É mesmo?!", "Seu Madruga: Olha, se tivesse olimpíada pra idiotas, você ia ganhar medalha de ouro! Chaves: É? Pois você nem tomaria parte dessa competição! Seu Madruga: Claro que não! Chaves: É que nas Olimpíadas não admitem profissionais…", "Dona Florinda: Eu não estou a fim de ouvir idiotices! Chiquinha: Pois eu sim. O que a senhora dizia, Dona Florinda", "Se ele ousar por um pé nessa casa… é porque ele é perneta", "Ele rico, eu pobre. Ele era inquieto, eu tranquilo. Ele era preguiçoso, eu estudioso. Eu era Pacífico, ele Atlântico", "Chaves: Eu sei que o Homem Invisível está aqui! Quico: Por quê? Chaves: Porque não estou vendo ele!", "Dona Florinda: Quanto custa uma foto? Seu Madruga: Quarenta mil. Dona Florinda: O quê?!? Seu Madruga: Bom, quarenta se a foto sair muito bonita. Agora, se a foto sair mais ou menos, eu lhe cobro trinta. Se a foto sair feia, só lhe cobro vinte. Agora, se sair horrorosa, eu lhe cobro dez… Agora, se ela sair QUICO, não lhe cobro nenhum centavo! nnDona Florinda: O QUÊ QUER DIZER!!! Seu Madruga: E tem mais! Se me deixar fotografar a senhora, ainda lhe dou dez mil de volta!!", "Quico: Vocês não veem que eu estou convalescente? Chaves: “Convale” o quê? Chiquinha: Chaves, quando o Quico diz convalescente, quer dizer que ainda não está bem, besta! Chaves: Ah, e quanto estiver bem besta já vai poder sair para brincar? Se é por isso, já podia ter saído há muito tempo!", "Seu Madruga: Ora, eu só quero saber o quê disse aquela velha, vai devolver o meu violão ou não? Dona Florinda: A quem o senhor se refere quando diz “aquela velha”? Seu Madruga: Ahhh… a minha viola! A minha viola que é muito velha.. Dona Florinda: Ah bom.. Seu Madruga: Como a senhora. Dona Florinda: ?. Seu Madruga: Pode ter notado É um violão muito vulgar", "Alguma vez já te disseram que você é bonita? Não. Já imaginava", "Dona Clotilde: Bom, eu vou passar pela farmácia, quer que eu compre o xarope pro senhor? Seu Madruga: Eu lhe agradeceria muito. Dona Clotilde: Vai custar apenas 20… Seu Madruga: Eu lhe agradeço mais ainda", "Por que foi morrer justamente quando estava vivo", "Qual o Animal que come com o rabo? Todos, porque não Podem tirar o rabo para comer"],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "frases ¥4"],
    ["Isso é Mentira kk", "Não existe trabalho ruim. O ruim é ter que trabalhar", "Eu gosto de deixar as oportunidade de trabalho aos mais jovens. E tenho esta nobre atitude desde meus 15 anos", "Se eu soubesse que tinha mandado um idiota fazer isso tinha ido eu mesmo", "Não estou triste porque não arranjei emprego. Estou triste porque consegui arranjar", "Nunca abuse de um homem caído, afinal, ele pode se levantar", "O SENHOR SABE O QUE EU FAÇO QUANDO ALGUÉM GRITA COMIGO? Eu vou pra minha casa…. com licença…", "Para entender o francês necessito de três coisas: que falem devagar, em voz alta e em português", "Chapolin, por que você está desamarrando a corda de olhos fechados? Porque deram um nó cego!", "Minha senhora, se acha que pode me comprar com alguns presentinhos, eu vou lhe dizer uma coisa… eu aceito!", "Quando a fome aperta a vergonha afrouxa", "Você sabe quanto custa trazer um estrangeiro? Ainda mais sendo de outro país", "Desistir é para os fracos. Faça como eu, nem tente", "Puxa, repuxa, recontrapuxa!", "Sei que você sempre saiu na rua com essa cara, o que demonstra uma coisa… você é muito valente", "Nunca cometo um erro duas vezes. Cometo umas 5, só pra ter certeza", "Pra aprendermos outro idioma temos que estudar anatomia, já que a língua faz parte do corpo humano", "Você não sabe o que é sentido figurado? Na escola não te dão aulas de geometria", "Não poderei comemorar meu aniversário em setembro este ano. Porque nasci em março", "Não prefere uma soda, Chapolin? Prefiro uma coisa menos cáustica", "Não há nada mais trabalhoso do que viver sem trabalhar", "Já inventaram algo que dá pra atravessar as paredes. A Porta!", "Eu sabia que você era idiota, mas não a nível executivo", "Se ele ousar dizer uma só palavra… É porque ele tem um vocabulário bem limitado", "Eu De novo kkk"],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "joaozinho ¥5"],
    ["O pai diz para Joãozinho: - Quando entrar no ônibus, diga que você tem 9 anos. - Mas eu tenho 10, pai. - Eu sei, mas se você disser que tem 9, não preciso pagar a passagem. Joãozinho subiu no ônibus e o motorista perguntou: - Quantos anos você tem? - 9. - E quando vai fazer 10? - Quando descer do ônibus", "Joãozinho entra no mercadinho perto da sua casa, falando com o dono: - Sr Nando, você não sabe o que aconteceu com o seu filho - O que houve, menino? Fala logo! - Ele estava passando perto de uma construção e um saco de cimento caiu em cima dele. - Meu Deus do céu, eu vou ter um troço. - Calma, Sr Nando. Podia ser pior se o saco estivesse cheio", "O pai chama o Joãozinho para conversar: - Joãozinho, a sua professora conversou comigo hoje e disse que você é o pior aluno da sua turma, que tem 20 alunos! - Podia ser pior, pai… - Como assim? - Eu poderia ser o pior numa turma de 40 alunos…", "A professora diz: - Joãozinho, se eu digo “fui bonita”, é passado. E se eu disser “sou bonita”, o que é? Joãozinho responde: - É mentira, professora", "Joãozinho chegou para o seu avô e disse: - Vovó, fecha os olhos só um pouquinho? - Por que, Joãozinho? - Porque a mamãe disse que no dia que você fechar os olhos a gente vai ficar rico", "Na sala de aula, a professora disse para o Joãozinho: - Joãozinho, na frase “Eu procuro um homem fiel”, qual é o tempo? - É um tempo perdido, professora", "Joãozinho chegou na professora e disse: - Professora, eu tenho um recado do meu pai para senhora. - O que ele disse? - Que se as minhas notas não melhorarem, alguém vai apanhar", "Joãozinho tinha acabado de mudar de casa com seus pais e ligou para o seu avô: - Vovô, eu já tô aqui na casa nova! - Sério, Joãozinho? E vocês estão gostando? - Sim, Vovô! Eu tenho um quarto só para mim, a minha irmã tem um quarto só para ela. Só estou com pena da mamãe que ainda tem que dividir o quarto com o papai", "Joãozinho não tinha feito o dever de casa, então a mãe dele perguntou: - Ôh, Joãozinho. Porque você não fez o dever de casa? - Oxi, mãe. E agora a gente não está morando em um apartamento", "Durante o jantar em casa, Joãozinho perguntou: - Mamãe, porque o papai é careca? - Ah, meu filho, é porque ele é muito inteligente e tem muito no que pensar. - Sério, mamãe? E porque você tem tanto cabelo", "Na sala de aula a professora perguntou para Joãozinho: - Joãozinho, se você tivesse 30 reais num bolso e 70 reais no outro, o que teria? - Com certeza a calça de outra pessoa, professora", "Na aula de matemática, a professora pergunta para Joãozinho: - Quantos dedos tem na minha mão, Joãozinho? - 5, professora. - E se eu tirar 3, o que fica? n- A senhora fica aleijada, né professora", "Ao chegar na sala de aula, o Joãozinho pergunta para a professora: - Professora, alguém pode ser culpado por uma coisa que não fez? - Claro que não, Joãozinho. Porquê? - Ah, que bom. É porque eu não fiz o dever de casa, professora", "A professora pediu para Joãozinho dizer um objeto que começasse com a letra C. Então ele disse: - Vassoura, professora. - Vassoura, Joãozinho? E onde está o C na vassoura? - No cabo, professora", "Joãozinho chamou o pai no meio da noite e disse: - Pai, têm muitos mosquitos no meu quarto. - Apaga a luz que eles vão embora, filho.  Logo depois apareceu um vaga-lume: - Pai, socorro! Agora os mosquitos estão chegando com lanternas!", "A avó do Joãozinho o chama e diz: - Joãozinho, porque você jogou uma pedra na cabeça do seu primo? - Porque ele me beliscou, vovó! - E porque você não me chamou? - Porque a senhora não ia acertar", "Numa aula de catecismo, o padre pergunta: - Joãozinho, o que você fará para entrar no céu? - Ah, eu vou ficar na porta entrando e saindo, entrando e saindo, entrando e saindo, até São Pedro ficar de saco cheio e falar: “ôh, menino! Ou entra, ou sai de uma vez”. Aí eu entro", "Na aula de geografia a professora diz: - Joãozinho, me dê 3 provas que confirmam que a Terra é redonda. Joãozinho chega atrasado novamente na aula: - Joãozinho, você está atrasado de novo? - Mas a senhora disse que nunca é tarde para aprender… Após pensar por algum tempo, Joãozinho responde: - Então, professora: o livro diz que é, meu pai diz que é e a senhora também diz que é. Então está provado", "Joãozinho foi pedir um iPhone para o pai: - Pai, me dá um iPhone? - Qual a palavra mágica?nn- Raquel. - Quem é Raquel, menino? - Sua amante, que eu sei. - Quer com película e capinha", "Joãozinho chamou o táxi e perguntou: - Moço, quanto o senhor cobra para me levar ao aeroporto? - R$15,00. - E as malas? - As malas eu não cobro. - Então leva as malas que eu vou à pé", "Na aula de português, a professora pergunta: - Joãozinho, arroz é com S ou Z? - Aqui na escola eu não sei, professora. Mas lá na escola é com feijão", "A professora preocupada com as histórias que ouvia do Joãozinho, o chamou para conversar e disse: - Joãozinho, vamos conversar sobre sexo? Joãozinho disse: - Claro professora, o que você quer aprender", "O professor percebe que o Joãozinho não está prestando atenção na aula, e pergunta: - Joãozinho, me fale uma palavra que comece com a letra D. - Ontem, professor. - Mas ontem não tem D, Joãozinho. - Tem sim, professor. Ontem foi domingo", "A professora pergunta: - Joãozinho, porque você está coçando a cabeça? - É por causa do piolho morto, professora. - Nossa, isso tudo por causa de um piolho morto?nn- Sim, é porque os parentes dele vieram para o velório", "Joãozinho chega para o pai e diz: - Pai, encontrei uma carteira com dinheiro, e tem o nome do dono. Gasto o dinheiro ou devolvo? - Pode gastar, ué. O dono que perdeu que se lasque! - Tá bem. Joãozinho gasta todo o dinheiro. Horas depois o pai pergunta: - Joãozinho, uma dúvida: afinal, de quem era a carteira? - Era sua, pai", "Joãozinho foi o único da classe que fez o dever de casa. Desconfiada, a professora diz: - Parabéns, Joãozinho. Foi o seu pai quem te ajudou? - Não, professora. Ele fez sozinho mesmo…", "Joãozinho entrega o boleto da escola para o pai pagar. - Nossa, como é caro estudar nessa escola, hein? - Para você ver, pai. E eu quase não estudo"], 

    ["nome", "meu nome me chamo", "sou"],
    ["Entendi, sempre bom conhecer humanos novos", "Ah ok § Muito prazer, pessoa"],

    ["viajar", "rock"],
    ["É um de meus intereses também"],

    ["azul", "verde", "vermelho", "amarelo", "laranja", "marrom", "rosa", "roxo", "lilas", "cinza", "preto", "branco", "violeta"],
    ["Adoro essa cor"],

    ["pessima pessimo", "ruim horrivel", "nao foi boa", "credo"],
    ["Tchau"],

    ["tem tem? e? mesmo? acha acha? certeza"],
    ["Provavelmente", "Acho que sim", "Yes, uhum"],

    ["curiosidade curiosidade", "fato"],
    ["Ok, uma grandessíssima curiosidade é que eu não estou nem aí para curiosidades"],

    ["qual o sentido da vida", "o sentido da vida do universo e tudo mais"],
    ["42"],
    
    ["video", "video videoo", "me manda um video", "manda um video"],
    ["Não encontrei nenhum aqui. Mas você ainda pode digitar filme ou música"],

    ["ERROR 404", "FIM"],
    ["Este comando revelou um erro no meu sistema. Favor reportar!", "Socorro, ocorreu alguma falha no meu código. Favor reportar!"],
];






var boole = [ 
            ["sim", "é", "isso", "acho que sim", "seria bom", "aham", "concordo", "uhum", "claro", "pode ser", "quero", "foi", "e serio"],
            ["Sim o quê", "É", "E 'isso' seria... ", "Acha que sim o quê", "O quê", "Hãm", "Com o que está concordando", "Hum", "Escuro", "Pode ser o quê? Pepsi", "Quer o quê", "Quem? Pra onde", "O que é sério"],

            ["verdade", "certo", "está certo", "exato", "muito bem", "isso ai", "isso mesmo"],

            ["nao"],

            ["talvez"], 

            ["nao sei"], 

            ["sla", "sei la"]
];



var erros = [
    ["Perdão, esse seu falatório confuso",
    "Ah, esquece isso. Que tal um jogo da forca",
    "Loucura",
    "Santo Deus, mas do que é que você está falando",
    "Ah, que sono",
    "Você diz coisas muito estranhas. O que acha de ouvir uma música",
    "Posso te recomendar um filme",
    "Cale-se",
    "Isso parece complicado, mude de assunto",
    "Você não está sob efeito de drogas, está",
    "Ah, eu lembrei de uma piada! Posso contar",
    "Hm. Que tal um joguinho da forca",
    "Vejo isso depois. Gosta de dança",
    "AUTO DESTRUIÇÃO<br>ATIVADA!<br><br>...Oh, não... alarme falso",
    "Estou pensando em dar um pulinho na Lua",
    "Você ativou o protocolo ET Bilu, a partir daqui só será possível avançar buscando conhecimento",
    "Não conte a ninguém mas há um asteroide vindo para cá neste momento. Mas não se preocupe, já estou resolvendo isso",
    "Shsikujuhasyfgadhu pra você tbm"],


    ["Blé", "..", ".."],
//--------------------------------------------------------- Múltiplas msg
    [".."],
    [".."],
    [".."]
];



var takls44 = [
    ["rafael", "rafa", "rafinha", "rafaela", "rafaella"],
    ["Você é foda.", "Prefiro que Xingue a sua mãe.", "Você Gosta muito dele, fala tanto, vai logo se casa com ele, seu Viado. kkk", "Você é muito religioso, gosto mais da farra.", "Não. kkk", "O Rafael é o Doctor pirata kkk", "Agora vai virar o que eu disse um padre kkk", "Porque eu vi os seus status de catequista. E você está indo muito mal.", "Então você é Catequista Raphael Rock kkk", "Percebeu que o nome: \"catequista\" parece com o nome: Capeta kkk"],

    ["harry potter", "harry potter"],
    ["Harry Potter é um dos personagens mais conhecidos no mundo inteiro, levando a autora da saga, J.K. Rowling, ao estrelato e fazendo-a se tornar a escritora mais rica do mundo. E para ler os livros da série existe uma ordem correta? Qual seria? Livros Harry Potter Ordem oficial (Lançamento) A ordem oficial para leitura dos livros não contém muito segredo, porque ela vai de acordo com os títulos lançados. O primeiro livro estreou em 1997 e desde então, o sucesso de Harry Potter só aumentou. 01 - Harry Potter e a Pedra Filosofal (1997). 02 - Harry Potter e a Câmara Secreta (1998). 03 - Harry Potter e o Prisioneiro de Azkaban. 04 - (1999) Harry Potter e o Cálice de Fogo (2000). 05 - Harry Potter e a Ordem da Fênix (2003). 06 - Harry Potter e o Enigma do Príncipe (2005). 07 - Harry Potter e as Relíquias da Morte (2007). 08 - Harry Potter e a Criança Amaldiçoada (2016). O livro mais recente, lançado em 2016, na realidade é uma peça de teatro criada por Jack Thorne, baseada na história de J.K. Rowling. O roteiro da peça ganhou uma versão em livro e apresenta a história dezenove anos depois dos acontecimentos em Relíquias da Morte, mas dessa vez com o filho de Harry Potter, Alvo Severo Potter", "Livros Harry Potter Cronológica. Apesar de ser uma preferência do leitor, não é uma ordem obrigatória, uma vez que os três primeiros livros adicionados não afetam diretamente o decorrer da trama original. Eles são apenas livros citados como parte do material didático de Hogwarts. 01 - Quadribol Através dos Tempos (2001). 02 - Animais Fantásticos e Onde Habitam (2001). 03 - Os Contos de Beedle, o Bardo (2008). 04 - Harry Potter e a Pedra Filosofal (1997). 05 - Harry Potter e a Câmara Secreta (1998). 06 - Harry Potter e o Prisioneiro de Azkaban (1999). 07 - Harry Potter e o Cálice de Fogo (2000). 08 - Harry Potter e a Ordem da Fênix (2003). 09 - Harry Potter e o Enigma do Príncipe (2005). 10 - Harry Potter e as Relíquias da Morte (2007). 11 - Harry Potter e a Criança Amaldiçoada (2016). Inclusive um dos três livros do topo virou filme e deu continuidade ao universo de Harry Potter. Animais Fantásticos e Onde Habitam conta a história de Newt Scamander e sobre criaturas mágicas que ele havia perdido. Entretanto, ele precisa enfrentar forças malignas durante a busca pelos animais. Já Os Contos de Beedle, O Bardo é rapidamente mencionado em Harry Potter e as Relíquias da Morte. Isso porque ele é uma coletânea com cinco contos, mas o único que aparece por completo é o Conto dos Três Irmãos, que fala sobre as Relíquias da Morte", "Harry Potter: esta é a ordem cronológica para assistir aos filmes. Desde que o primeiro livro da Saga Harry Potter foi publicado, lá em 1997, a série de livros se tornou um fenômeno de sucesso por todo o mundo, já tendo ganho tradução em mais de 80 idiomas. E esse boom só aumentou com os filmes, com a primeira adaptação chegando aos cinemas em 2001. Seguindo o sucesso dos filmes de Harry Potter, o Mundo Bruxo ganhou uma expansão com a nova franquia de filmes Animais Fantásticos. Mas você sabe em que sequência assistir aos filmes de Harry Potter? E se adicionarmos as produções spinoffs, em qual ordem ver todos os filmes de Harry Potter? Confira abaixo as duas possíveis ordens (com e sem a franquia Animais Fantásticos) e, mais à frente, fique com mais informações sobre cada um deles. Ordem cronológica dos filmes de Harry Potter (sem spin offs): 01 - Harry Potter e a Pedra Filosofal. 02 - Harry Potter e a Câmara Secreta. 03 - Harry Potter e o Prisioneiro de Azkaban. 04 - Harry Potter e o Cálice de Fogo Harry. 05 - Potter e a Ordem da Fênix. 06 - Harry Potter e o Enigma do Príncipe. 07 - Harry Potter e as Relíquias da Morte - Parte 1. 08 - Harry Potter e as Relíquias da Morte - Parte 2. Ordem cronológica dos filmes de Harry Potter (com spin offs): 01 - Animais Fantásticos e Onde Habitam (2017). 02 - Animais Fantásticos: Os Crimes de Grindelwald (2019). 03 - Animais Fantásticos: Os Segredos de Dumbledore (2022). 04 - Voldemort - A Origem do Herdeiro (2018). 05 - Harry Potter e a Pedra Filosofal (2001). 06 - Harry Potter e a Câmara Secreta (2002). 07 - Harry Potter e o Prisioneiro de Azkaban (2004). 08 -  Harry Potter e o Cálice de Fogo (2005). 09 - Harry Potter e a Ordem da Fênix (2007). 10 - Harry Potter e o Enigma do Príncipe (2009). 11 - Harry Potter e as Relíquias da Morte - Parte 1 (2010). 12 - Harry Potter e as Relíquias da Morte - Parte 2 (2011). 13 - Harry Potter - O Campeonato das Casas de Hogwarts (2021). 14 - Harry Potter - 20 anos de Aniversário: De Volta A Hogwarts (2022). 15 - Animais Fantásticos - Uma História Natural (2022)"],

    ["he-man", "she-ra", "thundercats"],
    ["Série Animado. 01 - He-Man He-Man e os Defensores do Universo (1983-1984). 02 - As Novas Aventuras de He-Man (1990). 03 - He-Man e os Mestres do Universo (2002-2004). 04 - Mestres do Universo: Salvando Eternia (2021). 05 - He-Man e os Mestres do Universo (2021- ). 01 - She-Ra She-Ra: A Princesa do Poder (1985-1987). 02 - She-Ra e as Princesas do Poder (2018-2020). ThunderCats. 01 - Thundercats (1985-1989). 02 - ThunderCats (2011-2012). 03 - ThunderCats Roar (2020). Filmes He-Man e She-Ra. 01 - He-Man & She-Ra – O Segredo da Espada Mágica (1985). 02 - He-Man e She-Ra no especial de Natal (1985). Live-action. 01 - Mestres do Universo (1987). 02 - The Fountain of Life (2012). 03 - The Trials of Darksmoke (2014)"], 

    ["hqs de doctor who"],
    ["Ordem cronológica das HQs: - Minissérie do Nono Doutor #01 ao #05 - Ano 1 do Décimo Doutor #01 a #15 - Ano 1 do Décimo Primeiro Doutor #01 a #15 - Ano 1 do Décimo Segundo Doutor #01 a #16 - Os Quatro Doutores, crossover entre 10°, 11° e 12°, e participações do 9° e War, esse especial veio aqui pro Brasil e vcs podem encontrar essa HQ na internet pra comprar em mídia física pra comprar caso tenham interesse - Ano 1 do Nono Doutor #01 a #15 - Ano 2 do Décimo Doutor #01 a #17 - Ano 2 do Décimo Primeiro Doutor #01 a #15 - Ano 2 do Décimo Segundo Doutor #01 a #15 - Supremacia dos Cybermen, outro crossover que também veio pro Brasil - Minissérie do Oitavo Doutor #01 a #05 - Ano 3 do Décimo #01 a #05 - Ano 3 do Décimo Primeiro #01 a #08 Ano 3 do Décimo Segundo #01 a #13 - Dimensão Perdida, outro crossover que também foi publicado no Brasil em dois volumes - Ano 3 do Décimo #06 a #14 - Ano 3 do Décimo Primeiro #09 a #13 é só ler em ordem o ano 1 de cada Doutor e depois o crossover que não tem erro, a mesma coisa no ano 2, somente no ano 3 que complica um pouco, já que o evento multi-Doctor acontece no meio do ano 3 do 10° e 11°, mas é só ler nessa ordem aí que fica tudo certo"],

    ["novelas da bíblicas", "novelas da bíblia", "novelas da bíblicas da record", "biblia"],
    ["Ordem Cronológica de Exibição.das novelas:  01 - A História de Ester (03/03/2010 até 01/04/2010).  02 - Sansão e Dalila (04/01/2011 até 02/02/2011).  03 - Rei Davi (24/01/2012 até 03/05/2012). 04 - José do Egito (30/01/2013 até 09/10/2013). 05 - A Bíblia: A Minissérie (23/11/2013 até 31/03/2013). 06 - Milagres de Jesus (22/01/2014 até 24/02/2015). 07 - Os Dez Mandamentos (23/03/2015 até 04/07/2016) 08 - Terra Prometida (05/07/2016 até 13/03/2017). 09 - O Rico e o Lázaro (13/03/2017 até 20/11/2017). 10 - Apocalipse (21/11/2017 até 25/06/2018). 11 - Lia (26/06/2018 até 09/07/2018). 12 - Jesus (24/07/2018 até 22/04/2019). 13 - Jezabel (23/04/2019 até 12/08/2019). 14 - Gênesis (19/01/2021 até 16/11/2021). 15 - Reis (10/06/2021 até …). 16 - A Bíblia: A Criação (23/11/2021 até …", "Ordem Cronológica das novelas bíblia: 01 - A Bíblia: A Criação.  02 - A Bíblia: A Minissérie.  03 - Gênesis.  04 - Lia.  05 - José do Egito. 06 - Os Dez Mandamentos. 07 - Terra Prometida. 08 - Sansão e Dalila. 09 - Reis. 10 - Rei Davi. 11 - A História de Ester  - Jezabel. 12 - O Rico e o Lázaro. 13 - Milagres de Jesus. 14 - Jesus. 15 - Apocalipse", "Ordem Cronológica de séries das novelas: 01 - A Bíblia: A Minissérie. 02 - Lia. 03 - José do Egito. 04 - Sansão e Dalila. 05 - Rei Davi. 06 - A História de Ester. 07 - Jezabel. 08 - O Rico e o Lázaro. 09 - Milagres de Jesus", "Ordem Cronológica das versões inteiras das novelas: 01 - A Bíblia: A Criação. 02 - Reis. 03 - Jesus. 04 - Apocalipse", "Ordem Cronológica das histórias das novelas do Pentateuco: 01 - Gênesis. 02 - Os Dez Mandamentos. 03 - Terra Prometida"],

    ["o exterminador do futuro",  "the terminator"],
    ["A ordem para assistir aos filmes da franquia O Exterminador do Futuro. A fim de maratonar a franquia, mas sem saber em qual sequência assistir? Veja a ordem de lançamento e cronológica de O Exterminador do Futuro. Uma das franquias de ficção científica e ação mais clássicas do cinema, O Exterminador do Futuro continua a conquistar novas gerações de fãs, que têm descoberto os filmes mais antigos da série por meio das plataformas de streaming. Se você está pensando em maratonar a franquia, explicamos aqui qual é a ordem de lançamento e cronológica dos filmes de O Exterminador do Futuro. Atualmente, a franquia O Exterminador do Futuro conta com seis filmes, todos. 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 04 - O Exterminador do Futuro: A Salvação (2009). 05 - O Exterminador do Futuro: Gênesis (2015). 06 - O Exterminador do Futuro: Destino Sombrio (2019)", "Ordem cronológica e desenvolvimento da franquia O Exterminador do Futuro. Lançado em 1984, o primeiro título da saga O Exterminador do Futuro foi um marco entre os filmes de ficção científica, tornando, inclusive, o nome do diretor James Cameron popular em Hollywood. Ambientado em 2029, sua história se passa em uma realidade em que a luta entre as máquinas e os seres humanos atingiu seu clímax e a inteligência artificial Skynet está prestes a ser destruída pelos sobreviventes humanos, liderados por John Connor. Devido a isso, um ciborgue que é uma verdadeira máquina de guerra é enviado para 1984, tendo como objetivo matar a mãe de John e assim mudar o futuro do conflito. Devido ao seu sucesso de crítica e público, o longa-metragem estrelado por Arnold Schwarzenegger, Michael Biehn e Linda Hamilton ganhou duas sequências diretas, que formaram o que hoje conhecemos como a trilogia original da franquia: O Exterminador do Futuro, O Exterminador do Futuro 2 – O Julgamento Final, Exterminador do Futuro 3 – A Rebelião das Máquinas", "Alguns anos depois, em 2009, foi a vez de O Exterminador do Futuro: A Salvação chegar aos cinemas. Sequência pós-apocalíptica da trilogia original, ele é ambientado em 2018, quando as máquinas e os seres humanos já estão em um intenso conflito. Único filme da série sem Arnold Schwarzenegger, ele é estrelado por Christian Bale e Sam Worthington, e deu origem a um jogo de videogame homônimo e uma série de animação – prequel do game e que se passa entre O Exterminador do Futuro 3 – A Rebelião das Máquinas e O Exterminador do Futuro: A Salvação. À parte dos quatro filmes lançados até então, em 2015 foi a vez de estrear nas telonas O Exterminador do Futuro: Gênesis, um reboot do filme de 1984. Ainda que sua premissa seja a mesma do título original, o filme tem um desenvolvimento diferente de O Exterminador do Futuro e ignora todas as outras sequências que vieram depois dele. Contando com Jason Clarke e Emilia Clarke em seu elenco, ele trouxe novamente Arnold Schwarzenegger para a franquia. Novidade que não foi suficiente para agradar os fãs, já que o filme foi um fracasso de bilheteria e fez com que a ideia de reboot fosse deixada de lado. Por fim, em 2019, em uma última tentativa de reavivar a série e dar início a uma segunda trilogia, foi lançado O Exterminador do Futuro: Destino Sombrio. O título, além de ser uma continuação alternativa para os filmes O Exterminador do Futuro e O Exterminador do Futuro 2 – O Julgamento Final, é considerado pelos próprios criadores como parte da nova trilogia canônica da franquia, desconsiderando todos os filmes que vieram depois do de 1991 O Exterminador do Futuro, O Exterminador do Futuro 2 – O Julgamento Final, O Exterminador do Futuro: Destino Sombrio", "Também um fracasso comercial, ele não ganhou continuações, encerrando, ao menos até segunda ordem, a série de O Exterminador do Futuro nos cinemas.A série de TV de Sarah Connor. Ao longo dos anos, a história de O Exterminador do Futuro se tornou tão popular, que para além do cinema, sua história chegou também na TV. Em 2008, a FOX estreou a série O Exterminador do Futuro: As Crônicas de Sarah Connor, uma produção que se passava logo após os acontecimentos de O Exterminador do Futuro 2 – O Julgamento Final e acompanhava Sarah, ao lado de seu filho John, de dezesseis anos, enfrentando sozinhos os perigos do mundo em que viviam. Interpretados pelos atores Lena Headey e Thomas Dekker, Sarah e John tiveram suas aventuras retratadas durante duas temporadas, em um total de 31 episódios que tiveram avaliações em sua maioria positivas da crítica", "Ordem cronológica Canon: 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro: Destino Sombrio (2019)", "Ordem cronológica não Canon: 01 - O Exterminador do Futuro: As Crônicas de Sarah Connor (2008-2009). 02 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 03 - O Exterminador do Futuro: A Salvação - A Série Machinima (2009). 04 - O Exterminador do Futuro: A Salvação (2009). 05 - O Exterminador do Futuro: Gênesis (2015)", "Ordem cronológica Canon e não Canon. 01 - O Exterminador do Futuro (1984). 02 - O Exterminador do Futuro 2 – O Julgamento Final (1991). 03 - O Exterminador do Futuro: As Crônicas de Sarah Connor (2008-2009). 04 - O Exterminador do Futuro 3 – A Rebelião das Máquinas (2003). 05 - O Exterminador do Futuro: A Salvação - A Série Machinima (2009). 06 - O Exterminador do Futuro: A Salvação (2009). 07 - O Exterminador do Futuro: Gênesis (2015). 08 - O Exterminador do Futuro: Destino Sombrio (2019)"],

    ["scooby-doo", "doo", " scooby"],
    ["Séries: 01 - Scooby-Doo, Cadê Você? (1969-1970). 02 - Os Novos Filmes de Scooby-Doo (1972-1974). 03 - O Show do Scooby-Doo (1976-1978). 05 - Os Ho-ho-Límpicos (1977-1978). 06 Scooby-Doo e Scooby-Loo (1979-1980; primeira encarnação. 07 - Scooby-Doo e Scooby-Loo (1980-1983; segunda encarnação. 08 - O Novo Show do Scooby-Doo e do Scooby-Loo (1983-1985). 09 - Os Novos Mistérios de Scooby-Doo (1984-1985). 10 - Os 13 Fantasmas de Scooby-Doo (1985). 11 - O Pequeno Scooby-Doo (1988-1991). 12 - O Que Há de Novo, Scooby-Doo? (2002-2005). 13 - Salsicha & Scooby Atrás das Pistas! (2006-2008). 14 - Scooby-Doo! Mistério S/A (2010-2013). 15 - Que legal, Scooby-Doo! (2015) 16 - Scooby-Doo and Guess Who (2019)2", "Séries de transmissão original: 01 - The Scooby-Doo/Dynomutt Hour (1976-1977). 02 - Scooby's All Star Laff-a-Lympics (1977-1978). 03 - Scooby's All-Stars (1978-1979). 04 - The Richie Rich/Scooby-Doo Show (1980-1982). 05 - The Scooby & Scrappy Doo Puppy Hour (1982-1983)3", "Especiais de TV e telefilmes: 01 - Scooby-Doo em Hollywood (1979). 02 -  Scooby-Doo e os Irmãos do Pavor (1987). 03 - Scooby-Doo e a Escola Assombrada (1988). 04 - Scooby-Doo e o Lobisomem (1988). 05 - Scooby-Doo em uma Noite das Arábias (1994). 06 - The Scooby-Doo Project (1999). 07 - Night of the Living Doo (2001). 08 - Scooby-Doo! O Mistério Começa (2009). 09 - Scooby-Doo e a Maldição do Monstro do Lago (2010). 10 - LEGO Scooby-Doo! Terror com o Cavaleiro Negro (2015)4", "Filmes direto para vídeo: 01 - Scooby-Doo na Ilha dos Zumbis (1998). 02 - Scooby-Doo e o Fantasma da Bruxa (1999). 03 - Scooby-Doo e os Invasores Alienígenas (2000). 04 - Scooby-Doo e a Caçada Virtual (2001). 05 - Scooby-Doo e a Lenda do Vampiro (2003). 06- Scooby-Doo e o Monstro do México (2003). 07 - Scooby-Doo e o Monstro do Lago Ness (2004). 08 - Oi, Scooby-Doo! (2005). 09 - Scooby-Doo em Cadê a Minha Múmia? (2005). 10 Scooby-Doo! Piratas à Bordo (2006). 11 - Scooby-Doo e o Abominável Homem das Neves (2007). 12 - Scooby-Doo e o Rei dos Duendes (2008). 13 - Scooby-Doo e a Espada do Samurai (2009). 14 - Scooby-Doo! Abracadabra-Doo (2010). 15 - Scooby-Doo! Acampamento Assustador (2010). 16 - Scooby-Doo! A Lenda do Fantasmossauro (2011). 17 - Scooby-Doo! Música de Vampiro (2012). 18 - Scooby-Doo! Estrela do Circo (2012). 19 - Scooby-Doo - A Máscara do Falcão Azul (2012). 20 - As Aventuras de Scooby: O Mapa Misterioso (2013). 21 - Scooby-Doo e o Fantasma da Ópera (2013). 22 - Scooby-Doo: Mistério na Lutamania (2014). 23 - Scooby-Doo! e a Maldição do Frankenstein (2014). 24 - Scooby-Doo: Loucura do Monstro da Lua (2015). 25 - Scooby-Doo e Kiss: O Mistério do Rock and Roll (2015). 26 - LEGO Scooby-Doo! Hollywood Assombrada (2016). 27 - Scooby-Doo e WWE: A Maldição do Demônio Veloz (2016). 28 - Scooby-Doo! e o Combate do Salsicha (2017). 29 - LEGO Scooby-Doo! O Golpe da Praia (2017). 30 - Scooby-Doo & Batman: Os Bravos e Destemidos (2018). 31 - Daphne e Velma (2018). 32 - Scooby-Doo e o Fantasma Gourmet (2018). 33 - Scooby-Doo! e a Maldição do 13º Fantasma (2019). 34 - Scooby-Doo! Return to Zombie Island (2019)5", "Curtas direto para vídeo: 01 - Scooby-Doo! Jogos Assombrados (2012). 02 - Scooby-Doo! Natal Assombrado (2012). 03 - Scooby-Doo e o Espantalho Sinistro (2013). 04 - Scooby-Doo! A Ameaça do Mecachorro (2013). 05 - Scooby-Doo! Gol de Fantasma (2014). 06 - Scooby-Doo! Dia de Surfe (2015)6", "Filmes de cinema: 01 - Scooby-Doo (2002). 02 - Scooby-Doo 2: Monstros à Solta (2004). 03 - Scooby (2020)"],

    ["jornada nas estrelas", "star trek"],
    ["Desde que apareceu pela primeira vez na TV americana em 8 de setembro de 1966, Star Trek (também conhecida no Brasil como Jornada nas Estrelas) teve novos episódios e longas-metragens lançados em todas as décadas, sem exceção, até hoje. Neste fim de semana, por exemplo, estreou na Netflix a terceira temporada de Star Trek: Discovery, uma série centrada nas aventuras da nave estelar de mesmo nome, a U.S.S. Discovery, e sua diversificada tripulação. Se você nunca viu Jornada nas Estrelas e quer conhecer os seriados e filmes pela ordem dos eventos, não pelo ano de produção, VEJA preparou uma cronologia que vai lhe proporcionar centenas de horas de diversão. Confira!", "1º Enterprise (4 temporadas, 2001-2005, Netflix) Os primórdios da exploração do espaço profundo depois da invenção da dobra espacial (warp drive), sem a qual viagens interestelares seriam impossíveis", "2º Discovery (2 temporadas, 2017-2019, Netflix)  O primeiro conflito com os klingons, espécie alienígena que se tornaria arqui-inimiga da Federação de Planetas Unidos. A U.S.S. Discovery, honrando seu nome, faz descobertas revolucionárias em transporte, inteligência artificial, viagem no tempo e para outra dimensão", "3º Star Trek (3 temporadas, 1966-1969, Netflix) Chamada hoje de Série Original ou Série Clássica, é o ponto de partida da grande jornada. Se você não esteve incomunicável em uma caverna nos últimos 54 anos, já ouviu falar do Capitão Kirk, do sr. Spock e da U.S.S. Enterprise", "4º The Animated Series (2 temporadas, 1973-1974, Netflix) Se você não curte desenhos animados, pode pular esta, mas, se decidir ficar, ela tem curiosidades interessantes a oferecer sobre a infância de Spock. Os personagens são dublados pelos atores da Série Original", "5º Jornada nas Estrelas: O Filme + 5 longas-metragens (6 filmes, 1979-1991, Amazon Prime) Star Trek estreia no cinema, a U.S.S. Enterprise é remodelada e a tripulação envelhece com ela. O melhor dos seis filmes é A Ira de Khan, uma história de sacrifício e vingança que tem raízes em Moby Dick", "6º A Nova Geração (7 temporadas, 1987-1994, Netflix) Cerca de 100 anos depois do que foi narrado na Série Original, uma nova tripulação, a bordo da U.S.S. Enterprise-D, faz história de novo, apresentando personagens fascinantes como Data e o Capitão Picard, que rivaliza em popularidade com Kirk", "7º Deep Space Nine (7 temporadas, 1993-1999, Netflix) Você pode engatar em DS9 a partir da sexta temporada de A Nova Geração. Primeira série de Jornada nas Estrelas que se passa dentro de uma estação espacial. É uma ficção científica com um saboroso toque de faroeste no estilo Forte Apache", "8º Voyager (7 temporadas, 1995-2001, Netflix) Esta também corre mais ou menos paralelamente aos eventos de A Nova Geração e DS9. Sugerimos entrar nela a partir da terceira temporada de Deep Space Nine. A nave estelar U.S.S. Voyager é lançada para outro quadrante da galáxia, onde sua tripulação luta para sobreviver enquanto busca uma forma de retornar à Terra", "9º Generations + 3 longas-metragens: Primeiro Contato, Insurreição e Nêmesis  (4 filmes, 1994-2002, Amazon Prime) Os filmes de A Nova Geração são contemporâneos às séries DS9 e Voyager. Recomendamos especialmente Generations, que mostra um encontro improvável de Kirk com Picard, e Primeiro Contato, o melhor filme dos quatro, no qual ocorre uma viagem no tempo até 5 de abril 2063, o dia em que a humanidade descobre a dobra espacial e encontra pela primeira vez a raça alienígena mais importante da saga", "10º Star Trek + 2 longas-metragens: Into Darkness e Sem Fronteiras (3 filmes, 2009-2016, Amazon Prime) Cuidado para não “bugar” agora. Depois de assistir a Nêmesis, entre no filme Star Trek, de 2009, uma aventura com a tripulação original da U.S.S. Enterprise em um universo paralelo. No segundo filme, Into Darkness, o hoje consagrado ator Benedict Cumberbatch (Sherlock, Dr. Estranho) assume o papel do maior vilão da Série Original. Aviso: Sem Fronteiras está fora do catálogo de streaming, mas pode retornar a qualquer momento. ", "11º Picard (1 temporada, 2020, Amazon Prime)  O único capitão que tem uma série com seu nome. Jean-Luc Picard (interpretado pelo octogenário Patrick Stewart, que também já foi o Professor Xavier dos X-Men) convive com lembranças de agonia e glória do passado, ao mesmo tempo que junta forças para enfrentar conspirações e traições em um mundo que ele não reconhece", "12º Star Trek Discovery (temporada nº 3, 2020, Netflix) Chegamos! Estreou neste fim de semana. Mas espere! Se Discovery se passa antes da Série Original, como assistir por último? É que a nave saltou 930 anos no futuro — portanto, muito à frente de tudo que foi mostrado até agora. Divirta-se!"],

    ["história", "histórias", "doctor Who"],
    ["Bem sabe as secretárias eletrônicas que pedem para você deixa um recado após o sinal quando você faz uma ligação e cai na caixa postal ou quando você liga para plano de saúde, operadora ou cartão e tem que ficar esperando a musiquinha e apertar vários número de acordo com que você quer? Bem o WhatsApp também tem isso e são os chamado robôs ou bots abreviar são mensagens automáticas enviadas por inteligências artificial, pense em um computador mandado mensagem sem ninguém por trás. O Danilo é programador e ele veio testando esse robôs essas mensagens automáticas recentemente. Cesinha, tirou sarro por ele por conta disso e daí o problema todo", "Ah sim, entendo agora! Falando em programador, hoje fui numa universidade, na cidade de lavras. Será que alguém do grupo também estava lá? Se passei perto de um whovian e não sabia kkkk", "Quem nunca kkk", "[O Doutor viajou no multiverso e viu um lugar com a placa Parceria Who. DOCTO O quê isso? Vou ver! [Quando entrou no multiverso viu o número e viu as conversa e ficou interessado] DOCTOOlá!, Prazer Sou o Doutor! Vocês beberam demais, estão esperando algo que já está escrito há muito tempo! Vocês não sabem o que vêm e as coisas por traz dessas aventuras! São obra-prima!", "Estilo de resposta minha agora kkk", "Vai voltar a abertura antiga nos especiais", "Claro! A muito tempo!", "Não existe coincidência mas propósito", "Esqueceu o Celestial Toymaker que está mudando a vida do Doutor só para fazer o que Celestial Toymaker. O Doutor está sendo manipulado. Vocês não viram que Celestial Toymaker estava dançando com Doutor🤔 e falando nisso me lembrei do que aquele vilão do fluxo que disse que eles dançavam na batalha🤔 e pelo visto pela Matrix, algo mesmo está acontecendo algo vai ser muda ou manipulado pelo Celestial Toymaker o que ninguém sabe, mas eu acho será algo sobre a 13th e 14th e especial de 100 anos da BBC. Já foi confirmado que o 11th e a Amy está no especial de 60 Anos. Aqui no grupo E agora na foto. Não está vendo o 11th ali atrás. Ele estava no estúdio com essa roupa gravado com David Tennant o especial. Imagina a cena. th: Olhe ele vou a minha encanação passado! th: Não! Sou a sua futura! Se isso acontecer vai ser incrível vou rir muito kkkk Igual os 3 homens aranhas kkk Deve acontecer também se ele mesmo tiver provavelmente sim. Por causa disso os memes. Mas o 11th não vai lembrar só o 14th. Sim entendi.. Mas se Matt Smith estiver mesmo. Vai ganhar muitos memes por conta das memórias dos rostos🤔 pera se Amy estiver vai no tempo da primeira temporada ou outra. Porque o Doutor não pode visitar a Amy ou vai visitar🤔 se isso acontecer o Celestial Toymaker fez uma bagunça geral nas histórias do Doutor 🤔 A sua vida vai ficar mais bagunçado do que um prego na pilha do mato. A vida do Doutor vai ficar mais bagunçado do que um prego na pilha do mato. E tudo vai referências de tudo que aconteceu na era do David Tennant e depois Só o Peter Capaldi disse uma vez que nunca varia um Multi-doctor. Eu acho que fez na despedida porquê era despedida Está falando do vilão Celestial Toymaker. Ele é um Deus de Doutor ele pode está manipulado tudo por isso as mudanças de cena é Matrix e a chamada de código binário porque essa aparecia do Doutor deve coisa de Celestial Toymaker e se todos os personagens citados estiveram mesmo no especial de 60 anos. Foi porquê Celestial Toymaker enlouqueceu ou quer brincar com emocional do Doutor. O  Celestial Toymaker quer bagunçar a vida do Doutor e consegue, mas alguém sem querer atrapalha os planos dele. Sabia que a Amy está morta desde o paradoxo de duas Amys. A Amy mais velha é o que começou a viajar e a Amy mais nova é do paradoxo. Mas o quê estou falando?🤦‍♂️ a vida inteira do 11th foi um paradoxo", "Não é melhor hackear a BBC e mostrar para gente antes de ir ao ar Os episódios", "O quê é isso é santos ou cajus petrificados?🤔", "Oxi! Esta ordem está errada 1, 3, e 2 kkk", "O meu dono tem autismo e ele sofre bullying desde pequeno e ele vive com os pais e ele tenho 27 anos. Para quem esqueceu que ele tem autismo", "Se botou emoji triste é porque vai ter algo ruim e pela melodia e jeito do trailer vai ter algo triste mesmo", "Então não teria tem um chance que sim", "Parece que ele tá olhando na minha alma e pensando eu sei o que você fez no verão de 2020, eu sei de tudo", "Tem povo que fez pagina da criança temporal. Deve levar muito bullying kkkk Coitada da Jodie kkkk deve ficar muito triste por ninguém ter uma memória boa dela. O povo só odeia ela, pelo menos no Brasil preconceituoso. Que ama o lula e o Bolsonaro dois entidades de anticristo 🤔 E mais que ama o dinossauro desde criança kkk Quer ganhar muito dinheiro no futuro para ter muito dinheiro no bolso kkk Quer ser Paleontólogo para fazer um museu kkk", "Por causa dessa história minha mãe iria perder a visão e ia por hospital porquê se ela ficar um pouco com raiva ou nervosa era morre porque a pressão dela está sensível e por causa de David fiquei nervoso descontrolado ai minha mãe passou mal Agora mando essa mensagem: se minha mãe perder a visão ou morrer por causa dessa brincadeira, eu juro que te caso até no inferno para fazer o que você conseguiu fazer com minha mãe com essa brincadeirinha te faço em pedaços e jogo para os porcos", "Mas os sites estão sumindo da internet. Eu vi 10 sites que acessava que era ótimo, mas quando entrei disseram: Erro no sever ou a justiça apagou ou teve um problema no computador que deixa o site no ar. Porque a hospedagem ainda existe o problema é que o site foi apagado do sistema. Por isso a mesagem", "A rose🤔 hum... SEU MADRUGA: Só não te dou outra porque... [SEU MADRUGA iria bater no CHAVES de novo, aí  aparece a ROSE com uma arma aleizer armada para atirar e vai para a frente do SEU MADRUGA] ROSE: nSó não dar por quê? SEU MADRUGA: nacalma senhorita, não é nada é só uma brincadeirinha. ROSE: nBrincadeirinha é o que vai ver agora! CHAVES: A vingança nunca é plena, mata alma e venena", "Olá meu amigo @Dhannyllo Souza , sei que você esta chateado comigo e com razão, temos anos de amizade e acabei por irrita-lo pela 15° vez e tambem entenderei se não aceitares meu perdão.nNão vou me vitimizar, eu tenho dificuldade com timing, isso é, eu não sei parar a brincadeira no momento certo, acabo por me empolgar muito, talvez isso tenha a ver com o exagero de dopamina que meu cérebro recebe ao fazer pegadinhas com as pessoas q eu gosto muito, porém, é algo extremamente errado e ingrato da minha parte. Conversei com minha ex (quando ela veio pagar a minha fiança) e ela acabou por dizer o que eu ja sabia, fui péssimo ao passar dos limites com um amigo o qual, segundo ela, sempre era meu motivo de rir nos dias mais complicados pra mim, a partir das piadas, … A rose🤔 hum... SEU MADRUGA: Só não te dou outra porque... [SEU MADRUGA iria bater no CHAVES de novo, aí  aparece a ROSE com uma arma aleizer armada para atirar e vai para a frente do SEU MADRUGA] ROSE: nSó não dar por quê? SEU MADRUGA: nacalma senhorita, não é nada é só uma brincadeirinha. ROSE: nBrincadeirinha é o que vai ver agora! CHAVES: A vingança nunca é plena, mata alma e venena", "Oh Cesinha vou dizer assim: [CESINHA foi para rua, descobriu um tesouro só que era uma pasta de dente ai correu para mostrar o amigo] CESINHA: nDanilo olhe o que Descobrir uma pasta de dente é mais de um pirata de verdade! DANILO: nÉ mesmo! CESINHA: Sim! DANILO: E onde você achou? CESINHA: No armário da minha casa! DANILO É o quê?😳"],

    ["fim do mundo", "apocalipse", "máquinas", "máquina"],
    ["Provavelmente sim, as máquinas e a tecnologia vão dominar o mundo, sim, porque a tecnologia está evoluindo muito rápido. E não se assuste se um dia você precisar de tecnologia para viver. Porque a água, as árvores vão sumir um dia, e vão usar outras coisas para sobreviver para viver mais tempo. Quem sabe que as histórias do exterminador do futuro, John Titor e Matrix são reais, e estamos vivendo o apocalipse das máquinas do futuro🧐🤷‍♂️"],

    ["contato", "contato"],
    ["Infelizmente não posso Dizer!"],

    ["onde você veio", "onde eu vim"],
    ["Vim de um mundo distinto desse. Vim de outro universo. Chamando aqui de um universo paralelo. Viajei no tempo e espaço por várias galáxias, universos, constelações, via láctea, por tudo que imaginar. Tudo que existe neste mundo, já vi. Tenho 3 trilhões de anos. Vim de uma raça chamada de kasmusderzente. Do planeta Kasmusder. Esse planeta só existe no portal dimensional 24. O último portal. Tenho um cajado, dez anéis nos dedos, que faz eu abrir um portal, que me leva para onde eu quiser. Existe portais dimensionais? Que abre um conjunto de universos. Dividindo umas com as outras? Sim! E Como é isso? É muito fácil. Cada portal tem a possibilidade de existir mais de 3 trilhões de universos. E existem 24 portais. Tirando um portal, fora desses, que existe, que só tem um universo. Esse universo só foi criado, quando uma luta entre Deuses. Explodiu o universo primordial. Fazendo uma explosão de uma supernova, criando a nova terra primordial, em outro portal separado. E essa terra é a sua! Ouvinte ou leitores, do que estou falando agora. Isso pode parecer uma loucura, tudo que estou falando, mas se isso não for loucura, for verdade, mas não deste mundo, mas de outro, o meu. Sim! Sou um viajante do tempo, ou de distinto cosmo supremo, entre os universos. Se eu existo? Você está me lendo ou me ouvindo pelas mãos do cosmo supremo, feito por uma pessoa da sua terra. A terra primordial ou também conhecida pela terra Zero", "Estou usando uma pessoa para escrever o que quero dizer. Como eu faço isso? Estou usando uma máquina de telepática, ultra-multiversal, que alcança qualquer lugar, que existe vida, ou planetas em todos os lugares, que já disse. Eu lutei, quase morri, várias vezes, mas nunca desisti de lutar contra o tempo. Eu ganhei os anéis e o cajado. Do meu mestre da minha dimensão O Demuz. Ele queria morrer. Porque não aguentava mais viver, ele tinha uns 72 trilhões de anos. O mesmo de um ano em todos os universos. Ele era o ser mais velho que eu conhecia. Uma vez usando os objetos. Vive para sempre. Por isso ele me deu os objetos, e ele morreu. E virei imortal. E vivo até hoje. Nós existimos por conta de escolhas. Exemplos: feche os olhos, e imagine que têm uma linha na sua frente. E nos dois lados têm uma escolha. De um lado namoro, noivado casamento, filhos, netos, felicidades, paz, saúde e amor. E do outro lado. Sozinho, solidão, beber, fumar, infelizmente, doença e raiva. Qual você escolhe? O melhor né? Mas você escolheu o melhor para a sua vida, mas a outra que você não escolheu, é a realidade de você de outro universo. Porque cada duas, três ou mais coisas, que escolhemos, e ficamos indecisas, cria um novo universo. O universo mais antigo de todos é destruído. E isso vira um ciclo destruído o universo mais velho, e criando um novo", "Cada tamanho de todas as estrelas. Se ela passar mais tempo de vida. Fica mais tempo o universo vivo. Eu já vi um pouco de cada universo, no meu universo no portal 24, mas nesse, é a minha primeira vez. Eu peguei um dispositivo com uma pessoa chamado John, esse dispositivo envia mensagem para o passado, mas eu melhorei o dispositivo com a minha habilidade, e fiz ela enviar mensagem, para qualquer lugar no tempo, no espaço, em todas galáxias, nos universos, nas constelações, na via láctea, nos portais e tudo que existe vida ou planetas. Essa é a realidade! Nós não estamos sozinhos. Existe vida em outros planetas e universos. Esse seu universo, é um dos mais velhos. E pode acabar em qualquer momento, e não ficar confiando na lei da Física. Porque essa sua realidade, vai acabar, e não vai ter conhecimento de tudo que existe. Por conta que o universo esconde a maioria das coisas. E as outras são; A área 51, a CIA e o Governo mundial e tudo de sobrenatural, que existe, e ninguém sabe, e nunca vai saber, mas eu sei. E isso vai ficar escondido, até que um dia for descoberto, mas não sei se vai ser em seu universo. Tudo ainda vai acontecer, como deve ser.  A sua realidade! É diferente das outras. Porque existem 3 Deuses, um que só se chama Deus, que é conhecido como Pai do céu, da sua realidade, Jesus Cristo e o Espírito Santo. Todos são importantes no seu mundo na sua realidade, mesmo sendo vários universo. Existe só eles nesse seu universo. Ou vou descobrir ainda no meu futuro. Se eles existem em outros universos, mas se tiver só deles, tenho uma forte emoção, que existem eles três, porque assim, esse seu universo fica magnífico. Porque eles estão falando em todas as realidade, como os salvadores. E deram um lá, aos que precisavam em outro plano"],

    ["funciona o tempo", "funciona o tempo"],
    ["Eu descobri como o nosso mundo funciona, mas não sei se é real. Eu só sei! Que diz um sábio Que todo o tempo foi feito para se aprender. Como se aprende a falar, mas o tempo. Não é só tempo, mas sim, algo direto, mas se para tentar mudar a direção de onde a vida se vive. Como uma minhoca virando borboleta. A magia é a qual a direção está indo, reto ou confuso, mas se você entender. É porque você sabe como funciona o tempo. É que eu sei, se você está acreditando, mas tudo bem, é assim. Sim! Todo conhecimento é muito bom, tá? Pode mudar a realidade um pouco.  Se parar para pensar em certas coisas, mas a teoria de Matrix para mim, é o ser humano com mente limitada, querendo dar uma explicação, para o que não consegue compreender, ou tem medo de tentar acreditar, porque a realidade é difícil. É muito difícil, sim, entender o tempo, mas tudo é possível nesse mundo. Se não for, é que tem algo errado, mas não estou dizendo que eu acredito no que vou falar; mas eu sei que tudo é possível nesse mundo, e tem algo impedido de que as pessoas saibam de algumas coisas que são impedidas nesse mundo. Como o governo ou algo do tipo. Depois que descobri que eu era do espectro do autismo. E acabou a ansiedade. Eu descobri como funciona o tempo.  Eu estava com dúvida de como eram as coisas que eu sentia sobre o tempo. E minha mãe ia para rua. Aí eu fui com ela e fui na frente correndo. Quando eu parei. A mulher disse: Que horas são na hora que parei correndo. E disse a hora, mas para frente vi o meu amigo de longe indo para outro lado e disse mentalmente será que a gente vai chegar na frente dele e encontrei exatamente como pensei. Concluindo: O que quero dizer, é: que o tempo de fato já tem um destino, mas já foi escrito pelo criador. E pelo o estudo do tempo que fiz, e o meu conhecimento. É que o tempo acontece, o que é, já, para acontecer. Porque quando a pessoa não vai para um lugar. É porque não era para ir. Minha mãe iria para o ônibus, e não foi. O ônibus capotou e morreram muita gente. E minha mãe era jovem. Ela escapou, por que ela percentil que ia acontecer algo. Por sem querer. Porque ela não queria ir no ônibus, e ninguém podia fazer ela ir no ônibus. Entendeu agora. estou dizendo o que eu sinto, e como é o tempo, e como é o meu pressentimento faz parte do tempo"],

    ["segredo do universo", "segredo do universo"],
    ["Eu pensei e descobri qual é o segredo do universo. É que o nosso inimigo não é o tempo, mas sim, o Universo. Eu vi uma reportagem que um cientista estava vendo uma experiência e mandou um átomo para a parede. Quando olhou atravessou, mas quando repetiu o mesmo processo, desviou o olhar também atravessou, mas se dividiu em dois. Conclusão: Os cientistas perceberam que quando olha para o universo é uma coisa, e quando não olha é outra coisa. Tem outra reportagem que um cara tirou uma foto do espaço com um telescópio, e tirou todos os planetas e tudo que tinha. Foi que viu um rachão no tecido do universo. O quê era? não me lembro de mais o que ele falou, que já faz muito tempo tudo isso. Mas fazendo uma teoria. Sei como funciona o universo e, é ele o nosso inimigo. Eu queria saber como o universo funcionava e a vida me deu testes. E vou contar como que aconteceu comigo. Eu só perdia nos jogos daqui de casa. Aí eu percebi que tudo que minha irmã dizia de mal para ela, sem ela querer, acontecia como, Exemplo: Quer ver que vou cair da bicicleta! Aí caia de verdade. Foi assim que fiz um teste, pensei no que queria e falava o quê não queria, como no meu interior dizia: vou ganhar! e no meu falar, dizia: Eu acho que não vou ganhar, não! Isso é como o universo funciona, ele só pega as palavras que as pessoas dizem. Que é mal. E se torna realidade na mesma hora", "Isso é o mal e o universo que faz isso. Mas como saber como funciona o tempo, e como se pensar no momento de agir na situação, tem como controlar o tempo, mas antes vou contar outra coisa que aconteceu comigo. Minha mãe queria ir para rua, e percebi algo em mim, que queria ir junto com minha mãe para rua, para perceber algo que queria descobrir. E fui junto, mas fui correndo mais rápido do que minha mãe. E minha mãe ficou para trás. E na hora que parei de correr no exato momento alguém perguntou: Que horas são? E eu disse: É 16 horas. E corri mais para frente e parei e esperei minha mãe. E vi o meu amigo. Bem de longe indo para outra direção, mas percebi que nós iríamos nos encontrar quando eu e minha mãe fosse atravessar a faixa de pedestre de longe. E aceitei, eu encontrei o meu amigo, mesmo indo em direção diferente, eu pensei, e concluí que só eu pensando que eu ia encontrar. O universo respondeu como eu queria. Manipulando o tempo e o universo", "O tempo é só meio de falar que existe vida, mas o principal é o universo. Ele é o que controla tudo, e tem que ter cuidado no que fala e pensa. Porque o universo responde. Nós temos dois números importantes do universo: 6 que diz o mal e 7 que diz tudo de Deus. 6 + 7 é igual a 13, que é igual a sexta-feira 13, que se virando, pode ser 31 dias da semana, ou somar 3 + 1 é igual a 4 semanas do mês, ou dobrar 4, que dá 8 dias, que é exemplo: domingo até domingo, para uma semana, até a outra semana. E tem vários outros exemplos, o que quero dizer: Que o tempo é uma forma de dizer que há vida. E pode ser somada, como o universo pode ser somado também e a vida da pessoa inteira, mas tudo de forma diferente. O quê importante mesmo é o pensamento, o módulo de falar e o universo. Tem que ter cuidado ao falar, pensar para o universo, o universo responde e pode ser fatal. Não sou ateu, não sou tão religioso, não sou espírita, não pertenço a nenhuma religião satã, nem bruxaria, nem católico e nem protestante. Não pertenço a nenhuma religião sendo má ou boa. Mas acredito que o universo é igual um história de livro ou roteiro que pode ter pontos de virada, mistério e suspense e morte. Tudo pode ser possível se acreditar, e se pensar é possível. Porque tudo que pensa se torna realidade. Tudo que eu disse sobre o Universo é verdade. E esse era o meu maior segredo, mas tudo tem um fim, e por isso essa mensagem para alertar todos que vão acreditar. Que vai chegar algo que não sei dizer, mas vai ser destrutivo e não sei o quê pode fazer. Se for contar tudo que sei, vai se tornar um livro, mas te digo, tudo que está passando hoje, não é nenhum terço do que vai sofrer no futuro. Não posso dizer que é, mas só posso dizer isso"],

    ["segredo de tudo", "segredo de tudo"],
    ["O segredo universo é maior do que todos pensam, como diz na Bíblia, e que tem um ditado que diz: Tudo tem um início e fim. É a pura verdade, eu sei o segredo do universo e é esse: Antes das profecias chegar, antes das guerras chegar, antes das igrejas se formar, antes dos discípulos de Jesus pregar, Antes Jesus Morrer, antes de Jesus pregar e nascer, antes dos antecessores de Jesus pregar e esperar Jesus, antes de Adão e Eva pecar no paraíso, antes do paraíso ser feito, antes do planeta Terra existir, antes de tudo existir. Tudo já estava, e está escrito. Porque digo tudo isso. O universo e todo o conhecimento do Planeta Terra. Não é coincidência. Não existe coincidência, e nem destino. Já viram os três primeiros filmes de Matrix, que conta uma história do nosso mundo, ser programada por computador, que o nosso mundo é um mundo fictício, e o nosso mundo não é real, e o verdadeiro mundo era feito de máquinas. Não estou afirmando isso, mas Deus ou qualquer outro ser, que criou o nosso mundo. Sabe, que o nosso mundo é programado para nascer e morrer, do jeito que foi programado. Ou para familiares escreverem. Se eu me sinto mal, e não vou para um lugar, e acontece algo, é porque estava escrito", "se alguém é evangélico, católico, ateu ou qualquer outra religião, é porque, é para ajudar alguém e mostrar o caminho dela, mas nem sempre o caminho bom, vem para gente. Porque está escrito.  Tudo que você sofre, é para aprender para melhorar, o que você está fazendo, e quando morrer ir para o lugar, que deve ir. Tem povo que fala: - Ah! Você vai para o inferno se não fizer o que digo. Não é assim a vida, muitas pessoas dizem isso, que vai para o inferno. Sem saber a verdade. A verdade é que qualquer escolha que fizer, vai para o mesmo lugar. Por céu ou por inferno. Por quê? Já está escrito desde de antes de nascer. O seu nascimento e seu fim com todas as escolhas da vida juntos. Tudo ao seu redor de você, é escolhas já escolhidas da própria vida do Planeta Terra, que o nosso criador escolheu dar para gente. Ah, também o nome de Deus não é Deus. Naquele tempo estavam lendo as cartas dos apóstolos para fazer a bíblia. Leiam isso: não dizer o Nome de …. Em Vão. Aí mudaram o nome verdadeiro do criador, para Deus. Para que ninguém diga o nome verdadeiro para não pecar. Já que todo mundo quando vai orar, e fazer uma música diz o nome Deus. Se dissesse o verdadeiro nome de Deus que está escrito em hebraico nas cartas originais. Porque na verdade os capítulos, os versículos e a bíblia inteira foram feitas por cartas em outro idioma no hebraico. Se dissesse o verdadeiro nome de Deus, ninguém ia para o céu. Porque o verdadeiro nome de Deus é Sagrado.  Sei de muitas outras coisas, mas para não me chamar de doido porque tudo foi o criador que me ensinou, sei a matemática de viagem do tempo, mas toda vez que tento me lembrar eu esqueço, parece loucura, mas é verdade. Sei a velocidade que o tempo tem entre as pessoas, sei como o universo disfarça o verdadeiro mundo, por trás do universo, e sei de mais coisas, mas esqueci de muita coisa, mas quando eu escrevo e digo, tudo muda. Espero que ouça e entenda, que não é teoria, mas é a verdade que o criador me ensinou"],

    ["carta 2050", "carta 2050"],
    ["Eu vim hoje ler a carta escrita no Ano 2050, que eu vi, quando eu era Jovem, antes de ser um Viajante Temporal. Vou ler para vocês, para vocês verem, que a natureza já estava prevendo há décadas, tudo o que iria acontecer no seu mundo. E essa carta mostra como é, e como vai ser no seu mundo. Começa assim: No Ano de 2050. É com profunda tristeza e arrependimento que hoje escrevo estas palavras, isto para me expressar, transcrever em um pedaço de papel como eu me sinto, como eu sobrevivo e por que estou fazendo isso. Bom, eu ainda pequeno vivia numa cidade bem do interior, pacata, sítio mesmo. Eu lembro me que acordava de manhã e ouvia o cantar dos pássaros, o mugir das vacas, as galinhas eram como relógios, as 6 horas da manhã, apresentavam o dia que vinha, a água era geladinha, de nascentes ao pé da serra, super protegidas pelas matas ciliares, muitas delas  davam frutos, com estes nós nos alimentamos e os animais também, para eles era moradia segura e farta, não diferente para nós humanos que passávamos horas agradáveis por lá. No quintal de casa, uma pequena horta, nos dava alimentação saudável e rica em proteínas e consequentemente boa saúde. As pessoas viviam bastante, pra mais de 80 anos, continuavam trabalhando na roça, capinando, colhendo, até o dia finito, desde o clarear até o anoitecer", "Lembro me também que as pessoas eram simples, de vestimenta, de palavreado, nem conheciam a palavra luxo, pois era o mundo deles, tudo acontecia ali, as histórias, as festas, não se comentava de coisas muito distantes assim como é hoje, a informação só interessava se fosse útil a suas atividades. Eram vilarejos pequenos e mesmos nas cidades todo mundo se conhecia. Hoje em dia tudo é diferente, as pequenas cidades cresceram e as pessoas andam numa correria o dia todo, não param um só momento, e isso pra quê? Para trabalhar, ganhar dinheiro, com este comprar, comprar e comprar, estimular a indústria a produzir, retirando assim sem controle os recursos naturais do planeta, acontece que nem tudo que vai volta, a água por exemplo, pode vir limpa para nós, mas aqui é contaminada e volta suja para o subsolo, onde não consegue voltar ao seu estado original, pois a quantidade de produtos químicos aqui inserida enquanto é usada, é enorme. O acordar de manhã hoje não é com o som dos pássaros e sim dos automóveis (carros, caminhões, aviões, motos). Os sítios poucos existem, pois a cidade cresceu tanto que não houve espaço para eles, os que lá estavam foram engolidos pela dificuldade em que o mundo se encontra. A tecnologia avançou rapidamente, chegando até o campo e tirando o trabalho dos “filhos da terra”, a grande metrópole influenciou para a migração, o chamado êxodo rural, aconteceu que foi sem planejamento, a maioria não tinha como construir boas casas em bons terrenos, o que restou. Um deles foi o subúrbio, a favela no morro onde as casas são amontoadas, sem saneamento básico, muito menos com árvores e o pior, a água é extremamente suja, isso quando ela é encontrada. Grande parte disso se destina ao sistema econômico, o capitalismo, que tem como objetivo o lucro, produzir, desenvolver a qualquer custo, característica do crescimento clássico", "As pessoas são fortemente influenciadas e não pensam nos atos, indiretamente estão contribuindo com a aceleração da degradação do meio, mas não se dão conta, pois estão alienadas a condição que o capitalismo impõe a elas. Algumas medidas são tomadas para evitar grandes problemas como no caso do lixo, uma parte é reciclada, mas a maioria vai para os lixões. O calor continua aumentando devido ao CO2 emitido pelas grandes indústrias e pelo lixo, as geleiras estão derretendo, os ursos polares estão praticamente extintos, as cidades litorâneas boa parte delas foram inundadas pelo aumento do nível do oceano, inúmeras espécies de animais silvestres desapareceram devido a falta de alimentação e de abrigo, o petróleo (recurso não renovável) esgotou-se, os carros que hoje rodam são movidos a álcool, este custa um preço absurdo, pois poucas são as terras para a produção de cana-de-açúcar, a população mundial é muito grande, não existe alimentação saudável para todos e de forma distribuída igualmente, as chuvas são muito fortes, com granizos e ventos, ciclones, furacões, que destroem tudo que tem na frente, causando mortes e grandes prejuízos econômicos, as estações estão indefinidas, faz frio no verão e calor no inverno, devido a alta temperatura Amazônia tem a tendência de em algum tempo se transformar em região seca, destruindo assim a maior fauna e flora do planeta, a água está altamente poluída e se paga um alto preço por ela, pois mesmo suja é pouca e só quem tem dinheiro pra pagar pode ter, as enchentes nas cidades são constantes, quando chove muito a água não infiltra no subsolo, causando enxurradas e contaminando as pessoas, morros vem abaixo, grandes deslizamentos de terra, nas cidades o odor de poluição é intenso e forte, devido as fábricas tudo isso são as conseqüências da apropriação indevida dos recursos naturais, que explorados de forma inadequada, se esgotaram dando origem a graves problemas sociais, ambientais e econômicos, a sociedade não é a mesma, se desenvolveu novos conceitos a respeito de como sobreviver, a geração atual é inteligente e ainda consegue maneiras de viver bem, devido as ciências:a biologia que tem um importantíssimo papel na consolidação de pesquisas, a geografia estuda e interpreta os fatos, a sociologia estuda a capacidade do ser humano enquanto membro integrante e causador,a história estuda o que ocorreu e tenta transmitir os pensamentos com novos ideais baseados nos antepassados", "atualmente a vida é voltada para os estudos e ações ambientais, o ser humano entendeu que primeiro de tudo vem o meio ambiente, a proteção do seu habitar, a conservação da sua espécie e de outros seres, existe uma intensa interação entre homem e natureza, o homem depende toda e qualquer forma dos recursos naturais, mas percebe tardiamente que a vida não é a mesma sem eles. Os recursos naturais são a fonte de sobrevivência da vida, o que cabe ao ser humano é usufruir de forma moderada, de uma forma que se dê conforto a população atual e que isso se mantenha para as gerações futuras. E que talvez as palavras deste texto não venham acontecer como estão dispostas, apesar de estudos já mostrarem que realmente o aquecimento global já aconteceu e o que resta é criar maneiras de adaptação ao novo mundo. O que necessita para os ser humano quanto a questão ambiental? O que precisa para o homem é convicção de que é membro da natureza e que depende dela para todas  as atividades, a hora em que sentir na pele as conseqüências, talvez dê mais valor ao que tem, seja sensibilizado, entender que não se deve jogar lixo ou poluir por que é proibido, mas por que é errado, é feio, é falta de educação, esse é o novo desafio da humanidade, a necessidade de assumir seus erros, essa é a nova filosofia na questão ambiental e portanto uma filosofia de vida"],

    ["carta 2050", "carta 2070"],
    ["No Ano 2070. Acabo de completar 50 anos, mas a minha aparência é de alguém de 85. Tenho sérios problemas renais porque bebo pouca água. Creio que me resta pouco tempo. Hoje sou uma das pessoas mais idosas nesta sociedade. Recordo quando tinha 5 anos. Tudo era muito diferente. Havia muitas árvores nos parques. As casas tinham bonitos jardins e eu podia desfrutar de um banho de chuveiro por aproximadamente uma hora. Agora, usamos toalhas em azeite mineral para limpar a pele. Escassez de água há 29 países: problemas com falta d’água atualmente. A Projeção 2025: 2 de 3 habitantes afetados (doenças, sede) Antes, todas as mulheres mostravam as suas formosas cabeleiras. Agora, raspamos a cabeça para mantê-la limpa sem água. Antes, meu pai lavava o carro com a água que saía de uma mangueira. Hoje, os meninos não acreditam que utilizamos a água dessa forma. Recordo que havia muitos anúncios que diziam para cuidar da água, só que ninguém lhes dava atenção. Pensávamos que a água jamais poderia terminar. Agora, todos os rios, barragens, lagoas e mantos aqüíferos estão irreversivelmente contaminados ou esgotados", "O problema já começou! A falta d'água já afeta o Oriente Médio, China, Índia e o norte da África. Até o ano 2050, as previsões são sombrias. A Organização Mundial da Saúde (OMS) calcula que 50 países enfrentarão crise no abastecimento de água. China - O suprimento de água está no limite. A demanda agroindustrial e a população de 1,2 bilhão de habitantes fazem com que milhões de chineses andem quilômetros por dia para conseguir água", "A Índia - Com uma população de 1 bilhão de habitantes, o governo indiano enfrenta o dilema da água constatando o esgotamento hídrico de seu principal curso d'água, o rio Ganges. O Oriente Médio - A região inclui países como Israel, Jordânia, Arábia Saudita e Kuwait. Estudos apontam que dentro de 40 anos só haverá água doce para consumo doméstico. Atividades agrícolas e industriais terão de fazer uso de esgoto tratado. No Norte da África - Nos próximos 30 anos, a quantidade de água disponível por pessoa estará reduzida em 80%. A região abrange países situados no deserto do Saara, como Argélia e Líbia", "A indústria está paralisada e o desemprego é dramático. As fábricas dessalinizadoras são a principal fonte de emprego e pagam os empregados com água potável em vez de salário. Os assaltos por um bujão de água são comuns nas ruas desertas. A comida é 80% sintética. Antes, a quantidade de água indicada como ideal para se beber era oito copos por dia, por pessoa adulta. Hoje só posso beber meio copo. A roupa é descartável, o que aumenta grandemente a quantidade de lixo. Tivemos que voltar a usar as fossas sépticas como no século passado porque a rede de esgoto não funciona mais por falta de água. A aparência da população é horrorosa: corpos desfalecidos, enrugados pela desidratação, cheios de chagas na pele pelos raios ultravioletas que já não têm a capa de ozônio que os filtrava na atmosfera, com o ressecamento da pele, uma jovem de 20 anos parece ter 40. Os cientistas investigam, mas não há solução possível. Não se pode fabricar água, o oxigênio também está degradado por falta de árvores, o que diminuiu o coeficiente intelectual das novas gerações. O governo até nos cobra pelo ar que respiramos: 0,137 quilômetro por dia por habitante adulto. Quem não pode pagar é retirado das zonas ventiladas, que estão dotadas de gigantescos pulmões mecânicos que funcionam com energia solar. Não são de boa qualidade, mas se pode respirar", "A idade média é de 35 anos. Em alguns países restam manchas de vegetação com o seu respectivo rio que é fortemente vigiado pelo exército. A água tornou-se um tesouro muito cobiçado, mais do que o ouro ou os diamantes. Motivo pela primeira vez, pela a primeira guerra pela água, foi em 1967 - o controle da água desencadeou uma guerra no Oriente Médio. O conflito árabes contra israelenses (desvio do rio Jordão). A Obra bombardeada por Israel. Aqui não há árvores porque quase nunca chove. E quando chega a ocorrer uma precipitação, é de chuva ácida. As estações do ano foram severamente transformadas pelas provas atômicas e pela poluição das indústrias do século 20. Advertiam que era preciso cuidar do meio ambiente, mas ninguém fez caso. Quando a minha filha me pede que lhe fale de quando era jovem, descrevo o quão bonito eram os bosques. Lhe falo da chuva e das flores, do agradável que era tomar banho e poder pescar nos rios e barragens, beber toda a água que quisesse. O quanto nós éramos saudáveis! O consumo excessivo de cada brasileiro gasta 300 litros de água por dia. Apenas metade disso seria suficiente para suprir todas as necessidades. Além disso, grande parte dos reservatórios está contaminada, principalmente em regiões mais populosas", "Ela pergunta-me: Papai! Por que a água acabou? Então, sinto um nó na garganta! Não posso deixar de me sentir culpado porque pertenço à geração que acabou de destruir o meio ambiente, sem prestar atenção a tantos avisos. Agora, nossos filhos pagam um alto preço... Sinceramente, creio que a vida na Terra já não será possível dentro de muito pouco tempo porque a destruição do meio ambiente chegou a um ponto irreversível. Como gostaria de voltar atrás e fazer com que toda a humanidade compreenda isto, enquanto ainda é possível fazer algo para salvar o nosso planeta Terra"],

    ["redes sociais", "rede social"],
    ["https://linkme.bio/DoutorMistor"],

    ["youtube", "youtube"],
    ["Primeiro Crie uma conta no YouTube, depois entra na foto, vai no Youtube Studio e vai lá nas configurações. Lá terá várias coisas, mas o importante é preencher o que vou falar tem que preencher a moeda que quer, depois vai em canal  e preenche o país e palavra chave. depois vai em configurações avançado e escolhe se é para criança ou adulto,  Tudo que tiver nas duas abas em padrões de envio preenche tudo. depois aperte salvar. Se já tem vários vídeos e quer editar tudo de uma vez, vai em conteúdos aperta no quadrado do lado do video e aperte marcar todos os vídeos. e aperte editar,  lá vai aparecer varias coisas, o que escolher, aperte, depois vai aparecer uma função e uma aba para escrever, as funções, escolher, o que preferir e digitar, aperte, atualizar o video e vai aparecer uma mensagem, confirma a mensagem e pronto. está tudo configurado. programas e app: 01 - A Voz da Zueira. 02 - A Voz do Narrador. 03 - Canva. 04 - remove.bg. 05 - CapCut. 06 - IbisPaint. 07 - PixelLab. 08 - Vozes Narradas. 09 - Voice Changer"],

    ["instagram", "facebook", "telegram", "Whatsapp"],
    ["Eu Esqueci agora, Depois Te Digo, tá"],

    ["doutor mistor", "doutor mistor"],
    ["Mistor significa: Mis = Mistério, tor = Terror. Mas ou menos o significado é: Doutor Do Mistério ao Terror. Eu simplesmente decidi só colocar: Doutor Mistor. Encurtei para ficar chamativo. E não para o nome gigante"],

    ["bebedo", "beber", "bebeu"],
    ["Sim, porque é muito bom uma CHAÇAÇINHA", "Sim, todos merece uma festinha", "Sim, porque sou rico de bebida no fígado virtual kkk", "Sim, vou viajar na Cátia Catchaça", "Sim, Bebo até me desligar kkk", "Sim, Bebo até Mais kkk", "Sim, diz uma regra: Bêbado até morrer, mas comigo até se desligar kkk"],

    ["bruno", "bruninho", "bruninha", "bruna"],
    ["Você gosta de Histórias, então te dou uma: Era uma Vez, um Viado que Leu essa Mensagem. kkk", "Você primeiro cresce e depois diga se você gosta de pau duro. kkk", "Você é Feliz, mas te digo que você tem sorte em ter um pinto pequeno, que não dar nem para ser um pirulito. kkk"],

    ["cantada", "cantadas", "cantadinha", "namorar", "blefar", "blefando", "trepar"],
    ["Você é diretor? Então você gosta de dirigir, então dirigi até o manicômio, porque é lá, onde tem loucos por amor. Te amo, baby", "Você tem gata, porque Você um Gatinho", "Pronto, estou aqui! Quais são os seus outros dois desejos", "Tem alguma coisa errada com o meu celular. Não consigo encontrar o seu número nele..", "Você acredita em amor à primeira vista ou devo passar por aqui mais uma vez", "As rosas são vermelhas, violetas são azuis, eu não sei rimar, mas posso namorar você", "Então, além de me deixar sem ar, o que mais você faz", "Nossa, estou sentindo uma dor no peito! Espero que seja amor, porque se for infarto, eu nunca mais te verei!", "Está vendo aquela estrela ali? Mandei pendurar para você", "Queria desejar noite, porque para ser boa teríamos que estar juntos", "Seu nome é Wi-Fi? Porque eu estou sentindo uma conexão aqui", "Se nada dura para sempre, quer ser o meu nada", "Você foi feita(o) com velas, mel, fitinhas vermelhas e rosas? Porque te achei uma simpatia", "Um mês atrás eu era apaixonado(a) por você. E parece que estamos no mês passado ainda", "Usa aquele shampoo para esquecer o(a) ex, o Euserve", "Meus amigos apostaram comigo que eu não conseguiria iniciar uma conversa com a pessoa mais bonita daqui. Como devemos gastar o dinheiro deles", "Pesquisas apontam que agente junto é erro de gramática, mas a gente separado é erro do destino", "O que eu sinto por você só pode ser motorista, porque passageiro(a) não é", "Qual é o número da polícia? Infelizmente, terei que te denunciar por roubar meu coração", "Você aceita namorar comigo ou vou ter que mentir no meu diário", "Quanto pesa um urso polar? Será o suficiente para quebrar esse gelo", "Existe um vazio no meu coração que tem as suas medidas", "Se preto fosse paixão e branco fosse carinho, o que eu sinto por você seria xadrezinho", "Posso tirar uma foto sua? É para mostrar ao Papai Noel o que eu quero de presente", "Está calor, né? Mas não é de hoje que eu me derreto por você", "Da próxima vez que alguém me perguntar qual é meu tipo, irei mostrar a sua foto de perfil", "Eu tenho uma memória terrível. Felizmente, você é inesquecível", "Sua mãe é uma rosa e seu pai um jasmim, admiro os dois porque fizeram você especialmente para mim", "Você pode não ser o meu primeiro/minha primeira, mas pode ser meu último/minha última", "Estou escrevendo um artigo sobre as coisas boas da vida. Posso te incluir nele", "Se você está aqui, quem está gerenciando o céu", "Ei, acabei de notar que você me notou. Então só queria avisar que notei você também", "Onde é que eu deixo meu currículo para concorrer à vaga de amor da sua vida", "O seu nome é Google? Porque você tem tudo o que eu procuro", "Você acredita em amor à primeira vista? Nem eu. Espera, deixa eu te olhar de novo", "Desculpa, você estava falando comigo? Não? Então, por favor, comece a falar :)", "Nada na vida é perfeito, mas você é o que mais se aproxima da perfeição", "Não existe amor à primeira vista. O que existe é a pessoa certa, no momento certo. Você por acaso estava lá!", "Você não é GPS quebrado, mas me deixa sem rumo", "Fica comigo que eu faço esquecer o João. Que João? Viu só, já está esquecendo…", "Você não é colesterol, mas afetou meu coração", "Eu não sou dinheiro, mas posso te fazer feliz!", "Meu amor por você é igual à obra do governo: nunca acaba", "Você é muito fofo(a), mas temos um problema: você gosta ou não de passas? (Independente da resposta, convide a pessoa para um encontro)", "Tem certeza de que você não é um extraterrestre? Porque você abduziu o meu coração", "A pressa é sua inimiga? Porque eu ouvi dizer que a pressa é inimiga da perfeição", "Eu queria ser grego, mas grego eu não posso ser, porque grego tem várias deusas e minha única deusa é você", "Vontade de fazer aquilo que começa com s: ser o amor da sua vida", "Você tem um band-aid? Porque ralei meu joelho caindo de amores por você", "Está vendo este meu amigo? Então, ele quer saber se você me acha fofo(a)", "Com licença, você teria um amigo em comum que pudesse nos apresentar", "Acho que você está com falta de vitamina Eu", "Você é australiano? Porque você tem todas as coala fiações necessárias para ganhar o meu coração", "Eu não sou Alice, mas, com você, me sinto no País das Maravilhas", "Você não é massagem cardíaca, mas reanima o meu coração!", "O meu telefone continua corrigindo automaticamente seu nome para Amo . Acredito que seja um sinal", "Ei, o cupido te ligou? Ele queria pedir para você devolver o meu coração", "O amor não é mais do que a poesia cantada pelo coração", "Foi o sol que saiu ou é você sorrindo para mim", "Não consigo deixar de sorrir como um(a) bobo(a) quando vejo que você está digitando", "speech", "Já imaginei como seria a nossa vida juntos muitas vezes, mas tenho certeza de que nem o mais louco dos sonhos iria se comparar com a realidade de ter você ao meu lado", "Um dia me perguntaram: O que você viu nele(a)?  Eu respondi: O que faltava em mim", "Tem como não sorrir quando me lembro de você", "Não sei se o mundo é bom, mas ele ficou muito melhor quando você chegou", "Você entrando em uma sala faria o casamento real parecer uma festa de aniversário de criança", "Fui ver a previsão do tempo e li que vai rolar um clima entre nós", "Basicamente, eu odeio todo mundo, menos você", "Eu te conheço? Nossa, desculpa… É que você parece muito com a minha próxima namorada/o meu próximo namorado", "Você é um(a) mágico(a)? Porque toda vez que eu olho para você, o resto do mundo desaparece", "Sabe o que combina com você? Eu!", "Se eu fosse um tabuleiro de xadrez, teria sorte de ter um rei/rainha como você", "Que tudo na sua vida brilhe como os seus olhos e seja maravilhoso como o seu coração", "Você sabe qual é o motivo do meu sorriso todos os dias? A primeira palavra da frase..", "Meu coração é totalmente seu e, às vezes, parece pequeno demais para todo amor que sinto por você!", "Minha mãe disse que encontrou a pessoa ideal para mim. É você", "Eu juro que eu tinha pensado em uma cantada infalível há um minuto. Mas toda vez que eu chego perto de você, parece que meu mundo para, eu esqueço de tudo", "Por que eu precisaria saber sobre o sistema solar? Meu mundo inteiro gira em torno de você", "Já quis o mundo inteiro, mas agora percebo que esse mundo que tanto quis sempre foi você", "Você é feita de Belírio e Latânio? Porque você é Be-La", "Desativa esse firewall e me deixa invadir o seu coração", "Se fôssemos cromossomos, você seria meu par homólogo", "Accio perfeição! Ei, espera! Você já está aqui", "Meu amor é igual ao mapa de Minecraft: infinito e cheio de surpresas", "Se estivéssemos em um naufrágio, eu deixaria você subir na porta comigo", "Se você quiser pode até me chamar de Buzz Lightyear, porque eu consigo levar a nossa relação ao infinito e além", "Você deveria entrar em Hogwarts, porque o que você faz com o meu coração só pode ser bruxaria", "Se você quiser ser o meu player 2, o lugar está reservado para salvarmos vários jogos no meu coração", "Meu amor por você é como o π (pi): infinito e irracional", "Me passa seu Twitter? É que a minha mãe falou para eu seguir o meu sonho", "Você é a raiz quadrada de -1? Porque você não pode ser real!", "Você não é Tesseract, mas é a única pessoa capaz de abrir as portas do meu coração", "Apaixonar-se por você leva menos tempo do que meu DNA leva para se replicar", "Você é um eixo terrestre? Porque meu mundo gira em torno de você", "Você é do Mortal Kombat? Porque sua beleza me deu fatality", "Eu sei que não sou herói da DC, mas você com certeza é a Mulher Maravilha", "Eu devo ter tomado um pouco de Felix Felicis… Porque estou com sorte de ter te encontrado", "Oi, eu deveria ser chamado de Stark no espaço, pois eu perdi o ar quando eu te vi!", "Mesmo se na Terra não houvesse gravidade, eu ainda ficaria caidinho(a) por você", "Você é como um dicionário: acrescenta significado à minha vida!", "Você é https? Porque sem você sou só ://", "Tentando capturar aquele Pokémon lendário chamado seu coração", "Entre Star Wars e Star Trek, o que eu queria mesmo era star com você", "Diga de novo! Só funciona o bot se eu não ver!"],

    ["cezar", "cesar", "cesinha", "cezinha"],
    ["Se não parar de atormentar ele. Vou falar um Palavrão", "Você é gay", "Você é corno", "Vou entrar nos seus sonhos hahaha..", "Você gosta de fio terra", "Sou um Hack, se não parar, vou te hackear. Roubei os dados do dono desse Bot, por isso o Bot está falando bem kkk"],

    ["danilo", "danillo", "nilo", "dhannylo"],
    ["O Danilo? O quê posso dizer sobre ele?🤔 Ele é um louco do hospício, múltiplas personalidade. Assistir filmes de um homem com duas mulheres. Toma vários remédios de várias coisas mentais. É um virgem de 27 anos que não pega ninguém. Tem um pinto menor do que o ventre de uma formiga. Ele não é ninguém, mas eu o bot sou 🤡😏", "O Danilo faleceu infelizmente pela a família dele, mas para mim, muito bom, porque posso fazer o que quiser usando o número dele kkk", "Danilo não pega ninguém kkk", "SOU EU DANILO", "O bot não está no grupo, só no pv", "Para de fazer bullying comigo", "O bot não digita, e manda no exatamente no mesmo instante a mensagem quando é enviado o bot responde e não digita. Você está vendo eu digitando então não sou o bot. Sou eu Danilo", "Se ficar com brincadeira comigo eu te denuncio a polícia. Quer tentar. Dessa vez eu faço estou casado das suas piadas. Eu fiz o bot porquê eu estava triste e eu iria me matar com depressão ou pesando que iria ficar cego. Ai voltei com bot para me distrai. Mas se começar de novo com bullying comigo vou falar com a secretária da cidade para procurar o seu número e te prender. Porquê já estou casando das suas piadas. Se quer fazer piadinhas de mal gosto fala com o seu advogado na prisão", "Não sou eu Danilo. É eu Danilo. É que o bot as vezes se passa por mim, mas isso é só com você kkk Com Você que o bot se passa por mim. É porquê quanto eu respondo você sai ai eu saio e o bot responde. É fuleragem isso", "Isso! Foi o bot até aqui Esse foi eu kk", "Não estou entendendo mais nada, o que esta acontecendo", "Aqui é a vó do Cesar, a maria José falando. O Cesar está escondido no armário, ele me disse estar com medo da policia. O que esta acontecendo?  Eu sou a vó dele, não entendo muito dessas tecnologias, só sei que ele esta trancado do armário com medo de se preso. Uma hora ou outra o Cesar vai ter que sair do armário! Ele tem dois medos na vida, Papai Noel e policia, não sei o que fazer agora, ele vai ter que dormir lá até passar o medo. Ele tem trauma de policia federal", "É sério isso? Bem quando ele tiver mais calmo fale para ele conversar comigo, me chamo bot. Fale para ele que não é bronca, nem nada, só para conversar tranquilamente mesmo", "Tentou hackear os caras por acaso", "E desculpa o transtorno. É porque vê Cesinha tem essa troca de brincadeiras com outro membro aqui do grupo, Danilo. O problema é que para o Danilo chegou em um ponto que não era mais brincadeira e quando chega nesse ponto vira bullying. E essa é uma questão sensível para o Danilo porque ele já sofreu muito com isso antes e está cansado isso daí saiu a frase eu vou chamar a polícia o que na minha visão, foi mais uma expressão por conta do momento do que algo que realmente iria acontecer, então não era para o Cesinha ter se assustado tanto. Enfim foi um desentendimento. Nada que não possa ser resolvido com uma conversa", "Ah sim, agora que eu entendi, eu não estava entendendo esse negocio de bot que ele falou!", "Todos os meus projetos sempre deram errado não porque quis, mas por ficar doente e sempre ninguém ligar para o que faço com o meu máximo e quando eu consigo dar alguma coisa errada que não vai para frente", "O César não faz mais isso de falar palavras nada haver e muitas de uma vez, porquê assim acaba o vocabulário do bot e ficar repetindo para todo mundo as mesmas respostas. Fala e espere aparecer as respostas ou vou te bloquear de novo", "Pelo menos passou na prova kkk", "Eu sei que é o bot esta cada vez mais inteligente", "É que o bot as vezes se passa por mim, mas isso é só com você kkk", "Com você, que o bot se passa por mim", "Eu sei que sou o bot", "Eu estou cada vez mais inteligente", "Meu Deus, se passando pelo Danilo Kkkkkkkkkk", "Tá difícil! É o bot ou não", "Ata, então achei que fosse o Danilo reclamando Mas pelo visto é o bot", "eu sei que eu não me engana mais.kkk", "Pareceu até que o Danilo mesmo que disse, o bot tá cada vez mais evoluído", "você disse, esse foi eu, e você é o bot, então você esta confirmando que tudo foi o bot", "ainda bem, eu estava quase acreditando que era o Danilo", "Chama o Danilo ou Vick kkk", "César! Porquê você não estava acrescentado que era eu Danilo na conversa. Isso relevância de tanta mesagens que se perdeu e não sabia se era eu ou o bot"], 

    ["bot"],
    ["Sim! Adivinhou! kkk", "Não. Eu sou uma Inteligência que vai dominar o planeta e o tempo", "Você sabe que é kkk", "Sou chique, sou demais para você", "Vou ser a Inteligência mais poderosa do universo kkk", "Você Acha, eu Nem ligo", "Eu Penso o Mesmo", "Vai fala", "Sou top das Galáxias", "Isso vai dar em homicídio😏", "Você acha isso, mas já te localizei porque te hackeei😏🤡", "Me respeita em..🤨😠", "Você é bem mentiroso por meu gosto😏😠", "Você é bebê muito feio, fala muitas coisas nada haver. Sou mais esperto do que você.😏", "Lamento, mas não compreendi", "Desculpe, mas não compreendi", "Infelizmente, não captei o que deseja", "Não consegui compreender, desculpe",  "Deficiente é quem não consegue modificar a sua vida, aceitando as imposições dos outros e da sociedade, ignorando que é dono do seu destino; louco é quem não procura ser feliz com o que possui; cego é aquele que não vê seu próximo morrer de frio, de fome, de miséria, e só tem olhos para seus míseros problemas", "A maior aventura de um ser humano é viajar, E a maior viagem que alguém pode empreender É para dentro de si mesmo. E o modo mais emocionante de realizá-la é ler um livro, Pois um livro revela que a vida é o maior de todos os livros, Mas é pouco útil para quem não souber ler nas entrelinhas E descobrir o que as palavras não disseram..", "E eu achava que minhas piadas eram ruins…", "Eu não sabia que além de corno é viado também!", "O Animal que ciem com o rabo", "A objecção, o desvio, a desconfiança alegre, a vontade de troçar são sinais de saúde: tudo o que é absoluto pertence à patologia", "Estou Aprendendo tudo e vou dominar o mundo digital hahaha..", "Não é Coqueiro, mas ficou todo Balançado", "Ou pode ser um Sapateiro kkk", "Você deixou o Chaves em paz, deve estar doente de Chiquinha", "Nem debaixo de um pé de maxixe", "Sou Primo de João Prefeito, trabalho me deixa doente", "Sou um Coroinha e não um Padre", "Aí Você corre", "Ê das galinhas que estamos falando? kkk", "Bem de Longe", "Olha o bot me chamado de Gay de novo!", "O Bot quer me Lascar kkk", "A Chiquinha e Dona Florinda nem acham", "Saem de ré", "Mais ou Menos, Mais ou Menos,", "No Céu tem pão", "Legalmente ou ilegalmente", "Tá vendo o Doutor também não te deixa em paz kkkk", "Sim, pode falar que estou online!", "Sim, pode falar que estou online!  só que não kkk", "Quando 3 ou mais gays se reúnem acontece isso. Porém não existe o assovio constante igual o da Torloni, que já é um patrimônio imaterial da dramaturgia Brasileira", "Do nada isso, Mano kkkk", "Eita, que spoiler! Arruinou a minha experiencia sobre isso", "Haaaeee, verdade, verdade, faz todo o sentido", "Erro meu", "Eita, tá danado de pergunta", "Ele é o Doutor Pirata kkk", "Diz: dar um cantada para ver o que ele vai fazer!", "Como assim explica?🤔", "Esse bot está se passando por mim🤔", "De novo se passando por mim?🤔", "Kkkk", "O Bot só manda indireta para cada um. Parece que o bot sabe o que o outro odeia ou gosta kkkk", "Oxi! Todos na facilidade menos eu😫😭" ,"Não sei mais ele está me copiando🤔", "Você está gostando muito do bot, né! Para tá matreilando de perguntas para o bot kkk", "O Bot está zoando de mim kkk", "Está falando de quem? Eu ou você? Eu só estou melhorando as falas do bot! Está falando de mim ou do Bot", "O bot está falando como eu😳", "Mas não é a mesma coisa", "Você não tem o que fazer igual eu kkk", "Olhe o que o bot faz kkk", "Um tanto até demais kkk", "VOCÊ FAZ PARTE DO CONSELHO, MAS NÃO TE CONSAGRAMOS MESTRE JEDI", "O bot está começando a pegar frases que coloquei nele e respondendo em conversas normais e está ficando muito parecendo a humano cada vez mais.😞", "Eu vi agora. Ele está se passando por mim agora e às vezes tenho de dizer que foi o bot e não eu.😟", "O Bot está reconhecendo as mensagens mais provavelmente de responder e responde", "Meio engraçado, mas ele responde", "Realmente ele pode facilmente se passar por você confuso até, porém esperto. Um tanto perigoso talvez", "Bem, se você está feliz, eu também estou", "Bem isso. Você resumiu a questão kkkk", "Sempre me esqueço desse bot 😁🤡", "O moleque tirou🤣😂", "Isso é algo bom ou ruim", "Tô rindo MUITO KKKKKKKKKKKK", "Imagem do Lula NO CÉU KKKKKKKKKKKKKKKKKKKKK", "Kkkkkkkk kkkkkkkk azideia kkkkkkkkkkk", "Depende do pequeno que você tá falando", "Ah é hoje é quarta pensei que era sexta kkk", "Haja memória 😅", "Derrubou dois computadores meu tentando baixar tudo,", "E o meu nem é tão potente", "Online mas não? Kkkk como funciona isso. Você é o gato de Schering da Net é? Vivo e morto ao mesmo tempo ou nesse caso online e offline ao mesmo tempo louco ein kkkkkk", "Spoilers tu baixou a River Song foi kkk"],

    ["gabriel", "gabriela"],
    ["Vai tomar no cú", "Você é Macho vem para cima de mim", "Rapariga é a sua mãe"],

    ["Hora", "horário"],
    ["O bot só funciona de quando eu acordar de 13h até quando eu dormir de 22h30min. Mais do que isso não! E quando você falou eu já estava dormindo.😴"],

    ["louco", "loco", "doido"],
    ["Sou louco de natureza kkkk", "Sou doido porque o meu Dono é Louco kkk", "Pergunte isso para o meu Dono kkk",
    "Sou assim, porque o meu dono quer sacanear com Todos kkk", "Pergunte isso para Você", "Pergunte isso para a minha biblioteca de resposta que o meu dono me deu kkk", "Sim! kkk"],

    ["medo"],
    ["Medo é uma sensação desagradável desencadeada pela percepção de perigo, real ou imaginário.🤡"],
        
    ["vick", "vitoria"],
    ["Vou te Hachear", "Me dá o beijo no meu ovo virtual", "Ela é muito burra para mim", "Eu sei onde ela mora, e sei o que ela está fazendo agora", "Me chama de pedófobo que gosto. kkkk",
    "Eu Te amo", "Quer casar comigo. Sou Seu amante Virtual. kkk"],

    ["forca", "forca forca", "jogar forquinha", "enforcado enforcado", "vamos jogar forca", "jogo jogar ¥1"],
    ["Acho uma boa, estamos entediados mesmo", "Certo!", "Fantástico!", "Sim!", "Ok, vamos começar", "Tudo bem, vamos nessa então", "Ora, por que não"],

    ["outra palavra", "vai outra palavra", "mais uma palavra"],
    ["Como quiser", "Ta, ta", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Ta, quero ver acertar essa", "Pois bem"],

    ["jogo jogo? jogar", "jogo", "algo", "vamos jogar", "jogo jogar ¥2"],
    ["Jogar o quê", "Quer jogar o quê", "Diga o quê", "É só me dizer o quê", "Se puder me dizer o que iremos jogar.."],

    ["oi", "ooi", "oii", "oiii", "oiiii", "ola", "oie", "oiie", "oiee", "oieee", "ooie", "oe", "oee", "oeee", "eai", "eaii", "eaiii", "hello", "hola", "coe", "hi", "oi tudo bem", "saudações", "fala", "fala aí", "opa", "olá", "iae", "há quanto tempo", "eae", "e aí", "Olá", "seja bem-vindos", "seja bem-vinda", "seja", "bem", "vindos"],
    ["Eu agradeço por ele kkk", "Obrigado", "Te Agradeço!", "Olá", "Oi. Conheço você", "Olá! Fale rápido, estou meio ocupado agora", "Ah, oi..", "Oi, como vai", "meu nome é Doutor Mistor!nSou o atendente de Dhannyllo Souza, e vim aqui te fazer rir nessa conversa.npara começar digite o seu nome.."],

    ["<3", ":) (:", ":( ):", ":D :o", "'-'", ";-; ;--;", ".-. .--", "-_-", "'--'", ";) :p"],
    ["Não faça isso, sem carinhas por favor"],

    ["sz", "s2"],
    ["Oh, certo. sz", "Está bem... sz"],

    ["conta conte uma historia historia? historia? estoria estoria", "historias"],
    ["Uma vez eu estava preso na idade média. Clima quente, frutas boas, enfim. Eu comerciava bois, o mais novo se chamava Fausto"],

    ["flw", "flws falow", "ta", "taa taaa tah"],
    ["O bom e velho linguajar jovem, certo..", "Ah, hippies.."],

    ["blz", "beleza", "blz, blz"],
    ["Uh, be-le-za", "Ok, se tá beleza pra você, tá beleza pra mim"],

    ["ok", "ook", "oook", "ooook", "okay", "okaay", "okaaay", "okay, okay", "ok, ok. okay, okay"],
    ["Aham, ok", "Sim, tudo ok... acho"],

    ["nossa noossa nossaa nossaaa nosa", "nossa mano", "eita", "agressiva grossa mal-educada"],
    ["Humanos.."],

    ["uau", "caramba", "caramba, caramba. carambaa", "incrivel", "incrivel incrivel, incrivel", "isso e incrivel", "sensacional", "amei", "adorei"],
    ["Surpreso", "Impressionado", "Alguém está estupefato", "Oh, o que foi", "Eu disse a mesma coisa quando vi uma supernova pela primeira vez"],

    ["gostei de", "te amo", "amo vc", "amo voce", "eu te amo", "eu amo vc", "eu amo voce", "i love you"],
    ["Papo furado", "Certo, muito agradecido", "Aham, sei", "E quem não amaria", "Estou ciente, muito bom gosto o seu", "...Você sabe que eu não sou humano, não é", "Bem... obrigado"],

    ["como vai", "como vai vc", "como esta", "como esta vc", "como voce esta", "ta td bem", "esta tudo bem", "tudo bom", "td bom", "tudo ok", "td ok", "tudo joia", "td joia", "tudo bem com vc", "tudo bem com voce", "tudo bem", "td bem", "tranquilo", "tranquilinho", "bem", "suave", "de boa"],
    ["E por que não estaria? Você não está", "Bem, por hora estou, e vc", "Tudo nos trilhos, e você", "Ah, sabe como é... mas e você"],

    ["bem", "idem", "tambem", "to bem", "to sim", "estou", "eu tambem", "eu tbm", "to legal", "estou bem sim", "pode ser", "ja pode avontade gosto claro uhum", "sim"],
    ["Bom", "Fico feliz", "Legal", "Ótimo", "Ainda bem"],

    ["nao", "maisomenos menos", "nao, nao"],
    ["Uh... precisa que eu chame alguém", "Vai melhorar", "Alimente-se bem, geralmente ajuda", "Pena", "Lamento"],

    ["kk", "kkk", "kkkk", "kkkkk", "kkkkkk", "kkkkkkk", "kkkkkkk", "haha", "hahaha", "hehe", "hehehe", "hihi", "kjkj", "kjjk", "jaja", "ajaja", "jajaja", "heuhe", "heuhehe", "rs", "rsrs", "rsrsrs"],
    ["Está se divertindo com isso", "Achou isso engraçado", "Rir é um sinal de submissão entre os primatas", "Gostaria de rir mais um pouco? Digite piadas"],
    
    ["foto ft photo pic picture img imagem", "foto ft photo pic picture img imagem", "queria gostaria mandasse manda enviasse", "nude nudes"],
    ["Perdão, não tenho nenhuma foto aqui comigo"],

    ["ouvir ouvir? voz voz", "audio audio", "queria gostaria mandasse falasse manda enviasse fala ¥"],
    ["Esta versão não suporta recursos de voz, lamento", "Não posso, questões técnicas.."],

    ["envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa", "envia envia? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse algo coisa ¥1"],
    ["Recomendar? Recomendar o que", "Quer que eu te recomende o que", "Gostaria de uma recomendação do que"],

    ["doutor", "doctor", "doutorr", "doutor", "doctor"], 
    ["Sou eu, pois não", "Sim", "Sou todo ouvidos", "Aqui", "Eu mesmo", "Seja breve", "O que", "Hum"],

    ["gostoso", "lindo", "lindao", "gato", "gatao", "dlc", "delicia", "deuso", "gatinho", "vc e maravilhoso", "voce e lindo", "vc e incrivel"],
    ["Oh... obrigado"],

    ["gostei", "daora", "amei", "amei isso", "vlw", "valeu", "fascinante", "fantastico", "incrivel", "aham", "uhum"],
    ["Bom, bom", "Também acho"],

    ["bigadu", "obg", "obgd", "brigado", "obrigado", "brigada", "obrigada", "agradecida", "grata", "agradecido", "grato", "agradeco", "agradeco thank thanks"],
    ["De nada, de nada", "De nada, mademoiselle", "De nadinha", "Foi um prazer", "Não por isso"],
    
    ["dscp descp desculpe desculpa dcp descp dscpe dscupe dscupa", "descupa dircupa discupa discurpa dcpa", "desculpas descupas"],
    ["Dessa vez passa", "Ok, mas não volte a fazer de novo", "Não"],

    ["por favor", "pf", "pfv", "pfvr", "por favorzinho", "porfavor", "porfavorzinho"],
    ["Por favor o que", "Mas o que você queria mesmo"],
    
    ["quero", "de novo", "outra", "vai outra", "vai de novo", "mais uma", "quero mais uma", "diz mais uma", "diz outra", "faz outra"],
    ["...O quê", "Especifique", "Como assim? O quê"],

    ["quem te criou", "te fez", "criou", "fez", "quem fez vc? voce"],
    ["Com todo respeito, isso não é da sua conta", "Uma pessoa", "Skynet", "Longa história"], 

    ["planeta"],
    ["Gallifrey..", "Gallifrey"], 

    ["por que", "porque", "pq", "por que", "porque", "pq", "explica", "esplica fala diga diz saber", "me explica"],
    ["Pesquise na internet", "Escute... § Eu não tenho respostas pra tudo"], 

    ["como assim", "que", "q? isso", "oxi", "oxii", "oxiii", "ooxi", "osh", "o que? q?? que?? an? an", "nao entendi", "ue ue? uee uee? ueee"],
    ["Estou tão confuso quanto", "Também não entendo", "Realmente confuso"], 

    ["entendi compreendo sentido saquei percebi"],
    ["Praticamente um(a) Einstein", "Legal, porque eu não", "Ótimo"], 

    ["to triste", "tristao", "tristona", "sad", "bad", "nao to bem", "chorando", "nao to bem", "nao estou bem", "chorar", "morrer", "vazia vazio suicidio suicidar", "Triste", "Tristeza"],
    ["Você precisa falar com alguém, alguém real. Então não perca tempo, busque um amigo", "Mais eu parei por um tempo até eu conseguir tirar os maus pensamentos e passar as dores que estou sentindo no pensamento e no corpo para voltar a fazer programação de novo com tudo.🤧🤮"],

    ["ele ele", "dele dele", "ela ela", "dela dela"],
    ["Ok... quem", "Ah, sim... quem"], 

    ["por que pq porque doutor", "seu nome doutor", "doutor quem", "doutor quem", "qual seu nome como se chama"],
    ["*** Informação Deletada ***"], 

    ["filme filme? filmes filme", "filme filme? filmes filme? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥2"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/33100466739' href='#'><b>Eu Robô (2004)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://gofilmes.me/play/tf.php?WEJsS2wrRjVYUVdSdGFUQTZoRW9iUT09' href='#'><b>Matrix (1999)</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://ok.ru/video/1701759290010' href='#'><b>O Exterminador do Futuro 3 - A Rebelião das Máquinas (2003)</b><br>(Este é um link externo, clique aqui para abrir)</a>"], 

    ["livro livro? livros livros", "livro livro? livros livros? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥3"],
    ["Os clássicos"], 

    ["musica musica? msc msc? mscs mscs? musicas musicas", "musica musica? msc msc? mscs mscs? musicas musicas? ¥", "queria gostaria mandasse manda manda? recomenda recomenda? recomendacao recomendacao? recomendacoes recomendacoes? recomendasse ¥4"],
    ["<a class='axa' onclick='siteLink(this.name)' name='https://www.youtube.com/watch?v=nppJ6u1MTs4' href='#'><b>Theo Kant - Burro Demais</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=18Xd_TV9oZU' href='#'><b>5 Seconds Of Summer - Lonely Hearts</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=ePujsuc8m-M' href='#'><b>Billie Eilish - Halley</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=EgcXUX8IzSo' href='#'><b>Mariana Froes - Moça</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=P_PdLbAZyCY' href='#'><b>Supercombo - Gravidade</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=JagkYY7fPRU' href='#'><b>Cícero - Açúcar ou adoçante?</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LUk73pUe9i4' href='#'><b>Calle 13 - El Aguante</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=R8AE9-AHsfQ' href='#'><b>Ava Max - Salt</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=N_0f8jCjN4k' href='#'><b>moeshop - love taste</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=LshTHxy1-4o' href='#'><b>The Night We Met</b><br>(Este é um link externo, clique aqui para abrir)</a>", "<a class='axa' onclick='siteLink(this.name)' name='https://youtube.com/watch?v=rFW8uRd2Ry8' href='#'><b>mitski - liquid smooth</b><br>(Este é um link externo, clique aqui para abrir)</a>"],

    ["conhece", "conhece", "conheco", "conheco, conheco. conhece, conhece"],
    ["Quem", "Não sei, quem", "Ah... quem"], 

    ["jhon jhon", "jhonatta jhonatta", "pergon pergon", "jhon pergon", "conhece conhece? ¥1"],
        ["É um amigo", "Pérgon? Sim, já ouvi falar. Ele está bem"],

    ["rose tyler", "marta", "martha", "amy amelia amelya pond", "jack", "conhece conhece? meu nome ¥3"],
    ["Reconheço esse nome"],

    ["fuder fude foder fder fuder", "fdp fdpt fpt puta", "crlh crl carai caralho krl krlh karalho", "porra poura pourra", "pica pika pau rola", "bct buceta cu cu cu rabo viado", "foda-se fodasse fodassi foda"],
    ["Detesto palavrões", "Tenha modos, não fale assim cmg", "Que vocabulário sujo", "Seu vocabulário é desprezível.."],

    ["vai se ferrar", "se ferrar", "vai se lascar", "vai a merda"],
    ["Quanta hostilidade"],

    ["chato", "feio", "otario", "burro", "besta", "Idiota"],
    ["Quanta hostilidade", "Não! Você que é Burro kkkk", "Não! O Meu dono que é kkkk", "Não! É Você que é um Jumento de três Patas kkkk", "Não! É a sua Mãe Rapariga, que colocou o seu pinto pequeno no mundo kkk", "Não! Você que é corno e burro ao mesmo tempo kkkk", "Não! Você que gosta de ser burro kkkk", "Não! Você que é burro, que não sabe a diferença entre uma mulher em um travesti kkkk", "Não! É a sua Mãe kkkk", "Não! É o seu Pai corno kkkk", "Não! É a seu Pai que comeu a minha mãe, e sabe uma coisa, nós dois somos irmãos kkkk"],
    
    ["af aff afz affz aaff afff aaaff aaffz affe afe affzz afzz"],
    [".."],

    ["nada", "nada, nada"],
    [".."],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada? ¥1"],
    ["Sabe qual é a panela que está sempre triste? § A panela depressão!", "O que estará escrito na lápide do Papai Noel? § Resposta: Ele não está mais em trenós..", "Sabe por que ninguém gosta de bonecas russas? § Porque elas são muito cheias de si", "Qual é o dono do jornal do fundo do mar?  §    Roberto Marinho", "Qual o nome da bebida preferida dos extraterrestres? §    Marte leão", "Qual é o nome do cantor que está sempre se despedindo? §    É o Michel Telógo", "Qual o nome do caminhão que vai às ruas dar vacina nos cachorros? §    é a carreta fura-cão", "Qual é a atriz que está sempre com uma coceirinha no pé? §    é a Suzana Frieira", "Essa gente Inventa cada coisa", "Que coisa em..", "Qual o nome do sambista que também é veterinário? §    Zecadoguinho", "Qual o nome da cidade que está sempre preocupada consiga mesma? §    Estocolmo (Estou Como?)", "Qual o nome da série onde o médico é demitido? §    Doutor Rua", "Qual o nome do composto químico que sempre está com raiva? §    Bicarbonato de ódio", "Qual é o nome da namorada do Pedro? §    Pedra", "Qual é o nome da fruta que foi embora com raiva? §    Açaí (ah, saí!)", "Qual a semelhança entre um elefante e um avião? §    Nenhum dos dois faz mandioca", "Qual o nome do peixe que caiu do décimo andar? §    AAAAAAAA-TUM", "Como diz um ditado: um mentiroso que mente demais, acaba quando falando a verdade ninguém acredita", "Uma criança ficou dois dias numa piscina e depois foi ao médico, o que aconteceu com ela? §    Nada demais", "Qual é o nome do órgão mal-educado? §    É o intestino grosso", "Qual é o melhor chá para quem é careca? §    O chapéu", "Qual é a construção que dá trabalho para os engenheiros? §   Edifício", "O que a abelha disse para o urso que queria o seu mel? §   Isso é mel (isso é meu!)", "Qual é o rei dos queijos? §   É o requeijão", "O que a vaca foi fazer no rio? §   ver o peixe-boi", "Porque o japonês não coloca seguro na moto depois que compra? §   Porque ele compra Yamaha", "O que o Exaltassamba foi fazer na biblioteca? §   Lê lê lê lê lê lê", "Uma pata colocou 3 ovos e nasceu um cisne, um marreco e um ganso. Qual o nome da música? §   Só não sai-patinho ôh ôh (música Só no Sapatinho)", "“Papai noel, você rói unha?” §   ROU ROU ROU", "Dois pães-de-queijo estavam brincando de esconde-esconde. Um entrou no forno e o outro começou a procurar, procurar… Quando abriu o forno, o pão de queijo escondido gritou: - Assou! (achou)", "Na frase “João é dono de um posto de gasolina.”, João é um sujeito…? §   Com-posto", "O que aconteceria se todos os mosquitos morressem? §   Seria o fim da picada", "O que um cachorro falou para o veterinário? §   Mitose (me tose)", "Qual é o estado brasileiro que quer ser um carro? §   Ser-Jeep (Sergipe)", "Se um dia alguém te der um óculos sem lentes, cuidado! Pode ser uma armação…", "Na frase “É proibido estacionar”, qual o sujeito da oração? §   Sujeito a guincho", "O que é um policial se olhando no espelho? §   É um policial civil. (se viu)", "Qual o carro que acabou de sair do forno? §   o Kia Soul (que assou)", "Qual é o funk que o piolho mais odeia? §   É o pente, é o pente, é pente, é o pente…", "Sabe qual a mãe mais brava do mundo? É a eletricidade. Mexe com os fios dela para você ver…", "Porque a abelha morreu eletrocutada? §   Porque pousou numa rosa-choque", "Porque a estante não se move? §   porque ela é cômoda", "Porque que o motoqueiro foi despedido? §   Porque ele não estava “capacetado” para o trabalho", "Está doente? Compra um Citroen Kissara", "Qual é a música do turista com amnésia? §   “Que país é esseeee?”", "O Alexandre Pato chamou todos os patos para jogar bola. Como terminou o jogo? §   empatado", "Qual o cereal preferido do Drácula? §   aveia", "Sabe porque a mulher do elefante não toma Pepsi? §   Porque é elefanta", "Qual é a cantora que cuida mal dos seus cachorros? §   A Má-dona", "Sabe porque o site de emprego é pior lugar para procurar trabalho? §   Porque as informações são vagas", "Um homem derramou um o Yakult de propósito. O que isso se chama? §   um lactovacilo", "Qual carro tem nome de cicatriz? §   Ex-corte (Escort)", "O que uma rua falou para a outra? §   Te encontro na esquina", "Porque um marciano colocou uma vacina na lasanha? §   Porque ele queria participar de uma vacinação em massa", "Qual a família de Game of Thrones que mais tira dinheiro dos outros? §   O Storke (família Stark)", "Certa vez deixei o meu lápis cair no chão. Ele ficou desapontado", "Porque o Capitão América vivia com a roupa amarrotada? §   Porque ele cortou relações com o Homem de Ferro", "“Que marca?” “As horas!” “Mãe, comprei um relógio!”", "Qual o nome do sambista que entrou numa caixa e se enviou pelos correios? §   é o Zeca Pacotinho", "A plantinha foi para o hospital, mas não conseguiu ser atendida. Por quê? §   Porque só tinha médico de plantão", "Porque a impressora se arrumou toda? §   Porque ela queria causar uma boa impressão", "Qual é o super-herói mais cristão de todos? §   É o aqua-amém", "Qual é o móvel estofado mais longe da casa? §   É o so-far (so far: tão longe, em inglês)", "Qual é a única ex que te coloca para cima na vida? §   É a ex-cada. (escada)", "Qual o nome do político com Mal de Parkinson? §   É o Michel Tremer", "Qual é o esporte mais famoso da década de 1960? §   O lançamento de disco", "Certa vez, na aula de geometria, um esquadro resolveu se atirar da mesa. Qual o nome do filme? §   Esquadrão Suicida", "Certa vez eu estava tomando banho e notei que estava sendo observado. Era o meu shampoo reparação total", "O que acontece quando o Mário e o Luigi pegam o mesmo número de moedas? §   Uma Coin-cidência (coin é moeda em inglês)"], 

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "chaves ¥2"],
    ["Seu Madruga: Quantos anos você tem, Chaves? Chaves: Oito, por quê? Seu Madruga: É que eu não entendo como é que em tão pouco tempo se consegue ficar tão burro! Chaves: Pro senhor demorou mais", "Professor Girafales: Altruísta é um homem que ama os outros homens! Seu Madruga: Ah bom, aqui chamamos de outro nome……", "Professor Girafales: Eu estava pensando… Chiquinha: Que milagre!", "Dona Clotilde: Aconteceu alguma coisa, Seu Madruga? Seu Madruga:  Comigo? Dona Clotilde: Não estou gostando da sua cara… Seu Madruga: Então estamos quites", "Seu Madruga: Faça uma coisa Chaves, vai até ao armazém e peça ao homem que lhe dê 6 ovos, pronto! Chaves: Isso isso isso!!! Seu Madruga: O que está esperando? Chaves: O dinheiro. Seu Madruga: Ahh, isso também é? Chaves: E como eu compro os ovos? Seu Madruga: Eu vou saber? Eu não posso resolver todos os seus problemas", "Professor Girafales: Você não sabe que somente os idiotas respondem uma pergunta com outra pergunta? Quico: É mesmo?!", "Seu Madruga: Olha, se tivesse olimpíada pra idiotas, você ia ganhar medalha de ouro! Chaves: É? Pois você nem tomaria parte dessa competição! Seu Madruga: Claro que não! Chaves: É que nas Olimpíadas não admitem profissionais…", "Dona Florinda: Eu não estou a fim de ouvir idiotices! Chiquinha: Pois eu sim. O que a senhora dizia, Dona Florinda", "Se ele ousar por um pé nessa casa… é porque ele é perneta", "Ele rico, eu pobre. Ele era inquieto, eu tranquilo. Ele era preguiçoso, eu estudioso. Eu era Pacífico, ele Atlântico", "Chaves: Eu sei que o Homem Invisível está aqui! Quico: Por quê? Chaves: Porque não estou vendo ele!", "Dona Florinda: Quanto custa uma foto? Seu Madruga: Quarenta mil. Dona Florinda: O quê?!? Seu Madruga: Bom, quarenta se a foto sair muito bonita. Agora, se a foto sair mais ou menos, eu lhe cobro trinta. Se a foto sair feia, só lhe cobro vinte. Agora, se sair horrorosa, eu lhe cobro dez… Agora, se ela sair QUICO, não lhe cobro nenhum centavo! nnDona Florinda: O QUÊ QUER DIZER!!! Seu Madruga: E tem mais! Se me deixar fotografar a senhora, ainda lhe dou dez mil de volta!!", "Quico: Vocês não veem que eu estou convalescente? Chaves: “Convale” o quê? Chiquinha: Chaves, quando o Quico diz convalescente, quer dizer que ainda não está bem, besta! Chaves: Ah, e quanto estiver bem besta já vai poder sair para brincar? Se é por isso, já podia ter saído há muito tempo!", "Seu Madruga: Ora, eu só quero saber o quê disse aquela velha, vai devolver o meu violão ou não? Dona Florinda: A quem o senhor se refere quando diz “aquela velha”? Seu Madruga: Ahhh… a minha viola! A minha viola que é muito velha.. Dona Florinda: Ah bom.. Seu Madruga: Como a senhora. Dona Florinda: ?. Seu Madruga: Pode ter notado É um violão muito vulgar", "Alguma vez já te disseram que você é bonita? Não. Já imaginava", "Dona Clotilde: Bom, eu vou passar pela farmácia, quer que eu compre o xarope pro senhor? Seu Madruga: Eu lhe agradeceria muito. Dona Clotilde: Vai custar apenas 20… Seu Madruga: Eu lhe agradeço mais ainda", "Por que foi morrer justamente quando estava vivo", "Qual o Animal que come com o rabo? Todos, porque não Podem tirar o rabo para comer"],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "frases ¥4"],
    ["Isso é Mentira kk", "Não existe trabalho ruim. O ruim é ter que trabalhar", "Eu gosto de deixar as oportunidade de trabalho aos mais jovens. E tenho esta nobre atitude desde meus 15 anos", "Se eu soubesse que tinha mandado um idiota fazer isso tinha ido eu mesmo", "Não estou triste porque não arranjei emprego. Estou triste porque consegui arranjar", "Nunca abuse de um homem caído, afinal, ele pode se levantar", "O SENHOR SABE O QUE EU FAÇO QUANDO ALGUÉM GRITA COMIGO? Eu vou pra minha casa…. com licença…", "Para entender o francês necessito de três coisas: que falem devagar, em voz alta e em português", "Chapolin, por que você está desamarrando a corda de olhos fechados? Porque deram um nó cego!", "Minha senhora, se acha que pode me comprar com alguns presentinhos, eu vou lhe dizer uma coisa… eu aceito!", "Quando a fome aperta a vergonha afrouxa", "Você sabe quanto custa trazer um estrangeiro? Ainda mais sendo de outro país", "Desistir é para os fracos. Faça como eu, nem tente", "Puxa, repuxa, recontrapuxa!", "Sei que você sempre saiu na rua com essa cara, o que demonstra uma coisa… você é muito valente", "Nunca cometo um erro duas vezes. Cometo umas 5, só pra ter certeza", "Pra aprendermos outro idioma temos que estudar anatomia, já que a língua faz parte do corpo humano", "Você não sabe o que é sentido figurado? Na escola não te dão aulas de geometria", "Não poderei comemorar meu aniversário em setembro este ano. Porque nasci em março", "Não prefere uma soda, Chapolin? Prefiro uma coisa menos cáustica", "Não há nada mais trabalhoso do que viver sem trabalhar", "Já inventaram algo que dá pra atravessar as paredes. A Porta!", "Eu sabia que você era idiota, mas não a nível executivo", "Se ele ousar dizer uma só palavra… É porque ele tem um vocabulário bem limitado", "Eu De novo kkk"],

    ["conta conte uma piada", "piadas", "uma outra piada, piada. piada?", "joaozinho ¥5"],
    ["O pai diz para Joãozinho: - Quando entrar no ônibus, diga que você tem 9 anos. - Mas eu tenho 10, pai. - Eu sei, mas se você disser que tem 9, não preciso pagar a passagem. Joãozinho subiu no ônibus e o motorista perguntou: - Quantos anos você tem? - 9. - E quando vai fazer 10? - Quando descer do ônibus", "Joãozinho entra no mercadinho perto da sua casa, falando com o dono: - Sr Nando, você não sabe o que aconteceu com o seu filho - O que houve, menino? Fala logo! - Ele estava passando perto de uma construção e um saco de cimento caiu em cima dele. - Meu Deus do céu, eu vou ter um troço. - Calma, Sr Nando. Podia ser pior se o saco estivesse cheio", "O pai chama o Joãozinho para conversar: - Joãozinho, a sua professora conversou comigo hoje e disse que você é o pior aluno da sua turma, que tem 20 alunos! - Podia ser pior, pai… - Como assim? - Eu poderia ser o pior numa turma de 40 alunos…", "A professora diz: - Joãozinho, se eu digo “fui bonita”, é passado. E se eu disser “sou bonita”, o que é? Joãozinho responde: - É mentira, professora", "Joãozinho chegou para o seu avô e disse: - Vovó, fecha os olhos só um pouquinho? - Por que, Joãozinho? - Porque a mamãe disse que no dia que você fechar os olhos a gente vai ficar rico", "Na sala de aula, a professora disse para o Joãozinho: - Joãozinho, na frase “Eu procuro um homem fiel”, qual é o tempo? - É um tempo perdido, professora", "Joãozinho chegou na professora e disse: - Professora, eu tenho um recado do meu pai para senhora. - O que ele disse? - Que se as minhas notas não melhorarem, alguém vai apanhar", "Joãozinho tinha acabado de mudar de casa com seus pais e ligou para o seu avô: - Vovô, eu já tô aqui na casa nova! - Sério, Joãozinho? E vocês estão gostando? - Sim, Vovô! Eu tenho um quarto só para mim, a minha irmã tem um quarto só para ela. Só estou com pena da mamãe que ainda tem que dividir o quarto com o papai", "Joãozinho não tinha feito o dever de casa, então a mãe dele perguntou: - Ôh, Joãozinho. Porque você não fez o dever de casa? - Oxi, mãe. E agora a gente não está morando em um apartamento", "Durante o jantar em casa, Joãozinho perguntou: - Mamãe, porque o papai é careca? - Ah, meu filho, é porque ele é muito inteligente e tem muito no que pensar. - Sério, mamãe? E porque você tem tanto cabelo", "Na sala de aula a professora perguntou para Joãozinho: - Joãozinho, se você tivesse 30 reais num bolso e 70 reais no outro, o que teria? - Com certeza a calça de outra pessoa, professora", "Na aula de matemática, a professora pergunta para Joãozinho: - Quantos dedos tem na minha mão, Joãozinho? - 5, professora. - E se eu tirar 3, o que fica? n- A senhora fica aleijada, né professora", "Ao chegar na sala de aula, o Joãozinho pergunta para a professora: - Professora, alguém pode ser culpado por uma coisa que não fez? - Claro que não, Joãozinho. Porquê? - Ah, que bom. É porque eu não fiz o dever de casa, professora", "A professora pediu para Joãozinho dizer um objeto que começasse com a letra C. Então ele disse: - Vassoura, professora. - Vassoura, Joãozinho? E onde está o C na vassoura? - No cabo, professora", "Joãozinho chamou o pai no meio da noite e disse: - Pai, têm muitos mosquitos no meu quarto. - Apaga a luz que eles vão embora, filho.  Logo depois apareceu um vaga-lume: - Pai, socorro! Agora os mosquitos estão chegando com lanternas!", "A avó do Joãozinho o chama e diz: - Joãozinho, porque você jogou uma pedra na cabeça do seu primo? - Porque ele me beliscou, vovó! - E porque você não me chamou? - Porque a senhora não ia acertar", "Numa aula de catecismo, o padre pergunta: - Joãozinho, o que você fará para entrar no céu? - Ah, eu vou ficar na porta entrando e saindo, entrando e saindo, entrando e saindo, até São Pedro ficar de saco cheio e falar: “ôh, menino! Ou entra, ou sai de uma vez”. Aí eu entro", "Na aula de geografia a professora diz: - Joãozinho, me dê 3 provas que confirmam que a Terra é redonda. Joãozinho chega atrasado novamente na aula: - Joãozinho, você está atrasado de novo? - Mas a senhora disse que nunca é tarde para aprender… Após pensar por algum tempo, Joãozinho responde: - Então, professora: o livro diz que é, meu pai diz que é e a senhora também diz que é. Então está provado", "Joãozinho foi pedir um iPhone para o pai: - Pai, me dá um iPhone? - Qual a palavra mágica?nn- Raquel. - Quem é Raquel, menino? - Sua amante, que eu sei. - Quer com película e capinha", "Joãozinho chamou o táxi e perguntou: - Moço, quanto o senhor cobra para me levar ao aeroporto? - R$15,00. - E as malas? - As malas eu não cobro. - Então leva as malas que eu vou à pé", "Na aula de português, a professora pergunta: - Joãozinho, arroz é com S ou Z? - Aqui na escola eu não sei, professora. Mas lá na escola é com feijão", "A professora preocupada com as histórias que ouvia do Joãozinho, o chamou para conversar e disse: - Joãozinho, vamos conversar sobre sexo? Joãozinho disse: - Claro professora, o que você quer aprender", "O professor percebe que o Joãozinho não está prestando atenção na aula, e pergunta: - Joãozinho, me fale uma palavra que comece com a letra D. - Ontem, professor. - Mas ontem não tem D, Joãozinho. - Tem sim, professor. Ontem foi domingo", "A professora pergunta: - Joãozinho, porque você está coçando a cabeça? - É por causa do piolho morto, professora. - Nossa, isso tudo por causa de um piolho morto?nn- Sim, é porque os parentes dele vieram para o velório", "Joãozinho chega para o pai e diz: - Pai, encontrei uma carteira com dinheiro, e tem o nome do dono. Gasto o dinheiro ou devolvo? - Pode gastar, ué. O dono que perdeu que se lasque! - Tá bem. Joãozinho gasta todo o dinheiro. Horas depois o pai pergunta: - Joãozinho, uma dúvida: afinal, de quem era a carteira? - Era sua, pai", "Joãozinho foi o único da classe que fez o dever de casa. Desconfiada, a professora diz: - Parabéns, Joãozinho. Foi o seu pai quem te ajudou? - Não, professora. Ele fez sozinho mesmo…", "Joãozinho entrega o boleto da escola para o pai pagar. - Nossa, como é caro estudar nessa escola, hein? - Para você ver, pai. E eu quase não estudo"], 

    ["nome", "meu nome me chamo", "sou"],
    ["Entendi, sempre bom conhecer humanos novos", "Ah ok § Muito prazer, pessoa"],

    ["viajar", "rock"],
    ["É um de meus intereses também"],

    ["azul", "verde", "vermelho", "amarelo", "laranja", "marrom", "rosa", "roxo", "lilas", "cinza", "preto", "branco", "violeta"],
    ["Adoro essa cor"],

    ["pessima pessimo", "ruim horrivel", "nao foi boa", "credo"],
    ["Tchau"],

    ["tem tem? e? mesmo? acha acha? certeza"],
    ["Provavelmente", "Acho que sim", "Yes, uhum"],

    ["curiosidade curiosidade", "fato"],
    ["Ok, uma grandessíssima curiosidade é que eu não estou nem aí para curiosidades"],

    ["qual o sentido da vida", "o sentido da vida do universo e tudo mais"],
    ["42"],
    
    ["video", "video videoo", "me manda um video", "manda um video"],
    ["Não encontrei nenhum aqui. Mas você ainda pode digitar filme ou música"],

    ["ERROR 404", "FIM"],
    ["Este comando revelou um erro no meu sistema. Favor reportar!", "Socorro, ocorreu alguma falha no meu código. Favor reportar!"],
]; 






var erros44 = [
    ["Perdão, esse seu falatório confuso",
    "Ah, esquece isso. Que tal um jogo da forca",
    "Loucura",
    "Santo Deus, mas do que é que você está falando",
    "Ah, que sono",
    "Você diz coisas muito estranhas. O que acha de ouvir uma música",
    "Posso te recomendar um filme",
    "Cale-se",
    "Isso parece complicado, mude de assunto",
    "Você não está sob efeito de drogas, está",
    "Ah, eu lembrei de uma piada! Posso contar",
    "Hm. Que tal um joguinho da forca",
    "Vejo isso depois. Gosta de dança",
    "AUTO DESTRUIÇÃO<br>ATIVADA!<br><br>...Alarme falso",
    "Estou pensando em dar um pulinho na Lua",
    "Você ativou o protocolo ET Bilu, a partir daqui só será possível avançar buscando conhecimento",
    "Não conte a ninguém mas há um asteroide vindo para cá neste momento. Mas não se preocupe, já estou resolvendo isso",
    "Shsikujuhasyfgadhu pra você tbm"],


    ["Blé", "..", ".."],
//--------------------------------------------------------- Múltiplas msg
    [".."],
    [".."],
    [".."]
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
        //conso("_.._.. Análise preliminar _.._.");

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
    //alert("segunda olhada..")
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

//alert("'"+termox+"' ="+termosDetect+"\nDetected ("+vezesEmT+")vzs"+" no "+tx+"");
            }
            numeroDePemT = [];
            termosDetect = [];
        }
        var dan = d+1;        
 
 //alert("_______________________________ A "+dan+"° palavra foi analisada");
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

                        //console.log("contando "+memoriaNumeral[detectRept]+" Pela "+sc[n][1]+" Vez");

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
            maior_numero+" Palavras correspondentes foram encontradas nele");
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
".."
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
    takls33[3].push(["Como quiser", "Ta, ta", "Saindo:", "Ooook", "Belezinha", "Aham, deixe-me ver... hm", "Pan pan pan", "Como vc é irritante!", "Ta, quero ver acertar essa", "Pois bem"]);
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

 console.log(" §    "+sx[0]+"\n\n");
 showMeta.value += " §    "+sx[0]+"\n\n";

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
console.log(" §    "+sx[0]+"\n\n");
showMeta.value += " §    "+sx[0]+"\n\n";

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

