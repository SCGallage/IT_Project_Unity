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
    Label,
    CustomInput
} from "reactstrap";

class EmergencyBooking extends React.Component {

    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center">Contact Emmergency Services</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <h6>Give a call!! - 0112667383</h6><br/>
                                        <p>or</p><br/>
                                        <h6>Fill the form</h6>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>First Name</label>
                                                    <Input
                                                        placeholder="Anani"
                                                        type="text"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Last Name</label>
                                                    <Input
                                                        placeholder="Upeksha"
                                                        type="text"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Phone Number</label>
                                                    <Input
                                                        placeholder="+946754321876"
                                                        type="tel"
                                                        required
                                                        pattern="+094-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Emeil Address</label>
                                                    <Input
                                                        placeholder="anani@gmail.com"
                                                        type="email"
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
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Share Location</label>
                                                <Input
                                                    placeholder=""
                                                    type=" "
                                                />
                                            </FormGroup>
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Details</label>
                                                    <Input
                                                        placeholder="12/100, lake road, Matara"
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
                                        Cancel
                                    </Button>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="submit">
                                        Send Message
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default EmergencyBooking;
