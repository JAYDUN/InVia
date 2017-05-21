import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Services from './services';
import Footer from './footer';

class Services_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <Services/>
                <Footer/>
            </div>

        );
    }
}

export default Services_Layout