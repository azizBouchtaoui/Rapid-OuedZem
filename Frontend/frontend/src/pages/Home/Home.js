
import React, {useState} from "react";
import Cards from "../../Components/Cards/Card";
import MainSection from "../../Components/MainSection/MainSection";
import Footer from "../../Components/Footer/Footer"
import Services from "../../Components/Services/Services"; 
import { InView } from 'react-intersection-observer';
import './Home.css';

 const Home = () => {
     
    var  [inView, setInView] =  useState()
    const [MainSection, setMainSection] = useState();
    const [Destinations,setDestinations] =useState();
    const [Service, setService] = useState();
    const [Footer,setFooter] = useState();
    
        function display(visible){
            setInView(visible)
            console.log('Inview:', inView)
        }
     return (
          <>
             <InView as="div" onChange={(inView, entry) => console.log('Inview:', inView)}>


            <MainSection  />
           </InView>
           <InView as="div" onChange={(Destinations, entry) => console.log('Dest: ', Destinations)}>

            <Cards/>
        
            </InView>
            <Services/>
            <Footer/>

        </>
         
     )
 }
 export default Home;