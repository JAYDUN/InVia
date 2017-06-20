
import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Auth from '../Auth';


class Login extends React.Component {

    constructor(props, context) {
        super(props, context);

        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';

        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }

        // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
                password: ''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/auth/login', this.state)
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
    /**
     * Process the form.
     *
     * @param {object} event - the JavaScript event object
     */
    // processForm(event) {
    //     // prevent default action. in this case, action is the form submission event
    //     event.preventDefault();
    //
    //     // create a string for an HTTP body message
    //     const email = encodeURIComponent(this.state.user.email);
    //     console.log(this.state.user.email);
    //
    //     const password = encodeURIComponent(this.state.user.password);
    //     console.log(this.state.user.password);
    //
    //     const formData = `email=${email}&password=${password}`;
    //     console.log(formData.valueOf(email));

        // create an AJAX request
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('post', '/auth/login');
    //     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     xhr.responseType = 'json';
    //     xhr.addEventListener('load', () => {
    //         if (xhr.status === 200) {
    //             // success
    //
    //             // change the component-container state
    //             this.setState({
    //                 errors: {}
    //             });
    //
    //             // save the token
    //             Auth.authenticateUser(xhr.response.token);
    //
    //
    //             // change the current URL to /
    //             this.context.router.replace('/');
    //         } else {
    //             // failure
    //
    //             // change the component state
    //             const errors = xhr.response.errors ? xhr.response.errors : {};
    //             errors.summary = xhr.response.message;
    //
    //             this.setState({
    //                 errors
    //             });
    //         }
    //     });
    //     xhr.send(formData);
    // }
    //
    // /**
    //  * Change the user object.
    //  *
    //  * @param {object} event - the JavaScript event object
    //  */

    handleChange(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    render () {
        return  (
            <div className="container">
            <div className="login_container">
            <header className="login_header">
                <h3>Sign In</h3> or  <Link to="/signup">Sign Up</Link>
            </header>
                <div className="row clearfix login_body">
                    <div className="col-md-12 column">
                        <form className="form-horizontal" role="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
                                <div className="col-sm-5">
                                    <input type="email" className="form-control" id="inputEmail3" name="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPassword3"  className="col-sm-2 control-label">Password</label>
                                <div className="col-sm-5">
                                    <input type="password" className="form-control" id="inputPassword3" name="password"  onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="login-forgot">
                                <a>Forgot your password?</a>
                            </div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <div className="checkbox">
                                        <label><input type="checkbox" />Remember me</label>
                                    </div>
                                </div>
                            </div>
                                <div className="form-group">
                                <div className="col-sm-5 column">
                                    <button type="submit" className="btn btn-info active login_btn">Log In</button>
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

export default Login;