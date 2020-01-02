import React from 'react';
import Dropdown from '../components/Dropdown'
import Action from '../components/Action'

const Device = ({ device, group, groups, token }) => {

    const actionList = device.functionalities.map((action, i) => {
            return (
                <Action
                    key={i}
                    action={action}
                    arduino={device}
                    token={token}
                />
            );
    });

    console.log(groups);
    return (
        <div>
            <h2>{device.arduinoName}</h2>

            <div className="row device-row">
                <div className="col col-5">
                    <h4>Groep: </h4>
                </div>
                <div className="col col-0">
                </div>
                <div className="col col-7">
                    <Dropdown
                        groups={groups}
                        selection={group}
                    />
                </div>
            </div>

            <div>
                {actionList}

            </div>

        </div>

    );
}

export default Device;