import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CreateListRow from './CreateListRow.jsx';

const CreateList = ({ theme }) => {
  // Initialize State
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState('');

  // Functions
  const publishData = () => {
    // Send request to server
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(response => response.json()).then(result => console.log(result)).catch(e => console.log(e));
  };
  const addRow = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Require name and description
    const name = data.get('itemName');
    const description = data.get('itemDescription');
    const price = data.get('price');
    if (!name || !description || !price || price < 0) return;
    // Add row to rows state
    setRows([...rows, { name, description, price }]);
    // Clear text boxes
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
    document.getElementById('price').value = null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ backgroundColor: theme.palette.cream.main, minHeight: 500 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 4,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2" sx={{ mr: 'auto', fontSize: 30 }}>
            Donation List
          </Typography>
          <TextField
            variant='standard'
            sx={{ border: 0, width: 400, mr: 'auto', ml: 4 }}
            inputProps={{style: {fontSize: 24}}} // font size of input text
            InputLabelProps={{style: {fontSize: 24}}} // font size of input label
            margin="normal"
            required
            fullWidth
            id="listName"
            label="List Name"
            name="listName"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          { title ? <>
            <Box component="form" onSubmit={addRow} noValidate sx={{ mt: 1, ml: 8, width: '100%' }}>
              <Grid container>
                <TextField
                  sx={{ background: theme.palette.blueCream.light, width: '40%', mr: 2 }}
                  color="orange"
                  margin="normal"
                  required
                  id="itemName"
                  label="Item Name"
                  name="itemName"
                />
                <TextField
                  sx={{ background: theme.palette.blueCream.light, width: 100 }}
                  color="orange"
                  margin="normal"
                  required
                  id="price"
                  label="Price"
                  name="price"
                  type="number"
                />
                <TextField
                  sx={{ background: theme.palette.blueCream.light }}
                  color="orange"
                  margin="normal"
                  required
                  fullWidth
                  id="itemDescription"
                  label="Item Description"
                  name="itemDescription"
                />
                <Button
                  color="orange"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, ml: 'auto', mr: 'auto' }}
                > Add
                </Button>
              </Grid>
              { rows.length > 0 ? <hr style={{ margin: 30, marginTop: 40 }}/> : null }
              <Grid container sx={{ alignItems: 'center', justifyContent: 'center', display: 'grid', gridTemplateColumns: '1fr 2fr', m: 'auto' }}>
                { rows.map(({ name, description, price, link }, i) => <CreateListRow key={i} name={name} description={description} price={price} link={link} />) }
              </Grid>
              { rows.length > 0 ? <Button
                color="blue"
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 16, mb: 2 }}
                onClick={publishData}
              >
                Create List
              </Button> : null }
            </Box>
          </> : null }
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateList;
