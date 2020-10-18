import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import {Breadcrumb, BreadcrumbItem, Button, Card, CardBody, CardText, Col, Label, Row} from "reactstrap";
import html2canvas from "html2canvas";
import {jsPDF} from "jspdf";
import 'jspdf-autotable';
import {autoTable} from "jspdf-autotable";
import SalaryService from "../Services/SalaryService";

export class Reports extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees : [],
            salary : []
        }

    }


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees : res.data})
        })
        SalaryService.getAllSalary().then((res) => {
            this.setState({ salary : res.data})
        })
    }


    generatePDFNEW = () => {
        //document.getElementById('card-body').find('th:last-child, td:last-child').remove()
        const doc = new jsPDF("landscape", "mm", "a4")

        doc.autoTable({ html: '#card-body1' })
        //autoTable(doc, { html: '#mytable' })
        doc.save('employee_list.pdf')

    }

    generatePDFNEW1 = () => {
        //document.getElementById('card-body').find('th:last-child, td:last-child').remove()
        const doc = new jsPDF("landscape", "mm", "a4")

        doc.autoTable({ html: '#card-body2' })
        //autoTable(doc, { html: '#mytable' })
        doc.save('salary_list.pdf')

    }

    render() {
        return (
            <div className="content">
                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Reports</BreadcrumbItem>
                </Breadcrumb>


                <Row>
                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />


                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/reports11.png")}


                                            />
                                        <h5 className="title" onClick={this.generatePDFNEW} type="primary">All Employee Details</h5>

                                </div>

                            </CardBody>

                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a href="/admin/reports">

                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/employee.jpg")}
                                        />
                                        <h5 className="title" onClick={this.generatePDFNEW1} type="primary">Salary of all employees</h5>
                                    </a>
                                </div>

                            </CardBody>

                        </Card>
                    </Col>

                    <Col md="4">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />
                                    <a href="/admin/searchEmployeeName">

                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/searchemp1.jpg")}
                                        />
                                        <h5 className="title"> </h5>
                                    </a>
                                </div>

                            </CardBody>

                        </Card>
                    </Col>


                </Row>






                <div>
                    <br></br>
                    <div className = "card col-md-15 offset-md-0">
                        <br/>


                                        <div>

                                            <table id = "card-body1"  className = "table table-striped table-bordered print-table">
                                                <thead>
                                                <tr>
                                                    <th> Employee ID </th>
                                                    <th> First Name </th>
                                                    <th> Last Name </th>
                                                    <th> Email </th>
                                                    <th> Mobile Number </th>
                                                    <th> Date of Birth </th>
                                                    <th> Address </th>
                                                    <th> Designation </th>
                                                    <th> Qualification </th>
                                                    <th> Username </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                {
                                                    this.state.employees.map(
                                                        employee =>
                                                            <tr key = {employee.id}>
                                                                <td> {employee.id} </td>
                                                                <td> {employee.firstname } </td>
                                                                <td> {employee.lastname } </td>
                                                                <td> {employee.email } </td>
                                                                <td> {employee.mobile } </td>
                                                                <td> {employee.dob } </td>
                                                                <td> {employee.address } </td>
                                                                <td> {employee.designation } </td>
                                                                <td> {employee.qualification } </td>
                                                                <td> {employee.username } </td>

                                                            </tr>
                                                    )
                                                }
                                                </tbody>

                                            </table>



                                    </div>

                                    <table id = "card-body2" className = "table table-striped table-bordered print-table ">
                                        <thead>
                                        <tr>
                                            <th> Employee ID </th>
                                            <th> Year </th>
                                            <th> Month </th>
                                            <th> Work Days </th>
                                            <th> Monthly Salary </th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {
                                            this.state.salary.map(
                                                salarys =>
                                                    <tr key = {salarys.sid}>
                                                        <td> {salarys.employee_id } </td>
                                                        <td> {salarys.year } </td>
                                                        <td> {salarys.month } </td>
                                                        <td> {salarys.work_days } </td>
                                                        <td> {salarys.salary} </td>
                                                    </tr>
                                            )
                                        }
                                        </tbody>

                                    </table>



                    </div>
                </div>



            </div>

        )
    }
}

export default Reports