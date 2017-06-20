
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Redirect,browserHistory } from 'react-router';
import app from '../app';
import { confirm } from '../confirm';
import {history} from '../app';

class Signup extends React.Component {
    constructor(props, context){
        super(props, context);
       this.state= {
            email:"",
            password:"",
            firstName: "",
            lastName: "",
            school: "",
            age:"",
            role:"student",
            remainingtime:"0",
        }
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
        }),
        confirm('Congratulations! You successfully created an account!').then(() => {
            // history.push('/userinterface');
            // window.location= "/userinterface";
            history.push('/userinterface');
            history.replace('/userinterface');

            console.log('proceed!') ;
        }, () => {
            console.log('cancel!');
        });
        history.push('/userinterface');
        history.replace('/userinterface')
}

    handleChange(event) {
    var studentObj = this.state
    studentObj[event.target.name] = event.target.value
    this.setState(studentObj)
}

//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
    render () {
        return  (
            <div className="container ">
                <div className="login_container">
                     <header className="login_header">
                         <h3>Sign Up</h3> or <Link to="/login">Sign In</Link>
                     </header>
                     <div className="row clearfix login_body">
                         <div className="col-md-12 column">
                             <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                                 <div className="form-group">
                                     <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                     <div className="col-sm-5">
                                         <input type="email" className="form-control" name="email" id="inputEmail3"  onChange={this.handleChange}   />
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <label htmlFor="inputPassword3"  className="col-sm-2 control-label">Password</label>
                                     <div className="col-sm-5">
                                         <input type="password" className="form-control" name="password" id="inputPassword3" onChange={this.handleChange}/>
                                     </div>
                                 </div>
                                 <div className="form-group signup-password-comfirm">
                                     <label htmlFor="inputPassword3"  className="col-sm-2 control-label ">Confirm Password</label>
                                     <div className="col-sm-5">
                                         <input type="password" className="form-control" id="inputPassword3" />
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <label   className="col-sm-2 control-label">School</label>
                                     <div className="col-sm-5">
                                         <input type="text" className="form-control"  name="school" onChange={this.handleChange}/>
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <label  className="col-sm-2 control-label">FirstName</label>
                                     <div className="col-sm-5">
                                         <input type="text" className="form-control" name="firstName" onChange={this.handleChange} />
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <label   className="col-sm-2 control-label">LastName</label>
                                     <div className="col-sm-5">
                                         <input type="text" className="form-control" name="lastName" onChange={this.handleChange}/>
                                     </div>
                                 </div>
                                 <div className="form-group">
                                     <label  className="col-sm-2 control-label">Age</label>
                                     <div className="col-sm-5">
                                         <input type="number" className="form-control" name="age" onChange={this.handleChange}/>
                                     </div>
                                 </div>
                                <div className="form-group">
                                    <div className="col-sm-5 column">
                                        <button type="submit" className="btn btn-info active login_btn" >Sign Up</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        )
    }

}

export default Signup;