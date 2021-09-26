import React, { Component } from "react";
import Select from "react-select";
import { Time, Villes } from "../../Services";
import "./Testimonial.css";
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
import { Picklist, PicklistOption, DatePicker } from "react-rainbow-components";
import moment from "moment";
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
      from:'',
      to:''
    };
    this.handleFromSelectedChange = this.handleFromSelectedChange.bind(this);
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
handleChange = type => OptionSelected=>{
  
}

  handleDateChange = (dt) => {
    const date = moment(dt).format("YYYY-MM-DD");
    this.setState({ date: date });

    const EndDate = moment(dt).format("YYYY-MM-DD");
    this.setState({ EndDate: EndDate });
  };
  radioHandler = (status) => {
    this.setState({ status });
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };

  handleFromSelectedChange = (e) =>{
    console.log("From Selected !!");
    this.setState({from : e.target.value})
  
  }
/*
handleSubmit = (Data) =>{
  const state = this.state;
  console.Log(state.json());
}
*/
  
  
  
 
 
 
 
  render() {
    return (
      <div className="container_reservation">
        <video src="/Videos/video-3.mp4" autoPlay loop muted />

        <div className="Section--center">
          <div className="row--center">
            <div className="first-col">
              <h1 className="text-center">J'achète mon billet</h1>
              <p>
              Dans le cadre de la crise sanitaire imposée par la Covid-19, nous rappelons à nos clients qu’ils doivent disposer d’une attestation de déplacement officielle délivrées par les autorités pour leurs déplacements de et vers les villes sous restrictions.

              </p>
            </div>
            <div className="second-col">
              <div className="ReservationForm">
                <div className="Select-form">
                  <Form >
                    <Container>
                      <Row className="rowSelect">
                        <Col className="Col-From">
                          <Form.Group className="Col-From" controlId="from">
                            <Form.Label>Lieu de depart</Form.Label>

                            <Select
                              
                              options={this.state.fromOptions}
                              value={this.state.from}
                              onChange={this.handleFromSelectedChange}
                              getOptionLabel={(option) => `${option.label}`}
                            />
                          </Form.Group>
                        </Col>
                        <Col md="auto"></Col>
                        <Col className="Col-To">
                          <Form.Group className="Col-To" controlId="to">
                            <Form.Label>Destination</Form.Label>
                            <select style={{width:"200px;"}} onChange={this.handleFromSelectedChange}> {this.state.fromOptions.map((x)=>
                              <option 
                              key={x.key}
                               value={x.value}>
                                 {x.value}
                                 </option>
                            )} </select>
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
                                      value={this.state.date}
                                      onChange={(value) =>
                                        this.setState({ date: value })
                                      }
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
                            <Col className="select__controles">
                              <Select
                                className="select__controle"
                                defaultValue={this.state.SelectedTimeOption}
                                onChange={this.setState.SelecteTimeOption}
                                options={this.state.TimeOption}
                              />
                            </Col>
                          </div>
                        </Col>
                      </Row>

                      <Row className="row-btnt">
                        <button
                          className="btnt"
                          buttonStyle="btn--outline"
                          buttonSize="btn--large"
                         onclick={this.handleTest}
                        >
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
    );
  }
}
export default Testimonial;
