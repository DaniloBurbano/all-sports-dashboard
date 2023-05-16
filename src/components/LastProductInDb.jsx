import { Component } from "react";
import LastProduct from "./LastProduct";

// import imagenFondo from '../assets/images/mandalorian.jpg';
import imagenFondo from '../../public/vite.svg';
import "/public/css/ProductList.css";
import Product from "./Product";


class LastProductInDb extends Component {
    constructor() {
        super();
        this.state = {products: []};
    }
    componentDidMount(){
        fetch("http://localhost:3005/api/products")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then((products) => {
                this.setState({products: products.data});
            })
            .catch((error) => console.log(error));
    }
    render() {
        return (
        <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">

                        <div className="card-header py-3">
                            <h5 className="listTitle">Último Producto Creado</h5>
                        </div>
                        <div className="card-body">

                            <p> {this.state.products.slice(0, 1).map((products, index) => {
                                return <LastProduct {...products} key={index} />
                                })}
                            </p>
                        </div>
                </div>
        </div>
    )
    }
}

export default LastProductInDb