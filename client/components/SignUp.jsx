import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

const SignUp = ({ theme, setShowSignUp, setShowSignIn }) => {
  // State
  const [prefix, setPrefix] = useState('');

  // Functions
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Send request to server
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        prefix,
        schoolName: data.get('schoolName'),
        phoneNumber: data.get('phone'),
        street: data.get('street'),
        city: data.get('city'),
        state: data.get('state'),
        postalCode: data.get('postalCode')
      })
    }).then(response => response.json()).then(result => console.log(result)).catch(e => console.log(e));
    closePopup();
  };

  const closePopup = () => setShowSignUp(false);

  const switchToSignIn = () => setShowSignIn(true);

  return (
    <div style={{ top: 0, position: 'fixed', zIndex: 1, width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ThemeProvider theme={theme}>
        <div onClick={closePopup} style={{ width: '100%', height: '100vh', backgroundColor: 'rgb(0, 0, 0, .65)' }}></div>
        <Container component="div" maxWidth="xs" sx={{ position: 'fixed', zIndex: 2, backgroundColor: theme.palette.cream.main, borderRadius: 4, paddingBottom: 4 }}>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <h3 style={{ fontWeight: 'normal', margin: 0 }}>Personal Info</h3>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="prefix-label">Prefix</InputLabel>
                  <Select
                    sx={{ background: theme.palette.blueCream.light, width: '100%' }}
                    labelId="prefix-label"
                    id="prefix"
                    value={prefix}
                    label="Prefix"
                    onChange={(e) => setPrefix(e.target.value)}
                  >
                    <MenuItem value='Ms.'>Ms.</MenuItem>
                    <MenuItem value='Mrs.'>Mrs.</MenuItem>
                    <MenuItem value='Mr.'>Mr.</MenuItem>
                    <MenuItem value='Mx.'>Mx.</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <h3 style={{ fontWeight: 'normal', margin: 0 }}>School Address</h3>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="schoolName"
                    label="Name"
                    type="text"
                    id="schoolName"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="phone"
                    label="Phone"
                    type="text"
                    id="phone"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="street"
                    label="Street"
                    type="text"
                    id="street"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="city"
                    label="City"
                    type="text"
                    id="city"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="state"
                    label="State"
                    type="text"
                    id="state"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ background: theme.palette.blueCream.light }}
                    required
                    fullWidth
                    name="postalCode"
                    label="Postal Code"
                    type="text"
                    id="postalCode"
                  />
                </Grid>
              </Grid>
              <Button
                color="orange"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link sx={{ color: theme.palette.orange.light, textDecorationColor: theme.palette.orange.light, cursor: 'pointer' }} onClick={() => { closePopup(); switchToSignIn(); }} variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default SignUp;
