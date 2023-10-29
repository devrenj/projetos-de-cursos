/**
* Desenvolvido por: Roberto Nóbrega Jr.
* Github @devrenj
*
* ESTE PROJETO NÃO É USADO PARA FINS COMERCIAIS
* APENAS PARA DESENVOLVIMENTO ACADÊMICO
* LICENSA MIT (c) 2023
* SUA REPRODUÇÃO É PERMITIDA DESDE QUE OBSERVADAS AS MESMAS DIRETRIZES
*
* Agradecimentos: Steph Hoel @stephoel
* Referências: MDN.com | W3Schools.com
**/

let mostrarVitorias = document.getElementById('vitorias')
let mostrarRank = document.getElementById('rank')
let mensagemServidor = document.getElementById('mensagemServidor')
let nivelJogador = document.getElementById('nivel')
let entradaVitorias
let timeout

function limparTudo() {
  entradaVitorias = nivelJogador.value
  mostrarVitorias.innerHTML = ``;
  mostrarRank.innerHTML = ``;
  mensagemServidor.innerHTML = ``
  nivelJogador.value = ``;
}
function limparCampo(){
  nivelJogador.value = ``;
}

function limparDados(){
  entradaVitorias = nivelJogador.value
  mostrarVitorias.innerHTML = ``;
  mostrarRank.innerHTML = ``;
  mensagemServidor.innerHTML = `` 
}


function calcularRank() {
  let saldoVitorias = parseInt(entradaVitorias)  
  let nivel;

  function mostrarMensagem(){
    // Identificar quando usar singular/plural
    if (saldoVitorias != 1) {
    mostrarVitorias.innerHTML = `O Herói tem de saldo de **${saldoVitorias}** vitórias`
    mostrarRank.innerHTML = `Atualmente no rank: **${nivel}**`
    } else {
      mostrarVitorias.innerHTML = `O Herói tem de saldo de **${saldoVitorias}** vitória`
      mostrarRank.innerHTML = `Atualmente no rank: **${nivel}**`
    }
  }

  try {
  // Tratamentos de Exceção
  // Contribuição: @stephhoel
  if(entradaVitorias == '')
    throw `Campo vazio`
  if(entradaVitorias < 0)
    throw `Apenas números positivos são permitidos`
  if (isNaN(entradaVitorias) || isNaN(saldoVitorias))
    throw `Apenas números são permitidos`
    // Validações do Algoritmo (desafio)
  if (saldoVitorias > 1000)
    throw `Somente números entre 0-1000 são permitidos`
    if (saldoVitorias == 0){
      mensagemServidor.innerHTML = `Seja bem-vindo(a)!<br>Comece sua aventura hoje mesmo!`
    } else if (saldoVitorias >= 0 && saldoVitorias <= 10) {
      nivel = 'Ferro'
      mostrarMensagem()
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = 'Bronze'
    mostrarMensagem()
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
      nivel = 'Prata'
      mostrarMensagem()
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
      nivel = 'Ouro'
      mostrarMensagem()
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
      nivel = 'Diamante'
      mostrarMensagem()
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100){
      nivel = 'Lendário'
      mostrarMensagem()
    } else if (saldoVitorias >= 101 && saldoVitorias <= 999 ) {
      nivel = 'Imortal'
      mostrarMensagem()
      mensagemServidor.innerHTML = `[SERVIDOR] Parabéns! Você está concorrendo ao ranking mundial!`
    } else {
      nivel = 'BAN'
      mostrarMensagem()
      mensagemServidor.innerHTML = `[SERVIDOR] VOCÊ FOI BANIDO PERMANENTEMENTE POR HACK!`
    }
    timeout = setTimeout(limparDados, 10 * 1000)
  } catch (err) {
      mensagemServidor.innerHTML = `${err}`
     timeout = setTimeout(limparDados, 3 * 1000)
  }
}