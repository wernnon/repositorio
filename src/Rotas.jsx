import News1 from "./Paginas/news/Materia1/index";
import Home from "./Paginas/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path='/noticia-1' element={<News1/>}/>
          </Routes>
      </BrowserRouter>
    )
  }
  