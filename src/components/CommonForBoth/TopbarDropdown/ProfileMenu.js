import React, { Component } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Media,
  Table,
  Badge,
  CardText,
  CardSubtitle,
  Form,
  FormGroup,
  Label,
  Input,
  Fade,
  FormText,
  Tooltip,
  Alert,
  InputGroupAddon,
  InputGroup,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";




// users
import user1 from "../../../assets/images/avatar.png";

import classes from '../../../assets/css/Settings/settings.module.css'

class ProfileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      username: sessionStorage.getItem("fullName")
        ? sessionStorage.getItem("fullName")
        : null,
        toggle:false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  toggle() {
    console.log('profile is running')
    this.setState((prevState) => ({
      menu: !prevState.menu
    }));
  }

  toggleModal(){
    this.setState({...this.state, toggle: true });
  }
  closeModal(){
    this.setState({...this.state, toggle: false });
  }

  render() {
    return (
      <React.Fragment>
        <Dropdown
          isOpen={this.state.menu}
          toggle={this.toggle}

          //className={`${this.props.scope==='global' &&  classes.search_profil_parent}`}
         // className="d-inline-block"
        >
          <DropdownToggle
            //className="btn header-item waves-effect"
            id="page-header-user-dropdown"
            tag="button"
            type='button'
            className={`${this.props.scope==='global'? classes.search_profil: classes.profil_cover}`}
          >
            <img
              //className="rounded-circle header-profile-user"
              className={`${this.props.scope==='global'? classes.profil_img : classes.profil_cover_img}`}
              src={
                sessionStorage.getItem("profileImage")
                  ? sessionStorage.getItem("profileImage")
                  : user1
              }
              alt="Header Avatar"
            />
           {/* <span 
           // className="d-none d-xl-inline-block ml-2 mr-1"
            >
              {this.state.username}
           </span>*/}
            {/* <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i> */}
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem tag="a" onClick={this.toggleModal}>
              <i className="bx bx-user font-size-16 align-middle mr-1"></i>
              Update
            </DropdownItem>
            {/*<DropdownItem tag="a" href="/billing">
              <i className="bx bx-wallet font-size-16 align-middle mr-1"></i>
              {this.props.t("Billing")}
            </DropdownItem>
            <DropdownItem tag="a" href="#">
              <span className="badge badge-success float-right">11</span>
              <i className="mdi mdi-settings font-size-17 align-middle mr-1"></i>
              {this.props.t("Settings")}
            </DropdownItem> */}
      
     
            <DropdownItem>
            <Link  onClick={this.toggleModal}>
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
              <span>Deactivate</span>
            </Link>
            </DropdownItem>
            <DropdownItem>
            <Link  onClick={this.toggleModal}>
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
              <span>Cansel</span>
            </Link>
            </DropdownItem>
            <DropdownItem>
            <Link  onClick={this.toggleModal}>
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
              <span>4th one</span>
            </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Modal isOpen={this.state.toggle} toggle={this.closeModal}>
            <ModalHeader  toggle={this.closeModal}>
              Choose a Campaign Objective
            </ModalHeader>

            <ModalBody>
              <Container className="themed-container" fluid={true}>
                <Row xs="1">
                  <Col>
                 
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
    
            </ModalFooter>
          </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu)
