import App from "./App";
import Footer from "./Componentes/Footer/Footer";
import Nain from "./Paginas/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Nain />}/>
              <Route path="/footer" element={ <Footer /> } />
          </Routes>
      </BrowserRouter>
    )
  }
  