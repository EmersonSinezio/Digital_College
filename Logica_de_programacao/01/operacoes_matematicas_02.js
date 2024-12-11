class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
  calcularArea() {
    return this.altura * this.largura;
  }
}

let ret = new Retangulo(10, 10);

console.log(ret.calcularArea());
