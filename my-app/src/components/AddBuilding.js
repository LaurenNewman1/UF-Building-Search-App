import React from 'react';
import {Button, Modal, Form} from 'semantic-ui-react';

const AddBuilding = (props) => {
    
    let [code, setCode] = React.useState('');
    let [name, setName] = React.useState('');
    let [address, setAddress] = React.useState('');
    let [latitude, setLat] = React.useState('');
    let [longitude, setLong] = React.useState('');
    let [open, setOpen] = React.useState(false);

    const reset = () => {
        setCode('');
        setName('');
        setAddress('');
        setLat('');
        setLong('');
        setOpen(false);
    }

    const save = () => {
        if (code.length || name.length || address.length || latitude.length || longitude.length) {
            props.add(code, name, address, latitude, longitude); 
            reset();
        }
        else {
            setOpen(false);
        }
    }

    return (
        <Modal 
            open={open}
            onClose={() => setOpen(false)}
            trigger={
                <Button 
                    circular 
                    icon="plus" 
                    style={{backgroundColor: "#FA4616", color: "white"}}   
                    onClick={() => setOpen(true)}
                />
            }>
            <Modal.Header style={{backgroundColor: "#0021A5", color: "white"}}>Add a New Building</Modal.Header>
            <Modal.Content>
                <Form id="form">
                    <Form.Group>
                        <Form.Input
                            required
                            type="text"
                            label="Code"
                            placeholder="ABC"
                            width={4}
                            onChange={(e) => setCode(e.target.value)}
                        />
                        <Form.Input
                            required
                            type="text"
                            label="Name"
                            placeholder="John Doe Hall"
                            width={12}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Input
                        type="text"
                        label="Address"
                        placeholder="686 Museum Rd, Gainesville, FL 32611"
                        width={16}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Form.Group>
                        <Form.Input
                            type="text"
                            label="Latitude"
                            placeholder="29.640997436"
                            width={8}
                            onChange={(e) => setLat(e.target.value)}
                        />
                        <Form.Input
                            type="text"
                            label="Longitude"
                            placeholder="29.640997436 -82.341998632"
                            width={8}
                            onChange={(e) => setLong(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    style={{backgroundColor: "#FA4616", color: "white"}}
                    onClick={() => save()}>
                    Save
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default AddBuilding;