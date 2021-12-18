import React, { Component } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
  Input,
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Badge,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

import {
  Map,
  GoogleApiWrapper,
  Marker,
  Polygon,
  Circle,
} from "google-maps-react";

import { LatLngSource } from "./ZipCoords";

import Geocode from "react-geocode";


import SearchNormal from "../../assets/css/Settings/search-normal.svg";
import SearchMaximize from "../../assets/css/Settings/search-maximize.svg";
import ProfileMenu from "../../components/CommonForBoth/TopbarDropdown/ProfileMenu";
import classes from "../../assets/css/Dashboard/dashboard.module.css";
import Graph1 from "../../assets/css/Dashboard/graph1.png";
import Close from "../../assets/css/Dashboard/close.svg";

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

const LoadingContainer = (props) => <Spinner color="primary" />;

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

  handleRenderDriversCoordinates = () => {
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
  };

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
    // Geocode.fromAddress("" + this.state.postalCode).then(
    //   (response) => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     const LatLng = [];

    //     let coordinates = ZIP.filter((coordinate) => {
    //       if (coordinate[10] === this.state.postalCode) {
    //         return coordinate[8];
    //       }
    //     });

    //     if (coordinates.length) {
    //       coordinates = coordinates.map((coordinate) => {
    //         return { coordinate: coordinate[8] };
    //       });
    //       coordinates = coordinates[0].coordinate.split("(((")[1].split(",");
    //       coordinates = coordinates.map((coordinate) => coordinate.split(" "));

    //       for (let i = 0; i < coordinates.length; i++) {
    //         if (coordinates[i][0].length !== 0) {
    //           LatLng.push({
    //             lat: Number.parseFloat(coordinates[i][1]),
    //             lng: Number.parseFloat(coordinates[i][0]),
    //           });
    //         } else {
    //           LatLng.push({
    //             lat: Number.parseFloat(coordinates[i][2]),
    //             lng: Number.parseFloat(coordinates[i][1]),
    //           });
    //         }
    //       }
    //     }
    //     this.setState({
    //       ...this.state,
    //       postCenter: { lat, lng },
    //       coordinates: LatLng,
    //       zoom: 15,
    //     });
    //   },
    //   (error) => {
    //     this.setState({ ...this.state, errorZipCode: true });
    //   }
    // );

    /*  this.setState({
          ...this.state,
          postCenter: { lat, lng },
          coordinates: LatLng,
          zoom: 13,
        });
      },
      (error) => {
        this.setState({ ...this.state, errorZipCode: true });
      }
    );*/
  }
  toggleCard() {
    console.log("run");
    this.setState({
      ...this.state,
      toggle: !this.state.toggle,
    });
  }
  /* componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

   // this.handleConnectionToFirebaseRealTimeDatabase();
  navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        postCenter: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      this.handleReverseGeocode();
    });
  }*/

  render() {
    const state = this.state;
    return (
      <div className={classes.dash_right}>
        <div className={classes.map}>

          <Map
            google={this.props.google}
            zoom={this.state.zoom}
            style={mapStyles}
            initialCenter={this.state.center}
            fullscreenControl={false}
            draggable={true}
            center={this.state.postCenter}
            scrollwheel={false}
            mapTypeControl={false}
            disableDoubleClickZoom={false}
            keyboardShortcuts={false}
            onDragend={(coord) => this.centerMoved(coord)}
          >
            <Polygon
              paths={this.state.coordinates}
              fillColor="#7356bd"
              fillOpacity={0.35}
              //fillOpacity="0.5"
              strokeOpacity={0.8}
              strokeWeight={1}
              strokeColor="#200b47"
            />
            {/*{this.handleRenderDriversCoordinates()}*/}
          </Map>

        </div>
        {/* <!-- header search block -->*/} {/*with   <div className={classes.head_search_dashboard}></div> does not sit on the right edge*/}
      
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
              <div className={classes.choosen_item}>
                <p className={classes.choosen_item_p}>Gender rates:</p>
                <div className={classes.gender_rates}>
                  <div className={classes.graph_rate}>
                    <img src={Graph1} alt="" />
                  </div>
                  <ul className={classes.auds}>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                      ></span>
                      <small>Male</small>
                      <span className={classes.auds_percent}>(55%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                      ></span>
                      <small>Female</small>
                      <span className={classes.auds_percent}>(30%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_3}`}
                      ></span>
                      <small>Other</small>
                      <span className={classes.auds_percent}>(15%)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.choosen_item}>
                <p className={classes.choosen_item_p}>Age rates:</p>
                <div className={classes.gender_rates}>
                  <div className={classes.graph_rate}>
                    <img src={Graph1} alt="" />
                  </div>
                  <ul className={classes.auds}>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_1}`}
                      ></span>
                      <small>0-18</small>
                      <span className={classes.auds_percent}>(55%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_2}`}
                      ></span>
                      <small>18-25</small>
                      <span className={classes.auds_percent}>(30%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_3}`}
                      ></span>
                      <small>25-35</small>
                      <span className={classes.auds_percent}>(15%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_3}`}
                      ></span>
                      <small>35-45</small>
                      <span className={classes.auds_percent}>(15%)</span>
                    </li>
                    <li>
                      <span
                        className={`${classes.auds_dot} ${classes.auds_dot_3}`}
                      ></span>
                      <small>45-65</small>
                      <span className={classes.auds_percent}>(15%)</span>
                    </li>
                  </ul>
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyBIz-CXJ0CDRPjUrNpXKi67fbl-0Fbedio",
  LoadingContainer: LoadingContainer,
})(GoogleMaps);
