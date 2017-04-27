
var Nav = React.createClass({
    getInitialState : function(){
        return {}
    },
    render: function(){
       return (
           <div className="container navcontainer ">
                   <div className="col-md-12 column nav-col">
                       <ul className=" nav-tabs invia-nav">
                           <li>
                               <a href="index.html"><img className="logo" src="../img/invia-logo.jpg" ></img></a>
                           </li>
                       </ul>
                       <ul  className=" nav-mid invia-nav">
                           <li>
                               <a href="index.html">首页</a>
                           </li>
                           <li>
                               <a href="#about">关于Invia</a>
                           </li>
                           <li>
                               <a href="#contact">联系我们</a>
                           </li>
                       </ul>
                   </div>

           </div>

       )
    }
})

ReactDOM.render(
    <Nav/>, document.getElementById('nav')
)