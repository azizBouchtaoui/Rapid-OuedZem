
import React, {useState, useRef,useEffect} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { InView } from 'react-intersection-observer';
import './Home.css';

 const Home = () => {
     
    var  [inView, setInView] =  useState( )


    var [MainSectionxx, setMainSection] = useState(false);
    var [Destinationsxx,setDestinations] =useState(false);
    var [Servicexx, setService] = useState(false);
    var [Footerxx,setFooter] = useState(false);
    

    const [height, setHeight] = useState(0)



    const refa = useRef(null)
    const refb = useRef(null)
    const refc= useRef(null)
    const refd= useRef(null)

    useEffect(() => {
       
    })


     
    function  Tit(){
      if(MainSectionxx && !Destinationsxx && !Servicexx && !Footerxx){
        console.log("Main")
      }else if (MainSectionxx && Destinationsxx && !Servicexx && !Footerxx ){
        console.log("Destination")
      }else if(MainSectionxx && Destinationsxx && Servicexx && !Footerxx){
        console.log("Service")
      }else if(!MainSectionxx && !Destinationsxx && !Servicexx && Footerxx){
        console.log("footer")
      }


 
      
    };
    
      useEffect(()=>{
         
          window.addEventListener('scroll',Tit)
         
      })
     return (
          < >
             <InView as="div"  ref={refa} onChange={(MainSectionxx) =>{setMainSection(MainSectionxx); }}>
            <MainSection />


            </InView>
             <InView as="div" ref={refb} onChange={(Destinationsxx) =>{setDestinations(Destinationsxx); }}>
           
            <Cards/>
         
            </InView>

             <InView as="div" ref={refc} onChange={(Servicexx) =>{setService(Servicexx);}}>
              
            <Services />
             
             </InView>

             <InView as="div" ref={refd} onChange={(Footerxx) =>{setFooter(Footerxx);}}>
          
            <Footer  />
        
        </InView>
        </>
         
     )
 }
 export default Home;