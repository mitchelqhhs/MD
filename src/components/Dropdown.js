import React from 'react';
import DropdownItem from './DropdownItem'

const Dropdown = ({ groups, selection }) => {  //items has to be an object with a name

    const itemList = groups.map((group, i) => {
        
        if (group !== selection){
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
            <select className="btn btn-secondary dropdown-toggle" id="inputGroupSelect01">
                <option value={selection.name}>{selection.name}</option>
                    {itemList}
            </select>
        </div>

    );
}

export default Dropdown;