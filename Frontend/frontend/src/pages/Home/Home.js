
import React, {useState,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { useInView } from 'react-intersection-observer';
import './Home.css';
 
 

 const Home = () => {
  
  
     return (
      
      
<>
     
   
   <section  id="MS"  >
        
            <MainSection   />
        </section>   
          <section id="CRDS"  >
           <Cards  className="crds" />
        </section>
         
          <section id="SRVS"   >
            
              
            <Services className="srvs" />
        </section  >
             
           <section id="FTR">

            <Footer  className="ftr" />
           </section>
 
         </>
     )
 }
 export default Home;