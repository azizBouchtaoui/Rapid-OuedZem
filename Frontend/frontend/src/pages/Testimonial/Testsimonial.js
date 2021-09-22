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
           DatePickerShow: 0,
            fromOptions : [],
           selectedOption :'option1'
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
  radioHandler = (status) => {
    this.setState({ status });
  };
 
  
  handleOptionChange = (changeEvent)=> {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
      render(){
         this.selectedOption = 'option1'
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
                      <Row>
                        <Col>
                        <Form.Group  className="Form-CheckBox" >
                        <div className="radio">
      <label>
        <input type="radio" value="option1" 
                      checked={this.state.selectedOption === 'option1'} 
                      onChange={this.handleOptionChange} />
        Option 1
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" 
                      checked={this.state.selectedOption === 'option2'} 
                      onChange={this.handleOptionChange} />
        Option 2
      </label>
    </div>
                           </Form.Group> 
                        
                        </Col> 
                      </Row>
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
                              options={this.state.fromOptions}
                               /> 
                        </Form.Group>
                    
                        </Col>
                    </Row>
                    <Row>
                      <Col>
                      <div>
                      {
                  this.state.selectedOption==='option1' ? 
                    (<div className="div1">
                      <Form.Group className="departure-Date">
                      <Form.Label className="Label-DatePicker">Date de départ</Form.Label>
                         <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                      <DatePicker
                      
                       
                        minDate={new Date()}                   
                        value={this.state.date } 
                        onChange={value => this.setState({ date: value })} />
                    </div>
                      </Form.Group>
                      </div>) 
                    : (<div className="div2">
                      <Form.Group className="return-Date"> 
                      <Form.Label className="Label-DatePicker" >Date de retour</Form.Label>
                      <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                      <DatePicker
                           
                        minDate={this.state.date}                      
                        value={this.state.EndDate} 
                        onChange={value => this.setState({ EndDate: value })} />
                       </div>
                       </Form.Group>
                       </div>)
                   }
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