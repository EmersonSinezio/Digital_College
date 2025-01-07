const email = document.getElementById("email");
const senha = document.getElementById("password");
const alert = document.getElementById("alert");
let em = "";
let ps = "";

email.addEventListener("change", (e) => {
  const ev = e.target.value;
  em = ev;
});
senha.addEventListener("change", (e) => {
  const ev = e.target.value;
  ps = ev;
});

const btn = document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (em == "admin" && ps == "admin") {
    alert.style = "display:flex;";
  }
});
