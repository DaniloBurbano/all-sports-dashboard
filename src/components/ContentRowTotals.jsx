import SmallCardTotals from './SmallCardTotals';
import React, { Component } from "react";

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: 0,
    icono: "fas fa-fw fa-table"
}

let amount ={
    color:   "primary",
    titulo: "Total de Categorías de Productos",
    valor: 0,
    icono: "fas fa-fw fa-chart-area",
}

let user = {
    color:   "primary",
    titulo: "Total de Usuarios",
    valor: 0,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];

class Totals extends Component {
       constructor() {
         super();
         this.state = {products: [], users: [], categories: []};
       }
    
       componentDidMount() {

         fetch("http://localhost:3005/api/products")
           .then((response) => response.json())
           .then((products) => {
             this.setState({ products: products.data });
            const productCount = products.data.length;
             
            // const productCount = products.meta.count
             
             
             productInDataBase.valor = productCount;
           })
           .catch((error) => console.log(error));

        fetch("http://localhost:3005/api/users")
          .then((response) => response.json())
          .then((users) => {
            this.setState({ users: users.data });
            // const userCount = users.data.length;
            
            const userCount = users.data.length;
            // const userCount = users.meta.count;
            

            user.valor = userCount;
          })
          .catch((error) => console.log(error));

        fetch("http://localhost:3005/api/categories")
            .then((response) => response.json())
            .then((categories) => {
                this.setState({ categories: categories.data });
                const categoryCount = categories.data.length;
                
                // const categoryCount = categories.meta.count;
                
                
                amount.valor = categoryCount;
            })
            .catch((error) => console.log(error));
        }
        render() {
            return (
            <>
                <div className="row">
                    {
                        cardProps.map((product,index)=>{
                            return <SmallCardTotals  {...product}  key= {index}/>
                        })
                    }      
             
            </div>
        </>
            )
        }
}

    //    componentDidMount() {
    //     fetch("http://localhost:3005/api/users")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         const userCount = data.length;
    //         this.setState({ userCount });
    //       })
    //       .catch((error) => console.log(error));
    //   }

    //   componentDidMount() {
    //     fetch("http://localhost:3005/api/categories")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         const categoryCount = data.length;
    //         this.setState({ categoryCount });
    //       })
    //       .catch((error) => console.log(error));
    //   }
 

 
 export default Totals;



// class Product extends Component {
//   constructor() {
//     super();
//     this.state = { productCount: 0 };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3005/api/products")
//       .then((response) => response.json())
//       .then((data) => {
//         const productCount = data.length;
//         this.setState({ productCount });
//       })
//       .catch((error) => console.log(error));
//   }

//   render() {
//     const { productCount } = this.state;

//     return (
//       <>
//         <h1 className="listTitle">Listado de Productos</h1>
//         <div className="card shadow mb-4">
//           <div className="card-body">
//             <div className="table-responsive">
//               <p>Cantidad de productos: {productCount}</p>
//               <table
//                 className="table table-bordered"
//                 id="dataTable"
//                 width="100%"
//                 cellSpacing="0"
//               >
//                 {/* Resto del código de la tabla y la iteración */}
//               </table>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// export default Product;