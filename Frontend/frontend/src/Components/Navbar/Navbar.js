import React , {useCallback,useEffect,useState} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import { Link } from 'react-scroll';
const Navbar = () => {

  const [show, setShow] = useState(true); 
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShow(true);;
      } else if (y < window.scrollY) {
        setShow(false);
      }
      setY(window.scrollY);
    },
    [y]
  );
  
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);





  function animation(){
    
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
 useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);




  return (
  <nav className={ ` ${show && 'navbar navbar-expand-lg navbar-mainbg'} `}>
    
      <Link className="navbar-brand navbar-logo" to="MainSection" exact>
        Rapid OUEDZEM
      </Link>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className={"collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <Link className="nav-link" to="MainSection" exact>
                <i 
                className="fas fa-tachometer-alt">
                </i>Home
              </Link>
            </li>           
            <li className="nav-item">
              <Link  className="nav-link" to="Services" smooth={true} duration={100} > 
              <i 
                className="far fa-clone">
                </i>Services</Link>
                
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/testimonial" exact>
                <i 
                className="far fa-chart-bar">
                </i>Testimonial
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About"  exact>
                <i 
                className="far fa-copy">
                </i>Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="About" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </Link> 
            </li>

        </ul>
      </div>
  </nav>
  )
}
export default Navbar;