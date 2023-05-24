import { Component } from "react";
import UserList from "./UserList";
import "/public/css/ProductList.css";


class User extends Component {
  constructor() {

    super();
    // this.state = {products: [],};
    this.state = {users: []};
    
  }
  componentDidMount() {
    fetch("http://localhost:3005/api/users")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((users) => {
        this.setState({ users: users.data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <>
        {/*<!-- PRODUCTS LIST -->*/}
        {/* <h1 className="h3 mb-2 text-gray-800">*/}
        <h1 class="listTitle"> 
          Listado de Usuarios
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
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Avatar</th>
                    <th>Rol</th>
                    <th>País</th>
                    
                  </tr>
                </thead>
                <tbody> 
				          {this.state.users.map((user, index) => {
                      return <UserList {...user} key={index} />;
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
export default User;
