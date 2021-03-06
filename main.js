const nomeTimeA = prompt('Nome do time A:');
const nomeTimeB = prompt('Nome do time B:');

//NOME DOS TIMES
const timeA_html = document.getElementById('nomeTimeA');
const timeB_html = document.getElementById('nomeTimeB');

timeA_html.innerText = nomeTimeA.toUpperCase();
timeB_html.innerText = nomeTimeB.toUpperCase();

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
    gravarZerarPontosDoSet();
    verificarFimDoJogo();

  }
  if (pontoB >= 21 && pontoB - pontoA >= 2){
    alert(`O time ${nomeTimeB} venceu o set com ${pontoB} pontos!`);
    setB = setB +1;
    setB_html.innerText = setB;
    gravarZerarPontosDoSet();
    verificarFimDoJogo();
  }
}

//PONTUAÇÃO NOS SETS
let arraySetPontosA = [];
let arraySetPontosB = [];
//soma dos pontos do set armazenados nos respectivos arrays acima
totalDePontosA = 0;
totalDePontosB = 0;

function gravarZerarPontosDoSet(){
  //salvar pontuação
  arraySetPontosA.push(pontoA);
  arraySetPontosB.push(pontoB);
  
  zerarPontos()
}

function verificarFimDoJogo(){
  if (setA == 2){
    for (let pontosDoSetA of arraySetPontosA) {
      totalDePontosA = totalDePontosA + pontosDoSetA;
    }
    alert(`O time ${nomeTimeA} fez um total de ${totalDePontosA} pontos e venceu o jogo por ${setA} x ${setB}`);
    zerarTudo();
  }
  if (setB == 2){
    for (let pontosDoSetB of arraySetPontosB) {
      totalDePontosB = totalDePontosB + pontosDoSetB;
    }
    alert(`O time ${nomeTimeB} fez um total de ${totalDePontosB} pontos e venceu o jogo por ${setB} x ${setA}`);
    zerarTudo();
  }
}

function zerarPontos(){
//zerar placar
pontoA = 0;
pontoB = 0;
//atualizar na tela
pontuacaoA_html.innerText = pontoA;
pontuacaoB_html.innerText = pontoB;
}

function zerarTudo(){
  setA = 0;
  setB = 0;
  setA_html.innerText = setA;
  setB_html.innerText = setB;
  zerarPontos()
}