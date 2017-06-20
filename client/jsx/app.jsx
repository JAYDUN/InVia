import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './homepage/nav';
import About from './aboutUs/about';
import {Redirect,browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Index_Layout from './homepage/index-layout';
import About_Us_Layout from './aboutUs/about_us_layout';
import Routes from './routes';
// class App extends React.Component {
//     render () {
//         return (
//             <div>
//                 <Nav/>
//                 <Index/>
//                 <Footer/>
//             </div>
//
//         );
//     }
// }
export const history = createBrowserHistory();
const app = (
    <Router history={history}>
    <div>
        <Redirect from="/" to="/index"/>
        {Routes}

    </div>
    </Router>
)

ReactDOM.render(app, document.getElementById('app'));
