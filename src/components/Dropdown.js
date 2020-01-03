import React from 'react';
import DropdownItem from './DropdownItem'


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.selection = props.selection;
        this.groups = props.groups;
        this.token = props.token;
        this.arduino = props.arduino;
        this.newGroup = React.createRef();
        this.getOldArduinos = this.getOldArduinos.bind(this);
        this.getNewArduinos = this.getNewArduinos.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
    }

    getOldArduinos(group){

        let arduinoString = "";
        group.arduinos.forEach(arduino => {
            if (arduino.arduinoName !== this.arduino.arduinoName){
                arduinoString = arduinoString + arduino.arduinoName + ", ";
            }   else {
                console.log("moving " + this.arduino.arduinoName)
            }
           
        });
        return arduinoString;
        }

    getNewArduinos(groupName) {

        let newGroup;
        this.groups.forEach(group => {
            if (group.name === groupName) {
                newGroup = group
            }
        });

        let arduinoString = "";
        if (newGroup.arduinos){
            newGroup.arduinos.forEach(arduino => {
                arduinoString = arduinoString + arduino.arduinoName + ", ";
            });
        }
       
        arduinoString = arduinoString + this.arduino.arduinoName;
        return arduinoString;
    }


    changeGroup() {

        let oldGroupArduinos = this.getOldArduinos(this.selection);
        let newGroupArduinos = this.getNewArduinos(this.newGroup.current.value);
        console.log(oldGroupArduinos);
        console.log(newGroupArduinos);
        
        let oldGroup = this.selection.name
        let newGroup = this.newGroup.current.value
        

        var addobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + this.token
            },
            body: JSON.stringify({
                'arduinos': newGroupArduinos
            })
        };

        var remobj = {
            method: 'PUT',
            headers: {
                authorization: "bearer " + this.token
            },
            body: JSON.stringify({
                'arduinos': oldGroupArduinos
            })
        };

        fetch('http://localhost:8000/group/' + newGroup, addobj)
            .then(function (res) {
                console.log(res);
                console.log("Moved to: " + newGroup)
            });

        fetch('http://localhost:8000/group/' + oldGroup, remobj)
            .then(function (res) {
                console.log(res);
                console.log("Removed from: " + oldGroup)
            });
    }

    render() {
        const itemList = this.groups.map((group, i) => {

            if (group !== this.selection) {
                return (
                    <DropdownItem
                        key={i}
                        group={group}
                    />
                );
            } else {
                return null;
            }
        });

        return (

            <div className="dropdown">
                <select className="btn btn-secondary dropdown-toggle" ref={this.newGroup} onChange={() => this.changeGroup()} id="inputGroupSelect01">
                    <option value={this.selection.name}>{this.selection.name}</option>
                    {itemList}
                </select>
            </div>

        );
    }

}

export default Dropdown;