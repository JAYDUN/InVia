import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import UserInterface from './userinterface';
import Footer from './footer';

class UserInterface_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <UserInterface/>
                <Footer/>
            </div>

        );
    }
}

export default UserInterface_Layout