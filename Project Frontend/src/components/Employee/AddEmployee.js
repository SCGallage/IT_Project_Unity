import React, { Component } from 'react'
import EmployeeService from "../Services/EmployeeService";
import "assets/css/employee.css";
import {
    Breadcrumb,
    BreadcrumbItem, Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader, CardText,
    Col, DropdownItem, DropdownMenu, DropdownToggle,
    Form,
    FormGroup,
    Input,
    Row, UncontrolledDropdown
} from "reactstrap";
import {ListEmployeeComponent} from "./ListEmployee";


const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const passRegex = RegExp(
    /^([@#](?=[^aeiou]{7,13}$)(?=[[:alnum:]]{7,13}$)(?=.*[A-Z]{1,}.*$).+)$/
);

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);


const formValid = ({ formErrors, ...rest }) => {
    let valid = true;

    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
        console.log("Fields blank");
        val.length > 0 && (valid = false);
    });

    // validate the form was filled out
    Object.values(rest).forEach(val => {
        console.log("Sucessfully filled");
        val === null && (valid = false);
    });

    return valid;
};


class Employee extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            firstname : '',
            lastname : '',
            email : '',
            address : '',
            dob : '',
            mobile : '',
            gender : '',
            designation : '',
            appointfee : '',
            bsalary : '',
            qualification : '',
            username : '',
            password : '',
            formErrors: {
                firstName: "",
                lastName: "",
                email: "",
                mobile : '',
                password: "",
                username: ""
            }

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDesignationHandler = this.changeDesignationHandler.bind(this);
        this.changeAppointfeeHandler = this.changeAppointfeeHandler.bind(this);
        this.changeBasicsalaryHandler = this.changeBasicsalaryHandler.bind(this);
        this.changeQualificationHandler = this.changeQualificationHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);

        this.saveEmployee = this.saveEmployee.bind(this);
        //this.enableField = this.enableField.bind(this);
        this.baseState = this.state;


    }

    state = {
        isPasswordShown: false
    };

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };


    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            email : this.state.email,
            address : this.state.address,
            dob : this.state.dob,
            mobile : this.state.mobile,
            gender : this.state.gender,
            designation : this.state.designation,
            appointfee : this.state.appointfee,
            bsalary : this.state.bsalary,
            qualification : this.state.qualification,
            username : this.state.username,
            password : this.state.password
        };
        console.log('employee => ' + JSON.stringify(employee));


        if (formValid(this.state)) {
            console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        PhONE: ${this.state.mobile}
        Password: ${this.state.password}
        username : ${this.state.username}
      `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }

        EmployeeService.createEmployee(employee).then(res => {
            this.props.history.push('/admin/employees');
        });

    }

    changeFirstNameHandler = (event) => {
        this.setState({firstname : event.target.value});
    }

    changeLastNameHandler = (event) => {
        this.setState({lastname : event.target.value});
    }

    changeEmailHandler = (event) => {
        this.setState({email : event.target.value});
    }

    changeAddressHandler = (event) => {
        this.setState({address : event.target.value});
    }

    changeDobHandler = (event) => {
        this.setState({dob : event.target.value});
    }

    changeMobileHandler = (event) => {
        this.setState({mobile : event.target.value});
    }

    changeGenderHandler = (event) => {
        this.setState({gender : event.target.value});
    }

    changeDesignationHandler = (event) => {
        this.setState({designation : event.target.value});
    }

    changeBasicsalaryHandler = (event) => {
        this.setState({bsalary : event.target.value});
    }

    changeAppointfeeHandler = (event) => {
        this.setState({appointfee : event.target.value});
    }
    changeQualificationHandler = (event) => {
        this.setState({qualification : event.target.value});
    }
    changeUsernameHandler = (event) => {
        this.setState({username : event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password : event.target.value});
    }

    handleReset = () => {
        this.setState(this.baseState)
    }


    // enableField  = () =>
    // {
    //     let checkBox = document.getElementById("exampleRadios11");
    //     let checkBox3 = document.getElementById("exampleRadios12");
    //     if (checkBox.checked === false)
    //     {
    //         console.log("ccc")
    //         document.getElementById("bsalary").disabled = true;
    //     }
    //
    //     if (checkBox.checked === true)
    //     {
    //         console.log("ddd")
    //         document.getElementById("bsalary").disabled = false;
    //
    //     }
    //     if (checkBox3.checked === false)
    //     {
    //         console.log("aaa")
    //         document.getElementById("appointfee").disabled = true;
    //
    //     }
    //
    //     if (checkBox3.checked === true)
    //     {
    //         console.log("bbb")
    //         document.getElementById("appointfee").disabled = false;
    //     }
    //
    //
    // }







    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };

        switch (name) {

            case "username":
                formErrors.username =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;
            case "mobile":
                formErrors.mobile = phoneRegex.test(value)
                    ? ""
                    : "invalid phone number";
                break;
            case "password":
                formErrors.password = passRegex.test(value)
                    ? ""
                    : "invalid password";
                break;
            default:
                break;
        }

        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };



    render() {
        const { formErrors } = this.state;
        const { isPasswordShown } = this.state;
        return (
            <div className="content">

                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Employee</BreadcrumbItem>
                </Breadcrumb>

                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Add Employee</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>First Name *</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.firstname}
                                                    onChange={this.changeFirstNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Last Name *</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.lastname}
                                                    onChange={this.changeLastNameHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="email">
                                                    Email address *
                                                </label>
                                                <Input placeholder="example@gmail.com"
                                                       type="email"
                                                       name="email"
                                                       onChange={this.handleChange}
                                                />
                                                {formErrors.email.length > 0 && (
                                                    <span className="errorMessage">{formErrors.email}</span>
                                                )}
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Date of Birth</label>
                                                <Input
                                                    type="date"
                                                    value={this.state.dob}
                                                    onChange={this.changeDobHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="mobile">Phone number</label>
                                                <Input
                                                    className={formErrors.mobile.length > 0 ? "error" : null}
                                                    type="phone"
                                                    //value={this.state.mobile}
                                                    name="mobile"
                                                    noValidate
                                                    onChange={this.handleChange}

                                                />
                                                {formErrors.mobile.length > 0 && (
                                                    <span className="errorMessage">{formErrors.mobile}</span>
                                                )}
                                            </FormGroup>
                                        </Col>

                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Gender</label><br/>
                                            <FormGroup check inline className="form-check-radio">

                                                <label className="form-check-label">
                                                    <Input type="radio" name="gender" id="exampleRadios11"
                                                        // value={this.state.gender} onChange={this.changeGenderHandler}
                                                        // defaultChecked/>Male
                                                           value="Male" onChange={this.changeGenderHandler}/>Male

                                                    <span className="form-check-sign"></span>
                                                </label>
                                                <label className="form-check-label">
                                                    <Input type="radio" name="gender" id="exampleRadios12"
                                                           value="Female" onChange={this.changeGenderHandler}/>
                                                        Female
                                                        <span className="form-check-sign"></span>
                                                    </label>
                                                </FormGroup>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="12">
                                            <FormGroup>
                                                <label>Address</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.address} onChange={this.changeAddressHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label for="Designation">Designation *</label>
                                                <Input type="select" name="select" id="Designation"
                                                       value={this.state.designation} onChange={this.changeDesignationHandler}>
                                                    <option>Select....</option>
                                                    <option id = "doctor">Doctor</option>
                                                    <option id = "admin">Admin</option>
                                                    <option id = "nurse">Nurse</option>
                                                    <option id = "receptionist">Receptionist</option>
                                                    <option id = "driver">Driver</option>
                                                </Input>


                                            </FormGroup>
                                        </Col>
                                        <Col className="px-md-1" md="4">
                                            <FormGroup>
                                                <label>Basic Salary (EXCLUDE DOCTORS)</label>
                                                <Input
                                                    placeholder="Rs." id = "bsalary"
                                                    type="number"
                                                    value={this.state.bsalary} onChange={this.changeBasicsalaryHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Appointment fee (ONLY DOCTORS)</label>
                                                <Input placeholder="Rs." id = "appointfee"
                                                       type="number"
                                                       value={this.state.appointfee} onChange={this.changeAppointfeeHandler}
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>

                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label>Qualification</label>
                                                <Input
                                                    type="text"
                                                    value={this.state.qualification}
                                                    onChange={this.changeQualificationHandler}
                                                />
                                            </FormGroup>
                                        </Col>

                                        <Col className="pr-md-1" md="4">
                                            <FormGroup>
                                                <label htmlFor="username">User Name *</label>
                                                <Input
                                                    type="text"
                                                    //value={this.state.username} onChange={this.changeUsernameHandler}
                                                    name="username"
                                                    noValidate
                                                    onChange={this.handleChange}
                                                />
                                                {formErrors.username.length > 0 && (
                                                    <span className="errorMessage">{formErrors.username}</span>
                                                )}
                                            </FormGroup>
                                        </Col>
                                        <Col className="pl-md-1" md="4">
                                            <FormGroup>
                                                <label>Password *</label>
                                                <Input
                                                    type={isPasswordShown ? "text" : "password"}
                                                    value={this.state.password} onChange={this.changePasswordHandler}
                                                />
                                                <i
                                                    className="fa fa-eye password-icon"
                                                    onClick={this.togglePasswordVisiblity}
                                                />
                                                {formErrors.password.length > 0 && (
                                                    <span className="errorMessage">{formErrors.password}</span>
                                                )}
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                            <CardFooter>
                                <Button className="btn-fill" onClick={this.saveEmployee} color="primary" type="submit">
                                    Save
                                </Button>
                                <Button className="btn-fill" onClick={this.handleReset.bind(this)}color="primary" type="reset">
                                    Reset
                                </Button>
                            </CardFooter>
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
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar"
                                            src={require("assets/img/doctor.jpg")}
                                        />
                                        <h5 className="title">Dr.Anusha</h5>
                                    </a>
                                    <p className="description">Founder</p>
                                </div>
                                <div className="card-description">
                                    Treet Employees Like They Make A Difference And They Will
                                </div>
                            </CardBody>
                            <CardFooter>
                                <UncontrolledDropdown group direction="up">
                                    <DropdownToggle caret>
                                        Dashboard
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem><a href="/admin/dashboard#">Dashboard</a></DropdownItem>
                                        <DropdownItem><a href="/admin/employees">Employee List</a></DropdownItem>
                                        <DropdownItem><a href="/admin/salary">Salary</a></DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </CardFooter>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }

}

export default Employee;
