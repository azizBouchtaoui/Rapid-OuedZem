
import React from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services";

import './Home.css';

 const Home = () => {
     return (
         < >
        <MainSection/>
        <Cards/>
        <Services/>
        <Footer/>
        </>
     )
 }
 export default Home;