/*
  Passos lógicos para adicionar um novo elemento ao HTML pelo DOM
  - 1. Criar o elemento desejado utilizando .createElement
  - 2. Adicionar as propriedades ao elemento criado (texto interno, classes)
  - 3. Capturar um elemento de referência que já existe no HTML
  - 4. Adicionar o elemento criado ao HTML, utilizando o elemento de referência
  capturado em conjunto com um método de adição.
*/

// function addTitleAndParagraph() {
// Arrow Function
const addTitleAndParagraph = () => {
  /*
    1. Criar o elemento desejado utilizando .createElement
  */
  const headingOne = document.createElement("h1");
  const paragraph = document.createElement("p");

  /*
    2. Adicionar as propriedades ao elemento criado (texto interno, classes)
  */
  // 2.1 Adicionando texto interno
  headingOne.innerText = "Titulo Exemplo DOM";
  paragraph.innerText = "Conteúdo interno do paragrafo de exemplo.";
  // 2.2 Adicionado uma classe
  headingOne.classList.add("releases__title");
  console.log(headingOne);
  console.log(paragraph);

  /*
    3. Capturar um elemento de referência que já existe no HTML (no nosso caso, body)
  */
  const body = document.querySelector("body");
  // console.log(body);

  /*
    4. Adicionar o elemento criado ao HTML, utilizando o elemento de referência
  capturado em conjunto com um método de adição.
  */
  // body.appendChild(headingOne);
  // body.appendChild(paragraph);

  body.append(headingOne, paragraph);
};

addTitleAndParagraph();
