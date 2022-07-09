import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function SearchBar (props) {
    const [searchQuery, setSearchQuery] = useState('')
    console.log('search query is=>', searchQuery);
    return ( 
        <form style = {{display: 'flex'}}>
            <TextField  sx = {{borderRadius: 2,boxShadow: 2}}
                id="outlined-search"
                label="Search by zipcode"
                variant = 'filled'
                placeholder='ex. 33063'
                type="search"
                size= 'small'
                onInput = {(e) => setSearchQuery(e.target.value)}
            />
            <Button sx ={{marginLeft: "10px", 
                background: "#FEE440",
                borderRadius: 4,
                boxShadow: 3,
            }} 
            variant="contained"
                component={Link} to = {`/search/${searchQuery}`}
                 >
                Search
             </Button>

        </form>
     );
}

export default SearchBar;