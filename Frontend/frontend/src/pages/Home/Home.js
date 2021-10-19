
import React, {useState,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { useInView } from 'react-intersection-observer';
import './Home.css';
import ThemeProvider from "../../Components/Navbar/test";
import { SizeMe } from 'react-sizeme';

 const Home = () => {
  
    const [section1Ref, section1InView] = useInView({ threshold: 0.5});
    const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
    const [section3Ref, section3InView] = useInView({ threshold: 0.5 });

     
    const IsDisplay=()=> {
      
   //   console.log(section1InView+" "+section2InView+" "+section3InView )
     
     }
        
      
    
    useEffect(() => {
      window.addEventListener('scroll',IsDisplay)
    })
  
     
     return (
      
      
<>
 
   <section  id="MS" ref={section1Ref}>
        <div className="ms"></div>
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