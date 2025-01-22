const res = document.getElementById("res");
const img = document.getElementById("img");
const url = "https://api.chucknorris.io/jokes/random";
const headers = {
  Authorization: "Bearer seu_token_aqui",
  "Content-Type": "application/json",
};

fetch(url, { headers })
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Erro: ${response.status}`);
    }
    return response.json();
  })
  .then((dados) => {
    console.log(dados);
    res.innerHTML = dados.value;
    img.innerHTML = `<img src="${dados.icon_url}"/>`;
  })
  .catch((error) => {
    console.error(error);
  });
