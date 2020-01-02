import React from 'react';

const GroupRow = ({ group, token }) => {

    const changeState = (token) => {
        var getobj = {
            method: 'GET',
            headers: {
                authorization: "bearer " + token
            },
            body: JSON.stringify({
                'name': "testName"
            })
        };

        fetch('http://localhost:8000/group/ongesorteerd', getobj)
            .then(function (res) {
                return res.json();
            })
            .then(function (resJson) {
                console.log("changed name", resJson)
            });
    }

    return (

        <div className="row device-row">
            <div className="col col-9">
                <a href="#foo" className="btn btn-light btn-device" >{group.name}</a>
            </div>
            <div className="col col-1">
            </div>
            <div className="col col-2">
                <button type="button" className="btn btn-action btn-light" onClick={() => changeState(token)}>O</button>
            </div>
        </div>

    );
}

export default GroupRow;