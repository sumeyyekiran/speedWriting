import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-2 p-3">
      <NavLink className="navbar-brand" href="#">
        Yazma Testi
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/">
              Ana sayfa
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/results">
              Sonuçlarım
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" to="/challengers">
              Metinler
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
