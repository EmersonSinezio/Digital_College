// Contador de par ou impar

function contador(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(`${i} é par`);
    } else {
      console.log(`${i} é impar`);
    }
  }
}

// Começa a contar do 1 ao numero escolhido abaixo se é impar ou par
// contador(50);

function contadorIdade(idade) {
  idade > 18
    ? console.log("É maior de idade")
    : console.log("É menor de idade");
}

contadorIdade(20);
