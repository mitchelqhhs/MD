import React from 'react';


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.register = props.register;
        this.onRouteChange = props.onRouteChange;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.goToLogin = this.goToLogin.bind(this);
        this.username = React.createRef();
        this.password = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        this.register(this.username.current.value, this.password.current.value)
    }

    goToLogin(event) {
        this.onRouteChange("login");
    }

    render() {
        return (
            <div className="auth">
                <h2>Register</h2>
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
                    <h3> </h3>

                    <div className="row buttonrow">

                        <div className="col col-7">
                            <input type="submit" value="Register" className="btn btn-dark" />
                        </div>
                        <div className="col col-1">
                        </div>
                        <div className="col col-4">
                            <input onClick={this.goToLogin} type="button" value="Login" className="btn btn-light" />
                        </div>

                    </div>

                </form>
            </div>
        );
    }
}


export default Register;