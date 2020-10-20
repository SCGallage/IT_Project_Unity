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
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {Link} from "react-router-dom";

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Button,
    Col, Breadcrumb, BreadcrumbItem
} from "reactstrap";

import EditAmbulanceDetails from "./EditAmbulanceDetails";

//View details about ambulance, delete, edit, add another by clicking the link provided
function ViewAmbulanceDetails() {
    const[stateAmbulance, setAmbulancestate] = useState([]);

    useEffect(()=>{
        getAmbulance();
    }, []);

    const getAmbulance = () => {
        axios
            .get("http://localhost:8080/api/ambulances")
            .then (data => {
                //console.log(data);
                setAmbulancestate(data.data);
            })
            .catch(err => alert(err));
    };

    function deleteAmb() {
        //console.log("Delete");
        axios.delete("http://localhost:8080/api/ambulance/{id}")
            .then(response => {
                if(response.data != null){
                    alert("");
                }
            })
    };
        return (
            <>
                <div className="content">
                    <Row>
                        <Breadcrumb tag="nav" listTag="div">
                            <BreadcrumbItem tag="a" href="/dashboard">Dashboard</BreadcrumbItem>
                            <BreadcrumbItem tag="a" href="/emergency-pro">Emergency</BreadcrumbItem>
                            <BreadcrumbItem active tag="span">View</BreadcrumbItem>
                        </Breadcrumb>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="text-center">Ambulance List</CardTitle>

                                </CardHeader>

                                <CardBody>
                                    <div>
                                        <Link to = "/admin/add-ambulance">
                                            <a href="/admin/dashboard#"><Button color="success animation-on-hover">ADD</Button></a>
                                        </Link>
                                        </div>


                                    <Table className="tablesorter table-hover" responsive>
                                        <thead className="text-primary">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">Reg No</th>
                                            <th scope="col">Vehi Model</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Vehicle Details</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">View</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                         {stateAmbulance.map(d => (
                                             <tr key = {d.id}>
                                                 <th scope="row">{d.id}</th>
                                                 <td> {d.regno }</td>
                                                 <td> {d.vehicle}</td>
                                                 <td> {d.email}</td>
                                                 <td> {d.phone}</td>
                                                 <td> {d.fname}</td>
                                                 <td> {d.lname}</td>
                                                 <td> {d.city}</td>
                                                 <td> {d.vdetails}</td>
                                                 <td className="text-center animation-on-hover">
                                                     <Button className="btn-icon" color="warning" size="sm">
                                                         <a href="/admin/edit-ambulance{id}"  render={props => <EditAmbulanceDetails/>}>
                                                         <i className="fa fa-edit animation-on-hover"> </i>
                                                         </a>
                                                         </Button>{' '}
                                                 </td>
                                                 <td className="text-center animation-on-hover">
                                                     <Button className="btn-icon" color="danger" size="sm"
                                                     onClick={deleteAmb}>
                                                         <i className="fa fa-times" />
                                                     </Button>
                                                 </td>
                                                 <td className="text-center animation-on-hover">
                                                     <Button className="btn-icon" color="info" size="sm">
                                                         <i className="fa fa-user"></i>
                                                     </Button>{` `}
                                                 </td>
                                             </tr>
                                         ))}
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
}


export default ViewAmbulanceDetails;
