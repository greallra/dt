import React, { useEffect } from "react";
import NavBar from '../components/Navbar';
import LandingScreen from '../screens/LandingScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function MainRouter() {

    return (
        <>
        <Router>  
           {/* <NavBar /> */}
           <Switch>
                {/* Public routes */}
                <Route path="/" exact>
                    <LandingScreen />
                </Route>
                {/* <Route path="/test" exact> */}
            </Switch>
        </Router>
        </>
    )
}