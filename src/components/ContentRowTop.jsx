import GenresInDb from './GenresInDb';
import CategoriesInDb from './CategoriesInDb';
import CategoriesInDbFunction from './CategoriesInDbFunction';
import ContentRowTotals from './ContentRowTotals';
import LastProductInDb from './LastProductInDb';
import "/public/css/ProductList.css";



function ContentRowTop(){
    return(
        <>
			{/*<!-- Content Row Top -->*/}
			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					{/* <h1 className="h3 mb-0 text-gray-800">App Dashboard
					 */}
					<h1 class="listTitle">App Dashboard
					</h1>
				</div>
			
				{/*<!-- Content Row Movies-->*/}
				<ContentRowTotals />
				{/*<!-- End movies in Data Base -->*/}
				

				{/*<!-- Content Row Last Movie in Data Base -->*/}
				<div className="row">
					{/*<!-- Last Movie in DB -->*/}
					<LastProductInDb />
					{/*<!-- End content row last movie in Data Base -->*/}

							{/*<!-- Categories in DB -->*/}
							{/* <CategoriesInDb /> */}
							<CategoriesInDbFunction />

					{/*<!--End Genres In Db-->*/}		
				
				
				</div>
			</div>
			{/*<!--End Content Row Top-->*/}
        </>
    )

}
export default ContentRowTop;