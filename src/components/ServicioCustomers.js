import React, { Component } from "react";
//LO PRIMERO ES UTILIZAR LA LIBRERIA DE axios
import axios from "axios";

export default class ServicioCustomers extends Component {
  //NECESITAMOS LA URL Y EL REQUEST DE ACCESO AL SERVICIO
  urlCustomers = "https://northwind.netcore.io/customers.json";

  //NECESITAMOS UNA VARIABLE EN state PARA ALMACENAR LOS CLIENTES
  state = {
    customers: []
  }

  //NECESITAREMOS RECUPERAR LOS CLIENTES CON axios
  //LA PREGUNTA ES CUANDO QUEREMOS HACERLO???
  loadCustomers = () => {
    console.log("Antes del servicio");
    axios.get(this.urlCustomers).then(response => {
        console.log("Leyendo servicio");
        this.setState({
            customers: response.data.results
        })
    })
    console.log("Después del servicio");
  }

  //VAMOS A CARGAR LOS DATOS EN EL METODO INICIAL DE LA PAGINA
  //LO HAREMOS SOLAMENTE UNA VEZ QUE SERA AL INICIAR EL COMPONENT
  componentDidMount = () => {
    console.log("Creando component");
    this.loadCustomers();
  }

  render() {
    return (
      <div>
        <h1>Serivicio Api Customers</h1>
        <button onClick={this.loadCustomers}>Cargar clientes Api</button>
        {
            this.state.customers.map((cliente, index) => {
                return (
                    <h3 style={{color:"blue"}} key={index}>{cliente.contactName}</h3>
                )
            })
        }
      </div>
    )
  }
}
