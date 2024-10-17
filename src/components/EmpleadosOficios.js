// import React, { Component } from "react";
// import axios from "axios";
// import Global from "../Global";

// export default class EmpleadosOficios extends Component {
//   selectOficios = React.createRef();

//   state = {
//     oficios: [],
//     empleados: [],
//   };

//   buscarEmpleados = (e) => {
//     e.preventDefault();
//     let oficioSeleccionado = this.selectOficios.current.value;
//     var request =
//       "api/Empleados/GetEmpleadosOficio/empleadosoficio/" + oficioSeleccionado;
//     var url = Global.urlEmpleados + request;
//     axios.get(url).then((response) => {
//       console.log(response.data);
//       this.setState({
//         empleados: response.data,
//       });
//     });
//   };

//   loadOficios = () => {
//     var request = "api/Empleados/GetOficios/oficios";
//     var url = Global.urlEmpleados + request;
//     axios.get(url).then((response) => {
//       console.log(response.data);
//       this.setState({
//         oficios: response.data,
//       });
//     });
//   };

//   componentDidMount = () => {
//     this.loadOficios();
//   };

//   render() {
//     return (
//       <div>
//         <h1>Empleados Oficios</h1>
//         <label>Seleccione Oficio</label>
//         <select ref={this.selectOficios}>
//           {this.state.oficios.map((oficio, index) => {
//             return <option key={index}>{oficio}</option>;
//           })}
//         </select>
//         <button onClick={this.buscarEmpleados}>Cargar empleados</button>
//         <ul>
//           {this.state.empleados.map((empleado, index) => {
//             return <li key={index}>{empleado.apellido}</li>;
//           })}
//         </ul>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
 
export default class EmpleadosOficio extends Component {
    state = {
        empleados: [],
        oficios: []
    }
 
    selectOficio = React.createRef()
 
    loadOficios = () => {
        let request = "api/empleados";
       
        axios.get(Global.urlEmpleados + request).then(response => {
            let empleados = response.data;
           
            let oficiosSinDuplicar = empleados.filter((empleado, index, self) =>
                index === self.findIndex(e => e.oficio === empleado.oficio)
            );
           
            this.setState({
                oficios: oficiosSinDuplicar
            });
        });
    };
 
    buscarPorOficio = (e) => {
        e.preventDefault();
        let oficio = this.selectOficio.current.value;
        let request = "api/Empleados/EmpleadosOficio/" + oficio
        axios.get(Global.urlEmpleados + request).then(response => {
            this.setState({
                empleados: response.data
            })
        })
    }
 
    componentDidMount = () => {
        this.loadOficios()
    }
 
  render() {
    return (
      <div>
        <h1>Buscar por oficio</h1>
        <form action="">
            <select ref={this.selectOficio}>
                { this.state.oficios.map &&
                    this.state.oficios.map((empleado, index) => {
                        return <option key={index}>{empleado.oficio}</option>
                    })
                }
            </select>
            <button onClick={this.buscarPorOficio}>Buscar</button>
        </form>
 
        {
            this.state.empleados && this.state.empleados.map((empleado, index) => {
                return (
                    <ul key={index}>
                        <li>{empleado.apellido} {empleado.oficio}</li>
                    </ul>
                )
            })
        }
      </div>
    )
  }
}