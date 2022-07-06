import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function SearchBar (props) {
    return ( 
        <form style = {{display: 'flex'}}>
            <TextField id="outlined-search"
                label="Search by zipcode"
                variant = 'filled'
                placeholder='ex. 33063'
                type="search"
                size= 'small'
                onInput = {(e) => setSearchQuery(e.target.value)}
            />
            <Button sx ={{marginLeft: "10px", background: "#FEE440"}} 
            variant="contained"
                component={Link} to = '/search'
                 >
                Search
             </Button>
        </form>
     );
}

export default SearchBar;