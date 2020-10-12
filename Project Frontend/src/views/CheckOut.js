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
import React, {useState} from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, Input, Button, Modal, ModalBody, ModalFooter
} from "reactstrap";
import {rmvCart} from "../Redux/cartAction";
import {connect} from "react-redux";
import Label from "reactstrap/es/Label";
import FormGroup from "reactstrap/es/FormGroup";
import axios from "axios";
import {useFormik} from "formik";
import moment from "moment";

function CheckOut(props) {

  const [order,setOrder] = useState({})
  const [purchase,setPurchase] = useState('')

  const formik = useFormik({
    enableReinitialize : true,
    validateOnMount : true,
    initialValues: {
      orderId: '',
      fName: '',
      lName: '',
      streetNo: 0,
      street: '',
      city: '',
      cardType: '',
      cardNo: 0,
      cvv: 0,
      phoneNo: 0
    },
    onSubmit : values => {
      console.log('FORM DATA',values)
      console.log('Form Data',{...values,purchaseDate:moment().format("DD-MM-YYYY hh:mm:ss"),total:props.total});
      console.log('Check Data', {orderItems:props.shoppingCart})
      axios.all(
      [
          axios.post(`http://localhost:8080/order`,{...values,purchaseDate:moment().format("DD-MM-YYYY hh:mm:ss"),total:props.total}),
          axios.put('http://localhost:8080/inventoryItems/checkout/update', {orderItems:props.shoppingCart})
          ])
          .then()
      /*setPurchase('orange')
      console.log("Purchase Date", moment().format("DD-MM-YYYY hh:mm:ss"))
      setOrder(values)
      console.log("Order",purchase)*/
      /*axios.post(`http://localhost:8080/inventoryItems`,values)
          .then(res => {
                history.push({
                  pathname: '/nurse/inventory'
                })
              }
          )*/
      /*setmodalDemo(false)*/
    }
  })


  return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Check Out</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                    <tr>
                      <th>Item ID</th>
                      <th>Item Name</th>
                      <th className="text-center">Quantity</th>
                      <th>Price</th>
                      <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>{props.shoppingCart.length ? props.shoppingCart.map(item =>
                        <tr>
                          <td>{item.itemId}</td>
                          <td>{item.name}</td>
                          <td className="text-center">{item.quantity}</td>
                          <td>Rs.{item.price}</td>
                          <td>Rs.{item.quantity * item.price}</td>
                        </tr>
                    ) : null}
                    <tr>
                      <td><b>Total</b></td>
                      <td></td>
                      <td className="text-center"></td>
                      <td></td>
                      <td><b>Rs.{props.total}</b></td>
                    </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Customer Details</CardTitle>
                </CardHeader>
                <CardBody>
                    <form>
                      <Row>
                        <Col>
                          <Label for="orderID">Order ID</Label>
                          <Input name="orderId" onChange={formik.handleChange} type="text" />
                        </Col>
                        <Col>
                          <Label for="fName">First Name</Label>
                          <Input name="fName" onChange={formik.handleChange} type="text" placeholder="First Name"/>
                        </Col>
                        <Col>
                          <Label for="lName">Last Name</Label>
                          <Input name="lName" onChange={formik.handleChange} type="text" placeholder="Last Name"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label for="streetNo">No.</Label>
                          <Input name="streetNo" type="number" onChange={formik.handleChange} placeholder="No Name"/>
                        </Col>
                        <Col>
                          <Label for="street">Street</Label>
                          <Input type="text" onChange={formik.handleChange} placeholder="Street Name" name="street"/>
                        </Col>
                        <Col>
                          <Label for="city">City</Label>
                          <Input type="text" onChange={formik.handleChange} placeholder="City Name" name="city"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Label for="cardType">Card Type</Label>
                          <Input type="select" onChange={formik.handleChange} placeholder="" name="cardType">
                            <option>Master</option>
                            <option>Visa</option>
                          </Input>
                        </Col>
                        <Col>
                          <Label for="cardNo">Card Number</Label>
                          <Input type="number" onChange={formik.handleChange} placeholder="Card Number" name="cardNo"/>
                        </Col>
                        <Col>
                          <Label for="cvv">#CVV</Label>
                          <Input type="number" onChange={formik.handleChange} placeholder="#CVV" name="cvv"/>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="3">
                          <Label for="phoneNo">Phone Number</Label>
                          <Input type="number" onChange={formik.handleChange} placeholder="Phone Number" name="phoneNo"/>
                        </Col>
                      </Row>
                      <FormGroup>
                        <Button color="success" onClick={formik.handleSubmit}>
                          Check Out
                        </Button>
                        <Button color="danger">
                          Reset Default
                        </Button>
                      </FormGroup>
                    </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
  );
}
const mapStateToProps = state => {

  return {
    shoppingCart: state.shoppingCart,
    total: state.total
  }

}

const mapDispatchToProps = dispatch => {


  return {
    rmvCart: (itemId, price, quantity) => dispatch(rmvCart(itemId, price, quantity)),
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);
