const originalBookList = [
  {
    title: "Aprendendo Javascript Básico",
    author: "John Doe",
    pages: 200,
  },
  {
    title: "HTML e CSS Desvendados",
    author: "Jane Smith",
    pages: 150,
  },
  {
    title: "Node.JS para Iniciantes",
    author: "Bob Johnson",
    pages: 250,
  },
];

console.log("Lista de Livros Original:");
console.log(originalBookList);
console.log("");

// 1. Método forEach
function callBackShowBooks(bookToShow, index) {
  console.log(`Livro de indice ${index}`);
  console.log(bookToShow);
}

function showBooks(books) {
  /*
  - Objetivo: Mostrar cada livro no console individualmente.
  - Passos Lógicos:
    1. Iterar sobre todos os livros para acessar individualmente cada livro;
    2. Mostrar no console cada livro;
  */
  // for (let index = 0; index < books.length; index++) {
  //   const bookToShow = books[index];
  //   console.log(`Livro de indice ${index}`);
  //   console.log(bookToShow);
  // }
  // Exemplo 1
  /*
    A maioria dos métodos de array passará os mesmos parâmetros
    para a função callback, nessa exata ordem. Sempre passará:
    1 Parametro -> O elemento da iteração no array.
    2 Parametro -> Indice do elemento atual na iteração.
    3 Parametro -> O Array original.
  */
  // books.forEach(callBackShowBooks);

  // Exemplo 2
  // books.forEach(function (bookToShow, index) {
  //   console.log(`Livro de indice ${index}`);
  //   console.log(bookToShow);
  // });

  // Exemplo 3
  books.forEach((bookToShow, index) => {
    console.log(`Livro de indice ${index}`);
    console.log(bookToShow);
  });
}

// showBooks(originalBookList);

// 2. Método map
function callBackIndexBooks(currentBook, index) {
  const newBook = {
    id: index + 1,
    title: currentBook.title,
    author: currentBook.author,
    pages: currentBook.pages,
  };

  return newBook;
}

function addIdentificationToBooks(books) {
  /*
  - Objetivo: Criar novo array de livros, alterando cada objeto
  interno para conter uma nova chave ('id'), com base no indice
  da iteração.
  - Passos Lógicos:
    1. Criar um array vazio para ser populado pelos 'novos' livros;
    2. Iterar sobre todos os livros para acessar individualmente 
    cada livro;
    3. Criar um novo objeto, adicionando um atributo 'id' com
    valor do indice + 1;
    4. Adicionar o novo livro ao array criado anteriormente.
    5. Retornar o novo array;
  */

  // const indexedBooks = [];

  // for (let index = 0; index < books.length; index++) {
  //   const currentBook = books[index];

  //   const newBook = {
  //     id: index + 1,
  //     title: currentBook.title,
  //     author: currentBook.author,
  //     pages: currentBook.pages,
  //   };

  //   indexedBooks.push(newBook);
  // }

  // return indexedBooks;

  // Exemplo 1
  // const indexedBooks = books.map(callBackIndexBooks);
  // return indexedBooks;

  // Exemplo 2
  // const indexedBooks = books.map(function (currentBook, index) {
  //   const newBook = {
  //     id: index + 1,
  //     title: currentBook.title,
  //     author: currentBook.author,
  //     pages: currentBook.pages,
  //   };

  //   return newBook;
  // });
  // return indexedBooks;

  // Exemplo 3
  const indexedBooks = books.map((currentBook, index) => {
    const newBook = {
      id: index + 1,
      title: currentBook.title,
      author: currentBook.author,
      pages: currentBook.pages,
    };

    return newBook;
  });

  return indexedBooks;
}

// const indexedBookList = addIdentificationToBooks(originalBookList);
// console.log("Lista de Livros com ID adicionado");
// console.log(indexedBookList);

// 3. Método filter
function filterBooksByPageNumber(books, pagesFilter) {
  /*
  - Objetivo: Criar novo array de livros, somente com os livros que
  contenham o numero de páginas >= ao filtro de páginas.

  - Passos Lógicos:
    1. Criar um array vazio para ser populado pelos livros filtrados;
    2. Iterar sobre todos os livros para acessar individualmente 
    cada livro;
    3. Verificar condicionalmente se as paginas do livro atual
    corresponde a minha condicional (paginas >= filtroDePaginas)
    4. Adicionar o novo livro ao array criado anteriormente, se
    preencher a condicional.
    5. Retornar o novo array;
  */

  // const filteredBooks = [];

  // for (let index = 0; index < books.length; index++) {
  //   const currentBook = books[index];

  //   if (currentBook.pages >= pagesFilter) {
  //     filteredBooks.push(currentBook);
  //   }
  // }

  // return filteredBooks;

  // Exemplo Direto 1 (Forma Extensa)
  // const filteredBooks = books.filter((currentBook) => {
  //   const isBookPageHigherOrEqualThanFilter = currentBook.pages >= pagesFilter;

  //   return isBookPageHigherOrEqualThanFilter;
  // });

  // Exemplo Direto 2 (Forma Reduzida 1)
  // const filteredBooks = books.filter((currentBook) => {
  //   return currentBook.pages >= pagesFilter;
  // });

  // return filteredBooks;

  // Exemplo Direto 3 (Forma Reduzida 2)
  const filteredBooks = books.filter(
    (currentBook) => currentBook.pages >= pagesFilter
  );

  return filteredBooks;
}

const filteredBooksList = filterBooksByPageNumber(originalBookList, 200);
console.log("Lista de Livros Filtrados");
console.log(filteredBooksList);
