import React, { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
/*
    TODO: 
    1. Fazer validação de dados de cartão (se for numero não aceitar letras etc)
    2. Separar components para cada parte (passando os props)
    3. Arrumar A parte do numero do cartão (mudar input para number e formatar)
*/
const Container: React.FC = () => {
  const [cartao, setCartao] = useState<string>("Seu nome aqui");
  const [numero, setNumero] = useState<string>("0000000000000000");
  const [cvv, setCvv] = useState<string>("000");
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* Parte da esquerda (cartões) */}
      <div className="w-2/4 h-full bg-[#291641] flex justify-center items-center relative">
        {/* Cartao 1 */}
        <div
          className="border border-gray-500 w-[32rem] h-64 absolute left-[10%] top-[10%] bg-[#1F1B1A] text-white rounded"
          style={{ padding: "1rem" }}
        >
          <div className="flex justify-between">
            <div
              className="flex gap-2 items-center"
              style={{ padding: ".5rem" }}
            >
              <div className="w-15 h-15 rounded-full bg-[#D9D9D9]"></div>
              <div className="w-10 h-10 rounded-full bg-[#D9D9D9]"></div>
            </div>
            <h1>Nome do cartão</h1>
          </div>
          <div>
            <div className="flex items-center " style={{ margin: "1rem 0" }}>
              <FcSimCardChip
                className="text-3xl text-slate-200"
                color="#D9D9D9"
              />
              <LuNfc className="text-3xl" color="#D9D9D9" />
            </div>
          </div>
          <h1 className="text-[1.5rem] w-full flex justify-between">
            {numero.slice(0, 4)} {numero.slice(4, 8)} {numero.slice(8, 12)}{" "}
            {numero.slice(12, 16)}{" "}
          </h1>
          <h1 className="text-2xl" style={{ marginTop: ".7rem" }}>
            {cartao || "Seu nome aqui"}
          </h1>
        </div>
        {/* Cartao 2 */}
        <div className="border border-gray-500 w-[32rem] h-64 absolute left-[35%] bottom-[15%] bg-[#1F1B1A] text-white rounded flex flex-col items-center">
          <div
            className="w-full h-15 bg-[#2F2F2F]"
            style={{ marginTop: "2rem" }}
          ></div>
          <div
            className="text-3xl w-2/3 bg-[#D9D9D9] rounded text-end"
            style={{ marginTop: "2rem" }}
          >
            <p style={{ padding: ".2rem 1.5rem" }} className="text-black">
              {cvv}
            </p>
          </div>
        </div>
      </div>
      {/*  Parte da direita (formulario)*/}
      <div className="w-full h-full bg-[#FFF] flex justify-center items-center flex-col">
        <h1 className="text-[2.5rem] w-2/4 " style={{ margin: "0 0 1rem 0" }}>
          Veja se seu cartão{" "}
          <span
            className="bg-red-300 rounded-full"
            style={{ padding: ".2rem .8rem .2rem .8rem" }}
          >
            vazou
          </span>{" "}
          na internet
        </h1>
        <form action="" className="flex flex-col w-2/6 ">
          <label htmlFor="" className="text-xl" style={{ marginTop: ".5rem" }}>
            Nome do cartão
          </label>
          <input
            type="text"
            name=""
            id=""
            className=" w-full bg-[#D9D9D9] rounded"
            style={{
              padding: ".5rem .5rem .5rem .8rem",
              margin: ".5rem 0 0 0",
            }}
            placeholder="Nome do cartão"
            onChange={(e) => setCartao(e.target.value)}
            maxLength={16}
          />
          <label htmlFor="" className="text-xl" style={{ marginTop: ".5rem" }}>
            Número do cartão
          </label>
          <input
            type="text"
            name=""
            id=""
            className=" w-full bg-[#D9D9D9] rounded "
            style={{
              padding: ".5rem .5rem .5rem .8rem",
              margin: ".5rem 0 0 0",
            }}
            placeholder="0000 0000 0000 0000"
            maxLength={16}
            onChange={(e) => {
              e.target.value.length >= 16 ? setNumero(e.target.value) : 0;
            }}
          />
          <div
            className="w-full flex justify-between gap-0.5"
            style={{ marginTop: ".5rem" }}
          >
            <div className="w-full">
              <label
                htmlFor=""
                className="text-xl"
                style={{ marginTop: ".5rem" }}
              >
                Data de validade
              </label>
              <div className="flex gap-0.5">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="MM"
                  className=" w-full bg-[#D9D9D9] rounded"
                  style={{
                    padding: ".5rem .5rem .5rem .8rem",
                    margin: ".5rem 0 0 0",
                  }}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="AA"
                  className=" w-full bg-[#D9D9D9] rounded"
                  style={{
                    padding: ".5rem .5rem .5rem .8rem",
                    margin: ".5rem .5rem 0 0",
                  }}
                />
              </div>
            </div>
            <div className="w-[35%]">
              <label
                htmlFor=""
                className="text-xl"
                style={{ marginTop: ".5rem" }}
              >
                CVV
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" w-full rounded bg-[#D9D9D9]"
                style={{
                  padding: ".5rem .5rem .5rem .8rem",
                  margin: ".5rem 0 0 0",
                }}
                placeholder="000"
                maxLength={3}
                onChange={(e) =>
                  e.target.value.length >= 3 && setCvv(e.target.value)
                }
              />
            </div>
          </div>
          <div style={{ marginTop: ".5rem" }}>
            <label htmlFor="" className="text-xl">
              Senha do cartão
            </label>
            <input
              type="password"
              name=""
              id=""
              className=" w-full bg-[#D9D9D9]"
              style={{
                padding: ".5rem .5rem .5rem .8rem",
                margin: ".5rem 0 0 0",
              }}
              placeholder="*******"
            />
          </div>
          <input
            type="submit"
            name=""
            id=""
            className=" bg-blue-300 rounded"
            style={{
              padding: ".5rem .5rem .5rem .8rem",
              margin: "1rem 0 0 0 ",
            }}
          />
        </form>
        <h1 className="text-gray-500" style={{ marginTop: "1rem" }}>
          Esse site não é verdadeiro
        </h1>
      </div>
    </div>
  );
};

export default Container;
