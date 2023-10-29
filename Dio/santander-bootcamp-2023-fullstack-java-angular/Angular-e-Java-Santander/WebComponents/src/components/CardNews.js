class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.bodyBuild());
    shadow.appendChild(this.customCss());
  }
  bodyBuild() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const autor = document.createElement('span');
    autor.textContent = 'Por ' + (this.getAttribute('autor') || 'Anonymous');
    // if (this.getAttribute('autor') == 'Beto') {
    //   autor.textContent = "html"
    // }; // É possível criar condições para que o texto seja substituido, útil para criar assuntos!

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('titulo');
    linkTitle.href = this.getAttribute('link-url');
    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('conteudo');
    const newsImage = document.createElement('img');
    // newsImage.src = (this.getAttribute('caminho') || "");
    newsImage.src = this.getAttribute('caminho') || '/assets/default.png';
    newsImage.alt = 'Foto da notícia';

    const cardEsq = document.createElement('div');
    cardEsq.setAttribute('class', 'card_esq');
    cardEsq.appendChild(autor);
    cardEsq.appendChild(linkTitle);
    cardEsq.appendChild(newsContent);

    const cardDir = document.createElement('div');
    cardDir.setAttribute('class', 'card_dir');
    cardDir.appendChild(newsImage);

    componentRoot.appendChild(cardEsq);
    componentRoot.appendChild(cardDir);

    return componentRoot;
  }

  customCss() {
    const style = document.createElement('style');
    style.textContent = `
      .card {
        width: 80%;
        border: 0;
        -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
      }
      
      /* .card_esq, .card_dir {
        
      } */
      
      .card_esq {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;
      }
      
      .card_esq > h1 {
        padding-top: 25px;
        font-size: 25px;
      }
      
      .card_esq > a {
        padding-top: 25px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
      
      .card_esq > span {
        font-size: 12px;
        font-weight: 400;
      }
      
      .card_esq > p {
        color: rgb(70, 70, 70)
      }
    `;
    
    return style;
  }
}

customElements.define('card-news', CardNews);
