import './Header.css'
import logo from '../../assets/HeaderLogo.svg'
export function Header() {
    return (
        <div className="header-outer">
            <header className="header-inner">
                <a className="sign-in" href="https://mydukaan.io/" ><img src={logo} alt="logo" /></a>


                <section className="right-section">
                    <a className="sign-in" href="https://mydukaan.io/" >Sign In</a>
                    <a className="pc-link" href="https://mydukaan.io/">Dukaan for PC</a>
                </section>
            </header>

        </div>
    )
}