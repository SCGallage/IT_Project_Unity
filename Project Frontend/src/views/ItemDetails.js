import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom"

import {useDispatch, useSelector} from "react-redux";

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
    Alert,
    NavItem,
    NavLink,
    Row,
    Col, ModalBody, ModalFooter, Modal
} from "reactstrap";
import {addCart} from "../Redux/cartAction";
import {connect} from "react-redux"
import NotificationAlert from "react-notification-alert";
import EasyTimer from "easytimer";


var options = {};

function ItemDetails(props) {

    const notify = useRef("notify");
    const [visible, setVisible] = useState(false);
    const onDismiss = () => setVisible(false);
    const dismissal = (e) => setVisible(false);

    function myFunct(){
        notify.notificationAlert(options)
    }

    function updateSearch(){}

    options = {
        place: 'tl',
        message: (
            <div>
                <div>
                    Welcome to <b>Now UI Dashboard React</b> - a beautiful freebie for every web developer.
                </div>
            </div>
        ),
        type: "danger",
        icon: "now-ui-icons ui-1_bell-53",
        autoDismiss: 7
    }

    function checkCartEntry(itemId,displayName,price) {
        const available = props.shoppingCart.filter(function (item) {
            console.log(item.itemId)
            return item.itemId === itemId;
        })
        if (available.length === 0)
            props.addCart(itemId,displayName,5,price)
        else {
            setVisible(true);
            let timer = new EasyTimer();
            timer.start({countdown: true, startValues: {seconds: 3}});
            timer.addEventListener('targetAchieved', dismissal);
        }
    }

    const history = useHistory();
    const [posts, setPosts] = useState([]);
    const [modalDemo, setmodalDemo] = useState(false);
    const [search, setSearch] = useState('');
    var i=0;
    let filteredItems = []

    useEffect(() => {
            axios.get("http://localhost:8080/inventoryItems")
                .then(
                    response => {
                        setPosts(response.data)
                        console.log(response.data)
                    })
        }
        ,[]);


    filteredItems = posts.filter(
        (item) => {
            return item.displayName.indexOf(search) !== -1;
        }
    );
    console.log("Posts List",posts.length)
    console.log("Filtered Items",filteredItems)
    return (
        <>
            <div className="content">
                <Alert color="info" isOpen={visible} toggle={onDismiss}>
                    I am an alert and I can be dismissed!
                </Alert>
                <h1>Inventory Items</h1>
                <Nav className="justify-content-center">
                    <NavItem>
                        <div color="info">
                            <NavLink className="h4"><Link to="/nurse/inventory/items/Medicine">Medicine</Link></NavLink>
                    </div>
                    </NavItem>
                    <NavItem>
                        <NavLink className="h4"><Link to="/nurse/inventory/items/Medical Equipment">Medical Equipment</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="h4"><Link to="/nurse/inventory/items/Other">Other</Link></NavLink>
                    </NavItem>
                </Nav>
                    <Row>
                    {
                        filteredItems.length ?
                            filteredItems.map(obj =>
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
                                                        <h5 className="title">Item ID : {obj.itemID}</h5>
                                                    </a>
                                                    <p className="description">Item Name : {obj.displayName}</p>
                                                    <p className="description">Manufacturer : {obj.manufacturer}</p>
                                                    <p className="description">Item Type : {obj.itemType}</p>
                                                    <p className="description">Manufacture Date : {obj.mfgDate}</p>
                                                    <p className="description">Expiration Date : {obj.expDate}</p>
                                                    <p className="description">Dosage : {obj.dose}mg</p>
                                                    <p className="description">Price : Rs.{obj.price}</p>
                                                    <p className="description">Inventory : {obj.noOfItems}</p>
                                                </div>
                                            </CardBody>
                                            <CardFooter>
                                                <div className="button-container">
                                                    <Button color="info" className="btn-round" onClick={() => checkCartEntry(obj.itemID,obj.displayName,obj.price)}><i className="tim-icons icon-cart"/></Button>
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


const mapStateToProps = state => {

    return {
        shoppingCart: state.shoppingCart
    }

}

const mapDispatchToProps = dispatch => {

    //refs.notificationAlert.notificationAlert(options);
    return {
        addCart: (itemId,name,quantity,price) => dispatch(addCart(itemId,name,quantity,price)),
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(ItemDetails);