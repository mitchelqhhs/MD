import React from 'react';

const DropdownItem = ({ group }) => {

    console.log("item")
    console.log(group);
    return (
           
                <option value={group.name}>{group.name}</option>
           
    );
}

export default DropdownItem;