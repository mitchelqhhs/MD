import React from 'react';
import SetStateButton from '../components/SetStateButton';

const DeviceRow = ({ arduino, setSelectedDevice, token }) => {

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


    // const changeState = (token) => {
    //     var getobj = {
    //         method: 'GET',
    //         headers: {
    //             authorization: "bearer " + token
    //         }
    //         // body: JSON.stringify({
    //         //     'arduinoName': "Lamp",
    //         //     'functionality': "On / Off",
    //         //     'status': false
    //         // })
    //     };
    //     fetch('http://localhost:8000/device/Lamp', getobj)
    //         .then(function (res) {
    //             console.log("changed state", res)
    //         });

    // } 


    // const changeState = (token) => {
    //     var getobj = {
    //         method: 'PUT',
    //         headers: {
    //             authorization: "bearer " + token
    //         },
    //         body: JSON.stringify({
    //             'arduinoName': "Lamp",
    //             'quickAction': 1
    //         })
    //     };
    //     fetch('http://localhost:8000/lamp/setaction', getobj)
    //         .then(function (res) {
    //             console.log("changed state", res)
    //         });
    // } 

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

{/* <button type="button" className="btn btn-action btn-light" onClick={() => changeState(token)}>O</button> */}

export default DeviceRow;