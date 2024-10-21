import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useParams } from "react-router-dom";

import React, { Component } from "react";
import Home from "./Home";
import NotFound from "./NotFound";
import TablaMultiplicar from "./TablaMultiplicar";
import MenuRutas from "./MenuRutas";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      //ESTA FUNCION NOS SERVIRA PARA CAPTURAR LOS PARAMETROS EN UNA RUTA
      //PARA SEPARAR PROPS DE PARAMS VOY A LLAMAR A NUESTRO PARAMETRO minumero
      var { minumero } = useParams();
      //DEVOLVEMOS EL COMPONENT TABLA MULTIPLICAR CON SU PROPS DE LA VARIABLE numero
      return <TablaMultiplicar numero={minumero} />;
    }

    return (
      <BrowserRouter>
        <MenuRutas />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          {/* PARA LAS RUTAS QUE NO EXISTEN DEBEMOS UTILIZAR UN * DENTRO 
          DEL PATH Y DEBE SER LA ULTIMA ETIQUETA DE <Routes> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
