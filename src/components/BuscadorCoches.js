import React, { Component } from "react";
import axios from "axios";

export default class BuscadorCoches extends Component {
  urlApi = "https://apicochespaco.azurewebsites.net/";
  cajaMarca = React.createRef();

  state = {
    coches: [],
  };

  //si añadimos el componentDidMount = () => {} quitamos e.preventDefault
  //   cargarCoches = (e) => {
  //    e.preventDefault();
  cargarCoches = () => {
    console.log("Antes del servicio");
    let request = "webresources/coches";
    axios.get(this.urlApi + request).then((response) => {
      console.log("Leyendo servicio");
      this.setState({
        coches: response.data,
      });
      console.log(response.data);
    });
    console.log("Después del servicio");
  };

  filtro = (e) => {
    e.preventDefault();
    let nombreMarca = this.cajaMarca.current.value;
    // UNA FORMA
    let cochesFiltrados = [];
    for (var coche of this.state.coches) {
      if (nombreMarca == coche.marca) {
        cochesFiltrados.push(coche);
      }
    }
    // OTRA FORMA
    // this.state.coches.map((coche, index) => {
    //   if (nombreMarca == coche.marca) {
    //     cochesFiltrados.push(coche);
    //   }
    // });

    this.setState({
      coches: cochesFiltrados,
    });
  };

  //   Cargar los coches al inicializar la página
  componentDidMount = () => {
    console.log("Creando component");
    this.cargarCoches();
  };

  render() {
    return (
      <div>
        <h1>Buscador de Coches</h1>
        <form>
          <label>Introduzca marcas</label>
          <input type="text" ref={this.cajaMarca} />
          {/* <button onClick={this.cargarCoches}>Cargar coches</button> */}
          <button onClick={this.filtro}>Buscar coches</button>
        </form>
        <table border="1" class="table table-dark">
          <thead>
            <tr>
              <th>Coche</th>
              <th>Conductor</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.coches &&
              this.state.coches.map((coche, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {coche.marca} {coche.modelo}
                    </td>
                    <td>{coche.conductor}</td>
                    <td>
                      <img
                        src={coche.imagen}
                        style={{ height: "200px", width: "200px" }}
                        alt="imagenCoche"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

// FORMA PROFESOR
// import React, { Component } from "react";

// import axios from "axios";

// export default class BuscadorCoches extends Component {
//   cajaMarca = React.createRef();

//   buscarCoches = (e) => {
//     e.preventDefault();

//     let marca = this.cajaMarca.current.value;

//     // var cochesFiltrados = [];

//     // for (var car of this.state.coches){

//     // if (marca == car.marca){

//     // //TENEMOS COCHE FILTRADO

//     // cochesFiltrados.push(car);

//     // console.log(car);

//     // }

//     // }

//     //TENEMOS UN METODO DENTRO DE ARRAY QUE NOS PERMITE BUSCAR POR ALGUNA

//     //PROPIEDAD DE LOS OBJETOS UTILIZANDO LAMBDA

//     //Array.filter(objetoArray => objetoArray.Propiedad == valor);

//     var cochesFiltrados = this.cochesAll.filter((car) =>
//       car.marca.toLowerCase().includes(marca.toLowerCase())
//     );

//     this.setState({
//       cochesDibujo: cochesFiltrados,
//     });
//   };

//   //TODOS LOS COCHES AL LEER DEL SERVICIO

//   cochesAll = [];

//   state = {
//     cochesDibujo: [],
//   };

//   reloadDibujo = (e) => {
//     e.preventDefault();

//     this.setState({
//       cochesDibujo: this.cochesAll,
//     });
//   };

//   loadCoches = () => {
//     var request = "/webresources/coches";

//     var url = Global.urlApiCoches + request;

//     axios.get(url).then((response) => {
//       this.cochesAll = response.data;

//       this.setState({
//         cochesDibujo: this.cochesAll,
//       });
//     });
//   };

//   componentDidMount = () => {
//     this.loadCoches();
//   };

//   render() {
//     return (
//       <div>
//         <h1>Buscador Coches</h1>

//         <form>
//           <label>Introduzca marca</label>

//           <input type="text" ref={this.cajaMarca} />

//           <button onClick={this.buscarCoches}>Buscar coches</button>

//           <button onClick={this.reloadDibujo}>Recargar coches</button>
//         </form>

//         <table border="1">
//           <thead>
//             <tr>
//               <th>Coche</th>

//               <th>Conductor</th>

//               <th>Imagen</th>
//             </tr>
//           </thead>

//           <tbody>
//             {this.state.cochesDibujo.map((car, index) => {
//               return (
//                 <tr key={index}>
//                   <td>
//                     {car.marca} {car.modelo}
//                   </td>

//                   <td>{car.conductor}</td>

//                   <td>
//                     <img
//                       src={car.imagen}
//                       style={{ width: "150px", height: "150px" }}
//                     />
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
// }
