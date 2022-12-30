import Nav from "./Nav";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className={'grid-column-full grid-row-1'}>
            <img src={logo}/>
            <Nav />
        </header>
    );
}

export default Header;