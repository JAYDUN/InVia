
var Index = React.createClass({
    getInitialState : function(){
        return {}
    },
    render: function(){
        return (
            <div className="container">
                <header className="header">
                    <div className="row">
                        <div className="intro-box" >
                            <div className="intro"  >
                                <h1>欢迎来到知途伴学Invia</h1>
                                <h3>教诲是条漫长的道路，榜样是条捷径。—— 塞内加
                                </h3>
                                <a className="btn header-btn" href="#about">Explore us</a>
                            </div>
                        </div>
                    </div>
                </header>
                <section id="about" className="about section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h2 className="title">关于 Invia</h2>
                                <h4>
                                    知途伴学是一家由英属哥伦比亚大学(University of British Columbia)不同毕业生成立的“良师助组织”，是在加拿大注册的教育益友互公司。主要负责为高中留学生提供一对一的伴学服务，与各类线下活动，其中内容包括心理陪伴、营养饮食、文化生活、升学义工等等。
                                </h4>
                                {/*<h3 className="aboutspan">Invia-CEO Kevin Wang</h3>*/}
                                <div className="aboutbtn1">
                                    <a className="btn aboutbtn2" href="../html/about.html">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
})

ReactDOM.render(
    <Index/>, document.getElementById('index')
)