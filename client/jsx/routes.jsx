import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './homepage/nav';
import About from './aboutUs/about';
import {Redirect} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index_Layout from './homepage/index-layout';
import About_Us_Layout from './aboutUs/about_us_layout';
import Services_Layout from './services/services-layout';
import Login_Layout from './login/login-layout';
import Signup_Layout from './signup/signup-layout';
import UserInterface_Layout from './userInterface/userinterface_layout';
import Admin_Interface_Layout from './adminInterface/admininterface-layout'


const Routes= (
    // {/*<Switch>*/}
            <Switch >
        <Route path="/index" component={Index_Layout}/>,
        <Route path="/about" component={About_Us_Layout}/>
        <Route path="/services" component={Services_Layout}/>
        <Route path="/login" component={Login_Layout}/>
        <Route path="/signup" component={Signup_Layout}/>
        <Route path="/userinterface" component={UserInterface_Layout}/>
        <Route path="/admininterface" component={Admin_Interface_Layout}/>
            </Switch>
// {/*</Switch>*/}

)

export default Routes;