import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

//ULTIMATELY RELYING ON THE PERSISTENCE OF THE USER ID

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
async function fetchTeacherLists() {
    //return a list containing an array of list items, object of lists?
    const id = '62c4c0be9d30e99a23cbb26f'
    // try {
    //     const teacherLists = await axios.get(`/api/list/${id}`,
    //     {
    //         headers: {
    //             // 'Content-Type': 'application/json',
    //             Authorization:
    //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
    //           }
    //     })
    //     // console.log('teachers are =>', teacherLists.data)
    //     //add teacher lists to list state in teacherDash component
    //     //add authorization header with token inside it
    //     // setLists([response.data])
    // }
    // catch {
    //     console.log('error in getting users')
    // }
    fetch(`/api/list/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
        },
      })
        .then((res) => {
          if (res.status > 399 && res.status < 200) {
            throw new Error();
          }
          return res.json();
        })
        .then((data) => {
            console.log('response is=>', data)
        //   return data;
        });
}
//function to fetch teacher story
//id - coming from the 
// async function fetchTeacherStory() {
//     //will get object with title, image, and description properties
//     try {
//         const teacherStory = await axios.get('/api/myStories/:id')
//         console.log('teachers are =>', response.data)
//     }
//     catch {
//         console.log('error in getting users')
//     }
    
// }

// //function to fetch teacher address
// async function fetchTeacherAddress() {
//     //response is object containing reference to user's address
//         //address schema has following properties: schoolName, street, city, state, postalCode
//     try {
//         const teacherData = await axios.get('/api/user/:id')
//         console.log('teachers are =>', response.data)
//     }
//     catch {
//         console.log('error in getting users')
//     }
// }
//Renders individual list item
const List = (props) => {
    //iterate through the teacherLists array properly 
    const {teacherLists} = props
    console.log('hi we are a list')
    // teacherLists.forEach((teach) => {
    //     console.log('we are seeing this teacher')
    // })
    // return (

    // )
}




//Teacher Dashboard Component
function TeacherDash ({theme}) {
    //set value to keep track of the individual tabs
    const [value, setValue] = useState(0)
    //handle change to make sure we capture value of current tab
    const handleChange = (e, newVal) => {
        setValue(newVal)
    }
    
    const [teacherLists, setLists] = useState([])
    const [teacherStory, setStory] = useState({})
    const [teacherAddress, setAddress] = useState({})
    //useEffect to trigger getting teacher info based on id as soon as teacher component loads
    useEffect(() =>{
        fetchTeacherLists().catch(() => {
            console.log()
        })
        // fetchTeacherStory()
        // fetchTeacherAddress()
    }, [])

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
                        <TabPanel value = {value} index = {0}> 
                            <List></List>
                            Deez Nutz 
                        </TabPanel>
                        <TabPanel value = {value} index = {1}>
                             Goteem
                        </TabPanel>
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