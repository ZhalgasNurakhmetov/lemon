import {Link} from "react-router-dom";

function Nav () {
    return (
        <nav className={'header-nav'}>
            <ul>
                <li className={'menu-item'}><Link to="/">Home</Link></li>
                <li className={'menu-item'}><a href="#">About</a></li>
                <li className={'menu-item'}><a href="#">Menu</a></li>
                <li className={'menu-item'}><Link to="/booking">Reservations</Link></li>
                <li className={'menu-item'}><a href="#">Order Online</a></li>
                <li className={'menu-item'}><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;