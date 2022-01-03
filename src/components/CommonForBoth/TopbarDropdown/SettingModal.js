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
import classes from '../../../assets/css/Settings/settings.module.css';
import "../../../assets/css/app.css";
/* images */
import check from './grncheck.svg';

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
            {/* <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="setting_cancel_modal">
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
            </Modal> */}
            {/* Choose new Subscription Plan style */}
              <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="setting_plan_modal">
                <ModalHeader>
                    <span>Choose new Subscription Plan:</span>
                    <button type="button" class="btn-close" aria-label="Close" toggle={this.closeModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#3F2B89"/>
                        </svg>
                    </button>
                </ModalHeader>
                <ModalBody>
                    <div className="plan_modal_cover">
                        <div className="m_plan_item">
                            <input type="radio" name="modal-plan" id="plan_walk" />
                            <label for="plan_walk" className="plan_type">
                                <div className="play_flex_top">
                                    <p className="plan_p">
                                        <small>
                                            <svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58354 0.0413733C5.41642 0.307461 4.80732 1.58712 5.33547 2.66347C5.89247 3.79873 7.39709 4.04906 8.29093 3.15523C8.88678 2.55937 9.00554 1.7178 8.60459 0.931967C8.49896 0.724906 8.1622 0.385993 7.92258 0.245542C7.54391 0.0236264 7.01506 -0.0570168 6.58354 0.0413733ZM5.28324 4.21242C5.05789 4.24987 4.93706 4.29725 1.97472 5.51014L0.0202096 6.3104L0.0101242 8.50348L0 10.6965H0.938049H1.8761L1.88634 9.12994L1.89654 7.56336L2.67229 7.23128C3.09896 7.04865 3.45683 6.90797 3.46754 6.91868C3.48212 6.93326 1.0672 19.4344 0.957516 19.912L0.937345 20H1.91116C2.65501 20 2.88904 19.9885 2.9021 19.9511C2.91152 19.9243 3.27842 18.2533 3.7174 16.2379C4.15643 14.2225 4.52712 12.5778 4.54119 12.583C4.55527 12.5882 5.0082 13.0032 5.54777 13.5052L6.52874 14.4181V17.209V20H7.4669H8.40507V16.4919V12.9839L7.44099 12.0192L6.4769 11.0545L6.73963 9.73216C6.88411 9.00481 7.01095 8.38003 7.02151 8.34371C7.03625 8.29298 7.09144 8.33371 7.25984 8.51962C8.18687 9.54293 9.40496 10.251 10.7309 10.5373C11.0898 10.6148 11.731 10.6965 11.9803 10.6965H12.1186V9.75835V8.82019L11.9134 8.82003C11.8006 8.81995 11.5495 8.79411 11.3555 8.76268C10.4043 8.60839 9.44444 8.10687 8.75039 7.40156C8.36317 7.00804 8.14954 6.70415 7.56299 5.71251C7.30237 5.27188 7.01799 4.84326 6.91135 4.73037C6.67943 4.48488 6.34302 4.30026 5.99203 4.22587C5.69787 4.16356 5.58967 4.16149 5.28324 4.21242Z" fill="#2E3A59"/>
                                            </svg>
                                        </small>
                                        <span>Walk</span>
                                    </p>
                                    <p className="plan_month">
                                        <span>$10</span>
                                        <small>/month</small>
                                    </p>
                                    <div className="plan_txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
                                    </div>
                                    <ul className="plan_ul">
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>   
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <Link href="#" className="current_plan_btn">Current Plan</Link>
                                </div>
                            </label>
                        </div>
                        <div className="m_plan_item">
                            <input type="radio" name="modal-plan" id="plan_run" />
                            <label for="plan_run" className="plan_type">
                                <div className="plan_flex_top">
                                    <p className="plan_p">
                                        <small>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51764 0.021543C8.99776 0.115762 8.42666 0.559764 8.2003 1.04575C7.62588 2.27893 8.51814 3.69737 9.86829 3.69737C10.3614 3.69737 10.8134 3.50741 11.1708 3.15004C12.153 2.16786 11.7652 0.537285 10.442 0.0850334C10.2104 0.00590505 9.77063 -0.0243154 9.51764 0.021543ZM8.16109 4.21116C7.93035 4.2494 7.85016 4.28087 4.87648 5.50005L2.90218 6.30947L2.89209 8.50243L2.88197 10.6954H3.82013H4.7583L4.76854 9.12748L4.77874 7.55961L5.55564 7.2492C5.98295 7.07847 6.34055 6.9468 6.35036 6.95661C6.36573 6.97197 4.95827 14.3703 4.93403 14.4014C4.9291 14.4078 3.91865 14.2176 2.68864 13.979C1.4586 13.7403 0.432704 13.5515 0.408817 13.5594C0.384969 13.5674 0.283204 13.9723 0.18273 14.4591L0 15.3443L0.200049 15.3843C0.626654 15.4696 3.87201 16.1032 4.44643 16.2134C4.77972 16.2773 5.37596 16.4004 5.7714 16.4869C6.22064 16.5852 6.49931 16.6296 6.51421 16.6053C6.52731 16.584 6.73142 15.6676 6.96779 14.5691C7.20416 13.4706 7.40855 12.5762 7.42203 12.5816C7.43552 12.587 7.88867 13.003 8.429 13.506L9.4115 14.4205V17.2103V20H10.3302H11.249V16.472V12.9439L10.3043 11.9987L9.35966 11.0535L9.62203 9.73087C9.76629 9.00347 9.89272 8.38385 9.90293 8.35398C9.91497 8.31876 10.0647 8.44445 10.3282 8.71084C11.521 9.91661 12.9116 10.5516 14.6405 10.6798L15.0021 10.7066V9.76269V8.81882L14.7968 8.81867C14.2754 8.81828 13.4414 8.60779 12.9218 8.3455C12.269 8.01597 11.5601 7.41547 11.157 6.85054C11.0548 6.7073 10.7424 6.20755 10.4627 5.73997C10.168 5.24718 9.87865 4.8126 9.77442 4.70622C9.5472 4.47427 9.21454 4.29596 8.87473 4.22395C8.57972 4.16143 8.47283 4.15952 8.16109 4.21116Z" fill="#2E3A59"/>
                                            </svg>
                                        </small>
                                        <span>Run</span>
                                    </p>
                                    <p className="plan_month">
                                        <span>$55</span>
                                        <small>/month</small>
                                    </p>
                                    <div className="plan_txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
                                    </div>
                                    <ul className="plan_ul">
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>   
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <Link href="#" className="current_plan_btn">Choose this plan</Link>
                                </div>
                            </label>
                        </div>
                        <div className="m_plan_item">
                            <input type="radio" name="modal-plan" id="plan_fly" />
                            <label for="plan_fly" className="plan_type">
                                <div className="plan_flex_top">
                                    <p className="plan_p">
                                        <small>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.0249 0.0881595C17.785 0.199855 17.7794 0.207516 17.2361 1.16705C16.6451 2.21085 16.6804 2.10568 16.8542 2.30774C17.0289 2.51073 17.2786 3.02059 17.3484 3.31656C17.3763 3.43478 17.3997 3.69311 17.4004 3.89063C17.4011 4.08819 17.4046 4.24647 17.4081 4.24237C17.4732 4.16854 19.1457 1.14255 19.1804 1.03601C19.2379 0.859362 19.2105 0.634211 19.1066 0.430673C19.0143 0.249919 18.9314 0.175312 18.712 0.0757706C18.4808 -0.029086 18.2684 -0.025256 18.0249 0.0881595ZM14.5325 2.01642C13.9757 2.12077 13.3733 2.63583 13.1603 3.18981C13.0522 3.47089 13.0167 3.98439 13.0844 4.2886C13.4003 5.70848 15.1621 6.24887 16.2115 5.24782C16.5627 4.91285 16.7189 4.61079 16.7985 4.11265C16.941 3.22065 16.3095 2.28225 15.4089 2.04768C15.1934 1.99156 14.7497 1.97574 14.5325 2.01642ZM11.1894 5.09974C11.1034 5.13132 8.5885 6.69077 5.60069 8.56517C0.349731 11.8594 0.165304 11.979 0.0778385 12.1491C-0.0390553 12.3762 -0.0233054 12.6368 0.118445 12.8216C0.172768 12.8924 0.913409 13.7092 1.7643 14.6367C3.09906 16.0917 3.33555 16.3324 3.48711 16.3903C3.69397 16.4693 3.87124 16.4476 4.05934 16.3201C4.17702 16.2404 12.8505 5.61676 12.8503 5.55274C12.8501 5.51913 12.266 5.18178 12.0602 5.09642C11.8766 5.02025 11.4008 5.02209 11.1894 5.09974ZM8.97185 11.281C6.48914 14.3356 4.50464 16.7435 4.42581 16.797C4.12641 17 3.72648 17.0798 3.43188 16.9953L3.29584 16.9562L2.59186 17.6839C2.20471 18.0841 1.84719 18.4787 1.7974 18.5608C1.41327 19.1945 1.97874 20.0677 2.72665 19.9958C3.10645 19.9593 3.14541 19.9247 5.30273 17.703L7.34968 15.5951L8.31497 14.1069C8.84589 13.2884 9.29154 12.6074 9.30534 12.5936C9.32941 12.5695 9.88015 12.8759 9.88015 12.9134C9.88015 12.9484 10.311 15.6475 10.3301 15.7323C10.3464 15.8048 10.1652 15.9705 9.12795 16.8313C7.72291 17.9971 7.70537 18.0134 7.60454 18.239C7.36762 18.7691 7.66273 19.3947 8.22734 19.5593C8.51784 19.6441 8.80349 19.5925 9.06291 19.4086C9.1616 19.3387 9.89321 18.7404 10.6888 18.079C12.2216 16.8047 12.3066 16.7169 12.3622 16.3481C12.3774 16.2475 12.3108 15.7325 12.1703 14.8652L11.955 13.5365L12.4043 12.7792C12.6515 12.3628 12.8471 12.0156 12.8392 12.0076C12.8312 11.9996 12.6062 11.9772 12.3392 11.9577C11.797 11.9182 11.6372 11.8663 11.4004 11.6524C11.1472 11.4235 11.036 11.1702 11.0344 10.8177C11.0331 10.5324 11.0475 10.4858 11.4406 9.49907C11.6647 8.93645 11.8557 8.48384 11.8652 8.49322C11.8746 8.50264 11.8164 8.98436 11.7359 9.56371C11.6492 10.1877 11.5998 10.6716 11.6147 10.7509C11.6583 10.9835 11.8447 11.2293 12.0546 11.3311C12.2362 11.4193 12.3072 11.4256 13.6516 11.4746C14.4254 11.5028 15.2549 11.521 15.495 11.515C15.9099 11.5048 15.9398 11.4983 16.1004 11.3853C16.3629 11.2007 16.4514 11.0153 16.4372 10.68C16.4218 10.3154 16.2959 10.112 16.0034 9.97845C15.8136 9.89184 15.727 9.88328 14.6091 9.84088C13.9535 9.81602 13.4104 9.78945 13.4023 9.78183C13.3941 9.77421 13.4374 9.39883 13.4985 8.94759C13.5596 8.49639 13.6146 8.1323 13.6209 8.13851C13.6271 8.14477 13.6465 8.39153 13.664 8.68691C13.6875 9.08398 13.7104 9.2332 13.7518 9.25942C13.7827 9.27892 13.9574 9.29491 14.1401 9.29495L14.4723 9.29499L14.7735 8.7766C15.1777 8.08106 15.2092 8.00118 15.2075 7.67418C15.2059 7.35668 15.1265 7.11308 14.9547 6.89899C14.8887 6.81657 14.8498 6.73532 14.8684 6.71847C14.887 6.70159 15.0253 6.60565 15.1757 6.50524L15.4493 6.32265L15.1561 6.34833C14.6339 6.39402 14.0113 6.24207 13.6007 5.96877C13.5083 5.90721 13.4204 5.85758 13.4053 5.8584C13.3903 5.85922 11.3952 8.29941 8.97185 11.281Z" fill="#2E3A59"/>
                                        </svg>
                                        </small>
                                        <span>Fly</span>
                                    </p>
                                    <p className="plan_month">
                                        <span>$75</span>
                                        <small>/month</small>
                                    </p>
                                    <div className="plan_txt">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
                                    </div>
                                    <ul className="plan_ul">
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>   
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="plan_ul_p">
                                                <img src={check} alt="" /><span>Feature one</span>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <Link href="#" className="current_plan_btn">Choose this plan</Link>
                                </div>
                            </label>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(ProfileMenu)
