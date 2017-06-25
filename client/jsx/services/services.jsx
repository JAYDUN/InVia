import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Signup from '../signup/signup'

class Services extends React.Component {



    render () {
        return  (
            <div className="container  ">

                <header className="header services-header">
                    <div className="row about-container">
                        <div className="intro-box" >
                            <div className="intro about-header-font"  >
                                <h1>服务介绍</h1>
                                {/*<h3>每一个留学生都像天上的明星一样 闪闪发光*/}
                                {/*</h3>*/}
                                <h3>敬请期待
                                </h3>
                            </div>
                        </div>
                    </div>
                </header>
            {/*<div className="services_container">*/}
                {/*<section id="about_InVia" className="about section">*/}
                    {/*<div className="container">*/}
                        {/*<div className="row clearfix">*/}
                            {/*<div className="col-md-12 column services_subcontainer">*/}
                                {/*<div className="row clearfix">*/}
                                    {/*<div className="col-md-3 column services_container_left">*/}

                                    {/*</div>*/}
                                    {/*<div className="col-md-9 column services_container_right">*/}
                                        {/*<div className="services_container_right_header">*/}
                                            {/*<h3>适应期</h3>*/}
                                            {/*<h5>初来乍到</h5>*/}
                                        {/*</div>*/}
                                        {/*<div className="services_container_right_body">*/}
                                            {/*<div className="services_container_right_body_header">*/}
                                            {/*<h4>1.1 学前准备</h4>*/}

                                            {/*</div>*/}
                                            {/*<div className="services_container_right_body_body">*/}
                                            {/*<h5>生活贴士 法规礼仪 饮食文化 课程安排 </h5>*/}

                                            {/*</div>*/}
                                            {/*<div className="services_container_right_body_header">*/}
                                                {/*<h4>1.2 开学季</h4>*/}

                                            {/*</div>*/}
                                            {/*<div className="services_container_right_body_body">*/}
                                                {/*<h5>与寄宿家庭、房东、室友产生不和谐时的交流技巧</h5>*/}
                                                 {/*<h5>在新学校怎么表现能让老师以后“照顾你”（如何与老师进行良好的沟通）</h5>*/}

                                            {/*</div>*/}

                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</section>*/}
                {/*</div>*/}
            </div>


        )
    }
}

export default Services;