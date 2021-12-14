import './Footer.css';
import HeaderLogo from '../../assets/HeaderLogo.svg'
import Location from '../../assets/Location.svg'

export function Footer() {
    return (
        <footer className="footer-outer">
            <div className="footer-inner">
                <img src={HeaderLogo} alt="logo" className="footer-logo" />
                <section className="links-inner-container">
                    <a href="https://mydukaan.io/" className="external-link">Contact</a>
                    <a href="https://mydukaan.io/" className="external-link">FAQ's</a>

                </section>

                <section className="links-inner-container">
                    <a href="https://mydukaan.io/" className="external-link">Tutorials</a>
                    <a href="https://mydukaan.io/" className="external-link">Blog</a>

                </section>

                <section className="links-inner-container">
                    <a href="https://mydukaan.io/" className="external-link">Privacy</a>
                    <a href="https://mydukaan.io/" className="external-link">Banned Items</a>

                </section>

                <section className="links-inner-container jobs-container">
                    <a href="https://mydukaan.io/" className="external-link">About</a>
                    <a href="https://mydukaan.io/" className="external-link">Jobs</a>
                    <div className="job-count">3</div>

                </section>

                <section className="links-inner-container">
                    <a href="https://mydukaan.io/" className="external-link">Facebook</a>
                    <a href="https://mydukaan.io/" className="external-link">Twitter</a>
                    <a href="https://mydukaan.io/" className="external-link">Linkedin</a>
                </section>
            </div>
            <section className="rock-bottom-outer">
                {/* <div className="rock-bot"> */}

                {/* </div> */}
                <p>Dukaan 2020, All rights reserved.</p>
                <div className="flag-outer">Made in  <img src={Location} alt="Indian flag" className="location-flag" /> </div>
            </section>

        </footer>
    )
}