import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, Col, Label} from "reactstrap";

export class ListSalary extends Component {

    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="content">
                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Salary List</BreadcrumbItem>
                </Breadcrumb>
                <div>
                    <br></br>
                    <div className = "card col-md-15 offset-md-0">
                        <br/>
                        <h3 className = "text-center">Salary List</h3>

                        <Col md="20">
                            <Card className="card-user">
                                <CardBody>
                                    <CardText />
                                    <div className="author">
                                        <div className="block block-one" />
                                        <div className="block block-two" />
                                        <div className="block block-three" />
                                        <div className="block block-four" />

                                    </div>




                                    <div className = "card-body">

                                        <table className = "table table-striped table-bordered ">
                                            <thead>
                                            <tr>
                                                <th> Employee ID </th>
                                                <th> Employee Name </th>
                                                <th> Year </th>
                                                <th> Month </th>
                                                <th> Work Days </th>
                                                <th> Actions </th>
                                            </tr>
                                            </thead>

                                        </table>




                                    </div>



                                </CardBody>

                            </Card>
                        </Col>




                    </div>
                </div>










            </div>

        )
    }
}

export default ListSalary