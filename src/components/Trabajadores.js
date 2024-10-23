import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class Trabajadores extends Component {
  state = {
    trabajadores: [],
    mensaje: "",
  };

  loadTrabajadores = () => {
    //RECUPERAR TODOS LOS IDS DE HOSPITA
    let idsHospitales = this.props.idhospitales;

    if (idsHospitales.length != 0) {
      //idhospital=17&idhospital=22&idhospital=14
      let data = "";

      for (var id of idsHospitales) {
        data += "idhospital=" + id + "&";
      }

      //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
      //idhospital=25&idhospital=22&
      data = data.substring(0, data.length - 1);

      this.setState({
        mensaje: data,
      });

      //PODEMOS REALIZAR LA PETICION AL SERVICIO
      let request = "api/trabajadores/trabajadoreshospitales?" + data;
      let url = Global.urlEjemplos + request;

      axios.get(url).then((response) => {
        console.log("leyendo Trabajadores");

        this.setState({
          trabajadores: response.data,
        });
      });
    }
  };

  componentDidMount = () => {
    this.loadTrabajadores();
  };

  componentDidUpdate = (oldProps) => {
    if (oldProps.idhospitales != this.props.idhospitales) {
      this.loadTrabajadores();
    }
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "fuchsia" }}>Trabajadores</h1>
        <table className="table table-border">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
              <th>Id Hospital</th>
            </tr>
          </thead>
          <tbody>
            {this.state.trabajadores.map((trabajador, index) => {
              return (
                <tr key={index}>
                  <td>{trabajador.apellido}</td>
                  <td>{trabajador.oficio}</td>
                  <td>{trabajador.salario}</td>
                  <td>{trabajador.idHospital}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <h5 style={{ color: "blue" }}>{this.state.mensaje}</h5>
      </div>
    );
  }
}

// import React, { Component } from "react";
// import axios from "axios";
// import Global from "../Global";

// export default class Trabajadores extends Component {
//   cajaIncremento = React.createRef();

//   state = {
//     trabajadores: [],
//     mensaje: "",
//   };

//   loadTrabajadores = () => {
//     console.log("Leyendo ids");
//     //RECUPERAR TODOS LOS IDS DE HOSPITAL
//     let idsHospitales = this.props.idhospitales;

//     if (idsHospitales.length != 0) {
//       //idhospital=17&idhospital=22&idhospital=14
//       let data = "";
//       for (var id of idsHospitales) {
//         data += "idhospital=" + id + "&";
//       }
//       //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
//       //idhospital=18&idhospital=45&
//       data = data.substring(0, data.length - 1);
//       this.setState({
//         mensaje: data,
//       });
//       //PODEMOS REALIZAR LA PETICION AL SERVICIO
//       let request = "api/trabajadores/trabajadoreshospitales?" + data;
//       var url = Global.urlEjemplos + request;
//       axios.get(url).then((response) => {
//         console.log("Leyendo trabajadores");
//         this.setState({
//           trabajadores: response.data,
//         });
//       });
//     }
//   };

//   incremetarSalario = (e) => {
//     e.preventDefault();
//     //RECUPERAR TODOS LOS IDS DE HOSPITAL
//     let idsHospitales = this.props.idhospitales;
//     let incremento = parseInt(this.cajaIncremento.current.value);
//     if (idsHospitales.length != 0) {
//       //idhospital=17&idhospital=22&idhospital=14
//       let data = "incremento=" + incremento + "&";
//       for (var id of idsHospitales) {
//         data += "idhospital=" + id + "&";
//       }
//       //ELIMINAMOS EL ULTIMO CARACTER DEL STRING
//       //idhospital=18&idhospital=45&
//       data = data.substring(0, data.length - 1);
//       //PODEMOS REALIZAR LA PETICION AL SERVICIO
//       let request =
//         "api/trabajadores/updateSalariotrabajadoreshospitales?" + data;
//       var url = Global.urlEjemplos + request;
//       axios.put(url).then((response) => {
//         this.loadTrabajadores();
//         console.log(response);
//       });
//     }
//   };

//   componentDidMount = () => {
//     this.loadTrabajadores();
//   };

//   componentDidUpdate = (oldProps) => {
//     if (oldProps.idhospitales !== this.props.idhospitales) {
//       this.loadTrabajadores();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1 style={{ color: "fuchsia" }}>Trabajadores</h1>
//         <form>
//           <label>Incremetar Salario</label>
//           <input
//             type="text"
//             ref={this.cajaIncremento}
//             className="form-control"
//           ></input>
//           <button onClick={this.incremetarSalario} className="btn btn-success">
//             Incrementar
//           </button>
//         </form>
//         <br />
//         <table className="table table-border">
//           <thead>
//             <tr>
//               <th>Apellido</th>
//               <th>Oficio</th>
//               <th>Salario</th>
//               <th>Id Hospital</th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.trabajadores.map((trabajador, index) => {
//               return (
//                 <tr key={index}>
//                   <td>{trabajador.apellido}</td>
//                   <td>{trabajador.oficio}</td>
//                   <td>{trabajador.salario}</td>
//                   <td>{trabajador.idHospital}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         ;{/* <hr /> */}
//         {/* <h2 style={{color:"blue"}}>
//             {this.state.mensaje}
//         </h2> */}
//       </div>
//     );
//   }
// }
