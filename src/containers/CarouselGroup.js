import React from 'react';
import DeviceRow from './DeviceRow'

const CarouselGroup = ({ group, setSelectedDevice, token }) => {

    // console.log (group);
    let deviceList = [];
    if (!group.arduinos){

    } else{
        deviceList = group.arduinos.map((arduino, i) => {
            return (
                <DeviceRow
                    key={i}
                    arduino={group.arduinos[i]}
                    setSelectedDevice={setSelectedDevice} // moet eigenlijk ook een ID / key hebben.
                    token={token}
                />
            );
        });
    }


    var selectedRow;
    if (group.name === "Ongesorteerd"){
        selectedRow = 'carousel-item active'
    } else {
        selectedRow = 'carousel-item'
    }
    
    return (
        <div className={`${selectedRow}`}>
            <h2>{group.name}</h2>
            
            <div>
                {deviceList}
            </div>
    
        </div>
    );
}

export default CarouselGroup;