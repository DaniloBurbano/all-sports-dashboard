import "/public/css/ProductList.css";

function UserList(props) {
  return (
    
    <tr class="trList">
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      
      <td> <img class = "listImage" src={"http://localhost:3005/images/users/"+ props.image} alt= "Imagen de Usuario"/></td>
      <td>{props.role.name}</td>
      <td>{props.country.name}</td>
      

     
    </tr>
  );
}

export default UserList;
