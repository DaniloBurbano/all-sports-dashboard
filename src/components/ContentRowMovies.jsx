import SmallCard from './SmallCard';

let productInDataBase = {
    color:   "primary",
    titulo: "Total de Productos",
    valor: 21,
    icono: "fas fa-fw fa-table"
}

let amount ={
    color:   "primary",
    titulo: "Total de Categorías de Productos",
    valor: 79,
    icono: "fas fa-fw fa-chart-area",
}

let user = {
    color:   "primary",
    titulo: "Total de Usuarios",
    valor: 49,
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];

function ContentRowTop(){
    return (
        <>
            {/*<!-- Content Row -->*/}
            <div className="row">
                {
                    cardProps.map((product,index)=>{
                        return <SmallCard  {...product}  key= {index}/>
                    })
                }      
            </div>
        </>
    )
}
export default ContentRowTop;