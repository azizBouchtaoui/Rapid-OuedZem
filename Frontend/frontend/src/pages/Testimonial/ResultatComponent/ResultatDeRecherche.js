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
                    <Col>Ma gare de départ 
                    <div>
                        {this.props.from} 
                         

                    </div>
                    <div>
                        {this.props.dateStart}
                    </div>
                    <div>
                    {this.props.hour}
                    
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
                    <Col>Ma gare d'arrivée 
                    <p>
                    {this.props.to}
                    </p>
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>
                            {this.props.places}
                        </p>
                    </Col>
                </Row>
            </Container>
        
        </div>
             )

         
     }

}

export default ResultatDeRecherche
