import React ,{ Component } from "react";
import './ResultatDeRecherche.css'
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
class  ResultatDeRecherche  extends Component{
     
      
    render(){
          
         return(
            <div className="ResultContainer">
                
            <Container >
            
                <Row className="ContainerResult">
                    <Col> 
                        <div   style={{fontFamily: "'Courier New', monospace"}}>
                        Ma gare de départ </div>
                    <p style={{fontFamily: "Tahoma, sans-serif", fontSize:"20px", color: 'rgb(39, 0, 112)'}}>
                        {this.props.from} 
                    </p>
                    <div className="TimeContainerResult">
                    <b>{this.props.hour}</b>
                    
                    </div>
                    <div className="TimeContainerResult">
                        {this.props.dateStart}
                    </div>
                    
                    </Col>
                    <Col   className="ProgressBar">
                    <ProgressBar
                        
                    percent={80}
                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                >
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="/Images/bus1.png"
                        />
                    )}
                    </Step>
                   
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="/Images/bus3.png"
                        />
                    )}
                    </Step>
                </ProgressBar>
                    </Col>
                    <Col>
                    <div   style={{fontFamily: "'Courier New', monospace"}}>
                    Ma gare d'arrivée
                     </div>
                    
                   
                    <p style={{fontFamily: "Tahoma, sans-serif", fontSize:"20px",color: 'rgb(39, 0, 112)'}}>
                    {this.props.to}
                    </p>
                    
                    </Col>
                </Row>
                <Row className="SecondContainerResult">
                    <Col>
                        <div className="Places">
                            {this.props.places}
                        </div>
                    </Col>
                    <Col  >
                    <button className="buttonReserver">
                    Réserver <i class="far fa-check-circle"></i>


                          </button>
                    </Col>
                </Row>
            </Container>
        
        </div>
             )

         
     }

}

export default ResultatDeRecherche
