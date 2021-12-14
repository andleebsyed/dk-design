import './Products.css'
import PrivacyPolicy from '../../assets/PrivacyPolicy.svg'
import TermsAndConditions from '../../assets/TermsAndConditions.svg'
import DomainNameGenerator from '../../assets/DomainNameGenerator.svg'
import InvoiceGenerator from '../../assets/InvoiceGenerator.svg'

export function Products() {
    return (
        <div className="products-outer">
            <h1 className="products-heading">Try our other free products</h1>
            <div className="cards-outer">
                <section className="product-card">
                    <img src={PrivacyPolicy} alt="privacy policy" />
                    <h5 className="product-name">Privacy Policy Generator</h5>
                    <p className="product-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                </section>
                <section className="product-card">
                    <img src={TermsAndConditions} alt="Terms and conditions" />
                    <h5 className="product-name">Terms & Conditions Generator</h5>
                    <p className="product-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                </section>
                <section className="product-card">
                    <img src={DomainNameGenerator} alt="Domain name generator" />
                    <h5 className="product-name">Domain Name Generator</h5>
                    <p className="product-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                </section>
                <section className="product-card">
                    <img src={InvoiceGenerator} alt="Invoice Generator" />
                    <h5 className="product-name">Invoice Generator</h5>
                    <p className="product-description">Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
                </section>
            </div>

        </div>
    )
}