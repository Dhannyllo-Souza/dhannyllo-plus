var opcs = document.getElementById("opcsss");
var temp1 = document.getElementById("temporada1");
var temp2 = document.getElementById("temporada2");
var temp3 = document.getElementById("temporada3");
var temp4 = document.getElementById("temporada4");
var temp5 = document.getElementById("temporada5");
var temp6 = document.getElementById("temporada6");
var temp7 = document.getElementById("temporada7");
var temp8 = document.getElementById("temporada8");
var temp9 = document.getElementById("temporada9");
var temp10 = document.getElementById("temporada10");
var temp11 = document.getElementById("temporada11");
var temp12 = document.getElementById("temporada12");
var temp13 = document.getElementById("temporada13");

let idiom = "dub";


function mudaDubLeg(idiom){
var temp1Dub = `<img id="temp1" class="image-temp" src="https://i.pinimg.com/736x/e8/89/4f/e8894fda6b03f20bb35bb9a0ae55d1c3--ninth-doctor-the-doctor.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2005</i></p>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 01]:</b> Rose https://drive.google.com/open?id=0B0cnJ5ZQGC0ZYjhXQnZwcTFvM1U" href="#t01e01a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 01]:</b> Rose https://mega.nz/file/zqAFmAIA#yQvPMXr69RJTF5EBYRoYSn1NS5M_PQ4C2OloHcNlzAE" href="#t01e01b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 01]:</b> Rose https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP01" href="#t01e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
            <!--<a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 01]:</b> Rose https://play.midiaflixhd.com/tv/57243/1/1/dub" href="#t01e01c">Dub <i class="bi bi-badge-sd"></i></a>-->
          </li>
          <!--<a href="https://www.flaticon.com/br/icones-gratis/mega" title="mega ícones">Mega ícones criados por Freepik - Flaticon</a>-->
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 02]:</b> O Fim do Mundo https://drive.google.com/open?id=0B0cnJ5ZQGC0ZM1FndjJNU2N3eFk" href="#t01e02a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 02]:</b> O Fim do Mundo https://mega.nz/file/K6QBBKaS#mxW_i6hfKZ_Gqxun9QURyvVpXDD7VoV_gRe_XZr-J3Q" href="#t01e-02-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 02]:</b> O Fim do Mundo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP02" href="#t01e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 03]:</b> Os Mortos Inquietos https://drive.google.com/open?id=0B0cnJ5ZQGC0Zb0ZNOUlscjVrQlU" href="#t01e03a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 03]:</b> Os Mortos Inquietos https://mega.nz/file/XuQhSA6Z#l0vPWbIA3ZXx6IW_5nDFzCwnnHmoev5YJTPofUSKIoE" href="#t01e-03-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 03]:</b> Os Mortos Inquietos https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP03" href="#t01e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 04]:</b> Alienígenas de Londres https://drive.google.com/open?id=0B0cnJ5ZQGC0ZU2M1elE3dkpydTQ" href="#t01e04a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 04]:</b> Alienígenas de Londres https://mega.nz/file/e2JziAia#f_NPoNNy5qeVKLloPWTwnL0C9eFTIUoeoxeT5fEJGDo" href="#t01e-04-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 04]:</b> Alienígenas de Londres https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP04" href="#t01e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 05]:</b> Terceira Guerra Mundial https://drive.google.com/open?id=0B0cnJ5ZQGC0ZektsR1d3UnEzX2c" href="#t01e05a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 05]:</b> Terceira Guerra Mundial https://mega.nz/file/LjBVlKhZ#eFBOSN_xQm0jmYscig7WfSMEZdBDqv8EaYmd5e6S-3A" href="#t01e-05-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
             <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 05]:</b> Terceira Guerra Mundial https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP05" href="#t01e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 06]:</b> Dalek https://drive.google.com/open?id=0B0cnJ5ZQGC0ZTGY5NjFDbDlmT0U" href="#t01e06a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 06]:</b> Dalek https://mega.nz/file/v6YTzYzD#esVBt2JR_kXHW28YDs5NwHAbiEE53QTo0wfUyzZ-_1k" href="#t01e-06-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 06]:</b> Dalek https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP06" href="#t01e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 07]:</b> O Jogo Longo https://drive.google.com/open?id=0B0cnJ5ZQGC0ZLTBLQ2llVEdlTGc" href="#t01e07a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 07]:</b> O Jogo Longo https://mega.nz/file/v2InDABR#h77jWDXAT8urr5F2p63IWhH2SXoSqp3b9-_5HpOTDbg" href="#t01e-07-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 07]:</b> O Jogo Longo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP07" href="#t01e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 08]:</b> Dia do Pai https://drive.google.com/open?id=0B0cnJ5ZQGC0ZR1JsdW5FMWgyYzg" href="#t01e08a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 08]:</b> Dia do Pai https://mega.nz/file/7uIDVIiR#3SIhQdAgVpFJbv3wxrkZedab_MPLNPGskuSbPnlLzSg" href="#t01e-08-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 08]:</b> Dia do Pai https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP08" href="#t01e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 09]:</b> A Criança Vazia https://drive.google.com/open?id=0B0cnJ5ZQGC0ZZ01NTkRUc0RXQWs" href="#t01e09a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 09]:</b> A Criança Vazia https://mega.nz/file/nnJRHQgB#ipDlqnMEbQ39v9VBVPDFFpRosCMn8MTLXtKu19-JrO4" href="#t01e-09-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 09]:</b> A Criança Vazia https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP09" href="#t01e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 10]:</b> O Doutor Dança https://drive.google.com/open?id=0B0cnJ5ZQGC0ZT0VadTJLMDRlVnc" href="#t01e10a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 10]:</b> O Doutor Dança https://mega.nz/file/CuR3FKSB#tm4ePw9h0DjoGTZScxgvTlSz4IQAhrdEF1FB4-VslZw" href="#t01e-10-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 10]:</b> O Doutor Dança https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP10" href="#t01e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 11]:</b> Cidade do Buum https://drive.google.com/open?id=0B0cnJ5ZQGC0ZelZNN2preWEtT0U" href="#t01e11a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 11]:</b> Cidade do Buum https://mega.nz/file/7iRj1SpS#G_RK5Ym_Tj5Bl4E6lubXA2xmYJ0bflnhh9O85o463Ok" href="#t01e-11-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 11]:</b> Cidade do Buum https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP11" href="#t01e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 12]:</b> Lobo Mau https://drive.google.com/open?id=0B0cnJ5ZQGC0ZaGFzRG1UOWRISms" href="#t01e12a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 12]:</b> Lobo Mau https://mega.nz/file/D3YjzCzR#QV6O3R1xQWCI6sO_AiwuT0xZ__MQlDBQclthj2CWNog" href="#t01e-12-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 12]:</b> Lobo Mau https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP12" href="#t01e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 13]:</b> Seguindo Caminhos Separados https://drive.google.com/open?id=0B0cnJ5ZQGC0ZUk5LMTBQTjJBaWc" href="#t01e13a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 13]:</b> Seguindo Caminhos Separados https://mega.nz/file/OyB1GSAR#NsHvHMOn_g3-URNli4GYSJcc2ggI_f2tH8HRp-BE6s8" href="#t01e-13-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 13]:</b> Seguindo Caminhos Separados https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT01EP13" href="#t01e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Off (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Renascido https://drive.google.com/open?id=1HhI5cuHTa2SZzF8txJfajnVCr0mggEr4" href="#t01efa">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Renascido https://m.youtube.com/watch?v=fey0PS2jVIk" href="#t01efb">Mini-EP <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Doutor & Rose<i hidden></i> &#9825 https://youtu.be/hxfNZswFeNE" href="#t01edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9° Doutor &#9825;]:<i hidden></i></b> A Tempestade Iminente https://m.youtube.com/watch?v=REHnR-rkHgw" href="#t01edt2">2 <i class="bi bi-youtube"></i></a>
            <!--
            <a onclick="siteLink(this.name)" name="Os Melhores Momentos de Rose Tyler na 1° Temporada<i hidden></i> &#9825; https://m.youtube.com/watch?v=TnZoLSpRTJg" href="#t01edt3">3 <i class="bi bi-youtube"></i></a>-->
          </li>
          <br><br>
          <li><p class="pex">Considerações Finais</p>
            <i style="padding: 3px;">No fim desta temporada, dar-se início ao spin-off:</i><br>
            <a href="https://mahblue6.blogspot.com/2020/02/torchwood-1-temporada-legendada.html" target="_blank">Torchwood</a><br>
            <i style="padding: 3px;">(uma série paralela)</i>
          </li>`;

var temp1Leg = `<img id="temp1" class="image-temp" src="https://i.pinimg.com/736x/e8/89/4f/e8894fda6b03f20bb35bb9a0ae55d1c3--ninth-doctor-the-doctor.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2005</i></p>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 01]:</b> Rose https://drive.google.com/file/d/1u4mtGpJk3CFuWI4usUbie1il8qEgQSFs/view?usp=sharing" href="#t01e01a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 01]:</b> Rose LINK" href="#t01e01b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 01]:</b> Rose LINK" href="#t01e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <!--<a href="https://www.flaticon.com/br/icones-gratis/mega" title="mega ícones">Mega ícones criados por Freepik - Flaticon</a>-->
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 02]:</b> The End of the World https://drive.google.com/file/d/1LkaNSacLGcD7dX_NLGikPxd-riAxVW99/view?usp=sharing" href="#t01e02a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 02]:</b> The End of the World LINK" href="#t01e-02-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 02]:</b> The End of the World LINK" href="#t01e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 03]:</b> The Unquiet Dead https://drive.google.com/file/d/1VCassN7reyuc5eYUutH4wKqJ4wg7lLA8/view?usp=sharing" href="#t01e03a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 03]:</b> The Unquiet Dead LINK" href="#t01e-03-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 03]:</b> The Unquiet Dead LINK" href="#t01e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 04]:</b> Aliens of London https://drive.google.com/file/d/1L53u7hGQT3TQwohy1NY_pF1wzfvJ0Blq/view?usp=sharing" href="#t01e04a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 04]:</b> Aliens of London LINK" href="#t01e-04-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 04]:</b> Aliens of London LINK" href="#t01e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 05]:</b> World War Three https://drive.google.com/file/d/1JiOFxfT-HGreArjVUvCc4pK-DMKtk0PN/view?usp=sharing" href="#t01e05a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 05]:</b> World War Three LINK" href="#t01e-05-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
             <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 05]:</b> World War Three LINK" href="#t01e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 06]:</b> Dalek hhttps://drive.google.com/file/d/1TMD0pp7SUfn7Z_IJVubJm5Atvnzkrarf/view?usp=sharing" href="#t01e06a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 06]:</b> Dalek LINK" href="#t01e-06-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 06]:</b> Dalek LINK" href="#t01e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 07]:</b> The Long Game https://drive.google.com/file/d/1jAy2CM4bJMN5jnEIxY_CeNBFyv8absmO/view?usp=sharing" href="#t01e07a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 07]:</b> The Long Game LINK" href="#t01e-07-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 07]:</b> The Long Game LINK" href="#t01e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 08]:</b> Father's Day https://drive.google.com/file/d/1jAy2CM4bJMN5jnEIxY_CeNBFyv8absmO/view?usp=sharing" href="#t01e08a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 08]:</b> Father's Day LINK" href="#t01e-08-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 08]:</b> Father's Day LINK" href="#t01e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 09]:</b> The Empty Child https://drive.google.com/file/d/1mRwzKTufc_0JVZeO_6YzQ1oM0LxB_ST6/view?usp=sharing" href="#t01e09a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 09]:</b> The Empty Child LINK" href="#t01e-09-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 09]:</b> The Empty Child LINK" href="#t01e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 10]:</b> The Doctor Dances https://drive.google.com/file/d/1-4QB5axmVtAA-j4t2Vk-1flwxAPButgu/view?usp=sharing" href="#t01e10a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 10]:</b> The Doctor Dances LINK" href="#t01e-10-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 10]:</b> The Doctor Dances LINK" href="#t01e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 11]:</b> Boom Town https://drive.google.com/file/d/1rLqyVA7ef-I7vBC3uV2beDIWgJHluKEi/view?usp=sharing" href="#t01e11a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 11]:</b> Boom Town LINK" href="#t01e-11-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 11]:</b> Boom Town LINK" href="#t01e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 12]:</b> Bad Wolf https://drive.google.com/file/d/1_Zv3_AmAie9ya1hp9GZJUF7X4pJuqSEC/view?usp=sharing" href="#t01e12a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 12]:</b> Bad Wolf LINK" href="#t01e-12-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 12]:</b> Bad Wolf LINK" href="#t01e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[1°T ☆ EP 13]:</b> The Parting of the Ways https://drive.google.com/file/d/1vBwyQ2MTkz1dn0ClgE_ZFoyvKPfSuk_h/view?usp=sharing" href="#t01e13a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 13]:</b> The Parting of the Ways LINK" href="#t01e-13-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[1°T ☆ EP 13]:</b> The Parting of the Ways LINK" href="#t01e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Off (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Born Again https://drive.google.com/open?id=1HhI5cuHTa2SZzF8txJfajnVCr0mggEr4" href="#t01efa">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Born Again https://m.youtube.com/watch?v=fey0PS2jVIk" href="#t01efb">Mini-EP <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Doutor & Rose<i hidden></i> &#9825 https://youtu.be/hxfNZswFeNE" href="#t01edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9° Doutor &#9825;]:<i hidden></i></b> A Tempestade Iminente https://m.youtube.com/watch?v=REHnR-rkHgw" href="#t01edt2">2 <i class="bi bi-youtube"></i></a>
            <!--
            <a onclick="siteLink(this.name)" name="Os Melhores Momentos de Rose Tyler na 1° Temporada<i hidden></i> &#9825; https://m.youtube.com/watch?v=TnZoLSpRTJg" href="#t01edt3">3 <i class="bi bi-youtube"></i></a>-->
          </li>
          <br><br>
          <li><p class="pex">Considerações Finais</p>
            <i style="padding: 3px;">No fim desta temporada, dar-se início ao spin-off:</i><br>
            <a href="https://mahblue6.blogspot.com/2020/02/torchwood-1-temporada-legendada.html" target="_blank">Torchwood</a><br>
            <i style="padding: 3px;">(uma série paralela)</i>
          </li>`;



var temp2Dub = `<img id="temp2" class="image-temp" src="https://3.bp.blogspot.com/-547frdsYb1w/VxVMOCLcXMI/AAAAAAAAW0k/gY9Zlt9ArtkJL4QnrvyI1M-WMd50-Gu3gCLcB/s1600/impossible%2Bplanet%2B1.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2006</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 00]:</b> A Invasão do Natal https://drive.google.com/open?id=0B0cnJ5ZQGC0ZX2dlUm9VbEF0Tjg" href="#t02e-00-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 00]:</b> A Invasão do Natal https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP00" href="#t02e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 00]:</b> A Invasão do Natal https://mixdrop.to/e/84dl66j1uzk91v" href="#t02e-00-b">Dub <i class="bi bi-caret-right-square"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 01]</b> https://drive.google.com/open?id=1yZ-eM2gthqEXdT-I775kbRmXVzLPikQk" href="#t02efa-01">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 01]</b> https://youtu.be/h5HJi_Mjs_M" href="#t02efb-01">Mini-EP <i class="bi bi-youtube"></i></a><br>

            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 01]:</b> Nova Terra https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNWV5eUowNW1HQms" href="#t02e01a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 01]:</b> Nova Terra https://mixdrop.to/e/o843en6vu" href="#t02e01b">Dub <i class="bi bi-caret-right-square"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 01]:</b> Nova Terra https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP01" href="#t02e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 02]</b> https://drive.google.com/open?id=1sNcMTHBlUNiy26KgFShMG9JXhB1S_EE8" href="#t02efa-02">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 02]</b> https://youtu.be/fR3YcI6jb6M" href="#t02efb-02">Mini-EP <i class="bi bi-youtube"></i></a>
            <br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 02]: </b>Dente e Garra https://drive.google.com/open?id=0B0cnJ5ZQGC0ZS1lTTkdESnBsMVU" href="#t02e02a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 02]:</b> Dente e Garra https://play.midiaflixhd.com/tv/57243/2/2/dub" href="#t02e02c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 02]:</b> Dente e Garra https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP02" href="#t02e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 03]</b> https://drive.google.com/open?id=14B_MD5RXlQ9zJigfWU51zSLP4bkLs3eD" href="#t02efa-03">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 03]</b> https://youtu.be/SAG1v-uaFLo" href="#t02efb-03">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 03]: </b>Reunião Escolar https://drive.google.com/open?id=0B0cnJ5ZQGC0ZQTZKbVVKX1hXUkU" href="#t02e03a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 03]:</b> Reunião Escolar https://play.midiaflixhd.com/tv/57243/2/3/dub" href="#t02e03c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 03]:</b> Reunião Escolar https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP03" href="#t02e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 04]</b> https://drive.google.com/open?id=16h2HgCVd8G8t0Hzu4-3aMQLf1ZGilZZz" href="#t02efa-04">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 04]</b> https://youtu.be/XFo3IJugRcM" href="#t02efb-04">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 04]: </b>A Garota na Lareira https://drive.google.com/open?id=0B0cnJ5ZQGC0ZQ3ZhMlcxejdTRDQ" href="#t02e04a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 04]:</b> A Garota na Lareira https://play.midiaflixhd.com/tv/57243/2/4/dub" href="#t02e04c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 04]:</b> A Garota na Lareira https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP04" href="#t02e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 05]</b> https://drive.google.com/open?id=1-NHfARLXL9M4oYi4-_X7c4CAW1PqsteL" href="#t02efa-05">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 05]</b> https://youtu.be/1e8_5Le81EY" href="#t02efb-05">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 05]: </b>A Ascensão dos Cyborgues https://drive.google.com/open?id=0B0cnJ5ZQGC0ZUzItNXZpVmQ5ZXM" href="#t02e05a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 05]:</b> A Ascensão dos Cyborgues https://play.midiaflixhd.com/tv/57243/2/5/dub" href="#t02e05c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 05]:</b> A Ascensão dos Cyborgues https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP05" href="#t02e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 06]</b> https://drive.google.com/open?id=1hMyDsMsw6raqEIa_DYdewhcvHQSpQ8xo" href="#t02efa-06">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 06]</b> https://youtu.be/5-9Cad9ThXA" href="#t02efb-06">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 06]: </b>A Era do Aço https://drive.google.com/open?id=0B0cnJ5ZQGC0ZZFRWd19qY0xKVTA" href="#t02e06a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 06]:</b> A Era do Aço https://play.midiaflixhd.com/tv/57243/2/6/dub" href="#t02e06c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 06]:</b> A Era do Aço https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP06" href="#t02e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 07]</b> https://drive.google.com/open?id=1jpF8YJb4gJrhT1KFhIayI6lNE7bO6vuI" href="#t02efa-07">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 07]</b> https://youtu.be/o1QDjSt__6I" href="#t02efb-07">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 07]: </b>A Lanterna dos Idiotas https://drive.google.com/open?id=0B0cnJ5ZQGC0Zek9OUEpMYmlYbVU" href="#t02e07a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 07]:</b> A Lanterna dos Idiotas https://play.midiaflixhd.com/tv/57243/2/7/dub" href="#t02e07c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 07]:</b> A Lanterna dos Idiotas https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP07" href="#t02e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 08]</b> https://drive.google.com/open?id=14RR_zpRG7_OVv1IV1rgOZfmbtBeXQFLC" href="#t02efa-08">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 08]</b> https://youtu.be/bK7DSNIU_kE" href="#t02efb-08">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 08]: </b>O Planeta Impossível https://drive.google.com/open?id=1HQCr7TMNWGzgzuvcMQO19v7ccN3FwB3K" href="#t02e08a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 08]:</b> O Planeta Impossível https://play.midiaflixhd.com/tv/57243/2/8/dub" href="#t02e08c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 08]:</b> O Planeta Impossível https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP08" href="#t02e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 09]</b> https://drive.google.com/open?id=1cXARRAeX92lxQx6hlkeyb-HVkCRBpYLV" href="#t02efa-09">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 09]</b> https://youtu.be/SOWqObXhtVw" href="#t02efb-09">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 09]: </b>O Abismo do Demônio https://drive.google.com/open?id=0B0cnJ5ZQGC0ZUkhsclE1YmMzOEE" href="#t02e09a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 09]:</b> O Abismo do Demônio https://play.midiaflixhd.com/tv/57243/2/9/dub" href="#t02e09c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 09]:</b> O Abismo do Demônio https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP09" href="#t02e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 10]</b> https://drive.google.com/open?id=1u1rUBjIBDpdh2rqPEMOUs-YWjdk1GfEv" href="#t02efa-10">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 10]</b> https://youtu.be/8mQFjHss3AE" href="#t02efb-10">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 10]: </b>Amor e Monstros https://drive.google.com/open?id=0B0cnJ5ZQGC0ZSDRTcTh1ejlZVzQ" href="#t02e10a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 10]:</b> Amor e Monstros https://play.midiaflixhd.com/tv/57243/2/10/dub" href="#t02e10c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 10]:</b> Amor e Monstros https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP10" href="#t02e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="p">Mini-Episódio "interativo"</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[mini-episódio]: </b>O Ataque do Graske https://m.youtube.com/watch?v=QUTcDRVxO-0" href="#t02esA">Leg <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[mini-episódio]: </b>O Ataque do Graske https://drive.google.com/open?id=1NHaZgYPi59lBw2Dc1gdx2TLQkid0LbgV" href="#t02esB">Leg <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 11]</b> https://drive.google.com/open?id=1qCN3-Po1dBoSJl0vMUbV-iKiCm9XDMMu" href="#t02efa-11">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 11]</b> https://youtu.be/5n8V8p_okYI" href="#t02efb-11">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 11]: </b>Tenha Medo Dela https://drive.google.com/open?id=0B0cnJ5ZQGC0ZZENYYVdvZFE1X00" href="#t02e11a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 11]:</b> Tenha Medo Dela https://play.midiaflixhd.com/tv/57243/2/11/dub" href="#t02e11c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 11]:</b> Tenha Medo Dela https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP11" href="#t02e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 12]</b> https://drive.google.com/open?id=177822LdLH74kPCqjjEKL1uE2y4VAZDdk" href="#t02efa-12">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 12]</b> https://youtu.be/bSsS3p_EYKQ" href="#t02efb-12">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 12]: </b>O Exército de Fantasmas https://drive.google.com/open?id=0B0cnJ5ZQGC0ZaElEVDBVTEFhTTA" href="#t02e12a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 12]:</b> O Exército de Fantasmas https://play.midiaflixhd.com/tv/57243/2/12/dub" href="#t02e12c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 12]:</b> O Exército de Fantasmas https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP12" href="#t02e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li> 
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 13]</b> https://drive.google.com/open?id=13lFCr53QVWu58yUGHoBOu-XCyXH7QL0E" href="#t02efa-13">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 13]</b> https://youtu.be/YMMHgznKKv0" href="#t02efb-13">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 13]: </b>O Juízo Final https://drive.google.com/open?id=0B0cnJ5ZQGC0ZSm1aOHg2REpGNnM" href="#t02e13a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 13]:</b> O Juízo Final https://play.midiaflixhd.com/tv/57243/2/13/dub" href="#t02e13c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 13]:</b> O Juízo Final https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT02EP13" href="#t02e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>Rose Tyler ... <i class='fas fa-heart-broken'></i> midias/rosedie.mp4" href="#t02edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="[música: Holding a Heart]: </b>... <i hidden></i><i class='fas fa-heart-broken'></i> https://m.youtube.com/watch?v=tmubOfJIfaY" href="#t02edt2">2 <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">Spin-Offs:</p>
            <a href="https://mahblue6.blogspot.com/2020/02/the-sarah-jane-adventures-1-temporada.html" target="_blank">The Sarah Jane Adventures</a><br>
            <a href="https://mahblue6.blogspot.com/2022/03/sarah-janes-alien-files-temporada.html" target="_blank">Sara Jane’s Alien Files</a><br>
            <i style="padding: 3px;">(Duas outras séries paralelas)</i>
          </li>`;

var temp2Leg = `<img id="temp2" class="image-temp" src="https://3.bp.blogspot.com/-547frdsYb1w/VxVMOCLcXMI/AAAAAAAAW0k/gY9Zlt9ArtkJL4QnrvyI1M-WMd50-Gu3gCLcB/s1600/impossible%2Bplanet%2B1.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2006</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 00]:</b> The Christmas Invasion https://drive.google.com/file/d/10OkFgHuo67xbs85eOwwVumqh3_9AiBoZ/view?usp=sharing" href="#t02e-00-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 00]:</b> The Christmas Invasion LINK" href="#t02e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 00]:</b> The Christmas Invasion LINK" href="#t02e-00-b">Leg <i class="bi bi-caret-right-square"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 01]</b> https://drive.google.com/open?id=1yZ-eM2gthqEXdT-I775kbRmXVzLPikQk" href="#t02efa-01">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 01]</b> https://youtu.be/h5HJi_Mjs_M" href="#t02efb-01">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 01]:</b> New Earth https://drive.google.com/file/d/1rlwdDyifKJmxAy1sWjh-plSJ6S4XIKCy/view?usp=sharing" href="#t02e01a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 01]:</b> New Earth LINK" href="#t02e01b">Leg <i class="bi bi-caret-right-square"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 01]:</b> New Earth LINK" href="#t02e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 02]</b> https://drive.google.com/open?id=1sNcMTHBlUNiy26KgFShMG9JXhB1S_EE8" href="#t02efa-02">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 02]</b> https://youtu.be/fR3YcI6jb6M" href="#t02efb-02">Mini-EP <i class="bi bi-youtube"></i></a>
            <br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 02]: </b>Tooth and Claw https://drive.google.com/file/d/1xzaH-dZuksfHrC590f9eH_2mIzOQIneJ/view?usp=sharing" href="#t02e02a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 02]:</b> Tooth and Claw LINK" href="#t02e02c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 02]:</b> Tooth and Claw LINK" href="#t02e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 03]</b> https://drive.google.com/open?id=14B_MD5RXlQ9zJigfWU51zSLP4bkLs3eD" href="#t02efa-03">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 03]</b> https://youtu.be/SAG1v-uaFLo" href="#t02efb-03">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 03]: </b>School Reunion https://drive.google.com/file/d/1pyzSqhUdxje89MUQ_3jY1LQqNcZNZ2ff/view?usp=sharing" href="#t02e03a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 03]:</b> School Reunion LINK" href="#t02e03c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 03]:</b> School Reunion LINK" href="#t02e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 04]</b> https://drive.google.com/open?id=16h2HgCVd8G8t0Hzu4-3aMQLf1ZGilZZz" href="#t02efa-04">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 04]</b> https://youtu.be/XFo3IJugRcM" href="#t02efb-04">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 04]: </b>The Girl in the Fireplace https://drive.google.com/file/d/15fyA2AyLFlpUKkY0DjhPijfMARXV1mF2/view?usp=sharing" href="#t02e04a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 04]:</b> The Girl in the Fireplace LINK" href="#t02e04c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 04]:</b> The Girl in the Fireplace LINK" href="#t02e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 05]</b> https://drive.google.com/open?id=1-NHfARLXL9M4oYi4-_X7c4CAW1PqsteL" href="#t02efa-05">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 05]</b> https://youtu.be/1e8_5Le81EY" href="#t02efb-05">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 05]: </b>Rise of the Cybermen https://drive.google.com/file/d/1vPA6uKOoF2l0CTQZbtwhxKjO8DeLH1WB/view?usp=sharing" href="#t02e05a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 05]:</b> Rise of the Cybermen LINK" href="#t02e05c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 05]:</b> Rise of the Cybermen LINK" href="#t02e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 06]</b> https://drive.google.com/open?id=1hMyDsMsw6raqEIa_DYdewhcvHQSpQ8xo" href="#t02efa-06">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 06]</b> https://youtu.be/5-9Cad9ThXA" href="#t02efb-06">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 06]: </b>The Age of Steel https://drive.google.com/file/d/1lU7ntxIh66CY5QCS5XMHy6z9U2RQvvzj/view?usp=sharing" href="#t02e06a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 06]:</b> The Age of Steel LINK" href="#t02e06c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 06]:</b> The Age of Steel LINK" href="#t02e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 07]</b> https://drive.google.com/open?id=1jpF8YJb4gJrhT1KFhIayI6lNE7bO6vuI" href="#t02efa-07">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 07]</b> https://youtu.be/o1QDjSt__6I" href="#t02efb-07">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 07]: </b>The Idiot's Lantern https://drive.google.com/file/d/1zKCfAPo3T_ccvjDp6kpcLTphq13W2Mh6/view?usp=sharing" href="#t02e07a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 07]:</b> The Idiot's Lantern LINK" href="#t02e07c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 07]:</b> The Idiot's Lantern LINK" href="#t02e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 08]</b> https://drive.google.com/open?id=14RR_zpRG7_OVv1IV1rgOZfmbtBeXQFLC" href="#t02efa-08">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 08]</b> https://youtu.be/bK7DSNIU_kE" href="#t02efb-08">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 08]: </b>The Impossible Planet https://drive.google.com/file/d/1lDYkIXo2_jRkTiYBIWO4oPVsIJVASMA1/view?usp=sharing" href="#t02e08a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 08]:</b> The Impossible Planet LINK" href="#t02e08c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 08]:</b> The Impossible Planet LINK" href="#t02e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 09]</b> https://drive.google.com/open?id=1cXARRAeX92lxQx6hlkeyb-HVkCRBpYLV" href="#t02efa-09">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 09]</b> https://youtu.be/SOWqObXhtVw" href="#t02efb-09">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 09]: </b>The Satan Pit https://drive.google.com/file/d/1y5toLjr3dz7y5FywyWBS72qZfxIFN699/view?usp=sharing" href="#t02e09a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 09]:</b> The Satan Pit LINK" href="#t02e09c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 09]:</b> The Satan Pit LINK" href="#t02e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 10]</b> https://drive.google.com/open?id=1u1rUBjIBDpdh2rqPEMOUs-YWjdk1GfEv" href="#t02efa-10">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 10]</b> https://youtu.be/8mQFjHss3AE" href="#t02efb-10">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 10]: </b>Love & Monsters https://drive.google.com/file/d/1y_PJ02xl5zjq9zpvpwLVGQKdMrnKabDr/view?usp=sharing" href="#t02e10a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 10]:</b> Love & Monsters LINK" href="#t02e10c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 10]:</b> Love & Monsters LINK" href="#t02e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="p">Mini-Episódio "interativo"</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[mini-episódio]: </b>Attack of the Graske https://m.youtube.com/watch?v=QUTcDRVxO-0" href="#t02esA">Leg <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[mini-episódio]: </b>Attack of the Graske https://drive.google.com/open?id=1NHaZgYPi59lBw2Dc1gdx2TLQkid0LbgV" href="#t02esB">Leg <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 11]</b> https://drive.google.com/open?id=1qCN3-Po1dBoSJl0vMUbV-iKiCm9XDMMu" href="#t02efa-11">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 11]</b> https://youtu.be/5n8V8p_okYI" href="#t02efb-11">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 11]: </b>Fear Her https://drive.google.com/file/d/1PssPkxHQRWXJv0mFyH_xJd5E6p6NhNp1/view?usp=sharing" href="#t02e11a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 11]:</b> Fear Her LINK" href="#t02e11c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 11]:</b> Fear Her LINK" href="#t02e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 12]</b> https://drive.google.com/open?id=177822LdLH74kPCqjjEKL1uE2y4VAZDdk" href="#t02efa-12">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 12]</b> https://youtu.be/bSsS3p_EYKQ" href="#t02efb-12">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 12]: </b>Army of Ghosts https://drive.google.com/file/d/1dFK5lqA4qUuaVgUY8LeE6hRZGmusFHMm/view?usp=sharing" href="#t02e12a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 12]:</b> Army of Ghosts LINK" href="#t02e12c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 12]:</b> Army of Ghosts LINK" href="#t02e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li> 
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 13]</b> https://drive.google.com/open?id=13lFCr53QVWu58yUGHoBOu-XCyXH7QL0E" href="#t02efa-13">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Tardisorde ☆ EP 13]</b> https://youtu.be/YMMHgznKKv0" href="#t02efb-13">Mini-EP <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[2°T ☆ EP 13]: </b>Doomsday https://drive.google.com/file/d/1yvR4Nb6UYkYIPVzy9hDfBMPRAiqCa3Wh/view?usp=sharing" href="#t02e13a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 13]:</b> Doomsday LINK" href="#t02e13c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[2°T ☆ EP 13]:</b> Doomsday LINK" href="#t02e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>Rose Tyler ... <i class='fas fa-heart-broken'></i> midias/rosedie.mp4" href="#t02edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="[música: Holding a Heart]: </b>... <i hidden></i><i class='fas fa-heart-broken'></i> https://m.youtube.com/watch?v=tmubOfJIfaY" href="#t02edt2">2 <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">Spin-Offs:</p>
            <a href="https://mahblue6.blogspot.com/2020/02/the-sarah-jane-adventures-1-temporada.html" target="_blank">The Sarah Jane Adventures</a><br>
            <a href="https://mahblue6.blogspot.com/2022/03/sarah-janes-alien-files-temporada.html" target="_blank">Sara Jane’s Alien Files</a><br>
            <i style="padding: 3px;">(Duas outras séries paralelas)</i>
          </li>`;




var temp3Dub = `<img id="temp3" class="image-temp" src="https://uploads.spiritfanfiction.com/historias/capas/202108/de-olhos-fechados-22889122-270820211548.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2007</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 00]:</b> Noiva Em Fuga https://drive.google.com/open?id=0B0cnJ5ZQGC0ZQjJleGw3TW5VUWM" href="#t03e-00-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 00]:</b> Noiva Em Fuga https://mixdrop.to/e/4nzd3399cdm046" href="#t03e-00-b">Dub <i class="bi bi-caret-right-square"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 00]:</b> Noiva Em Fuga https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP00" href="#t03e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 01]:</b> Smith e Jones https://drive.google.com/open?id=0B0cnJ5ZQGC0ZR3lqaHBhLXd1QVk" href="#t03e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 01]:</b> Smith e Jones https://play.midiaflixhd.com/tv/57243/3/1/dub" href="#t03e-01-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 01]:</b> Smith e Jones https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP01" href="#t03e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 02]:</b> O Código Shakespeare https://drive.google.com/open?id=0B0cnJ5ZQGC0ZMTl1WXY2aVo4MVk" href="#t03e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 02]:</b> O Código Shakespeare https://play.midiaflixhd.com/tv/57243/3/2/dub" href="#t03e-02-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 02]:</b> O Código Shakespeare https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP02" href="#t03e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 03]:</b> Congestionamento https://drive.google.com/open?id=0B0cnJ5ZQGC0ZaGdVaXhVaXBtYW8" href="#t03e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 03]:</b> Congestionamento https://play.midiaflixhd.com/tv/57243/3/3/dub" href="#t03e-03-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 03]:</b> Congestionamento https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP03" href="#t03e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 04]:</b> Daleks em Manhattan https://drive.google.com/open?id=0B0cnJ5ZQGC0Zb214R3dGc2tjODg" href="#t03e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 04]:</b> Daleks em Manhattan https://play.midiaflixhd.com/tv/57243/3/4/dub" href="#t03e-04-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 04]:</b> Daleks em Manhattan https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP04" href="#t03e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 05]:</b> Evolução dos Daleks https://drive.google.com/open?id=0B0cnJ5ZQGC0ZMlFiS0c0THNsQjA" href="#t03e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 05]:</b> Evolução dos Daleks https://play.midiaflixhd.com/tv/57243/3/5/dub" href="#t03e-05-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 05]:</b> Evolução dos Daleks https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP05" href="#t03e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 06]:</b> O Experimento Lázaro https://drive.google.com/open?id=0B0cnJ5ZQGC0ZYnNtZjdwT3VaOW8" href="#t03e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 06]:</b> O Experimento Lázaro https://play.midiaflixhd.com/tv/57243/3/6/dub" href="#t03e-06-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 06]:</b> O Experimento Lázaro https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP06" href="#t03e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 07]:</b> 42 https://drive.google.com/open?id=0B0cnJ5ZQGC0ZMW4xY2dUMlpLZ2M" href="#t03e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 07]:</b> 42 https://play.midiaflixhd.com/tv/57243/3/7/dub" href="#t03e-07-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 07]:</b> 42 https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP07" href="#t03e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 08]:</b> Natureza Humana https://drive.google.com/open?id=0B0cnJ5ZQGC0ZU2pLOGgzelFaeXM" href="#t03e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 08]:</b> Natureza Humana https://play.midiaflixhd.com/tv/57243/3/8/dub" href="#t03e-08-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 08]:</b> Natureza Humana https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP08" href="#t03e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 09]:</b> A Família de Sangue https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNTdUZ3dvTmR1UVU" href="#t03e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 09]:</b> A Família de Sangue https://play.midiaflixhd.com/tv/57243/3/9/dub" href="#t03e-09-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 09]:</b> A Família de Sangue https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP09" href="#t03e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 10]:</b> Não Pisque https://drive.google.com/open?id=0B0cnJ5ZQGC0ZcVAtTUdadkdBTnM" href="#t03e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 10]:</b> Não Pisque https://play.midiaflixhd.com/tv/57243/3/10/dub" href="#t03e-10-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 10]:</b> Não Pisque https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP10" href="#t03e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 11]:</b> Utopia https://drive.google.com/open?id=0B0cnJ5ZQGC0ZcXhkbzJtdzc3eEk" href="#t03e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 11]:</b> Utopia https://play.midiaflixhd.com/tv/57243/3/11/dub" href="#t03e-11-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 11]:</b> Utopia https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP11" href="#t03e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 12]:</b> O Som dos Tambores https://drive.google.com/open?id=0B0cnJ5ZQGC0ZY0lndEpraHpiYmc" href="#t03e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 12]:</b> O Som dos Tambores https://play.midiaflixhd.com/tv/57243/3/12/dub" href="#t03e-12-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 12]:</b> O Som dos Tambores https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP12" href="#t03e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 13]:</b> O Último dos Senhores do Tempo https://drive.google.com/file/d/1jMZxbBLRIxKCy3_K150Pru4HP-WS3qr3" href="#t03e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 13]:</b> O Último dos Senhores do Tempo https://play.midiaflixhd.com/tv/57243/3/13/dub" href="#t03e-13-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 13]:</b> O Último dos Senhores do Tempo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03EP13" href="#t03e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódio (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Mini-Episódio]:</b> Children in Need de 2007 – Time Crash https://drive.google.com/open?id=1tBIfPr4ojMyEx_zxyUHC_OK5vAFp_g-j" href="#t03off1a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Mini-Episódio]:</b> Children in Need de 2007 – Time Crash https://www.facebook.com/johnsmith221b/videos/234544144873224" href="#t03off1b">Leg <i class="bi bi-facebook"></i></a>
          </li>
          <br>
          <li><p class="p">Episódio 14 (Animação):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Animação]:</b> A Busca do Infinito https://drive.google.com/open?id=0B0cnJ5ZQGC0ZZDVoMWozSE1fZFU" href="#t03e-14-a">Dub <i class="fab fa-google-drive"></i></a>
            <!--<a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ Animação]:</b> A Busca do Infinito https://pt-pt.facebook.com/ManiaDoctor/videos/1626582520713281" href="#t03e-14-b">Dub <i class="bi bi-facebook"></i></a>-->
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ Animação]:</b> A Busca do Infinito https://play.midiaflixhd.com/tv/57243/3/14/dub" href="#t03e-14-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Animação]:</b> A Busca do Infinito https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT03ES" href="#t03e-14-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="&#9825;<i hidden></i> https://m.youtube.com/watch?v=mio4VvQmFO4" href="#t03edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[???]:</b> Um Barato Muito Doido de Espaço-Tempo Coisado.<i hidden></i> https://m.youtube.com/watch?v=wWcCRh1fSD8" href="#t03edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp3Leg = `<img id="temp3" class="image-temp" src="https://uploads.spiritfanfiction.com/historias/capas/202108/de-olhos-fechados-22889122-270820211548.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2007</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 00]:</b> The Runaway Bride https://drive.google.com/file/d/1rW1NsyYRu3REF7oBXvXVbHxLF_72I9kA/view?usp=sharing" href="#t03e-00-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 00]:</b> The Runaway Bride LINK" href="#t03e-00-b">Leg <i class="bi bi-caret-right-square"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 00]:</b> The Runaway Bride LINK" href="#t03e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 01]:</b> Smith and Jones https://drive.google.com/file/d/13NDcDfX7X2ythkY8Kl8Bt6eFFFVWB91K/view?usp=sharing" href="#t03e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 01]:</b> Smith and Jones LINK" href="#t03e-01-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 01]:</b> Smith and Jones LINK" href="#t03e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 02]:</b> The Shakespeare Code https://drive.google.com/file/d/1_b6jagdW7dy4FJBbAZJVcMUcrApHZieY/view?usp=sharing" href="#t03e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 02]:</b> The Shakespeare Code LINK" href="#t03e-02-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 02]:</b> The Shakespeare Code LINK" href="#t03e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 03]:</b> Gridlock https://drive.google.com/file/d/14WGYr0HCR06uOEn-OpGFf7mwLal6T3l8/view?usp=sharing" href="#t03e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 03]:</b> Gridlock LINK" href="#t03e-03-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 03]:</b> Gridlock LINK" href="#t03e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 04]:</b> Daleks in Manhattan https://drive.google.com/file/d/1xFOY5Vg2c-upYwrEk9s6Pbm8mnuwdTrw/view?usp=sharing" href="#t03e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 04]:</b> Daleks in Manhattan LINK" href="#t03e-04-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 04]:</b> Daleks in Manhattan LINK" href="#t03e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 05]:</b> Evolution of the Daleks https://drive.google.com/file/d/1qjxk_2oqFgNVIBk9WFsD1hZqmImsXeUI/view?usp=sharing" href="#t03e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 05]:</b> Evolution of the Daleks LINK" href="#t03e-05-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 05]:</b> Evolution of the Daleks LINK" href="#t03e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 06]:</b> The Lazarus Experiment https://drive.google.com/file/d/1748_R2itH_GrZ8VGiwpz611PU_iJ9x0A/view?usp=sharing" href="#t03e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 06]:</b> The Lazarus Experiment LINK" href="#t03e-06-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 06]:</b> The Lazarus Experiment LINK" href="#t03e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 07]:</b> 42 https://drive.google.com/file/d/1JefBKbNeZEnqueiKqgWSU8AjYKoCShLz/view?usp=sharing" href="#t03e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 07]:</b> 42 LINK" href="#t03e-07-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 07]:</b> 42 LINK" href="#t03e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 08]:</b> Human Nature https://drive.google.com/file/d/1dpEuwO5frHZn7wSLZ-o1orUgkwdSnNdM/view?usp=sharing" href="#t03e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 08]:</b> Human Nature LINK" href="#t03e-08-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 08]:</b> Human Nature LINK" href="#t03e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 09]:</b> The Family of Blood https://drive.google.com/file/d/1oHZFUbYUApJBjefqFoKW_nN82BG5PhHe/view?usp=sharing" href="#t03e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 09]:</b> The Family of Blood LINK" href="#t03e-09-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 09]:</b> The Family of Blood LINK" href="#t03e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 10]:</b> Blink https://drive.google.com/file/d/1vnNAeWl9Xk4KAdzetCEmYpqmHR5d1vTa/view?usp=sharing" href="#t03e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 10]:</b> Blink LINK" href="#t03e-10-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 10]:</b> Blink LINK" href="#t03e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 11]:</b> Utopia https://drive.google.com/file/d/135OZF8UN4amAu9tk6STn2GoMn07bunR-/view?usp=sharing" href="#t03e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 11]:</b> Utopia LINK" href="#t03e-11-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 11]:</b> Utopia LINK" href="#t03e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 12]:</b> The Sound of Drums https://drive.google.com/file/d/1yA2xCzvfODfLo_yupibqyCBLgUbP4CrG/view?usp=sharing" href="#t03e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 12]:</b> The Sound of Drums LINK" href="#t03e-12-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 12]:</b> The Sound of Drums LINK" href="#t03e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ EP 13]:</b> Last of the Time Lords https://drive.google.com/file/d/1jltGH6yG1OeAyxcuUf_NT4cZkZfn5kp8/view?usp=sharing" href="#t03e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 13]:</b> Last of the Time Lords LINK" href="#t03e-13-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ EP 13]:</b> Last of the Time Lords LINK" href="#t03e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódio (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Mini-Episódio]:</b> Children in Need de 2007 – Time Crash https://drive.google.com/open?id=1tBIfPr4ojMyEx_zxyUHC_OK5vAFp_g-j" href="#t03off1a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Mini-Episódio]:</b> Children in Need de 2007 – Time Crash https://www.facebook.com/johnsmith221b/videos/234544144873224" href="#t03off1b">Leg <i class="bi bi-facebook"></i></a>
          </li>
          <br>
          <li><p class="p">Episódio 14 (Animação):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Animação]:</b> The Infinite Quest https://drive.google.com/file/d/1Cwkgn1npPXtnx3mYmVNtmpkzguwhQnsA/view?usp=sharing" href="#t03e-14-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[3°T ☆ Animação]:</b> The Infinite Quest LINK" href="#t03e-14-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[3°T ☆ Animação]:</b> The Infinite Quest LINK" href="#t03e-14-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="&#9825;<i hidden></i> https://m.youtube.com/watch?v=mio4VvQmFO4" href="#t03edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[???]:</b> Um Barato Muito Doido de Espaço-Tempo Coisado.<i hidden></i> https://m.youtube.com/watch?v=wWcCRh1fSD8" href="#t03edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;





var temp4Dub = `<img id="temp4" class="image-temp" src="https://upload.wikimedia.org/wikipedia/en/f/fd/Voyage_of_the_Damned.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2008</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 00]: </b>A Viagem dos Condenados https://drive.google.com/open?id=0B0cnJ5ZQGC0ZTnZieVI3eV9QLTQ" href="#t04e-00-a">Dub <i class="fab fa-google-drive"></i></a>
            <!--<a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]: </b>A Viagem dos Condenados https://feurl.com/v/d68wxixjdg5w3k3" href="#t04e-00-b">Dub <i class="bi bi-play-btn"></i></a>-->
            <a onclick="notifica(0)" href="#t04e-00-c">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]:</b> A Viagem dos Condenados https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP00" href="#t04e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 01]: </b>Parceiros no Crime https://drive.google.com/open?id=0B0cnJ5ZQGC0ZQUlCdmFZbFBFWVE" href="#t04e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]: </b>Parceiros no Crime https://mega.nz/file/jywAjKCS#UdjyJpUiheRy25hl-gavRZa-D4VEv-vtefev_9ScULs" href="#t04e-01-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]:</b> Parceiros no Crime https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP01" href="#t04e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 02]: </b>Os Fogos de Pompéia https://drive.google.com/open?id=0B0cnJ5ZQGC0ZMEZneHZvMU9ULTA" href="#t04e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]: </b>Os Fogos de Pompéia https://mega.nz/file/3yhSkaJC#O49CDLAF_G4-bxHzOe1OMYX5a5prbPcJjg5RcAElWc8" href="#t04e-02-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]:</b> Os Fogos de Pompéia https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP02" href="#t04e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 03]: </b>Planeta dos Ood https://drive.google.com/open?id=0B0cnJ5ZQGC0ZREVhNGxoT1dCS28" href="#t04e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]: </b>Planeta dos Ood https://mega.nz/file/uygCCQLK#eCgeNph2mKITlhlYmWw_PCL8dddqMRnKqmrSXjGYYU4" href="#t04e-03-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]:</b> Planeta dos Ood https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP03" href="#t04e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 04]: </b>O Estratagema Sontaran https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNERMdjh0MVhiVms" href="#t04e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]: </b>O Estratagema Sontaran https://mega.nz/file/nypg2SJA#U1cg3MkOGduXi15FCRPr0sR4ZISUdDIoOOAhjEiM3YU" href="#t04e-04-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]:</b> O Estratagema Sontaran https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP04" href="#t04e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 05]: </b>O Céu Envenenado https://drive.google.com/open?id=0B0cnJ5ZQGC0ZTDNIaEJRU28wLXc" href="#t04e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]: </b>O Céu Envenenado https://mega.nz/file/vv40ECBC#B-GcwAihAkbOzqg-cSGj9hKhCD0Rm191v2HHK7sdvqc" href="#t04e-05-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]:</b> O Céu Envenenado https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP05" href="#t04e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 06]: </b>A Filha do Doutor https://drive.google.com/open?id=0B0cnJ5ZQGC0ZYnJpRkljUEtORWM" href="#t04e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]: </b>A Filha do Doutor https://mega.nz/file/fu4glaRD#OGdp2gCi5rHwCXjqFxtjpZK6XebkfPwZcXxHUog822Q" href="#t04e-06-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]:</b> A Filha do Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP06" href="#t04e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 07]: </b>O Unicórnio e a Vespa https://drive.google.com/open?id=0B0cnJ5ZQGC0ZU2ZYSVJxSG5kWTQ" href="#t04e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]: </b>O Unicórnio e a Vespa https://mega.nz/file/uuxCxI4C#wwQCgL46kG3udgpYQGKVE1x_E6rAisUVAq52GugCyhU" href="#t04e-07-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]:</b> O Unicórnio e a Vespa https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP07" href="#t04e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>  
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 08]: </b>Silêncio na Biblioteca https://drive.google.com/open?id=0B0cnJ5ZQGC0ZQURiVHU2WjBfd2c" href="#t04e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]: </b>Silêncio na Biblioteca https://mega.nz/file/OzoizIrb#ordU5ayRRThyHwCbwZIomW1REVXFhkxJCaDvDuvQaOg" href="#t04e-08-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]:</b> Silêncio na Biblioteca https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP08" href="#t04e-08-ap">Dub <i class="bi bi-badge-hd"></i></a> 
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 09]: </b>Floresta dos Mortos https://drive.google.com/open?id=0B0cnJ5ZQGC0ZeTBlWEs5ZGJMSHc" href="#t04e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]: </b>Floresta dos Mortos https://mega.nz/file/n65A0awS#sIP0fQv8bh2wtR5EjNxsLJX2OQTruFX0i1uppM4ytLA" href="#t04e-09-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]:</b> Floresta dos Mortos https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP09" href="#t04e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 10]: </b>Meia-Noite https://drive.google.com/open?id=0B0cnJ5ZQGC0ZTXM0ZE1kMjBQVFU" href="#t04e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]: </b>Meia-Noite https://mega.nz/file/SjgQBYSb#R04QsZoy64DehWhZOaeN6Kw_oWuLMQR3EF60yiOOlF4" href="#t04e-10-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]:</b> Meia-Noite https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP10" href="#t04e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 11]: </b>Vire à Esquerda https://drive.google.com/open?id=0B0cnJ5ZQGC0ZUmRJeHhieGhWbFU" href="#t04e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]: </b>Vire à Esquerda https://mega.nz/file/63xSzALJ#H8E2BUJrvw0NmH9qVkgdUnudZ3P0G9VYKbYriFZ5J5c" href="#t04e-11-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]:</b> Vire à Esquerda https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP11" href="#t04e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 12]: </b>A Terra Roubada https://drive.google.com/open?id=0B0cnJ5ZQGC0ZbmZvS2FteDlhTVU" href="#t04e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]: </b>A Terra Roubada https://mega.nz/file/yzwEzQRR#jDrTzxdltXnfZrWGIsGY-6HZLrlhVO8jgsZ2LJmhONk" href="#t04e-12-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]:</b> A Terra Roubada  https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP12" href="#t04e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 13]: </b>O Fim da Jornada https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNkNKYU9hd3NEbkU" href="#t04e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 13]: </b>O Fim da Jornada https://mega.nz/file/zroA2AZD#hzkX8ptb0Hxfywc-ZndiwHDtJzq137LJNR7tVLeJEP4" href="#t04e-13-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 13]:</b> O Fim da Jornada https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP13" href="#t04e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>

            <a onclick="siteLink(this.name)" name="Hey There Rose Tyler - Ginger Ten<i hidden></i> https://youtu.be/qTlYKjFxbAc" href="#t04e-edt1">1 <i class="bi bi-youtube"></i></a>

            <a onclick="siteLink(this.name)" name="Dois Corações &#9825;&#9825;<i hidden></i> https://m.youtube.com/watch?v=rIHL-UqH82w" href="#t04e-edt2">2 <i class="bi bi-youtube"></i></a> 

          </li>
          <br><br>
          <li><p class="p">Episódio 14:</p>             
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 14]: </b>O Próximo Doutor https://drive.google.com/open?id=0B0cnJ5ZQGC0ZWW9HRUc0S1ZRSGc" href="#t04e-14-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 14]: </b>O Próximo Doutor https://mega.nz/file/CigA0aBY#GkNIMH6b8I8vXOKqI3ZNI1fiC7Gai0QDmdZNV2WkTpo" href="#t04e-14-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 14]:</b> O Próximo Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP14" href="#t04e-14-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 15:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 15]: </b>O Planeta dos Mortos https://drive.google.com/open?id=0B0cnJ5ZQGC0ZN3lfV2VTQnRpcWs" href="#t04e-15-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 15]: </b>O Planeta dos Mortos https://mega.nz/file/6zoUnYIL#6fppwHjpuJHSYjAz_23UZYeGuNrSIj_j0nIncNiPRqY" href="#t04e-15-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 15]:</b> O Planeta dos Mortos https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP15" href="#t04e-15-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 16:</p>             
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 16]: </b>As Águas de Marte https://drive.google.com/open?id=0B0cnJ5ZQGC0ZM0tlRXVvMDV1SjA" href="#t04e-16-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 16]: </b>As Águas de Marte https://mega.nz/file/jzwAyIAK#i_IaboLHBoMo10HhTenqD5OvnU6_q3Ty8MgGtsujlt4" href="#t04e-16-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 16]:</b> As Águas de Marte https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP16" href="#t04e-16-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 17:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 17]: </b>O Fim do Tempo Parte 1 https://drive.google.com/open?id=0B0cnJ5ZQGC0ZOVQ5T0laV0lfSzA" href="#t04e-17-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 17]: </b>O Fim do Tempo Parte 1 https://mega.nz/file/H2okCSRI#dz5kwgDSOGrcyg7mF_Q27eSPt7LbS1Y3yViaeT0sfs4" href="#t04e-17-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
             <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 17]:</b> O Fim do Tempo Parte 1 https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP17" href="#t04e-17-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 18:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 18]: </b>O Fim do Tempo Parte 2 https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNVg0cjAtMWo5WUE" href="#t04e-18-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 18]: </b>O Fim do Tempo Parte 2 https://mega.nz/file/ezwkDawD#VGt9HfhUE1Hrxjj0rJDNMTJoTh0b0qE4_2jasvhu0-U" href="#t04e-18-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 18]:</b> O Fim do Tempo Parte 2 https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT04EP18" href="#t04e-18-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10° Doutor &#9825;]:<i hidden></i></b> O Senhor do Tempo Vitorioso https://m.youtube.com/watch?v=uTauKJIWix8" href="#t04e-editx-a">Dub <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">(extras 1) Mini-Episódio:</p>
            <a onclick="siteLink(this.name)" name="A Música das Esferas https://drive.google.com/open?id=1VJM4n2L_2NR5yBxlTZUyosz9AYZdZMbv" href="#t04e-min1-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="A Música das Esferas https://m.youtube.com/watch?v=T2FdxiuzdU4" href="#t04e-min1-b">Leg <i class="bi bi-youtube"></i></a>
          </li>
          <li><p class="pex">(extras 2) animação:</p>
            <a onclick="siteLink(this.name)" name="Terra dos Sonhos https://drive.google.com/open?id=1y-HjhEFUSgend_0EWeFH2gnJMUfieeVC" href="#t04e-min2-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="Terra dos Sonhos https://zh-hk.facebook.com/doctorwhodubladooficial/videos/dreamland/1890640387838919" href="#t04e-min2-b">Leg <i class="bi bi-facebook"></i></a>
          </li>`;

var temp4Leg = `<img id="temp4" class="image-temp" src="https://upload.wikimedia.org/wikipedia/en/f/fd/Voyage_of_the_Damned.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2008</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 00]: </b>Voyage of the Damned https://drive.google.com/file/d/1bLZYp5Pj1s16bowKDj6p8qRwJH3HNniL/view?usp=sharing" href="#t04e-00-a">Leg <i class="fab fa-google-drive"></i></a>
            <!--<a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]: </b>Voyage of the Damned LINK" href="#t04e-00-b">Leg <i class="bi bi-play-btn"></i></a>-->
            <a onclick="notifica(0)" href="#t04e-00-c">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 00]:</b> Voyage of the Damned LINK" href="#t04e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 01]: </b>Partners in Crime https://drive.google.com/file/d/1IeA0NXL_7XtltpFO6NUJGoPmKpC5G-03/view?usp=sharing" href="#t04e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]: </b>Partners in Crime LINK" href="#t04e-01-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 01]:</b> Partners in Crime LINK" href="#t04e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 02]: </b>The Fires of Pompeii https://drive.google.com/file/d/1zUEqOFLXS5mFf01aL2hODUE0UkJVqe_-/view?usp=sharing" href="#t04e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]: </b>The Fires of Pompeii LINK" href="#t04e-02-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 02]:</b> The Fires of Pompeii LINK" href="#t04e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 03]: </b>Planet of the Ood https://drive.google.com/file/d/1to2zEsPxUiMydQfwmbUgLAkJCa6jP__g/view?usp=sharing" href="#t04e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]: </b>Planet of the Ood LINK" href="#t04e-03-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 03]:</b> Planet of the Ood LINK" href="#t04e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 04]: </b>The Sontaran Stratagem https://drive.google.com/file/d/1KccaCOmSeqE5aQL2CJibvP_bukBpljnK/view?usp=sharing" href="#t04e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]: </b>The Sontaran Stratagem LINK" href="#t04e-04-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 04]:</b> The Sontaran Stratagem LINK" href="#t04e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 05]: </b>The Poison Sky https://drive.google.com/file/d/14wKZRdfnnI93--rNLU7MdokeLjhJRNJ4/view?usp=sharing" href="#t04e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]: </b>The Poison Sky LINK" href="#t04e-05-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 05]:</b> The Poison Sky LINK" href="#t04e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 06]: </b>The Doctor's Daughter https://drive.google.com/file/d/17WvU8CIAXKHtkL5m1ChhFxvQEK7lgoqO/view?usp=sharing" href="#t04e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]: </b>The Doctor's Daughter LINK" href="#t04e-06-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 06]:</b> The Doctor's Daughter LINK" href="#t04e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 07]: </b>The Unicorn and the Wasp https://drive.google.com/file/d/1ppeqZXjGOH3DpiE7dsCVO6jiWLxgH0WA/view?usp=sharing" href="#t04e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]: </b>The Unicorn and the Wasp LINK" href="#t04e-07-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 07]:</b> The Unicorn and the Wasp LINK" href="#t04e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>  
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 08]: </b>Silence in the Library https://drive.google.com/file/d/1LDt_VTrxXClR6ixABKa2DX8NZAz-lJn9/view?usp=sharing" href="#t04e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]: </b>Silence in the Library LINK" href="#t04e-08-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 08]:</b> Silence in the Library LINK" href="#t04e-08-ap">Leg <i class="bi bi-badge-hd"></i></a> 
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 09]: </b>Forest of the Dead https://drive.google.com/file/d/1fb6VqHsSdCYJWQ_phrWwjX2CJrZcqLCU/view?usp=sharing" href="#t04e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]: </b>Forest of the Dead LINK" href="#t04e-09-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 09]:</b> Forest of the Dead LINK" href="#t04e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 10]: </b>Midnight https://drive.google.com/file/d/1tzVm0cTtmRWXljxiwoQ8UAD1KDwbJ_nH/view?usp=sharing" href="#t04e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]: </b>Midnight LINK" href="#t04e-10-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 10]:</b> Midnight LINK" href="#t04e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 11]: </b>Turn Left https://drive.google.com/file/d/1d_bLtQ3RXTdGZuVsnfEiNytotRpfAqdv/view?usp=sharing" href="#t04e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]: </b>Turn Left LINK" href="#t04e-11-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 11]:</b> Turn Left LINK" href="#t04e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 12]: </b>The Stolen Earth https://drive.google.com/file/d/11T5afAQN2oIkgjsVc4Ov69C28MWsT5j2/view?usp=sharing" href="#t04e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]: </b>The Stolen Earth LINK" href="#t04e-12-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 12]:</b> The Stolen Earth  LINK" href="#t04e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 13]: </b>Journey's End https://drive.google.com/file/d/1-CDzM6D5VzsCFgUZ3Yosnr4rjds-ZKCf/view?usp=sharing" href="#t04e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 13]: </b>Journey's End LINK" href="#t04e-13-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 13]:</b> Journey's End LINK" href="#t04e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>

            <a onclick="siteLink(this.name)" name="Hey There Rose Tyler - Ginger Ten<i hidden></i> https://youtu.be/qTlYKjFxbAc" href="#t04e-edt1">1 <i class="bi bi-youtube"></i></a>

            <a onclick="siteLink(this.name)" name="Dois Corações &#9825;&#9825;<i hidden></i> https://m.youtube.com/watch?v=rIHL-UqH82w" href="#t04e-edt2">2 <i class="bi bi-youtube"></i></a> 

          </li>
          <br><br>
          <li><p class="p">Episódio 14:</p>             
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 14]: </b>The Next Doctor https://drive.google.com/file/d/1Zd6cMAopNPoTmM7zfKPEEyHJQOSul0ZM/view?usp=sharing" href="#t04e-14-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 14]: </b>The Next Doctor LINK" href="#t04e-14-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 14]:</b> The Next Doctor LINK" href="#t04e-14-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 15:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 15]: </b>Planet of the Dead https://drive.google.com/file/d/1v5VNkzbU6MhSZ_TRTFJb5Jq0Oh3m419A/view?usp=sharing" href="#t04e-15-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 15]: </b>Planet of the Dead LINK" href="#t04e-15-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 15]:</b> Planet of the Dead LINK" href="#t04e-15-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 16:</p>             
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 16]: </b>The Waters of Mars https://drive.google.com/file/d/1djSkjg4JA-U6uktTwrKoSgfg26qfd1V9/view?usp=sharing" href="#t04e-16-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 16]: </b>The Waters of Mars LINK" href="#t04e-16-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 16]:</b> The Waters of Mars LINK" href="#t04e-16-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 17:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 17]: </b>The End of Time Part 1 https://drive.google.com/file/d/1P7BGVV-W1QqlD2WdCKCP6zeIG9ZaRdBH/view?usp=sharing" href="#t04e-17-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 17]: </b>The End of Time Part 1 LINK" href="#t04e-17-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
             <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 17]:</b> The End of Time Part 1 LINK" href="#t04e-17-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 18:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[4°T ☆ EP 18]: </b>The End of Time Part 2 https://drive.google.com/file/d/1zWd2thEsfWVuTBg1SgkNiFsdNBvT5vSm/view?usp=sharing" href="#t04e-18-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 18]: </b>The End of Time Part 2 LINK" href="#t04e-18-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[4°T ☆ EP 18]:</b> The End of Time Part 2 LINK" href="#t04e-18-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10° Doutor &#9825;]:<i hidden></i></b> O Senhor do Tempo Vitorioso https://m.youtube.com/watch?v=uTauKJIWix8" href="#t04e-editx-a">Dub <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">(extras 1) Mini-Episódio:</p>
            <a onclick="siteLink(this.name)" name="A Música das Esferas https://drive.google.com/open?id=1VJM4n2L_2NR5yBxlTZUyosz9AYZdZMbv" href="#t04e-min1-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="A Música das Esferas https://m.youtube.com/watch?v=T2FdxiuzdU4" href="#t04e-min1-b">Leg <i class="bi bi-youtube"></i></a>
          </li>
          <li><p class="pex">(extras 2) animação:</p>
            <a onclick="siteLink(this.name)" name="Terra dos Sonhos https://drive.google.com/open?id=1y-HjhEFUSgend_0EWeFH2gnJMUfieeVC" href="#t04e-min2-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="Terra dos Sonhos https://zh-hk.facebook.com/doctorwhodubladooficial/videos/dreamland/1890640387838919" href="#t04e-min2-b">Leg <i class="bi bi-facebook"></i></a>
          </li>`;






var temp5Dub = `<img id="temp1" class="image-temp" src="https://i.pinimg.com/originals/be/29/29/be2929973a4756aa4c2950e9f31e2345.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2010</i></p>
          </li>
          <li><p class="p">Episódio 1:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 01]:</b> A Décima Primeira Hora https://drive.google.com/open?id=0B0cnJ5ZQGC0ZVm1jMmdzeFBzRDg" href="#t05e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 01]:</b> A Décima Primeira Hora https://mega.nz/file/WjBx0SjI#fBV29sRboR7Fk7jgPo2QzPIEU-vNhJnFCOY038frGqY" href="#t05e-01-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 01]:</b> A Décima Primeira Hora https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP01" href="#t05e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 02]:</b> A Besta de Baixo https://drive.google.com/open?id=0B0cnJ5ZQGC0ZWFdUUXJOQUMtUkE" href="#t05e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 02]:</b> A Besta de Baixo https://mega.nz/file/3vRjXQDA#06AaCsC8d1E4PFiiQhSbakVk0EUIBzCx0pLnYWRV7A8" href="#t05e-02-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 02]:</b> A Besta de Baixo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP02" href="#t05e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 03]:</b> A Vitória dos Daleks https://drive.google.com/open?id=0B0cnJ5ZQGC0ZNF9RSkZ6R2tkOEk" href="#t05e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 03]:</b> A Vitória dos Daleks https://mega.nz/file/LvZ3zaLZ#kKalTALzkYN9qSFLG-0n35dks3rce9vUb41Zu4aq9_s" href="#t05e-03-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 03]:</b> A Vitória dos Daleks https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP03" href="#t05e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 04]:</b> O Tempo dos Anjos https://drive.google.com/open?id=0B0cnJ5ZQGC0ZZEhZbVg2V2dVN2s" href="#t05e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 04]:</b> O Tempo dos Anjos https://mega.nz/file/rjRH2AII#1y-tNXvGNc9sENi5YVw6H_4ugLYcDKxMNiUw6vvrt1U" href="#t05e-04-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 04]:</b> O Tempo dos Anjos https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP04" href="#t05e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 05]:</b> Carne e Pedra https://drive.google.com/open?id=0B0cnJ5ZQGC0ZVUMydUx5Q0xndTg" href="#t05e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 05]:</b> Carne e Pedra https://mega.nz/file/uqYj3YYS#zGwH83uHAafUqRMP9UmBGLhyM-ClD_Qx9LLfP791Mu4" href="#t05e-05-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 05]:</b> Carne e Pedra https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP05" href="#t05e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 06]:</b> Os Vampiros de Veneza https://drive.google.com/open?id=0B0cnJ5ZQGC0ZaTdzQ3REVXM2VFk" href="#t05e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 06]:</b> Os Vampiros de Veneza https://mega.nz/file/nrQngSzA#wVgEH3nAStZ2eme2nQ12FDLnSHQBKNpdiHdyf_mCcnY" href="#t05e-06-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 06]:</b> Os Vampiros de Veneza https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP06" href="#t05e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 07]:</b> A Escolha de Amy https://drive.google.com/open?id=0B0ConXlhQ-SxX013TzE4UkZITDA" href="#t05e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 07]:</b> A Escolha de Amy https://mega.nz/file/D3JHSYCZ#O6iFQsihJjZ_bv9wpfR3PK00SiawgqiWoHf-4WfLR_c" href="#t05e-07-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 07]:</b> A Escolha de Amy https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP07" href="#t05e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 08]:</b> A Terra Faminta https://drive.google.com/open?id=0B0ConXlhQ-SxWHF0Qm56N0t0bXM" href="#t05e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 08]:</b> A Terra Faminta https://mega.nz/file/S7AlEKAI#GkGjmyieB4CyZQVEXgK_ztiJnQlSw6ULWj6U_g_UP18" href="#t05e-08-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 08]:</b> A Terra Faminta https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP08" href="#t05e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 09]:</b> Sangue Frio https://drive.google.com/open?id=0B0ConXlhQ-Sxd0FDNHFYc2FfS1E" href="#t05e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 09]:</b> Sangue Frio https://mega.nz/file/zuJTnCQR#DMYW72FjSIsb6d7hY0sgYb2ujd_ZAw1AwdLSxL2Xx_8" href="#t05e-09-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 09]:</b> Sangue Frio https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP09" href="#t05e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 10]:</b> Vincent e o Doutor https://drive.google.com/open?id=0B0ConXlhQ-SxOUpXT1Z5YU9QckE" href="#t05e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 10]:</b> Vincent e o Doutor https://mega.nz/file/GqRxEIZL#m1ndLu0TswnWeFo3C4GghV6AcgLXlMdfLx21nYujXM8" href="#t05e-10-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 10]:</b> Vincent e o Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP10" href="#t05e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 11]:</b> O Inquilino https://drive.google.com/open?id=0B0ConXlhQ-SxblZPQmNqenRCT0E" href="#t05e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 11]:</b> O Inquilino https://mega.nz/file/ijYh0CLS#adeDMzWdbmF31VTehxcXglGKKFD7R9eEVQi8KSYXv7w" href="#t05e-11-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 11]:</b> O Inquilino https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP11" href="#t05e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 12]:</b> A Pandorica Se Abre https://drive.google.com/open?id=0B0ConXlhQ-SxWnJKc2xYYjM1YVU" href="#t05e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 12]:</b> A Pandorica Se Abre https://mega.nz/file/nrQR1K5I#OnJ-gFBYrVxhKOZPt_fp_bBOMTOMgAiJS2ATNys6ZQ0" href="#t05e-12-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 12]:</b> A Pandorica Se Abre https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP12" href="#t05e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 13]:</b> O Big Bang https://drive.google.com/open?id=0B0ConXlhQ-SxUHNGcF9SMFVrek0" href="#t05e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 13]:</b> O Big Bang https://mega.nz/file/XmB3WS6Z#aykVXvP4THJDwf70L5WTlZE07PxFiSthFTjro5uouMk" href="#t05e-13-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 13]:</b> O Big Bang https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT05EP13" href="#t05e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Off (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="Enquanto isso, na TARDIS <b style='font-size:1rem;color:#c7c7c7'>(parte 1)</b> https://drive.google.com/open?id=1yflmJAWe7lTUU1pbHSNKgCT4genXCRNy" href="#t05efa">(parte 1) Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="Enquanto isso, na TARDIS <b style='font-size:1rem;color:#c7c7c7'>(parte 2)</b> https://drive.google.com/open?id=13BLY3ZTl5tohYkjnB6orqCrcPikMgGxe" href="#t05efb">(parte 2) Leg <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="...Este planeta está protegido?<i hidden></i> https://youtu.be/ZyeQcJmhp-4" href="#t05edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<i hidden></i>Vincent Visita a Galeria &#9825; https://youtu.be/adcOdCXgbBw" href="#t05edt2">2 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<i hidden></i> &#9825; https://youtu.be/iLljZhI77kQ" href="#t05edt3">3 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp5Leg = `<img id="temp1" class="image-temp" src="https://i.pinimg.com/originals/be/29/29/be2929973a4756aa4c2950e9f31e2345.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2010</i></p>
          </li>
          <li><p class="p">Episódio 1:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 01]:</b> The Eleventh Hour https://drive.google.com/file/d/1Yp7ZGBl0kRVz52lWO3XypNPGGITcYjrv/view?usp=sharing" href="#t05e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 01]:</b> The Eleventh Hour LINK" href="#t05e-01-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 01]:</b> The Eleventh Hour LINK" href="#t05e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 02]:</b> The Beast Below https://drive.google.com/file/d/181BmtbVw-clOhz0vZg2S0fTTvJ4e3sBm/view?usp=sharing" href="#t05e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 02]:</b> The Beast Below LINK" href="#t05e-02-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 02]:</b> The Beast Below LINK" href="#t05e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 03]:</b> Victory of the Daleks https://drive.google.com/file/d/1XRtTAzJV1OvimCnW5qS0Z32snrRmCrUD/view?usp=sharing" href="#t05e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 03]:</b> Victory of the Daleks LINK" href="#t05e-03-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 03]:</b> Victory of the Daleks LINK" href="#t05e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 04]:</b> The Time of Angels https://drive.google.com/file/d/1To-JAkswLBhhUYxQbtUM_Pqz13tl80iF/view?usp=sharing" href="#t05e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 04]:</b> The Time of Angels LINK" href="#t05e-04-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 04]:</b> The Time of Angels LINK" href="#t05e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 05]:</b> Flesh and Stone https://drive.google.com/file/d/1lzAT3ZAGdW8q9ZrH9X1UM5BhfrRfPrCc/view?usp=sharing" href="#t05e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 05]:</b> Flesh and Stone LINK" href="#t05e-05-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 05]:</b> Flesh and Stone LINK" href="#t05e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 06]:</b> The Vampires of Venice https://drive.google.com/file/d/1Zy2S_sIWVw0s-hNKI46Qyz5e9pq9K26H/view?usp=sharing" href="#t05e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 06]:</b> The Vampires of Venice LINK" href="#t05e-06-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 06]:</b> The Vampires of Venice LINK" href="#t05e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 07]:</b> Amy's Choice https://drive.google.com/file/d/1T4ITliRXaQ2GRgVtQrEcWR2FJEPaxh1i/view?usp=sharing" href="#t05e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 07]:</b> Amy's Choice LINK" href="#t05e-07-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 07]:</b> Amy's Choice LINK" href="#t05e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 08]:</b> The Hungry Earth https://drive.google.com/file/d/1VTsG5JneHcnqJbWDK0ENW3op1LCdf7Hf/view?usp=sharing" href="#t05e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 08]:</b> The Hungry Earth LINK" href="#t05e-08-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 08]:</b> The Hungry Earth LINK" href="#t05e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 09]:</b> Cold Blood https://drive.google.com/file/d/1ZenPhQvdEmRVfA8rFgjxbNPCPteYRS_2/view?usp=sharing" href="#t05e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 09]:</b> Cold Blood LINK" href="#t05e-09-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 09]:</b> Cold Blood LINK href="#t05e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 10]:</b> Vincent and the Doctor https://drive.google.com/file/d/1lawnzviA3LtLP-tmeG0YPfRJ4VgYxCn3/view?usp=sharing" href="#t05e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 10]:</b> Vincent and the Doctor LINK" href="#t05e-10-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 10]:</b> Vincent and the Doctor LINK" href="#t05e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 11]:</b> The Lodger https://drive.google.com/file/d/1sJZy1o2KabzlJUNCADvoo5s1iV6s5tG3/view?usp=sharing" href="#t05e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 11]:</b> The Lodger LINK" href="#t05e-11-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 11]:</b> The Lodger LINK" href="#t05e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 12]:</b> The Pandorica Opens https://drive.google.com/file/d/1yLQtV-c4lkqDNfIp-QuGBojg__xm6mqa/view?usp=sharing" href="#t05e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 12]:</b> The Pandorica Opens LINK" href="#t05e-12-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 12]:</b> The Pandorica Opens LINK" href="#t05e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[5°T ☆ EP 13]:</b> The Big Bang https://drive.google.com/file/d/1_H1chL-6TZ48thHY_ISNzl3HXxZb6szR/view?usp=sharing" href="#t05e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 13]:</b> The Big Bang LINK" href="#t05e-13-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[5°T ☆ EP 13]:</b> The Big Bang LINK" href="#t05e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Off (cenas extras):</p>
            <a onclick="siteLink(this.name)" name="Enquanto isso, na TARDIS <b style='font-size:1rem;color:#c7c7c7'>(parte 1)</b> https://drive.google.com/open?id=1yflmJAWe7lTUU1pbHSNKgCT4genXCRNy" href="#t05efa">(parte 1) Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="Enquanto isso, na TARDIS <b style='font-size:1rem;color:#c7c7c7'>(parte 2)</b> https://drive.google.com/open?id=13BLY3ZTl5tohYkjnB6orqCrcPikMgGxe" href="#t05efb">(parte 2) Leg <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="...Este planeta está protegido?<i hidden></i> https://youtu.be/ZyeQcJmhp-4" href="#t05edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<i hidden></i>Vincent Visita a Galeria &#9825; https://youtu.be/adcOdCXgbBw" href="#t05edt2">2 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<i hidden></i> &#9825; https://youtu.be/iLljZhI77kQ" href="#t05edt3">3 <i class="bi bi-youtube"></i></a>
          </li>`;





var temp6Dub = `<img id="temp1" class="image-temp" src="https://m0vie.files.wordpress.com/2013/12/doctorwho-achristmascarol7.jpg?w=584">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2011</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> Um Conto de Natal https://drive.google.com/open?id=1vIVCH7qt4io0RKrbcMUKN8RFgH6H7tl6" href="#t06e-00-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> Um Conto de Natal https://www.facebook.com/ManiaDoctor/videos/1247718988599638" href="#t06e-00-b">Dub <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> Um Conto de Natal https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP00" href="#t06e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 01]:</b> O Astronauta Impossível https://drive.google.com/open?id=0B0ConXlhQ-SxOFFTTHFtNDZMamc" href="#t06e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 01]:</b> O Astronauta Impossível https://mega.nz/file/CzomUayC#JcyH-wCnvghWDtEKQZr0RZx_2D1hg_PrC-S9sMz_i8Q" href="#t06e-01-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 01]:</b> O Astronauta Impossível https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP01" href="#t06e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 02]:</b> O Dia da Lua https://drive.google.com/open?id=0B0ConXlhQ-SxNWp5NTZYSnkyNEk" href="#t06e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 02]:</b> O Dia da Lua https://mega.nz/file/n2gA1CbT#a1Aike8_q2_RgFdggIcD7m_8UndwP1YdbRTrTsl9fhQ" href="#t06e-02-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 02]:</b> O Dia da Lua https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP02" href="#t06e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 03]:</b> A Maldição da Mancha Negra https://drive.google.com/open?id=0B0ConXlhQ-Sxdy1RQzdseGs0cmc" href="#t06e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 03]:</b> A Maldição da Mancha Negra https://mega.nz/file/fuxg1a7J#HBl3tpYhmrfWeFLrZshIA2BRIxy9_8Oaprf8wV-AttU" href="#t06e-03-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 03]:</b> A Maldição da Mancha Negra https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP03" href="#t06e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 04]:</b> A Esposa do Doutor https://drive.google.com/open?id=0B0ConXlhQ-SxOVlYZEpPcEw5UHM" href="#t06e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 04]:</b> A Esposa do Doutor https://mega.nz/file/7jpiTYDC#UUDxv32p9wMwCpcFfdonzug1s_5NgZ948DWVnl_wExw" href="#t06e-04-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 04]:</b> A Esposa do Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP04" href="#t06e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 05]:</b> A Carne Rebelde https://drive.google.com/open?id=0B0ConXlhQ-SxQnp1YU02QXlYZm8" href="#t06e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 05]:</b> A Carne Rebelde https://mega.nz/file/rmww1ATI#gNpXR5CRlPJgQxDombhgb4uNBqTvZgOGB7P6gcFDtgc" href="#t06e-05-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 05]:</b> A Carne Rebelde https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP05" href="#t06e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 06]:</b> As Quase Pessoas https://drive.google.com/open?id=0B0ConXlhQ-SxMXMyWHpBSm9ZUlE" href="#t06e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 06]:</b> As Quase Pessoas https://mega.nz/file/7m4ilCAY#jZkF9fCo7Rvt9FdCSMHkGQ7GB-_te-7oNGwYbuYiHY8" href="#t06e-06-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 06]:</b> As Quase Pessoas https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP06" href="#t06e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 07]:</b> Um Homem Bom vai à Guerra https://drive.google.com/open?id=0B0ConXlhQ-SxNjA4clFCdVZ6ZjQ" href="#t06e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 07]:</b> Um Homem Bom vai à Guerra https://mega.nz/file/jnwEwQhI#ItXRr0Khr2vIl9tUpXOAcG3TFgfTgXRonG8VlAwjTCs" href="#t06e-07-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 07]:</b> Um Homem Bom vai à Guerra https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP07" href="#t06e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 08]:</b> Vamos Matar Hitler https://drive.google.com/open?id=0B0ConXlhQ-SxdG9HczZJaFdfb1k" href="#t06e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 08]:</b> Vamos Matar Hitler https://mega.nz/file/22gk1QJT#Skh_m0G-moZf7FhDj0ZLFoAwQ7asGzs-JeppGQOOCqM" href="#t06e-08-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 08]:</b> Vamos Matar Hitler https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP08" href="#t06e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 09]:</b> Terrores Noturnos https://drive.google.com/open?id=0B0ConXlhQ-SxVU5MdW93NUh4WGM" href="#t06e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 09]:</b> Terrores Noturnos https://mega.nz/file/jy4WGYLL#gSt72Rfa-7m-yP0rziwDJEAZtvF2SsBeIrdtQjtMRzA" href="#t06e-09-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 09]:</b> Terrores Noturnos https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP09" href="#t06e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 10]:</b> A Garota Que Esperou https://drive.google.com/open?id=0B0ConXlhQ-SxbFFfZWJORzJvZVU" href="#t06e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 10]:</b> A Garota Que Esperou https://mega.nz/file/SipCiITb#dluOluawE7ke_E6ro0deSzWBesObNDm4wB81eRDDkBk" href="#t06e-10-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 10]:</b> A Garota Que Esperou https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP10" href="#t06e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 11]:</b> O Complexo de Deus https://drive.google.com/open?id=0B0ConXlhQ-SxR1VSUXI0eEN4RlU" href="#t06e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 11]:</b> O Complexo de Deus https://mega.nz/file/rixwGYaS#WviPogRJeGzkxFSzOOQespGJLWblVvbCChF9i1koIbA" href="#t06e-11-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 11]:</b> O Complexo de Deus https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP11" href="#t06e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 12]:</b> Época de Encerramento https://drive.google.com/open?id=0B0ConXlhQ-SxN0Vzb3RNU2pDSW8" href="#t06e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 12]:</b> Época de Encerramento https://mega.nz/file/b2xijAhS#zH8MgbJS74gXaP8qLwHjMZN4P4gEtXT--OEI9ECPfsA" href="#t06e-12-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 12]:</b> Época de Encerramento https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP12" href="#t0e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 13]:</b> O Casamento de River Song https://drive.google.com/open?id=0B0ConXlhQ-SxWkYySGNZLThmVkk" href="#t06e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 13]:</b> O Casamento de River Song https://mega.nz/file/OngAXCbQ#dcKf3S3nQa3XzkUmvOpIhKHGjeSNw-V3ck14KV6eXAc" href="#t06e-13-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 13]:</b> O Casamento de River Song https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT06EP13" href="#t06e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Offs (mini-episódios):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 1]:</b> Alívio Cômico https://drive.google.com/open?id=1L3t1iBk0ppHbGCmFEHWl3oN4XwE06vk0" href="#t06efa1">01 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 1]:</b> Alívio Cômico https://youtu.be/nrQFOchsd7c" href="#t06efb1">01 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 2]:</b> A Morte é a Única Resposta https://drive.google.com/open?id=1uOgNmUZhmdIeXvdI3zhwkQJE8JQOUZut" href="#t06efa2">02 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 2]:</b> A Morte é a Única Resposta https://youtu.be/8yCNzYZXZII" href="#t06efb2">02 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 3]:</b> A Verdade Nua https://drive.google.com/open?id=1nncvGogqsuklYwIR5ZPQ_8sE5H9rwfme" href="#t06efa3">03 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 3]:</b> A Verdade Nua https://youtu.be/RvHTskNrYmw" href="#t06efb3">03 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 4]:</b> Night and the Doctor: Noite Ruim https://drive.google.com/open?id=1AxTj-PceTcz9hNMEthXCWnSUW-QXq_eq" href="#t06efa4">04 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 4]:</b> Night and the Doctor: Noite Ruim https://facebook.com/oficialdoctorwhofrases/videos/1021249621310989" href="#t06efb4">04 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 5]:</b> Night and the Doctor: Noite Boa https://drive.google.com/open?id=1duW8Z7iO1MK6Wie4s-zrrOhu-aQCRjX6" href="#t06efa5">05 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 5]:</b> Night and the Doctor: Noite Boa https://facebook.com/oficialdoctorwhofrases/videos/1022599867842631" href="#t06efb5">05 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 6]:</b> Night and the Doctor: A Noite Inteira Acordado https://drive.google.com/open?id=1E5l0URu9EV2GVJwCOWEBmQf3xDRhUDY2" href="#t06efa6">06 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 6]:</b> Night and the Doctor: A Noite Inteira Acordado https://facebook.com/oficialdoctorwhofrases/videos/1023895364379748" href="#t06efb6">06 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 7]:</b> Night and the Doctor: Primeira Noite https://drive.google.com/open?id=14lBIAvJK4y7krcVPhdLhSbwslAtEfr4O" href="#t06efa7">07 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 7]:</b> Night and the Doctor: Primeira Noite https://facebook.com/oficialdoctorwhofrases/videos/1025961184173166" href="#t06efb7">07 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 8]:</b> Night and the Doctor: Noite Passada https://drive.google.com/open?id=1nSGGmMoU1ZvTmJvDkw1_65WGC-PcRNoZ" href="#t06efa8">08 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 8]:</b> Night and the Doctor: Noite Passada https://facebook.com/oficialdoctorwhofrases/videos/1028076673961617" href="#t06efb8">08 Leg <i class="bi bi-facebook"></i></a><br>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Os Demônios Fogem Quando Um Homem Bom Vai a Guerra<i hidden></i> https://www.facebook.com/joaobosco.nobrega.31/videos/1572183259847469/?idorvanity=652173352874920" href="#t06edt1">1 <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="O Último Centurião<i hidden></i> &#9825; https://youtu.be/E1tnwKmoPkQ" href="#t06edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp6Leg = `<img id="temp1" class="image-temp" src="https://m0vie.files.wordpress.com/2013/12/doctorwho-achristmascarol7.jpg?w=584">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2011</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> A Christmas Carol https://drive.google.com/file/d/1Cp6YiVnQd66H3AewJ_3Gc-yUkYq0Uv56/view?usp=sharing" href="#t06e-00-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> A Christmas Carol LINK" href="#t06e-00-b">Leg <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 00]:</b> A Christmas Carol LINK" href="#t06e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 01]:</b> The Impossible Astronaut https://drive.google.com/file/d/19EMRT23yFWjBWC0kAvZKjVT0buU3YAiR/view?usp=sharing" href="#t06e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 01]:</b> The Impossible Astronaut LINK" href="#t06e-01-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 01]:</b> The Impossible Astronaut LINK" href="#t06e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 02]:</b> Day of the Moon https://drive.google.com/file/d/1AiN-nCuxZaGRPHWWDdLYAPQGcKfcZn9u/view?usp=sharing" href="#t06e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 02]:</b> Day of the Moon LINK" href="#t06e-02-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 02]:</b> Day of the Moon LINK" href="#t06e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 03]:</b> The Curse of the Black Spot https://drive.google.com/file/d/1GowX2jzJ9x0XSIsHehygT9suxurz9YZR/view?usp=sharing" href="#t06e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 03]:</b> The Curse of the Black Spot LINK" href="#t06e-03-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 03]:</b> The Curse of the Black Spot LINK" href="#t06e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 04]:</b> The Doctor's Wife https://drive.google.com/file/d/1bU3JTSTxy-4jmMtmWy__pm17h1HydUqB/view?usp=sharing" href="#t06e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 04]:</b> The Doctor's Wife LINK" href="#t06e-04-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 04]:</b> The Doctor's Wife LINK" href="#t06e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 05]:</b> The Rebel Flesh https://drive.google.com/file/d/14wD-xMb1MEk1ZxlxXeyZQ_BBCwJxkQLo/view?usp=sharing" href="#t06e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 05]:</b> The Rebel Flesh LINK" href="#t06e-05-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 05]:</b> The Rebel Flesh LINK" href="#t06e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 06]:</b> The Almost People https://drive.google.com/file/d/1rcEoeQN-2wKSgmcJaqRlHdXgAZ4eoYnF/view?usp=sharing" href="#t06e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 06]:</b> The Almost People LINK" href="#t06e-06-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 06]:</b> The Almost People LINK" href="#t06e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 07]:</b> A Good Man Goes to War https://drive.google.com/file/d/1ZDxnEHelVmA_VVNesLxyRy5bmRiIot5K/view?usp=sharing" href="#t06e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 07]:</b> A Good Man Goes to War LINK" href="#t06e-07-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 07]:</b> A Good Man Goes to War LINK" href="#t06e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 08]:</b> Let's Kill Hitler https://drive.google.com/file/d/1axXjjZ80JiXQGFXnLIodOiL-I1fxRN6q/view?usp=sharing" href="#t06e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 08]:</b> Let's Kill Hitler LINK" href="#t06e-08-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 08]:</b> Let's Kill Hitler LINK" href="#t06e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 09]:</b> Night Terrors https://drive.google.com/file/d/1ZzZqhavT0qbmPiPVaO9oKp51ArYeSXGj/view?usp=sharing" href="#t06e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 09]:</b> Night Terrors LINK" href="#t06e-09-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 09]:</b> Night Terrors LINK" href="#t06e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 10]:</b> The Girl Who Waited https://drive.google.com/file/d/1W-pFHV9a0qz1safcJZ7ukRDN5u-Oqbhi/view?usp=sharing" href="#t06e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 10]:</b> The Girl Who Waited LINK" href="#t06e-10-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 10]:</b> The Girl Who Waited LINK" href="#t06e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 11]:</b> The God Complex https://drive.google.com/file/d/1EooZlbWCaH7xuaGYPEAVas9NNpj7NplH/view?usp=sharing" href="#t06e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 11]:</b> The God Complex LINK" href="#t06e-11-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 11]:</b> The God Complex LINK" href="#t06e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 12]:</b> Closing Time https://drive.google.com/file/d/1xZxdkSOrkE4uanf6cEsjoGft8gGSIeEb/view?usp=sharing" href="#t06e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 12]:</b> Closing Time LINK" href="#t06e-12-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 12]:</b> Closing Time LINK" href="#t0e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 13:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[6°T ☆ EP 13]:</b> The Wedding of River Song https://drive.google.com/file/d/1LLoHYGHfFDk8KTZluu6i7ZFtnFMH41_w/view?usp=sharing" href="#t06e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 13]:</b> The Wedding of River Song LINK" href="#t06e-13-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[6°T ☆ EP 13]:</b> The Wedding of River Song LINK" href="#t06e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Offs (mini-episódios):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 1]:</b> Comic Relief https://drive.google.com/open?id=1L3t1iBk0ppHbGCmFEHWl3oN4XwE06vk0" href="#t06efa1">01 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 1]:</b> Comic Relief https://youtu.be/nrQFOchsd7c" href="#t06efb1">01 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 2]:</b> Death Is the Only Answer https://drive.google.com/open?id=1uOgNmUZhmdIeXvdI3zhwkQJE8JQOUZut" href="#t06efa2">02 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 2]:</b> Death Is the Only Answer https://youtu.be/8yCNzYZXZII" href="#t06efb2">02 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 3]:</b> The Naked Truth https://drive.google.com/open?id=1nncvGogqsuklYwIR5ZPQ_8sE5H9rwfme" href="#t06efa3">03 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 3]:</b> The Naked Truth https://youtu.be/RvHTskNrYmw" href="#t06efb3">03 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 4]:</b> Night and the Doctor: Bad Night https://drive.google.com/open?id=1AxTj-PceTcz9hNMEthXCWnSUW-QXq_eq" href="#t06efa4">04 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 4]:</b> Night and the Doctor: Bad Night https://facebook.com/oficialdoctorwhofrases/videos/1021249621310989" href="#t06efb4">04 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 5]:</b> Night and the Doctor: Good Night https://drive.google.com/open?id=1duW8Z7iO1MK6Wie4s-zrrOhu-aQCRjX6" href="#t06efa5">05 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 5]:</b> Night and the Doctor: Good Night https://facebook.com/oficialdoctorwhofrases/videos/1022599867842631" href="#t06efb5">05 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 6]:</b> Night and the Doctor: Up All Night https://drive.google.com/open?id=1E5l0URu9EV2GVJwCOWEBmQf3xDRhUDY2" href="#t06efa6">06 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 6]:</b> Night and the Doctor: Up All Night https://facebook.com/oficialdoctorwhofrases/videos/1023895364379748" href="#t06efb6">06 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 7]:</b> Night and the Doctor: First Night https://drive.google.com/open?id=14lBIAvJK4y7krcVPhdLhSbwslAtEfr4O" href="#t06efa7">07 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 7]:</b> Night and the Doctor: First Night https://facebook.com/oficialdoctorwhofrases/videos/1025961184173166" href="#t06efb7">07 Leg <i class="bi bi-facebook"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 8]:</b> Night and the Doctor: Last Night https://drive.google.com/open?id=1nSGGmMoU1ZvTmJvDkw1_65WGC-PcRNoZ" href="#t06efa8">08 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Extras 8]:</b> Night and the Doctor: Last Night https://facebook.com/oficialdoctorwhofrases/videos/1028076673961617" href="#t06efb8">08 Leg <i class="bi bi-facebook"></i></a><br>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Os Demônios Fogem Quando Um Homem Bom Vai a Guerra<i hidden></i> https://www.facebook.com/joaobosco.nobrega.31/videos/1572183259847469/?idorvanity=652173352874920" href="#t06edt1">1 <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="O Último Centurião<i hidden></i> &#9825; https://youtu.be/E1tnwKmoPkQ" href="#t06edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;






var temp7Dub = `<img id="temp1" class="image-temp" src="midias/all-doctors.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2012-2013</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 00]:</b> O Doutor, a Viúva e o Guarda-roupa https://drive.google.com/open?id=1qtZ72Ibr9UFDFQbXKLK2We69veQ0qokY" href="#t07efa-00">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 00]:</b> O Doutor, a Viúva e o Guarda-roupa LINK" href="#t07efb-00">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> O Doutor, A Viúva e o Guarda-Roupa https://drive.google.com/open?id=0B0ConXlhQ-SxZ202bkFvc3ZrNTA" href="#t07e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> O Doutor, A Viúva e o Guarda-Roupa https://www.facebook.com/mundodedoctorwho/videos/1685309111713113" href="#t07e-00-c">Dub <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> O Doutor, A Viúva e o Guarda-Roupa https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP00" href="#t07e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio 01]:</b> Asilo dos Daleks https://drive.google.com/open?id=1iLWLaRyKpxd_woftSqThuvMQP5v5aNpX" href="#t07efa-01">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio 01]:</b> Asilo dos Daleks LINK" href="#t07efb-01">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 01]:</b> Asilo dos Daleks https://drive.google.com/open?id=0B0ConXlhQ-SxdVVsZjZTbHRWY2c" href="#t07e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 01]:</b> Asilo dos Daleks https://mega.nz/file/X75QjChC#Ukr3ih8psWQIRgpsqmeID5anACKxIN6LOKdcKCD80c8" href="#t07e-01-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 01]:</b> Asilo dos Daleks https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP01" href="#t07e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 02]:</b> Pond Life https://drive.google.com/open?id=1agkg9hTCCdW-LVbfxMnzGVP_Rfnwgsys" href="#t07efa-02">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 02]:</b> Pond Life LINK" href="#t07efb-02">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 02]:</b> Dinossauros Em Uma Espaço-Nave https://drive.google.com/open?id=0B0ConXlhQ-SxVHJraXRaYmpXdEk" href="#t07e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 02]:</b> Dinossauros Em Uma Espaço-Nave https://mega.nz/file/y7xkXYoL#mvgemWa-fr6c5w9-HSuHWFUjoiiNHnSFBKlH7Jwz6k4" href="#t07e-02-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 02]:</b> Dinossauros Em Uma Espaço-Nave https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP02" href="#t07e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 03]:</b> A Criação do Pistoleiro https://drive.google.com/open?id=1I73RHz8FT_KxfaRDqJpfBZ1dnD3ueimI" href="#t07efa-03">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 03]:</b> A Criação do Pistoleiro LINK" href="#t07efb-03">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 03]:</b> Uma Cidade Chamada Misericórdia https://drive.google.com/open?id=1W1rudr1UDvThZFulF4IaJAA8lbFMLe1i" href="#t07e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 03]:</b> Uma Cidade Chamada Misericórdia https://mega.nz/file/r75UhCDZ#7izFcWpk8LYRBWIjI8va_k1q6oCT6qfBYvKMp9fBC6I" href="#t07e-03-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 03]:</b> Uma Cidade Chamada Misericórdia https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP03" href="#t07e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 04]:</b> O Poder dos Três https://drive.google.com/open?id=1ZZrt31oRhw7LgFGjYp7cfKq7RlcDpgy4" href="#t07e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 04]:</b> O Poder dos Três https://mega.nz/file/S74wFa5Q#Kbq2rTaqfg78VgvhdP0FLN3jd9drG-NCLGEJS3QcKhY" href="#t07e-04-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 04]:</b> O Poder dos Três https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP04" href="#t07e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Bom como Ouro https://drive.google.com/open?id=1oEC6J5qI9qpR9VvoG7uFyJ_s-HgfUGhj" href="#t07efa-05">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Bom como Ouro LINK" href="#t07efb-05">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 05]:</b> Os Anjos Dominam Manhattan https://drive.google.com/open?id=1pRxRFOXoKmjgGW_QopsH8vR-MXkngysQ" href="#t07e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 05]:</b> Os Anjos Dominam Manhattan https://mega.nz/file/SjwQCKgI#kNbWuoTVVBzdnqS9EVJKzsVLzHY90qg-OG-wKbNW1cY" href="#t07e-05-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 05]:</b> Os Anjos Dominam Manhattan https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP05" href="#t07e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li><br>

          <li><p class="pf">Cena Não-gravada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> P.S. https://drive.google.com/open?id=1jMqgAo2jyEP6Av_0VhExg1U9fSes2z60" href="#t07efa-nn">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> P.S. LINK" href="#t07efb-nn">Mini-EP <i class="bi bi-youtube"></i></a><br>
          </li><br>

          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="Amy Pond &#9825;<i hidden></i> https://youtu.be/0PL-ncxdHmA" href="#t07e-edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="A Garota que Esperou &#9825;<i hidden></i> https://youtu.be/nV4Y78xkltY" href="#t07e-edt2">2 <i class="bi bi-youtube"></i></a>
          </li><br>
          <li><p class="pex">Conteúdo em HQ:</p>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 1 midias/lobo1.pdf" href="#t06ePD1">HQ 01 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 1 midias/lobo1.cbr" href="#t06eHQ1">HQ 01 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 2 midias/lobo2.pdf" href="#t06ePD2">HQ 02 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 2 midias/lobo2.cbr" href="#t06eHQ2">HQ 02 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 3 midias/lobo3.pdf" href="#t06ePD3">HQ 03 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 3 midias/lobo3.cbr" href="#t06eHQ3">HQ 03 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 4 midias/lobo4.pdf" href="#t06ePD4">HQ 04 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 4 midias/lobo4.cbr" href="#t06eHQ4">HQ 04 [.cbr]</i></a><br>
          </li>
          <br>

          <li><p class="p">Episódio Especial:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 01]:</b> A Batalha - Dois Dias Depois https://drive.google.com/open?id=1mneL2cUflF2xkVMz5NAvNKWqWgkO3esd" href="#t07efa-rr1">Mini-EP 1 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 01]:</b> A Batalha - Dois Dias Depois LINK" href="#t07efb-rr1">Mini-EP 1 <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 02]:</b> Vastra Investiga https://drive.google.com/open?id=14hnK5LoRJqGLV5A1Td7LA3K4tKkx_ERY" href="#t07efa-rr2">Mini-EP 2 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 02]:</b> Vastra Investiga LINK" href="#t07efb-rr2">Mini-EP 2 <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 03]:</b> O Grande Detetive https://drive.google.com/open?id=1o8QppbXpraXf6Blivv7EcfCq-djsNezL" href="#t07efa-rr3">Mini-EP 3 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 03]:</b> O Grande Detetive LINK" href="#t07efb-rr3">Mini-EP 3 <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ Especial]:</b> O Boneco de Neve https://drive.google.com/open?id=1nXZqYEIspKNMh3eL3B42ngwngjTiXvx4" href="#t07e-rr-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ Especial]:</b> O Boneco de Neve https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07ES" href="#t07e-rr-ap">Dub <i class="bi bi-badge-hd"></i></a>
            <!--
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ Especial]:</b> O Boneco de Neve LINK" href="#t07e-rr-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>-->
          </li><br><br>

          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 06]:</b> Os Sinos de Saint John https://drive.google.com/open?id=1YttPna9FNyI83HSQtWdDQJ2NS0QyE_I9" href="#t07efa-06">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 06]:</b> Os Sinos de Saint John LINK" href="#t07efb-06">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 06]:</b> Os Sinos de Saint John https://drive.google.com/open?id=1pd2as4tMOJrFxGEc9d0Bm-1usVsfQDAi" href="#t07e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 06]:</b> Os Sinos de Saint John https://mega.nz/file/yjwGRCJB#dXoxM01dB2qyp6ffEw6v-oxk8BLPuvAVorjzSmoJkp0" href="#t07e-06-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 06]:</b> Os Sinos de Saint John https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP06" href="#t07e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 07]:</b> Os Anéis de Arkhaten https://drive.google.com/open?id=1qk5yW8yk2RUp_9UCdcyusIIrCR6ey9y0" href="#t07e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 07]:</b> Os Anéis de Arkhaten https://mega.nz/file/Ovh0lCaQ#7xEJCS1thFMF56SMq5d2ed-moSEPknDz8nyiBsjNrxc" href="#t07e-07-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 07]:</b> Os Anéis de Arkhaten https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP07" href="#t07e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 08]:</b> Guerra Fria https://drive.google.com/open?id=1T93jQREjRjQudMoXIMCaaAPQcXay1MEM" href="#t07e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 08]:</b> Guerra Fria https://mega.nz/file/y2xwGSIJ#H9QufumoWvrTS7OhCxi3uT5jE6jHF1fRyyxXjyAbimU" href="#t07e-08-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 08]:</b> Guerra Fria https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP08" href="#t07e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 09]:</b> Oculto https://drive.google.com/open?id=1Z951g4JON04lHMD2ywB9TdiGA4JPqeuG" href="#t07e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 09]:</b> Oculto https://mega.nz/file/PjxEiQbC#GZtxs1dK0rRGJ2c0JJgIR52rGniJSppozUCG-WnzwGc" href="#t07e-09-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 09]:</b> Oculto https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP09" href="#t07e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 10]:</b> Jornada ao Centro da TARDIS https://drive.google.com/open?id=1h2cDtxkok6659iXHIjFHNo46Xw4rfVP1" href="#t07e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 10]:</b> Jornada ao Centro da TARDIS https://mega.nz/file/T25igKya#YkdSeekAsSBgHYzviHkwtZ_4tx_ZaZ6d-NrWIK0TyOI" href="#t07e-10-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 10]:</b> Jornada ao Centro da TARDIS https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP10" href="#t07e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 11]:</b> O Horror de Crimson https://drive.google.com/open?id=1f9tQWTL2AzO9YwEjft5OzRwkpUxAviDo" href="#t07e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 11]:</b> O Horror de Crimson https://mega.nz/file/y7g0waBB#XS7m5lE-PfYYPwl5XDIfh2LzdseLnUheuMizf5uJNok" href="#t07e-11-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 11]:</b> O Horror de Crimson https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP11" href="#t07e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 12]:</b> O Pesadelo de Metal https://drive.google.com/open?id=1AJW79xVzOROh8C3TrGArvGDGTKkLrJ3-" href="#t07e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 12]:</b> O Pesadelo de Metal https://mega.nz/file/bupW2ayK#mFOgmPc7OYiROa4bpIw7bp_cxX_b5wxFxxq3_vJ2Mc8" href="#t07e-12-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 12]:</b> O Pesadelo de Metal https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP12" href="#t0e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="A Noite do Doutor https://drive.google.com/open?id=1i_CSHkJhKG3gKlWkeuExCBjwvl7yxec6" href="#t07efa">Spin-of Leg 1 <i class="fab fa-google-drive"></i></a><br>
            <a onclick="siteLink(this.name)" name="O Último Dia https://drive.google.com/open?id=1shL--XF9DY7DbwoA-J6-waJwnDa79MB7" href="#t07efb">Spin-of Leg 2 <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 13]:</b> Clarence e os Sussurros https://drive.google.com/open?id=1fcS5EaWI7sq6-P7aTSw0b-V74yPz2qFk" href="#t07efa-13">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 13]:</b> Clarence e os Sussurros LINK" href="#t07efb-13">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 13]:</b> O Nome do Doutor https://drive.google.com/open?id=1no1BQL2AgGtzQa4khnFMdV9LOpd4G6LG" href="#t07e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 13]:</b> O Nome do Doutor https://mega.nz/file/KnokBCzK#qGyuOFoYHPor04y3zODst2ZOT3eUrdA51Ujr3z2h1lQ" href="#t07e-13-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 13]:</b> O Nome do Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP13" href="#t07e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 14:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 14]:</b> O Dia do Doutor https://drive.google.com/open?id=1kiyOOnOSe_34BdctevnfRt-DLrfxLPoU" href="#t07e-14-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 14]:</b> O Dia do Doutor https://mega.nz/file/7qwQTYpZ#Kyy7VR29g07aSl3yZ2uV5nVSRWy_ptVWX1UmNQnJE_s" href="#t07e-14-b">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 14]:</b> O Dia do Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP14" href="#t07e-14-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Offs (mini-episódios):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x01]:</b> Ela Disse, Ele Disse https://drive.google.com/open?id=1IzqGEw9OfTUEGcBsrq_xq_twyNpC4ixd" href="#t07efa1">01 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x01]:</b> Ela Disse, Ele Disse LINK" href="#t07efb1">01 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x02]:</b> Deuses da Chuva https://drive.google.com/open?id=1g9hV2GxBXr8ivWRNQv8tro8u6-8pB-JP" href="#t07efa2">02 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x02]:</b> Deuses da Chuva LINK" href="#t07efb2">02 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x03]:</b> Clara e a TARDIS https://drive.google.com/open?id=1xySyw6FrjcOwU47VwT7IzsCeQrlaLQ0q" href="#t07efa3">03 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x03]:</b> Clara e a TARDIS LINK" href="#t07efb3">03 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x04]:</b> O Inforarium https://drive.google.com/open?id=1MVtQJq9ypJ6dgv3i3ETuPCUFQ2oiTz-F" href="#t07efa4">04 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x04]:</b> O Inforarium LINK" href="#t07efb4">04 Leg <i class="bi bi-youtube"></i></a><br>
            <!--
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP XX]:</b> XXX LINK" href="#t07efa-XX">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP XX]:</b> XXX LINK" href="#t07efb-XX">Mini-EP <i class="bi bi-youtube"></i></a><br>-->
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Discurso do Doutor &#9825; midias/discurso1.mp4" href="#t07edt1">1 &#9825;</a>
            <a onclick="siteLink(this.name)" name="Gerônimo &#9825; midias/geronimo.mp4" href="#t07edt2">2 &#9825;</a>
          </li>`;

var temp7Leg = `<img id="temp1" class="image-temp" src="midias/all-doctors.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2012-2013</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 00]:</b> O Doutor, a Viúva e o Guarda-roupa https://drive.google.com/open?id=1qtZ72Ibr9UFDFQbXKLK2We69veQ0qokY" href="#t07efa-00">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 00]:</b> O Doutor, a Viúva e o Guarda-roupa LINK" href="#t07efb-00">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> The Doctor, the Widow and the Wardrobe https://drive.google.com/file/d/17UHxt664Qlo9Ca3a80aKH8_kck2QMomR/view?usp=sharing" href="#t07e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> The Doctor, the Widow and the Wardrobe LINK" href="#t07e-00-c">Leg <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 00]:</b> The Doctor, the Widow and the Wardrobe LINK" href="#t07e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio 01]:</b> Asylum of the Daleks https://drive.google.com/open?id=1iLWLaRyKpxd_woftSqThuvMQP5v5aNpX" href="#t07efa-01">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio 01]:</b> Asylum of the Daleks LINK" href="#t07efb-01">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 01]:</b> Asylum of the Daleks https://drive.google.com/file/d/1F84sJPWQ9R92tFXXra2Em4rsRv4YNgzb/view?usp=sharing" href="#t07e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 01]:</b> Asylum of the Daleks LINK" href="#t07e-01-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 01]:</b> Asylum of the Daleks LINK" href="#t07e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 02]:</b> Pond Life https://drive.google.com/open?id=1agkg9hTCCdW-LVbfxMnzGVP_Rfnwgsys" href="#t07efa-02">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 02]:</b> Pond Life LINK" href="#t07efb-02">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 02]:</b> Dinosaurs on a Spaceship Espaço-Nave https://drive.google.com/file/d/1ATLj_DT9bwGwkj3MZaV7NYb27272qmLy/view?usp=sharing" href="#t07e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 02]:</b> Dinosaurs on a Spaceship Espaço-Nave LINK" href="#t07e-02-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 02]:</b> Dinosaurs on a Spaceship Espaço-Nave LINK" href="#t07e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 03]:</b> The Making of The Gunslinger https://drive.google.com/open?id=1I73RHz8FT_KxfaRDqJpfBZ1dnD3ueimI" href="#t07efa-03">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 03]:</b> The Making of The Gunslinger LINK" href="#t07efb-03">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 03]:</b> A Town Called Mercy https://drive.google.com/file/d/1uwwE0dJ5cRJyRI-Ol1kO3VbubRwE0AIs/view?usp=sharing" href="#t07e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 03]:</b> A Town Called Mercy LINK" href="#t07e-03-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 03]:</b> A Town Called Mercy LINK" href="#t07e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 04]:</b> The Power of Three https://drive.google.com/file/d/1x0mXnYq0ryijoSLX-7ChKiSRqDFdMvxk/view?usp=sharing" href="#t07e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 04]:</b> The Power of Three LINK" href="#t07e-04-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 04]:</b> The Power of Three LINK" href="#t07e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Good As Gold https://drive.google.com/open?id=1oEC6J5qI9qpR9VvoG7uFyJ_s-HgfUGhj" href="#t07efa-05">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Good As Gold LINK" href="#t07efb-05">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 05]:</b> The Angels Take Manhattan https://drive.google.com/file/d/10mkXONEego9oTDJbcmcxeUZzMBzn_e8P/view?usp=sharing" href="#t07e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 05]:</b> The Angels Take Manhattan LINK" href="#t07e-05-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 05]:</b> The Angels Take Manhattan LINK" href="#t07e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li><br>

          <li><p class="pf">Cena Não-gravada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> P.S. https://drive.google.com/open?id=1jMqgAo2jyEP6Av_0VhExg1U9fSes2z60" href="#t07efa-nn">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> P.S. LINK" href="#t07efb-nn">Mini-EP <i class="bi bi-youtube"></i></a><br>
          </li><br>

          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="Amy Pond &#9825;<i hidden></i> https://youtu.be/0PL-ncxdHmA" href="#t07e-edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="A Garota que Esperou &#9825;<i hidden></i> https://youtu.be/nV4Y78xkltY" href="#t07e-edt2">2 <i class="bi bi-youtube"></i></a>
          </li><br>
          <li><p class="pex">Conteúdo em HQ:</p>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 1 midias/lobo1.pdf" href="#t06ePD1">HQ 01 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 1 midias/lobo1.cbr" href="#t06eHQ1">HQ 01 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 2 midias/lobo2.pdf" href="#t06ePD2">HQ 02 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 2 midias/lobo2.cbr" href="#t06eHQ2">HQ 02 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 3 midias/lobo3.pdf" href="#t06ePD3">HQ 03 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 3 midias/lobo3.cbr" href="#t06eHQ3">HQ 03 [.cbr]</i></a><br>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 4 midias/lobo4.pdf" href="#t06ePD4">HQ 04 [.pdf]</i></a>
            <a onclick="siteLink(this.name)" name="O Império do Lobo - parte 4 midias/lobo4.cbr" href="#t06eHQ4">HQ 04 [.cbr]</i></a><br>
          </li>
          <br>

          <li><p class="p">Episódio Especial:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 01]:</b> The Battle of Demons Run - Two Days Later https://drive.google.com/open?id=1mneL2cUflF2xkVMz5NAvNKWqWgkO3esd" href="#t07efa-rr1">Mini-EP 1 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 01]:</b> The Battle of Demons Run - Two Days Later LINK" href="#t07efb-rr1">Mini-EP 1 <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 02]:</b> Vastra Investigates https://drive.google.com/open?id=14hnK5LoRJqGLV5A1Td7LA3K4tKkx_ERY" href="#t07efa-rr2">Mini-EP 2 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 02]:</b> Vastra Investigates LINK" href="#t07efb-rr2">Mini-EP 2 <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 03]:</b> The Great Detective https://drive.google.com/open?id=1o8QppbXpraXf6Blivv7EcfCq-djsNezL" href="#t07efa-rr3">Mini-EP 3 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ 03]:</b> The Great Detective LINK" href="#t07efb-rr3">Mini-EP 3 <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ Especial]:</b> The Snowmen https://drive.google.com/file/d/1sIVxF-S_Bn0XkTymibcXrtJmSsKRZu2U/view?usp=sharing" href="#t07e-rr-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ Especial]:</b> The Snowmen LINK" href="#t07e-rr-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li><br><br>

          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 06]:</b> The Bells of Saint John https://drive.google.com/open?id=1YttPna9FNyI83HSQtWdDQJ2NS0QyE_I9" href="#t07efa-06">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 06]:</b> The Bells of Saint John LINK" href="#t07efb-06">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 06]:</b> The Bells of Saint John https://drive.google.com/file/d/1GGGI79-qnMYrITHDHoX7JToCLifgsz2o/view?usp=sharing" href="#t07e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 06]:</b> The Bells of Saint John LINK" href="#t07e-06-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 06]:</b> The Bells of Saint John LINK" href="#t07e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 07]:</b> The Rings of Akhaten https://drive.google.com/file/d/1K9gZs7mo96sHJrQcVEB6DYOUTQK3Ch7X/view?usp=sharing" href="#t07e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 07]:</b> The Rings of Akhaten LINK" href="#t07e-07-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 07]:</b> The Rings of Akhaten LINK" href="#t07e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 08]:</b> Cold War https://drive.google.com/file/d/1fe9LlluZkElhomMI-L_FLnCVkhhxSeDL/view?usp=sharing" href="#t07e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 08]:</b> Cold War LINK" href="#t07e-08-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 08]:</b> Cold War LINK" href="#t07e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 09]:</b> Hide https://drive.google.com/file/d/1lYoXV7xVF-kuqGR0-sJaHG09J9nxF9Z5/view?usp=sharing" href="#t07e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 09]:</b> Hide LINK" href="#t07e-09-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 09]:</b> Hide LINK" href="#t07e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 10]:</b> Journey to the Centre of the TARDIS https://drive.google.com/file/d/1Ct5N0nhMIBdO1tE0qWG5sZw849yZEYyG/view?usp=sharing" href="#t07e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 10]:</b> Journey to the Centre of the TARDIS LINK" href="#t07e-10-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 10]:</b> Journey to the Centre of the TARDIS LINK" href="#t07e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 11]:</b> The Crimson Horror https://drive.google.com/file/d/17tsCO4lGg2T1KRMid3eUO6L2fN2XGOij/view?usp=sharing" href="#t07e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 11]:</b> The Crimson Horror LINK" href="#t07e-11-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 11]:</b> The Crimson Horror LINK" href="#t07e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 12]:</b> Nightmare in Silver https://drive.google.com/file/d/1L8SCLqLjiIj3aOuh_EwEsHVZiODnkCH7/view?usp=sharing" href="#t07e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 12]:</b> Nightmare in Silver LINK" href="#t07e-12-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 12]:</b> Nightmare in Silver LINK" href="#t0e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="The Night of Doctor https://drive.google.com/open?id=1i_CSHkJhKG3gKlWkeuExCBjwvl7yxec6" href="#t07efa">Spin-of Leg 1 <i class="fab fa-google-drive"></i></a><br>
            <a onclick="siteLink(this.name)" name="The Last Day https://drive.google.com/open?id=1shL--XF9DY7DbwoA-J6-waJwnDa79MB7" href="#t07efb">Spin-of Leg 2 <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="p">Episódio 13:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 13]:</b> Clarence and the Whispermen https://drive.google.com/open?id=1fcS5EaWI7sq6-P7aTSw0b-V74yPz2qFk" href="#t07efa-13">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio ☆ EP 13]:</b> Clarence and the Whispermen LINK" href="#t07efb-13">Mini-EP <i class="bi bi-youtube"></i></a><br>
            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 13]:</b> The Name of the Doctor https://drive.google.com/file/d/1boDaBsLlZ6O7ZOYD3gZS8q2AwtxQW6jq/view?usp=sharing" href="#t07e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 13]:</b> The Name of the Doctor LINK" href="#t07e-13-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 13]:</b> The Name of the Doctor LINK" href="#t07e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 14:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[7°T ☆ EP 14]:</b> The Day of the Doctor https://drive.google.com/file/d/1v5dWaRnE6R7zqX6jyOSc6P6ZyFkKzQL9/view?usp=sharing" href="#t07e-14-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 14]:</b> The Day of the Doctor LINK" href="#t07e-14-b">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[7°T ☆ EP 14]:</b> The Day of the Doctor LINK" href="#t07e-14-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Spin-Offs (mini-episódios):</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x01]:</b> Ela Disse, Ele Disse https://drive.google.com/open?id=1IzqGEw9OfTUEGcBsrq_xq_twyNpC4ixd" href="#t07efa1">01 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x01]:</b> Ela Disse, Ele Disse LINK" href="#t07efb1">01 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x02]:</b> Deuses da Chuva https://drive.google.com/open?id=1g9hV2GxBXr8ivWRNQv8tro8u6-8pB-JP" href="#t07efa2">02 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x02]:</b> Deuses da Chuva LINK" href="#t07efb2">02 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x03]:</b> Clara e a TARDIS https://drive.google.com/open?id=1xySyw6FrjcOwU47VwT7IzsCeQrlaLQ0q" href="#t07efa3">03 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x03]:</b> Clara e a TARDIS LINK" href="#t07efb3">03 Leg <i class="bi bi-youtube"></i></a><br>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x04]:</b> O Inforarium https://drive.google.com/open?id=1MVtQJq9ypJ6dgv3i3ETuPCUFQ2oiTz-F" href="#t07efa4">04 Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Spin-Off 7x04]:</b> O Inforarium LINK" href="#t07efb4">04 Leg <i class="bi bi-youtube"></i></a><br>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Discurso do Doutor &#9825; midias/discurso1.mp4" href="#t07edt1">1 &#9825;</a>
            <a onclick="siteLink(this.name)" name="Gerônimo &#9825; midias/geronimo.mp4" href="#t07edt2">2 &#9825;</a>
          </li>`;





var temp8Dub = `<img id="temp1" class="image-temp" src="https://www.guiadasemana.com.br/contentFiles/system/pictures/2014/8/119529/original/doc-b.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2014</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> A Hora do Doutor https://drive.google.com/open?id=1DVijI1__O2MH2-SwnG-whB_V9VpCHVmY" href="#t08e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> A Hora do Doutor https://mega.nz/file/yz4Uhajb#z-Vxdv3Jcie_3p3CAoffoeFjWUU6qqrFxqKY7qVMpK8" href="#t08e-00-c">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> A Hora do Doutor https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT07EP15" href="#t08e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11° Doutor]:</b> Confie em Mim &#9825;<i hidden></i> https://youtu.be/YNJgGSr3nCE" href="#t08e-eff1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>The Oncoming Storm:</b> A Tempestade que se Aproxima &#9825; midias/tempestade.mp4" href="#t08e-eff2">2 ☆</a>
          </li>
          <br><br>
          <li><p class="p">Episódio 1:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 01]:</b> Respire Fundo https://drive.google.com/open?id=0B0ConXlhQ-SxaU1HV3J4cG5wcFk" href="#t08e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 01]:</b> Respire Fundo https://play.midiaflixhd.com/tv/57243/8/1/dub" href="#t08e-01-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 01]:</b> Respire Fundo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP01" href="#t08e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 02]:</b> Dentro do Dalek https://drive.google.com/open?id=0B0ConXlhQ-SxMlB4RDdXdmsxd3c" href="#t08e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 02]:</b> Dentro do Dalek https://play.midiaflixhd.com/tv/57243/8/2/dub" href="#t08e-02-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 02]:</b> Dentro do Dalek https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP02" href="#t08e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 03]:</b> O Robô de Sherwood https://drive.google.com/open?id=0B0ConXlhQ-SxdG9SY0kzcHZfekk" href="#t08e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 03]:</b> O Robô de Sherwood https://play.midiaflixhd.com/tv/57243/8/3/dub" href="#t08e-03-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 03]:</b> O Robô de Sherwood https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP03" href="#t08e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 04]:</b> Escute https://drive.google.com/open?id=0B0ConXlhQ-SxR0NoSHNkeWJRdmM" href="#t08e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 04]:</b> Escute https://play.midiaflixhd.com/tv/57243/8/4/dub" href="#t08e-04-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 04]:</b> Escute https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP04" href="#t08e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 05]:</b> O Roubo do Tempo https://drive.google.com/open?id=0B0ConXlhQ-SxWFBrb2toRkpLYlU" href="#t08e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 05]:</b> O Roubo do Tempo https://play.midiaflixhd.com/tv/57243/8/5/dub" href="#t08e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 05]:</b> O Roubo do Tempo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP05" href="#t08e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 06]:</b> O Zelador https://drive.google.com/open?id=0B0ConXlhQ-SxeE1jV2hLdXN0cVE" href="#t08e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 06]:</b> O Zelador https://play.midiaflixhd.com/tv/57243/8/6/dub" href="#t08e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 06]:</b> O Zelador https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP06" href="#t08e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 07]:</b> Matando a Lua https://drive.google.com/open?id=0B0ConXlhQ-Sxc0cwUTNLVVNGd1E" href="#t08e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 07]:</b> Matando a Lua https://play.midiaflixhd.com/tv/57243/8/7/dub" href="#t08e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 07]:</b> Matando a Lua https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP07" href="#t08e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 08]:</b> A Múmia no Expresso do Oriente https://drive.google.com/open?id=0B0ConXlhQ-SxX04yNk05THpBTkE" href="#t08e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 08]:</b> A Múmia no Expresso do Oriente https://play.midiaflixhd.com/tv/57243/8/8/dub" href="#t08e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 08]:</b> A Múmia no Expresso do Oriente https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP08" href="#t08e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 09]:</b> Os Achatados https://drive.google.com/open?id=0B0ConXlhQ-SxNDZuUFI2WDh2MU0" href="#t08e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 09]:</b> Os Achatados https://play.midiaflixhd.com/tv/57243/8/9/dub" href="#t08e-09-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 09]:</b> Os Achatados https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP09" href="#t08e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 10]:</b> Na Floresta da Noite https://drive.google.com/open?id=0B0ConXlhQ-SxOGtSTS1WZzBjeW8" href="#t08e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 10]:</b> Na Floresta da Noite https://play.midiaflixhd.com/tv/57243/8/10/dub" href="#t08e-10-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 10]:</b> Na Floresta da Noite https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP10" href="#t08e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 11]:</b> Água Escura https://drive.google.com/open?id=0B0ConXlhQ-SxUHFNd18tNmhrY3c" href="#t08e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 11]:</b> Água Escura https://play.midiaflixhd.com/tv/57243/8/11/dub" href="#t08e-11-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 11]:</b> Água Escura https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP11" href="#t08e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 12]:</b> Morte no Paraíso https://drive.google.com/open?id=0B0ConXlhQ-SxcjJubWVyUGFGMTA" href="#t08e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 12]:</b> Morte no Paraíso https://play.midiaflixhd.com/tv/57243/8/12/dub" href="#t08e-12-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 12]:</b> Morte no Paraíso https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT08EP12" href="#t08e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da Temporada:</p>
            <a onclick="siteLink(this.name)" name="De fã à Protagonista &#9825 midias/capaldi.mp4" href="#t08edt1">1 Leg</a>
          </li>`;

var temp8Leg = `<img id="temp1" class="image-temp" src="https://www.guiadasemana.com.br/contentFiles/system/pictures/2014/8/119529/original/doc-b.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2014</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> The Time of the Doctor https://drive.google.com/file/d/10M5o_3XwT5P-o9Q4BGaA4Stnk6nhWOde/view?usp=sharing" href="#t08e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> The Time of the Doctor LINK" href="#t08e-00-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 00]:</b> The Time of the Doctor LINK" href="#t08e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11° Doutor]:</b> Confie em Mim &#9825;<i hidden></i> https://youtu.be/YNJgGSr3nCE" href="#t08e-eff1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>The Oncoming Storm:</b> A Tempestade que se Aproxima &#9825; midias/tempestade.mp4" href="#t08e-eff2">2 ☆</a>
          </li>
          <br><br>
          <li><p class="p">Episódio 1:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 01]:</b> Deep Breath https://drive.google.com/file/d/1R1c3jEA8UB1qpvJQSw6sVH2XptAjUQg1/view?usp=sharing" href="#t08e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 01]:</b> Deep Breath LINK" href="#t08e-01-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 01]:</b> Deep Breath LINK" href="#t08e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 02]:</b> Into the Dalek https://drive.google.com/file/d/1DetTWheytDmxc8r5e01hvJj4fQqikX52/view?usp=sharing" href="#t08e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 02]:</b> Into the Dalek LINK" href="#t08e-02-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 02]:</b> Into the Dalek LINK" href="#t08e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 03]:</b> The Robot of Sherwood https://drive.google.com/file/d/1VukhM9aN7B_fwBBGI8mYEfxYilnC-lTs/view?usp=sharing" href="#t08e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 03]:</b> The Robot of Sherwood LINK" href="#t08e-03-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 03]:</b> The Robot of Sherwood LINK" href="#t08e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 04]:</b> Listen https://drive.google.com/file/d/1s6zx8Czu6NeSl2UArN8i_2AVPF5bM-pU/view?usp=sharing" href="#t08e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 04]:</b> Listen LINK" href="#t08e-04-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 04]:</b> Listen https://sinalpublico.com/LINK" href="#t08e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 05]:</b> Time Heist https://drive.google.com/file/d/18mT0SAp4ByhCwFAN_ZzXnY3gy0O95pUj/view?usp=sharing" href="#t08e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 05]:</b> Time Heist LINK" href="#t08e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 05]:</b> Time Heist LINK" href="#t08e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 06]:</b> The Caretaker https://drive.google.com/file/d/1zXcDPSE7h34VwM8_pRK0yj1ZMjUWF6vJ/view?usp=sharing" href="#t08e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 06]:</b> The Caretaker LINK" href="#t08e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 06]:</b> The Caretaker LINK" href="#t08e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 07]:</b> Kill the Moon https://drive.google.com/file/d/13j9CdwxkIDgy1aDDcK_OGgG68t3fethR/view?usp=sharing" href="#t08e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 07]:</b> Kill the Moon LINK" href="#t08e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 07]:</b> Kill the Moon LINK" href="#t08e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 08]:</b> Mummy in the Orient Express https://drive.google.com/file/d/1UV_fmhoULfyZfZAfoEJjcO3FHWaTL7k3/view?usp=sharing" href="#t08e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 08]:</b> Mummy in the Orient Express LINK" href="#t08e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 08]:</b> Mummy in the Orient Express LINK" href="#t08e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 09]:</b> Flatline https://drive.google.com/file/d/1QitL3lyQe_iW5zF_pj2sEiggfaCJSjl0/view?usp=sharing" href="#t08e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 09]:</b> Flatline LINK" href="#t08e-09-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 09]:</b> Flatline LINK" href="#t08e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 10]:</b> In the Forest of the Night https://drive.google.com/file/d/1l0QX7hVvZVjCcOB3M78MYzL3ZNqVr9PQ/view?usp=sharing" href="#t08e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 10]:</b> In the Forest of the Night LINK" href="#t08e-10-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 10]:</b> In the Forest of the Night LINK" href="#t08e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 11]:</b> Dark Water https://drive.google.com/file/d/1Cc6LiWko7D7DZt1VZtwVetym_BwsCGj3/view?usp=sharing" href="#t08e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 11]:</b> Dark Water LINK" href="#t08e-11-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 11]:</b> Dark Water LINK" href="#t08e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[8°T ☆ EP 12]:</b> Death in Heaven https://drive.google.com/file/d/1HeehCdI3bcw2UKYMoo1FET5FQqhPcZUC/view?usp=sharing" href="#t08e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 12]:</b> Death in Heaven LINK" href="#t08e-12-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[8°T ☆ EP 12]:</b> Death in Heaven LINK" href="#t08e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da Temporada:</p>
            <a onclick="siteLink(this.name)" name="De fã à Protagonista &#9825 midias/capaldi.mp4" href="#t08edt1">1 Leg</a>
          </li>`;






var temp9Dub = `<img id="temp1" class="image-temp" src="https://www.doctorwhotv.co.uk/wp-content/uploads/face-the-raven-tardis-clara-rigsy-570x322.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2015</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> O Último Natal https://drive.google.com/open?id=0B0ConXlhQ-SxZGRtTmdwY3NVZFk" href="#t09e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> O Último Natal https://mega.nz/file/4ZBiHSjI#V58ZZKbcFrJNfcg6WLO8baMObVwqrKxzBdF9AMsiEQI" href="#t09e-00-c">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> O Último Natal https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP00" href="#t09e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 01]:</b> O Aprendiz de Mágico https://drive.google.com/open?id=0B0ConXlhQ-SxOE51bGtiV3FfNUU" href="#t09e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 01]:</b> O Aprendiz de Mágico<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/2/dub" href="#t09e-01-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 01]:</b> O Aprendiz de Mágico https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP01" href="#t09e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 02]:</b> O Fantoche da Bruxa https://drive.google.com/open?id=1NbwsvcYKXqzdCdSrsAVu0mlQLvBPi6tL" href="#t09e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 02]:</b> O Fantoche da Bruxa<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/3/dub" href="#t09e-02-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 02]:</b> O Fantoche da Bruxa https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP02" href="#t09e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 03]:</b> No Fundo do Lago https://drive.google.com/open?id=1gvAuwt4iu0rR8gMcjT-COcz4zkHk272y" href="#t09e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 03]:</b> No Fundo do Lago<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/4/dub" href="#t09e-03-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 03]:</b> No Fundo do Lago https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP03" href="#t09e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 04]:</b> Antes do Dilúvio https://drive.google.com/open?id=18Y1IdPp7T3gpi03zxRI8ljdWdlEsxEI7" href="#t09e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 04]:</b> Antes do Dilúvio<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/5/dub" href="#t09e-04-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 04]:</b> Antes do Dilúvio https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP04" href="#t09e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 05]:</b> A Garota Que Morreu https://drive.google.com/open?id=1t3MQER_RHDqPHeeBufa2p8T2aaRTXe00" href="#t09e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 05]:</b> A Garota Que Morreu<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/6/dub" href="#t09e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 05]:</b> A Garota Que Morreu https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP05" href="#t09e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 06]:</b> A Mulher Que Sobreviveu https://drive.google.com/open?id=1Kcu4LkpZ9q8PBOP0KpdNCESxAMPcn_C4" href="#t09e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 06]:</b> A Mulher Que Sobreviveu<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/7/dub" href="#t09e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 06]:</b> A Mulher Que Sobreviveu https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP06" href="#t09e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 07]:</b> A Invasão Zygon https://drive.google.com/open?id=1ip8S577mNAbCTINtOPn8A_k8YAsgIRgO" href="#t09e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 07]:</b> A Invasão Zygon<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/8/dub" href="#t09e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 07]:</b> A Invasão Zygon https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP07" href="#t09e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 08]:</b> A <i>Inversão</i> Zygon https://drive.google.com/open?id=1TqczsYQ8gVs7cniGTEhQyLJqyuXbEth0" href="#t09e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 08]:</b> A <i>Inversão</i> Zygon<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/9/dub" href="#t09e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 08]:</b> A <i>Inversão</i> Zygon https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP08" href="#t09e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 09]:</b> Sem Dormir https://drive.google.com/open?id=1W9pK8c0RFd27QsXJa-Ea5HqeOlAphy5q" href="#t09e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 09]:</b> Sem Dormir<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/10/dub" href="#t09e-09-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 09]:</b> Sem Dormir https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP09" href="#t09e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 10]:</b> Enfrentando o Corvo https://drive.google.com/open?id=1WYbh4PGuFPiIUbjaCQbDBWr1mFLhlttF" href="#t09e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 10]:</b> Enfrentando o Corvo<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/11/dub" href="#t09e-10-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 10]:</b> Enfrentando o Corvo https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP10" href="#t09e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>         
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 11]:</b> Enviado ao Paraíso https://drive.google.com/open?id=1SRGO48uH1aUJxnSm77Fp5kIdEPP10dcx" href="#t09e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 11]:</b> Enviado ao Paraíso<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/12/dub" href="#t09e-11-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 11]:</b> Enviado ao Paraíso hhttps://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP11" href="#t09e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 12]:</b> Obcecado https://drive.google.com/open?id=1GlcGuFh5qzJFf91EeDAUNoe4iFJGu2l6" href="#t09e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 12]:</b> Obcecado<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/13/dub" href="#t09e-12-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 12]:</b> Obcecado https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP12" href="#t09e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="Acha que o que sinto por vc é tão pequeno? &#9825; midias/claratt.mp4" href="#t09e-eff1">1 ☆</a>
          </li>
          <br><br>
          <li><p class="p">Episódio 13:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 13]:</b> Os Maridos de River Song https://drive.google.com/open?id=1IyDAy_CHXTzLopBUyvMTa-IsJAgpEbi6" href="#t09e-13-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 13]:</b> Os Maridos de River Song<i hidden></i> https://play.midiaflixhd.com/tv/57243/9/14/dub" href="#t09e-13-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 13]:</b> Os Maridos de River Song https://sinalpublico.com/player3/server5http2hlb.php?vid=DCTRWHT09EP13" href="#t09e-13-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Prólogo https://drive.google.com/open?id=1prqeY8vGjmkU4M4kigCZOY7J-TLt-TYC" href="#t09efa">Mini-EP 1 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> A Meditação do Doutor https://drive.google.com/open?id=1JPtm3rl93APIfIm_w36ybdjW0a-ewmAF" href="#t09efb">Mini-EP 2 <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Amar as Estrelas, River Song<i hidden></i> &#9825 https://youtu.be/35SSHMhS6Vc" href="#t09edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="Clara Oswald<i hidden></i> &#9825; https://youtu.be/bZnu0439koc" href="#t09edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp9Leg = `<img id="temp1" class="image-temp" src="https://www.doctorwhotv.co.uk/wp-content/uploads/face-the-raven-tardis-clara-rigsy-570x322.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2015</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> Last Christmas https://drive.google.com/file/d/1Kc05UfSMmv3LJs2gr5jcuSqzNL2X9zl6/view?usp=sharing" href="#t09e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> Last Christmas LINK" href="#t09e-00-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 00]:</b> Last Christmas LINK" href="#t09e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 01]:</b> The Magician's Apprentice https://drive.google.com/file/d/1n29mAsyjNMEXmGc5ndKUPLvEYZApHrTs/view?usp=sharing" href="#t09e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 01]:</b> The Magician's Apprentice<i hidden></i> LINK" href="#t09e-01-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 01]:</b> The Magician's Apprentice LINK" href="#t09e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 02]:</b> The Witch's Familiar https://drive.google.com/file/d/1jFr9PehBi9Z_HGAzpMknbyocwW16YnU7/view?usp=sharing" href="#t09e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 02]:</b> The Witch's Familiar<i hidden></i> LINK" href="#t09e-02-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 02]:</b> The Witch's Familiar LINK" href="#t09e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 03]:</b> Under the Lake https://drive.google.com/file/d/1_N5IJYf29RgxmCXEAdnBdmS-5njVqBJz/view?usp=sharing" href="#t09e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 03]:</b> Under the Lake<i hidden></i> LINK" href="#t09e-03-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 03]:</b> Under the Lake LINK" href="#t09e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 04]:</b> Before the Flood https://drive.google.com/file/d/1273bl8PBGrt0EUdig5xWKM8g9gsIOx-H/view?usp=sharing" href="#t09e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 04]:</b> Before the Flood<i hidden></i> LINK" href="#t09e-04-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 04]:</b> Before the Flood LINK" href="#t09e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 05]:</b> The Girl Who Died https://drive.google.com/file/d/14CSwunlQyepgUzWYFGSzLHjGymkwk6Qc/view?usp=sharing" href="#t09e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 05]:</b> The Girl Who Died<i hidden></i> LINK" href="#t09e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 05]:</b> The Girl Who Died LINK" href="#t09e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 06]:</b> The Woman Who Lived https://drive.google.com/file/d/1dyKPVYaBGErfJxGK_IWoOAvbNJ4HN89g/view?usp=sharing" href="#t09e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 06]:</b> The Woman Who Lived<i hidden></i> LINK" href="#t09e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 06]:</b> The Woman Who Lived LINK" href="#t09e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 07]:</b> The Zygon Invasion https://drive.google.com/file/d/1rDfIWCI8WGu-m3a5XjP5_lYBD9oUrmsd/view?usp=sharing" href="#t09e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 07]:</b> The Zygon Invasion<i hidden></i> LINK" href="#t09e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 07]:</b> The Zygon Invasion LINK" href="#t09e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 08]:</b> The Zygon <i>Inversion</i> https://drive.google.com/file/d/1kmozh87iRr_hgcmPj4Quou2JIsj4Iv2d/view?usp=sharing" href="#t09e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 08]:</b> The Zygon <i>Inversion</i><i hidden></i> LINK" href="#t09e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 08]:</b> The Zygon <i>Inversion</i> LINK" href="#t09e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 09]:</b> Sleep No More https://drive.google.com/file/d/1vUBHD8RkhUmNTe2smXqdkuh5EAq87q-S/view?usp=sharing" href="#t09e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 09]:</b> Sleep No More<i hidden></i> LINK" href="#t09e-09-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 09]:</b> Sleep No More LINK" href="#t09e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 10]:</b> Face the Raven https://drive.google.com/file/d/1uihhMuobnZx5VY9LTFjwUMQUaASUov5G/view?usp=sharing" href="#t09e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 10]:</b> Face the Raven<i hidden></i> LINK" href="#t09e-10-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 10]:</b> Face the Raven LINK" href="#t09e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>         
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 11]:</b> Heaven Sent https://drive.google.com/file/d/1kqHGwZzdHXVfbp2etYjaz0OIoah5pR5Q/view?usp=sharing" href="#t09e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 11]:</b> Heaven Sent<i hidden></i> LINK" href="#t09e-11-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 11]:</b> Heaven Sent LINK" href="#t09e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 12]:</b> Hell Bent https://drive.google.com/file/d/1Y-e89lvWPY6c_KZUobJgjTDGKAuc4f41/view?usp=sharing" href="#t09e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 12]:</b> Hell Bent<i hidden></i> LINK" href="#t09e-12-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 12]:</b> Hell Bent LINK" href="#t09e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Conteúdos Fandômicos:</p>
            <a onclick="siteLink(this.name)" name="Acha que o que sinto por vc é tão pequeno? &#9825; midias/claratt.mp4" href="#t09e-eff1">1 ☆</a>
          </li>
          <br><br>
          <li><p class="p">Episódio 13:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[9°T ☆ EP 13]:</b> The Husbands of River Song https://drive.google.com/file/d/10CRPY70eoGGc2NkZ23WSE9KUvUuyRR9Z/view?usp=sharing" href="#t09e-13-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 13]:</b> The Husbands of River Song<i hidden></i> LINK" href="#t09e-13-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[9°T ☆ EP 13]:</b> The Husbands of River Song LINK" href="#t09e-13-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Prólogo https://drive.google.com/open?id=1prqeY8vGjmkU4M4kigCZOY7J-TLt-TYC" href="#t09efa">Mini-EP 1 <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> The Doctor's Meditation https://drive.google.com/open?id=1JPtm3rl93APIfIm_w36ybdjW0a-ewmAF" href="#t09efb">Mini-EP 2 <i class="fab fa-google-drive"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Amar as Estrelas, River Song<i hidden></i> &#9825 https://youtu.be/35SSHMhS6Vc" href="#t09edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="Clara Oswald<i hidden></i> &#9825; https://youtu.be/bZnu0439koc" href="#t09edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;





var temp10Dub = `<img id="temp1" class="image-temp" src="https://wallpapers.com/images/high/doctor-who-title-galaxy-cover-sm9g0864y2nqwnza.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2017</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> O Retorno do Doutor Mysterio https://drive.google.com/file/d/1bZYr7OqOpTVpFU2P9sdF7pTmgRHY8u_R/view?usp=sharing" href="#t10e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> O Retorno do Doutor Mysterio https://mega.nz/file/wEBwBKoA#ZZ0pyzmEh55B8cyyB7KjbmAzPrgByqvxyMyH3M7SMZA" href="#t10e-00-c">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> O Retorno do Doutor Mysterio https://sinalpublico.com/player3/server12hlb.php?vid=DCTRWHT10EP00" href="#t10e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 01]:</b> O Piloto https://drive.google.com/open?id=1TAGX_lQ3Kfu3D6rFoPfx6jYety_ZTfpd" href="#t10e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 01]:</b> O Piloto https://play.midiaflixhd.com/tv/57243/10/1/dub" href="#t10e-01-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 01]:</b> O Piloto https://sinalpublico.com/player3/server6http2hlb.php?vid=DCTRWHT10EP01" href="#t10e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 02]:</b> Sorria https://drive.google.com/open?id=1Nl-xO7pJA2mUD4L8D3-81cv4zV_5FW94" href="#t10e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 02]:</b> Sorria https://play.midiaflixhd.com/tv/57243/10/2/dub" href="#t10e-02-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 02]:</b> Sorria https://sinalpublico.com/player3/server6http2hlb.php?vid=DCTRWHT10EP02" href="#t10e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 03]:</b> Gelo Fino https://drive.google.com/open?id=14A0ocHfbr6P8739kVEalMPZC5yBj9VS-" href="#t10e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 03]:</b> Gelo Fino https://play.midiaflixhd.com/tv/57243/10/3/dub" href="#t10e-03-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 03]:</b> Gelo Fino https://sinalpublico.com/player3/server6http2hlb.php?vid=DCTRWHT10EP03" href="#t10e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 04]:</b> Toc Toc https://drive.google.com/open?id=17kJGS3L-P6Y1KnFtFHHmH8H-EWU8jvCs" href="#t10e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 04]:</b> Toc Toc https://play.midiaflixhd.com/tv/57243/10/4/dub" href="#t10e-04-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 04]:</b> Toc Toc https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP04" href="#t10e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 05]:</b> Oxigênio https://drive.google.com/open?id=1gAQNz8f5ZoDoeIeRFcvKtApzObtgG49V" href="#t10e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 05]:</b> Oxigênio https://play.midiaflixhd.com/tv/57243/10/5/dub" href="#t10e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 05]:</b> Oxigênio https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP05" href="#t10e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 06]:</b> Extremis https://drive.google.com/open?id=1-488SQsHTJUpwnMeln9SBTL5F0LmkKV7" href="#t10e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 06]:</b> Extremis https://play.midiaflixhd.com/tv/57243/10/6/dub" href="#t10e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 06]:</b> Extremis https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP06" href="#t10e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 07]:</b> A Pirâmide no Fim do Mundo https://drive.google.com/open?id=17Pb6tVCouh9PUs483cQbMYITjaVvGlG_" href="#t10e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 07]:</b> A Pirâmide no Fim do Mundo https://play.midiaflixhd.com/tv/57243/10/7/dub" href="#t10e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 07]:</b> A Pirâmide no Fim do Mundo https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP07" href="#t10e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 08]:</b> A Mentira da Terra https://drive.google.com/open?id=1aL6VLluKVj81ACYuJ6lVE1SW5xHDJ-hA" href="#t10e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 08]:</b> A Mentira da Terra https://play.midiaflixhd.com/tv/57243/10/8/dub" href="#t10e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 08]:</b> A Mentira da Terra https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP08" href="#t10e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 09]:</b> Imperatriz de Marte https://drive.google.com/open?id=1NhEHUxksC8Grqo7Jsv83I8eJfieWpOZJ" href="#t10e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 09]:</b> Imperatriz de Marte https://play.midiaflixhd.com/tv/57243/10/10/dub" href="#t10e-09-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 09]:</b> Imperatriz de Marte https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP09" href="#t10e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 10]:</b> Os Devoradores de Luz https://drive.google.com/open?id=1Nb7UEiy6gHD93JmiVAHqiXYYOUUVKALM" href="#t10e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 10]:</b> Os Devoradores de Luz https://play.midiaflixhd.com/tv/57243/10/10/dub" href="#t10e-10-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 10]:</b> Os Devoradores de Luz https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP10" href="#t10e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Amigo do Futuro https://drive.google.com/open?id=1jntLxJKPyvkg0ql_5flB_fdUqTgkpi_h" href="#t09efa">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Amigo do Futuro https://youtu.be/xbMmsShghT4" href="#t10efb">Mini-EP <i class="bi bi-youtube"></i></a>
          </li>
          <br>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 11]:</b> Mundo e Tempo Suficientes https://drive.google.com/open?id=1UJ9TQLZjdZfogAxR28vAno5cPQSpv0Wp" href="#t10e-11-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 11]:</b> Mundo e Tempo Suficientes https://play.midiaflixhd.com/tv/57243/10/11/dub" href="#t10e-11-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 11]:</b> Mundo e Tempo Suficientes https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP11" href="#t10e-11-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 12]:</b> A Queda do Doutor https://drive.google.com/open?id=1V75-i14phHfXUSSu-yz87SCTvms1pefj" href="#t10e-12-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 12]:</b> A Queda do Doutor https://play.midiaflixhd.com/tv/57243/10/12/dub" href="#t10e-12-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 12]:</b> A Queda do Doutor https://sinalpublico.com/player3/server13hlb.php?vid=DCTRWHT10EP12" href="#t10e-12-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li><br>
          <li><p class="p">☆ Episódio Especial: ☆</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ Especial]:</b> Twice Upon a Time https://drive.google.com/open?id=1fwFtX8Z2IAei13p4pItgZV9xKqyyaVqq" href="#t10e-ESP-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ Especial]:</b> <i hidden></i>Twice Upon a Time https://play.midiaflixhd.com/tv/57243/11/1/dub" href="#t10e-ESP-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ Especial]:</b> Twice Upon a Time https://sinalpublico.com/player3/server10hlb.php?vid=DCTRWHT10ES" href="#t10e-ESP-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12° Doutor]:</b> Nunca Seja Cruel, Nunca Seja Covarde &#9825 https://youtu.be/DcADLy1gCKQ" href="#t10edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="Insuficiência Cósmica [VMZ] &#9825 https://youtu.be/O_1hLoG7or4" href="#t10edt2">2 <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">Considerações Finais</p>
            <i style="padding: 3px;">Aos que chegaram até aqui, meu muito obrigado. Compartilhamos de um sentimento inigualável de humanidade ironicamente apreendido através do contato onírico com esse inquietante ser alienígena. Não deixem esse valioso legado morrer, e lembrem-se: a história nunca acaba.</i>
          </li>`;

var temp10Leg = `<img id="temp1" class="image-temp" src="https://wallpapers.com/images/high/doctor-who-title-galaxy-cover-sm9g0864y2nqwnza.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2017</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> The Return of Doctor Mysterio https://drive.google.com/open?id=1kCaTAQDcfCPAHXZotTjT-8tGvxoiz64D" href="#t10e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> The Return of Doctor Mysterio LINK" href="#t10e-00-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 00]:</b> The Return of Doctor Mysterio LINK" href="#t10e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 01]:</b> The Pilot https://drive.google.com/file/d/1hv4WinQAADulz3eVRu2k8kNMiwg6m3ZX/view?usp=sharing" href="#t10e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 01]:</b> The Pilot LINK" href="#t10e-01-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 01]:</b> The Pilot LINK" href="#t10e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 02]:</b> Smile https://drive.google.com/file/d/1WaT16zMpq0rwzdShSJMmqAhSOj2XCwlM/view?usp=sharing" href="#t10e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 02]:</b> Smile LINK" href="#t10e-02-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 02]:</b> Smile LINK" href="#t10e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 03]:</b> Thin Ice https://drive.google.com/file/d/1wNGAj0FQkMvzOf2NSrz1WKTaHaKbSMjq/view?usp=sharing" href="#t10e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 03]:</b> Thin Ice LINK" href="#t10e-03-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 03]:</b> Thin Ice LINK" href="#t10e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 04]:</b> Knock Knock https://drive.google.com/file/d/1WJMQDcrfp7ajTe5ybWnY1d0uCwELKRmJ/view?usp=sharing" href="#t10e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 04]:</b> Knock Knock LINK" href="#t10e-04-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 04]:</b> Knock Knock LINK" href="#t10e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 05]:</b> Oxygen https://drive.google.com/file/d/1k-0uLqEoBnyMB8vxy7na65IqyYYP8Ird/view?usp=sharing" href="#t10e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 05]:</b> Oxygen LINK" href="#t10e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 05]:</b> Oxygen LINK" href="#t10e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 06]:</b> Extremis https://drive.google.com/file/d/1JqKUprxRUi8p3o3UPKKXp4bKB8e-roI1/view?usp=sharing" href="#t10e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 06]:</b> Extremis LINK" href="#t10e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 06]:</b> Extremis LINK" href="#t10e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 07]:</b> The Pyramid at the End of the World https://drive.google.com/file/d/1xmBAu4iR6LaUUWAV428X67FmnbgmCfBu/view?usp=sharing" href="#t10e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 07]:</b> The Pyramid at the End of the World LINK" href="#t10e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 07]:</b> The Pyramid at the End of the World LINK" href="#t10e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 08]:</b> The Lie of the Land https://drive.google.com/file/d/1l6SaOjD0cwxJvz8QWbyVnyouCoY8k-IM/view?usp=sharing" href="#t10e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 08]:</b> The Lie of the Land LINK" href="#t10e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 08]:</b> The Lie of the Land LINK" href="#t10e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 09]:</b> Empress of Mars https://drive.google.com/file/d/1CkmZH54Lylqc8OwjoWmHM8T8BQZzFtOd/view?usp=sharing" href="#t10e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 09]:</b> Empress of Mars LINK" href="#t10e-09-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 09]:</b> Empress of Mars LINK" href="#t10e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 10]:</b> The Eaters of Light https://drive.google.com/file/d/1VWZ6ggV9oqt5LPrFJqmnS5MOy3Cjdole/view?usp=sharing" href="#t10e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 10]:</b> The Eaters of Light LINK" href="#t10e-10-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 10]:</b> The Eaters of Light LINK" href="#t10e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br>
          <li><p class="p">Mini-Episódios:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Friend from the Future https://drive.google.com/open?id=1jntLxJKPyvkg0ql_5flB_fdUqTgkpi_h" href="#t09efa">Mini-EP <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[Mini-Episódio]:</b> Friend from the Future https://youtu.be/xbMmsShghT4" href="#t10efb">Mini-EP <i class="bi bi-youtube"></i></a>
          </li>
          <br>
          <li><p class="p">Episódio 11:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 11]:</b> World Enough and Time https://drive.google.com/file/d/1-WQArGkaTxsnk8bFKf_Llq-Pvi1b9FgI/view?usp=sharing" href="#t10e-11-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 11]:</b> World Enough and Time LINK" href="#t10e-11-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 11]:</b> World Enough and Time LINK" href="#t10e-11-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 12:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ EP 12]:</b> The Doctor Falls https://drive.google.com/file/d/1kvn9ByKHcTVnLDMzN__72uGoyXMmxQEw/view?usp=sharing" href="#t10e-12-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 12]:</b> The Doctor Falls LINK" href="#t10e-12-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ EP 12]:</b> The Doctor Falls LINK" href="#t10e-12-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li><br>
          <li><p class="p">☆ Episódio Especial: ☆</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[10°T ☆ Especial]:</b> Eram Duas Vezes https://drive.google.com/file/d/1fn-CkTMhrz3bg4F1dh-nPVsvCBpslFmd/view?usp=sharing" href="#t10e-ESP-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ Especial]:</b> <i hidden></i>Eram Duas Vezes LINK" href="#t10e-ESP-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[10°T ☆ Especial]:</b> Eram Duas Vezes LINK" href="#t10e-ESP-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12° Doutor]:</b> Nunca Seja Cruel, Nunca Seja Covarde &#9825 https://youtu.be/DcADLy1gCKQ" href="#t10edt1">1 <i class="bi bi-youtube"></i></a>
            <a onclick="siteLink(this.name)" name="Insuficiência Cósmica [VMZ] &#9825 https://youtu.be/O_1hLoG7or4" href="#t10edt2">2 <i class="bi bi-youtube"></i></a>
          </li>
          <br><br>
          <li><p class="pex">Considerações Finais</p>
            <i style="padding: 3px;">Aos que chegaram até aqui, meu muito obrigado. Compartilhamos de um sentimento inigualável de humanidade ironicamente apreendido através do contato onírico com esse inquietante ser alienígena. Não deixem esse valioso legado morrer, e lembrem-se: a história nunca acaba.</i>
          </li>`;





var temp11Dub = `<img id="temp1" class="image-temp" src="https://www.doctorwhotv.co.uk/wp-content/uploads/the-woman-who-fell-to-earth-jodie-hill.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2018</i></p>
          </li>
          <li><p class="pf">☆ Conteúdos Fandômicos: ☆</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[bastidores]:</b> A fofa da Jodie tomando um sustinho &#9825; midias/jodie.mp4" href="#t11e-edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="Beba suco de cranberry. https://www.facebook.com/thelegender0/videos/664322678582751/" href="#t011e-edt2">2 <i class="bi bi-facebook"></i></a> 
          </li>
          <br>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 01]:</b> A Mulher que Caiu na Terra https://drive.google.com/open?id=11BouBFC1L6CFrtq8Hk0KT1hkQht18KRf" href="#t11e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 01]:</b> <i hidden></i>A Mulher que Caiu na Terra https://play.midiaflixhd.com/tv/57243/11/2/dub" href="#t11e-01-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 01]:</b> A Mulher que Caiu na Terra https://sinalpublico.com/player3/server10hlb.php?vid=DCTRWHT11EP01" href="#t11e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 02]:</b> O Monumento Fantasma https://drive.google.com/open?id=1uawxYCJ88uIYiycQXbhVdvsORhEdevBX" href="#t11e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 02]:</b> <i hidden></i>O Monumento Fantasma https://play.midiaflixhd.com/tv/57243/11/3/dub" href="#t11e-02-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 02]:</b> O Monumento Fantasma https://sinalpublico.com/player3/server10hlb.php?vid=DCTRWHT11EP02" href="#t11e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 03]:</b> Rosa https://drive.google.com/open?id=1YCCqS-ZJNUXDB9niDuBZcovFIZkPzXC8" href="#t11e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 03]:</b> <i hidden></i>Rosa https://play.midiaflixhd.com/tv/57243/11/4/dub" href="#t11e-03-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 03]:</b> Rosa https://sinalpublico.com/player3/server10hlb.php?vid=DCTRWHT11EP03" href="#t11e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 04]:</b> Aracnídeos no Reino Unido https://drive.google.com/open?id=1XDKPkJ7YjWS3iXi5KBehRLzb70oUZ7Bi" href="#t11e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 04]:</b> <i hidden></i>Aracnídeos no Reino Unido https://play.midiaflixhd.com/tv/57243/11/5/dub" href="#t11e-04-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 04]:</b> Aracnídeos no Reino Unido https://sinalpublico.com/player3/server10hlb.php?vid=DCTRWHT11EP04" href="#t11e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 05]:</b> O Enigma de Tsuranga https://drive.google.com/open?id=1-DLAvcBkGtlXPIPMRNkPJQqrrLw1GY1c" href="#t11e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 05]:</b> <i hidden></i>O Enigma de Tsuranga https://play.midiaflixhd.com/tv/57243/11/6/dub" href="#t11e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 05]:</b> O Enigma de Tsuranga https://sinalpublico.com/player3/server7http2hlb.php?vid=DCTRWHT11EP05" href="#t11e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 06]:</b> Demônios de Punjab https://drive.google.com/open?id=1jtWyKSRbEnsmG0h4rK3usPITLBCc08sq" href="#t11e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 06]:</b> <i hidden></i>Demônios de Punjab https://play.midiaflixhd.com/tv/57243/11/7/dub" href="#t11e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 06]:</b> Demônios de Punjab https://sinalpublico.com/player3/server7http2hlb.php?vid=DCTRWHT11EP06" href="#t11e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 07]:</b> Kerblam! https://drive.google.com/open?id=1MtkffYPnzh3O4cLMg1Fb6E2CdJu7wKE0" href="#t11e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 07]:</b> <i hidden></i>Kerblam! https://play.midiaflixhd.com/tv/57243/11/8/dub" href="#t11e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 07]:</b> Kerblam! https://sinalpublico.com/player3/server8http2hlb.php?vid=DCTRWHT11EP07" href="#t11e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 08]:</b> Os Caçadores de Bruxas https://drive.google.com/open?id=1slpo7eUWkonTyoYENBrAW2otN6rnmqB2" href="#t11e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 08]:</b> <i hidden></i>Os Caçadores de Bruxas https://play.midiaflixhd.com/tv/57243/11/9/dub" href="#t11e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 08]:</b> Os Caçadores de Bruxas https://sinalpublico.com/player3/server8http2hlb.php?vid=DCTRWHT11EP08" href="#t11e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 09]:</b> Abandonada https://drive.google.com/open?id=1dRNgb4NF7iNHhWVAvoNUOUfdWFzMn2Lp" href="#t11e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 09]:</b> <i hidden></i>Abandonada https://play.midiaflixhd.com/tv/57243/11/10/dub" href="#t11e-09-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 09]:</b> Abandonada https://sinalpublico.com/player3/server8http2hlb.php?vid=DCTRWHT11EP09" href="#t11e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 10]:</b> A Batalha de Ranskoor Av Kolos https://drive.google.com/open?id=1gEY-PoQ2JuvBPCeUTRw7TG3XXl2uCPEC" href="#t11e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 10]:</b> A Batalha de Ranskoor Av Kolos https://play.midiaflixhd.com/tv/57243/11/11/dub" href="#t11e-10-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 10]:</b> A Batalha de Ranskoor Av Kolos https://sinalpublico.com/player3/server8http2hlb.php?vid=DCTRWHT11EP10" href="#t11e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da Temporada:</p>
            <a onclick="siteLink(this.name)" name="E se Doctor Who fosse um anime? https://www.facebook.com/johnsmith221b/videos/847258012978214/" href="#t11edt1">1 <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="Dusk Till Dawn Mashup - Legendado https://youtu.be/-iCKQtE5xl4" href="#t11edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp11Leg = `<img id="temp1" class="image-temp" src="https://www.doctorwhotv.co.uk/wp-content/uploads/the-woman-who-fell-to-earth-jodie-hill.jpg">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2018</i></p>
          </li>
          <li><p class="pf">☆ Conteúdos Fandômicos: ☆</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[bastidores]:</b> A fofa da Jodie tomando um sustinho &#9825; midias/jodie.mp4" href="#t11e-edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="Beba suco de cranberry. https://www.facebook.com/thelegender0/videos/664322678582751/" href="#t011e-edt2">2 <i class="bi bi-facebook"></i></a> 
          </li>
          <br>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 01]:</b> The Woman Who Fell to Earth https://drive.google.com/file/d/1e53N5_89ne1oRoew2L7KRHi-uw-tUvUj/view?usp=sharing" href="#t11e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 01]:</b> <i hidden></i>The Woman Who Fell to Earth LINK" href="#t11e-01-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 01]:</b> The Woman Who Fell to Earth LINK" href="#t11e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 02]:</b> The Ghost Monument https://drive.google.com/file/d/1oUkKFQ4UxACzTnpiUaRhOEP9yJT41mWR/view?usp=sharing" href="#t11e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 02]:</b> <i hidden></i>The Ghost Monument LINK" href="#t11e-02-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 02]:</b> The Ghost Monument LINK" href="#t11e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 03]:</b> Rosa https://drive.google.com/file/d/1wg4TiOLQ76MezkFb508UewfqnqtjudbZ/view?usp=sharing" href="#t11e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 03]:</b> <i hidden></i>Rosa LINK" href="#t11e-03-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 03]:</b> Rosa LINK" href="#t11e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 04]:</b> Arachnids in the UK https://drive.google.com/file/d/1MqO_IpNcEOiv5Y3mbCkR1TQ_QdnZ3Qw2/view?usp=sharing" href="#t11e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 04]:</b> <i hidden></i>Arachnids in the UK LINK" href="#t11e-04-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 04]:</b> Arachnids in the UK LINK" href="#t11e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 05]:</b> The Tsuranga Conundrum https://drive.google.com/file/d/1emzDCwlYp_c-7m65D9bDavj1IPvkoSWU/view?usp=sharing" href="#t11e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 05]:</b> <i hidden></i>The Tsuranga Conundrum LINK" href="#t11e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 05]:</b> The Tsuranga Conundrum LINK" href="#t11e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 06]:</b> Demons of the Punjab https://drive.google.com/file/d/13EcceEcOOG_TXP_BVuzYXDpAL7LqFP0j/view?usp=sharing" href="#t11e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 06]:</b> <i hidden></i>Demons of the Punjab LINK" href="#t11e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 06]:</b> Demons of the Punjab LINK" href="#t11e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 07]:</b> Kerblam! https://drive.google.com/file/d/1c0rSFT-2K0l79k1pUuQeuXXJK_dh1WGS/view?usp=sharing" href="#t11e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 07]:</b> <i hidden></i>Kerblam! LINK" href="#t11e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 07]:</b> Kerblam! LINK" href="#t11e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 08]:</b> The Witchfinders https://drive.google.com/file/d/1H2vIlm4jKWONicbix-wY8587BCxHDwTE/view?usp=sharing" href="#t11e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 08]:</b> <i hidden></i>The Witchfinders LINK" href="#t11e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 08]:</b> The Witchfinders LINK" href="#t11e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 09]:</b> It Takes You Away https://drive.google.com/file/d/19mUBq7nr5eiBZaYxGkqrHGnLMD5wFwic/view?usp=sharing" href="#t11e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 09]:</b> <i hidden></i>It Takes You Away LINK" href="#t11e-09-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 09]:</b> It Takes You Away LINK" href="#t11e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[11°T ☆ EP 10]:</b> The Battle of Ranskoor Av Kolos https://drive.google.com/file/d/1gMArAwj3rIfe5Ee0qOqTHHvPxwMPZs8E/view?usp=sharing" href="#t11e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 10]:</b> The Battle of Ranskoor Av Kolos LINK" href="#t11e-10-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[11°T ☆ EP 10]:</b> The Battle of Ranskoor Av Kolos LINK" href="#t11e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edit da Temporada:</p>
            <a onclick="siteLink(this.name)" name="E se Doctor Who fosse um anime? https://www.facebook.com/johnsmith221b/videos/847258012978214/" href="#t11edt1">1 <i class="bi bi-facebook"></i></a>
            <a onclick="siteLink(this.name)" name="Dusk Till Dawn Mashup - Legendado https://youtu.be/-iCKQtE5xl4" href="#t11edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;





var temp12Dub = `<img id="temp1" class="image-temp" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doctor-who-episode-4-1578860983.png?crop=0.992xw:1.00xh;0.00816xw,0&resize=520:*">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2019</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolução https://drive.google.com/open?id=1sKlr0oedDhTtHFLCsdqYCqyfhC5_kuhy" href="#t12e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolução https://drive.google.com/file/d/1bZoFB-NfzAoZtixIaN6VE0hEmp-uAWsu" href="#t12e-00-c">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolução https://sinalpublico.com/player3/server6http2hlb.php?vid=DCTRWHT11ES" href="#t12e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 01]:</b> Spyfall Parte 1 https://drive.google.com/open?id=1d-Gf2FEmji4-Sw73Bu1lrpwFzvS8t2oh" href="#t12e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 01]:</b> Spyfall Parte 1 https://drive.google.com/file/d/1BGjmLSL8roGexp0E_dU0QAa4uTJklP4a" href="#t12e-01-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 01]:</b> Spyfall Parte 1 https://sinalpublico.com/player3/server8http2hlb.php?vid=DCTRWHT12EP01" href="#t12e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 02]:</b> Spyfall Parte 2 https://drive.google.com/open?id=1k-WGdGOpMJFErvD387iJw4_o9HAjRXPZ" href="#t12e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 02]:</b> Spyfall Parte 2 https://drive.google.com/file/d/1OeDgSnuesI5qGzf_hDGbFrmyxWfb6toK/view?usp=sharing" href="#t12e-02-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 02]:</b> Spyfall Parte 2 https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP02" href="#t12e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 03]:</b> Órfão 55 https://drive.google.com/open?id=1bp6mIi-LXEN0kFa6eJsxiruiD5sTe1jF" href="#t12e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 03]:</b> Órfão 55 https://drive.google.com/file/d/1j-OtGfP9OT3jIF5bISCOBOPwrNwRRqD2/view?usp=sharing" href="#t12e-03-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 03]:</b> Órfão 55 https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP03" href="#t12e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 04]:</b> A Noite de Terror de Nikola Tesla https://drive.google.com/open?id=1q0ccAYZOS6EguwQwqy9HiWOmScG9CDrX" href="#t12e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 04]:</b> A Noite de Terror de Nikola Tesla https://drive.google.com/file/d/1mBlmiw5pq6ME15Kyto4TY4fhmpNU3hAs/view?usp=sharing" href="#t12e-04-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 04]:</b> A Noite de Terror de Nikola Tesla https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP04" href="#t12e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 05]:</b> Fugindo dos Judoon https://drive.google.com/open?id=1JvrmJYE4rhmAxYdTNC8jPtKk190J6-By" href="#t12e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 05]:</b> Fugindo dos Judoon https://play.midiaflixhd.com/tv/57243/12/5/dub" href="#t12e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 05]:</b> Fugindo dos Judoon https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP05" href="#t12e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 06]:</b> Praxeus https://drive.google.com/open?id=19xn0AJc_HyhQoim3I-H31cXhDDNyVDDx" href="#t12e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 06]:</b> Praxeus https://play.midiaflixhd.com/tv/57243/12/6/dub" href="#t12e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 06]:</b> Praxeus https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP06" href="#t12e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 07]:</b> Pode Me Ouvir? https://drive.google.com/open?id=1WXNejgttkHEfANeG1kr3XWhQOB_U2pCr" href="#t12e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 07]:</b> Pode Me Ouvir? https://play.midiaflixhd.com/tv/57243/12/7/dub" href="#t12e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 07]:</b> Pode Me Ouvir? https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP07" href="#t12e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 08]:</b> A Assombração da Villa Diodati https://drive.google.com/open?id=19rI5yAt1hnGu5df4tmJEUzM8gBkOCDTN" href="#t12e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 08]:</b> A Assombração da Villa Diodati https://play.midiaflixhd.com/tv/57243/12/8/dub" href="#t12e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 08]:</b> A Assombração da Villa Diodati https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP08" href="#t12e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 09]:</b> Ascensão dos Cybermen https://drive.google.com/open?id=1JcMeD2FITtK7_n-XElkpY8_BstgTD12m" href="#t12e-09-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 09]:</b> Ascensão dos Cybermen https://play.midiaflixhd.com/tv/57243/12/9/dub" href="#t12e-09-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 09]:</b> Ascensão dos Cybermen https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP09" href="#t12e-09-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 10]:</b> A Criança Atemporal https://drive.google.com/open?id=1cEziiy94xBR2lzwJrE_nMSnz2fFKLfK3" href="#t12e-10-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 10]:</b> A Criança Atemporal https://play.midiaflixhd.com/tv/57243/12/10/dub" href="#t12e-10-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 10]:</b> A Criança Atemporal https://sinalpublico.com/player3/server14hlb.php?vid=DCTRWHT12EP10" href="#t12e-10-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Uma breve explicação... midias/explicando12.mp4" href="#t12edt1">1 ☆</i></a>
            <a onclick="siteLink(this.name)" name="TARDIS<i hidden></i> &#9825; https://youtu.be/eOv7r5ZBBro" href="#t12edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;

var temp12Leg = `<img id="temp1" class="image-temp" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/doctor-who-episode-4-1578860983.png?crop=0.992xw:1.00xh;0.00816xw,0&resize=520:*">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2019</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolution https://drive.google.com/file/d/1Wh0f3ADx2Ena1Eu5YzqSGVgKg0xGCgGB/view?usp=sharing" href="#t12e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolution LINK" href="#t12e-00-c">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 00]:</b> Resolution LINK" href="#t12e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 01]:</b> Spyfall, Part 1 https://drive.google.com/open?id=1cXo-cbY97yZQ0HFzXiB-aDllyirnU5ww" href="#t12e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 01]:</b> Spyfall, Part 1 LINK" href="#t12e-01-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 01]:</b> Spyfall, Part 1 LINK" href="#t12e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 02]:</b> Spyfall, Part 2 https://drive.google.com/open?id=1LVByqNHGdINK6sOBOS1m_ZHSF_95CQHQ" href="#t12e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 02]:</b> Spyfall, Part 2 LINK" href="#t12e-02-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 02]:</b> Spyfall, Part 2 LINK" href="#t12e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 03]:</b> Orphan 55 https://drive.google.com/open?id=1f_UBs5kjZnUTztFv8VtRHvSG1U-NyK09" href="#t12e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 03]:</b> Orphan 55 LINK" href="#t12e-03-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 03]:</b> Orphan 55 LINK" href="#t12e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 04]:</b> Nikola Tesla's Night of Terror Tesla https://drive.google.com/open?id=14X6W4NWb-nCsOqjDqz_12K6_nQJgGeB0" href="#t12e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 04]:</b> Nikola Tesla's Night of Terror Tesla LINK" href="#t12e-04-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 04]:</b> Nikola Tesla's Night of Terror Tesla LINK" href="#t12e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 05]:</b> Fugitive of the Judoon https://drive.google.com/open?id=1EAhRGYbNPJq3mD2WjojsR1RbF-T6RX5h" href="#t12e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 05]:</b> Fugitive of the Judoon LINK" href="#t12e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 05]:</b> Fugitive of the Judoon LINK" href="#t12e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 06]:</b> Praxeus https://drive.google.com/open?id=1Sl4mWq9-Up1SZes5Ikwy-Z0qy7tQUMvR" href="#t12e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 06]:</b> Praxeus LINK" href="#t12e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 06]:</b> Praxeus LINK" href="#t12e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 07]:</b> Can You Hear Me? https://drive.google.com/open?id=1tl1T-r6jcV4DchNf5raNGKsKXWHfPV4k" href="#t12e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 07]:</b> Can You Hear Me? LINK" href="#t12e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 07]:</b> Can You Hear Me? LINK" href="#t12e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 08]:</b> The Haunting of Villa Diodati Diodati https://drive.google.com/open?id=1xYTI7eWQcbA8Q6lYaUQxAgJKPE52uJ7P" href="#t12e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 08]:</b> The Haunting of Villa Diodati Diodati LINK" href="#t12e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 08]:</b> The Haunting of Villa Diodati Diodati LINK" href="#t12e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 09]:</b> Ascension of the Cybermen https://drive.google.com/open?id=1PnNtBAh7q5pZ7tEWXq6orwl7eC7PGoJz" href="#t12e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 09]:</b> Ascension of the Cybermen LINK" href="#t12e-09-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 09]:</b> Ascension of the Cybermen LINK" href="#t12e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 10:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[12°T ☆ EP 10]:</b> The Timeless Children https://drive.google.com/open?id=1hsN_HcNdOwyKn1pJKKYtOxK-0m8hrVi4" href="#t12e-10-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 10]:</b> The Timeless Children LINK" href="#t12e-10-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[12°T ☆ EP 10]:</b> The Timeless Children LINK" href="#t12e-10-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="Uma breve explicação... midias/explicando12.mp4" href="#t12edt1">1 ☆</i></a>
            <a onclick="siteLink(this.name)" name="TARDIS<i hidden></i> &#9825; https://youtu.be/eOv7r5ZBBro" href="#t12edt2">2 <i class="bi bi-youtube"></i></a>
          </li>`;





var temp13Dub = `<img id="temp1" class="image-temp" style="width: 99%; max-width:465px;" src="https://www.denofgeek.com/wp-content/uploads/2022/10/Doctor-Who-The-Power-of-the-Doctor-Regeneration-scene.jpg?resize=510%2C290">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2021-2022</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolução dos Daleks https://drive.google.com/file/d/14Hn9zD2bAAYs7pK8xh6WrZYDlh_v5l57/view?usp=sharing" href="#t13e-00-b">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolução dos Daleks https://vfilmesonline.net/v/2wy3ni216-mzgex" href="#t13e-00-c">Dub <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolução dos Daleks https://sinalpublico.com/player3/server15hlb.php?vid=DCTRWHT12ES" href="#t13e-00-ap">Dub <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 01]:</b> O Apocalipse do Dia das Bruxas https://drive.google.com/file/d/1GN3YBKlf7DUFTnMD7SVfBa7HDIhYRwmh/view?usp=sharing" href="#t13e-01-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 01]:</b> O Apocalipse do Dia das Bruxas https://play.midiaflixhd.com/tv/57243/13/1/dub" href="#t13e-01-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 01]:</b> O Apocalipse do Dia das Bruxas https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP01" href="#t13e-01-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 02]:</b> A Guerra dos Sontarans https://drive.google.com/file/d/1moCxo6lNa_FALnUzm-V-cSx7mhPMHssa/view?usp=sharing" href="#t13e-02-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 02]:</b> A Guerra dos Sontarans https://play.midiaflixhd.com/tv/57243/13/2/dub" href="#t13e-02-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 02]:</b> A Guerra dos Sontarans https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP02" href="#t13e-02-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 03]:</b> Era uma vez, no Tempo https://drive.google.com/file/d/1FQWeLcGvArW1KCdN-bCeT_bD4zAzwyp7/view?usp=sharing" href="#t13e-03-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 03]:</b> Era uma vez, no Tempo https://play.midiaflixhd.com/tv/57243/13/3/dub" href="#t13e-03-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 03]:</b> Era uma vez, no Tempo https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP03" href="#t13e-03-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 04]:</b> Vilareijo dos Anjos https://drive.google.com/file/d/1HK4D5m_1dU8eMzn6SenLxKvhJYFPS9_q/view?usp=sharing" href="#t13e-04-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 04]:</b> Vilareijo dos Anjos https://play.midiaflixhd.com/tv/57243/13/4/dub" href="#t13e-04-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 04]:</b> Vilareijo dos Anjos https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP04" href="#t13e-04-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 05]:</b> Sobreviventes do Fluxo https://drive.google.com/file/d/1dx_KEDKMUuB6Oupsfj9KZRMxK0OQ6Dig/view?usp=sharing" href="#t13e-05-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 05]:</b> Sobreviventes do Fluxo https://play.midiaflixhd.com/tv/57243/13/5/dub" href="#t13e-05-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 05]:</b> Sobreviventes do Fluxo https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP05" href="#t13e-05-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 06]:</b> Os Conquistadores https://drive.google.com/file/d/1e9GFt56msvaRSyvBZrWl-_4agqWzK98H/view?usp=sharing" href="#t13e-06-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 06]:</b> Os Conquistadores https://play.midiaflixhd.com/tv/57243/13/6/dub" href="#t13e-06-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 06]:</b> Os Conquistadores https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP06" href="#t13e-06-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 07]:</b> A Noite dos Daleks https://drive.google.com/file/d/1XqIjVybHcPrEBJtU2U8IaiTDF51nqETU/view?usp=sharing" href="#t13e-07-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 07]:</b> A Noite dos Daleks https://play.midiaflixhd.com/tv/57243/13/7/dub" href="#t13e-07-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 07]:</b> A Noite dos Daleks https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP07" href="#t13e-07-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 08]:</b> Lenda dos Demônios Marinhos https://drive.google.com/file/d/1eoWLwb9saej_xFQ8C4ARGropeX3VkRBO/view?usp=sharing" href="#t13e-08-a">Dub <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 08]:</b> Lenda dos Demônios Marinhos https://play.midiaflixhd.com/tv/57243/13/8/dub" href="#t13e-08-b">Dub <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 08]:</b> Lenda dos Demônios Marinhos https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP08" href="#t13e-08-ap">Dub <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
          <!--
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 09]:</b> O Poder do Doutor https://sinalpublico.com/player3/server16hlb.php?vid=DCTRWHT13EP09" href="#t13e-09-ap">Leg <i class="bi bi-badge-hd"></i></a>
          -->
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 09]:</b> O Poder do Doutor https://drive.google.com/file/d/1LrBaocAWckOEKQXMZ7c997tmbdcfBPKD/view?usp=sharing" href="#t13e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 09]:</b> O Poder do Doutor https://mega.nz/file/9GEkATDT#-BO5_svsjsYBOaV28z52qvauf22FwmzINqbD1yPz2_0" href="#t13e-09-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13° Doutora]:</b> O Universo Vai Surpreender Vocês &#9825; midias/doctor13.mp4" href="#t13edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="Tenent de volta &#9825; midias/starman.mp4" href="#t13edt2">2 ☆</a>
          </li>`;

var temp13Leg = `<img id="temp1" class="image-temp" style="width: 99%; max-width:465px;" src="https://www.denofgeek.com/wp-content/uploads/2022/10/Doctor-Who-The-Power-of-the-Doctor-Regeneration-scene.jpg?resize=510%2C290">
          <li>
            <p class="ficha"><i>Ano de Lançamento: 2021-2022</i></p>
          </li>
          <li><p class="p">Episódio 00:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolution of the Daleks https://drive.google.com/file/d/1nHFmip5ldv_KKpc89hTfBUGgQbIryvyN/view?usp=sharing" href="#t13e-00-b">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolution of the Daleks LINK" href="#t13e-00-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 00]:</b> Revolution of the Daleks LINK" href="#t13e-00-ap">Leg <i class="bi bi-badge-hd-fill"></i></a>
          </li>
          <li><p class="p">Episódio 1:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 01]:</b> The Halloween Apocalypse https://drive.google.com/file/d/19vGEBCQjxkq1gnjgkv9-7lX9bHUepFs4/view?usp=sharing" href="#t13e-01-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 01]:</b> The Halloween Apocalypse LINK" href="#t13e-01-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 01]:</b> The Halloween Apocalypse LINK" href="#t13e-01-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 2:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 02]:</b> War of the Sontarans https://drive.google.com/file/d/1FBJkkOED6X-2kqs9IpszK-lHQORzm52G/view?usp=sharing" href="#t13e-02-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 02]:</b> War of the Sontarans LINK" href="#t13e-02-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 02]:</b> War of the Sontarans LINK" href="#t13e-02-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 3:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 03]:</b> Once, Upon Time https://drive.google.com/file/d/1W-ZGHgxZUxWzT3K8VGs7P0_o2eaIQjHN/view?usp=sharing" href="#t13e-03-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 03]:</b> Once, Upon Time LINK" href="#t13e-03-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 03]:</b> Once, Upon Time LINK" href="#t13e-03-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 4:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 04]:</b> Village of the Angels https://drive.google.com/file/d/132JdBCCD1oz7ddd3-6pjfPvs_yQmXEE0/view?usp=sharing" href="#t13e-04-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 04]:</b> Village of the Angels LINK" href="#t13e-04-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 04]:</b> Village of the Angels LINK" href="#t13e-04-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 5:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 05]:</b> Survivors of the Flux https://drive.google.com/file/d/1DB12INkB2i36es-SHFbks3KsaHF8prcs/view?usp=sharing" href="#t13e-05-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 05]:</b> Survivors of the Flux LINK" href="#t13e-05-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 05]:</b> Survivors of the Flux LINK" href="#t13e-05-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 6:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 06]:</b> The Vanquishers https://drive.google.com/file/d/1rDew3t7h-_loy9SBn0YY8f-UY3C_xGQR/view?usp=sharing" href="#t13e-06-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 06]:</b> The Vanquishers LINK" href="#t13e-06-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 06]:</b> The Vanquishers LINK" href="#t13e-06-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 7:</p>            
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 07]:</b> Eve of the Daleks https://drive.google.com/file/d/1gSX0i2QX454mg-mHIXMEjGMOEwhKttyn/view?usp=sharing" href="#t13e-07-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 07]:</b> Eve of the Daleks LINK" href="#t13e-07-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 07]:</b> Eve of the Daleks LINK" href="#t13e-07-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 8:</p>           
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 08]:</b> Legend of the Sea Devils https://drive.google.com/file/d/1bKVfUkwRtCAbzgAPtME72-uup42DfS6y/view?usp=sharing" href="#t13e-08-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 08]:</b> Legend of the Sea Devils LINK" href="#t13e-08-b">Leg <i class="bi bi-badge-sd"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 08]:</b> Legend of the Sea Devils LINK" href="#t13e-08-ap">Leg <i class="bi bi-badge-hd"></i></a>
          </li>
          <li><p class="p">Episódio 9:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#c7c7c7'>[13°T ☆ EP 09]:</b> The Power of The Doctor https://drive.google.com/file/d/1LrBaocAWckOEKQXMZ7c997tmbdcfBPKD/view?usp=sharing" href="#t13e-09-a">Leg <i class="fab fa-google-drive"></i></a>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13°T ☆ EP 09]:</b> The Power of The Doctor https://mega.nz/file/9GEkATDT#-BO5_svsjsYBOaV28z52qvauf22FwmzINqbD1yPz2_0" href="#t13e-09-c">Leg <img style="float: right; width: 17px; margin-left: 8px;" src="https://mega.nz/favicon.ico?v=3"></a>
          </li>
          <br><br>
          <li><p class="pf">Edits da Temporada:</p>
            <a onclick="siteLink(this.name)" name="<b style='font-size:1rem;color:#'>[13° Doutora]:</b> O Universo Vai Surpreender Vocês &#9825; midias/doctor13.mp4" href="#t13edt1">1 ☆</a>
            <a onclick="siteLink(this.name)" name="Tenent de volta &#9825; midias/starman.mp4" href="#t13edt2">2 ☆</a>
          </li>`;



	if (idiom == "dub"){
		opcs.innerHTML = `<button class="dubLeg" name="dub" onclick="mudaDubLeg(this.name)"><b>★ Dublado ★</b></button>
          <button class="dubLeg" name="leg" onclick="mudaDubLeg(this.name)">Legendado</button>`
          temp1.innerHTML = temp1Dub;
          temp2.innerHTML = temp2Dub;
          temp3.innerHTML = temp3Dub;
          temp4.innerHTML = temp4Dub;
          temp5.innerHTML = temp5Dub;
          temp6.innerHTML = temp6Dub;
          temp7.innerHTML = temp7Dub;
          temp8.innerHTML = temp8Dub;
          temp9.innerHTML = temp9Dub;
          temp10.innerHTML = temp10Dub;
          temp11.innerHTML = temp11Dub;
          temp12.innerHTML = temp12Dub;
          temp13.innerHTML = temp13Dub;
          dublado = true;
          legendado = false;
	}else{
		opcs.innerHTML = `<button class="dubLeg" name="dub" onclick="mudaDubLeg(this.name)">Dublado</button>
          <button class="dubLeg" name="leg" onclick="mudaDubLeg(this.name)"><b>★ Legendado ★</b></button>`
          temp1.innerHTML = temp1Leg;
          temp2.innerHTML = temp2Leg;
          temp3.innerHTML = temp3Leg;
          temp4.innerHTML = temp4Leg;
          temp5.innerHTML = temp5Leg;
          temp6.innerHTML = temp6Leg;
          temp7.innerHTML = temp7Leg;
          temp8.innerHTML = temp8Leg;
          temp9.innerHTML = temp9Leg;
          temp10.innerHTML = temp10Leg;
          temp11.innerHTML = temp11Leg;
          temp12.innerHTML = temp12Leg;
          temp13.innerHTML = temp13Leg;
          legendado = true;
          dublado = false;
	}
}