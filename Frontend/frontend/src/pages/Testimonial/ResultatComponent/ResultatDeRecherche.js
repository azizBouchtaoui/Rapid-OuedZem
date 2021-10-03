import React ,{ Component } from "react";
import './ResultatDeRecherche.css'
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
class  ResultatDeRecherche  extends Component{
     
      
    render(){
          
         return(
            <div className="ResultContainer">
            <Container>
                <Row>
                    <Col>first 
                    <p>
                       test {this.props.from} 
                          {this.props.to}

                    </p>
                    </Col>
                    <Col>second
                     <p>
                        {this.props.hour}
                    </p>
                     <p>
                        {this.props.places}
                    </p>
                    </Col>
                    <Col>Third 
                    <p>
                        {this.props.option}
                    </p>
                    <p>
                        {this.props.dateStart}
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
             )

         
     }

}

export default ResultatDeRecherche
