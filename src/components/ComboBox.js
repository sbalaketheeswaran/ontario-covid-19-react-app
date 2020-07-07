/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox(props) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={props.data}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Public Health Units" variant="outlined" />}
            onChange={(event, selectedValue) => props.handleCityChange(selectedValue)}
        />
        );
}