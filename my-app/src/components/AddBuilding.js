import React from 'react';
import {Button, Table, Input} from 'semantic-ui-react';

export const AddButton = (props) => {
    
    return (
        <Button 
            circular 
            icon="plus" 
            style={{backgroundColor: "#FA4616", color: "white"}}
            onClick={props.clicked}    
        />
    );
};

export const AddForm = (props) => {

    let [code, setCode] = React.useState(0);
    let [name, setName] = React.useState('');

    return (
        <Table.Row className="new">
            <Table.Cell>
                <Input size="mini" onChange={(e) => setCode(e.target.value)}/>
            </Table.Cell>
            <Table.Cell>
                <Input size="mini" onChange={(e) => setName(e.target.value)}/>
            </Table.Cell>
            <Table.Cell>
                <Button 
                    circular 
                    icon="check" 
                    style={{backgroundColor: "transparent", color: "#FA4616"}}
                    onClick={() => props.add(code, name)}
                />   
            </Table.Cell>
        </Table.Row>
    )
}