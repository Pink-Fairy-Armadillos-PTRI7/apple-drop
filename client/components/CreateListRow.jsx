import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CreateListRow = ({ name, description }) => {
  return (
    <>
    <Box sx={{ minWidth: 275, height: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Item
          </Typography>
          <Typography variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2">
            { description }
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="yellow">Change</Button>
        </CardActions>
      </Card>
    </Box>
    <img style={{ objectFit: 'cover', height: 300, width: '100%', borderRadius: 4 }} src="https://images.unsplash.com/photo-1593435221502-c5d7bfc26cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80" />
    </>
  );
}

export default CreateListRow;
