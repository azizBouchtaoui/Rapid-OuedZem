import React from 'react'
import { Link } from 'react-scroll'
import {ImCancelCircle } from 'react-icons/im'
import {GiHealthPotion } from 'react-icons/gi'
import {FaAssistiveListeningSystems} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import './Services.css';

const Services = () =>{
    return (
       < div id="Services">
            < IconContext.Provider value={{ color:'#fff',size:64}} > 
            <div className="section1" >
                <div className="section1__wrapper">
                    <h1 className="section1__heading">Services</h1>
                    <div className="section1__Container">
                        <Link to="home"  smooth={true} duration={1000} className="section1__Container-card">
                           
                            <div className="section1__Container-cardInfo">                            
                            <div  className='icon'>
                                
                                <ImCancelCircle/>
                            </div>
                            <h4>Annulation de Voyage </h4>
                            <input  placeholder="Referece" className="section__Input"></input>
                            <input  placeholder=" e-mail" type="email"  className="section__Input"></input>
                      
                            </div>
                        </Link>
                        <Link to="home"  smooth={true} duration={1000} className="section1__Container-card">
                           
                            <div className="section1__Container-cardInfo">                            
                                <div  className='icon'>
                                <GiHealthPotion/>
                                </div>
                                <h4>Conditions d'après-vente </h4>
                                <p> Je veux en apprendre plus sur les conditions d'après-vente et souhaite tout savoir sur les possibilités d'annulation et d'échange que m'offre mon billet ?</p>
                                <p>Je suis au bon endroit !</p>
    
                            </div>
                        </Link>
                        <Link to="home"  smooth={true} duration={1000} className="section1__Container-card">
                           
                           <div className="section1__Container-cardInfo">                            
                           <div  className='icon'>
                            
                               <FaAssistiveListeningSystems/>
                           </div>
                           <h4>Assistance et Réclamation </h4>
                           </div>
                       </Link>
                    </div>
                </div>
            </div>
      
        </IconContext.Provider>
    )
       </div> 
    )
}

export default Services;