import React, { Component } from 'react';
import './App.css';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import CardCompanies from './components/CardCompanies/CardCompanies';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {

  constructor() {
    super()
    this.state = {isCreate: false};
    this.state = {
      companyprofile: [
        {
          key: "",
          companyname: "",
          address: "",
          revenue: "",
          areaCode: "",
          phone: "",
        },
      ]
    }
  }

  componentDidMount() {
    this.setState({
      companyprofile: []
    })
  }

  setcompanyname = (element) => {
    this.setState({
      companyname: element.target.value
    })
  }

  setaddress = (element) => {
    this.setState({
      address: element.target.value
    })
  }

  setrevenue = (element) => {
    this.setState({
      revenue: element.target.value
    })
  }

  setareaCode = (element) => {
    this.setState({
      areaCode: element.target.value
    })
  }

  setphone = (element) => {
    this.setState({
      companyphone: element.target.value
    })
  }

  addCompany = () => {
    this.setState({isCreate: true});
    if (window.confirm("Add this company data ?")) {
      const copyarray = Object.assign([], this.state.companyprofile);
      copyarray.push({
        companyname: this.state.companyname,
        address: this.state.address,
        revenue: this.state.revenue,
        areaCode: this.state.areaCode,
        phone: this.state.companyphone,
      });

      this.setState({
        companyprofile: copyarray
      });
    } else {
    }

  }

  deleteCompany = (index) => {
    if (window.confirm("Delete this company data ?")) {
      const copyarray = Object.assign([], this.state.companyprofile);
      copyarray.splice(index, 1);
      this.setState({
        companyprofile: copyarray
      });
    } else {
    }
  }

  render() {

    let card = this.state.companyprofile.map((cardelement, index) => {
      return (
        <Col>
          <CardCompanies
            key={cardelement.companyname}
            companyname={cardelement.companyname}
            address={cardelement.address}
            revenue={cardelement.revenue}
            areaCode={cardelement.areaCode}
            phone={cardelement.phone}
            hapus={this.deleteCompany.bind(this, index)}
          />
        </Col>
      )
    });

    return (
      <div id="Container">
        <Row>
          <Col xs="6">
            <Container className="CardForm">
              <Container>
                <h4>Create Company</h4><br />
                <Form>
                  <FormGroup>
                    <Label for="Name">Name</Label>
                    <Input name="Name" id="Name" placeholder="name" onBlur={this.setcompanyname} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Address">Address</Label>
                    <Input name="Address" id="Address" placeholder="address" onBlur={this.setaddress} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Revenue">Revenue</Label>
                    <Input name="Revenue" id="Revenue" placeholder="revenue" onBlur={this.setrevenue} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="PhoneNo">Phone No</Label>
                    <Row>
                      <Col xs="3">
                        <Input name="areacode" id="areacode" placeholder="code" onBlur={this.setareaCode} required />
                      </Col>

                      <Col xs="9">
                        <Input name="number" id="number" placeholder="number" onBlur={this.setphone} required />
                      </Col>
                    </Row>
                  </FormGroup>
                  <Button color="success" onClick={this.addCompany}>Create</Button>
                </Form>
              </Container>
            </Container>
          </Col>
          <Col xs="6">
            <Container className="CardForm">
              <Container>
                <h4>Create Office</h4><br />
                <Form>
                  <FormGroup>
                    <Label for="Name2">Name</Label>
                    <Input name="Name2" id="Name2" placeholder="name" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Location">Location</Label>
                    <Row>
                      <Col xs="6">
                        <Input name="latitude" id="latitude" placeholder="lat" required />
                      </Col>
                      <Col xs="6">
                        <Input name="longitude" id="longitude" placeholder="long" required />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label for="StartDate">Office Start Date</Label>
                    <Input type="date" name="StartDate" id="StartDate" placeholder="office start date" required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="selCompany">Company</Label>

                    <Input type="select" name="selCompany" id="selCompany" required>
                      <option>Tayo</option>
                    </Input>
                  </FormGroup>
                  <Button color="success">Create</Button>
                </Form>
              </Container>
            </Container>
          </Col>
        </Row>

        <Row>
          <Col>
            <Container className="paddingBox" />
            <hr />
            <br />
          </Col>
        </Row>

        <h3>Companies</h3>
        <Row>
          {card}
        </Row>


      </div>
    );
  }
}



export default App;
