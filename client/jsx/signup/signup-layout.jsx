import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../homepage/nav';
import Signup from './signup';
import Footer from '../footer';

class Signup_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <Signup/>
                <Footer/>
            </div>

        );
    }
}

export default Signup_Layout