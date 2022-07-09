import React from "react";
import '../style.css';
import { Button, Container, Box, Tabs, Tab, Card, CardContent, Paper, Grid, CardHeader, CardMedia, CardActionArea, Modal} from '@mui/material';
import Typography from "@mui/material/Typography";
import SearchBar from './SearchBar.jsx';
import { ThemeProvider } from "@mui/material/styles";

const ListCard = (props) => {
  // story schema: {userId, title, image, description} 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card component={CardActionArea} onClick={handleOpen} elevation={2} sx={{ width: 400, height: 500, borderRadius: 3, mt: 2, ml: 2, mr: 2}}> 
        <CardMedia 
          component='img'
          height='150px'
          image={props.story.image}/>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Project: {props.story.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.story.description}
          </Typography> 
        </CardContent>
      </Card>
      <Modal 
        open={open}
        onClose={handleClose}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          Here is the modal{props.index}<Button onClick={handleClose}>Return</Button>
        </Box>
      </Modal>
    </div>
  )
}

export default ListCard;