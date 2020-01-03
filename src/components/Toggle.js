import React from 'react';
import './Toggle.css';

const Toggle = ({ action, arduino, token, id }) => {

    const performAction = (token) => {
        changeState(token);
    }

    const changeState = (token) => {

        if (action.status === false){
            action.status = true;
        } else {
            action.status = false;
        }

        var getobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + token
            },
            body: JSON.stringify({
                'naam': arduino.arduinoName,
                'waarde': action.status
            })
        };
        fetch('http://localhost:8000/change-state', getobj)
            .then(function (res) {
                console.log("changed state to " + action.status , res)
            });
    } 

    return (
        <div className="switchToggle">
            <input defaultChecked={action.status} type="checkbox" id={id} onClick={() => performAction(token)}></input>
            <label htmlFor={id}></label>
        </div>
    );
}

export default Toggle;