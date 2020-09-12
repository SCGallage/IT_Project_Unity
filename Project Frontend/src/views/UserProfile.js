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
    Col,
    CustomInput,
    Label,
    FormGroup
} from "reactstrap";

//View details about ambulance, delete, add another by clicking the link provided
class ViewAmbulanceTimeSlot extends React.Component {
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h3" className="text-center">Ambulance Time Slot Details</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div>

                                        <Button color="danger"><a href="/admin/add-ambulance-timeslot" style={{color:"white"}}>ADD</a></Button>
                                    </div>

                                    <Table className="tablesorter table-hover" responsive>
                                        <thead className="text-primary">
                                        <tr>
                                            <th>State      </th>
                                            <th>Time       </th>
                                            <th>Email      </th>
                                            <th>Ambulance Id</th>
                                            <th>Driver Id </th>
                                            <th>Nurse Id </th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <FormGroup>
                                                    <Label for="exampleCheckbox"></Label>
                                                    <div>
                                                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Completed" />
                                                    </div>
                                                </FormGroup>
                                            </td>
                                            <td>
                                                <time placeholder="2.00pm"/>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td className="text-center animation-on-hover">
                                                <Button className="btn-icon animation-on-hover" color="success" size="sm">
                                                    <i className="fa fa-edit"></i>
                                                </Button>{` `}
                                                <Button className="btn-icon animation-on-hover" color="danger" size="sm">
                                                    <i className="fa fa-times" />
                                                </Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <FormGroup>
                                                    <Label for="exampleCheckbox"></Label>
                                                    <div>
                                                        <CustomInput type="switch" id="exampleCustomSwitch" name="customSwitch" label="Completed" />
                                                    </div>
                                                </FormGroup>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>a</td>
                                            <td className="text-center">
                                                <Button className="btn-icon" color="success" size="sm">
                                                    <i className="fa fa-edit animation-on-hover"></i>
                                                </Button>{` `}
                                                <Button className="btn-icon animation-on-hover" color="danger" size="sm">
                                                    <i className="fa fa-times" />
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


export default ViewAmbulanceTimeSlot;
