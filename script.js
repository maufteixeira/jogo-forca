var palavras = new Array();

palavras[0] = "VITORIA";
palavras[1] = "CASEBRE";
palavras[2] = "OLIMPIADAS";
palavras[3] = "FOGUEIRA";
palavras[4] = "RIO";
palavras[5] = "CIDADE";
palavras[6] = "COMBOIO";
palavras[7] = "VERDADE";
palavras[8] = "FORMIGA";
palavras[9] = "FARRAPO";

var k;
var iconte = Math.floor(Math.random() * 2);
var dj = document.getElementById('jg');
var erro = 1;
var d = "<pre><font class=gameover>";
var iconte = Math.floor(Math.random() * 7);
var ki = new Array(palavras[iconte].length);
var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var letrasDig = [];
var letrasErr = [];
var novasPalavras = new Array();

function desenhaTexto(x, y, texto) {
  var tela = document.querySelector('canvas');
  var pincel = tela.getContext('2d');

  pincel.font='65px Arial Black';
  pincel.fillStyle='#CCC';
  pincel.fillText(texto, x, y);    
}

function desenhaTela() {
  pincel.fillStyle = '#006400';
  pincel.fillRect(50, 0, 1200, 800);

  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(200, 300);
  pincel.fillRect(200, 300, 20, 400); // linha vertical
  pincel.fillRect(100, 700, 230, 20); // base
  pincel.fillRect(200, 300, 300, 20); // topo
  pincel.fillRect(500, 300, 20, 50);

  desenhaTexto(380, 155, "JOGO DA  FORCA");
}

function desenhaCabeca() {
  pincel.fillStyle = "#CCC"
  pincel.beginPath();
  pincel.arc(510, 380, 50, 0, 2 * 3.14);
  pincel.fill();

  pincel.fillStyle = "#006400";
  pincel.beginPath();
  pincel.arc(510, 380, 30, 0, 2 * 3.14);
  pincel.fill();
}

function desenhaTronco() {
  pincel.fillStyle = "#CCC";
  pincel.beginPath();
  pincel.moveTo(500, 300);
  pincel.fillRect(500, 420, 20, 150);
}

function desenhaBracoE() {
  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(520, 430);
  pincel.fillRect(480, 430, 20, 20);
  pincel.fillRect(460, 430, 20, 100);
  pincel.lineTo(400, 500);
  pincel.fill();
}

function desenhaBracoD() {
  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(500, 430);
  pincel.fillRect(520, 430, 20, 20);
  pincel.fillRect(540, 430, 20, 100);
  pincel.fill();
}

function desenhaPernaE() {
  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(520, 600);
  pincel.fillRect(480, 570, 20, 150)
}

function desenhaPernaE() {
  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(520, 600);
  pincel.fillRect(480, 570, 20, 150)
}

function desenhaPernaD(){
  pincel.fillStyle = '#CCC';
  pincel.beginPath();
  pincel.moveTo(520, 600);
  pincel.fillRect(520, 570, 20, 150)
}

for (k = 0; k < palavras[iconte].length; k++) {
  ki[k] = "__";
} 

var p = new Array();

function iniciaJogo() {
  window.location.reload( false );
}


function sorteio() {
  palavras = palavras.concat(novasPalavras);

  var djc = "<table cellpadding=2  ";
  djc = djc + "cellspacing=4 border=0 width=390 ";
  djc = djc + " height=40 >";
  for (k = 0; k < palavras[iconte].length; k++) {
    p[k] = k;
    djc = djc + "<td class=visao> __ </td>";
  }
  djc = djc + "</tr></table><br>";
  dj.innerHTML = djc;
  console.log(palavras);
  console.log(novasPalavras);

  desenhaTela();
}

function verificaerro() {
  var m = document.getElementById('g');
  switch (erro) {
    case 0:
      break
    case 1:
      desenhaCabeca();
      break
    case 2:
      desenhaTronco();
      break
    case 3:
      desenhaBracoE();
      break
    case 4:
      desenhaBracoD();
      break
    case 5:
      desenhaPernaE();
      break
    case 6:
      desenhaPernaD();
      break
    default:
      d = '';
      d = d + "<font class=gameover><b>GAME OVER</b></font>";
      d = d + "<br>";
      d = d + "<font class=gameover> Palavra: <blink>" + palavras[iconte].toUpperCase() + "</blink></font>";
  }
  m.innerHTML = d;
  erro++;
}

var campo = document.getElementById("input");

function validaTexto() {
  var texto = campo.value;

  for (letra of texto){
    if (!isNaN(texto)){
      alert("Não digite números");
      document.getElementById("input").value="";
      return;
    };

    letraspermitidas=("abcdefghijklmnopqrstuvxwyz").toUpperCase();

    var ok=false;
    for (letra2 of letraspermitidas ){
      if (letra==letra2){
          ok=true;
      };
    };

    if (!ok){
      alert("Não digite caracteres especiais");
      document.getElementById("input").value="";
      return;
    };
  };
}

document.getElementById('input').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
  validaTexto();
});

document.getElementById('novo').addEventListener('keyup', (ev) => {
	const input = ev.target;
	input.value = input.value.toUpperCase();
  validaTexto();
});

function adcPalavra() {
  let entrada = document.querySelector('#novo');
  novaPalavra = entrada.value;
  novasPalavras.push(novaPalavra);
  entrada.focus();
  console.log(novasPalavras);
  return novasPalavras;
}

function jogar(letra) {
  var nome = palavras[iconte].toUpperCase();
  nome.split("");
  var erroSim = 0;
  var coleta = "";
  letra = document.getElementById('input').value;
  for (k = 0; k < palavras[iconte].length; k++) {
    if (nome[k] == letra) {
      ki[k] = letra;
    }

    if (ki[k] != "__") {

      coleta = coleta + ki[k];
      
    }
  }

  if (coleta.match(letra) == letra) {

    letrasDig.push(letra);

  } else {

    erroSim = 1;
    letrasDig.push(campo.value);
    letrasErr.push(campo.value);

  }

  var letrasArr = [...new Set(letrasDig)];
  var letrasArr2 = [...new Set(letrasErr)];
  let letrasD = document.querySelector('.letras');
  var letrasE = document.querySelector('.errada');
  console.log(letrasArr);
  console.log(letrasE);
  letrasD.innerHTML = letrasArr.sort();
  letrasE.innerHTML = letrasErr.sort();
  
  var ik;
  var t;
  t = "<table cellpadding=2 cellspacing=4 ";
  t = t + " border=0 width=390 height=40 ";
  t = t + " bgcolor=#ccc style='border: ";
  t = t + " 0px solid #666666;'><tr>";

  for (ik = 0; ik < palavras[iconte].length; ik++) {
    t = t + "<td style='border: ";
    t = t + "0px solid #ccc;' bgcolor=#ccc ";
    t = t + " align=center valign=middle ";
    t = t + " class=visao>" + ki[ik] + "</td>";
  }

  input.value='';
  input.focus();
  
  if (erroSim == 1) {
    verificaerro();
    erroSim = 0;
  }

  t = t + "</tr></table>";
  dj.innerHTML = t;

  if (coleta == palavras[iconte].toUpperCase()) {

    var winmsg = "<br>";
    winmsg = winmsg + "<font class=winner>Palavra revelada: <b><blink>";
    winmsg = winmsg + palavras[iconte].toUpperCase() + "</blink>";
    winmsg = winmsg + "<br><br>PARABÉNS VOCÊ VENCEU!!!<br><br>";
    
    var winG = document.getElementById('g');
    winG.innerHTML = winmsg;
  }

}