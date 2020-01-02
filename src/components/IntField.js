import React from 'react';
import './Toggle.css';
import inputField from './inputField'

const IntField = ({ action, arduino, token, id }) => {


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

    const onTodoChange = (value) => {
        action.status = value;
    }

const plus = () => {
    console.log(action.status);
    action.status++;
    return (

        <div className="qty">
            <button onClick={() => plus(token)} className="minus bg-dark">-</button>
            <inputField />
            <button onClick={() => plus(token)} className="plus bg-dark">+</button>
        </div>
    );
}

    return (

        <div className="qty">
            <button onClick={() => plus(token)} className="minus bg-dark">-</button>
            <input type="number" className="count" name={action.name} onChange={e => onTodoChange(e.target.value)} value={action.status}></input>
            <button onClick={() => plus(token)} className="plus bg-dark">+</button>
        </div>
    );
}
export default IntField;