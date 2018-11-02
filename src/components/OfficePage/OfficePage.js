import React, { Component } from 'react';
import './OfficePage.css';
import { Button, Container, Row, Col, Card, CardTitle } from 'reactstrap';
import CardOffice from '../CardOffices/CardOffice';
import App from '../../App';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OfficePage extends Component {

    render() {
        return (
            <Container>
                <Card className="WrapperCard">
                
                    <Row>
                        <Col><h2>Alibaba</h2><hr /></Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Address:</b><br />
                            <p>Jalan Pemuda No.24</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Revenue:</b><br />
                            <p>9999999999</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="9">
                            <b>Phone No:</b><br />
                            <p>+(62)89667529999</p><br />
                        </Col>
                        <Col xs="3">
                            <Router>
                                <div>
                                <Link to="/">
                                    <Button className="back">Back to Overeview</Button>
                                </Link>
                                
                                </div>
                            </Router>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><h2>Offices</h2></Col>
                    </Row>
                    <Row>
                        <Col>
                            <CardOffice
                                key="1"
                                officename="Hong Kong Office"
                                lat="0.82"
                                long="0.67"
                                date="6/20/2003"
                            />
                        </Col>
                        <Col>
                            <CardOffice
                                key="1"
                                officename="Hong Kong Office"
                                lat="0.82"
                                long="0.67"
                                date="6/20/2003"
                            />
                        </Col>
                        <Col>
                            <CardOffice
                                key="1"
                                officename="Hong Kong Office"
                                lat="0.82"
                                long="0.67"
                                date="6/20/2003"
                            />
                        </Col>
                    </Row>

                </Card>
            </Container>
        );
    }
}

export default OfficePage;