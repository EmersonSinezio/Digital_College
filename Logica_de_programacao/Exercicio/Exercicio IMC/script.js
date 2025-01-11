const form = document.getElementById("form");
const valueText = document.getElementById("value");
const indicator = document.querySelector(".indicator");
const alt = document.getElementById("altura");
const pes = document.getElementById("peso");
const Classification = document.getElementById("classification");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const altura = parseFloat(alt.value) / 100; // Converte de cm para metros
  const peso = parseFloat(pes.value);

  if (!altura || !peso || altura <= 0 || peso <= 0) {
    alert("Por favor, insira valores válidos.");
    return;
  }

  const imc = peso / (altura * altura);

  valueText.textContent = imc.toFixed(2);

  let rotation;

  if (imc < 18.5) {
    classification.textContent = "Subpeso";
    rotation = 270;
  } else if (imc >= 18.5 && imc <= 24.9) {
    classification.textContent = "Normal";
    rotation = 270 + (imc - 18.5) * (90 / (30 - 18.5));
  } else if (imc >= 25 && imc <= 29.9) {
    classification.textContent = "Sobrepeso";
    rotation = 0 + (imc - 25) * (90 / (30 - 25));
  } else if (imc > 30) {
    classification.textContent = "Obesidade";
    rotation = 90;
  } else {
    alert("Por favor, insira valores válidos.");
  }

  indicator.style.transform = `rotate(${rotation}deg)`;
});
