const usersArray = [
  {
    nome: "Alex",
    cpf: "111.222.333-44",
  },
  {
    nome: "Chrystian",
    cpf: "000.000.000-33",
  },
  {
    nome: "Fernando",
    cpf: "000.000.000-44",
  },
  {
    nome: "Cauan",
    cpf: "000.000.000-11",
  },
];

function searchArray(objToBeSearched) {
  const foundIndex = usersArray.indexOf(objToBeSearched);

  // console.log(foundIndex);

  if (foundIndex === -1) {
    return "Objeto não encontrado no array!!";
  }

  return "Objeto encontrado no indice " + foundIndex;
}

let message = searchArray(usersArray[0]);
// console.log(message);

message = searchArray(usersArray[1]);
// console.log(message);

message = searchArray({ nome: "Fernando", cpf: "222.222.222-22" });
// console.log(message);

message = searchArray({ nome: "Alex", cpf: "111.222.333-44" });
// console.log(message);

// SPLICE

const objIndex = usersArray.indexOf(usersArray[3]);
usersArray.splice(objIndex, 1);
console.log(usersArray);
