import React from 'react';
import inputField from '../components/inputField';


class GroupRow extends React.Component {
    constructor(props) {
        super(props);
        this.group = props.group;
        this.token = props.token;

        this.newName = React.createRef();
        this.performAction = this.performAction.bind(this);
        this.addGroup = this.addGroup.bind(this);
        this.removeGroup = this.removeGroup.bind(this);
        this.renameGroup = this.renameGroup.bind(this);
        this.getGroup = this.getGroup.bind(this);
        this.getAllGroup = this.getAllGroup.bind(this);
        // this.timerSet = false;
    }

    performAction(token) {
        this.addGroup(token);
        // changeGroup(token);
        // getGroup(token);
        // removeGroup(token);
        this.getAllGroup(token);
    }

    addGroup(token) {
        var getobj = {
            method: 'POST',
            headers: {
                authorization: "bearer " + token
            },
            body: JSON.stringify({
                'name': "testName"
            })
        };

        fetch('http://localhost:8000/group/', getobj)
            .then(function (res) {
                console.log(res);
                console.log("Added Group")
            });
    }

    removeGroup() {

        let groupName = this.group.name;

        var getobj = {
            method: 'DELETE',
            headers: {
                authorization: "bearer " + this.token
            }
        };

        fetch('http://localhost:8000/group/' + groupName, getobj)
            .then(function (res) {
                console.log(res);
                console.log("removed Group " + groupName)
            });
    }

    renameGroup() {

        let newName = this.newName.current.value
        var getobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + this.token
            },
            body: JSON.stringify({
                'name': newName
            })
        };

        fetch('http://localhost:8000/group/' + this.group.name, getobj)
            .then(function (res) {
                console.log(res);
                console.log("Changed Groupname to: " + newName)
            });
    }

    getGroup(token) {
        var getobj = {
            method: 'GET',
            headers: {
                authorization: "bearer " + token
            }
        };

        fetch('http://localhost:8000/group/' + 'testName2', getobj)
            .then(function (res) {
                console.log(res);
                console.log("Get Group")
                return res.json();
            }).then(function (resJson) {
                console.log(resJson);
            });
    }

    getAllGroup(token) {
        var getobj = {
            method: 'GET',
            headers: {
                authorization: "bearer " + token
            }
        };

        fetch('http://localhost:8000/group/', getobj)
            .then(function (res) {
                console.log(res);
                console.log("Get All Group")
                return res.json();
            }).then(function (resJson) {
                console.log(resJson);
            });
    }

    render() {
        return (

            <div className="row device-row">
                <div className="col col-7">
                    <input type="text" className="btn btn-light btn-device" ref={this.newName} defaultValue={this.group.name} />
                </div>
                <div className="col col-4">
                    <button type="button" className="btn btn-action btn-light" onClick={() => this.renameGroup()}>Rename</button>
                </div>
                <div className="col col-1">
                    <button type="button" className="btn btn-action btn-light" onClick={() => this.removeGroup()}>X</button>
                </div>
            </div>

        );
    }
}

export default GroupRow;