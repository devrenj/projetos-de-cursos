type heroi = {
  nome: string;
  vulgo: string;
};

function printaObjeto(pessoa: heroi) {
  console.log(pessoa)
}

// isso printa um comentário/*  */
printaObjeto({
  nome: 'bruce wayne',
  vulgo: 'batman'
})