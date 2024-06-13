import React from "react";
import { Link } from "react-router-dom";
import "./../../css/menu-css/topNav.css";
import image from "./../../images/image.png";

const TopNav = () => {
  return (
    <>
      <div className="logo">
        <img src={image} alt="Logo" />
      </div>
      <div className="topnav">
        <h2>Yo te lo cuento</h2>
        <ul>
          <li>
            <Link to="/juegos">Juegos</Link>
          </li>
          <li>
            <Link to="/dudas">Y si no te queda claro...</Link>
          </li>
          <li>
            <Link to="/quienes-somos">Quiénes somos</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopNav;
