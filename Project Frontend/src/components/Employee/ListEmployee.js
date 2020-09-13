import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardText, Col, Label} from "reactstrap";

export class ListEmployee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees : []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }
    viewEmployee(id){//
        // this.props.history.push(`/admin/view-employee/${id}`);
        //console.log(`Hello ${this.state.id}`)
        //this.props.history.push(`/admin/view-employee/:id`);
        this.props.history.push({
            pathname : '/admin/view-employee/',
            state: {
                userid: id
            }
        })
    }

    editEmployee(id) {
        this.props.history.push({
            pathname : '/admin/update-employee/',
            state: {
                userid: id
            }
        })

    }
        //this.props.history.push('/admin/update-employee/22509');
        //this.props.history.push(`/admin/update-employee/${id}`);
        //console.log(id)
        //this.props.history.push(`/admin/update-employee/${id}`);
        //this.props.history.push(`/admin/update-employee/`,id);
        //this.props.history.push(`/admin/view-employee/`+ id);


    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees : res.data})
        })
    }

    addEmployee(){
        this.props.history.push('./add-employee');
    }

    render() {
        return (
            <div className="content">
                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employee List</BreadcrumbItem>
                </Breadcrumb>
<div>
                    <br></br>
                    <div className = "card col-md-15 offset-md-0">
                        <br/>
                        <h3 className = "text-center"> List of Employees</h3>

                        <Col md="20">
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
                                                src={require("assets/img/admin.jpg")}
                                            />
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/doc.jpg")}
                                        />
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/nurse.jpg")}
                                        />
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/recption.jpg")}
                                        />
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/driver.jpg")}
                                        />
                                    </div>




                                    <div className = "card-body">








                                        <table className = "table table-striped table-bordered ">
                                            <thead>
                                            <tr>
                                                <th> Employee ID </th>
                                                <th> First Name </th>
                                                <th> Last Name </th>
                                                <th> Email </th>
                                                <th> Mobile Number </th>
                                                <th> Designation </th>
                                                <th> Username </th>
                                                <th> Actions </th>
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
                                                            <td> {employee.designation } </td>
                                                            <td> {employee.username } </td>
                                                            <td><button onClick = {() => this.editEmployee(employee.id)} className = "btn btn-info btn-simple"> Update</button>
                                                                <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger btn-simple">Delete </button>
                                                                <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(employee.id)} className="btn btn-info btn-simple">View </button>

                                                            </td>
                                                        </tr>
                                                )
                                            }
                                            </tbody>

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

export default ListEmployee