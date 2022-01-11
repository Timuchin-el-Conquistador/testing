import React, { Component } from "react";
import {

  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { withRouter, Link } from "react-router-dom";
import { Tooltip } from 'reactstrap';

import "../../../assets/css/app.css";
/* images */
import profile from "../../../assets/images/profile.svg";
import square from "../../../assets/images/percentage-square.svg";
import arrow_down from "../../../assets/images/arrow_down.svg";
import info_circle from "../../../assets/images/info-circle.svg";
import arrow_right from "../../../assets/images/arrow-right.svg";

class TestingModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
   
    this.toggleTooltip = this.toggleTooltip.bind(this);
    this.state = {
      tooltipOpen: false
    };
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
  toggleTooltip() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }


  render() {
    return (
      <React.Fragment>
            <button type="button" onClick={this.toggleModal} >Click this!</button>
            {/* add variant testing modal */}
            <Modal isOpen={this.state.toggle} toggle={this.closeModal} className="add_variant_modal">
                <ModalHeader>
                    <p className="add_vrnt_tt">Add Variant</p>
                    <button type="button" class="btn_close" aria-label="Close" toggle={this.closeModal}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.4142 12L17.7072 7.70701C18.0982 7.31601 18.0982 6.68401 17.7072 6.29301C17.3162 5.90201 16.6842 5.90201 16.2933 6.29301L12.0002 10.586L7.70725 6.29301C7.31625 5.90201 6.68425 5.90201 6.29325 6.29301C5.90225 6.68401 5.90225 7.31601 6.29325 7.70701L10.5862 12L6.29325 16.293C5.90225 16.684 5.90225 17.316 6.29325 17.707C6.48825 17.902 6.74425 18 7.00025 18C7.25625 18 7.51225 17.902 7.70725 17.707L12.0002 13.414L16.2933 17.707C16.4882 17.902 16.7443 18 17.0002 18C17.2562 18 17.5122 17.902 17.7072 17.707C18.0982 17.316 18.0982 16.684 17.7072 16.293L13.4142 12Z" fill="#3F2B89"/>
                        </svg>
                    </button>
                </ModalHeader>
                <ModalBody>
                  <form action="">
                    <div className="add_vrnt_content">
                      <div className="add_vrnt_left">
                        <div className="add_vrnt_element">
                          <label htmlFor="add_name">Name</label>
                          <div className="position-relative">
                            <input type="text" name="add_name" id="add_name" placeholder="Name" className="form-control"/>
                            <img src={profile} alt="" className="vrnt_element_icon"/>
                          </div>
                        </div>
                        <div className="add_vrnt_element">
                          <label htmlFor="add_weight">Weight</label>
                          <div className="position-relative">
                            <select name="add_weight" id="add_weight" className="form-control">
                              <option value="1">30</option>
                              <option value="2">40</option>
                              <option value="3">50</option>
                            </select>
                            <img src={square} alt="" className="vrnt_element_icon"/>
                            <img src={arrow_down} alt="" className="vrnt_arrow_icon"/>
                          </div>
                        </div>
                        <div className="date_time_add">
                          <p className="date_time_p">
                            <span>Date</span>
                            <button type="button" className="date_time_btn" id="dateToolTip">
                              <img src={info_circle} alt="" />
                              <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="dateToolTip" toggle={this.toggleTooltip}>
                                <span>Select time</span>
                                <p>Commodo auctor id nibh eget et feugiat turpis ac in.</p>
                              </Tooltip>
                            </button>
                          </p>
                          <div className="add_date_time">
                            <div className="add_vrnt_element">
                              <label htmlFor="select_date1">From</label>
                              <div className="position-relative">
                                <select name="select_date1" id="select_date1" className="form-control" placeholder="Select date">
                                  <option value="1">Monday</option>
                                  <option value="2">Tuesday</option>
                                  <option value="3">Wednesday</option>
                                  <option value="4">Thursday</option>
                                  <option value="5">Friday</option>
                                  <option value="6">Saturday</option>
                                  <option value="7">Sunday</option>
                                </select>
                                <img src={arrow_down} alt="" className="vrnt_arrow_icon"/>
                              </div>
                            </div>
                            <div className="date_time_between">
                              <img src={arrow_right} alt="" />
                            </div>
                            <div className="add_vrnt_element">
                              <label htmlFor="select_date2">To</label>
                              <div className="position-relative">
                                <select name="select_date2" id="select_date2" className="form-control" placeholder="Select date">
                                  <option value="1">Monday</option>
                                  <option value="2">Tuesday</option>
                                  <option value="3">Wednesday</option>
                                  <option value="4">Thursday</option>
                                  <option value="5">Friday</option>
                                  <option value="6">Saturday</option>
                                  <option value="7">Sunday</option>
                                </select>
                                <img src={arrow_down} alt="" className="vrnt_arrow_icon"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* start time */}
                        <div className="date_time_add">
                          <p className="date_time_p">
                            <span>Time</span>
                            {/* <button type="button" className="date_time_btn" id="timeToolTip">
                              <img src={info_circle} alt="" />
                              <Tooltip placement="top" isOpen={this.state.tooltipOpen} target="timeToolTip" toggle={this.toggleTooltip}>
                                <span>Select time</span>
                                <p>Commodo auctor id nibh eget et feugiat turpis ac in.</p>
                              </Tooltip>
                            </button> */}
                          </p>
                          <div className="add_date_time">
                            <div className="add_vrnt_element">
                              <label htmlFor="select_time1">From</label>
                              <div className="position-relative">
                                <select name="select_date1" id="select_time1" className="form-control" placeholder="Select time">
                                  <option value="1">11:30</option>
                                  <option value="2">11:40</option>
                                  <option value="3">11:50</option>
                                </select>
                                <img src={arrow_down} alt="" className="vrnt_arrow_icon"/>
                              </div>
                            </div>
                            <div className="date_time_between">
                              <img src={arrow_right} alt="" />
                            </div>
                            <div className="add_vrnt_element">
                              <label htmlFor="select_time2">To</label>
                              <div className="position-relative">
                                <select name="select_time2" id="select_time2" className="form-control" placeholder="Select time">
                                  <option value="1">12:30</option>
                                  <option value="2">12:40</option>
                                  <option value="3">12:50</option>
                                </select>
                                <img src={arrow_down} alt="" className="vrnt_arrow_icon"/>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end time */}
                      </div>
                      <div className="add_vrnt_right">
                        <div class="media_block">
                          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.8 13.3868C24.8933 8.78683 20.8533 5.3335 16 5.3335C12.1467 5.3335 8.8 7.52016 7.13333 10.7202C3.12 11.1468 0 14.5468 0 18.6668C0 23.0802 3.58667 26.6668 8 26.6668H25.3333C29.0133 26.6668 32 23.6802 32 20.0002C32 16.4802 29.2667 13.6268 25.8 13.3868ZM18.6667 17.3335V22.6668H13.3333V17.3335H9.33333L16 10.6668L22.6667 17.3335H18.6667Z" fill="#7356C0"/>
                          </svg>
                          <h4 class="media_h4">Drag &amp; Drop</h4>
                          <h5 class="media_h5">Drag or click here to upload</h5>
                          <button type="button" class="media_upload_btn">Upload Image</button>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="add_vrnt_sv">Save</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </ModalBody>
            </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(TestingModal)
