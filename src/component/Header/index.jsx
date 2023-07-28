const Header = () => {
    return (
        <div className="header">
            <div className="imgbox">
                <img className="imgone" src="src\assets\portfolio.png" alt="" />
            </div>
            <div className="tButtons">
                <a  href="http://" className="sobre">Sobre</a>
                <a  href="http://" className="stack">Stack</a>
                <a  href="http://" className="projetos">Projetos</a>
            </div> 
            <div>
                <button className="finalButton">Contato</button>
            </div>
        </div>
    );
}

export default Header;