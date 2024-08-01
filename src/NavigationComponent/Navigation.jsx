import { Outlet, Link, useLocation } from 'react-router-dom'

import ReactLogo from '../assets/react.svg'
import './Navigation.css'

function Navigation() {
    const location = useLocation();
    const childRouteActive = ['/home/', '/about/', '/contact/'].some((route) => route === location.pathname);

    return (
        <div>
            <div className='nav'>
                <div className='nav-start'>
                    <img src={ReactLogo} alt="React Logo" />
                    <p><a href="https://github.com/pakmangames" target='_blank'>Example Website Title</a></p>
                </div>
                <div className='nav-end'>
                    <Link to={`home/`}>Home</Link>
                    <Link to={'about/'}>About</Link>
                    <Link to={'contact/'}>Contact</Link>
                </div>
            </div>
            {childRouteActive ? <Outlet /> : <div>hello world (card layout on home)</div>}
        </div>
    );
}

export default Navigation