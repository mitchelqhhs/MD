import React from 'react';
import SetStateButton from '../components/SetStateButton';

const DeviceRow = ({ arduino, setSelectedDevice, token }) => {

    let index = parseInt(arduino.quickaction);

    return (

        <div className="row device-row">
            <div className="col col-9">
                <button className="btn btn-light btn-device" onClick={() => setSelectedDevice(arduino)} >{arduino.arduinoName}</button>
            </div>
            
            <div className="col col-2">
                <SetStateButton action={arduino.functionalities[index]} arduino={arduino} token={token} id={arduino.arduinoName}/>
            </div>
            <div className="col col-1">
            </div>
        </div>
    );
}

export default DeviceRow;