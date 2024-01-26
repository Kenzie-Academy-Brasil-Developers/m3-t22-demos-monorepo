const originalBookList = [
  {
    title: "Aprendendo JavaScript Básico",
    author: "John Doe",
    pages: 200,
    condition: "novo",
  },
  {
    title: "HTML e CSS Desvendados",
    author: "Jane Smith",
    pages: 150,
    condition: "desgastado",
  },
  {
    title: "Node.js para Iniciantes",
    author: "Bob Johnson",
    pages: 250,
    condition: "conservado",
  },
  {
    title: "React.js na Prática",
    author: "Alice Green",
    pages: 180,
    condition: "novo",
  },
  {
    title: "PHP e MySQL para Web",
    author: "Charles Brown",
    pages: 220,
    condition: "desgastado",
  },
  {
    title: "Python para Data Science",
    author: "David Lee",
    pages: 300,
    condition: "novo",
  },
  {
    title: "Ruby on Rails em 24 Horas",
    author: "Emma White",
    pages: 240,
    condition: "conservado",
  },
  {
    title: "Java para Desenvolvedores Android",
    author: "Frank Black",
    pages: 280,
    condition: "novo",
  },
  {
    title: "C# e .NET para Jogos",
    author: "Grace Kim",
    pages: 260,
    condition: "desgastado",
  },
  {
    title: "Laravel: O Framework PHP Moderno",
    author: "Henry Jones",
    pages: 210,
    condition: "novo",
  },
  {
    title: "Django: O Framework Python Completo",
    author: "Iris Wang",
    pages: 270,
    condition: "conservado",
  },
  {
    title: "Angular: O Framework JavaScript Poderoso",
    author: "James Smith",
    pages: 230,
    condition: "novo",
  },
  {
    title: "Swift: A Linguagem da Apple",
    author: "Kelly Clark",
    pages: 190,
    condition: "desgastado",
  },
  {
    title: "WordPress: O CMS Mais Popular do Mundo",
    author: "Laura Miller",
    pages: 160,
    condition: "novo",
  },
  {
    title: "MongoDB: O Banco de Dados NoSQL",
    author: "Mark Wilson",
    pages: 200,
    condition: "conservado",
  },
  {
    title: "Bootstrap: O Framework CSS Responsivo",
    author: "Nancy Davis",
    pages: 140,
    condition: "novo",
  },
  {
    title: "Vue.js: O Framework JavaScript Simples",
    author: "Oscar Lopez",
    pages: 170,
    condition: "desgastado",
  },
  {
    title: "Flask: O Microframework Python",
    author: "Rachel Adams",
    pages: 150,
    condition: "novo",
  },
  {
    title: "Sass: O Pré-processador CSS",
    author: "Scott Baker",
    pages: 130,
    condition: "conservado",
  },
  {
    title: "TypeScript: O JavaScript Tipado",
    author: "Zoe Taylor",
    pages: 190,
    condition: "novo",
  },
];

function createBookCard(book) {
  const liBook = document.createElement("li");

  const divBookInfo = document.createElement("div");
  const h3BookTitle = document.createElement("h3");
  const h4BookAuthor = document.createElement("h4");
  const spanBookPages = document.createElement("span");

  const divBookCondition = document.createElement("div");
  const spanConditionMarker = document.createElement("span");
  const spanConditionDescription = document.createElement("span");

  const btnDeleteBook = document.createElement("button");

  // HIERARQUIA
  liBook.append(divBookInfo, btnDeleteBook);
  divBookInfo.append(
    h3BookTitle,
    h4BookAuthor,
    spanBookPages,
    divBookCondition
  );
  divBookCondition.append(spanConditionMarker, spanConditionDescription);

  // CLASSES
  liBook.classList.add("book");
  divBookInfo.classList.add("book__info");
  h3BookTitle.classList.add("book__title");
  h4BookAuthor.classList.add("book__author");
  spanBookPages.classList.add("book__pages");

  divBookCondition.classList.add("book__condition");
  spanConditionMarker.classList.add("condition__marker");
  spanConditionDescription.classList.add("condition__description");

  if (book.condition === "novo") {
    spanConditionMarker.classList.add("condition__marker--new");
  } else if (book.condition === "desgastado") {
    spanConditionMarker.classList.add("condition__marker--edgeworn");
  } else if (book.condition === "conservado") {
    spanConditionMarker.classList.add("condition__marker--fair");
  }

  btnDeleteBook.classList.add("book__delete-btn");

  // CONTEUDO INTERNO
  h3BookTitle.innerText = book.title;
  h4BookAuthor.innerText = book.author;
  spanBookPages.innerText = `Páginas: ${book.pages}`;
  spanConditionDescription.innerText = book.condition;
  btnDeleteBook.innerText = "Deletar";

  // console.log(liBook);

  btnDeleteBook.addEventListener("click", (event) => {
    console.log(event.target);
    const foundIndex = originalBookList.indexOf(book);

    originalBookList.splice(foundIndex, 1);
    renderBooks(originalBookList);
  });

  return liBook;
}

function renderBooks(bookList) {
  const ulBooks = document.querySelector(".books");
  ulBooks.innerHTML = "";

  bookList.forEach((book) => {
    const bookCard = createBookCard(book);
    ulBooks.appendChild(bookCard);
  });
}

renderBooks(originalBookList);

function addNewBook(title, author, pages, condition) {
  const bookObj = {
    title: title,
    author: author,
    pages: pages,
    condition: condition,
  };

  originalBookList.push(bookObj);
  // console.log(originalBookList);
  renderBooks(originalBookList);
}

function handleFormEvents() {
  const formAddBook = document.querySelector(".add-book__form");
  // console.log(formAddBook);

  const inputBookTitle = document.querySelector("#book-title__input");
  const inputBookAuthor = document.querySelector("#book-author__input");
  const inputBookPages = document.querySelector("#book-pages__input");
  const inputBookCondition = document.querySelector("#book-condition__select");

  formAddBook.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("evento submit do form disparado!");

    console.log(inputBookTitle.value);
    console.log(inputBookAuthor.value);
    console.log(inputBookPages.value);
    console.log(inputBookCondition.value);

    const bookTitle = inputBookTitle.value;
    const bookAuthor = inputBookAuthor.value;
    const bookPages = inputBookPages.value;
    const bookCondition = inputBookCondition.value;

    addNewBook(bookTitle, bookAuthor, bookPages, bookCondition);
  });
}

handleFormEvents();
