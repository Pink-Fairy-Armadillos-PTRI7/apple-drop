import React from "react";
import '../style.css';
import { Button, Box, Card, CardContent, CardMedia, CardActionArea, Modal} from '@mui/material';
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";

const ListCard = ({ theme, ...props }) => {
  // story schema: {userId, title, image, description} 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Card component={CardActionArea} onClick={handleOpen} elevation={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: 400, height: 500, borderRadius: 3, mt: 2, ml: 2, mr: 2,  bgcolor: '#FEF9EF' }}> 
        <CardMedia 
          component='img'
          height='150px'
          image={props.story.image} sx={{mt: '0' }}/>
        <CardContent sx={{width: '100%', ml: 5}}>
          <Typography gutterBottom variant='h5' component='div' textAlign='left'>
            Teacher Project: {props.story.title}
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
          width: 600,
          bgcolor: '#FEF9EF',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          <Button variant='contained' onClick={handleClose}>Back to results</Button>
          <img style={{width: '100%', height: '80%'}} src={props.story.image}/>
          <Typography gutterBottom variant='h5' component='div' >
            Project: {props.story.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Teacher Name: {props.story.userId.firstName} {props.story.userId.lastName} <br/>
            {props.story.userId.address.schoolName} <br/>
            {props.story.userId.address.street} <br />
            {props.story.userId.address.city}, {props.story.userId.address.state} <br/>
            {props.story.userId.address.postalCode}
          </Typography>
          <Button variant='contained'>View Lists</Button>
        </Box>
      </Modal>
    </div>
    </ThemeProvider>
  )
}

export default ListCard;