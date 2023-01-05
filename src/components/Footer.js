import logo from "../assets/logo.png"
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className={'footer-nav footer-layout'}>
            <img src={logo} width={'110px'} height={'120px'} alt={'Logo'}/>
            <section>
                <h5>Doormant navigation</h5>
                <ul>
                    <li className={'description'}><Link to="/">Home</Link></li>
                    <li className={'description'}><a href="#">About</a></li>
                    <li className={'description'}><a href="#">Menu</a></li>
                    <li className={'description'}><Link to="/booking">Reservations</Link></li>
                    <li className={'description'}><a href="#">Order Online</a></li>
                    <li className={'description'}><a href="#">Login</a></li>
                </ul>
            </section>
            <section>
                <h5>Contact</h5>
                <ul>
                    <li className={'description'}><a href="#">Address</a></li>
                    <li className={'description'}><a href="#">Phone number</a></li>
                    <li className={'description'}><a href="#">Email</a></li>
                </ul>
            </section>
            <section>
                <h5>Social Media Links</h5>
                <ul>
                    <li className={'description'}><a href="#">Address</a></li>
                    <li className={'description'}><a href="#">Phone number</a></li>
                    <li className={'description'}><a href="#">Email</a></li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;