import ReactLogo from '../assets/react.svg'
import './Navigation.css'

function Navigation() {
    return (
        <div className='nav'>
            <div className='nav-start'>
                <img src={ReactLogo} alt="React Logo" />
                <p><a href="https://github.com/pakmangames" target='_blank'>Example Website Title</a></p>
            </div>
            <div className='nav-end'>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>
        </div>
    );
}

export default Navigation