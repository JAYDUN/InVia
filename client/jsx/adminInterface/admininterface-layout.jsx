import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../homepage/nav';
import AdminInterface from './admin-interface';
import Footer from '../footer';

class Admin_Interface_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <AdminInterface/>
                <Footer/>

            </div>

        );
    }
}

export default Admin_Interface_Layout