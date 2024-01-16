// document.body.children[0].innerText = "Novo Titulo Modificado pelo JS";
// document.body.children[1].innerText = "Paragrafo alterado via DOM";

// Seletores DOM

/*
  - Capturar o elemento HTML pelo JS (utilizando o DOM)
  - Elemento em mãos, alterar a propriedade que eu quiser
*/

// const body = document.body;
const body = document.querySelector("body");
// console.log(body);
// body.style = "background: tomato";
body.style.backgroundColor = "violet";

const paragrafoPorTag = document.querySelector("p");
// console.log(paragrafoPorTag);
// paragrafoPorTag.innerText = "Novo texto modificado por DOM";
// paragrafoPorTag.style.backgroundColor = "orange";
// paragrafoPorTag.style.color = "white";

// const paragrafos = document.querySelectorAll("p");
const paragrafos = document.querySelectorAll(".paragrafo");
// console.log(paragrafos);

for (let i = 0; i < paragrafos.length; i++) {
  const paragrafo = paragrafos[i];
  // console.log(paragrafo);
  // paragrafo.innerText = `Paragrafo de indice ${i} alterado pelo DOM!!!`;
  // paragrafo.style.backgroundColor = "tomato";
}

// Tipos de Seletores (POR ID)
const tituloPrincipal = document.querySelector("#titulo-principal");
// console.log(tituloPrincipal);
// tituloPrincipal.innerText = "Titulo Modificado pelo DOM";

// Tipos de Seletores (POR CLASSE)
const paragrafoPorClasse = document.querySelector(".secundario");
// console.log(paragrafoPorClasse);
// paragrafoPorClasse.style.backgroundColor = "yellowgreen";

// Seletores Específicos (por id)
const tituloPorId = document.getElementById("titulo-principal");
// console.log(tituloPorId);
tituloPorId.innerText = "Titulo capturado e modificado por getElementById";

// Seletor específico de classe
const paragrafosPorClassName = document.getElementsByClassName("paragrafo");
// console.log(paragrafosPorClassName);

for (let i = 0; i < paragrafosPorClassName.length; i++) {
  const paragrafo = paragrafosPorClassName[i];
  // console.log(paragrafo);
  paragrafo.innerText = `Paragrafo de indice ${i} alterado pelo DOM!!!`;
  paragrafo.style.backgroundColor = "tomato";
  paragrafo.style.border = "3px solid black";
}

const tituloH1 = document.getElementsByTagName("h1");
// console.log(tituloH1);
tituloH1[0].style.backgroundColor = "green";

// Exemplo prático
// base de dados
const filmes = [
  {
    titulo: "Outro Filme",
  },
  {
    titulo: "Matrix",
  },
];

/*
  1. Capturar os elementos que desejo modificar.
  2. Rodar um loop nos items de lista achados
*/

const filmesListItems = document.querySelectorAll(".filme");
// console.log(filmesListItems);

for (let i = 0; i < filmesListItems.length; i++) {
  const filme = filmesListItems[i];
  console.log(filme);
  filme.innerText = filmes[i].titulo;
}
