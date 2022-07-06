import React, {useState}from 'react';
import Box from '@mui/material/Box';
//teacher will be directed to dashboard once they've logged in or signed up.
function TeacherDash () {
    return ( 
        <div className = 'teacherDash-container'>
            <Box className = 'teacherDash-img'
                sx ={{ 
                }}>
                <h2>Hello, Ms.Holubeck!</h2>
            </Box>
        </div>
        
     );
}

export default TeacherDash;