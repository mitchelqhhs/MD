import React from 'react';
import './Toggle.css';

const inputField = ({ value }) => {


    return (      
            <input type="number" className="count" name={value} value={value}></input>
    );
}
export default inputField;