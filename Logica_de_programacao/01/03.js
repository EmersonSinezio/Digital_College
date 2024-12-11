const not1 = 7;
const not2 = 8;
const not3 = 6;

const media = (not1 + not2 + not3) / 3;

console.log(media);

const altura = 5;
const largura = 10;

const maoDeObra = 35;

const servico_por_metro = (altura * largura) / 35;
const valor_total = altura * largura * 35;

console.log(
  `O servico fica por R$${servico_por_metro} por metro² e o valor total ficaria por R$${valor_total}`
);

/* Calcular uma diaria de um carro alugado, 
1. onde cada km é 5 
2. cada diaria é 250
*/
const dias = 24;
const kms = 636;

const valor_dias_rodados = dias * 250;
const valor_kms_rodados = kms * 5;

console.log(
  `Ele gastou no geral R$${
    valor_kms_rodados + valor_dias_rodados
  } durante ${dias} dias e rodando ${kms}KM`
);
