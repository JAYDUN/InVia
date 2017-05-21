import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Signup from './signup'

class Services extends React.Component {


    render () {
        return  (
            <div className="container  ">

                <header className="header services-header">
                    <div className="row ">
                        <div className="intro-box" >
                            <div className="intro about-header-font"  >
                                <h1>服务介绍</h1>
                                <h3>敬请期待
                                </h3>

                            </div>
                        </div>
                    </div>
                </header>

            </div>

        )
    }
}

export default Services;