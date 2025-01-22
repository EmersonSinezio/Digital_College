const res = document.getElementById("res");
const modal = document.getElementById("modal");
const infos = ["bairro", "cep", "estado", "localidade", "logradouro"];
let cep = document.getElementById("cep").value;

function showModal() {
  modal.classList.remove("hidden");
}

async function buscarCep() {
  try {
    const dadosDoCep = await fetch(
      `https://viacep.com.br/ws/${cep}/json/`
    ).then((res) => {
      return res.json();
    });
    console.log(dadosDoCep);

    infos.map((e) => {
      //   console.log(dadosDoCep[e]);
      const el = document.createElement("p");
      el.innerText = e.toUpperCase() + " " + dadosDoCep[e];
      el.className = "text-xl font-bold";
      res.appendChild(el);
    });

    // const cep = document.createElement("p");
    // cep.innerText = dadosDoCep.cep;
    // res.appendChild(cep);
  } catch (e) {
    console.error("erro: ", e);
  }
}

buscarCep();
