import React, {useState, useEffect} from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import {AddButton, AddForm} from './components/AddBuilding';
import {Header, Card, CardContent, Table, Tab} from 'semantic-ui-react';

const App = (props) => {
    const [filterText, setFilterText] = useState('');
    const [selectedBuilding, setSelectedBuilding] = useState(0);
    const [activeAdd, setActiveAdd] = useState(false);
    const [displayData, setDisplayData] = useState(props.data);

    const filterUpdate = (value) => {
        //Here you can set the filterText property of state to the value passed into this function
        this.setFilterText(value);
    };

    const selectedUpdate = (id) => {
        //Here you can update the selectedBuilding property of state to the id passed into this function
        this.setSelectedBuilding(id);
    };

    const add = (code, name) => {
        code = code.toUpperCase();
        let temp = displayData;
        temp.push({code: code, name: name});
        temp.sort((a, b) => {
            if (a.code > b.code) {
                return 1; 
            }
            return -1;
        });
        setDisplayData(temp);
        setActiveAdd(false);
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
                                            <Table.HeaderCell><AddButton clicked={setActiveAdd}/></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>
                                    <Table.Body>
                                        {activeAdd ? <AddForm add={add}/> : null}
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
