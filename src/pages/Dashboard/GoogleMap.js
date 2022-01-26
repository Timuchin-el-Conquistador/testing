import React, { Component } from "react";





import { LatLngSource } from "./ZipCoords";

import Geocode from "react-geocode";

import Map from './google map';

import SearchNormal from "../../assets/css/Settings/search-normal.svg";
import SearchMaximize from "../../assets/css/Settings/search-maximize.svg";
import ProfileMenu from "../../components/CommonForBoth/TopbarDropdown/ProfileMenu";
import classes from "../../assets/css/Dashboard/dashboard.module.css";
import Graph1 from "../../assets/css/Dashboard/graph1.png";
import Close from "../../assets/css/Dashboard/close.svg";
import PieChartDash from "./pieChartDash";
import BarChartDash from "./barChartDash";

Geocode.setApiKey("AIzaSyBIz-CXJ0CDRPjUrNpXKi67fbl-0Fbedio");


const CarImage = "../../assets/images/car.png";

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

const mapStyles = {
  width: "100%",
  height: "100%",
  //marginTop: "10%",
};

//const LoadingContainer = (props) => <Spinner color="primary" />;

class GoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberOfDrivers: "",
      address: "",
      postalCode: "",
      location: "",
      errorZipCode: false,
      errorMessage: null,
      coordinates: [],
      toggle: false,

      center: {
        lat: 41.8781,
        lng: -87.6298,
      },
      zoom: 11,
      drivers: [],
      loaded: false,
      postCenter: {
        lat: 0,
        lng: 0,
      },
    };

    this.zipIsWrongRef = React.createRef();
    this.toggleCard = this.toggleCard.bind(this);
    this.onChangeLocationToZoomIn = this.onChangeLocationToZoomIn.bind(this);
  }

  /* handleConnectionToFirebaseRealTimeDatabase = () => {
    let ref = firebase.database().ref("users/");
    ref.on("value", (snapshot) => {
      const newValue = snapshot.val();

      //Convert Objects into Array
      let newArrayOfDrivers = Object.values(newValue);

      this.setState({
        ...this.state,
        drivers: newArrayOfDrivers,
        loaded: true,
        NumberOfDrivers: newArrayOfDrivers.length,
      });
    });
  };*/

  handleReverseGeocode = () => {
    Geocode.fromLatLng(
      this.state.postCenter.lat,
      this.state.postCenter.lng
    ).then(
      (response) => {
        const address = response.results[5].formatted_address;
        this.setState({ ...this.state, address });
      },
      (error) => {
        console.error(error);
      }
    );
  };

 /* handleRenderDriversCoordinates = () => {
    let renderDrivers = [];
    const state = this.state;

    if (state.drivers.length === 0) {
    } else {
      state.drivers.map((item, key) => {
        console.log(state.drivers);
        if (item.Coordinates) {
          if (item.Coordinates.length === 1) {
            renderDrivers.push(
              <Marker
                key={key}
                title={`Driver ${item.username}`}
                name={item.username}
                position={{
                  lat: item.Coordinates[0].coords.latitude,
                  lng: item.Coordinates[0].coords.longitude,
                }}
                icon={require("../../assets/images/car.png")}
              />
            );
          }
        }
      });
    }

    return renderDrivers;
  };*/

  centerMoved(coord) {
    //console.log(coord);
  }

  onChangeLocationToZoomIn(e) {
    if (/[0-9]/i.test(e.target.value))
      this.setState({ ...this.state, postalCode: e.target.value });
    else this.setState({ ...this.state, location: e.target.value });
  }

  submitLocationToZoomIn(e) {
    e.preventDefault();
    if (this.state.postalCode.length > 0) {
      Geocode.fromAddress("" + this.state.postalCode)
        .then((response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(response, lat + " and " + lng);
        })
        .catch((error) => this.setState({ ...this.state, errorZipCode: true }));
    } else {
      const location = Object.keys(LatLngSource);
      const search = this.state.location.toLowerCase();
      const locationFromSource = location.filter((el) => el === search);
      if (!locationFromSource.length) {
        this.setState({
          ...this.state,
          location: "",
          errorZipCode: true,
          errorMessage:
            "the location your are looking for does not exists in our databse! You are maybe looking for ",
          hint: location,
        });
      } else {
        console.log(LatLngSource[locationFromSource[0]][0]);
        this.setState({
          ...this.state,
          location: "",
          errorZipCode: "",
          errorMessage: "",
          hint: "",
          coordinates: LatLngSource[locationFromSource[0]][1],
          postCenter: LatLngSource[locationFromSource[0]][0],
          zoom: 13,
        });
      }
    }
  }
  toggleCard() {
    console.log("run");
    this.setState({
      ...this.state,
      toggle: !this.state.toggle,
    });
  }

  render() {
    const state = this.state;
    return (

      <div className={classes.dash_right}>
       <div className={classes.map}>
          <Map/>
        </div>
        {/* <!-- header search block -->*/} {/*with   <div className={classes.head_search_dashboard}></div> does not sit on the right edge*/}
        <div className={classes.head_search_dashboard}>
          <div className={classes.head_search}>
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
        </div>

        <div className={classes.dashboard_right}>
          <div className={classes.choosen_place}>
            <h6 className={classes.choosen_h6}>
              Statistics of the choosen Place:
            </h6>
            <div className={classes.choosen_flex}>
              <div className={classes.choosen_item}>
                <p className={classes.choosen_item_p}>Number of cars:</p>
                <h5 className={classes.choosen_h5}>3</h5>
              </div>
              <div className={`${classes.choosen_item} ${classes.choosen_item_2}`}>
                <p className={classes.choosen_item_p}>Gender rates:</p>
                <div className={classes.gender_rates}>
                  <div className={classes.graph_rate}>
                    <PieChartDash Male={55} Female={30} Other={15}/>
                  </div>
                </div>
              </div>
              <div className={classes.choosen_item}>
                <p className={classes.choosen_item_p}>Age rates:</p>
                <div className={classes.gender_rates}>
                  <div className={classes.graph_rate}>
                    <BarChartDash />
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className={classes.choosen_close}>
              <img
                src={Close}
                alt=""
                className={classes.choosen_close_img}
              />
            </button>
          </div>
        </div>
      </div>

    );
  }
}

/*export default GoogleApiWrapper({
  apiKey: "AIzaSyBIz-CXJ0CDRPjUrNpXKi67fbl-0Fbedio",
//  LoadingContainer: LoadingContainer,
})(GoogleMaps);*/
export default GoogleMaps;
