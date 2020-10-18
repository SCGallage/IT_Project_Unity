import React from "react";
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    Col
} from "reactstrap";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import EmployeeService from "../Services/EmployeeService";
import SalaryService from "../Services/SalaryService";

class AddSalary extends React.Component {
    constructor(props) {
        super(props)

        var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        this.state = {
            employee_id: '',
            name: '',
            year: '',
            month: '',
            work_days: '',
            salary: '',
            no_appointments: '',
            date_of_salary: date,
            employee: {}
        }
        this.changeYearHandler = this.changeYearHandler.bind(this);
        this.changeMonthHandler = this.changeMonthHandler.bind(this);
        this.changeWorkDaysHandler = this.changeWorkDaysHandler.bind(this);

        this.getEmployeeName = this.getEmployeeName.bind(this);
        this.getEmployeeDocName = this.getEmployeeDocName.bind(this);
        this.saveSalary = this.saveSalary.bind(this);
        this.getEmployeeSalary = this.getEmployeeSalary.bind(this);
        this.getDoctorSalary = this.getDoctorSalary.bind(this);
    }


    getEmployeeName(employee_id){
        EmployeeService.getEmployeeByName(this.state.employee_id).then(res => {
            this.setState({name:res.data})
           // console.log('hheeeee' +JSON.stringify(this.state.employee_id))

        })
    }

    getEmployeeDocName(employee_id){
        EmployeeService.getEmployeeDocNameById(this.state.employee_id).then(res => {
            this.setState({name:res.data})
            // console.log('hheeeee' +JSON.stringify(this.state.employee_id))

        })
    }

    getEmployeeSalary(employee_id){
        EmployeeService.getEmployeeBySalary(this.state.employee_id).then(res => {
            this.setState({salary:res.data})
            // console.log('hheeeee' +JSON.stringify(this.state.employee_id))

        })
    }

    getDoctorSalary(employee_id){
        EmployeeService.getEmployeeAppointFeeById(this.state.employee_id).then(res => {
            this.setState({salary:res.data})
            // console.log('hheeeee' +JSON.stringify(this.state.employee_id))

        })
    }


    generatePDF = () => {
        var doc = new jsPDF('p', 'pt');

        doc.text(20, 20, 'This is the first title.')

        doc.setFont('helvetica')
        doc.text(20, 60, 'This is the second title.')

        doc.setFont('helvetica')
        doc.text(20, 100, 'This is the thrid title.')


        doc.save('demo.pdf')
    }

    saveSalary = (e) => {
        let salary = {
            employee_id : this.state.employee_id,
            year : this.state.year,
            month : this.state.month,
            work_days : this.state.work_days,
            date_of_salary : this.state.date_of_salary,
            salary :this.state.salary * this.state.work_days
        };
        console.log('employee => ' + JSON.stringify(salary));

        SalaryService.createSalary(salary).then(res => {
            this.props.history.push('/admin/salary-list');
        });

    }

    saveSalaryDoc = (e) => {
        let salary = {
            employee_id : this.state.employee_id,
            year : this.state.year,
            month : this.state.month,
            no_appointments : this.state.no_appointments,
            date_of_salary : this.state.date_of_salary,
            salary :this.state.salary * this.state.no_appointments
        };
        console.log('employee => ' + JSON.stringify(salary));

        SalaryService.createSalary(salary).then(res => {
            this.props.history.push('/admin/salary-list');
        });

    }

    changeYearHandler = (event) => {
        this.setState({year : event.target.value});
    }
    changeMonthHandler = (event) => {
        this.setState({month : event.target.value});
    }
    changeWorkDaysHandler = (event) => {
        this.setState({work_days : event.target.value});
    }
    changeNoAppointments = (event) => {
        this.setState({no_appointments : event.target.value});
    }

    render() {
        return (
            <div className="content">

                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>



                <Row>
                    <Col md="4">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Salary for Other Employees</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="10">
                                            <FormGroup>
                                                <label>Employee Id</label>
                                                <Input
                                                    type="number"
                                                    onChange={evt => this.setState({ employee_id: evt.target.value })}
                                                />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Name</label>
                                                <Input type="text"
                                                    value={this.state.name} disabled
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Date</label>
                                                <Input type="text"
                                                       name = "date_of_salary"
                                                       value= {this.state.date_of_salary} disabled
                                                       onChange={evt => this.setState({ date_of_salary: evt.target.value })}

                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label>Year</label>
                                                <Input
                                                    type="text"
                                                    name = "year"
                                                    onChange={evt => this.setState({ year: evt.target.value })}
                                                    onChange={this.changeYearHandler}
                                                />
                                            </FormGroup>
                                        </Col>


                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label for="Month">Month *</label>
                                                <Input type="select" name="select" id="Month"
                                                    value={this.state.month}
                                                    onChange={evt => this.setState({ month: evt.target.value })}
                                                    onChange={this.changeMonthHandler}>
                                                    <option>Select....</option>
                                                    <option id = "January">January</option>
                                                    <option id = "February">February</option>
                                                    <option id = "March">March</option>
                                                    <option id = "April">April</option>
                                                    <option id = "May">May</option>
                                                    <option id = "June">June</option>
                                                    <option id = "July">July</option>
                                                    <option id = "August">August</option>
                                                    <option id = "September">September</option>
                                                    <option id = "October">October</option>
                                                    <option id = "November">November</option>
                                                    <option id = "December">December</option>
                                                </Input>


                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Working Days</label>
                                                <Input
                                                    type="number" name="work_days"
                                                    onChange={this.changeWorkDaysHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>SALARY</label>
                                                <Input type="text"
                                                       value={this.state.salary * this.state.work_days} disabled
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="3">
                        <Card className="card-user">
                            <CardBody>
                                <CardText />
                                <div className="author">
                                    <div className="block block-one" />
                                    <div className="block block-two" />
                                    <div className="block block-three" />
                                    <div className="block block-four" />

                                </div>
                                <Button onClick={this.getEmployeeName} className="btn-fill" color="primary" type="submit">
                                    Retrieve name
                                </Button>

                                <Button onClick={this.getEmployeeDocName} className="btn-fill" color="primary" type="submit">
                                    Retrieve Doctor name
                                </Button>

                                <Button onClick={this.getEmployeeSalary} className="btn-fill" color="primary" type="submit">
                                    Calculate Salary
                                </Button>

                                <Button onClick={this.saveSalary} className="btn-fill" color="primary" type="submit">
                                    Save Salary of Employees
                                </Button>

                                <Button onClick={this.getDoctorSalary} className="btn-fill" color="primary" type="submit">
                                    Calculate Doctor Salary
                                </Button>

                                <Button onClick={this.saveSalaryDoc} className="btn-fill" color="primary" type="submit">
                                    Save Salary of Doctor
                                </Button>

                                &nbsp; &nbsp; &nbsp; &nbsp;

                                <Button className="btn-fill" color="primary" type="submit">
                                    Salary List
                                    <a href="/admin/salary-list">...</a>
                                </Button>


                            </CardBody>

                        </Card>
                    </Col>

                    <Col md="5">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Salary for Doctor</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="10">
                                            <FormGroup>
                                                <label>Employee Id</label>
                                                <Input
                                                    type="number"
                                                    onChange={evt => this.setState({ employee_id: evt.target.value })}
                                                />
                                            </FormGroup>

                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Name</label>
                                                <Input type="text"
                                                       value={this.state.name} disabled
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Date</label>
                                                <Input type="text"
                                                       name = "date_of_salary"
                                                       value= {this.state.date_of_salary} disabled
                                                       onChange={evt => this.setState({ date_of_salary: evt.target.value })}

                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label>Year</label>
                                                <Input
                                                    type="text"
                                                    name = "year"
                                                    onChange={evt => this.setState({ year: evt.target.value })}
                                                    onChange={this.changeYearHandler}
                                                />
                                            </FormGroup>
                                        </Col>


                                        <Col className="pr-md-1" md="5">
                                            <FormGroup>
                                                <label for="Month">Month *</label>
                                                <Input type="select" name="select" id="Month"
                                                       value={this.state.month}
                                                       onChange={evt => this.setState({ month: evt.target.value })}
                                                       onChange={this.changeMonthHandler}>
                                                    <option>Select....</option>
                                                    <option id = "January">January</option>
                                                    <option id = "February">February</option>
                                                    <option id = "March">March</option>
                                                    <option id = "April">April</option>
                                                    <option id = "May">May</option>
                                                    <option id = "June">June</option>
                                                    <option id = "July">July</option>
                                                    <option id = "August">August</option>
                                                    <option id = "September">September</option>
                                                    <option id = "October">October</option>
                                                    <option id = "November">November</option>
                                                    <option id = "December">December</option>
                                                </Input>


                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Number of Appointments</label>
                                                <Input
                                                    type="number" name="no_appointments"
                                                    onChange={this.changeNoAppointments}
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>SALARY</label>
                                                <Input type="text"
                                                       value={this.state.salary * this.state.no_appointments} disabled
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                </Form>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

            </div>
        )
    }
}

export default AddSalary;
