import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNav from "../componentes/menu/TopNav";
import Juegos from "../componentes/juegos/Juegos";
import About from "../componentes/about/About";
import Dudas from "../componentes/dudas/Dudas";
import "./../css/app.css";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/juegos" />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/dudas" element={<Dudas />} />
            <Route path="/quienes-somos" element={<About />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
