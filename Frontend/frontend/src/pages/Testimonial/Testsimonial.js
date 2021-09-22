import React, { Component } from 'react';
import Select from 'react-select';
import { Villes } from '../../Services';
import './Testimonial.css'
import { Button, Form, Col, Row, Table,Container } from 'react-bootstrap'
import { Picklist, PicklistOption, DatePicker } from 'react-rainbow-components';
import moment from 'moment'
  class Testimonial  extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            fromOptions : [],
           selectedOption :null
        };
    } 
   
    componentDidMount(){
      
      Villes()
          .then(response =>{ 
            const  options = []
            response.map((option,i )=>{
              return options.push({value: option.name,  label: option.label, id: option._id})
            })        
            this.setState({ fromOptions: options})
           })
          .catch((err )=>{
            console.log(err)
          });
    }
    handleDateChange = dt => {
      const date = moment(dt).format('YYYY-MM-DD')
      this.setState({ date: date })

      const EndDate= moment(dt).format('YYYY-MM-DD')
      this.setState({ EndDate: EndDate })
  }       
      render(){
            return (
              <div className="container_reservation">

                
              <div className="Section--center"> 
              <div className="row--center" >
                <div className="first-col">
                  <h1 className="text-center" >
                      J'achète mon billet 
                        </h1> 
                </div>
                <div className="second-col">
                  <div className="ReservationForm">
                    <div className="Select-form">
                    <Form >
                    <Container>
                    <Row  className="rowSelect" >
                      <Col  className="Col-From">
                      <Form.Group  className="Col-From"  controlId="from">
                            <Form.Label>Lieu de depart</Form.Label>
                         
                            <Select 
                              defaultValue={this.state.selectedOption}
                              onChange={this.setState.selectedOption}  
                              options={this.state.fromOptions} /> 
                        </Form.Group> 
                      </Col>
                      <Col md="auto">   
                        </Col>
                      <Col  className="Col-To">
                      <Form.Group  className="Col-To" controlId="to">
                            <Form.Label>Destination</Form.Label>
                                                     
                            <Select className="select__control"  
                              defaultValue={this.state.selectedOption}
                              onChange={this.setState.selectedOption}  
                              options={this.state.fromOptions} /> 
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                      <DatePicker
                        onChange={this.handleDateChange}
                        minDate={new Date()}                   
                        value={this.state.date} 
                        onChange={value => this.setState({ date: value })} />
                    </div>
                      </Col>
                      <Col>
                      <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                      <DatePicker
                        onChange={this.handleDateChange}
                        minDate={this.state.date}                      
                        value={this.state.EndDate} 
                        onChange={value => this.setState({ EndDate: value })} />
                       </div>
                      </Col>
                    </Row>
                    </Container>
                  </Form>

                   

                    </div>
                    
                  </div>
                  
                </div>
                        
              </div>
                
                </div>
              </div>
     )
      }
      
 }
 export default Testimonial;