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
import {NavLink} from 'react-router-dom'

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Button,
    Col
} from "reactstrap";

//View details about ambulance, delete, edit, add another by clicking the link provided
class ViewAmbulanceDetails extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h4" className="text-center">Ambulance List</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div>

                                        <Button color="danger"><a href="/admin/add-ambulance-details" style={{color:"white"}}>ADD</a></Button>
                                    </div>

                                    <Table className="tablesorter table-hover" responsive>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>Reg No</th>
                                            <th>Vehi Model</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>City</th>
                                            <th>Vehicle Details</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center animation-on-hover">
                                                <Button className="btn-icon animation-on-hover" color="info" size="sm">
                                                    View
                                                </Button>
                                                <Button className="btn-icon animation-on-hover" color="success" size="sm">
                                                    Update
                                                </Button>
                                                <Button className="btn-icon animation-on-hover" color="danger" size="sm">
                                                    Delete
                                                </Button>
                                            </td>
                                        </tr>
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
}


export default ViewAmbulanceDetails;
