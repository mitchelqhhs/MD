import React from 'react';

const DeviceRow = ({ arduino, setSelectedDevice, token }) => {

    const changeState = (token) => {
        var getobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + token
            }
        };

        fetch('http://localhost:8000/change-state', getobj)
            .then(function (res) {
                return res.json();
            })
            .then(function (resJson) {
                console.log("changed state", resJson)
            });
    } 

    return (

        <div className="row device-row">
            <div className="col col-9">
                <a href="#foo" className="btn btn-light btn-device" onClick={() => setSelectedDevice(arduino)} >{arduino.arduinoName}</a>
            </div>
            <div className="col col-1">
            </div>
            <div className="col col-2">
                <button type="button" className="btn btn-action btn-light" onClick={() => changeState(token)}>O</button>
            </div>
        </div>

    );
}

export default DeviceRow;