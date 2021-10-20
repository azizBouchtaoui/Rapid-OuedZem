import React, { useCallback, useEffect, useState,useContext, useRef } from "react";
import "./Navbar.css";
import $ from "jquery";
import { HashLink } from "react-router-hash-link";
import {store, useGlobalState} from 'state-pool';
 
import Home from "../../pages/Home/Home";
const Navbar = ( ) => {
  /*
  const myRef = useRef()
  useEffect(()=>{
    const divElemet = myRef.current
    console.log(divElemet)
  })
 */

 
  const [show, setShow] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setShow(true);
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
  

  function animation() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
    //  console.log(this)
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
       
    });
  }
  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);
 


var [returnValue, setReturnValue] = useState(1);
 
 const  activeTab = useCallback (()=>   {

  var mainSectionComp = $("#MainSection");
  var destinationsComp = $("#Destinations");
  var serviceComp = $("#Services");
  var footerComp = $("#About");

  
  if(document.documentElement.scrollTop >=0 &&  document.documentElement.scrollTop<=mainSectionComp[0].clientHeight){
    setReturnValue(1);
     animation()
  }
  else if(   document.documentElement.scrollTop   > mainSectionComp[0].clientHeight && document.documentElement.scrollTop <= destinationsComp[0].clientHeight+mainSectionComp[0].clientHeight-200){
    setReturnValue(2);
    animation()
  } else if(document.documentElement.scrollTop >   destinationsComp[0].clientHeight+mainSectionComp[0].clientHeight-200 && document.documentElement.scrollTop <= serviceComp[0].clientHeight+destinationsComp[0].clientHeight+mainSectionComp[0].clientHeight-135 ){
    setReturnValue(3);
    animation()
  }else if(document.documentElement.scrollTop> serviceComp[0].clientHeight+destinationsComp[0].clientHeight+mainSectionComp[0].clientHeight-135 ){
    setReturnValue(4);
    animation()
  }

  
  },[]);
useEffect(()=>{
    window.addEventListener('scroll',activeTab)
}, [activeTab])
 


/*

const activeTab = () => {
 
  var returnValue =1
  console.log(position*1000)
  if((position*1000)>=0 && (position*1000)<= 350){
      returnValue=1;
      animation();
  }
  else if((position*1000)>355 && (position*1000)<= 770){
    returnValue= 2;
    animation();
  } else if((position*1000)>770 && (position*1000)<= 996){
    returnValue= 3;
    animation();
  }else if((position*1000)>996 && (position*1000)<= 1000){
    returnValue= 4;
    animation();
  }
  return returnValue;
  }
*/





  return (
    <nav className={` ${    "navbar navbar-expand-lg navbar-mainbg"} `}>
      <HashLink smooth to="/#MainSection" className="navbar-brand navbar-logo">
        Rapid OUEDZEM
      </HashLink>

      <button
        className="navbar-toggler"
        onClick={function () {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className={"collapse navbar-collapse"} id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className= {(returnValue===1) ?  "nav-item active"  :  "nav-item" }  >
            <HashLink  className="nav-link" smooth to="/#MainSection"     
        >
              <i className="fas fa-tachometer-alt"></i>Home
            </HashLink>
          </li>
          <li className= {(returnValue===2) ?  "nav-item active"  :  "nav-item" }  >
            <HashLink smooth to="/#Destinations" className="nav-link" >
              <i className="far fa-chart-bar"></i>Destinations
            </HashLink>
          </li>
          <li className= {(returnValue===3) ?  "nav-item active"  :  "nav-item" }   >
            <HashLink smooth to="/#Services" className="nav-link">
              <i className="far fa-clone"></i>Services
            </HashLink>
          </li>
          <li className={(returnValue===4) ?  "nav-item active"  :  "nav-item" } >
            <HashLink smooth className="nav-link" to="/#About">
              <i className="far fa-copy"></i>Contact Us
            </HashLink>
          </li>
          <li className= "nav-item  ">
            <HashLink  smooth className="nav-link" to="/#About">
              <i className="far fa-address-book"></i>About
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
