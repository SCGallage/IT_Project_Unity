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
    Col, Label
} from "reactstrap";

class AddAmbulanceTimeSlot extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center"> Add Ambulance Time Slot</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form>
                                        <Col className="pr-md-1" md="6">
                                            <Row>
                                                <FormGroup tag="fieldset">
                                                    <label>Status</label>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" color="danger" name="radio1" />{' '}
                                                                Completed
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name="radio1" />{' '}
                                                                Incomplete
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                </FormGroup>
                                            </Row>
                                        </Col>

                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Time</label>
                                                    <Input
                                                        placeholder=""
                                                        type="time"
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Phone</label>
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
                                                    <label htmlFor="id">Ambulance Id</label>
                                                    <Input
                                                        placeholder=""
                                                        type="text" />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Driver Id</label>
                                                    <Input
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Nurse Id</label>
                                                    <Input
                                                        placeholder=""
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Details</label>
                                                    <Input
                                                        placeholder="Details regarding the time or ambulance or driver or nurse"
                                                        type="textarea"
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                                <CardFooter>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="reset">
                                        <a href="/admin/view-ambulance-timeslots" style={{color:"white"}}>Cancel</a>
                                    </Button>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="submit">
                                        Add
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

export default AddAmbulanceTimeSlot;
