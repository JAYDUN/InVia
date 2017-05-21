//
// var Nav = React.createClass({
//     getInitialState : function(){
//         return {}
//     },
//     render: function(){
//        return (
//            <div className="container navcontainer ">
//                    <div className="col-md-12 column nav-col">
//                        <ul className=" nav-tabs invia-nav">
//                            <li>
//                                <a href="index.html"><img className="logo" src="../img/invia-logo.jpg" ></img></a>
//                            </li>
//                        </ul>
//                        <ul  className=" nav-mid invia-nav">
//                            <li>
//                                <a href="index.html">首页</a>
//                            </li>
//                            <li>
//                                <a href="#about">关于Invia</a>
//                            </li>
//                            <li>
//                                <a href="#contact">联系我们</a>
//                            </li>
//                        </ul>
//                    </div>
//
//            </div>
//
//        )
//     }
// })
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Nav extends React.Component {
    render () {
        return  (
        <div className="container navcontainer ">
            <div className="col-md-12 column nav-col">
                <ul className=" nav-tabs invia-nav">
                    <li>
                        <a href="index.html"><img className="logo" src="../img/invia-logo.jpg" ></img></a>
                    </li>
                </ul>
                <ul  className=" nav-mid ">
                    <li>
                        <Link to="/index">首页</Link>
                    </li>
                    <li>
                        <Link to="/services">服务</Link>
                    </li>
                    <li>
                        <Link to="/about">关于知途</Link>
                    </li>
                    {/*<li>*/}
                        {/*<Link to="/login">登入</Link>*/}

                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/signup">注册</Link>*/}

                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<Link to="/userinterface">用户界面</Link>*/}

                    {/*</li>*/}
                </ul>

            </div>

        </div>


       )
    }
}

export default Nav;