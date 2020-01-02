import React from 'react';
import './Toggle.css';

const Toggle = ({ action , arduino, token, id}) => {
    
    const performAction = (token) => {
        changeState(token);
    }


    const changeState = (token) => {
        var getobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + token
            },
            body: JSON.stringify({
                'arduinoName': "Lamp",
                'functionality': "On / Off",
                'status': false
            })
        };
        fetch('http://localhost:8000/change-state', getobj)
            .then(function (res) {
                console.log("changed state", res)
            });
    } 

    return (

        <div className="switchToggle">
            <input type="checkbox" id={id} onClick={() => performAction(token)}></input>
            <label htmlFor={id}></label>
        </div>
    );
}

export default Toggle;