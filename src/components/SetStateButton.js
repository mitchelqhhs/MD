import React from 'react';
import './SetStateButton.css';
import Toggle from './Toggle';
import Slider from './Slider';
import IntField from './IntField';

const SetStateButton = ({ action, arduino, token, id}) => {

    switch (action.type) {
        case "boolean":
            return <Toggle action={action} arduino={arduino} token={token} id={id} />
        case "info":
            return <div>
                <h2>{action.status}</h2>
            </div>
        case "slider":
            return <Slider action={action} arduino={arduino} token={token} id={id} />
        case "int":
            return <IntField action={action} arduino={arduino} token={token} id={id} />
        default:
            return <div>Oops Error happen</div>
    }

}

export default SetStateButton;