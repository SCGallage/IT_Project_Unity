import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"



// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    FormGroup,
    Input,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col, ModalBody, ModalFooter, Modal
} from "reactstrap";

function ItemDetails() {

    const history = useHistory();
    const [posts, setPosts] = useState(0);
    const [modalDemo, setmodalDemo] = useState(false);
    var i=0;

    useEffect(() => {
            axios.get("http://localhost:8080/inventoryItems")
                .then(
                    response => {
                        setPosts(response.data)
                        console.log(response.data)
                    })
        }
        ,[]);

    return (
        <>
            <div className="content">
                <h1>Inventory Items</h1>
                <Nav className="justify-content-center">
                    <NavItem>
                        <div color="info">
                            <NavLink className="h4"><Link to="/admin/deleteItem/items/Tablet">Tablet</Link></NavLink>
                    </div>
                    </NavItem>
                    <NavItem>
                        <NavLink className="h4"><Link to="/admin/deleteItem/items/Equipment">Equipment</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="h4"><Link to="/admin/deleteItem/items/Other">Other</Link></NavLink>
                    </NavItem>
                </Nav>
                    <Row>
                    {
                        posts.length ?
                            posts.map(obj =>
                                    <Col md="3">
                                        <Card className="card-user">
                                            <CardBody className="text-left">
                                                <CardText/>
                                                <div className="author">
                                                    <div className="block block-one"/>
                                                    <div className="block block-two"/>
                                                    <div className="block block-three"/>
                                                    <div className="block block-four"/>
                                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                                        <img
                                                            alt="..."
                                                            className="avatar"
                                                            src={require("assets/img/tablets.jpg")}
                                                        />
                                                        <h5 className="title">{obj.itemID}</h5>
                                                    </a>
                                                    <p className="description">Item Name : {obj.displayName}</p>
                                                    <p className="description">Manufacturer : {obj.manufacturer}</p>
                                                    <p className="description">Item Type : {obj.itemType}</p>
                                                    <p className="description">Manufacture Date : {obj.mfgDate}</p>
                                                    <p className="description">Expiration Date : {obj.expDate}</p>
                                                    <p className="description">Dosage : {obj.dose}</p>
                                                    <p className="description">Price : {obj.price}</p>
                                                    <p className="description">Inventory : {obj.noOfItems}</p>
                                                </div>
                                            </CardBody>
                                            <CardFooter>
                                                <div className="button-container">
                                                    <Button color="info" className="btn-round">ADD TO CART</Button>
                                                    <Link to={`/nurse/inventory/${obj.itemID}`}>
                                                    <Button className="btn-icon btn-round" color="twitter">
                                                        <i className="tim-icons icon-single-copy-04"/>
                                                    </Button>
                                                    </Link>
                                                    <Button className="btn-icon btn-round" color="facebook"
                                                            onClick={() => setmodalDemo(true)}>
                                                        <i className="tim-icons icon-simple-remove"/>
                                                    </Button>
                                                </div>
                                            </CardFooter>
                                            <Modal isOpen={modalDemo}>
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">
                                                        Delete Item From Inventory
                                                    </h5>
                                                    <button
                                                        type="button"
                                                        className="close"
                                                        data-dismiss="modal"
                                                        aria-hidden="true"
                                                        onClick={() => setmodalDemo(false)}
                                                    >
                                                        <i className="tim-icons icon-simple-remove"/>
                                                    </button>
                                                </div>
                                                <ModalBody>
                                                    <p>Confirm that you want to delete this item. Changes cannot be reverted!</p>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="secondary" onClick={() => setmodalDemo(false)}>
                                                        Close
                                                    </Button>
                                                    <Button color="primary"
                                                            onClick={() => {
                                                                axios.delete(`http://localhost:8080/inventoryItems/${obj.itemID}`)
                                                                .then(res => {
                                                                    setmodalDemo(false)
                                                                    history.push({
                                                                        pathname: '/nurse/inventory'
                                                                    })
                                                                });
                                                            }}>
                                                        Delete
                                                    </Button>
                                                </ModalFooter>
                                            </Modal>
                                        </Card>
                                    </Col>
                            ):null
                    }
                </Row>
            </div>
        </>
    );
    //console.log('Form Values',this.formik.values)
}

export default ItemDetails;