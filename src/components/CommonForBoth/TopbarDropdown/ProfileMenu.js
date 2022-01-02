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
import "../../../assets/css/app.css";

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
        <div class="sources_item">
          <div class="source_item_right">
            <div class="dot_dropdown">
              <Dropdown className={classes.destin_dropdown}
              isOpen={this.state.menu}
              toggle={this.toggle}
             >
                <DropdownToggle
                  id="page-header-user-dropdown"
                  tag="button"
                  type='button'
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z" fill="#2E3A59"/>
                  </svg>
                </DropdownToggle>
                <DropdownMenu right className={classes.dropdown_menu}>
                  <DropdownItem tag="a" onClick={this.toggleModal} className={classes.dropdown_item}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.8337 6.99996C12.8337 10.22 10.2203 12.8333 7.00033 12.8333C3.78033 12.8333 1.81449 9.58996 1.81449 9.58996M1.81449 9.58996H4.45116M1.81449 9.58996V12.5066M1.16699 6.99996C1.16699 3.77996 3.75699 1.16663 7.00033 1.16663C10.8912 1.16663 12.8337 4.40996 12.8337 4.40996M12.8337 4.40996V1.49329M12.8337 4.40996H10.2437" stroke="#192038" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>Update</span>
                  </DropdownItem>
                  <DropdownItem tag="a" onClick={this.toggleModal} className={classes.dropdown_item}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.00033 12.8333C10.2203 12.8333 12.8337 10.22 12.8337 6.99996C12.8337 3.77996 10.2203 1.16663 7.00033 1.16663C3.78033 1.16663 1.16699 3.77996 1.16699 6.99996C1.16699 10.22 3.78033 12.8333 7.00033 12.8333Z" stroke="#192038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M11.0251 2.91663L2.8584 11.0833" stroke="#192038" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>Disable</span>
                  </DropdownItem>
                  <DropdownItem tag="a" onClick={this.toggleModal} className={classes.dropdown_item}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.25 3.48832C10.3075 3.29582 8.35333 3.19666 6.405 3.19666C5.25 3.19666 4.095 3.25499 2.94 3.37166L1.75 3.48832" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.95801 2.89913L5.08634 2.13496C5.17967 1.58079 5.24967 1.16663 6.23551 1.16663H7.76384C8.74967 1.16663 8.82551 1.60413 8.91301 2.14079L9.04134 2.89913" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.9956 5.33167L10.6164 11.2058C10.5522 12.1217 10.4997 12.8333 8.87224 12.8333H5.12724C3.49974 12.8333 3.44724 12.1217 3.38307 11.2058L3.00391 5.33167" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.02539 9.625H7.96789" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.54199 7.29163H8.45866" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>Delete</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
      
        {/* Destination Modal 1 */}
        {/* <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="destionation_modal">
            <ModalHeader>
                <span>Sync to Segment</span>
                <button type="button" class="btn-close" aria-label="Close" toggle={this.closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#3F2B89"/>
                  </svg>
                </button>
              </ModalHeader>
              <ModalBody>
                <div className="modal_api_input">
                  <input type="text" placeholder="API Key" className="modal_input"/>
                </div>
              </ModalBody>
              <ModalFooter>
                <button type="button" className="mdl_delete_btn"> 
                  <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 3.48832C10.3075 3.29582 8.35333 3.19666 6.405 3.19666C5.25 3.19666 4.095 3.25499 2.94 3.37166L1.75 3.48832" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M4.95801 2.89913L5.08634 2.13496C5.17967 1.58079 5.24967 1.16663 6.23551 1.16663H7.76384C8.74967 1.16663 8.82551 1.60413 8.91301 2.14079L9.04134 2.89913" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.9956 5.33167L10.6164 11.2058C10.5522 12.1217 10.4997 12.8333 8.87224 12.8333H5.12724C3.49974 12.8333 3.44724 12.1217 3.38307 11.2058L3.00391 5.33167" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.02539 9.625H7.96789" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M5.54199 7.29163H8.45866" stroke="#F13239" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  <span>Delete</span>
                </button>
                <button type="button" className="mdl_save_btn">Save</button>
              </ModalFooter>
            </Modal> */}

            {/* Destination Modal 2 */}
            <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="destionation_modal">
            <ModalHeader>
                <span>Sync to Segment</span>
                <button type="button" class="btn-close" aria-label="Close" toggle={this.closeModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#3F2B89"/>
                  </svg>
                </button>
              </ModalHeader>
              <ModalBody>
                <div className="modal_api_input">
                  <input type="text" placeholder="API Key" className="modal_input"/>
                </div>
              </ModalBody>
              <ModalFooter>
                <button type="button" className="mdl_delete_cancel"> 
                  <span>Cancel</span>
                </button>
                <button type="button" className="mdl_save_btn">Save</button>
              </ModalFooter>
            </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu)
