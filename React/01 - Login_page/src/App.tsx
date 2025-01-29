import React from "react";
import Left from "./components/Left";
import Rigth from "./components/Rigth";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-2/3 h-3/4 flex justify-center items-center rounded border border-gray-400 shadow-2xl">
        <Left />
        <Rigth />
      </div>
    </div>
  );
};

export default App;
