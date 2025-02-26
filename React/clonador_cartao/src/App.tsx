import React from "react";
import Header from "./components/Header";
import Payments from "./pages/payments/Payments.tsx";
import Cards from "./pages/cards/index.tsx";
import Home from "./pages/home/index.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/*
  TODO: TailwindCSS não está funcionando (resolver)
  TODO: Criar pages de cartões que já estão criados
*/
const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </Router>
  );
};

export default App;
