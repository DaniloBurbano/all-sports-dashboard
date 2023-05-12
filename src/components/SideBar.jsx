// import image from '../assets/images/logo-DH.png';
import image from '../assets/images/all_sports_logo_black.png';
import { Route, Link, Routes } from "react-router-dom";
import CategoriesInDbFunction from './CategoriesInDbFunction';
import Movie from './Movie';
import ContentWrapper from './ContentWrapper';
import NotFound from './NotFound';



function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link to="/" className='sidebar-brand d-flex align-items-center justify-content-center' >
                    <div className="sidebar-brand-icon">
                        <img className="p-4 w-100" src={image} alt="ALL SPORTS"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                <Link to="/dash" className='nav-link' >
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard - ALL SPORTS</span>  
                </Link>

                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link to="/" className='nav-link collapsed'>
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Home</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Categories</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Products</span>
                    </Link>

                </li>



                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Routes>
                <Route path='/'  element={<ContentWrapper />} />
                <Route path='/categories'  element={<CategoriesInDbFunction />} />
                <Route path='/dash'  element={<ContentWrapper />} />
                <Route path='/products'  element={<Movie />} />

                <Route path='*'  element={< NotFound />} />
            </Routes>
            
        </>
    )
}
export default SideBar;