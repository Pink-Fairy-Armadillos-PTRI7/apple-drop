import React, { useEffect, useState } from "react";
import '../style.css';
import { Button, Container, Box, Tabs, Tab, Card, CardContent, Paper, Modal} from '@mui/material';
import Typography from "@mui/material/Typography";
import SearchBar from './SearchBar.jsx';
import { ThemeProvider } from "@mui/material/styles";
import ListCard from "./ListCard.jsx";
import { useParams } from "react-router-dom";



const ListContainer = ({theme}) => {
  const [ stories, setStories ] = useState([]);
  const [ users, setUsers ] = useState([]);
  const { zip } = useParams();


  useEffect(() => {
      
    fetch('/api/stories')
    .then(res => {
      return res.json();
    })
    .then((storyData) => {
      console.log(storyData)
      setStories(storyData);
    })
    .catch(err => console.log(err));

    // fetch('/api/users')
    // .then(res => {
    //   return res.json();
    // })
    // .then((userData) => {
    //   console.log('userData here ->', userData);
    //   setUsers(userData);
    // })
    // .catch(err => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='false' sx={{ 
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column', 
        p: 10, 
        backgroundColor: theme.palette.cream.light  
        }}>
        <SearchBar ></SearchBar>
        <Paper elevation={3} sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8, 
          width: '100%', 
           
          mt: 6,
          backgroundColor: theme.palette.orange.light
          }}>
          {stories.map((card, index) => {
            return <ListCard key={card._id} story={card} index={index} />
          })}
        </Paper>
      </Container>
    </ThemeProvider>
  )

}


export default ListContainer;