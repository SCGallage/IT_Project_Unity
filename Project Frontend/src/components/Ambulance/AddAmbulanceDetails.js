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
import React from "react";

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
    Col,
} from "reactstrap";

class AddAmbulanceDetails extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center">Add Ambulance</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Registration Number</label>
                                                    <Input
                                                        placeholder="Wp12345"
                                                        type="text"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Vehicle Model</label>
                                                    <Input
                                                        placeholder="xxxxxxxxxx"
                                                        type="text"
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
                                                    />
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
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="reset">
                                        <a href="/admin/view-ambulance-details" style={{color:"white"}}>
                                            Cancel
                                        </a>
                                    </Button>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="submit">
                                        Add
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
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default AddAmbulanceDetails;
