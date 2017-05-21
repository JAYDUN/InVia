import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Signup from './signup';
const SignUp = require ('./signup')
class UserInterface extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/new', this.state)
            .then(function(response) {
                // ReactThis.setState({
                //     studentList: response.data
                // })
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })

    }

    handleChange(event) {
        var studentUpdate = this.state
        studentUpdate[event.target.name] = event.target.value
        this.setState(studentUpdate)
        console.log(this.state.email.value)
    }
    render () {
        return  (
            <div className="container  ">
                <div className="row clearfix userinterface_container">
                    <div className="col-md-3 column">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    个人管理
                                </h3>
                            </div>
                            <div className="panel-body">
                                <a href="#user_information">基本信息</a>
                            </div>
                            {/*<div className="panel-footer">*/}
                                {/*Panel footer*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-md-9 column">
                        <form className="form-horizontal" role="form" id="user_information">
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">FirstName</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" name="fistName" value={this.state.firstName} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label   className="col-sm-2 control-label">LastName</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" name="lastName" value={this.state.lastName}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label  className="col-sm-2 control-label">Age</label>
                                <div className="col-sm-5">
                                    <input type="number" className="form-control" name="age" value={this.state.age}/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label   className="col-sm-2 control-label">School</label>
                                <div className="col-sm-5">
                                    <input type="text" className="form-control" name="school" value={this.state.lastName}/>
                                </div>
                            </div>


                            <div className="form-group">
                                <div className="col-sm-5 column">
                                    <button type="submit" className="btn btn-info active login_btn">修改</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        )
    }
}

export default UserInterface;