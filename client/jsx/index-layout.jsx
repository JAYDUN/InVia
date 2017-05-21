import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Index from './index_body';
import Footer from './footer';
class Index_Layout extends React.Component {
    render () {
        return (
            <div>
                <Nav/>
                <Index/>
                <Footer/>
            </div>

        );
    }
}

export default Index_Layout