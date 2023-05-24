import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Product from './Product';
import User from './User';
import Footer from './Footer';

function ContentWrapper(){
    return (
        <>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <Product />
                    <User />
                    <Footer />
                </div>
            </div>    
        </>
    )
}

export default ContentWrapper;