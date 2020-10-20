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
    regno: '',
    insuranceno: '',
    email: '',
    phone: '',
    fname: '',
    lname: '',
    address: '',
    ciyt: '',
    country: '',
    postalCode: '',
    vdetails: ''
}
//const onSubmit = values =>{
//console.log('Form data', values)
//}
const validationSchema = Yup.object({
    regno: Yup.string().required('Required!'),
    insuranceno: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    phone: Yup.string().required('Required!').max(10),
    fname: Yup.string().required('Required!').max(50),
    lname: Yup.string().required('Required!').max(50),
    address: Yup.string().required('Required!').max(100),
    ciyt: Yup.string().required('Required!').min(3),
    country:Yup.string().required('Required!').max(9),
    postalCode:Yup.string().required('Required!').max(5),
    vdetails: Yup.string().required('Required!').max(300)
})
function AddAmb() {
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
        let regno = e.target[0].value;
        let insuranceno = e.target[1].value;
        let email = e.target[2].value;
        let phone = e.target[3].value;
        let fname = e.target[4].value;
        let lname = e.target[5].value;
        let address = e.target[6].value;
        let ciyt = e.target[7].value;
        let country = e.target[8].value;
        let postalCode = e.target[9].value;
        let vdetails = e.target[10].value;
        let data = {
            regno,
            insuranceno,
            email,
            phone,
            fname,
            lname,
            address,
            ciyt,
            country,
            postalCode,
            vdetails
        };
        console.log(data);
        postAmbulanceTimeslot(data);
    };

    const postAmbulanceTimeslot= data => {
        console.log('fghjk')
        axios
            .post("http://localhost:8080/api/ambulance", data)
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
                    <BreadcrumbItem tag="a" href="/view-ambulance-details">View Ambulance</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">Add</BreadcrumbItem>
                </Breadcrumb>
                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h4 className="title text-center"> Add Ambulance</h4>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={(e) => submit(e)}>
                                    <Col className="pr-md-1" md="6">
                                        <Row className="MarginBottom=2%">
                                            <Col  className="pr-md-1" md="6">
                                                <FormGroup >
                                                    <label htmlFor="regno">Registration Number</label>
                                                    <Input id="regno" name="regno" placeholder="Wp12345" type="text"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.regno}/>
                                                    {formik.touched.regno && formik.errors.regno? <div className="error" style={{color:"red"}}>{formik.errors.regno}</div> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6" >
                                                <FormGroup >
                                                    <label htmlFor="insuranceno">Insurance Number</label>
                                                    <Input id="insuranceno" name="insuranceno" placeholder="xxxxxxxxxx" type="text"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.insuranceno}/>
                                                    {formik.touched.insuranceno && formik.errors.insuranceno? <div className="error" style={{color:"red"}}>{formik.errors.insuranceno}</div> : null}
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                    </Col>

                                    <Row>
                                        <Col className=" pr-md-1" md="6">
                                            <FormGroup >
                                                <label htmlFor="email">Email address</label>
                                                <Input id="email" name="email" placeholder="perera@email.com" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                                                {formik.touched.email && formik.errors.email? <div className="error" style={{color:"red"}}>{formik.errors.email}</div> : null}
                                            </FormGroup>
                                        </Col>
                                        <Col  className=" pl-md-1" md="6" >
                                            <FormGroup >
                                                <label htmlFor="phone">Contact Number</label>
                                                <Input id="phone" name="phone" placeholder="0761234432" type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
                                                {formik.touched.phone && formik.errors.phone? <div className="error" style={{color:"red"}}>{formik.errors.phone}</div> : null}
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row className="MarginBottom=2%">
                                        <Col  className=" pr-md-1" md="6">
                                            <FormGroup >
                                                <label htmlFor="fname">First Name</label>
                                                <Input id="fname" name="fname" placeholder="Perera" type="text" max={60}
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname}/>
                                                {formik.touched.fname && formik.errors.fname? <div className="error" style={{color:"red"}}>{formik.errors.fname}</div> : null}
                                            </FormGroup>
                                        </Col>
                                        <Col  className=" pl-md-1" md="6">
                                            <FormGroup >
                                                <label htmlFor="lname">Last Name</label>
                                                <Input id="lname" name="lname" placeholder="Thilakaratna" type="text" max={60}
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname}/>
                                                {formik.touched.lname && formik.errors.lname? <div className="error" style={{color:"red"}}>{formik.errors.lname}</div> : null}
                                            </FormGroup>
                                        </Col>
                                    </Row >
                                    <Row className="MarginBottom=2%">
                                        <Col md="12">
                                            <FormGroup >
                                                <label htmlFor="address">Address</label>
                                                <Input id="address" name="address" placeholder="lake road, Matara" type="textarea" min={15} max={100}
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}/>
                                                {formik.touched.address && formik.errors.address? <div className="error" style={{color:"red"}}>{formik.errors.address}</div> : null}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col  className=" pr-md-1" md="4">
                                            <FormGroup >
                                                <label htmlFor="city">City</label>
                                                <Input id="city" name="city" placeholder="Matara" type="text" min={3} max={20}
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city}/>
                                                {formik.touched.city && formik.errors.city? <div className="error" style={{color:"red"}}>{formik.errors.city}</div> : null}
                                            </FormGroup>
                                        </Col>
                                        <Col className=" pl-md-1" md="4">
                                            <FormGroup >
                                                <label htmlFor="country">Country</label>
                                                <Input id="country" name="country" defaultValue="Sri Lanka" placeholder="Country" type="text"
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country}/>
                                                {formik.touched.country && formik.errors.country? <div className="error" style={{color:"red"}}>{formik.errors.country}</div> : null}
                                            </FormGroup>
                                        </Col>
                                        <Col className=" pl-md-1" md="4">
                                            <FormGroup >
                                                <label htmlFor="postalcode">Postal Code</label>
                                                <Input id="postalCode" name="postalCode" placeholder="00190" type="number" max={5}
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postalCode}/>
                                                {formik.touched.postalCode && formik.errors.postalCode? <div className="error" style={{color:"red"}}>{formik.errors.postalCode}</div> : null}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label htmlFor="vdetails">Details About Vehicle</label>
                                                <Input id="vdetails" name="vdetails" cols="80"
                                                       placeholder="Brand new. Very comforatable to travel long distance with the patient"
                                                       rows="4" type="textarea" required
                                                       onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vdetails}/>
                                                {formik.touched.vdetails && formik.errors.vdetails? <div className="error" style={{color:"red"}}>{formik.errors.vdetails}</div> : null}
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
                                        <Button className="btn-fill btn-round animation-on-hover" color="primary"
                                                type="button" style={{marginBottom:40, marginLeft:180, marginRight:5, marginTop:30}}>
                                            <a href=" " style={{color:"white", fontWeight:"bold"}}>Cancel</a>
                                        </Button>
                                        <Button className="btn-fill btn-round animation-on-hover" color="primary"
                                                type="submit" style={{marginBottom:40, marginLeft:30, marginRight:90, marginTop:30}} >
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

export default AddAmb;
