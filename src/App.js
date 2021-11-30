
import "./assets/scss/theme.scss";

import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Login from "./pages/Authentication/newLogin/Login";
import Register from "./pages/Authentication/newRegister/Register";

class  App extends React.Component {
  constructor(props){
        super(props)
  }
  render(){
  return (
    <React.Fragment>
    <Switch>
      <Route exact path ='/' ><Redirect to='/login'/></Route> 
      <Route path='/login'><Login/></Route>
      <Route path='/register'><Register/></Route>
    </Switch>
   </React.Fragment>
  );
  }
}

export default App;
