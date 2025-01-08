let btn = document.getElementById("calcular").addEventListener("click", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome");
  let salario = document.getElementById("salario");
  let vendas = document.getElementById("vendas");
  let resultado = document.getElementById("resultado");
  let comissao = Number(vendas.value) * 0.15;
  result = Number(salario.value) + Number(comissao);
  salario_formatado = result.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  resultado.innerHTML = `O salário de ${nome.value} é: ${salario_formatado}`;
  const form = document.getElementById("my-form").reset();
});
