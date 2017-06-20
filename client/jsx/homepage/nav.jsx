
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { NavDropdown,MenuItem } from 'react-bootstrap';

class Nav extends React.Component {
    render () {
        return  (
        <div className="container">
            <div className="navcontainer ">
            <div className="col-md-12 column nav-col">
                <ul className=" nav-tabs invia-nav">
                    <li>
                        <a href="index.html"><img className="logo" src="../img/invia-logo.jpg" ></img></a>
                    </li>
                </ul>
                <ul  className="nav-right">
                    <li>
                        <Link to="/index">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/about">AboutInvia</Link>
                    </li>

                        {/*<a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">*/}
                            {/*Dropdown <span className="caret"></span>*/}
                        {/*</a>*/}
                        {/*<ul className="dropdown-menu">*/}
                            {/*<li>tesy</li>*/}
                        {/*</ul>*/}
                    {/*<NavDropdown eventKey="4" title="Unfinished" id="nav-dropdown">*/}
                        {/*<MenuItem eventKey="4.1" to="/login"><Link to="/login">LogIn</Link></MenuItem>*/}
                        {/*<MenuItem eventKey="4.2">Another action</MenuItem>*/}
                        {/*<MenuItem eventKey="4.3">Something else here</MenuItem>*/}
                        {/*<MenuItem divider />*/}

                        {/*<MenuItem eventKey="4.4">Separated link</MenuItem>*/}
                    {/*</NavDropdown>*/}
                    {/*<li>*/}
                        {/*<Link to="/login">LogIn</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/signup">SignUp</Link>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*<Link to="/userinterface">UserInterface</Link>*/}
                     {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/admininterface">AdminInterface</Link>*/}
                    {/*</li>*/}
                </ul>


            </div>
            </div>
        </div>


       )
    }
}

export default Nav;