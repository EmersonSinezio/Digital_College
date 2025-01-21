import { useRef, useState } from "react";

export const Calculator = () => {
  let tamanhoRef = useRef<HTMLInputElement | null>(null);
  let pesoRef = useRef<HTMLInputElement | null>(null);
  let [imcRes, setImcRes] = useState(0);
  let imc = 0;

  function mostrar() {
    let peso = pesoRef.current?.value ? parseFloat(pesoRef.current.value) : 0;
    let tamanho = tamanhoRef.current?.value
      ? parseFloat(tamanhoRef.current.value) / 100
      : 0;
    let calculo = peso / (tamanho * tamanho);
    imc = calculo;
    setImcRes((imcRes = imcRes = imc));
  }

  return (
    <div>
      <div className="border border-black sub_container">
        <h1 className="text-4xl text-center my-10">
          Resultado {imcRes.toFixed(2)}
        </h1>
        <form action="" className="flex flex-col">
          <label className="text-center my-4">Digite seu tamanho em CM</label>
          <input
            ref={tamanhoRef}
            type="number"
            className="w-4/5 border border-gray-500 px-2 py-1 mx-auto"
          />
          <label className="text-center my-4">Digite seu peso em KG</label>
          <input
            ref={pesoRef}
            type="number"
            className="w-4/5 border border-gray-500 px-2 py-1 mx-auto"
          />
          <input
            type="submit"
            id=""
            onClick={(e) => {
              e.preventDefault();
              mostrar();
            }}
            className=" w-4/5 mx-auto my-4 py-2 bg-blue-400 rounded hover:bg-blue-500 transition-all "
          />
        </form>
      </div>
    </div>
  );
};
