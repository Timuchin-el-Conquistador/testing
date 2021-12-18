import React, { Component } from "react";

import SearchNormal from "../../assets/css/Settings/search-normal.svg";
import SearchMaximize from "../../assets/css/Settings/search-maximize.svg";
import EditProfileImage from "../../assets/css/Settings/edit.svg";
import SMS from "../../assets/css/common/icons/sms.svg";
import Location from "../../assets/css/layout/location.svg";
import Lock from "../../assets/css/common/icons/lock.svg";
import Eye from "../../assets/css/common/icons/icon.svg";
import Phone from "../../assets/css/Authentication/Register/mobile.svg";
import Building from "../../assets/css/Settings/building.svg";
import Car from "../../assets/css/Settings/car.svg";

import classes from "../../assets/css/Settings/settings.module.css";


import SidebarContent from "../../components/VerticalLayout/testSidebarContent";

import ProfileMenu from "../../components/CommonForBoth/TopbarDropdown/ProfileMenu";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>

        <div className={classes.dash_right}>
          {/*<!-- header search block -->*/}
          <div className={classes.head_search}>
            <h1 className={classes.dash_h1}>Settings</h1>
            <form action="">
              <div className={`${classes.dash_relative} ${classes.search_box}`}>
                <input type="text" placeholder="Search" />
                <div className={classes.search_box_flex}>
                  <button type="submit" className={classes.search_icon}>
                    <img
                      src={SearchNormal}
                      alt=""
                      className={classes.search_img}
                    />
                  </button>
                  <button type="button" className={classes.search_maximize}>
                    <img
                      src={SearchMaximize}
                      alt=""
                      className={classes.maximize_img}
                    />
                  </button>

                  <ProfileMenu scope={"global"} />
                </div>
              </div>
            </form>
          </div>
          {/*<!-- settings block -->*/}
          <div className={classes.setting_block}>
            <div className={classes.setting_left}>
              <h4 className={classes.stng_plan}>Subscription Plan</h4>
              <div className={classes.stng_profil}>
                <div className={classes.profil_relative}>
                  <ProfileMenu scope={"local"} />

                  <button type="button" className={classes.profil_img_edit}>
                    <img
                      src={EditProfileImage}
                      alt="prfofile image edit"
                      className={classes.img_edit}
                    />
                  </button>
                </div>
                <div className={classes.stng_profil_detail}>
                  <p>John Doe</p>
                  <span>Outdoor</span>
                </div>
              </div>
              <form action="">
                <div className={classes.stng_form}>
                  <div className={classes.stng_form_item}>
                    <label htmlFor="stng-email" className={classes.stng_label}>
                      E-mail
                    </label>
                    <div className={classes.stng_form_flex}>
                      <div className={classes.stng_relative}>
                        <img
                          src={SMS}
                          alt="email icon"
                          className={classes.stng_email_icon}
                        />
                        <input
                          type="email"
                          className={classes.stng_element}
                          name="stng-email"
                          id="stng-email"
                          placeholder="Enter your Email"
                          value="meharram@gmail.com"
                        />
                      </div>
                      <button type="button" className={classes.form_edit_btn}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className={classes.stng_form_item}>
                    <label
                      htmlFor="stng-password"
                      className={classes.stng_label}
                    >
                      Password
                    </label>
                    <div className={classes.stng_form_flex}>
                      <div className={classes.stng_relative}>
                        <input
                          type="password"
                          className={classes.stng_element}
                          name="stng-password"
                          id="stng-password"
                          placeholder="123456"
                        />
                        <img
                          src={Lock}
                          alt=""
                          className={classes.stng_email_icon}
                        />
                        <button type="button" className={classes.pass_eye}>
                          <img src={Eye} alt="" />
                        </button>
                      </div>
                      <button type="button" className={classes.form_edit_btn}>
                        Edit
                      </button>
                    </div>
                    <span className={classes.pass_error}>
                      Must be at least 8 characters.
                    </span>
                  </div>
                  <div className={classes.stng_form_item}>
                    <label htmlFor="stng-phone" className={classes.stng_label}>
                      Phone number
                    </label>
                    <div className={classes.stng_form_flex}>
                      <div className={classes.stng_relative}>
                        <input
                          type="number"
                          className={classes.stng_element}
                          name="stng-phone"
                          id="stng-phone"
                          placeholder="Phone number"
                          value="+994516255544"
                        />
                        <img
                          src={Phone}
                          alt=""
                          className={classes.stng_email_icon}
                        />
                      </div>
                      <button type="button" className={classes.form_edit_btn}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className={classes.stng_form_item}>
                    <label for="stng-company" className={classes.stng_label}>
                      Company name
                    </label>
                    <div className={classes.stng_form_flex}>
                      <div className={classes.stng_relative}>
                        <input
                          type="text"
                          className={classes.stng_element}
                          name="stng-company"
                          id="stng-company"
                          placeholder="Company Name"
                          value="MurmurCars"
                        />
                        <img
                          src={Building}
                          alt=""
                          className={classes.stng_email_icon}
                        />
                      </div>
                      <button type="button" className={classes.form_edit_btn}>
                        Edit
                      </button>
                    </div>
                  </div>
                  <div className={classes.stng_form_item}>
                    <label
                      htmlFor="stng-address"
                      className={classes.stng_label}
                    >
                      Company address
                    </label>
                    <div className={classes.stng_relative}>
                      <input
                        type="text"
                        className={classes.stng_element}
                        name="stng-address"
                        id="stng-address"
                        placeholder="Company address"
                      />
                      <img
                        src={Location}
                        alt=""
                        className={classes.stng_email_icon}
                      />
                    </div>
                  </div>
                  <div className={classes.stng_form_item}>
                    <label for="stng-city" className={classes.stng_label}>
                      City
                    </label>
                    <div className={classes.stng_relative}>
                      <input
                        type="text"
                        className={classes.stng_element}
                        name="stng-city"
                        id="stng-city"
                        placeholder="City"
                      />
                      <img
                        src={Location}
                        alt=""
                        className={classes.stng_email_icon}
                      />
                    </div>
                  </div>
                  <div className={classes.stng_row}>
                    <div className={classes.stng_col}>
                      <div className={classes.stng_form_item}>
                        <label
                          htmlFor="stng-state"
                          className={classes.stng_label}
                        >
                          State
                        </label>
                        <div className={classes.stng_relative}>
                          <input
                            type="text"
                            className={classes.stng_element}
                            name="stng-state"
                            id="stng-state"
                            placeholder="City"
                          />
                          <img
                            src={Location}
                            alt=""
                            className={classes.stng_email_icon}
                          />
                        </div>
                      </div>
                    </div>
                    <div className={classes.stng_col}>
                      <div className={classes.stng_form_item}>
                        <label
                          htmlFor="stng-zip"
                          className={classes.stng_label}
                        >
                          Zip
                        </label>
                        <div className={classes.stng_relative}>
                          <input
                            type="text"
                            className={classes.stng_element}
                            name="stng-zip"
                            id="stng-zip"
                            placeholder="Zip"
                          />
                          <img
                            src={Location}
                            alt=""
                            className={classes.stng_email_icon}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className={classes.stng_submit}>
                    Save
                  </button>
                </div>
              </form>
            </div>
            <div className={classes.setting_right}>
              <h4 className={classes.subc_plan}>Profile settings</h4>
              <div className={classes.subc_block}>
                <div className={classes.subcrb_top}>
                  <div className={classes.ads_subtype}>
                    <p>Outdoor</p>
                    <span>30 Days remaining</span>
                  </div>
                  <p className={classes.subc_price}>
                    56$<span>/month</span>
                  </p>
                </div>
                <div className={classes.subc_flex}>
                  <a href="#" className={classes.subc_upgrade_plan}>
                    Upgrade plan
                  </a>
                  <button type="button" className={classes.subc_cancel}>
                    Cancel plan
                  </button>
                </div>
                <img src={Car} alt="" className={classes.subc_car} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Settings;
