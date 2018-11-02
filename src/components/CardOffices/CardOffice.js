import React, { Component } from 'react';
import './CardOffice.css';
import { Button, Container, Row, Col, Card, CardTitle} from 'reactstrap';

class CardOffice extends Component {
   
    render() {
        return (
            <Container>
                <Card className="CardComp">
                    <CardTitle><b>{this.props.officename}</b><Button onClick={this.props.hapus} className="close" close /></CardTitle>
                    <hr />

                    <Row>
                        <Col>
                            <b>Location:</b><br/>
                            <p>Lat : -{this.props.lat} </p>
                            <p>Long : -{this.props.long}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Office Start Date:</b><br/>
                            <p>{this.props.date}</p>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}

export default CardOffice;