import React from 'react';
import './Login.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = props.login;
        this.onRouteChange = props.onRouteChange;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToRegister = this.goToRegister.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.login(this.username.current.value, this.password.current.value)
    }

    goToRegister(event) {
        this.onRouteChange("register");
    }


    render() {
        return (
            <div className="auth">
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit}>


                    <div className="col-sm-2">
                        <h3>Username:</h3>
                    </div>
                    <div className="col-sm-4">
                        <input type="email" className="form-control form-control-lg" ref={this.username}></input>
                    </div>
                    <h3> </h3>

                    <div className="col-sm-2">
                        <h3>Password:</h3>
                    </div>
                    <div className="col-sm-4">
                        <input type="password" className="form-control form-control-lg" ref={this.password}></input>
                    </div>


                    <div className="row buttonrow">

                        <div className="col col-7">
                            <input type="submit" value="Login" className="btn btn-dark" />
                        </div>
                        <div className="col col-1">
                        </div>
                        <div className="col col-4">
                            <input onClick={this.goToRegister} type="button" value="Register" className="btn btn-light" />
                        </div>
                        
                    </div>



                </form>
            </div>
        );
    }
}


export default Login;