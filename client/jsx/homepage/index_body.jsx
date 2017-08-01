//
// var Index = React.createClass({
//     getInitialState : function(){
//         return {}
//     },
//     render: function(){
//         return (
//             <div className="container">
//                 <header className="header">
//                     <div className="row">
//                         <div className="intro-box" >
//                             <div className="intro"  >
//                                 <h1>欢迎来到知途伴学Invia</h1>
//                                 <h3>教诲是条漫长的道路，榜样是条捷径。—— 塞内加
//                                 </h3>
//                                 <a className="btn header-btn" href="#about">Explore us</a>
//                             </div>
//                         </div>
//                     </div>
//                 </header>
//                 <section id="about" className="about section">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-sm-8 col-sm-offset-2">
//                                 <h2 className="title">关于 Invia</h2>
//                                 <h4>
//                                     知途伴学是一家由英属哥伦比亚大学(University of British Columbia)不同毕业生成立的“良师助组织”，是在加拿大注册的教育益友互公司。主要负责为高中留学生提供一对一的伴学服务，与各类线下活动，其中内容包括心理陪伴、营养饮食、文化生活、升学义工等等。
//                                 </h4>
//                                 {/*<h3 className="aboutspan">Invia-CEO Kevin Wang</h3>*/}
//                                 <div className="aboutbtn1">
//                                     <a className="btn aboutbtn2" href="../html/about.html">Read More</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//
//         )
//     }
// })
//
// ReactDOM.render(
//     <Index/>, document.getElementById('index')
// )
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Index extends React.Component {
    render () {
        return  (
            <div className="container">
                <header className="header index-header">
                    <div className="row ">
                        <div className="intro-box" >
                            <div className="intro"  >
                                <h1>Welcome to In Via</h1>
                                <h3>教诲是条漫长的道路，榜样是条捷径。—— 塞内加
                                </h3>
                                {/*<a className="btn header-btn" href="#about">Learn More</a>*/}
                            </div>
                        </div>
                    </div>
                </header>
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1 home_intro">
                                <h2 className="title">知途服务</h2>
                                <div className="index-services-content index-services-mobile">
                                    <div className="index-services-content-left index-services-mobile-top">
                                        <div className="index-services-content-left-header index-services-mobile-header">
                                            <h3>新留学生开学预备班</h3>
                                            {/*<h4>新留学生开学预备班</h4>*/}
                                        </div>
                                        <div className="divider">
                                            <span></span>
                                        </div>
                                        <div className="index-services-content-left-body ">
                                            <p>
                                                In Via Head Start Program是专为第一次来加拿大读书的留学生提供抢先教育、为初来乍到的海外青少年留学生们量身打造一个快速了解北美文化和适应生活的服务。使留学生在开学前做好热身，提前了解大温地区的民俗文化、法律法规、对其所在学校、城市有一个初步的认识。
                                            </p>
                                            <p>在此期间，由加拿大名校的良师益友们带队，参观当地著名学府，锻炼海外自立能力，深度了解历史文化，并积极提升英语表达能力。与此同时，根据每天的活动主题，我们提供相对应的知识工作坊，着重于培养留学生们的逻辑思维、认知扩张、团队协作等能力，为开学后即将来临的西方教学做铺垫。</p>
                                            <p>
                                                通过两周的预备班和一对一有针对性地成长规划、困难排除，让留学生们真实了解北美的文化；积极养成健康的生活习惯；学习灵活转换东西方的思维模式；拥有一个高质量的交友平台；建立海外留学的自信心。
                                            </p>
                                        </div>
                                    </div>
                                    <div className="index-services-content-right index-services-mobile-bot">
                                        <div className="index-services-content-right-body index-services-mobile">
                                            <img className="index-services-content-right-body-img" src="../img/index-service.png"/>

                                        </div>
                                    </div>
                                </div>
                                <div className="aboutbtn1">
                                    <Link to="/services" className="btn aboutbtn2">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2 home_intro">
                                <h2 className="title">About In Via</h2>
                                <h4>
                                    知途伴学旨在加拿大搭起一个注重“思辨精神表达”、“积极价值观建立”、“良好生活习惯培养”、以及“负面情绪管理与疏导”的平台。秉承知行合一的原则，带领低龄中国留学生群体克服尴尬与恐惧，走出固有的舒适圈，帮助他们找到自我，设立自己的人生目标，规划未来发展发向，培养合理的消费意识与金钱管理能力， 懂得如何处理人际关系等， 并且在他们经历着身处异国他乡心理上的跌宕起伏之时，像大哥哥大姐姐一样陪伴他们运用有效的应对之策解决问题。
                                {/*<h3 className="aboutspan">Invia-CEO Kevin Wang</h3>*/}
                                {/*In Via’s mission is to establish a community for international students studying abroad, focusing on inculcating important values and qualities, teaching them how to manage their emotions, as well as helping them express themselves and communicate more effectively. We aim to lead students out of their comfort zones and fears, help them find themselves, as well as aid them in choosing their own direction in life. We wish not only to be their guide on their academic journey, but also to be their closest friend.*/}
                                </h4>
                                <div className="aboutbtn1">
                                    <Link to="/about" className="btn aboutbtn2">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact section">
                    <h2 className="title">Contact Us</h2>

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
                        <div className="col-sm-4 wechat-border">
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
                        <div className="col-sm-4 wechat-border">
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

export default Index;