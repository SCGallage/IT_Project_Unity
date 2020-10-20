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
import React,{useState, useEffect} from "react";
import { useFormik } from "formik";
import *as Yup from 'yup'
import axios from 'axios'
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    FormGroup,
    Form,
    Input,
    Row,
    Col, BreadcrumbItem, Breadcrumb,
} from "reactstrap";
import Label from "reactstrap/lib/Label";
const initialValues = {
    status: '',
    time: '',
    phone: '',
    ambulanceid: '',
    driverid: '',
    nurseid: '',
    vtdetails: ''
}
//const onSubmit = values =>{
    //console.log('Form data', values)
//}
const validationSchema = Yup.object({
    state: Yup.string().required('Required!'),
    regno: Yup.string().required('Required!'),
    time: Yup.string().required('Required!'),
    phone: Yup.string().required('Required!').max(10),
    ambulanceid: Yup.string().required('Required!'),
    driverid: Yup.string().required('Required!'),
    nurseid: Yup.string().required('Required!'),
    vtdetails: Yup.string().required('Required!')
})
function AddAmbulanceTimeSlot() {
    const formik = useFormik({
        initialValues,
        validationSchema
        //submit
        //onSubmit,
        //onSubmit: values => {
            //axios.post(`http://localhost:8080/add-ambulance-timeslot`, values)
        //}
        //validate
    })
    const submit= e => {
        let state = e.target[0].value;
        let time = e.target[1].value;
        let phone = e.target[2].value;
        let ambulanceid = e.target[3].value;
        let driverid = e.target[4].value;
        let nurseid = e.target[5].value;
        let vtdetails = e.target[6].value;
        let data = {
            state,
            time,
            phone,
            ambulanceid,
            driverid,
            nurseid,
            vtdetails
        };
        console.log(data);
        postAmbulanceTimeslot(data);
    };

    const postAmbulanceTimeslot= data => {
        console.log('fghjk')
        axios
            .post("http://localhost:8080/api/ambulance-timeslot", data)
            .then(t => {
                console.log(t);
            })
            .catch(err => alert(err));
    };
    return (
            <>
                <div className="content">
                    <Breadcrumb tag="nav" listTag="div" style={{color: "purple"}}>
                        <BreadcrumbItem tag="a" href="/dashboard">Dashboard</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="/emergency-pro">Emergency</BreadcrumbItem>
                        <BreadcrumbItem tag="a" href="/view-ambulance-timeslot">View AmbulanceTimeSlot</BreadcrumbItem>
                        <BreadcrumbItem active tag="span">Add</BreadcrumbItem>
                    </Breadcrumb>
                    <Row>
                        <Col md="8">
                            <Card>
                                <CardHeader>
                                    <h4 className="title text-center"> Add Ambulance Time Slot</h4>
                                </CardHeader>
                                <CardBody>
                                    <Form onSubmit={(e) => submit(e)}>
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
                                                    <Input id="time" name="time" placeholder="xxxxxxxxxx" type="time"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.time}/>
                                                    {formik.touched.time && formik.errors.time? <div className="error" style={{color:"red"}}>{formik.errors.time}</div> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Phone</label>
                                                    <Input id="phone" name="phone" placeholder="0761234432" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" type="tel"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
                                                    {formik.touched.phone && formik.errors.phone? <div className="error" style={{color:"red"}}>{formik.errors.phone}</div> : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row className="MarginBottom=2%">
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="id">Ambulance Id</label>
                                                    <Input id="ambulanceid" name="ambulanceid" placeholder="xxxxxxxxxx" type="text"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.ambulanceid}/>
                                                    {formik.touched.ambulanceid && formik.errors.ambulanceid? <div className="error" style={{color:"red"}}>{formik.errors.ambulanceid}</div> : null}    </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label>Driver Id</label>
                                                    <Input id="driverid" name="driverid" placeholder="xxxxxxxxxx" type="text"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.driverid}/>
                                                    {formik.touched.driverid && formik.errors.driverid? <div className="error" style={{color:"red"}}>{formik.errors.driverid}</div> : null}

                                                </FormGroup>
                                            </Col>
                                        </Row >
                                        <Row className="MarginBottom=2%">
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label>Nurse Id</label>
                                                    <Input id="nurseid" name="nurseid" placeholder="xxxxxxxxxx" type="text"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.nurseid}/>
                                                    {formik.touched.nurseid && formik.errors.nurseid? <div className="error" style={{color:"red"}}>{formik.errors.nurseid}</div> : null}

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="10">
                                                <FormGroup>
                                                    <label>Details</label>
                                                    <Input id="vtdetails" name="vtdetails" placeholder="Details regarding the time or ambulance or driver or nurse" type="textarea"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vtdetails}/>
                                                    {formik.touched.vtdetails && formik.errors.vtdetails? <div className="error" style={{color:"red"}}>{formik.errors.vtdetails}</div> : null}

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                <CardFooter>

                                        <tbody>
                                        <tr>
                                            <td>
                                                <FormGroup check>
                                                    <Label check style={{marginBottom:10, marginLeft:180, marginTop:0}}>
                                                        <Input defaultValue="" type="checkbox"/>
                                                        <span className="form-check-sign" >
                                                    <span className="check"/>
                                                    </span>
                                                    </Label>
                                                    <p className="title "  style={{marginBottom:0, marginLeft:205, marginTop:-18}}>Details Checked</p>
                                                </FormGroup>
                                            </td>
                                        </tr>
                                        </tbody>

                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="button" style={{marginBottom:40, marginLeft:180, marginRight:5, marginTop:30}} >
                                        <a href=" " style={{color:"white", fontWeight:"bold"}}   >Cancel</a>
                                    </Button>
                                    <Button className="btn-fill btn-round animation-on-hover" color="primary" type="submit" style={{marginBottom:40, marginLeft:30, marginRight:90, marginTop:30}} >
                                        Add
                                    </Button>
                                </CardFooter>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </>
        );
}

export default AddAmbulanceTimeSlot;
