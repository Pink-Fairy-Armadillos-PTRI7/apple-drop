import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

//teacher will be directed to dashboard once they've logged in or signed up.
function TeacherDash ({theme}) {
    //
    const [value, setValue] = useState(0)
    const handleChange = (e, newVal) => {
        setValue(newVal)
    }
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
                <Box className ='teacher-lists'>
                    <h3 style ={{color: theme.palette.orange.main}}>Lists</h3>
                    <Tabs value = {value} onChange = {handleChange}>
                        <Tab label = 'All'/>
                        <Tab label = 'Drafts'/>
                    </Tabs>
                </Box>
            </ThemeProvider>
        </div>
        
     );
}

export default TeacherDash;