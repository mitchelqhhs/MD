import React from 'react';
import Toggle from './Toggle'
import './Action.css';

const Action = ({ action }) => {

    // console.log("item")

    // <button type="button" className="btn btn-action btn-light">{action.status}</button>
    // console.log(group);
    return (
        <div>
            
            <div className="row device-row">
                <div className="col col-7">
                    <h4>{action.name}</h4>
                </div>
                
                <div className="col col-5">
                    <Toggle action={action} />
                </div>
            </div>

        </div>
    );
}

export default Action;