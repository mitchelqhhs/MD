import React from 'react';
import GroupRow from './GroupRow'
import AddGroupRow from './AddGroupRow'

const Groups = ({ groups, token }) => {

    let groupList = [];

    groupList = groups.map((group, i) => {
        return (
            <GroupRow
                key={i}
                group={group}
                token={token}
            />
        );
    });

    return (

        <div>
            <h2>Groups</h2>
            <div>
                {groupList}
            </div>
            <div>
              <AddGroupRow token={token} />
            </div>
        </div>
    );
}

export default Groups;