const nome = document.getElementById("nome");
const res = document.getElementById("res");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const btn = document.getElementById("calcular");
btn.addEventListener("click", () => {
  let media =
    (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
  if (nota1.value > 10 || nota2.value > 10 || nota3.value > 10) {
    res.innerHTML = "Erro: coloque um número de 1 a 10";
  } else {
    res.innerHTML = `Olá ${nome.value} a média das notas é ${Math.ceil(media)}`;
  }
});
