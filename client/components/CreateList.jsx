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
    if (!name || !description) return;
    // Add row to rows state
    setRows([...rows, { name, description }]);
    // Clear text boxes
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ backgroundColor: theme.palette.cream.main }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            marginBottom: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h2">
            Create a List
          </Typography>
          <Box component="form" onSubmit={addRow} noValidate sx={{ mt: 1, width: '100%' }}>
            <Grid container sx={{ width: 300, alignItems: 'center', justifyContent: 'center', display: 'flex', m: 'auto' }}>
              <TextField
                sx={{ background: theme.palette.blueCream.light }}
                margin="normal"
                required
                fullWidth
                id="itemName"
                label="Item Name"
                name="itemName"
                autoFocus
              />
              <TextField
                sx={{ background: theme.palette.blueCream.light }}
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
                sx={{ mt: 3, mb: 2 }}
              > +
              </Button>
            </Grid>
            { rows.length > 0 ? <hr style={{ margin: '20px' }}/> : null }
            <Grid container sx={{ alignItems: 'center', justifyContent: 'center', display: 'grid', gridTemplateColumns: '2fr 1fr', m: 'auto' }}>
              { rows.map(({ name, description }, i) => <CreateListRow key={i} name={name} description={description}/>) }
            </Grid>
            <Button
              color="orange"
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={publishData}
            >
              Create List
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default CreateList;
