
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Redirect,browserHistory } from 'react-router';
import app from '../app';
import { confirm } from '../confirm';
import {history} from '../app';

class All_User extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state= {

        }
        // this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        confirm(' Congratulations! Your request is already send to the mentor.').then(() => {
            // history.push('/userinterface');
            // window.location= "/userinterface";

            console.log('proceed!') ;
        }, () => {
            console.log('cancel!');
        });
    }

//     handleClick() {
//     var ReactThis = this;
//     axios.get('http://localhost:8080/student/' + this.props.data._id)
//         .then(function(response) {
//             console.log(response.data);
//             ReactThis.setState(response.data);
//         })
//         .catch(function(error) {
//             console.log(error)
//         })
// }
//     handleDelete() {
//     var ReactThis = this
//     var studentObj = this.state
//     axios.post('http://localhost:8080/delete', this.state)
//         .then(function(response) {
//             ReactThis.props.remove(studentObj);
//             console.log(response)
//         })
//         .catch(function(error) {
//             console.log(error)
//         })
// }

    render () {
        // if (this.state.email) {
        //     var nameNode = (
        //         <div className="detail">
        //             <div className="colorchange">
        //                 <h2>Name: {this.state.firstName}</h2>
        //                 <h2>Age: {this.state.age}</h2>
        //                 <h2>School: {this.state.school}</h2>
        //
        //                 <button onClick={this.handleDelete}>Delete</button>
        //             </div>
        //         </div>
        //     )
        // } else {
        //     var nameNode = <h6 onClick={this.handleClick}>{this.props.data.email}</h6>
        // }
        var nameNode = (
            <div className="detail">
                <div className="all_namenode">
                    <ul>
                        <li>{this.props.data.email}</li>
                        <li>{this.props.data.firstName}</li>
                        <li>{this.props.data.lastName}</li>
                        <li>{this.props.data.age}</li>
                        <li>{this.props.data.role}</li>
                        {/*<li><button type="submit" className="btn btn-danger active " onClick={this.handleClick}>Delete</button></li>*/}
                    </ul>
                    {/*<button onClick={this.handleDelete}>Delete</button>*/}
                </div>
            </div>
        )
        return (
            <div>

                {nameNode}

                <hr/>
            </div>


        )
    }

}

export default All_User