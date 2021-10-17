
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
      setHeight(refa.current.node.clientHeight)
      console.log("hei : " +height)
    })


     
    function  Tit(){
        
        console.log(refb.current.node.clientHeight)
      
    };
    
      useEffect(()=>{
         
          window.addEventListener('scroll',Tit)
         
      })
     return (
          < >
             <InView as="div"  ref={refa} onChange={() =>{setInView(1); console.log('Inview:', inView)}}>
            <MainSection />


            </InView>
             <InView as="div" ref={refb} onChange={() =>{setInView(2); console.log('Inview:', inView)}}>
           
            <Cards/>
         
            </InView>

             <InView as="div" ref={refc} onChange={() =>{setInView(3); console.log('Inview:', inView)}}>
              
            <Services />
             
             </InView>

             <InView as="div" ref={refd} onChange={() =>{setInView(4); console.log('Inview:', inView)}}>
          
            <Footer  />
        
        </InView>
        </>
         
     )
 }
 export default Home;