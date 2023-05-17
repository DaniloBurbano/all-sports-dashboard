import "/public/css/ProductList.css";


function Category(props){
    return(
        <>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body-totals">
                        {props.name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;