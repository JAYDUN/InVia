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
            <div className="services_container">
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-5 column services_container_left">

                                    </div>
                                    <div className="col-md-5 column services_container_right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            {/*<h5>初来乍到</h5>*/}
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_left">
                                                <div className="services_container_right_body_header">
                                                    <h4>1.1 出国前远程服务与问题解答</h4>

                                                </div>
                                                <div className="services_container_right_body_body">
                                                    <h5>时长：2小时</h5>
                                                    <h5>联系方式：知途伴学微信客服</h5>
                                                    <h5>线上咨询内容包含：</h5>
                                                    <h6>分析选择寄宿家庭</h6>
                                                        <h6>学校环境分析</h6>
                                                        <h6>药物携带</h6>
                                                        <h6>医疗保险</h6>
                                                        <h6>出关流程   等</h6>

                                                </div>
                                            </div>
                                            <div className="services_container_right_body_left">
                                                <div className="services_container_right_body_header">
                                                    <h4>1.2 预备班活动出发前家访</h4>

                                                </div>
                                                <div className="services_container_right_body_body">
                                                    <h5>时长：2小时</h5>
                                                    <h5>联系方式：导师亲自到访寄宿家庭</h5>
                                                    <h5>内容包含：</h5>
                                                    <h6>导师家访了解寄宿家庭实际情况</h6>
                                                    <h6>学校环境分析</h6>
                                                    <h6>药物携带</h6>
                                                    <h6>与参加活动的学生核对活动流程</h6>
                                                    <h6>讲解活动注意事项</h6>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-6 column services_container_left activities-1-left">

                                    </div>
                                    <div className="col-md-6 column services_container_right activities-right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>1.3 预备班行程表</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                                <div className="services_container_right_body_header">
                                                    <h4>学前工作坊之北美文化深度了解
                                                    </h4>

                                                </div>
                                                <div className="services_container_right_body_body activities-right-body">
                                                    <h5>时间：8月7／8日</h5>
                                                    <h5>地点：Downtown 温哥华市中心</h5>
                                                    <h5 className="services_container_right_body_body_sp">参观温哥华历史悠久的Gastown煤气镇、Christ Church Cathedral教堂以及感受现代的都市文化（Canada Place, 全加拿大唯一的4D体验馆）</h5>
                                                    <h5>在北美最有名的Vancouver Central Public Library温哥华公共图书馆举办学前工作坊</h5>
                                                    <h6>了解加拿大的特色活动与节日</h6>
                                                    <h6>中加节日文化活动差异大盘点</h6>
                                                    <h6>学习如何尊重文化差异性</h6>
                                                    <h6>如何避免盲目加入当地的宗教组织，通过宗教我们可以学习到什么</h6>

                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-6 column services_container_left activities-2-left">

                                    </div>
                                    <div className="col-md-6 column services_container_right activities-right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>1.3 预备班行程表</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_header">
                                                <h4>学前工作坊之留学生活知识全知道
                                                </h4>

                                            </div>
                                            <div className="services_container_right_body_body activities-right-body">
                                                <h5>时间：8月9/10日</h5>
                                                <h5>地点：UBC 英属哥伦比亚大学</h5>
                                                <h5 className="services_container_right_body_body_sp">
                                                    参观加拿大排名前三的高等学府（Rose Garden玫瑰花园、MOA人类学博物馆、Beaty Biodiversity Museum生物多样性博物馆、各学科教学楼）
                                                </h5>
                                                <h6>在校园内举办学前工作坊之加国留学生活知识全知道</h6>
                                                <h6>如何使用医疗保险，办理当地生活卡</h6>
                                                <h6>与寄宿家庭、室友、房东产生不和谐时的交流技巧</h6>
                                                <h6>在新学校怎么表现能让“洋老师”以后“照顾”你</h6>
                                                <h6>如何用心理学小技巧处理海外留学产生的孤独感</h6>
                                                <h6>如何用营养学合理安排日常饮食</h6>
                                                <h6>温哥华四季相关的户外活动等</h6>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className="about services-section">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column services_subcontainer">
                            <div className="row clearfix">
                                <div className="col-md-6 column services_container_left activities-3-left">

                                </div>
                                <div className="col-md-6 column services_container_right activities-right">
                                    <div className="services_container_right_header">
                                        <h3>新留学生开学预备班</h3>
                                        <h4>1.3 预备班行程表</h4>
                                    </div>
                                    <div className="services_container_right_body">
                                        <div className="services_container_right_body_header">
                                            <h4>学前工作坊之英文能力进阶强化
                                            </h4>

                                        </div>
                                        <div className="services_container_right_body_body activities-right-body">
                                            <h5>时间：8月11/12日</h5>
                                            <h5>地点：Burnaby-SFU 本拿比-西蒙菲莎大学</h5>
                                            <h5>参观西蒙菲莎大学（Academic Q）</h5>
                                            <h6>在校园内举办学前工作坊之英文能力进阶</h6>
                                            <h6>学会读懂英文营养标签和用流利地英文点餐	</h6>
                                            <h6>如何炼就自信的公众演讲</h6>
                                            <h6>如何用优雅的英文网络段子和老外聊成一片</h6>
                                            <h6>看哪些入门的英文电影和书籍可以提升英文</h6>
                                            <h6>如何合理应对英文教学并快速解决语言障碍</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section  className="about services-section">
                <div className="container">
                    <div className="row clearfix">
                        <div className="col-md-12 column services_subcontainer">
                            <div className="row clearfix">
                                <div className="col-md-6 column services_container_left activities-4-left">

                                </div>
                                <div className="col-md-6 column services_container_right activities-right">
                                    <div className="services_container_right_header">
                                        <h3>新留学生开学预备班</h3>
                                        <h4>1.3 预备班行程表</h4>
                                    </div>
                                    <div className="services_container_right_body">
                                        <div className="services_container_right_body_header">
                                            <h4>学前工作坊之学校课程与课外生活安排详解
                                            </h4>

                                        </div>
                                        <div className="services_container_right_body_body activities-right-body">
                                            <h5>时间：8月14/15日</h5>
                                            <h5>地点：Granville Island 格兰维尔岛</h5>
                                            <h5 className="services_container_right_body_body_sp">
                                                参观历史文化气息浓厚的格兰维尔岛，游览别具一格的手工艺品店，探索富含本地特色的自由市场。参观加拿大著名高等艺术学府Emily Carr University艾米丽卡尔大学（South Building Fine Art、North Building Media Art）
                                            </h5>
                                            <h6>在校园内举办学前工作坊之学校课程与课外生活安排详解</h6>
                                            <h6>课程安排：明确自己这一个学期的课程，时间表，以及所需课程材料的准备
                                            </h6>
                                            <h6>参与社会志愿者活动的必要性有哪些
                                            </h6>
                                            <h6>怎么才能找到一份“好玩的”兼职工作并学会属于你的财务管理
                                            </h6>
                                            <h6>
                                                情窦初开的青少年留学生在异国感情里需要注意些什么
                                            </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-6 column services_container_left activities-5-left">

                                    </div>
                                    <div className="col-md-6 column services_container_right activities-right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>1.3 预备班行程表</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_header">
                                                <h4>学前工作坊之户外体验活动 (一)
                                                </h4>

                                            </div>
                                            <div className="services_container_right_body_body activities-right-body">
                                                <h5>时间：8月16/17日</h5>
                                                <h5>地点：North Vancouver Deep Cove 北温哥华</h5>
                                                <h5 className="services_container_right_body_body_sp">
                                                    参观Deep Cove小镇并介绍北温历史文化。为了让留学生们在开学前得到充分有效的放松，我们为学生们组织湖边烧烤BBQ、益智游戏和各式各样的休闲运动项目（游览周边大自然风光、爬山、湖上划船等）
                                                </h5>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-6 column services_container_left activities-6-left">

                                    </div>
                                    <div className="col-md-6 column services_container_right activities-right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>1.3 预备班行程表</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_header">
                                                <h4>学前工作坊之户外体验活动 (二)
                                                </h4>

                                            </div>
                                            <div className="services_container_right_body_body activities-right-body">
                                                <h5>时间：8月18/19日</h5>
                                                <h5>地点：Langley兰里</h5>
                                                <h5 className="services_container_right_body_body_sp">
                                                    坐学校大巴到大温地区最具有历史文化特色的兰里区（了解加拿大货币的历史，识别动物保护路牌，参观古董店和旧火车博物馆等）。在兰里最大的农场里体验采摘时令水果的乐趣（蓝莓、草莓、黑莓等），喂养可爱的小动物，参与淘金游戏。
                                                </h5>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">
                                    <div className="col-md-6 column services_container_left activities-7-left">

                                    </div>
                                    <div className="col-md-6 column services_container_right activities-right">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>1.4 导师开学前咨询辅导</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_header">
                                                <h4>导师开学前咨询辅导
                                                </h4>

                                            </div>
                                            <div className="services_container_right_body_body activities-right-body">
                                                <h5>时间：8月20日- 8月30日</h5>
                                                <h5>时长：1小时 （共10次）
                                                </h5>
                                                <h5>联系方式：通过线上预约导师</h5>
                                                <h6>帮我们的小留学生做寄宿家庭的协调
                                                </h6>
                                                <h6>
                                                    学校课程的安排，了解每个人的升学计划

                                                </h6>
                                                <h6>考试报名协助 大学专业、高中课程分析
                                                </h6>
                                                <h6>开学前家长会陪伴
                                                </h6>
                                                <h6>搬家服务，二手书本准备
                                                </h6>
                                                <h6>协助学生办理加拿大的医疗保险
                                                </h6>
                                                <h6>性格测试，语言提高
                                                </h6>
                                                <h6>任何学生线下需要的帮助（除医疗紧急情况)
                                                </h6>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section  className="about services-section">
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-md-12 column services_subcontainer">
                                <div className="row clearfix">

                                    <div className="col-md-6 column services_container_right activities-price">
                                        <div className="services_container_right_header">
                                            <h3>新留学生开学预备班</h3>
                                            <h4>价格表</h4>
                                        </div>
                                        <div className="services_container_right_body">
                                            <div className="services_container_right_body_header">
                                                <h4>价格：1500 加币 / 8000人民币
                                                </h4>

                                            </div>
                                            <div className="services_container_right_body_body activities-right-body">
                                                <h5>费用包含：</h5>
                                                <h5 className="services_container_right_body_body_sp">导师费用开学前1对1咨询辅导、工作坊午餐费用、烧烤食材和器械费用、交通费用、相关场地租借费用、各博物馆门票、体验馆门票、农场费用（门票和第一磅水果费用）</h5>
                                                <h5>费用不包含：</h5>
                                                <h5>Deep Cove租船费用、学生额外购物费用
                                                </h5>
                                                <h5>
                                                    注意事项：
                                                </h5>
                                                <h6>
                                                    学生需根据自身体能恰当地选择户外活动项目
                                                </h6>
                                                <h6>
                                                    步行时，学生需尽量避免因玩手机而导致掉队
                                                </h6>
                                                <h6>
                                                    寄宿家庭需按时接送学生到指定地点
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
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
            </div>


        )
    }
}

export default Services;