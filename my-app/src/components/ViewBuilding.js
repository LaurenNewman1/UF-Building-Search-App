import React from 'react';
import {List} from 'semantic-ui-react';

const ViewBuilding = (props) => {

    let building = props.data.find(d => d.id === props.buildingId);
    
    return (
        <div>
            {building
            ? <>
                <h4>{building.name}</h4>
                <List>
                    <List.Item><List.Icon name="hashtag" className="iconL"/>Id: {building.id}</List.Item>
                    <List.Item><List.Icon name="key" className="iconL"/>Code: {building.code}</List.Item>
                    <List.Item><List.Icon name="marker" className="iconL"/>Address: {building.address}</List.Item>
                    {building.coordinates
                        ? <p>({building.coordinates.latitude}, {building.coordinates.longitude})</p>
                        : null}
                </List>
            </>
            : <p><i>Click on a name to view more information</i></p> }
        </div>
    );
};
export default ViewBuilding;
