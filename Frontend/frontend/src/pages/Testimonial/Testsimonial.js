import React, { Component } from "react";
import Select from "react-select";
import { Time, Villes } from "../../Services";
import "./Testimonial.css";
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
import { Picklist, PicklistOption, DatePicker } from "react-rainbow-components";
import NumericInput from 'react-numeric-input';
import moment from "moment";
import ResultatDeRecherche from "./ResultatComponent/ResultatDeRecherche"
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
      EndDate:'',
      Hour:''
    };
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
handleDateChangeStart = (event)=>{
  const date = moment(event).format("YYYY-MM-DD");
  this.setState({ StartDate: date });
}
handleDateChangeEnd =  (event)  => {  
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
    console.log(
      "Data : { Lieu de Depart : " +
        this.state.From +
        " Destination " +
        this.state.To +
        " L'option : " +
        this.state.selectedOption +
        " La Date : " +
        this.state.StartDate + 
        " Temp : "+ this.state.Hour
    );
    event.preventDefault();
    event.stopPropagation();
  };
  render() {
    const { from, to,hour } = this.state;
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
                                      onChange={this.handleDateChangeStart }
                                    />
                                  </div>
                                </Form.Group>
                              </div>
                            ) : (
                              <div>
                                <Form.Group className="departure-Date">
                                  <Form.Label className="Label-DatePicker">
                                    Selectionnez la Date de départ et de routeur{" "}
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
                            <Row  className="select__controles">

                          
                            <Col>

                              <Select
                                className="select__controle"
                                 
                                value={this.state.hour}
                             
                             
                                options={this.state.TimeOption}
                                onChange={(target)=>
                                  this.setState({Hour:target.value})}
                             />
                             </Col>
                             <Col     className="Numric-control" >
                          
                               <NumericInput 
                                className="Numiric-Input"
                                value="1" 
                                min={ 0 } 
                                max={ 50 } 
                                step={ 1 } 
                                precision={ 0 } 
                                size={ 5 } 
                                mobile
                                required
                                title="The title attr" 
                                inputmode="numeric" 
                                style={{
                                  wrap: {
                                      background: '#E2E2E2',
                                      boxShadow: '0 0 1px 1px #fff inset, 1px 1px 5px -1px #000',
                                      padding: '2px 2.26ex 2px 2px',
                                      borderRadius: '6px 3px 3px 6px',
                                      fontSize: 22
                                  },
                                  input: {
                                      borderRadius: '4px 2px 2px 4px',
                                      color: '#988869',
                                      padding: '0.1px 1x',
                                      border: '1px solid #ccc',
                                      marginRight: 4,
                                      display: 'block',
                                      fontWeight: 90,
                                      textShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)'
                                  },
                                  'input:focus' : {
                                      border: '1px inset #69C',
                                      outline: 'none'
                                  },
                                  arrowUp: {
                                      borderBottomColor: 'rgba(66, 54, 0, 0.63)'
                                  },
                                  arrowDown: {
                                      borderTopColor: 'rgba(66, 54, 0, 0.63)'
                                  }
                              }}
                              />
                               </Col>
                                </Row>
                          </div>
                        </Col>
                      </Row>

                      <Row className="row-btnt">
                        <button className="btnt" onClick={() => this.Data}>
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
        <ResultatDeRecherche/>
      </>
    );
  }
}
export default Testimonial;
