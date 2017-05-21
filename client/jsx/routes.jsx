import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import About from './about';
import {Redirect} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index_Layout from './index-layout';
import About_Us_Layout from './about_us_layout';
import Services_Layout from './services-layout';
import Login_Layout from './login-layout';
import Signup_Layout from './signup-layout';
import UserInterface_Layout from './userinterface_layout';



const Routes= (
    // {/*<Switch>*/}

            <Switch >
        <Route path="/index" component={Index_Layout}/>,
        <Route path="/about" component={About_Us_Layout}/>
        <Route path="/services" component={Services_Layout}/>
        <Route path="/login" component={Login_Layout}/>
        <Route path="/signup" component={Signup_Layout}/>
        <Route path="/userinterface" component={UserInterface_Layout}/>
            </Switch>

// {/*</Switch>*/}

)

export default Routes;