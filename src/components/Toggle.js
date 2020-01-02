import React from 'react';
import './Toggle.css';

const Toggle = ({ action, status }) => {

    let html;

    console.log(action.type)


    switch (action.type) {
        case "boolean":
            html = <div className="switchToggle">
                <input type="checkbox" id={action.name}></input>
                <label htmlFor={action.name}></label>
            </div>
            break;
        case "info":
            html = <div>
                <h2>{action.status}</h2>
            </div>
            break;
        case "slider":
            html = <div>
                <h2>slider{action.status}</h2>
            </div>
            break;
        case "int":
            html = <div className="qty">
                <span className="minus bg-dark">-</span>
                <input type="number" className="count" name={action.name} value={action.status}></input>
                <span className="plus bg-dark">+</span>
            </div>
            break;
        default:
            html = <div>Oops Error happen</div>
    }


    return (

        html

    );
}

export default Toggle;