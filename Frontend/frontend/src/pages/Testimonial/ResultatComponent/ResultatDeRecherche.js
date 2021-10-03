import React ,{ Component } from "react";
import './ResultatDeRecherche.css'
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
import { ProgressBar, Step } from "react-step-progress-bar";
class  ResultatDeRecherche  extends Component{
     
      
    render(){
          
         return(
            <div className="ResultContainer">
                
            <Container>
                <Row>
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
                    <Col>second
                   
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
