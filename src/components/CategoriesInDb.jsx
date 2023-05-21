import { Component } from "react";
import Category from "./Category";
import "/public/css/ProductList.css";

class CategoriesInDb extends Component{
  constructor() {
    super();
    this.state = { categoriesList: [] };
  }
  componentDidMount() {
    fetch("http://localhost:3005/api/categories")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((categories) => {
        console.log(categories.data);
        this.setState({ categoriesList: categories.data });
      })
      .catch((error) => console.log(error));
  }
  onMouseOver(){
    let h6 = document.querySelector('#genero')
    // h6.classList.toggle('bg-secondary')
  }
  render() {
    return (
      <>
        {/*<!-- Categories in DB -->*/}
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 onMouseOver={this.onMouseOver} className="listTitle" id="genero">
                Categorías de Productos en Base de Datos
              </h5>
            </div>
            <div className="card-body">
              <div className="row">
                {this.state.categoriesList.map((category, index) => {
                  return <Category {...category} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CategoriesInDb;
