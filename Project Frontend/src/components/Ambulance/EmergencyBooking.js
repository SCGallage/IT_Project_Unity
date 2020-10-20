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
    Col,
    Label,
    CustomInput
} from "reactstrap";

const initialValues = {
    fname: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    pdetails: ''
}
const onSubmit = values =>{
    console.log('Form data', values)
}
const validationSchema = Yup.object({
    fname: Yup.string().required('Required!'),
    lname: Yup.string().required('Required!'),
    phone: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format!')
        .required('Required!'),
    address: Yup.string().required('Required!'),
    pdetails: Yup.string().required('Required!')
})
function EmergencyBooking(){
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
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
                                    <Form onSubmit={formik.handleSubmit}>
                                        <h6>Give a call!! - 0112667383</h6><br/>
                                        <p>or</p><br/>
                                        <h6>Fill the form</h6>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="fname">First Name</label>
                                                    <Input id="fname" name="fname" placeholder="Monika" type="text" max={60}
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.fname}/>
                                                    {formik.touched.fname && formik.errors.fname? <div className="error" style={{color:"red"}}>{formik.errors.fname}</div> : null}
                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="lname">Last Name</label>
                                                    <Input id="lname" name="lname" placeholder="Anani" type="text" max={60}
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lname}/>
                                                    {formik.touched.lname && formik.errors.lname? <div className="error" style={{color:"red"}}>{formik.errors.lname}</div> : null}
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="pr-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="phone">Phone Number</label>
                                                    <Input id="phone" name="phone" placeholder="+0940761234432" type="tel" pattern="+094-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{3}"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone}/>
                                                    {formik.touched.phone && formik.errors.phone? <div className="error" style={{color:"red"}}>{formik.errors.phone}</div> : null}

                                                </FormGroup>
                                            </Col>
                                            <Col className="pl-md-1" md="6">
                                                <FormGroup>
                                                    <label htmlFor="email">Email Address</label>
                                                    <Input id="email" name="email" placeholder="anani@email.com" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                                                    {formik.touched.email && formik.errors.email? <div className="error" style={{color:"red"}}>{formik.errors.email}</div> : null}

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label tmlFor="address">Address</label>
                                                    <Input id="address" name="address" placeholder="No 23/444, Main road, Colombo" type="textarea" min={15} max={100}
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.address}/>
                                                    {formik.touched.address && formik.errors.address? <div className="error" style={{color:"red"}}>{formik.errors.address}</div> : null}
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
                                                    <label htmlFor="pdetails">Details</label>
                                                    <Input id="vdetails" name="vdetails" cols="80"
                                                           placeholder="Accident happened near the road when travelling by bike due to failiure in the break"
                                                           rows="4" type="textarea" required
                                                           onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.pdetails}/>
                                                    {formik.touched.pdetails && formik.errors.pdetails? <div className="error" style={{color:"red"}}>{formik.errors.pdetails}</div> : null}

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


export default EmergencyBooking;
