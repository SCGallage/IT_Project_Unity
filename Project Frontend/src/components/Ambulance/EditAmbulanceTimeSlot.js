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
import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import axios from 'axios';
import { useFormik } from "formik";
import *as Yup from 'yup'

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
    Col, Label, CustomInput
} from "reactstrap";

function EditAmbulanceTimeSlot(props) {
    const[stateTime,  setstateTime] = useState({})
 useEffect(() => {
     let id =props.match.params.id;
     getTimeslotById(id);
    }, [props.match.params.id]);

 const getTimeslotById = id =>{
     axios
         .get('http://localhost:8080/api/ambulance-timeslot/${id}')
         .then(t => {
             let ambulanceTimeSlot = t.data;
             setstateTime({
                         state:ambulanceTimeSlot.state,
                         time:ambulanceTimeSlot.time,
                         email:ambulanceTimeSlot.email,
                         ambulanceId:ambulanceTimeSlot.ambulanceId,
                        driverId:ambulanceTimeSlot.driverId,
                        nurseId:ambulanceTimeSlot.nurseId
                    });
        })
         .catch(err => alert(err));
 };
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center">Edit Ambulance Time Slot</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={e => {
                                        e.preventDefault();
                                    }}>
                                        <Col className="pr-md-1" md="6">
                                            <Row>
                                                <FormGroup tag="fieldset">
                                                    <label>Status</label>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" color="danger" name="radio1"
                                                                       value={stateTime.state}
                                                                       onChange={e => {
                                                                           let value = e.target.value;
                                                                           setstateTime({state: value})
                                                                       }}
                                                                />{' '}
                                                                Completed
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup check>
                                                            <Label check>
                                                                <Input type="radio" name="radio1"
                                                                       value={stateTime.state}
                                                                       onChange={e => {
                                                                           let value = e.target.value;
                                                                           setstateTime({state: value})
                                                                       }}
                                                                />{' '}
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
                                                        value={stateTime.time}
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({time: value})
                                                        }}
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
                                                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({phone: value})
                                                        }}
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
                                                        type="text"
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({ambulanceId: value})
                                                        }}
                                                        required
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Driver Id</label>
                                                    <Input
                                                        placeholder=""
                                                        type="text"
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({driverId: value})
                                                        }}
                                                        required
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
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({nurseId: value})
                                                        }}
                                                        required
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
                                                        onChange={e => {
                                                            let value = e.target.value;
                                                            setstateTime({details: value})
                                                        }}
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
                                        Edit
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
}

export default withRouter(EditAmbulanceTimeSlot);
