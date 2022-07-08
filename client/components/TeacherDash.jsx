import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

//TabPanel component for Tab display
function TabPanel (props) {
    //children passes the string text btw TabPanel, value and index makes sure we only render the children info when user clicks on that tab
    const {children, value, index, ...other } = props
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
         {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    )
}

//function to fetch lists based on teacher id
// function fetchTeacherLists () {

// }
//Renders individual list item
// const List = () => {
//     return (

//     )
// }


//Teacher Dashboard Component
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
                        <Button 
                            sx = {{
                                variant: 'contained',
                                background: theme.palette.orange.main,
                                color: 'black',
                                marginBottom: '2em'
                            }}
                            component = { Link } to = '/create-list'
                        > 
                            Create a new list 
                        </Button>
                        <Tabs value = {value} onChange = {handleChange}>
                            <Tab label = 'All'/>
                            <Tab label = 'Drafts'/>
                        </Tabs>
                        <TabPanel value = {value} index = {0}> Deez Nutz </TabPanel>
                        <TabPanel value = {value} index = {1}> Goteem</TabPanel>
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