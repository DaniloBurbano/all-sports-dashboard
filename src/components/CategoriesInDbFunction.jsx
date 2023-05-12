import React, { useEffect, useState } from 'react';
import Category from "./Category";

function CategoriesInDbFunction() {

  let [ categories, setCategories ] = useState([]);

  const API = 'http://localhost:3005/api/categories';

	useEffect(()=>{
		fetch(API)
		.then(response => {
			return response.json()
		})
		.then(categories => {
			setCategories(categories.data);
		})
	}, [])

  const onMouseOver = ()=> {
    // console.log("hover");
  }

  return (
    <>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 onMouseOver={onMouseOver} className="m-0 font-weight-bold text-gray-800" id="genero">
              Categorías en Base de Datos
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {categories.map((category, index) => {
                return <Category {...category} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoriesInDbFunction