// Para alterar uma propriedade de um elemento
// HTML pelo DOM

// 1 - Capturar o elemento em questão

const titulo = document.body.children[0];
titulo.innerText = "Titulo pelo DOM";
// console.log(titulo);

// Seletores DOM

// Seletor por TAG
const body = document.querySelector("body");
// console.log(body);
// body.style = "background-color: tomato";
body.style.backgroundColor = "tomato";

const paragrafoPorTag = document.querySelector("p");
// console.log(paragrafoPorTag);
// paragrafoPorTag.innerText = "Novo texto do parágrafo";
// paragrafoPorTag.style.backgroundColor = "orange";
// paragrafoPorTag.style.color = "green";

// Seletor por CLASSE
const paragrafoPorClasse = document.querySelector(".secundario");
// console.log(paragrafoPorClasse);
// paragrafoPorClasse.innerText = "Novo texto paragrafo secundario";
// paragrafoPorClasse.style.backgroundColor = "yellowgreen";

// Seletor por ID
// const tituloPorId = document.querySelector("#titulo-nivel-1");
// console.log(tituloPorId);
// tituloPorId.innerText = "Novo Titulo, agora capturado e alterado por id";

// Seletores específicos

// ID
const tituloPorId = document.getElementById("titulo-nivel-1");
// console.log(tituloPorId);
tituloPorId.innerText = "Novo Titulo, agora capturado e alterado por id";

// Classe
const paragrafos = document.getElementsByClassName("paragrafo");
// console.log(paragrafos);

for (let i = 0; i < paragrafos.length; i++) {
  const paragrafo = paragrafos[i];
  // console.log(paragrafo);
  paragrafo.innerText = `Paragrafo de indice ${i} alterado pelo DOM!!!`;

  // Se o indice for par
  if (i % 2 == 0) {
    paragrafo.style.backgroundColor = "orange";
    paragrafo.style.color = "green";
  } else {
    paragrafo.style.backgroundColor = "black";
    paragrafo.style.color = "white";
  }
}

// Exemplo prático (base de dados simples)
const filmes = [
  {
    titulo: "Matrix", // indice 0
  },
  {
    titulo: "Interstellar", // indice 1
  },
  {
    titulo: "Django Livre", // indice 2
  },
];

/*
  1 - Criar a assinatura da função
  2 - Capturar os elementos que desejo alterar no HTML
  3 - Acessar individualmente todos os elementos capturados com loop
*/

function atualizarFilmes(listaDeFilmes) {
  // const filmesListItems = document.getElementsByClassName("filme");
  const filmesListItems = document.querySelectorAll(".filme");
  // console.log(filmesListItems);

  for (let i = 0; i < filmesListItems.length; i++) {
    const filme = filmesListItems[i];
    console.log(filme);
    filme.innerText = listaDeFilmes[i].titulo;
  }
}

// atualizarFilmes(filmes);

// Arrow Function
const atualizarFilmesArrowFunction = (listaDeFilmes) => {
  // const filmesListItems = document.getElementsByClassName("filme");
  const filmesListItems = document.querySelectorAll(".filme");
  // console.log(filmesListItems);

  for (let i = 0; i < filmesListItems.length; i++) {
    const filme = filmesListItems[i];
    console.log(filme);
    filme.innerText = listaDeFilmes[i].titulo;
  }
};

atualizarFilmesArrowFunction(filmes);
