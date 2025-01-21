const usuarios = [
  { nome: "Lucas", idade: 19, isPremium: false, salario: 1000 },
  { nome: "Joao", idade: 16, isPremium: true, salario: 2000 },
  { nome: "Maria", idade: 20, isPremium: true, salario: 3000 },
  { nome: "Joana", idade: 27, isPremium: true, salario: 4000 },
  { nome: "Lucia", idade: 17, isPremium: false, salario: 5000 },
];

// Filter
console.log(
  usuarios.filter((e) => {
    if (e.isPremium) {
      if (e.idade >= 18) return e;
    }
  })
);

// Find

console.log(
  usuarios.find((e) => {
    if (e.nome === "Joana") {
      return e;
    }
  })
);

// FindIndex
usuarios.findIndex((e) => {
  e.nome === "Joana";
});

// Some se um atender os requisitos ele retorna true
console.log(
  usuarios.some((e) => {
    e.isPremium === false;
  })
);

// Every todos tem que atender os requisitos
console.log(
  usuarios.every((e) => {
    e.isPremium === true;
  })
);

// Reduce
console.log(
  usuarios.reduce((total, e) => {
    return total + e.salario;
  }, 0)
);

// // Map
// usuarios.map((e) => {
//   console.log(e.nome);
// });

console.log(
  "----------------------------Exercicios---------------------------------------"
);

// 1- Filtrar os usuarios que são maior que 3000 de salario

console.log(
  usuarios.filter((e) => {
    if (e.salario > 3000) {
      return e;
    }
  })
);

// 2 - Verificar se um usuário possui > 5000 de salario

console.log(
  usuarios.filter((e) => {
    if (e.salario > 5000) {
      return e;
    }
  })
);

// 3 - Verificar se todos os usuarios são premiums
const todosPremium = usuarios.every((e) => {
  e.isPremium === true;
});
console.log(todosPremium);

// 4 - Encontrar usuario que se chama maria

console.log(
  usuarios.find((e) => {
    if (e.nome === "Maria") {
      return e;
    }
  })
);
