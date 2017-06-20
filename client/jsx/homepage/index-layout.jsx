import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';
import Index from './index_body';
import Footer from '../footer';
import Loading from '../loading';
class Index_Layout extends React.Component {
    render () {
        return (
            <div className="container">
                {/*<Loading/>*/}
                <Nav/>
                <Index/>
                <Footer/>
            </div>

        );
    }
}

export default Index_Layout