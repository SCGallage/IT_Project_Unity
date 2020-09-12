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
    Col
} from "reactstrap";
import {Breadcrumb, BreadcrumbItem} from "reactstrap";

class AddSalary extends React.Component {
    render() {
        return (
            <div className="content">

                <Breadcrumb>
                    <BreadcrumbItem><a href="/admin/dashboard#">Dashboard</a></BreadcrumbItem>
                    <BreadcrumbItem active>Salary</BreadcrumbItem>
                </Breadcrumb>



                <Row>
                    <Col md="8">
                        <Card>
                            <CardHeader>
                                <h5 className="title">Calculate Salary</h5>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Employee Id</label>
                                                <Input
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Name</label>
                                                <Input
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label>Year</label>
                                                <Input
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>

                                    <Row>
                                        <Col className="pr-md-1" md="6">
                                            <FormGroup>
                                                <label for="Month">Month *</label>
                                                <Input type="select" name="select" id="Month">

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
                                                    type="number"
                                                />
                                            </FormGroup>
                                        </Col>

                                    </Row>
                                </Form>
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
                                    <Button className="btn-fill" color="primary" type="submit">
                                        Calculate Salary
                                    </Button>

                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>





            </div>
        )
    }
}

export default AddSalary;
