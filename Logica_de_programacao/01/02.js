const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu nome: ", (nome) => {
  rl.question("Digite sua idade: ", (idade) => {
    rl.question("gosta de cafe?: ", (cafe) => {
      console.log(
        `Olá ${nome}, sua idade é ${idade} você é ${
          idade < 18 ? "menor de idade" : "maior de idade"
        } e gosta de café ${
          cafe == "sim" || "s" || "S" || "Sim" || "SIM" ? true : false
        }`
      );
      rl.close();
    });
  });
});
