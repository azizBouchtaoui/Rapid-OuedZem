import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ContactUsPopupForm from "./Contact/Contact";
const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="footer-container" id="About">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          rejoignez la newsletter aventure pour recevoir nos meilleures offres
          promotionnelles
        </p>
        <p className="footer-subscription-text">
          Vous pouvez vous désabonner à tout moment.
        </p>
        <form>
          <button className="btn_Abonne" rtr="/Abonnes">
            S'abonner
          </button>
          <input type="email" placeholder="Email" className="footer-input" />
        </form>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Qui sommes-nous ? </h2>
            <Link to="/sign-up">Comment ça fonctionne</Link>
            <Link to="/">Témoignages</Link>
            <Link to="/">Carrières</Link>
            <Link to="/">Magazine</Link>
            <Link to="/">Conditions d'utilisation</Link>
          </div>
          <div className="footer-link-items">
            <h2>Nous contacter</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Commandites</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agence</Link>
            <Link to="/">Influenceur</Link>
          </div>
          <div className="footer-link-items">
            <h2>Nous suivre</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Rapide
              <i className="fas fa-bus" />
              <br />
              OUEDZEM
            </Link>
          </div>

          <div className="Contact_And_Company">
            <button className="pulse " onClick={togglePopup}>
              Contactez-nous
            </button>
            {isOpen && <ContactUsPopupForm handleClose={togglePopup} />}
            <div className="Company_Signat">
              <small className="website-rights">Rapide OZ© 2020</small>
            </div>
          </div>

          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              className="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Footer;
