import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../homepage/nav';
import Login from './login';
import Footer from '../footer';

class Login_Layout extends React.Component {
    render () {
        return (
            <div >
                <Nav/>
                <Login/>
                <Footer/>
            </div>

        );
    }
}

export default Login_Layout