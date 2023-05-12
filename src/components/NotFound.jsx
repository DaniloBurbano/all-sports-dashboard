// import img from '../assets/images/darth-vader.jpg'
import img from '../../public/vite.svg';

function NotFound() {
    return(
    <>  
        <h1>Not Found</h1>
        <img src={img} alt="404" />
    </>

    )
}

export default NotFound