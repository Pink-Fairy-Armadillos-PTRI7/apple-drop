import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

function TabPanel  () {
    return (
        <div>
            <h1> Tab info </h1>
        </div>
    )
}
//teacher will be directed to dashboard once they've logged in or signed up.
function TeacherDash ({theme}) {
    //set value to keep track of the individual tabs
    const [value, setValue] = useState(0)
    //handle change to make sure we capture value of current tab
    const handleChange = (e, newVal) => {
        setValue(newVal)
    }
    //need to make a fetch request to get user story, school and address from backend
    //make TabPanel component and hide and show it with current tab
    return ( 
        <div className = 'teacherDash-container'>
            <ThemeProvider theme = {theme}>
                <Box className = 'teacherDash-img'
                    sx ={{ 
                        display: 'flex',
                        justifyContent: 'center',
                        height: 200
                    }}>
                    <h1 style = {{color: 'white', paddingTop: '1em'}}>Hello, Ms.Holubeck!</h1>
                </Box>
                <div className = 'teacher-info'>
                    <Box className ='teacher-column' id = 'teacher-list'>
                        <h2 style ={{color: theme.palette.orange.main}}>Lists</h2>
                        <Tabs value = {value} onChange = {handleChange}>
                            <Tab label = 'All'/>
                            <Tab label = 'Drafts'/>
                        </Tabs>
                        <TabPanel />
                    </Box>
                    <Box className ='teacher-column' id = 'teacher-story'>
                        <h3 style ={{color: theme.palette.orange.main}} >Your Story</h3>
                            <h6> </h6>
                        <h3 style ={{color: theme.palette.orange.main}} >Your School </h3>
                            <h6> </h6>
                    </Box>
                </div>
            </ThemeProvider>
        </div>
     );
}

export default TeacherDash;