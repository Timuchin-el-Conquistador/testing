import React from "react";



import { withRouter, Link } from "react-router-dom";





//import assets
import Google from "./google.svg";
import Logo from "./logo.svg";
import Car from "./car.png";
import Ellipses from "./ellipse.svg";
import Ellipse from "./ellipse2.svg";
import Password from "./icon.svg";
import Vector2 from "./vector2.svg";
import SMS from "./sms.svg";
import Lock from "./lock.svg";

//import classes
import classes from "./Login.module.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      toggle: false,
      emailFocused: false,
      emailIsBlured: false,
      passwordFocused: false,
    };

    // handleValidSubmit
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }
  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleValidSubmit(event) {
    event.preventDefault();

    this.props.loginUser(
      { email: this.state.email, password: this.state.password },
      this.props.history
    );
  }
  // handleValidSubmit

  toggle() {
    this.setState({ ...this.state, toggle: !this.state.toggle });
  }
  focus(event) {
    const name = event.target.name;
    if (name === "email") this.setState({ ...this.state, emailFocused: true });
    else
      this.setState({
        ...this.state,
        passwordFocused: true,
      });
  }
  blur(event) {
    const name = event.target.name;
    if (name === "email")
      this.setState({
        ...this.state,
        emailFocused: false,
        emailIsBlured: true,
      });
    else this.setState({ ...this.state, passwordFocused: false });
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
            backgroundRepeat: "no-repeat",
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
            {" "}
            <span className={classes.head}>Login to Murmur</span>
          </div>

          <form
            className={classes.form}
            onSubmit={this.handleValidSubmit}
            //onValidSubmit={this.handleLogin}
          >
            <div
              className="input-group input-group-lg"
              style={{ marginBottom: "38px" }}
            >
              {!this.state.emailFocused && this.state.email.length === 0 && (
                <div className="input-group-prepend border border-0">
                  <img
                    className="input-group-text border border-0"
                    id="inputGroup-sizing-lg"
                    src={SMS}
                  />
                </div>
              )}
              <input
                className="form-control bg-light border border-0"
                name="email"
                placeholder="E-mail"
                value={this.state.email}
                type="email"
                onFocus={this.focus}
                onBlur={this.blur}
                required
                onChange={(event) => this.handleInputChange(event)}
              />
              {!/@/.test(this.state.email) && this.state.emailIsBlured && (
                <div
            
                  style={{
                    position:'absolute',
                    top:'45px',
                    color: "#FBBD66",
                    fontFamily: "Mont",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Please enter a valid email!{" "}
                </div>
              )}
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
                onFocus={this.focus}
                onBlur={this.blur}
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
            <div className={classes.checkbox__container}>
              <div
                className="custom-control custom-checkbox "
                style={{ position: "absolute", left: "9px" }}
              >
                <input
                  type="checkbox"
                  className='custom-control-input'
                  id="customControlInline"
                />
                <label
                  className="custom-control-label"
                  htmlFor="customControlInline"
                >
                  Remember me
                </label>
              </div>
              <div className={classes.forgetpassword__container}>
                <Link
                  style={{
                    width: "117px",
                    height: "20px",
                  }}
                  className="text-primary"
                  to="/forgot-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button className={`${classes.form__button}`}>Log in</button>
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
            <span className={classes.button__text}>Log in with Google</span>
          </button>
          <div className={classes.signup__container}>
            <p>
              Don't have an account ?{" "}
              <Link to="register" className="font-weight-medium text-primary">
                {" "}
                Signup here{" "}
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}



export default withRouter(Login);
