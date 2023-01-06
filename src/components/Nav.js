import {Link} from "react-router-dom";

function Nav () {
    return (
        <nav className={'header-nav'}>
            <ul>
                <li className={'menu-item'}><Link to="/">Home</Link></li>
                <li className={'menu-item'}><a href="#about">About</a></li>
                <li className={'menu-item'}><a href="#menu">Menu</a></li>
                <li className={'menu-item'}><Link to="/booking">Reservations</Link></li>
                <li className={'menu-item'}><a href="#">Login</a></li>
                <li className={'menu-item'}><a className={'green-back white'} style={{borderRadius: '16px'}} href="#">Order Online</a></li>
            </ul>
        </nav>
    );
}

export default Nav;