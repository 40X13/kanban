import logo from './img/logo.png'

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo"/>
            <h1>Kanban</h1>
            <input type="text" name="" id=""/>
            <span>change theme</span>
        </header>
    );
}

export default Header;