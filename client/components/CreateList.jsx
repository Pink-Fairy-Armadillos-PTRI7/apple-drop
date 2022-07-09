import React, { useEffect, useState } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CreateListForm from './CreateListForm.jsx';

import { useStoreActions, useStoreState } from 'easy-peasy';

const CreateList = ({ theme }) => {
  // Initialize State

  const setList = useStoreActions((state) => state.setList);

  const [name, setName] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        sx={{ backgroundColor: theme.palette.cream.main, minHeight: 500 }}
      >
        <CssBaseline />
        <Box sx={BoxSx}>
          <Typography
            component="h1"
            variant="h2"
            sx={{ mr: 'auto', fontSize: 30 }}
          >
            Donation List
          </Typography>
          <TextField
            variant="standard"
            sx={{ border: 0, width: 400, mr: 'auto', ml: 4 }}
            inputProps={{ style: { fontSize: 24 } }} // font size of input text
            InputLabelProps={{ style: { fontSize: 24 } }} // font size of input label
            margin="normal"
            required
            fullWidth
            id="listName"
            label="List Name"
            name="listName"
            autoFocus
            value={name}
            onChange={(e) => {
              setList({ name: e.target.value });
              setName(e.target.value);
            }}
          />
          <CreateListForm setList={setList} theme={theme} setName={setName} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const BoxSx = {
  marginTop: 4,
  marginBottom: 4,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default CreateList;
