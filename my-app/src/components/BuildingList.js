import React, {useEffect} from 'react';
import { Table } from 'semantic-ui-react';
import RemoveBuilding from './RemoveBuilding';

const BuildingList = (props) => {
    //console.log('This is my directory file', this.props.data);

    const buildingList = props.data.map(directory => {
        return (
            (directory.name.toLowerCase().includes(props.filter.toLowerCase()))
            ? <Table.Row key={directory.id} onClick={() => props.setBuilding(directory.id)}>
                <Table.Cell>{directory.code} </Table.Cell>
                <Table.Cell> {directory.name} </Table.Cell>
                <Table.Cell><RemoveBuilding id={directory.id} remove={props.remove}/></Table.Cell>
            </Table.Row>
            : null
        );
    });

    return <>{buildingList}</>;
};
export default BuildingList;
