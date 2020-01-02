import React from 'react';
import './Action.css';
import SetStateButton from './SetStateButton';

const Action = ({ action, arduino, token }) => {

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
                    <SetStateButton action={action} arduino={arduino} token={token} id={action.name}/>
                </div>
            </div>

        </div>
    );
}

export default Action;