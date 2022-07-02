import React, { useState, useEffect, useRef} from 'react';
import axios from './api/axios.js';

function SearchContainer() {
    //use state to save query results
    const [searchQuery, setSearchQuery] = useState(''); 
    //need to create functionality that fetches the list of all teachers from backend corresponding to that zipcode
    const [searchResults, setResults] = useState([]);
    //set error messaging 
    const [errMsg, setErrMsg] = useState('');
    const fetchZipcodes = async () =>{
        try{
            const teachersByZipcode = await axios.post('/search',
                JSON.stringify({searchQuery}),
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true
                })
                //must update searchResults array with the results of api call
        }
        catch{


        }
    }
    //handleSubmit functionality to send user req of desired teachers by zip codes to backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        //invoke fetchZipcodes function to make call to backend
        fetchZipcodes()
    }
    //will render both the search bar and search result component on this page
    return ( 

     );
}

export default SearchContainer;
