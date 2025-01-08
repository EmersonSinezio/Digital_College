const nome = document.getElementById("nome");
const res = document.getElementById("res");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");

const btn = document.getElementById("calcular");
btn.addEventListener("click", () => {
  let media =
    (Number(nota1.value) + Number(nota2.value) + Number(nota3.value)) / 3;
  // Verifica se falta alguma nota
  if (!nota1.value || !nota2.value || !nota3.value) {
    alert("Campos vazios");
  } else {
    // Verifica se o valor é maior que 10 (o permitido)
    if (nota1.value > 10 || nota2.value > 10 || nota3.value > 10) {
      alert("Uma nota válida de 1 a 10");
    } else {
      // se não possuir um nome válido
      !nome.value
        ? alert("Digite um nome válido")
        : (res.innerHTML = `Olá ${nome.value} a média das notas é ${Math.ceil(
            media
          )}`);
    }
  }
});
