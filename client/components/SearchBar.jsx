import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar () {
    const [searchQuery, setSearchQuery] = useState('');
    return ( 
        <form>
            <TextField id="outlined-search"
                label="Search by zipcode"
                variant = 'outlined'
                placeholder='ex. 33063'
                type="search"
                size= 'small'
                onInput = {(e) => setSearchQuery(e.target.value)}
            />
            <IconButton
                type='submit'
                aria-label='search'
                size ="large"
            >
            <SearchIcon 
                sx={{fill: "#A2D2FF"}}
             ></SearchIcon>
            </IconButton>
        </form>
     );
}

export default SearchBar;