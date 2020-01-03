import React from 'react';

class AddGroupRow extends React.Component {
    constructor(props) {
        super(props);
        this.token = props.token;
        this.newName = React.createRef();     
        this.addGroup = this.addGroup.bind(this);
    }
 
    addGroup() {

        let myName = this.newName.current.value;
        console.log(myName);

        var getobj = {
            method: 'POST',
            headers: {
                authorization: "bearer " + this.token
            },
            body: JSON.stringify({
                'name': myName
            })
        };

        fetch('http://localhost:8000/group/', getobj)
            .then(function (res) {
                console.log(res);
                console.log("Added Group " + myName)
            });
    }

    render() {
        return (

            <div className="row group-row">
                <div className="col col-7">
                    <input type="text" className="btn btn-light btn-group" ref={this.newName} defaultValue="<GroepNaam>" />
                </div>
                <div className="col col-4">
                    <button type="button" className="btn btn-add btn-light" onClick={() => this.addGroup()}>Toevoegen</button>
                </div>
            </div>

        );
    }
}

export default AddGroupRow;