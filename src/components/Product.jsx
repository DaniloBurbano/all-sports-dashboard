import { Component } from "react";
import ProductList from "./ProductList";
import "/public/css/ProductList.css";


class Product extends Component {
  constructor() {

    super();
    // this.state = {products: [],};
    this.state = {products: []};
    
  }
  componentDidMount() {
    fetch("http://localhost:3005/api/products")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((products) => {
        this.setState({ products: products.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        {/* <h1 className="h3 mb-2 text-gray-800">*/}
        <h1 class="listTitle"> 
          Listado de Productos
        </h1>

        {/*<!-- DataTales Example -->*/}
        <div className="card shadow mb-4">
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr class = "trListProduct">
                    <th>Id</th>
                    <th>Producto</th>
                    <th>Imagen</th>
                     <th>Marca</th>
                    <th>Color</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody> 
				          {this.state.products.map((product, index) => {
                      return <ProductList {...product} key={index} />;
                  })}
                  
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Product;
