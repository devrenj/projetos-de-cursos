class CardNews extends HTMLElement { // Classe (molde) que herda os comportamentos do HTML
  constructor() { // Toda classe precisa ter um construtor, é a primeira coisa a ser executada
    super(); // Invoca um método que faz chamada ao construtor que está herdando (HTML ELEMENT)

    const shadow = this.attachShadow({mode: "open"}) // Faz a classe anexar uma sombra
                                                    // Open: Permite alterações externas
                                                   // Closed: Trabalha apenas internamente
    shadow.innerHTML = "<h1>Hello World!</h1>"
  }
}

customElements.define('card-news', CardNews) // Declaramos qual elemento customizado estamos criando passando Seletor + Método construtor