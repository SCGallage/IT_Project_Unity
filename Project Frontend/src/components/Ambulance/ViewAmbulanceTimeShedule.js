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
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Button,
    Col,
    CustomInput,
    Label,
    FormGroup, BreadcrumbItem, Breadcrumb
} from "reactstrap";
import EditAmbulanceTimeSlot from "./EditAmbulanceTimeSlot";

//View details about ambulance, delete, add another by clicking the link provided
function ViewAmbulanceTimeShedule() {
    const[stateAmbulanceTimeSlot, setAmbulanceTimeSlotstate] = useState([]);

    useEffect(()=>{
        getAmbulanceTimeSlot();
    }, []);

    const getAmbulanceTimeSlot = () => {
        axios
            .get("http://localhost:8080/api/ambulance-timeslots")
            .then (data => {
                //console.log(data);
                setAmbulanceTimeSlotstate(data.data);
            })
            .catch(err => alert(err));
    };

    function deleteTimeSlot() {
        console.log("Delete");
        axios.delete("http://localhost:8080/ambulance-timeslot/id")
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
                            <BreadcrumbItem active tag="span">View Shedule</BreadcrumbItem>
                        </Breadcrumb>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h3" className="text-center">Ambulance Time Slot Details</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div>
                                        <Button color="success"><a href="/admin/add-ambulance-timeslot" style={{color:"white"}}>ADD</a></Button>
                                    </div>

                                    <Table className="tablesorter table-hover" responsive>
                                        <thead className="text-primary">
                                        <tr>
                                            <th scope="col">No</th>
                                            <th scope="col">State      </th>
                                            <th scope="col">Time       </th>
                                            <th scope="col">Email      </th>
                                            <th scope="col">Ambulance Id</th>
                                            <th scope="col">Driver Id </th>
                                            <th scope="col">Nurse Id </th>
                                            <th scope="col">Details </th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                            <th scope="col">View</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {stateAmbulanceTimeSlot.map(t => (
                                            <tr key = {t.id}>
                                                <th scope="row">{t.id}</th>
                                                <td> {t.state}</td>
                                                <td> {t.time}</td>
                                                <td> {t.phone}</td>
                                                <td> {t.ambulanceId}</td>
                                                <td> {t.driverId}</td>
                                                <td> {t.nurseId}</td>
                                                <td> {t.details}</td>
                                                <td className="text-center animation-on-hover">
                                                    <Button className="btn-icon" color="warning" size="sm">
                                                        <a href="/admin/edit-ambulance-timeslot/{id}" render={props => <EditAmbulanceTimeSlot/>}>
                                                        <i className="fa fa-edit animation-on-hover"> </i>
                                                         </a>
                                                    </Button>{' '}
                                                </td>
                                                <td className="text-center animation-on-hover">
                                                        <Button className="btn-icon" color="danger" size="sm"
                                                        onClick={deleteTimeSlot}>
                                                            <i className="fa fa-times" />
                                                    </Button>
                                                </td>
                                                <td className="text-center animation-on-hover">
                                                    <Button className="btn-icon" color="info" size="sm">
                                                        <i className="fa fa-user"> </i>
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
export default ViewAmbulanceTimeShedule;
