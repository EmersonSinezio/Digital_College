// funcao nome parametro contagem

function contadorCaracteres(nome) {
  nome.length >= 10
    ? console.log(
        `Olá ${nome} é um nome muito grande! tem ${nome.length} caracteres`
      )
    : console.log(
        `Olá ${nome} é um nome muito bonito! e tem ${nome.length} caracteres`
      );
  // console.log(nome.length);
}

contadorCaracteres("Emerson");
