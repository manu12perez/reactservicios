import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/21">Tabla de Multiplicar del 21</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/15">Tabla de Multiplicar del 15</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/47">Tabla de Multiplicar del 47</NavLink>
          </li>
          <li>
            <NavLink to="/tabla/26">Tabla de Multiplicar del 26</NavLink>
          </li>
          <li>
            <NavLink to="/noexisto">Sin ruta</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
