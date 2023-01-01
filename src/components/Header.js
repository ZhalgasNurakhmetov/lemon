import Nav from "./Nav";
import logo from "../assets/logo.png";

function Header() {
    return (
        <header className={'header-layout'}>
            <img src={logo} width={'72px'} height={'75px'} alt={'Logo'}/>
            <Nav />
        </header>
    );
}

export default Header;