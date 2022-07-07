import React, {useState}from 'react';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
//teacher will be directed to dashboard once they've logged in or signed up.
function TeacherDash ({theme}) {
    return ( 
        <div className = 'teacherDash-container'>
            <ThemeProvider>
                <Box className = 'teacherDash-img'
                    sx ={{ 
                        
                    }}>
                    <h2 style = {{}}>Hello, Ms.Holubeck!</h2>
                </Box>
            </ThemeProvider>
        </div>
        
     );
}

export default TeacherDash;