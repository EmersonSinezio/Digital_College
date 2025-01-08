const res = document.getElementById("res");
const al = document.getElementById("alert");
let val1 = document.getElementById("value1");
let val2 = document.getElementById("value2");
const btn = document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  const v1 = val1.value;
  const v2 = val2.value;
  if (!v1 || !v2) {
    alert("Está faltando algum campo");
  } else {
    res.innerHTML = `${Number(v1) + Number(v2)}`;
    al.className =
      "flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 w-96";
  }
});
