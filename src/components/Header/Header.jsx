import './Header.css'
import logo from '../../assets/HeaderLogo.svg'
export function Header() {
    return (
        <div className="header-outer">
            <header className="header-inner">
                <img src={logo} alt="logo" />
                <section className="right-section">
                    <a className="sign-in" href="www.dukaan.io" >Sign In</a>
                    <a className="pc-link" href="www.dukaan.io">Dukaan for PC</a>
                </section>
            </header>

        </div>
    )
}