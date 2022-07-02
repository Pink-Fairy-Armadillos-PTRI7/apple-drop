import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import { Button, Container, Box, Tabs, Tab} from '@mui/material';
// import { border, borderBottom, fontFamily } from '@mui/system';

const Home = () => {
  return (
    <div>
      <Button variant='contained' sx={{
        borderRadius: 4,
        boxShadow: 3,
        background: '#FEE440',
        color: '#9e9e9e', 
        height: 100
      }}>Register</Button>
      <div className='homepage-container'>
        <Box className='homepage-picture' sx={{
          width: 1/3
        }}/>
        <Box className='homepage-text' sx={{
          width: 2/3, 
          // minHeight: '50vh' 
        }}>
          <h1>Teachers could use more than just apples. 
            <span className='highlight'> They need our help.</span>
          </h1>
          <p>Deliver classroom supplies to teachers in need, locally or across the country. Make an impact on a student's learning journey today.</p>
          <Button variant='contained' size="large" sx={{
            borderRadius: 4,
            boxShadow: 3,
            background: '#FEE440',
            color: '#9e9e9e', 
            marginTop: '50px'
          }}>Find a List</Button>
        </Box>
      </div>
          <Box className='how-it-works-header'
            sx={{ 
              borderBottom: 1,
              background: '#f6f2ef',
            }}><h1>How it works</h1>
                <Box className='how-it-works-subheader'>
                  <Tabs centered>
                    <Tab label='For Donors' value='donors'/>
                    <Tab label='For Teachers' value='teachers'/>
                  </Tabs>
                </Box>
              
                
            </Box>
      <div>

      </div>
    </div>
  )
}

export default Home;