import React, { Component } from 'react';
import './CardCompanies.css';
import { Button, Container, Row, Col, Card, CardTitle} from 'reactstrap';

class CardCompanies extends Component {
   
    render() {
        return (
            <Container>
                <Card className="CardComp">
                    <CardTitle><b>{this.props.companyname}</b><Button onClick={this.props.hapus} className="close" close /></CardTitle>
                    <hr />

                    <Row>
                        <Col>
                            <b>Address:</b><br/>
                            <p>{this.props.address}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Revenue:</b><br/>
                            <p>{this.props.revenue}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <b>Phone No:</b><br/>
                            <p><span>+( {this.props.areaCode} ) </span>{this.props.phone}</p>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    }
}

export default CardCompanies;