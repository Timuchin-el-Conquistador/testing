import React, { Component } from "react";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import Chart from "react-apexcharts";
//import firebase from "firebase";
import PieChart from "./pieChart";
import DayTimeChart from "./dayTimeChart";
import PeopleReachedByWeekDay from "./peopleReachedByWeekDays";
import SeenByWeekDay from "./seenbyWeekDay";
import AudienceDemographicsPieChart from "./audienceDemographics";
import AgeOfReachedDemographics from "./ageChartReachedDemographics";
import AdEngagements from "./adEngagements";
import ConversionRate from "./conversionRate";

import SearchNormal from "../../assets/css/Settings/search-normal.svg";
import SearchMaximize from "../../assets/css/Settings/search-maximize.svg";
import ProfileMenu from "../../components/CommonForBoth/TopbarDropdown/ProfileMenu";
import ArrowDown from "../../assets/css/CreateAd/arrow-down.svg";
import ArrowRight from '../../assets/css/analitics/Vector.svg'
//import classes
import classes from "../../assets/css/analitics/index.module.css";
import "../../assets/css/app.css";

import SidebarContent from "../../components/VerticalLayout/testSidebarContent";

const firebaseConfig = {
  apiKey: "AIzaSyCufaPUqLeJ83iRcMEoq9wZoXxP8jyF2OY",
  authDomain: "murmurdriverreactnativeapp.firebaseapp.com",
  databaseURL: "https://murmurdriverreactnativeapp-default-rtdb.firebaseio.com",
  projectId: "murmurdriverreactnativeapp",
  storageBucket: "murmurdriverreactnativeapp.appspot.com",
  messagingSenderId: "476698745619",
  appId: "1:476698745619:web:32c16fa59b7df52a0818e6",
  measurementId: "G-B6HKFHXVNN",
};

class CampaignAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      haveAnalytics: false,
      peopleReached: "",
      rasberry: [],
      seriesRadialBar: [76],
      optionsRadialBar: {
        chart: {
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#e7e7e7",
              strokeWidth: "97%",
              margin: 5, 
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: "#999",
                opacity: 1,
                blur: 2,
              },
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            shadeIntensity: 0.1,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91],
          },
        },
        labels: ["Average Results"],
      },
      optionsMileage: {
        colors: ["#7356C0"],
        chart: {
          id: "apexchart-example",
        },
        plotOptions: {
          bar: {
            borderRadius: 4
          }
        },
        xaxis: {
          categories: ["Mon", " Tue", "Wed", "Thu", "Fri", "Sat", " Sun"],
          labels: {
            style: {
              colors: ['#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3'],
              fontSize: '12',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              cssClass: 'apexcharts-xaxis-label',
          }
        },
        },
        title: {
          text: "Weekly Driven miles Report",
          style: {
            fontFamily: "Montserrat",
            color: "#192038",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        subtitle: {
          text: "How many miles weekly driven",
          style: {
            fontFamily: "Montserrat",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.0015em",
            color: "#8F9BB3",
          },
        },
        seriesMileage: [
          {
            name: "Driven Mileage",
            data: [22, 40, 50, 30, 14, 7, 80],
          },
        ],
      },
      options: {
        chart: {
          id: "apexchart-example",
        },
        colors: ["#3F2B89"],
        stroke: {
          curve: "smooth",
          width: 2
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ["Mon", " Tue", "Wed", "Thu", "Fri", "Sat", " Sun"],
          labels: {
            style: {
              colors: ['#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3','#8F9BB3'],
              fontSize: '12',
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 500,
              cssClass: 'apexcharts-xaxis-label',
          }
        },
        },
        title: {
          text: "Weekly people reach Report",
          style: {
            fontFamily: "Montserrat",
            color: "#192038",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
          },
        },
        subtitle: {
          text: "Champain Weekly Performance",
          style: {
            fontFamily: "Montserrat",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.0015em",
            color: "#8F9BB3",
          },
        },
      },
      series: [
        {
          name: "Reached People",
          data: [1500, 5000, 1000, 3500, 7800, 8500, 9000],
        },
      ],
    };
  }

  componentDidMount() {
   /* if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    //this.handleConnectionToFirebaseRealTimeDatabase();*/
  }

  /*handleConnectionToFirebaseRealTimeDatabase = () => {
    let ref = firebase.database().ref("wifi/RPCHICAGO01/Kismet");
    ref.on("value", (snapshot) => {
      const newValue = snapshot.val();
      //Convert Objects into Array
      let newArrayOfDrivers = Object.values(newValue);

      this.setState({
        ...this.state,
        rasberry: JSON.parse(newValue),
        loaded: true,
      });
    });
  };*/

  render() {
    return (
     <React.Fragment>
     <SidebarContent/>
      <div className={classes.dash_right}>
        <div className={classes.head_search}>
          <h1 className={classes.dash_h1}>Analytics</h1>
          <form onSubmit={this.submitLocationToZoomIn}>
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
        {/* <!-- analytics block -->*/}
        <div className={classes.analytics_block}>
          <div className={`${classes.week_block} ${classes.analytics_item} ${classes.hide_toolbar}`}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height={400}
            />
            <div className={classes.weekly_select}>
              <div className="position-relative">
                <select
                  name="adCategory"
                  id="step-categories"
                  className={classes.analytics_select_item}
                  //onChange={this.handleChange.bind(this)}
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Weekly<">Monthly</option>
                  <option value="Weekly">Abualy</option>
                </select>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#2E3A59"/>
                </svg>
              </div>
            </div>
            {/*<img src={ArrowDown} alt="" className={classes.step_select_icon} />*/}
          </div>
          <div className={classes.analytics_row}>
            <div className={`${classes.analytic_col} ${classes.analytic_col_2}`}>
             <div className={classes.analytic_col_span}>
              <h1>People Reached</h1>
              <span>2500</span>
              <a>View Details <img src={ArrowRight}/></a>
              </div>
              <div
                className={`${classes.analytics_item} ${classes.reach_item}`}
              >
                <PeopleReachedByWeekDay />
              </div>
            </div>

            <div className={`${classes.analytic_col} ${classes.analytic_col_2}`}>
            <div className={classes.analytic_col_span}>
              <h1>Avarage time seen</h1>
              <span>10h</span>
              <a href="#">View Details <img src={ArrowRight}/></a>
              </div>
              <div
                className={`${classes.analytics_item} ${classes.reach_item}`}
              >
                <SeenByWeekDay />
              </div>
            </div>
          </div>
          <div className={`${classes.week_block} ${classes.analytics_item}`}>
            <Chart
              options={this.state.optionsMileage}
              series={this.state.optionsMileage.seriesMileage}
              type="bar"
              width="100%"
              height={400}
            />
             <div className={classes.weekly_select}>
              <div className="position-relative">
                <select
                  name="adCategory"
                  id="step-categories"
                  className={classes.analytics_select_item}
                  //onChange={this.handleChange.bind(this)}
                >
                  <option value="Weekly">Weekly</option>
                  <option value="Weekly<">Monthly</option>
                  <option value="Weekly">Abualy</option>
                </select>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16.8C11.3 16.8 10.6 16.53 10.07 16L3.55002 9.48001C3.26002 9.19001 3.26002 8.71001 3.55002 8.42001C3.84002 8.13001 4.32002 8.13001 4.61002 8.42001L11.13 14.94C11.61 15.42 12.39 15.42 12.87 14.94L19.39 8.42001C19.68 8.13001 20.16 8.13001 20.45 8.42001C20.74 8.71001 20.74 9.19001 20.45 9.48001L13.93 16C13.4 16.53 12.7 16.8 12 16.8Z" fill="#2E3A59"/>
                </svg>
              </div>
            </div>
          </div>
          <div className={classes.audience_row}>
            <div className={classes.audience_col}>
              <div className={classes.audience_item}>
                <p className={classes.audience_p}>Audience Demographics</p>
                <div className={classes.audience_chart}>
                  <AudienceDemographicsPieChart Male={120} Female={220} />
                </div>
               {/* <ul className={classes.auds}>
                  <li className={classes.mr_24px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                    ></span>
                    <small>Male</small>
                  </li>
                  <li>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                    ></span>
                    <small>Female</small>
                  </li>
    </ul>*/}
              </div>
            </div>
            <div className={classes.audience_col}>
              <div className={classes.audience_item}>
                <p className={classes.audience_p}>Audience by Platform</p>
                <div className={classes.audience_chart}>
                  <PieChart Android={55} IOS={45} />
                </div>
                {/*<ul className={classes.auds}>
                  <li className={classes.mr_24px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                    ></span>
                    <small>Android</small>
                  </li>
                  <li>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                    ></span>
                    <small>IOS</small>
                  </li>
  </ul>*/}
              </div>
            </div>
            <div className={classes.audience_col}>
              <div className={classes.audience_item}>
                <p className={classes.audience_p}>Audience by Age</p>
                <div className={classes.audience_chart}>
                  <AgeOfReachedDemographics
                    a={30}
                    b={45}
                    c={56}
                    d={65}
                    e={24}
                  />
                </div>
               {/* <ul className={classes.auds}>
                  <li className={classes.mr_16px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                    ></span>
                    <small>0-18</small>
                  </li>
                  <li className={classes.mr_16px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                    ></span>
                    <small>18-25</small>
                  </li>
                  <li className={classes.mr_16px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_3}`}
                    ></span>
                    <small>25-35</small>
                  </li>
                  <li className={classes.mr_16px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_4}`}
                    ></span>
                    <small>35-45</small>
                  </li>
                  <li>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_5}`}
                    ></span>
                    <small>45-65</small>
                  </li>
</ul>*/}
              </div>
            </div>
            <div className={classes.audience_col}>
              <div className={classes.audience_item}>
                <p className={classes.audience_p}>Audience Engagements</p>
                <div className={classes.audience_chart}>
                  <AdEngagements
                    engagements_campaign1={5000}
                    engagements_campaign2={10000}
                    campaign1={"Ad_A"}
                    campaign2={"Ad_B"}
                  />
                </div>
                {/*<ul className={classes.auds}>
                  <li className={classes.mr_24px}>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                    ></span>
                    <small>Ad_A</small>
                  </li>
                  <li>
                    <span
                      className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                    ></span>
                    <small>Ad_B</small>
                  </li>
</ul>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default CampaignAnalytics;
