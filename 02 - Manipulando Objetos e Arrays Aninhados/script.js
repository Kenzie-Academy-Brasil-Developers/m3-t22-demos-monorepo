// Arrays Aninhados
const notasAlunos = [
  // [filosofia, portugues, matematica, geografia]
  // 0 , 1, 2, 3
  [56, 46, 85, 100], // aluno 1 - indice 0
  [70, 40, 60, 95], // aluno 2 - indice 1
  [85, 51, 75, 98], // aluno 3 - indice 2
];

// console.log(notasAlunos[1][2]);

function mostrarNotasAlunos(listaNotasAlunos) {
  for (let i = 0; i < listaNotasAlunos.length; i++) {
    // console.log(listaNotasAlunos[i]);
    const notasAtuais = listaNotasAlunos[i];

    for (let j = 0; j < notasAtuais.length; j++) {
      console.log(`linha: ${i} / coluna ${j}`);
    }
  }
}

// mostrarNotasAlunos(notasAlunos);

/*
Crie uma função chamada piramideNumerica(tamPiramide) que receba como 
argumento um número inteiro e imprima uma pirâmide numérica de tamanho 
tamPiramide na tela.

Exemplo piramideNumerica(5):
1 
1  2 
1  2  3 
1  2  3  4 
1  2  3  4  5

Passos lógicos:
[x] - Criar uma função `piramideNumerica` que recebe um inteiro como param
[ ] - Criar um laço de repetição para criar linha
[ ] - Fazer a contagem dentro da linha
*/

function piramideNumerica(tamPiramide) {
  for (let i = 1; i <= tamPiramide; i++) {
    let linha = "";

    for (let j = 1; j <= i; j++) {
      linha += j + " ";
    }

    console.log(linha);
  }
}

// piramideNumerica(5);

// Array de Objetos (base de dados)
const filmes = [
  {
    titulo: "Matrix",
    generos: ["Ficção Científica"],
    lancamento: true,
  },
  {
    titulo: "O Poderoso Chefão",
    generos: ["Crime", "Drama"],
    lancamento: false,
  },
  {
    titulo: "A Origem",
    generos: ["Ação", "Ficção Científica"],
    lancamento: true,
  },
  {
    titulo: "Pulp Fiction",
    generos: ["Crime", "Drama"],
    lancamento: false,
  },
  {
    titulo: "Interstellar",
    generos: ["Aventura", "Drama"],
    lancamento: true,
  },
];

function mostrarTituloFilmes(listaFilmes) {
  for (let i = 0; i < listaFilmes.length; i++) {
    const filmeAtual = listaFilmes[i];
    console.log(filmeAtual.titulo);
  }
}

// mostrarTituloFilmes(filmes);

function mostrarGenerosFilmes(listaFilmes) {
  for (let i = 0; i < listaFilmes.length; i++) {
    const filmeAtual = listaFilmes[i];
    // console.log(filmeAtual.generos);
    for (let j = 0; j < filmeAtual.generos.length; j++) {
      console.log(filmeAtual.generos[j]);
    }
  }
}

// mostrarGenerosFilmes(filmes);

function retornarFilmesEmLancamento(listaFilmes) {
  const filmesEmLancamento = [];

  for (let i = 0; i < listaFilmes.length; i++) {
    const filmeAtual = listaFilmes[i];

    if (filmeAtual.lancamento) {
      filmesEmLancamento.push(filmeAtual);
    }
  }
  return filmesEmLancamento;
}

// const lancamentos = retornarFilmesEmLancamento(filmes);
// console.log(lancamentos);

/*
  Objetivo: Retornar todos os filmes do genero passado como parametro.

  Passos Lógicos:
  - Criar a assinatura da função.
  - Criar um array vazio para ser populado com os filmes do genero pesquisado.
  - Percorrer o array de filmes.
  - Acessar o array de generos de cada filme.
  - Verificar se o genero está no array de generos do filme
    - iterando sobre os generos do filme
    - verificar se o genero pesquisado está contido nos generos do filme
    - caso achado, adicionar o filme ao array vazio criado inicialmente
  - retornar a lista de filmes encontrados.
*/
function retornaFilmesDoGenero(listaFilmes, genero) {
  const filmesDoGenero = [];

  for (let i = 0; i < listaFilmes.length; i++) {
    const filmeAtual = listaFilmes[i];
    const generosFilmeAtual = filmeAtual.generos;
    // console.log(generosFilmeAtual);

    for (let j = 0; j < generosFilmeAtual.length; j++) {
      const generoAtual = generosFilmeAtual[j];
      // console.log(generoAtual);

      // case sensitive
      if (generoAtual.toLowerCase() == genero.toLowerCase()) {
        filmesDoGenero.push(filmeAtual);
      }
    }
  }

  return filmesDoGenero;
}

// console.log(retornaFilmesDoGenero(filmes, "Drama"));
const filmesDoGeneroDrama = retornaFilmesDoGenero(filmes, "Drama");
// console.log(filmesDoGeneroDrama);

const filmesDoGeneroCrime = retornaFilmesDoGenero(filmes, "CRIME");
console.log(filmesDoGeneroCrime);
