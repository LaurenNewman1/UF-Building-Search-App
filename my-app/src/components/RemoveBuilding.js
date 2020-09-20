import React from 'react';
import {Button} from 'semantic-ui-react';

const RemoveBuilding = (props) => {
    
    return (
        <Button 
            circular 
            icon="trash" 
            style={{backgroundColor: "transparent", color: "#FA4616"}}
            onClick={() => props.remove(props.id)}    
        />
    );
};
export default RemoveBuilding;