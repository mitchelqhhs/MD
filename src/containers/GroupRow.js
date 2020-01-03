import React from 'react';
import './GroupRow.css'

class GroupRow extends React.Component {
    constructor(props) {
        super(props);
        this.group = props.group;
        this.token = props.token;

        this.newName = React.createRef();
        // this.performAction = this.performAction.bind(this);
        this.removeGroup = this.removeGroup.bind(this);
        this.renameGroup = this.renameGroup.bind(this);
        // this.getGroup = this.getGroup.bind(this);
        // this.getAllGroup = this.getAllGroup.bind(this);
    }

    // performAction(token) {
    //     // changeGroup(token);
    //     // getGroup(token);
    //     // removeGroup(token);
    //     // this.getAllGroup(token);
    // }

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

    // getGroup(token) {
    //     var getobj = {
    //         method: 'GET',
    //         headers: {
    //             authorization: "bearer " + token
    //         }
    //     };

    //     fetch('http://localhost:8000/group/' + 'testName2', getobj)
    //         .then(function (res) {
    //             console.log(res);
    //             console.log("Get Group")
    //             return res.json();
    //         }).then(function (resJson) {
    //             console.log(resJson);
    //         });
    // }

    // getAllGroup(token) {
    //     var getobj = {
    //         method: 'GET',
    //         headers: {
    //             authorization: "bearer " + token
    //         }
    //     };

    //     fetch('http://localhost:8000/group/', getobj)
    //         .then(function (res) {
    //             console.log(res);
    //             console.log("Get All Group")
    //             return res.json();
    //         }).then(function (resJson) {
    //             console.log(resJson);
    //         });
    // }

    render() {
        return (

            <div className="row group-row">
                <div className="col col-7">
                    <input type="text" className="btn btn-light btn-group" ref={this.newName} defaultValue={this.group.name} />
                </div>
                

                <div className="col col-2">
                    <button type="button" className="btn btn-light btn-grp" onClick={() => this.renameGroup()}>✓</button>
                </div>
               
                <div className="col col-2">
                    <button type="button" className="btn btn-light btn-grp" onClick={() => this.removeGroup()}>x</button>
                </div>
            </div>

        );
    }
}

export default GroupRow;