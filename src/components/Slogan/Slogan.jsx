import './Slogan.css'
import Union from '../../assets/Union.svg'
import Path from '../../assets/Path.svg'
export function Slogan() {
    const slogans = [
        "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.", "There is no Sore it will Not Heal, No cool it will not Subdue.", "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "Review the facts cool is the best.",
        "Review the facts cool is the best.",
        "Review the facts cool is the best.",
        "Review the facts cool is the best.",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "coziness building for tomorrow",
        "Review the facts cool is the best.",
        "Review the facts cool is the best.",
        "There is no Sore it will Not Heal, No cool it will not Subdue.", "There is no Sore it will Not Heal, No cool it will not Subdue.",
        "Review the facts cool is the best.",
    ]
    return (
        <div className="slogan-outer">
            <section className="slogan-inner">
                <h1 className="slogan-heading">Free slogan maker</h1>
                <p className="slogan-making">Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>

                <section className="search-slogan">
                    <label className="input-slogan">Word for your slogan</label>
                    <input className="search-box" placeholder="cozy" />
                    <img src={Union} alt="Clear" className="clear-btn" />
                    <button className="slogan-generate-btn">Generate slogans</button>
                </section>
                <section className="slogan-list">
                    <div className="slogan-section-heading">
                        <h5 className="slogan-generated-heading">We have generated 1,023 slogans for “cozy”</h5>
                        <button className="download-slogans-btn">Download all</button>
                    </div>
                    <section className="slogan-list-outer">
                        <ul className="slogan-list-container">
                            {slogans.map((slogan, index) =>
                                <li key={index} className="slogan">{slogan}</li>
                            )}
                        </ul>
                        <p className="slogan-prompt copy">Click to copy</p>
                        <p className="slogan-prompt copied">Copied!</p>

                    </section>
                </section>
                <section className="pagination">
                    <ul className="page-list">
                        <li className=" page-number selected">1</li>
                        <li className="page-number not-selected">2</li>
                        <li className="page-number not-selected">3</li>
                        <li className="page-number not-selected">...</li>
                        <li className="page-number not-selected">21</li>

                    </ul>
                    <button className="next-page-button">Next <img src={Path} alt="Next" /> </button>
                </section>

            </section>
        </div>
    )
}