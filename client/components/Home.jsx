import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../style.css';
import { Button, Container, Box, Tabs, Tab} from '@mui/material';
import Typography from "@mui/material/Typography";
// import { border, borderBottom, fontFamily } from '@mui/system';
import shopList from '../assets/cart.svg';
import profile from '../assets/profile.svg';
import story from '../assets/story.svg';
import wishlist from '../assets/wishlist.svg';
import deliver from '../assets/deliver.svg';
import searchList from '../assets/searchList.svg';
import donorShop from '../assets/donorShop.svg';
import checkout from '../assets/checkout.svg';
import celebrate from '../assets/celebrate.svg';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
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
              <Tabs value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
                >
                <Tab label='For Donors' value={0}/>
                <Tab label='For Teachers' value={1}/>
              </Tabs>
              <TabPanel  value={value} index={0}>
              <div className='panel'> 
                <div>
                  <img className='tab-img' src={searchList} />
                  <h3 className='tab-text'>Search for lists</h3>
                </div>
              <div>
                <img className='tab-img' src={donorShop} />
                <h3 className='tab-text'>Choose your items</h3>
              </div>
              <div>
                <img className='tab-img' src={checkout} />
                <h3 className='tab-text'>Checkout</h3>
              </div>
              <div>
                <img className='tab-img' src={celebrate} /> 
                <h3 className='tab-text'>Celebrate!</h3>
              </div>
              </div>

              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className='panel'>
                  <div>
                    <img className='tab-img' src={profile} />
                    <h3 className='tab-text'>Create your profile</h3>
                  </div>
                  <div>
                    <img className='tab-img' src={story} />
                    <h3 className='tab-text'>Share your story</h3>
                  </div>
                  <div>
                    <img className='tab-img' src={wishlist} />
                    <h3 className='tab-text'>Start a list</h3>
                  </div>
                  <div>
                    <img className='tab-img' src={deliver} />
                    <h3 className='tab-text'>Receive supplies</h3> 
                  </div> 
                </div>
              </TabPanel>
            </Box>
            <div><hr /></div>
            <Box className='testimonials'>
              HELLO THIS IS TESTIMONIAL BOX
            </Box>
              
          </Box>

      <div>

      </div>
    </div>
  )
}

export default Home;