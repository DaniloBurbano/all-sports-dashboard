import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Product from './Product';
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
                    <Footer />
                </div>
            </div>    
        </>
    )
}

export default ContentWrapper;