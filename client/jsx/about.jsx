
var About = React.createClass({
    getInitialState : function(){
        return {}
    },
    render: function(){
        return (
            <div >
                <p>hello</p>
            </div>

        )
    }
})

ReactDOM.render(
    <About/>, document.getElementById('aboutDetail')
)