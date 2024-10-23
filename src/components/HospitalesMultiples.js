import React, { Component } from "react";
import Trabajadores from "./Trabajadores";
import axios from "axios";
import Global from "../Global";

export default class HospitalesMultiple extends Component {
  selectHospital = React.createRef();
  cajaIncremento = React.createRef();

  state = {
    hospitales: [],
    hospitalesSeleccionados: [],
  };

  loadHospitales = () => {
    let request = "api/hospitales";
    let url = Global.urlEjemplos + request;

    axios.get(url).then((response) => {
      console.log("Leyendo hospitales");

      this.setState({
        hospitales: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadHospitales();
  };

  getHospitalesSeleccionados = (e) => {
    e.preventDefault();

    let aux = this.getSeleccion();

    this.setState({
      hospitalesSeleccionados: aux,
    });
  };

  getSeleccion = () => {
    let aux = [];
    let options = this.selectHospital.current.options;

    for (var opt of options) {
      if (opt.selected == true) {
        aux.push(opt.value);
      }
    }
    return aux;
  };

  incrementarSalarios = (e) => {
    e.preventDefault();

    let hospitales = this.getSeleccion();
    let incremento = parseInt(this.cajaIncremento.current.value);
    let data = "";

    for (var id of hospitales) {
      data += "idhospital=" + id + "&";
    }

    //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
    //idhospital=25&idhospital=22
    data = data.substring(0, data.length - 1);

    let request ="api/trabajadores/updatesalariotrabajadoreshospitales?incremento=" + incremento + "&" + data;
    let url = Global.urlEjemplos + request;

    axios.put(url).then((response) => {
      this.setState({
        hospitalesSeleccionados: hospitales,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Hospitales Múltiple</h1>
        <form>
          <select ref={this.selectHospital} className="form-control" size="8" multiple>
            {this.state.hospitales.map((hospital, index) => {
              return (
                <option key={index} value={hospital.idHospital}>
                  {hospital.nombre}
                </option>
              );
            })}
          </select>
          <label>Incremento salarial</label>
          <input type="text" ref={this.cajaIncremento} className="form-control"/>

          <button onClick={this.incrementarSalarios} className="btn btn-success">
            Incrementar salarios
          </button>

          <button onClick={this.getHospitalesSeleccionados} className="btn btn-info">
            Mostrar trabajadores
          </button>
        </form>
        {this.state.hospitalesSeleccionados.length != 0 && (
          <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
        )}
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";
// import Global from "../Global";
// import Trabajadores from "./Trabajadores";

// export default class HospitalesMultiple extends Component {
//   selectHospital = React.createRef();

//   state = {
//     hospitales: [],
//     hospitalesSeleccionados: [],
//   }

//   loadHospitales = () =>{
//     var request = "api/hospitales";
//     var url = Global.urlEjemplos + request;
//     axios.get(url).then(response => {
//         console.log("Leyendo hospitales");
//         this.setState({
//             hospitales: response.data
//         })
//     })
//   }

//   getHospitalesSeleccionados = (e) =>{
//     e.preventDefault();
//     let aux = [];
//     let options = this.selectHospital.current.options;
//     for (var opt of options){
//         if (opt.selected == true) {
//             aux.push(opt.value)
//         }
//     }
//     this.setState({
//         hospitalesSeleccionados: aux,
//     })
//   }

//   componentDidMount = () =>{
//     this.loadHospitales();
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hospitales Múltiple</h1>
//         <form>
//             <label>Seleccione hospital</label>
//             <select ref={this.selectHospital} className="form-control" size="8" multiple>
//                 {
//                     this.state.hospitales.map((hospital, index) => {
//                         return(
//                             <option key={index} value={hospital.idHospital}>
//                                 {hospital.nombre}
//                             </option>
//                         )
//                     })
//                 }
//             </select>
//             <button onClick={this.getHospitalesSeleccionados} className="btn btn-info">Mostrar trabajadores</button>
//         </form>
//         <hr />
//         {
//             this.state.hospitalesSeleccionados.length != 0 && (
//                 <Trabajadores idhospitales={this.state.hospitalesSeleccionados} />
//             )
//         }
//       </div>
//     )
//   }
// }
