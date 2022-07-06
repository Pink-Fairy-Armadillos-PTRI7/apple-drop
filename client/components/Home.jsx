import React from 'react';
import '../style.css';
import { Button, Container, Box, Tabs, Tab, Card, CardContent} from '@mui/material';
import Typography from "@mui/material/Typography";
import SearchBar from './SearchBar.jsx';
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
          width: 2/3
        }}>
          <h1>Teachers could use more than just apples. 
            <span className='highlight'> They need our help.</span>
          </h1>
          <p>Deliver classroom supplies to teachers in need, locally or across the country. Make an impact on a student's learning journey today.</p>
          {/* <Button variant='contained' size="large" sx={{
            borderRadius: 4,
            boxShadow: 3,
            background: '#FEE440',
            color: '#9e9e9e', 
            marginTop: '50px'
          }}>Find a List</Button> */}
          <SearchBar className='home-search'/>
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
          </Box><br/>
          <Box className='testimonials'>
            <h1> What users are saying about us</h1><br/>
            <div className='testimonial-cards'>
              <Card sx={{
                  width: 400,
                  minHeight: 300
                }}>
                <CardContent>
                  <Typography variant='body1' color='text.secondary' gutterBottom>
                    "Wow the color palette is a 10000. Talk about surprise! I received millions of donations in my first DAY! I tried to stop them after 5000 crayons but they kept coming. I am now donating the resources I've gotten to other teachers in need. Can you make a website for gaming supplies as well? My son LOVES to spend all of his time and money on games. It would be nice to get millions of games for free as well!"
                  </Typography>
                  <Typography variant='h5' align='right'>- Ethan M.</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                  width: 400,
                  minHeight: 300
                }}>
                <CardContent sx={{position: 'relative'}}>
                  <Typography variant='body1' color='text.secondary' gutterBottom>
                    "Thanks to this website, I am now able to keep my classroom fully stocked with extra supplies for years to come. I am even able to send home extra to my students in need, to make sure their siblings and friends can benefit as well. I’m so thankful for the generosity of our donors.
                    Thanks AppleDrop!"
                  </Typography>
                  <Typography variant='h5' align='right' sx={{marginBottom: 0}}>- Imma D.</Typography>
                </CardContent>
              </Card>
              <Card sx={{
                  width: 400,
                  minHeight: 300
                }}>
                <CardContent>
                <Typography variant='body1' color='text.secondary' gutterBottom>
                  "I love using Apple Drop! It's so easy to navigate and the ability to create custom lists as a teacher OR link your Amazon wishlist is amazing! Now I can reach a wider audience and receive supplies for my students faster than ever! The process for donating and purchasing items from lists is also soooo intuitive - No need to sign up for an account. This is brilliant!"
                </Typography>
                <Typography variant='h5' align='right' sx={{marginBottom: 0}}>- Wilson T.</Typography>
                </CardContent>
              </Card>
            </div>
          </Box>
        </Box>
    </div>
  )
}

export default Home;