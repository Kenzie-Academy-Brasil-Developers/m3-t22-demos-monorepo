const arrayPessoa = [
  "Chrystian", // 0
  "Rodolfo", // 1
  "chrystian@kenzie.com.br", // 2
  30, // 3
  "03/03/1993", // 4
  true, // 5
  "Curitiba", // 6
];

// console.log(arrayPessoa[0]);

// for (let i = 0; i < arrayPessoa.length; i++) {
//   // const currentItem = arrayPessoa[i];
//   // console.log(currentItem);

//   console.log(arrayPessoa[i]);
// }

const pessoa = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
  dataNascimento: "03/03/1993",
  admin: true,
  cidade: "Curitiba",
};

// console.log(pessoa.nome);
// console.log(pessoa["nome"]);
// console.log(pessoa.sobrenome);
// console.log(pessoa["sobrenome"]);

// console.log(`Seja bem vindo ${pessoa.nome} ${pessoa.sobrenome}`);

pessoa.profissao = "Desenvolvedor";
pessoa.email = "chrystian@mail.com.br";
pessoa.admin = false;
// delete pessoa.admin;

// console.log(pessoa);

// Objeto composto
const pessoaExemplo2 = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
  dataNascimento: "03/03/1993",
  admin: true,
  cidade: "Curitiba",
  interesses: ["leitura", "musica"],
  mostrarInteresses: function () {
    for (let i = 0; i < pessoaExemplo2.interesses.length; i++) {
      console.log(pessoaExemplo2.interesses[i]);
    }
  },
  alternarAdmin: function () {
    pessoaExemplo2.admin = !pessoaExemplo2.admin;
  },
};

// console.log(pessoaExemplo2.interesses);
// console.log(pessoaExemplo2.interesses[0]);

// const interessesPessoa = pessoaExemplo2.interesses;
// console.log(interessesPessoa[0]);

pessoaExemplo2.interesses.push("dança");
// console.log(pessoaExemplo2.interesses);

// function mostrarInteresses(pessoaObj) {
//   for (let i = 0; i < pessoaObj.interesses.length; i++) {
//     console.log(pessoaObj.interesses[i]);
//   }
// }

// mostrarInteresses(pessoaExemplo2);

// const objExemplo = { nome: "Alex", sobrenome: "Sakaki" };
// mostrarInteresses(objExemplo);

// pessoaExemplo2.mostrarInteresses();
pessoaExemplo2.alternarAdmin();
// console.log(pessoaExemplo2);
// pessoaExemplo2.alternarAdmin();
// console.log(pessoaExemplo2);

//  Loopings com objetos
const frutas = ["Maçã", "Banana", "Melancia"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// for (let fruta of frutas) {
//   console.log(fruta);
// }

// for (let index in frutas) {
//   console.log(index);
// }

const pessoaExemplo3 = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
  admin: true,
};

for (let chave in pessoaExemplo3) {
  // console.log(typeof chave);
  // console.log(chave);

  // console.log("\n");
  console.log(pessoaExemplo3[chave]);

  // // 1 iteração
  // console.log(pessoaExemplo3['nome']);
  // // 2 iteração
  // console.log(pessoaExemplo3['sobrenome']);
  // // 3 iteração
  // console.log(pessoaExemplo3['email']);
  // // 4 iteração
  // console.log(pessoaExemplo3['admin']);
}

// for (let dado of pessoaExemplo3) {
//   console.log(dado);
// }
