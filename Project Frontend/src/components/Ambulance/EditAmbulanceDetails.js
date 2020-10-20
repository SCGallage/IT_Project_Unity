/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, {useEffect, useState} from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Form,
    Input,
    Row,
    Col, Breadcrumb, BreadcrumbItem
} from "reactstrap";
import axios from "axios";
import {withRouter} from "react-router-dom";

function EditAmbulanceDetails(props) {
    const[stateAmb,  setstateAmb] = useState({})
    useEffect(() => {
        let id =props.match.params.id;
        getAmbById(id);
    }, [props.match.params.id]);

    const getAmbById = id =>{
        axios
            .get('http://localhost:8080/api/ambulance/${id}')
            .then(d => {
                let amb = d.data;
                setstateAmb({
                    regno:amb.regno,
                    insuranceno:amb.insuranceno,
                    email:amb.email,
                    phone:amb.phone,
                    fname:amb.fname,
                    lname:amb.lname,
                    address:amb.address,
                    ciyt:amb.ciyt,
                    country:amb.country,
                    postalCode:amb.postalCode,
                    vdetails:amb.vdetails
                });
            })
            .catch(err => alert(err));
    };
        return (
            <>
                <div className="content">
                    <Breadcrumb tag="nav" listTag="div">
                        <BreadcrumbItem tag="a" href="/dashboard">Dashboard</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="/emergency-pro">Emergency</BreadcrumbItem>
                        <BreadcrumbItem active tag="/view-ambulance-details">Edit</BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center">Edit Ambulance Details</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                    }}>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Registration Number</label>
                                                    <Input
                                                        placeholder="Wp12345"
                                                        type="text"
                                                        required
                                                        value={stateAmb.regno}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({regno: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Vehicle Model</label>
                                                    <Input
                                                        placeholder="xxxxxxxxxx"
                                                        type="text"
                                                        required
                                                        value={stateAmb.insuranceno}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({insuranceno: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                                    <Input
                                                        placeholder="perera@email.com"
                                                        type="email"
                                                        required
                                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                        value={stateAmb.email}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({email: value})
                                                        }}/>
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Contact Number</label>
                                                    <Input
                                                        placeholder="+094761234432"
                                                        type="tel"
                                                        required
                                                        pattern="+094-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                                                        value={stateAmb.phone}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({phone: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>First Name</label>
                                                    <Input
                                                        placeholder="Perera"
                                                        type="text"
                                                        required
                                                        value={stateAmb.fname}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({fname: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Last Name</label>
                                                    <Input
                                                        placeholder="Thilakaratna"
                                                        type="text"
                                                        required
                                                        value={stateAmb.lname}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({lname: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Address</label>
                                                    <Input
                                                        placeholder="lake road, Matara"
                                                        type="textarea"
                                                        required
                                                        value={stateAmb.address}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({address: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="4">
                                                <FormGroup>
                                                    <label>City</label>
                                                    <Input
                                                        placeholder="Matara"
                                                        type="text"
                                                        required
                                                        value={stateAmb.city}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({city: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="px-md-1" md="4">
                                                <FormGroup>
                                                    <label>Country</label>
                                                    <Input
                                                        defaultValue="Sri Lanka"
                                                        placeholder="Country"
                                                        type="text"
                                                        required
                                                        value={stateAmb.country}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({country: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="4">
                                                <FormGroup>
                                                    <label>Postal Code</label>
                                                    <Input
                                                        placeholder="ZIP Code"
                                                        type="number"
                                                        required
                                                        value={stateAmb.postalCode}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({postalCode: value})
                                                        }}
                                                    />

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="8">
                                                <FormGroup>
                                                    <label>Details About Vehicle</label>
                                                    <Input
                                                        cols="80"
                                                        placeholder="Brand new. Very comforatable to travel long distance with the patient"
                                                        rows="4"
                                                        type="textarea"
                                                        required
                                                        value={stateAmb.vdetails}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateAmb({vdetails: value})
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="reset">
                                        Cancel
                                    </Button>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="submit">
                                        Edit
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col md="4">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />
                                        <a href="#pablo" onClick={e => e.preventDefault()}>
                                            <img
                                                alt="..."
                                                className="avatar"
                                                src={require("assets/img/emilyz.jpg")}
                                            />
                                            <h5 className="title">Perera Thilakaratna</h5>
                                        </a>
                                        <p className="description">Ambulance Owner</p>
                                    </div>
                                    <div className="card-description">

                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="button-container">
                                        <Button className="btn-icon btn-round" color="facebook">
                                            <i className="fab fa-facebook" />
                                        </Button>
                                        <Button className="btn-icon btn-round" color="twitter">
                                            <i className="fab fa-twitter" />
                                        </Button>
                                        <Button className="btn-icon btn-round" color="google">
                                            <i className="fab fa-google-plus" />
                                        </Button>
                                    </div>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
}

export default withRouter(EditAmbulanceDetails);
