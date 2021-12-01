import React from "react";

//reactstrap
import {Alert} from 'reactstrap'


import { withRouter, Link } from "react-router-dom";

//import axios from "axios";




//import assets
import Google from "./google.svg";
import Logo from "./logo.svg";
import Car from "./car.png";
import Ellipses from "./ellipse.svg";
import Ellipse from "./ellipse2.svg";
import SMS from "./sms.svg";
import Lock from "./lock.svg";
import Password from "./icon.svg";
import Vector2 from "./vector2.svg";
import Phone from './mobile.svg'
import Company from './bank.svg'
import Name from './user.svg'

//import classes
import classes from "./Signup.module.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      phoneNumber: "",
      fullName: "",
      toggle: false,

    };

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggle = this.toggle.bind(this);

  }



  handleValidSubmit(event){
    
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };
  toggle() {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  }


  componentDidMount() {
  
  }
  render() {
    return (
      <div className={classes.main__container}>
        <div
          className={classes.leftSideContainer}
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #3F2B89 100%),url(${Car})`,
            opacity: "0.8",
            backgroundPosition: "80% 25%",
          }}
        >
          <header className={classes.logo__header}>
            <div className={classes.logo__container}>
              <img src={Logo} className={classes.logo} />
              <span className={classes.logo__span}>urmur</span>
            </div>
          </header>
          <section className={classes.leftContainer__main}>
            <div>
              <h6 className={classes.main__head}>
                Grow Business By Getting In Front of Your Ideal Customers{" "}
              </h6>
              <p className={classes.main__paragraph}>
                Explore audience on streets via real-time street-level data and
                connect with them via smart digital car-top billboards, engage
                with viewers in real-time, collect data in exchange of rewards
                and discounts and retarget them via retargeting online Ads
                dynamically.
              </p>
            </div>
          </section>
          <section className={classes.ellipses}>
            <img src={Ellipses} className={classes.ellipse1} />
            <img src={Ellipse} className={classes.ellipse2} />
            <img src={Ellipses} className={classes.ellipse3} />
          </section>
          <footer className={classes.footer}>
            <div className={classes.copyright}>
              <span className={classes.footer__copyright__icon}>
                {" "}
                <img className={classes.footer__icon} src={Vector2} />
              </span>

              <div className={classes.footer__copyright}>
                <p>
                  {new Date().getFullYear()}{" "}
                  <span className={classes.companyName}>MurmurCars</span>
                </p>
              </div>
            </div>
            <span className={classes.copyright__right}>
              All rights reserved
            </span>
            <span>Privacy Policy</span>
          </footer>
        </div>

        <div className={classes.formContainer}>
          <div className={classes.form__header}>

                <span className={classes.head}>SIGNUP</span>
          </div>

          <form
            className={classes.form}
            onSubmit={this.handleValidSubmit}
            //onValidSubmit={this.handleLogin}
          >
            {this.props.user && this.props.user ? (
              <Alert color="success">Register User Successfully</Alert>
            ) : null}
            {this.props.registrationError && this.props.registrationError ? (
              <Alert color="danger">{this.props.registrationError}</Alert>
            ) : null}
            <div
              className="input-group input-group-lg"
              style={{ marginBottom: "20px" }}
            >
      
                <div className="input-group-prepend border border-0">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={Company}
                  />
                </div>
        
              <input
                className="form-control bg-light border border-0"
                name="name"
                //value="admin@themesbrand.com"
                value={this.state.email}
                placeholder="Full Name"
                type="text"
                required
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>

            <div
              className="input-group input-group-lg"
              style={{ marginBottom: "20px" }}
            >
 
                <div className="input-group-prepend border border-0">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={Name}
                  />
                </div>

              <input
                className="form-control bg-light border border-0"
                name="company-name"
                //value="admin@themesbrand.com"
                value={this.state.email}
                placeholder="Company Name"
                type="text"
                required
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <div
              className="input-group input-group-lg"
              style={{ marginBottom: "20px" }}
            >
   
                <div className="input-group-prepend border border-0">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={Phone}
                  />
                </div>
     
              <input
                className="form-control bg-light border border-0"
                name="phone"
                value={this.state.email}
                placeholder="Phone number"
                type="phone"
                required
                onChange={(event) => this.handleInputChange(event)}
              />
            </div>
            <div
              className="input-group input-group-lg"
              style={{ marginBottom: "20px" }}
            >

                <div className="input-group-prepend border border-0">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={SMS}
                  />
                </div>
       
              <input
                className="form-control bg-light border border-0"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                type="email"
                required
                onChange={(event) => this.handleInputChange(event)}
              />
       
            </div>
            <div className="input-group input-group-lg mb-4">
              {!this.state.passwordFocused && this.state.password.length === 0 && (
                <div className="input-group-prepend ">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={Lock}
                  />
                </div>
              )}

              <input
                className={`form-control bg-light border border-0 `}
                name="password"
                placeholder="Password"
                type={this.state.toggle ? "text" : "password"}
                required
                onChange={(event) => this.handleInputChange(event)}
              />
              <div className="input-group-append ">
                <img
                  className="input-group-text border border-0 "
                  src={Password}
                  onClick={this.toggle}
                />
              </div>
            </div>

            <button className={classes.form__button}>Signup</button>
          </form>

          <fieldset className={classes.fieldset}>
            <div className={classes.legend__container}>
              <legend className={classes.legend} align="center">
                or
              </legend>
            </div>
          </fieldset>
          <button
            id="GoogleLogin"
            className={classes.google__button}
          >
            <img src={Google} className={classes.google__logo} />
            <span className={classes.button__text}>Signup with Google</span>
          </button>
          <div className={classes.toLogIn}>
            <p>
              Have an account ?{" "}
              <Link to="/login" className="font-weight-medium text-primary">
                {" "}
                Login here
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}


export default Register
