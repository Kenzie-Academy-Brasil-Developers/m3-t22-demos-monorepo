const originalBookList = [
  {
    title: "Aprendendo JavaScript Básico.",
    author: "John Doe",
    pages: 200,
  },
  {
    title: "HTML e CSS Desvendados.",
    author: "Jane Smith",
    pages: 150,
  },
  {
    title: "Node.JS para Iniciantes.",
    author: "Bob Johnson",
    pages: 250,
  },
];

console.log("Lista de Livros Original:");
console.log(originalBookList);
console.log("");

// 1. Método forEach

function callBackShowBooks(bookToShow, index) {
  console.log(`Livro de índice ${index}`);
  console.log(bookToShow);
}

function showBooks(books) {
  /**
   * Objetivo: Mostrar cada livro no console individualmente.
   * Passos Lógicos:
   *  1. Iterar sobre todos os livros para acessar
   *    individualmente cada livro.
   *  2. Mostrar no console cada livro.
   */
  // for(let index = 0; index < books.length; index++) {
  //   const bookToShow = books[index];
  //   console.log(`Livro de índice ${index}`);
  //   console.log(bookToShow);
  // }
  /** Exemplo 1: */
  /**
   * A maioria dos métodos de array passará os mesmos
   *    parâmetros para a função callback, esse exata
   *    ordem. Sempre passará:
   * 1º parâmetro -> O elemento da iteração no array.
   * 2º parâmetro -> Índice do elemento atual na iteração.
   * 3º parâtro -> O array original.
   */
  // books.forEach(callBackShowBooks)

  /** Exemplo 2: */
  // books.forEach(function (bookToShow, index) {
  //   console.log(`Livro de índice ${index}`);
  //   console.log(bookToShow);
  // });

  /** Exemplo 3: */
  books.forEach((bookToShow, index) => {
    console.log(`Livro de índice ${index}`);
    console.log(bookToShow);
  });
}

// showBooks(originalBookList);

// Método map:
function callbackIndexBooks(currentBook, index) {
  const newBook = {
    id: index + 1,
    title: currentBook.title,
    author: currentBook.author,
    pages: currentBook.pages,
  };

  return newBook;
}

function addIdentificationToBooks(books) {
  /**
   * Objetivo: Criar um novo array de livros, alterando cada
   *    objeto interno para conter uma nova chave ('id'), com
   *    base no índice dessa iteração.
   * Passos Lógicos:
   *  1. Criar um array vazio para ser populado pelo
   *    "novos" livros.
   *  2. Iterar sobre todos os livros para acessar individualmente
   *    cada livro.
   *  3. Criar um novo objeto, adicioando um atributo 'id' com o
   *    valor do índice + 1.
   *  4. Adicionar o novo livro ao array criado anteriormente.
   *  5. Retornar o novo array.
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
  /** Exemplo 1: Callback */
  // const indexedBooks = books.map(callbackIndexBooks)
  // return indexedBooks
  /** Exemplo 2: Função anônima: */
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
  /** Exemplo 3: Arrow Function */
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
// console.log("Lista de Livros com ID Adicionado:");
// console.log(indexedBookList);

function filterBooksByPageNumber(books, pagesFilter) {
  /**
   * Objetivo: Criar um novo array de livros, somente com os
   *    livros que contém o número de páginas >= (maior ou igual)
   *    ao filtro de páginas (pagesFilter).
   * Passos Lógicos:
   *  1. Criar um array vazio para ser populado pelos
   *    livros filtrados.
   *  2. Iterar sobre todos os livros para acessar individualmente
   *    cada livro.
   *  3. Verificar condicionalmente se as páginas do livro atual
   *    corresponde a minha condicional (páginas >= filtroDePaginas).
   *  4. Adicionar o livro ao array criado anteriormente, se o
   *    livro preencer a condicional.
   *  5. Retornar o novo array.
   */
  // const filteredBooks = [];
  // for (let index = 0; index < books.length; index++) {
  //   const currentBook = books[index];
  //   if (currentBook.pages >= pagesFilter) {
  //     filteredBooks.push(currentBook);
  //   }
  // }
  // return filteredBooks;
  /** Exemplo direto 1 (forma extensa): */
  // const filteredBooks = books.filter((currentBook) => {
  //   const isBookPageHigherOrEqualThenFilter = currentBook.pages >= pagesFilter;
  //   return isBookPageHigherOrEqualThenFilter;
  // });

  // return filteredBooks;
  /** Exemplo direto 2 (forma reduzida 1): */
  // const filteredBooks = books.filter((currentBook) => {
  //   return currentBook.pages >= pagesFilter;
  // });

  // return filteredBooks;
  /** Exemplo direto 3 (forma reduzida 2): */
  const filteredBooks = books.filter(
    (currentBook) => currentBook.pages >= pagesFilter
  );

  return filteredBooks;
}

const filteredBooks = filterBooksByPageNumber(originalBookList, 130);
console.log("Lista de Livros Filtrados:");
console.log(filteredBooks);
