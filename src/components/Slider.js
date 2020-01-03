import React from 'react';
import './Slider.css';


class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token;
        this.arduino = props.arduino;
        this.value = React.createRef();
        this.changeState = this.changeState.bind(this);
        this.changeValue = this.changeValue.bind(this);
        this.timerSet = false;
    }

    changeState(token) {

        let value = this.value.current.value;
        let name = this.arduino.arduinoName;

        var getobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + token
            },
            body: JSON.stringify({
                'naam': name,
                'waarde': value
            })
        };
        
        fetch('http://localhost:8000/change-state', getobj)
            .then(function (res) {
                console.log("changed state of " + name + " to " + value, res)
            });
    }

    setTimer(token) {
        if (!this.timerSet) {
            this.timerSet = true;
            let timerId = setInterval(() => this.changeState(token), 2000);
            setTimeout(() => { clearInterval(timerId); this.timerSet = false; }, 2000);
        }
    }

    changeValue(token) {
        console.log("new value: " + this.value.current.value);
        this.setTimer(token);
    }

    render() {
        return (
            <div className="slidecontainer">
                <input type="range" min="1" step="1" max="100" defaultValue="30" className="slider" onChange={() => this.changeValue(this.token)} id="myRange" ref={this.value}></input>
            </div>
        );
    }

}

export default Slider;