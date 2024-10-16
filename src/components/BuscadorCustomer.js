import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCustomer extends Component {
  urlApi = Global.urlApiCustomers;
  cajaId = React.createRef();

  state = {
    customer: null,
  };

  buscarCustomer = (e) => {
    e.preventDefault();
    //RECUPERAMOS EL VALOR DE LA CAJA
    let idCustomer = this.cajaId.current.value;
    //customers/ALFKI.json
    let request = "customers/" + idCustomer + ".json";
    console.log(idCustomer);
    axios.get(this.urlApi + request).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        customer: response.data.customer,
      });
    });
    console.log("Después del servicio");
  };

  render() {
    return (
      <div>
        <h1>Buscador Api Customer por Id</h1>
        <form>
          <label>Introduzca un Id</label>
          <br />
          <input type="text" ref={this.cajaId} />
          <br />
          <button onClick={this.buscarCustomer}>Buscar Customer</button>
        </form>
        {this.state.customer && (
          <ul>
            <li>{this.state.customer.contactName}</li>
            <li>{this.state.customer.companyName}</li>
            <li>{this.state.customer.contactTitle}</li>
            <li>{this.state.customer.city}</li>
          </ul>
        )}
      </div>
    );
  }
}
