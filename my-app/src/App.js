import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import {Header, Card, CardContent, Table} from 'semantic-ui-react';

const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);
    const [displayData, setDisplayData] = useState(props.data);

    const add = (code, name, address, lat, long) => {
        code = code ? code.toUpperCase() : code;
        //let temp = displayData;
        let id = displayData[displayData.length - 1].id + 1
        setDisplayData([
            {
                id: id,
                code: code, 
                name: name,
                address: address,
                coordinates: {
                    latitude: lat,
                    longitude: long
                }
            },
            ...displayData
        ]);
    }

    const remove = (id) => {
        let temp = displayData;
        temp = temp.filter(d => d.id !== id);
        setDisplayData(temp);
    }

    return (
        <div>
            <div style={{backgroundColor: "#0021A5"}}>
                <Header as="h1" textAlign="center" style={{color: "white", padding: "20px"}}>UF Directory App</Header>
            </div>
            <div className="bg">
                <Search setFilter={setFilterText}/>
                <main>
                    <div className="row">
                        <div className="column1">
                            <div className="tableWrapper">
                                <Table padded>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Code</Table.HeaderCell>
                                            <Table.HeaderCell>Building</Table.HeaderCell>
                                            <Table.HeaderCell><AddBuilding add={add}/></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        <BuildingList
                                            data={displayData}
                                            filter={filterText}
                                            setBuilding={setSelectedBuilding}
                                            remove={remove}
                                        />
                                    </Table.Body>
                                </Table>
                            </div>
                        </div>
                        <div className="column2">
                            <Card style={{width: "100%"}}>
                                <CardContent>
                                    <ViewBuilding 
                                        data={displayData}
                                        buildingId={selectedBuilding}/>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                    <Credit/>
                </main>
            </div>
        </div>
    );
};


export default App;
