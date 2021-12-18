import React from "react";


import { Link, withRouter } from "react-router-dom";





import classes from "../../../assets/css/Authentication/subscribe/index.module.css";


import Logo from "../../../assets/css/common/icons/logoBlue.svg";
import Facebook from "../../../assets/css/Authentication/subscribe/facebook.svg";
import Linkedin from "../../../assets/css/Authentication/subscribe/linkedin.svg";
import Slack from "../../../assets/css/common/icons/slack.svg"
import Slash from "../../../assets/css/common/icons/slash.svg";


class Subscribe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribe: true,
    };
    this.toggleSubscribe = this.toggleSubscribe.bind(this)
    this.finishRegister = this.finishRegister.bind(this);
  }

  toggleSubscribe() {
    this.setState({
      subscribe: !this.state.subscribe,
    });
  }
  finishRegister() {

    if (this.state.subscribe) {
        this.props.history.push('/dashboard')
    }
  }


  render() {
    return (
      <React.Fragment>
        {this.props.loading && (
          <div
            className=" d-flex  flex-row  justify-content-center"
            style={{ height: "100vh" }}
          >
            <div
              className="spinner-border text-primary "
              role="status"
              style={{ margin: "auto" }}
            ></div>
          </div>
        )}
        {
          <React.Fragment>
            <header className={classes.header}>
              <div className={classes.mur_contain}>
                <a href="#" className={classes.logo}>
                  <img src={Logo} alt="logo" />
                </a>
              </div>
            </header>
            <div className={classes.subscribe_section}>
              <div className={classes.subc_container}>
                <h1 className={`${classes.subc_h1} ${classes.subc_center}`}>Signup Complete!</h1>
                <h4 className={`${classes.subc_h4} ${classes.subc_center}`}>
                  Nice work! Your account is created.
                </h4>
                <h4 className={`${classes.subc_h4} ${classes.subc_center}`}>
                  Join our Community to learn more about Marketing, Growth
                  Haking, Advertising
                </h4>
                <div className={classes.subcribe_cover}>
                  <div className={`${classes.subc_list_li} ${classes.subc_list_top}`}>
                    <div className={classes.subc_item}>
                      <p>Subscribe to Murmur</p>
                      <span>For stay uptodate</span>
                    </div>
                    <label className={classes.switch} htmlFor="checkbox">
                      <input type="checkbox" id="checkbox" checked onClick={this.toggleSubscribe} />
                      <div className={`${classes.slider} ${classes.round}`}></div>
                    </label>
                  </div>
                  <ul className={classes.subc_list}>
                    <li>
                      <div className={classes.subc_list_li}>
                        <div className={classes.subc_item}>
                          <p>Join Slack Community</p>
                          <span>
                            Colloborate with 10,000 marketers across the
                            globe.Learn, Share experience
                          </span>
                        </div>
                        <a href="#" className={classes.subc_item_link}>
                          <img src={Slack} alt="Slack icon" />
                          <span>@murmurcars</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className={classes.subc_list_li}>
                        <div className={classes.subc_item}>
                          <p>Follow us on Facebook</p>
                          <span>Posts and stories about Tips and tricks </span>
                        </div>
                        <a href="#" className={classes.subc_item_link}>
                          <img src={Facebook} alt="Facebook icon" />
                          <span>@murmurcars</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className={classes.subc_list_li}>
                        <div className={classes.subc_item}>
                          <p>Follow us on Linkedin</p>
                          <span>For job offers and many more!</span>
                        </div>
                        <a href="#" className={classes.subc_item_link}>
                          <img src={Linkedin} alt="Linkedin icon" />
                          <span>@murmurcars</span>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className={classes.subc_center}>
                    <button className={classes.go_dashbtn} onClick={this.finishRegister}>
                      Go to Dashboard
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.0249 4.94168L17.0832 10L12.0249 15.0583"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.9165 10H16.9415"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <img src={Slash} alt="icon" className={classes.slash_detail1} />
              <img src={Slash} alt="icon" className={classes.slash_detail2} />
            </div>
            <footer className={classes.footer}>
              <div className={`${classes.mur_contain} ${classes.mur_flex}`}>
                <p className={`${classes.footer_copyright} ${classes.mur_flex}`}>
                  <img src="img/footer/copyright.svg" alt="" />
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
        }
      </React.Fragment>
    );
  }
}


export default withRouter(Subscribe)
