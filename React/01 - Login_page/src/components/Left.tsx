import React from "react";
import { FaGoogle } from "react-icons/fa";
const Left: React.FC = () => {
  return (
    <div className="w-[50vw] h-full flex justify-center align-middle flex-col">
      {/* Parte do titulo do form, formulário e inputs */}
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Wellcome Back</h1>
        <span className="text-gray-400">Please enter you details</span>
        <form action="" className="flex justify-center flex-col w-full">
          <div
            className=" flex align-middle flex-col w-2/3"
            style={{ margin: ".5rem auto 1rem auto" }}
          >
            <label htmlFor="">Email adress</label>
            <input
              type="text"
              id=""
              placeholder="email.email@gmail.com"
              className="w-full border border-gray-400 rounded"
              style={{ padding: ".5rem 1.5rem" }}
            />
          </div>
          <div
            className=" flex align-middle flex-col w-2/3"
            style={{ margin: "0 auto 1rem auto" }}
          >
            <label htmlFor="">Password</label>
            <input
              type="password"
              id=""
              placeholder="password"
              className="w-full border border-gray-400 rounded"
              style={{ padding: ".5rem 1.5rem" }}
            />
          </div>
        </form>
        <div
          className="flex justify-between items-center w-2/3"
          style={{ margin: "0 0 .5rem 0" }}
        >
          <div className="w-full">
            <input type="checkbox" id="" />
            <span style={{ margin: "0 0 0 .5rem" }}>Remember-me</span>
          </div>
          <div className="w-2/3">
            <span className="font-bold text-blue-700 text-[.8rem]">
              Forgot you password
            </span>
          </div>
        </div>
        <button
          className="w-2/3 bg-blue-200 border border-gray-400 rounded hover:bg-transparent ease-in duration-300"
          style={{ padding: ".5rem 1.5rem", margin: ".5rem 0" }}
        >
          Sign in
        </button>
        <button
          className="w-2/3 bg-blue-600 text-white flex justify-center items-center rounded hover:bg-blue-800 cursor-pointer ease-in duration-300"
          style={{ padding: ".5rem 1.5rem", margin: ".5rem 0" }}
        >
          {" "}
          <FaGoogle className="w-5 h-5" />
          <p style={{ margin: "0 .5rem " }}>Sign google</p>
        </button>
        <div>
          <span>
            Dont have account?{" "}
            <span className="font-bold text-blue-600 border-b-2 border-transparent hover:border-b-gray-300 ease-in-out duration-300 cursor-pointer">
              Create now
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Left;
