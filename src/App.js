
import "./assets/scss/theme.scss";


import React from "react";
import { Route, Switch,Redirect } from "react-router-dom";

import Login from "./pages/Authentication/newLogin/Login";
import Register from "./pages/Authentication/newRegister/Register";
import Dashboard from "./pages/Dashboard/index";
import Settings from "./pages/Settings/index";
import SidebarContent from "./components/VerticalLayout/testSidebarContent";
import Billing from "./pages/Billing/index";
import ForgotPassword from './pages/Authentication/Forgotpassword/index'
import Business from './pages/Authentication/Business-goals/index'
import Subscribe from './pages/Authentication/Subscribe/index'
import EmailSent from './pages/Authentication/email-sent/index'


import classes from "./assets/css/Settings/settings.module.css";

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
      <Route path='/business'><Business/></Route>
      <Route path='/dashboard'><Dashboard/></Route>
      <Route path='/subscribe'><Subscribe/></Route>
      <Route path='/forgot-password'><ForgotPassword/></Route>
      <Route path='/email-sent'><EmailSent/></Route>
      <Route path='/settings'><div className={classes.dash_cover}><SidebarContent /><Settings/></div></Route>
      <Route path='/billing'><div className={classes.dash_cover}><SidebarContent /><Billing/></div></Route>
    </Switch>
   </React.Fragment>
  );
  }
}

export default App;
