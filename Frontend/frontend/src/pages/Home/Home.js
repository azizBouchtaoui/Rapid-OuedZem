
import React, {useState,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { useInView } from 'react-intersection-observer';
import './Home.css';
 
 

 const Home = () => {
  
    const [section1Ref, section1InView] = useInView({ threshold: 0.5});
    const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
    const [section3Ref, section3InView] = useInView({ threshold: 0.5 });

     
    const LanguageContext = React.createContext('en')
    const language = 'fr'

     
     return (
      
      
<>
     
   
   <section  id="MS" ref={section1Ref}>
        
            <MainSection   />
        </section>   
          <section id="CRDS"  ref={section2Ref}>
           <Cards  className="crds" />
        </section>
         
          <section id="SRVS"   ref={section3Ref}>
            
              
            <Services className="srvs" />
        </section  >
             
           <section id="FTR">

            <Footer  className="ftr" />
           </section>
 
         </>
     )
 }
 export default Home;