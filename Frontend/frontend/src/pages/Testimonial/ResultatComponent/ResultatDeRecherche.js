import React from 'react'
import './ResultatDeRecherche.css'
import { Button, Form, Col, Row, Table, Container } from "react-bootstrap";
const ResultatDeRecherche = (props) => {
    return (
        <div className="ResultContainer">
            <Container>
                <Row>
                    <Col>first 
                    <p>
                        {props.From}

                    </p>
                    </Col>
                    <Col>second
                     <p>

                    {props.To}
                    </p>
                    </Col>
                    <Col>Third 
                    <p>
                        {props.selectedOption}
                    </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ResultatDeRecherche
