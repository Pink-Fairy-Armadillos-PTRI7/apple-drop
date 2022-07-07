import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

//teacher will be directed to dashboard once they've logged in or signed up.
function TeacherDash ({theme}) {
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
            </ThemeProvider>
        </div>
        
     );
}

export default TeacherDash;