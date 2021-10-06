import React ,{ Component } from "react";
import './ResultatDeRecherche.css'
import {  Col, Row,   Container } from "react-bootstrap";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import moment from "moment";
class  ResultatDeRecherche  extends Component{
     
      
    render(){
          let temp= parseFloat((parseFloat(this.props.hour).toFixed(2)))
      let result 
      
      temp =temp+3
          if(temp>=12 && this.props.hour.slice(6,8) === "am" ){

              result= temp-12
              if(result>=0 && result <1){
                  result= temp 
                  result = parseFloat(result).toFixed(2)+" pm"
              }else{
                result = parseFloat(result).toFixed(2)+" pm"
              }
             
          }else{
            result= temp  
            result = parseFloat(result).toFixed(2)+" am"
          }
          
          const date = moment(this.props.dateStart).format("DD-MM-YYYY");
            
         return(
            <div  id="hahah" className="ResultContainer">
                
            <Container >
            
                <Row className="ContainerResult">
                    <Col className="ColumnOfContainerResult"> 
                        <div   style={{fontFamily: "'Courier New', monospace",color:'#161473'}}>
                        Ma gare de départ </div>
                    <p style={{fontFamily: "Tahoma, sans-serif", fontSize:"20px", color: 'rgb(39, 0, 112)'}}>
                        {this.props.from} 
                    </p>
                    <div className="TimeContainerResult">
                    <b>{this.props.hour}</b>
                    
                    </div>
                    <div className="TimeContainerResult">
                        {date}
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
                        alt="Depart"
                        />
                    )}
                    </Step>
                   
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="/Images/bus3.png"  alt="Arrive"
                        />
                    )}
                    </Step>
                </ProgressBar>
                    </Col>
                    <Col className="ColumnOfContainerResult">
                    <div   style={{fontFamily: "'Courier New', monospace",color:'#161473'}}>
                    Ma gare d'arrivée
                     </div>
                    
                   
                    <p style={{fontFamily: "Tahoma, sans-serif", fontSize:"20px",color: 'rgb(39, 0, 112)'}}>
                    {this.props.to}
                    </p>
                    <div className="TimeContainerResult">
                    <b>{result}</b>
                    
                    </div>
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
                    Réserver <i className="far fa-check-circle"></i>


                          </button>
                    </Col>
                </Row>
  
            </Container>
        
        </div>
             )

         
     }

}

export default ResultatDeRecherche
