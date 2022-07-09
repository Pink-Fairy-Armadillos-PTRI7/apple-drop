import React from 'react';
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
import { useStoreActions, useStoreState } from 'easy-peasy';

const SignIn = ({ theme, setShowSignUp, setShowSignIn }) => {
  const setUser = useStoreActions((state) => state.setUser);
  const user = useStoreState((state) => state.user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // Send request to server
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log(userData);
        // Throw error if there was no Id or token
        if (!userData) throw new Error('Incorrect response from server');
        setUser(userData); // Id, token, email, password, firstname, lastname, address
        closePopup();
      })
      .catch((e) => alert(e.message));
  };

  const closePopup = () => setShowSignIn(false);

  const switchToSignIn = () => setShowSignUp(true);

  return (
    <div
      style={{
        top: 0,
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        onClick={closePopup}
        style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgb(0, 0, 0, .65)',
        }}
      ></div>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            position: 'fixed',
            zIndex: 200,
            backgroundColor: theme.palette.cream.main,
            borderRadius: 4,
            paddingBottom: 4,
          }}
        >
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                sx={{ background: theme.palette.blueCream.light }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                sx={{ background: theme.palette.blueCream.light }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                color="orange"
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    href="#"
                    variant="body2"
                    sx={{
                      color: theme.palette.orange.dark,
                      textDecorationColor: theme.palette.orange.dark,
                      cursor: 'pointer',
                    }}
                  >
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    onClick={() => {
                      closePopup();
                      switchToSignIn();
                    }}
                    variant="body2"
                    sx={{
                      color: theme.palette.orange.dark,
                      textDecorationColor: theme.palette.orange.dark,
                      cursor: 'pointer',
                    }}
                  >
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default SignIn;
