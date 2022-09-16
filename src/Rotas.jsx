import Home from "./Paginas/Home";
import Materia0 from "./Paginas/news";
import Materia from "./Paginas/materia";
import Noticia2 from "./Paginas/materia2";
import Materia3 from "./Paginas/materia3";
import Materia4 from "./Paginas/materia4";
import About from "./Paginas/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/materia0" element={<Materia0 />} />
              <Route path="/materia" element={<Materia />} />
              <Route path="/materia2" element={<Noticia2/>} />
              <Route path="/materia3" element={<Materia3/>} />
              <Route path="/materia4" element={<Materia4 />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    )
  }
  