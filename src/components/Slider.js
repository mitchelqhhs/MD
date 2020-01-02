import React from 'react';
import './Slider.css';


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token;
        // this.onRouteChange = props.onRouteChange;
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.goToLogin = this.goToLogin.bind(this);
        // this.username = React.createRef();
        this.value = React.createRef();
        this.changeState = this.changeState.bind(this);
    }



changeState(token){
    console.log("changing state " + this.value.current.value);
}

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.register(this.username.current.value, this.password.current.value)
    // }

    render() {
        return (
            <div className="slidecontainer">
                <input type="range" min="1" step="1" max="100" defaultValue="30" className="slider" onChange={() => this.changeState(this.token)} id="myRange" ref={this.value}></input>
            </div>
        );
    
    }

}

export default Slider;