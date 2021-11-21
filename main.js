const nomeTimeA = prompt('Nome do time A:');
const nomeTimeB = prompt('Nome do time B:');

//NOME DOS TIMES
const timeA_html = document.getElementById('nomeTimeA');
const timeB_html = document.getElementById('nomeTimeB');

timeA_html.innerText = nomeTimeA;
timeB_html.innerText = nomeTimeB;

//PONTUAÇÃO DO SET
const pontuacaoA_html = document.getElementById('pontuacaoA');
const pontuacaoB_html = document.getElementById('pontuacaoB');

let pontoA = 0;
let pontoB = 0;
pontuacaoA_html.innerText = pontoA;
pontuacaoB_html.innerText = pontoB;

//PLACAR GERAL
const setA_html = document.getElementById('setA');
const setB_html = document.getElementById('setB');

let setA = 0;
let setB = 0;

pontuacaoA_html.addEventListener('click', function () {
  pontoA++;
  pontuacaoA_html.innerText = pontoA;
  verificarFimDoSet();
})

pontuacaoB_html.addEventListener('click', function () {
  pontoB++;
  pontuacaoB_html.innerText = pontoB;
  verificarFimDoSet();
});

function verificarFimDoSet() {
  if (pontoA >= 21 && pontoA - pontoB >= 2){
    alert(`O time ${nomeTimeA} venceu o set com ${pontoA} pontos!`);
    setA = setA + 1;
    setA_html.innerText = setA;
    gravarZerarPontos();
    verificarFimDoJogo();

  }
  if (pontoB >= 21 && pontoB - pontoA >= 2){
    alert(`O time ${nomeTimeB} venceu o set com ${pontoB} pontos!`);
    setB = setB +1;
    setB_html.innerText = setB;
    gravarZerarPontos();
    verificarFimDoJogo();
  }
}

let arraySetPontosA = [];
let arraySetPontosB = [];

function gravarZerarPontos(){
  //salvar pontuação
  arraySetPontosA.push(pontoA);
  arraySetPontosB.push(pontoB);
  //zerar placar
  pontoA = 0;
  pontoB = 0;
  //atualizar na tela
  pontuacaoA_html.innerText = pontoA;
  pontuacaoB_html.innerText = pontoB;
}

function verificarFimDoJogo(){
  if (setA == 2){
    alert(`O time ${nomeTimeA} venceu a partida por ${setA} x ${setB}`);
    zerarSet();
  }
  if (setB == 2){
    alert(`O time ${nomeTimeB} venceu a partida por ${setB} x ${setA}`);
    zerarSet();
  }
}

function zerarSet(){
  // for (pontosA = 0, pontosA = arraySetPontosA++){
    
  //   alert(`Pontos da partida: ${nomeTimeA} fez ${pontosA} e ${nomeTimeB} fez ${pontosB}`);
  // }

  let setA = 0;
  let setB = 0;
  setA_html.innerText = setA;
  setB_html.innerText = setB;
}