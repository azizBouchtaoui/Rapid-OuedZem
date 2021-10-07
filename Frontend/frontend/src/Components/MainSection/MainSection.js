import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "./MainSection.css";
const MainSection = () => {
  return (
    <div className="hero-container" id="MainSection">
      <video src="/Videos/video-6.mp4" autoPlay loop muted />
      <h1>Planifiez l'aventure de demain dès aujourd'hui</h1>
      <p>
        {" "}
        Recherchez les destinations les plus sûres. Réservez avec flexibilité.
      </p>
      <div className="hero-btns">
        <Link to="Destinations" smooth={true} duration={100}>
          <button className="btnt">
            Explorez <i className="fab fa-wpexplorer" />
          </button>
        </Link>

        <NavLink to="/Reservation" exact>
          <button className="btnt">
            Reservation <i className="fab fa-wpexplorer" />
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default MainSection;
