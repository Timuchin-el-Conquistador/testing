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
            <button type="button" onClick={this.toggleModal} >Click this!</button>
            {/* Setting cancelation modal */}
            <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="setting_cancel_modal">
                <ModalHeader>
                    <span>Reason of the cencelation:</span>
                    <button type="button" class="btn-close" aria-label="Close" toggle={this.closeModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#3F2B89"/>
                        </svg>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <form action="">
                        <div className="form_element_modal">
                            <label htmlFor="reason_cancel">Reason of the Cencelation:</label>
                            <div className="position-relative max_343">
                                <select name="reason_cancel" id="reason_cancel" className="form-control">
                                    <option value="" disabled>Choose Reason</option>
                                    <option value="">Reason 1</option>
                                    <option value="">Reason 2</option>
                                    <option value="">Reason 3</option>
                                </select>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 13.5C9.54471 13.5 9.08994 13.3245 8.74524 12.9798L3.3119 7.54648C3.29038 7.52495 3.2771 7.49422 3.2771 7.45837C3.2771 7.42251 3.29038 7.39178 3.3119 7.37025C3.33343 7.34873 3.36417 7.33545 3.40002 7.33545C3.43587 7.33545 3.4666 7.34873 3.48813 7.37025L8.92146 12.8036C9.51673 13.3988 10.4833 13.3988 11.0786 12.8036L16.5119 7.37025C16.5334 7.34873 16.5642 7.33545 16.6 7.33545C16.6359 7.33545 16.6666 7.34873 16.6881 7.37025C16.7097 7.39178 16.7229 7.42251 16.7229 7.45837C16.7229 7.49422 16.7097 7.52495 16.6881 7.54648L11.2548 12.9798C10.9101 13.3245 10.4553 13.5 10 13.5Z" fill="#292D32" stroke="#2E3A59"/>
                                </svg>
                            </div>
                        </div>
                        <div className="form_element_modal">
                            <label htmlFor="about_reason">Say more about reason:</label>
                            <textarea name="about_reason" id="about_reason" cols="30" rows="10" className="form-control" placeholder="Explain more..."></textarea>
                        </div>
                        <div className="form_element_btn text-center">
                            <button type="button" className="reason_cancel_btn">Cancel my plan</button>
                        </div>
                    </form>
                </ModalBody>
            </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu)
