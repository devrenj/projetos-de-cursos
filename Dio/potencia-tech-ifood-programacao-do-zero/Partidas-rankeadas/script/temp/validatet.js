let mostrarVitorias = document.getElementById('vitorias')
let mostrarRank = document.getElementById('rank')
let mensagemServidor = document.getElementById('mensagemServidor')

function limpar() {
  mostrarVitorias.innerHTML = ``;
  mostrarRank.innerHTML = ``;
  mensagemServidor.innerHTML = ``;
}

function calcularRank() {
  let entradaVitorias = document.getElementById('nivel').value
  // Coloquei este verificador de erros aqui porque depois que o valor passa pelo parseInt, se torna NaN, mas sinto que não é uma boa prática deixar assim
  function verificaErros() {
    try {
      if (isNaN(entradaVitorias)) {
      throw `Apenas números são permitidos`
        } else if (entradaVitorias == '') {
          throw `Campo vazio, insira um número`
        } else if (entradaVitorias < 0) {
          throw `Digite apenas números positivos`
        }
  } catch (err) {
        mensagemServidor.innerHTML = `${err}`
      }
  }
  verificaErros()
  let saldoVitorias = parseInt(entradaVitorias)  
  let nivel;
  function mostrarMensagem(){
    if (saldoVitorias != 1) {
    mostrarVitorias.innerHTML = `O Herói tem de saldo de **${saldoVitorias}** vitórias`
    mostrarRank.innerHTML = `Atualmente no rank: **${nivel}**`
    } else {
      mostrarVitorias.innerHTML = `O Herói tem de saldo de **${saldoVitorias}** vitória`
      mostrarRank.innerHTML = `Atualmente no rank: **${nivel}**`
    }
  }
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
        mensagemServidor.innerHTML = `<span style="color: red; font-weight: 900;">[SERVIDOR]</span> Parabéns jogador! Você está concorrendo ao ranking mundial`

    } else if (saldoVitorias >= 1000) {
      nivel = 'BAN'
      mostrarMensagem()
      mensagemServidor.innerHTML = `<span style="color: red; font-weight: 900;">[SERVIDOR]</span> VOCÊ FOI BANIDO PERMANENTEMENTE POR HACK!`
    }
  }