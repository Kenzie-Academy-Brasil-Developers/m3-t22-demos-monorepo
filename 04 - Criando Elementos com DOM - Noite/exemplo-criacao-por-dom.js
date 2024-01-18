/*
  Passos lógicos para adicionar um novo elemento ao HTML pelo DOM:
  - 1. Criar o elemento desejado utilizando .createElement.
  - 2. Adicionar as propriedades ao elemento criado (texto interno, classes)
  - 3. Capturar um elemento de referência que já existe no HTML.
  - 4. Adicionar o elemento criado ao HTML, utilizando o elemento de referência
  capturado em conjunto com um método de adição.
*/

// function addTitleAndParagraph() {
const addTitleAndParagraph = () => {
  /*
   1. Criar o elemento desejado utilizando .createElement.
  */
  const headingOne = document.createElement("h1");
  const paragraph = document.createElement("p");

  /*
    2. Adicionar as propriedades ao elemento criado (texto interno, classes)
  */
  headingOne.innerText = "Titulo Exemplo DOM";
  paragraph.innerText = "Texto interno paragrafo";
  // console.log(headingOne);

  /*
   3. Capturar um elemento de referência que já existe no HTML.
  (no nosso caso, o body)
  */
  const body = document.querySelector("body");

  /*
    4. Adicionar o elemento criado ao HTML, utilizando o elemento de referência
  capturado em conjunto com um método de adição.
  */
  // body.appendChild(headingOne);
  // body.appendChild(paragraph);

  body.append(paragraph, headingOne);
  console.log(body);
};

addTitleAndParagraph();
