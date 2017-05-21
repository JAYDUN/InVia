import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import About from './about';
import Footer from './footer';

class About_Us_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <About/>
                <Footer/>
            </div>

        );
    }
}

export default About_Us_Layout