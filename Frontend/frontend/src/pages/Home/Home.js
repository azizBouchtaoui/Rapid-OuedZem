
import React, {useState, useRef,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { InView } from 'react-intersection-observer';
import './Home.css';

 const Home = () => {
     
    var  [inView, setInView] =  useState("false")


    var [MainSectionxx, setMainSection] = useState(false);
    var [Destinationsxx,setDestinations] =useState(false);
    var [Servicexx, setService] = useState(false);
    var [Footerxx,setFooter] = useState(false);
    
    const ref = useRef();
    function  Tot(){
        
        console.log(inView)
    }
      useEffect(()=>{
          window.addEventListener('scroll',Tot)
      })
     return (
          < >
             <InView as="div" onChange={() =>{setInView(1); console.log('Inview:', inView)}}>
            <MainSection />


            </InView>
             <InView as="div" onChange={() =>{setInView(2); console.log('Inview:', inView)}}>
           
            <Cards/>
         
            </InView>

             <InView as="div" onChange={() =>{setInView(3); console.log('Inview:', inView)}}>
              
            <Services />
             
             </InView>

             <InView as="div" onChange={() =>{setInView(4); console.log('Inview:', inView)}}>
          
            <Footer  />
        
        </InView>
        </>
         
     )
 }
 export default Home;