import React, { Component } from "react";



//router
import { withRouter, Link } from "react-router-dom";




//styles and icons
import classes from "../../../assets/css/Authentication/ForgotPassword/index.module.css";

import Logo from "../../../assets/css/common/icons/logoBlue.svg";
import Resetkey from '../../../assets/css/Authentication/ForgotPassword/icons/resetkey.svg'
import Slash from '../../../assets/css/common/icons/slash.svg'
import SMS from '../../../assets/css/common/icons/sms.svg'
import Vector2 from "../../../assets/css/common/icons/copyrightblack.svg";
import Arrowleft from '../../../assets/css/common/icons/arrowleft.svg'

class ForgetPasswordPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:''
    };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
  }
 

  handlePasswordChange(event){
      const name = event.target.name
      this.setState({[name]: event.target.value})
  }


  // handleValidSubmit
  handleValidSubmit(event) {
    event.preventDefault();
    
    // axios
    //   .post("http://localhost:4000/api/v1/users/signup", this.state)
    //   .then((res) => console.log({ res }))
    //   .catch((err) => console.log({ err }));
  }

  componentDidMount() {
    
    document.body.classList.add("bg-transparent");
  }
  componentWillUnmount(){
    document.body.classList.remove("bg-transparent");
  }


  render() {
    return (
      <React.Fragment>
        <header className={classes.header}>
          <div className={classes.mur_contain}>
            <a href="#" className={classes.logo}>
              <img src={Logo} alt="logo" />
            </a>
          </div>
        </header>
        <div className={classes.reset_password}>
          <div className={classes.reset_contain}>
            <div className={classes.reset_top}>
              <div className={classes.reset_top_icon}>
                <img src={Resetkey} alt="reset icon" />
              </div>
            </div>
            <h1 className={classes.reset_h1}>Forgot your Password?</h1>
            <h4 className={classes.reset_h2}>
              No worries, we’ll send you reset Instructions
            </h4>
            <form action="">
              <div className={classes.reset_form}>
                <div className={classes.rst_email}>
                  <input
                    type="email"
                    className={classes.rst_form_item}
                    value ={this.state.password}
                    onChange={this.handlePasswordChange}
                    name="email"
                    id="email"
                    placeholder="E-mail"
                  />
                  <img
                    src={SMS}
                    alt="email icon"
                    className={classes.rst_email_icon}
                  />
                </div>
                <button type="submit" className={classes.rst_form_btn}>
                  Reset password
                </button>
                <div className={classes.rst_center}>
                  <Link to='/login' className={classes.rst_back_lgn}>
                    <img src={Arrowleft} alt="reset password icon" />
                    <span>Back to login</span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
          <img src={Slash} alt="" className={classes.slash_detail1} />
          <img src={Slash} alt="" className={classes.slash_detail2} />
        </div>
        <footer className={classes.footer}>
          <div className={`${classes.mur_contain} ${classes.mur_flex}`}>
            <p className={`${classes.footer_copyright} ${classes.mur_flex}`}>
              <img src={Vector2} alt="copyright icon" />
              <span>{new Date().getFullYear()}, MurmurCars</span>
            </p>
            <ul className={classes.footer_links}>
              <li>
                <a href="#" className={classes.footer_link}>
                  All rights reserved
                </a>
              </li>
              <li>
                <a href="#" className={classes.footer_link}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}


export default withRouter(ForgetPasswordPage)
