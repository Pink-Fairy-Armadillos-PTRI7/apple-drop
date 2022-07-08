import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Tabs, Tab, IconButton} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
                <Typography component={'span'}>{children}</Typography>
            </Box>
        )}
        </div>
    )
}
//Renders individual lists
const AllLists = (props) => {
    function createDate(dateStr){
        let date = new Date(dateStr)
        console.log(date)
        let d = date.getDate()
        let m = date.getMonth()+1
        let y = date.getFullYear()
        return `${m}/${d}/${y}`
    }
    //iterate through the teacherLists array properly 
    const {teacherLists, theme} = props;
    //teacherLists is an arr of objs, want to reflect name property
    const listArr = [];
    teacherLists.forEach((list, el) => {
        //get list name and date created from obj
        let name;
        (list.name)? name = list.name: name = 'Supplies for my 3rd grade classroom'
        const dateCreated = createDate(list.createdAt)
        const lastUpdated = createDate(list.updatedAt)
        listArr.push(
            <div key = {`listItem${el}`}>
                <ListItem sx ={{display: 'flex', justifyContent: 'space-around'}}>
                    <ListItemText primary={name} secondary={`Date Created: ${dateCreated}`} >
                    </ListItemText>
                    <IconButton aria-label="delete">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
                <Divider />
            </div>
        )
    });
    //each list will reflect an edit and delete button
    return (
        <Box sx = {{bgcolor: theme.palette.blueCream.main}}>
            <List>
                {listArr}
            </List>
        </Box>
    )
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

    //function to fetch lists based on teacher id
    async function fetchTeacherLists() {
        const id = '62c4c0be9d30e99a23cbb26f'
        try {
            const teacherLists = await axios.get(`/api/list/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
                }
            })
        //return the teacherLists data 
            setLists(teacherLists.data)
        }
        catch (err) {
            console.log('Error in fetching teacherLists', err)
        }
    }
    // fetch individual teacher story 
    async function fetchTeacherStory() {
        const id = '62c4c0be9d30e99a23cbb26f'
        //will get object with title, image, and description properties
        try {
            const teacherStory = await axios.get(`/api/myStories/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
                }
            })
            console.log('teachers are =>', teacherStory.data)
        }
        catch(err) {
            console.log('Error in fetching teacher story', err)
        }
        
    }

    //fetch individual teacher address
    async function fetchTeacherAddress() {
        const id = '62c4c0be9d30e99a23cbb26f'
        //response is object containing reference to user's address
            //address schema has following properties: schoolName, street, city, state, postalCode
        try {
            const teacherInfo = await axios.get(`/api/user/${id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmM0YzBiZTlkMzBlOTlhMjNjYmIyNmYiLCJlbWFpbCI6InRlc3RAMXRlc3QuY29tIiwiaWF0IjoxNjU3MjM0MzYxLCJleHAiOjE2NTczMjA3NjF9.d0GxoSf7a7Gx1GvzC8_hsjGIKsDgEu3a59dSXfjSjvQ',
                }
            })
            console.log('teachers are =>', teacherInfo.data)
        }
        catch(err) {
            console.log('Error in fetching teacher address', err)
        }
    }
    //useEffect to trigger getting teacher info based on id as soon as teacher component loads
    useEffect(() =>{
        fetchTeacherLists()
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
                    <Box className ='teacher-column' id = 'teacher-list' sx = {{width: '65%'}}>
                        <h2 style ={{color: theme.palette.orange.main}}>Lists</h2>
                        <Tabs value = {value} onChange = {handleChange}>
                            <Tab label = 'All'/>
                            <Tab label = 'Drafts'/>
                        </Tabs>
                        <TabPanel value = {value} index = {0}> 
                            <AllLists teacherLists = {teacherLists} theme = {theme}></AllLists>
                        </TabPanel>
                        <TabPanel value = {value} index = {1}>
                        </TabPanel>
                        <Button 
                            sx = {{
                                variant: 'contained',
                                background: theme.palette.orange.main,
                                color: 'black',
                                marginTop: '2em',
                                
                            }}
                            component = { Link } to = '/create-list'
                        > 
                            Create a new list 
                        </Button>
                    </Box>
                    <Box className ='teacher-column' id = 'teacher-story' sx = {{width: '35%', marginLeft: '1em'}}>
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