import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TablaMultiplicar from "./components/TablaMultiplicar";
import Router from "./components/Router";
import MenuRutas from "./components/MenuRutas";

import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle";
import BuscadorCoches from "./components/BuscadorCoches";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {/* <TablaMultiplicar numero ="7"/>
        <TablaMultiplicar numero ="9"/> */}
    <Router />
    {/* <BuscadorCoches /> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
