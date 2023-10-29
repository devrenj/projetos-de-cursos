// //Olá mundo
// let nome = prompt("digite seu nome")
// if (nome == null || nome == '') {
//   alert("Hello, visitor")
// } else {
//   alert("Hello, " + nome)
// }

// // Criando um objeto
// let objeto = { online: false, number: 1, variavel: 'nome', array: ['Array'] };
// var { online, number, variavel, array } = objeto;
// console.log(variavel, online, number, array);

// // Mostrando o objeto no console
// function mudarNome() {
//   let nome = objeto.variavel;
//  document.getElementById(nomeUser);
// }

//Nome do usuário
function getName() {
  let nome = prompt('Digite seu nome')
  let genero = prompt('Qual seu pronome? (ele/ela/x)');
  let pronome = document.getElementById("pronome");
  genero = genero.toLowerCase();
  
  // const sanitizer = new Sanitizer(nome);
  // let name = document.getElementById("fname");
  alert(`Olá, ${nome}!`);
  if (genero == 'ela') {
    pronome.setHTML('a');
  } else if (genero == 'x') {
    pronome.setHTML('x');
  }
  document.getElementById("entradaUser").setHTML(' ' + nome);
}