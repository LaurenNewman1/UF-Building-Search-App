import React, {useState, useEffect} from 'react';

const BuildingList = (props) => {
    //console.log('This is my directory file', this.props.data);

    const buildingList = props.data.map(directory => {
        return (
            <tr key={directory.id}>
                <td>{directory.code} </td>
                <td> {directory.name} </td>
            </tr>
        );
    });

    return <div>{buildingList}</div>;
};
export default BuildingList;
