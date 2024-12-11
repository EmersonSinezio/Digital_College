const nome = "Emerson";
const idade = 16;

if (idade > 18) {
  console.log(`olá ${nome} voce e maior de idade`);
} else {
  console.log(`olá ${nome} voce e menor de idade`);
}

/*
    Funcao para calcular a diaria de um carro
    valor por km = 0.50
    valor por dia = 150
    so considerar a quantidade de kms se os dias forem maior que 10
*/

function diaria(dias, kms) {
  const total_dias = dias * 150;
  const total_kms = kms * 0.5;
  if (dias > 10) {
    console.log(
      `A quantidade de dias foram ${dias} entao o valor fica ${
        total_kms + total_dias
      }`
    );
  } else {
    console.log(
      `A quantidade de dias foram ${dias} entao o valor fica ${total_dias}`
    );
  }
}

diaria(8, 350);

/*
    Calcular o servico de um pintor
    o valor por metro² será de 40
    se a quantidade de metros quadrados forem maior que 6
        aplicar um descondto de 10%
*/
function valor_pintor(val1, val2) {
  const m2 = val1 * val2;
  const mao_obra = m2 * 40;
  if (m2 > 6) {
    let desconto = mao_obra - mao_obra * 0.1;
    console.log(
      `O desconto foi aplicado o valor do servico ficou por R$${desconto}, sem o desconto ficaria por R$${mao_obra}`
    );
  } else {
    console.log(`O servico fica por R$${mao_obra}`);
  }
}

valor_pintor(2, 2);
valor_pintor(5, 5);
