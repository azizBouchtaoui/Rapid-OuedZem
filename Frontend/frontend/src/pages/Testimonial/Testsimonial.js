import React, { Component ,useEffect, useRef } from "react";
import Select from "react-select";
import { Time, Villes } from "../../Services";
import "./Testimonial.css";
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
import { Picklist, PicklistOption, DatePicker } from "react-rainbow-components";
import InputSpinner from "react-bootstrap-input-spinner";
import moment from "moment";
import ResultatDeRecherche from "./ResultatComponent/ResultatDeRecherche";
import { Link ,animateScroll} from 'react-scroll';
import { ToastContainer, toast,Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DatePickerShow: 0,
      fromOptions: [],
      selectedOption: "option1",
      range: undefined,
      maxWidth: 400,
      TimeOption: [],
      selectedTimeOption: [],
      From: "",
      To: "",
      StartDate: "",
      EndDate: "",
      Hour: "",
      Places: 1,
      isSelect: false
    }; 
 
  }
 
  scrollToBottom() {
    animateScroll.scrollToBottom({
      containerId: "options-holder"
    });
}
 
  componentDidMount() {
    
    Villes()
      .then((response) => {
        const options = [];
        response.map((option, i) => {
          return options.push({
            value: option.name,
            label: option.label,
            id: option._id,
          });
        });
        this.setState({ fromOptions: options });
      })
      .catch((err) => {
        console.log(err);
      });

    Time()
      .then((response) => {
        const optionsTime = [];
        response.map((optionTime, i) => {
          return optionsTime.push({
            value: optionTime.time,
            label: optionTime.time,
            id: optionTime._id,
          });
        });
        this.setState({ TimeOption: optionsTime });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleDateChangeStart = (event) => {
    const date = moment(event).format("YYYY-MM-DD");
    this.setState({ StartDate: date });
  };
  handleDateChangeEnd = (event) => {
    const date = moment(event).format("YYYY-MM-DD");
    this.setState({ EndDate: date });
  };

  radioHandler = (status) => {
    this.setState({ status });
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  handleSubmit = (event) => {
   
    event.preventDefault();
    event.stopPropagation();
    toast.warn("Veuillez remplir tous les champs s'il vous-plait !!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
    
    
   if(  this.state.From!= "" 
        && this.state.To != "" 
        &&  this.state.StartDate!=  "" 
        && this.state.EndDate != "" 
        && this.state.Hour!= "" 
        && this.state.Places!= 0 ){

     this.setState({isSelect:true})
    }else{
     this.setState({isSelect:false})
  }
  };
 
  render() {
   
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ?  '#5c655a': '#636964' ,
        padding: 10,
        borderRadius: 20,
      }),
      
      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
    
        return { ...provided, opacity, transition };
      }
    }


    return (
     
      <>
        <div className="container_reservation">
          <video src="/Videos/video-3.mp4" autoPlay loop muted />

          <div className="Section--center">
            <div className="row--center">
              <div className="first-col">
                <h1 className="text-center">J'achète mon billet</h1>
                <p>
                  Dans le cadre de la crise sanitaire imposée par la Covid-19,
                  nous rappelons à nos clients qu’ils doivent disposer d’une
                  attestation de déplacement officielle délivrées par les
                  autorités pour leurs déplacements de et vers les villes sous
                  restrictions.
                </p>
              </div>
              <div className="second-col">
                <div className="ReservationForm">
                  <div className="Select-form">
                    <Form onSubmit={(e) => this.handleSubmit(e)}>
                      <Container>
                        <Row className="rowSelect">
                          <Col className="Col-From">
                            <Form.Group className="Col-From" controlId="from">
                              <Form.Label>Lieu de depart</Form.Label>

                              <Select
                              styles={customStyles}
                              theme={(theme) => ({
                                ...theme,
                                borderRadius: 20,
                                colors: {
                                  ...theme.colors,
                                  primary25: '#E0FFFF',
                                  primary: '#ADD8E6',
                                },
                              })}
                              width='200px'
                                value={this.state.from}
                                options={this.state.fromOptions}
                                onChange={(target) =>
                                  this.setState({ From: target.value })
                                }
                              />
                            </Form.Group>
                          </Col>
                          <Col md="auto"></Col>
                          <Col className="Col-To">
                            <Form.Group className="Col-To" controlId="to">
                              <Form.Label>Destination</Form.Label>

                              <Select
                                styles={customStyles}
                                theme={(theme) => ({
                                  ...theme,
                                  borderRadius: 20,
                                  colors: {
                                    ...theme.colors,
                                    primary25: '#E0FFFF',
                                    primary: '#ADD8E6',
                                  },
                                })}
                                width='200px'
                                value={this.state.to}
                                options={this.state.fromOptions}
                                onChange={(target) =>
                                  this.setState({ To: target.value })
                                }
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <Form.Group className="Form-CheckBox">
                              <div className="radio">
                                <label className="radio-label">
                                  Allez Simple
                                  <input
                                    className="CheckBox-radio1"
                                    type="radio"
                                    value="option1"
                                    checked={
                                      this.state.selectedOption === "option1"
                                    }
                                    onChange={this.handleOptionChange}
                                  />
                                </label>

                                <label className="radio-label">
                                  Allez Routeur
                                  <input
                                    className="CheckBox-radio2"
                                    type="radio"
                                    value="option2"
                                    checked={
                                      this.state.selectedOption === "option2"
                                    }
                                    onChange={this.handleOptionChange}
                                  />
                                </label>
                              </div>
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <div>
                              {this.state.selectedOption === "option1" ? (
                                <div>
                                  <Form.Group className="departure-Date">
                                    <Form.Label className="Label-DatePicker">
                                      Selectionnez la Date de départ
                                    </Form.Label>
                                    <div className="rainbow-p-vertical_large rainbow-p-horizontal_xx-large rainbow-m-horizontal_xx-large">
                                      <DatePicker
                                        placeholder="cliquez pour sélectionnez"
                                        minDate={new Date()}
                                        value={this.state.StartDate}
                                        onChange={this.handleDateChangeStart}
                                      />
                                    </div>
                                  </Form.Group>
                                </div>
                              ) : (
                                <div>
                                  <Form.Group className="departure-Date">
                                    <Form.Label className="Label-DatePicker">
                                      Selectionnez la Date de départ et de
                                      routeur{" "}
                                    </Form.Label>
                                    <div
                                      className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
                                      style={{ maxWidth: "400" }}
                                    >
                                      <DatePicker
                                        id="datePicker-15"
                                        placeholder="cliquez pour sélectionnez"
                                        selectionType="range"
                                        formatStyle="large"
                                        variant="single"
                                        minDate={new Date()}
                                        value={this.state.range}
                                        onChange={(value) =>
                                          this.setState({ range: value })
                                        }
                                      />
                                    </div>
                                  </Form.Group>
                                </div>
                              )}
                              <Row   className="select__controles">
                                <Col>
                                  <Select
                                  styles={customStyles}
                                  theme={(theme) => ({
                                    ...theme,
                                    borderRadius: 20,
                                    colors: {
                                      ...theme.colors,
                                      primary25: '#E0FFFF',
                                      primary: '#ADD8E6',
                                    },
                                  })}
                                  
                                    className="select__controle"
                                  
                                    value={this.state.hour}
                                    options={this.state.TimeOption}
                                    onChange={(target) =>
                                      this.setState({ Hour: target.value })
                                    }
                                  />
                                </Col>
                                <Col sm="3" className="Numric-control">
                                  <InputSpinner
                                    type={"real"}
                                    precision={2}
                                    max={50}
                                    min={0}
                                    step={1}
                                    value={this.state.Places}
                                    onChange={(num) =>
                                      this.setState({ Places: num })
                                    }
                                    variant={"dark"}
                                    size="sm"
                                  />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>

                        <Row className="row-btnt">
                        <button className="btnt" onClick={() => this.Data, this.scrollToBottom}>
                            Recherche <i className="fab fa-wpexplorer" />
                          </button>
                       
                        </Row>
                      </Container>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {(this.state.isSelect )?  ( 

        <ResultatDeRecherche    
                              from={this.state.From}        
                              to = {this.state.To}
                              option = {this.state.selectedOption}
                              dateStart = {this.state.StartDate}
                              hour = {this.state.Hour}
                              places ={ this.state.Places}
        />)   : (<div >
                <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Zoom}
                limit={1}
                />
                </div>)
        }
      </>
    );
  }
}
export default Testimonial;
