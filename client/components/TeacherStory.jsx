import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';


//allows user to input image from their own file system
const FileInput = ({theme, setImage, imageUrl, image}) => {
    return (
        <>
            <input accept="image/*" type="file" id="select-image" style={{ display: 'none' }} onChange={e => setImage(e.target.files[0])} />;
            <label htmlFor="select-image">
                <Button variant="contained" component="span" sx={{bgcolor: theme.palette.yellow.main }}>
                    Upload Image
                </Button>
            </label>
            {imageUrl && image && (
                <Box mt={2} textAlign="center">
                    <div>Image Preview:</div>
                    <img src={imageUrl} alt={image.name} height="100px" />
                </Box>
            )}
        </>
    )
};

function TeacherStory ({theme, user}) {
    //save file data from user
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (image) {
          setImageUrl(URL.createObjectURL(image));
        }
      }, [image]);
    //for MVP purposes

    if(!user) user = 'Ms. Holubeck'
    return (  
        <div className = 'teacherStory'>
            <ThemeProvider theme = {theme}>
                <Box>
                    <h1>Welcome {user} </h1>
                    <h3>Lets get started on creating your first list.</h3>
                </Box>
                <Box>
                    <h5>
                        Share your story and describe why you need these items, and how the donation will impact your students. 
                        Be sure to upload a photo of your students or classroom. Create a list of items that donors can purchase for you, and be sure to share the links on where donors can purchase them.
                    </h5>
                    <h5>
                        Feel free to create wishlists from Amazon and be sure upload the registry to your account as well!
                    </h5>
                </Box>
                <Box component="form"  className='teacher-story-info'style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField label='Title' placeholder={'Help out Ms. McRae\'s 5th Grade Math Club'} required ></TextField>
                    <TextField label='Your Story' placeholder='Help give my students dry erase boards and markers to help us practice for math competitions' required></TextField>
                    <FileInput theme={theme} image={image} setImage={setImage} imageUrl={imageUrl}></FileInput>
                    <Button
                        color="orange"
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        //when user submits, will redirect them to the user dashboard
                        component = {Link} to ='/dashboard'
                    >
                        Submit
                    </Button>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default TeacherStory ;