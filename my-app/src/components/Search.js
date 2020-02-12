import React from 'react';
import {Input, Form} from 'semantic-ui-react';

const Search = (props) => {

    const filterUpdate = (value) => {
        //Here you will need to update the value of the filter with the value from the textbox
        props.setFilter(value);
    };
    //You will need to save the value from the textbox and update it as it changes
    //You will need the onChange value for the input tag to capture the textbox value

    return (
        <Input 
            className="search"
            type="text" 
            icon="search"
            placeholder="Type to Filter" 
            onChange={(e) => filterUpdate(e.target.value)}
        />
    );

};

export default Search;
