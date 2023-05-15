import "/public/css/ProductList.css";

function ProductList(props) {
  return (
    
    <tr class="trList">
      <td>{props.id}</td>
      <td>{props.name}</td>
       
      <td>{props.brand.name}</td>
      <td>{props.color.name}</td>
      <td>{props.category.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductList;
