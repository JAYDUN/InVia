import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Signup from '../signup/signup';
const SignUp = require ('./../signup/signup');
import All_User from './All-user';
import Mentor from './create-mentor-account';
import { Tab,Row,Col,Nav,NavItem } from 'react-bootstrap';
class AdminInterface extends React.Component {
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
        axios.get('http://localhost:8080/all')
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
        const tabsInstance = (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="clearfix userinterface_container">
                    <Col sm={3}>
                        <Nav bsStyle="pills" stacked >
                            <NavItem eventKey="first" className="Admin_navitem">
                                User List
                            </NavItem>
                            <NavItem eventKey="second" className="Admin_navitem">
                                Create Mentor Account
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content animation>
                            <Tab.Pane eventKey="first">
                                <div className="all_namenode_title">
                                    <ul>
                                        <li><h3>Email</h3></li>
                                        <li><h3>FirstName</h3></li>
                                        <li><h3>LastName</h3></li>
                                        <li><h3>Age</h3></li>
                                        <li><h3>Role</h3></li>
                                    </ul>
                                </div>
                                {
                                    this.state.studentList.map(
                                        function(currentStudent) {
                                            return <All_User data={currentStudent} remove={ReactThis.removeFromList} key={currentStudent._id}/>
                                        }
                                    )
                                }
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Mentor className="mentorAccount"/>

                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
        return  (
            tabsInstance
        )
    }
}

export default AdminInterface