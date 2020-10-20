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
    Col, Breadcrumb, BreadcrumbItem,
} from "reactstrap";

class EmergencyPro extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Breadcrumb tag="nav" listTag="div" color="warning">
                            <BreadcrumbItem tag="a" href="/dashboard">Dashboard</BreadcrumbItem>
                            <BreadcrumbItem active tag="span">Emergency</BreadcrumbItem>
                        </Breadcrumb>
                        <Col md="9" style={{margin:"0% 10% 0% 10%"}}>
                            <Card>
                                <CardHeader style={
                                    {itemAlign:"center"}
                                }>
                                    <h4 className="title text-center">Emergency details</h4>
                                </CardHeader>
                            </Card>
                        </Col>
                        <Row style={{margin:"0% 10% 30% 15%"}}>
                            <Col md="5" style={{width:"40rem"}}>
                                <Card className="card-user">
                                    <CardBody>
                                        <CardText />
                                        <div className="author">
                                            <div className="block block-one" />
                                            <div className="block block-two" />
                                            <div className="block block-three" />
                                            <div className="block block-four" />
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <h5 className="title">Ambulance Details</h5>
                                            </a>

                                            <div>
                                                <Button color="primary animation-on-hover" style={{background: "purple"}}> <a href="/admin/view-ambulance-details" style={{color:"white"}}>Ambulance</a> </Button>
                                            </div>
                                            <div>
                                                <Button color="primary animation-on-hover" style={{background: "#cc0099"}}> <a href="/admin/add-ambulance" style={{color:"white"}}>ADD</a> </Button>
                                            </div>
                                        </div>
                                        <div className="card-description">
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md="5">
                                <Card className="card-user">
                                    <CardBody>
                                        <CardText />
                                        <div className="author">
                                            <div className="block block-one" />
                                            <div className="block block-two" />
                                            <div className="block block-three" />
                                            <div className="block block-four" />
                                            <a href="#pablo" onClick={e => e.preventDefault()}>
                                                <h5 className="title">Ambulance Time Shedule</h5>
                                            </a>
                                            <div>
                                            <Button color="primary animation-on-hover" style={{background: "purple"}}> <a href="/admin/view-ambulance-timeslot" style={{color:"white"}}>Shedule</a></Button>
                                            </div>
                                                <div>
                                                <Button color="primary animation-on-hover" style={{background: "#cc0099"}}> <a href="/admin/add-ambulance-timeslot" style={{color:"white"}}>ADD</a> </Button>
                                            </div>

                                        </div>
                                        <div className="card-description">
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </Row>
                </div>
            </>
        );
    }
}

export default EmergencyPro;
