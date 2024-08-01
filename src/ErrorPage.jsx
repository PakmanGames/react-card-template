import ErrorPicture from './assets/pakmangames-ears.gif'
import { useRouteError, Link } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
       <div className='error-container'>
        <img src={ErrorPicture} alt="Error Picture" className='error-picture'/>
        <p className='error-greeting'>Nyahallo~!</p>
        <p>{`It looks like the page nya're trying to visit doesn't exist`}</p>
        <p className='error'>Error: {error.statusText || error.message}</p>
        <Link to="/"><button className='return-button'>Return to Main Page</button></Link>
       </div> 
    );
}

export default ErrorPage