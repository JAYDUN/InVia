import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';

class About extends React.Component {
    render () {
        return  (
            <div className="container">
            <header className="header about-header">
                <div className="row about-container">
                    <div className="intro-box" >
                        <div className="intro about-header-font"  >
                            <h1>关于我们</h1>
                            <h3>留学重要的不仅是学习 还有陪伴
                            </h3>

                        </div>
                    </div>
                </div>
            </header>
                <section id="about_InVia" className="about section">
                    <div className="container ">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className="title">关于知途伴学</h2>
                                {/*<h3 className="aboutspan">Invia-CEO Kevin Wang</h3>*/}
                            </div>
                            <div className="about_invia_left">
                                <a><img className="about_invia_image" src="../img/invia-logo.jpg"/></a>
                            </div>
                            <div className="about_invia_right">
                                <div className="about_invia_right_content">
                                <p>
                                    知途伴学是一家由英属哥伦比亚大学(University of British Columbia)不同毕业生成立的“良师益友互助组织”，是在加拿大注册的教育公司。主要负责为高中留学生提供一对一的伴学服务，与各类线下活动，其中内容包括心理陪伴、营养饮食、文化生活、升学义工等等。
                                </p>
                                <p>
                                    公司内部的“良师益友”（Mentor）都是由曾经十几岁留学加拿大的国际学生组成，现在不仅全都毕业于加拿大顶尖的英属哥伦比亚大学，而且各自都有着擅长的领域，比如心理学，商科，社会学，科学，营养，艺术，以及都具有着强烈的社会责任感，心系年轻一代小留学生的海外成长。
                                </p>
                                <p>
                                    知途伴学教育公司的工作人员中有曾经四年从事新移民英语教学的同事，有充分掌握公益活动组织运营经验的同事（比如横跨加拿大走访老人院，帮助加拿大政党议员竞选），在学业方面，我们还有擅长高中AP课补习方面的同事，和曾经培训中国留学生公众演讲技巧的同事。我们团队中还有多位主修心理学专业的同事，他们的专业知识与能力很有助于青少年留学生的自我认知，压力缓解，情感管理，以及文化隔阂方面的问题。我们是一股年轻向上的力量，因为我们富有信心，热情，以及同理心，并坚信通过我们的努力可以使这个世界变得更加美好！
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="About_InVia_Team" className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className="title">团队介绍</h2>
                                {/*<h3 className="aboutspan">Invia-CEO Kevin Wang</h3>*/}
                            </div>
                           <div className="about-team">
                               <div className="about-team-frame">
                               <a ><img  className="about-team-photo bgimg1" /></a>

                               <p>Kevin Wang</p>
                               <p>Co-Founder</p>
                                   <p>Chief Executive Officer </p>
                               </div>
                               <div className="about-team-frame">
                                   <a ><img  className="about-team-photo bgimg2" /></a>
                                   <p>Alan Qu</p>
                                   <p>Co-Founder</p>
                                   <p>Mentorship Program Director</p>
                               </div>
                               <div className="about-team-frame">
                                   <a ><img  className="about-team-photo bgimg3" /></a>
                                   <p>Neoh Yuan</p>
                                   <p>Co-Founder</p>
                                   <p> Director of Finance</p>
                               </div>
                               <div className="about-team-frame ">
                                   <a ><img  className="about-team-photo bgimg4"/></a>
                                   <p>Blanche Huang</p>
                                   <p>Co-Founder</p>
                                   <p>Director of Business Development</p>
                               </div>
                           </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="contact section">
                    <h2 className="title">联系我们</h2>

                    <div className="row contact-row">
                        <div className="col-sm-4 wechat-border">

                            <div className="InVia-card-content contactinfo">
                                <h3><img src="../img/wechat.jpeg" className="wechatlogo"></img>微信公众号</h3>
                            </div>
                            <div >
                                <a><img className=" wechat-official-account" src="../img/wechat-account.png"/></a>
                            </div>

                        </div>
                        <div className="col-sm-4 wechat-border">

                            <div className="InVia-card-content contactinfo">
                                <h3><img src="../img/wechat.jpeg" className="wechatlogo"></img>微信客服</h3>
                            </div>
                            <div >
                                <a><img className=" wechat-customer-service" src="../img/wechat-service.png"/></a>

                            </div>
                        </div>
                    </div>
                    <div className="row contact-row">
                        <div className="col-sm-4">
                            <div className="InVia-card">
                                <div className="InVia-card-header">
                                    <span className="" ></span>
                                </div>
                                <div className="InVia-card-content contactinfo">
                                    <h3>Address</h3>
                                    <p>
                                        8766 McKim Way Unit 2015, Richmond, BC, Canada
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="InVia-card">
                                <div className="InVia-card-header">

                                </div>
                                <div className="InVia-card-content contactinfo">
                                    <h3>Email</h3>
                                    <p>
                                        invia.edu@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

        )
    }
}

export default About;