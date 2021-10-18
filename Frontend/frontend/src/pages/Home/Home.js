
import React, {useState,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { useInView } from 'react-intersection-observer';
import './Home.css';
import { ImDisplay } from "react-icons/im";

 const Home = () => {
     
     

 
     
   
 
   
    var [section1Ref, section1InView] = useInView({ threshold: 0.5});
    var [section2Ref, section2InView] = useInView({ threshold: 0.5 });
    var [section3Ref, section3InView] = useInView({ threshold: 0.5 });

     
    const IsDisplay=()=> {
      
      console.log(section1InView+" "+section2InView+" "+section3InView )
        
     }
        
      
    
    useEffect(() => {
      window.addEventListener('scroll',IsDisplay)
    })
     return (
          < >
          <section   ref={section1Ref}>
        
            <MainSection  />
        </section>

          <section   ref={section2Ref}>
           <Cards  />
        </section>
         
          <section   ref={section3Ref}>
            
              
            <Services  />
        </section>
             
           
            <Footer  />
       
        </>
         
     )
 }
 export default Home;