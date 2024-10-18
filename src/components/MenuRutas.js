import React, { Component } from "react";

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tabla/21">Tabla de Multiplicar del 21</a>
          </li>
          <li>
            <a href="/tabla/15">Tabla de Multiplicar del 15</a>
          </li>
          <li>
            <a href="/tabla/47">Tabla de Multiplicar del 47</a>
          </li>
          <li>
            <a href="/tabla/26">Tabla de Multiplicar del 26</a>
          </li>
          <li>
            <a href="/noexisto">Sin ruta</a>
          </li>
        </ul>
      </div>
    );
  }
}
