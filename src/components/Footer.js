import logo from "../assets/logo.png"

function Footer() {
    return <footer className={'grid-column-full grid-row-3'}>
        <img src={logo}/>
        <section>
            <h5>Doormant navigation</h5>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </section>
        <section>
            <h5>Contact</h5>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </section>
        <section>
            <h5>Social Media Links</h5>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </section>
    </footer>;
}

export default Footer;