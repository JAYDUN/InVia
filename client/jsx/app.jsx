import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import About from './about';
import {Redirect} from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index_Layout from './index-layout';
import About_Us_Layout from './about_us_layout';
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

const app = (
    <Router history="{createBrowserHistory()">
    <div>
        <Redirect from="/" to="/index"/>
        {Routes}

    </div>
    </Router>
)
ReactDOM.render(app, document.getElementById('app'));
