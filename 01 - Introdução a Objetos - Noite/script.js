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

for (let i = 0; i < arrayPessoa.length; i++) {
  const currentElement = arrayPessoa[i];
  // console.log(currentElement);
  // console.log(arrayPessoa[i]);
}

// Objetos (os items são pares de chave e valor)
const pessoaExemplo1 = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
  idade: 30,
  dataNascimento: "03/03/1993",
  admin: true,
  cidade: "Curitiba",
};

// console.log(pessoaExemplo1.interesses);
// console.log(pessoaExemplo1.dataNascimento);
// console.log(pessoaExemplo1["dataNascimento"]);
// console.log(pessoaExemplo1.cidade);

// console.log(
//   `Seja bem vindo ${pessoaExemplo1.nome} ${pessoaExemplo1.sobrenome}`
// );

// console.log(pessoaExemplo1);
pessoaExemplo1.profissao = "Desenvolvedor";
pessoaExemplo1.email = "chrystian@gmail.com";
// console.log(pessoaExemplo1);

// Exemplo 2
const pessoaExemplo2 = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
  dataNascimento: "03/03/1993",
  admin: true,
  interesses: ["leitura", "musica"],
  endereco: {
    rua: "Rua das Salgueiras",
    cidade: "Curitiba",
    estado: "PR",
  },
  mostrarInteresses: function () {
    for (let i = 0; i < pessoaExemplo2.interesses.length; i++) {
      console.log(pessoaExemplo2.interesses[i]);
    }
  },
  alternarAdmin: function () {
    pessoaExemplo2.admin = !pessoaExemplo2.admin;
  },
};

// Dança
// pessoaExemplo2.interesses.push("dança");
// console.log(pessoaExemplo2.interesses);
console.log(pessoaExemplo2.endereco.rua);

// function mostrarInteresses(pessoaObj) {
//   for (let i = 0; i < pessoaObj.interesses.length; i++) {
//     const currentValue = pessoaObj.interesses[i];
//     console.log(currentValue);
//     // console.log(pessoaObj.interesses[i]);
//   }
// }

// mostrarInteresses(pessoaExemplo2);

// pessoaExemplo2.mostrarInteresses();
pessoaExemplo2.alternarAdmin();
// console.log(pessoaExemplo2.admin);
pessoaExemplo2.alternarAdmin();
// console.log(pessoaExemplo2.admin);

// Exemplo 3
const frutas = ["Maçã", "Laranja", "Melancia", "Cacau"];

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }

// For of
// for (let fruta of frutas) {
//   console.log(fruta);
// }

// For in
// for (let index in frutas) {
//   console.log(index);
// }

const pessoaExemplo3 = {
  nome: "Chrystian",
  sobrenome: "Rodolfo",
  email: "chrystian@kenzie.com.br",
};

// Loops em objetos
for (let chave in pessoaExemplo3) {
  // console.log(typeof chave);
  // console.log(chave);
  // console.log(pessoaExemplo3[chave]);
  // // 1 iteração
  // console.log(pessoaExemplo3['nome']);
  // // 2 iteração
  // console.log(pessoaExemplo3['sobrenome']);
  // // 3 iteração
  // console.log(pessoaExemplo3['email']);
}
