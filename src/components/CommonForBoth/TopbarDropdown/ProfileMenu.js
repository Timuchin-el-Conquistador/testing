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
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log('profile is running')
    this.setState((prevState) => ({
      menu: !prevState.menu,
    }));
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
            <DropdownItem tag="a" href="/settings">
              <i className="bx bx-user font-size-16 align-middle mr-1"></i>
              Profile
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

            <div className="dropdown-divider"></div>
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
              <span>Logout</span>
            </Link>
          </DropdownMenu>
        </Dropdown>
        <Modal isOpen={true} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>
              Choose a Campaign Objective
            </ModalHeader>

            <ModalBody>
              <Container className="themed-container" fluid={true}>
                <Row xs="1">
                  <Col>
                    <Form>
                      <FormGroup
                        check
                        onChange={(event) => this.handleOnChange(event)}
                      >
                        <Fade in={true} tag="h5" className="mt-3">
                          <Label check>
                            <Input type="radio" name="Brand Awareness" /> Brand
                            awareness{" "}
                            <i
                              className="bx bxs-error-circle"
                              id="BrandAwareness"
                            ></i>
                            <Tooltip
                              id="BrandAwareness"
                              placement="right"
                              isOpen={this.state.brandAwareness}
                              target="BrandAwareness"
                              toggle={() => this.toggleTooltip(1)}
                            >
                              Show your ads to people who most likely to
                              remember them
                            </Tooltip>
                          </Label>
                        </Fade>
                        <Fade in={true} tag="h5" className="mt-3">
                          <Label check>
                            <Input type="radio" name="Reach" /> Reach
                            <i className="bx bxs-error-circle" id="Reach"></i>
                          </Label>
                          <Tooltip
                            id="Reach"
                            placement="right"
                            isOpen={this.state.reach}
                            target="Reach"
                            toggle={() => this.toggleTooltip(2)}
                          >
                            Show your ads to the maximum number of people
                          </Tooltip>
                        </Fade>{" "}
                        <Fade in={true} tag="h5" className="mt-3">
                          <Label check>
                            <Input type="radio" name="Traffic" /> Traffic
                            <i className="bx bxs-error-circle" id="Traffic"></i>
                            <Tooltip
                              id="Traffic"
                              placement="right"
                              isOpen={this.state.traffic}
                              target="Traffic"
                              toggle={() => this.toggleTooltip(3)}
                            >
                              Send people to a destination, like webpage, event,
                              etc
                            </Tooltip>
                          </Label>
                        </Fade>
                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </ModalBody>
            <ModalFooter>
              <Button color="success" onClick={this.toggleCreateAd}>
                Next
              </Button>
            </ModalFooter>
          </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu)
