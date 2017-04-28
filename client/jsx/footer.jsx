
var Footer = React.createClass({
    getInitialState : function(){
        return {}
    },
    render: function(){
        return (<div className="container">
                <section id="contact" className="contact section">
                        <h2 className="title">联系我们</h2>
                        <div className="row contact-row">
                            <div className="col-sm-3">
                                <div className="InVia-card">
                                    <div className="InVia-card-header">
                                        <span className="" ></span>
                                    </div>
                                    <div className="InVia-card-content contactinfo">
                                        <h3>Address</h3>
                                        <p>
                                            8766 Mckim Way Unit 2050,Richmond,BC,CANADA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="InVia-card">
                                    <div className="InVia-card-header">
                                        <span className="" ></span>
                                    </div>
                                    <div className="InVia-card-content contactinfo">
                                        <h3>Email</h3>
                                        <p>
                                            info@in-via.ca
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    <div className="row contact-row">
                        <div className="col-sm-3 wechat-border">

                            <div className="InVia-card-content contactinfo">
                                <h3><img src="../img/wechat.jpeg" className="wechatlogo"></img>微信公众号</h3>
                            </div>
                            <div className="InVia-card wechat-official-account">
                            </div>

                        </div>
                        <div className="col-sm-3 wechat-border">

                            <div className="InVia-card-content contactinfo">
                                <h3><img src="../img/wechat.jpeg" className="wechatlogo"></img>微信客服</h3>
                            </div>
                            <div className="InVia-card wechat-customer-service">

                    </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <p>Copyright 2017 知途伴学Invia All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
})

ReactDOM.render(
    <Footer/>, document.getElementById('footer')
)