import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Typography from "@mui/material/Typography";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Cookies from 'js-cookie';
import fetcher from '../lib/fetcher.js';
import mapper from '../lib/mapper.js'







//ULTIMATELY RELYING ON THE PERSISTENCE OF THE USER ID
const id = Cookies.get('id');
const navigate = useNavigate('/')

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

function TeacherStory ({theme}) {
    //save file data from user
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    //save form data from teacher
    const [title, setTitle] = useState('')
    const [story, setStory] = useState('')



const [parsedData, setParsedData] = useState([]);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



    const beforeUpload = async () => {
    
    setLoading(true);
    const requestOptions = {
      container: 'public',
        images: [{ name: image.name }]
        
    };

        const response = await fetcher('upload/' + id, requestOptions);
        
        console.log(response, 'here')

    if (response.length) {
     
        const parsed = await mapper(response, [{ title, description: story, image }]);
        console.log(parsed)
        setParsedData(parsed);
            return;
    }
    setError(true);
    setLoading(false);
  };

    useEffect(() => {
        console.log(parsedData, 'parseedddd')
        const result = fetcher('/story/' + id, parsedData[0]);
         if (result.status === 'success') {
      setLoading(false);
             setSuccess(true);
             navigate('/dashboard')
      return;
    }
    console.log('error')
    setLoading(false);
    setError(true);
    }, [parsedData])



    useEffect(() => {
        if (image) {
          setImageUrl(URL.createObjectURL(image));
        }
      }, [image]);
    async function handleSubmit (e){
        e.preventDefault();
        try{
      
           await beforeUpload();
           await handleUpload()
           
        }
        catch (err){
            console.log(err)
            console.log('Error in sending teacher story')
        }
    }
    const user = useStoreState((state) => state.user);
    //for MVP purposes
    if(!user) user = 'Ms. Holubeck'
    return (  
        <div className = 'teacherStory'>
            <ThemeProvider theme = {theme}>
                <Box>
                    <h1>Welcome {user.firstName} </h1>
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
                <Box component="form" onSubmit={handleSubmit} className='teacher-story-info'style={{display: 'flex', flexDirection: 'column'}}>
                    <TextField label='Title' placeholder={'Help out Ms. McRae\'s 5th Grade Math Club'} onInput = {(e) => setTitle(e.target.value)} required ></TextField>
                    <TextField label='Your Story' onInput = {(e) => setStory(e.target.value)} placeholder='Help give my students dry erase boards and markers to help us practice for math competitions' required></TextField>
                    <FileInput theme={theme} image={image} setImage={setImage} imageUrl={imageUrl}></FileInput>
                    <Button
                        color="orange"
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        //when user submits, will redirect them to the user dashboard
                        // component = {Link} to ='/dashboard'
                    >
                        Submit
                    </Button>
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default TeacherStory ;