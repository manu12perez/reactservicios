import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Empleado extends Component {

  state = {
    empleados: [],
  }

  loadEmpleados = () => {
    let idDepartamento = this.props.iddepartamento;
    var request = "api/Empleados/EmpleadosDepartamento/" + idDepartamento;
    var url = Global.urlEmpleados + request;
    axios.get(url).then(response => {
      console.log(response.data);
      this.setState({
        empleados: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadEmpleados();
  }

  render() {
    return (
      <div>
        <h3 style={{color:"red"}}>Empleados Component</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Departamento</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.empleados.map((empleado, index) => {
                return (
                <tr key={index} >
                  <td>{empleado.apellido}</td>
                  <td>{empleado.oficio}</td>
                  <td>{empleado.departamento}</td>
                </tr>
                )              
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
