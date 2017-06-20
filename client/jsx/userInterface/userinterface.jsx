import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Signup from '../signup/signup';
const SignUp = require ('./../signup/signup');
import Student from './student';
class UserInterface extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            studentList:[]

        }

        this.removeFromList= this.removeFromList.bind(this);

    }

    removeFromList(obj) {
    // Remove obj from student list and update state

    var oldStudentList = this.state.studentList
    var newStudentList = oldStudentList.filter(function(student) {
        return student._id !== obj._id;
    });
    this.setState({
        studentList: newStudentList
    })
}
    componentDidMount() {
        var ReactThis = this;
    axios.get('http://localhost:8080/student')
        .then(function(response) {
            ReactThis.setState({
                studentList:response.data
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}
    render () {
        var ReactThis = this;

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
                             <div className="panel-body " >



                                         <a href="#mentor_list">Mentor List</a>

                             </div>
                             {/*<div className="panel-footer">*/}
                                 {/*Panel footer*/}
                             {/*</div>*/}
                         </div>
                     </div>
                     <div className="col-md-9 column ">
                          {/*<form className="form-horizontal tab-pane active" role="form" id="user_information">*/}
                              {/*<div className="form-group">*/}
                                  {/*<label  className="col-sm-2 control-label">FirstName</label>*/}
                                  {/*<div className="col-sm-5">*/}
                                      {/*<input type="text" className="form-control" name="firstName"  />*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                              {/*<div className="form-group">*/}
                                  {/*<label   className="col-sm-2 control-label">LastName</label>*/}
                                  {/*<div className="col-sm-5">*/}
                                      {/*<input type="text" className="form-control" name="lastName" />*/}
                                  {/*</div>*/}
                     {/*</div>*/}
                              {/*<div className="form-group">*/}
                                 {/*<label  className="col-sm-2 control-label">Age</label>*/}
                                  {/*<div className="col-sm-5">*/}
                                      {/*<input type="number" className="form-control" name="age" />*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                              {/*<div className="form-group">*/}
                                  {/*<label   className="col-sm-2 control-label">School</label>*/}
                                  {/*<div className="col-sm-5">*/}
                                      {/*<input type="text" className="form-control" name="school" />*/}
                                  {/*</div>*/}
                              {/*</div>*/}
                             {/*<div className="form-group">*/}
                                 {/*<div className="col-sm-5 column">*/}
                                     {/*<button type="submit" className="btn btn-info active login_btn">修改</button>*/}
                                 {/*</div>*/}
                             {/*</div>*/}
                         {/*</form>*/}
                         <div className="namenode_title">
                             <ul>
                                 <li><h3>Email</h3></li>
                                 <li><h3>FirstName</h3></li>
                                 <li><h3>LastName</h3></li>
                                 <li><h3>Age</h3></li>
                             </ul>
                         </div>
                         {
                             this.state.studentList.map(
                                 function(currentStudent) {
                                     return <Student data={currentStudent} remove={ReactThis.removeFromList} key={currentStudent._id}/>
                                 }
                             )
                         }
                     </div>

                </div>



            </div>

        )
    }
}

export default UserInterface;