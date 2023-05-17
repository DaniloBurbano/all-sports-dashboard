import "/public/css/ProductList.css";

function LastProduct(props){


    // let productImage = props.Image;
    return(
        <>
            <div className="text-center">
                {/* <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={productImage} alt=" IMAGEN DE API "/>
             */}
                <img class= "lastProductImage" src={"http://localhost:3005/images/products/"+ props.image} alt= "Imagen de Producto"/>
            </div>
            <div className="m-0 font-weight-bold text-gray-800">
                <div className="card-body">
                    {props.name}
                </div>
            </div>
            <p>
                {props.description}.
            </p>

        </>
    )
}

export default LastProduct;