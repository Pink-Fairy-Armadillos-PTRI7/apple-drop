import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import DrawerComp from './DrawerComp.jsx';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useStoreState, useStoreActions } from 'easy-peasy';

// const Navbar = ({ theme, user, setUser }) => {
//     //implement conditional rendering that checks if a user is registered or not
//     //create state to figure out if user is signed in or not
//     const [showSignUp, setShowSignUp] = useState(false);
//     const [showSignIn, setShowSignIn] = useState(false);
//     //pass these down to the register and the login in components in order to reassign the isSigned boolean accordingly
//     //theme is an object which contains breakpoints, keys that reference the size of screens, etc
//     // console.log('theme is =>', theme);
//     //md represents 960px, so mobileView checks to see if the current screen size is btw 0 and 960px and returns a boolean
//     const mobileView = useMediaQuery(theme.breakpoints.down('md'));
//     // console.log('match is => ', mobileView);
//     return (
//         <>
//         {/* using nav tag for accessibility reasons */}
//         <nav>
//             <AppBar position ='static' sx={{background: '#A2D2FF'}}>
//                 <Toolbar>
//                     {
//                         mobileView ? (
//                             <>
//                                 <DrawerComp setShowSignIn={setShowSignIn} user={user} />
//                                 <Typography variant='h8' component={Link} to={'/'} sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Apple Drop</Typography>
//                             </>
//                         ) : (
//                             <>
//                                 <Typography variant='h8' component={Link} to={'/'} sx={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>Apple Drop</Typography>
//                                 { user ? (
//                                     <Typography sx={{marginLeft: 'auto', color: 'black', fontWeight: 'normal', fontSize: 19, color: 'white'}} variant='h3'>Hello { user } </Typography>
//                                 ) : (
//                                     <>
//                                     <Button
//                                         sx ={{marginLeft: 'auto', background: '#FEE440', color: 'black'}}
//                                         variant='contained'
//                                         onClick={() => setShowSignIn(true)}
//                                         >
//                                         Sign In / Sign Up
//                                     </Button>
//                                     </>
//                                 )}
//                                 <Button sx ={{marginLeft: "10px", background: "#FEE440", color: 'black'}}
//                                     variant="contained"
//                                     component={Link} to = '/search'
//                                 >
//                                     Donate to teachers
//                                 </Button>
//                             </>
//                         )
//                     }
//                 </Toolbar>
//             </AppBar>
//         </nav>
//         {/* Account Sign In / Sign Up Popop */}
//         { showSignUp ? <SignUp theme={theme} setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} /> : null }
//         { showSignIn ? <SignIn theme={theme} setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} /> : null }
//         </>
//     )
// }
import Cookies from 'js-cookie';

const Navbar = ({ theme, setUser }) => {
  const user = useStoreState((state) => state.user);

  //implement conditional rendering that checks if a user is registered or not
  //create state to figure out if user is signed in or not
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  //pass these down to the register and the login in components in order to reassign the isSigned boolean accordingly
  //theme is an object which contains breakpoints, keys that reference the size of screens, etc
  // console.log('theme is =>', theme);
  //md represents 960px, so mobileView checks to see if the current screen size is btw 0 and 960px and returns a boolean
  const mobileView = useMediaQuery(theme.breakpoints.down('md'));

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove('id');
    Cookies.remove('token');
    setUser(null);
    navigate('/');
  };

  console.log(user);
  return (
    <>
      {/* using nav tag for accessibility reasons */}
      <nav>
        <AppBar position="static" sx={{ background: '#A2D2FF' }}>
          <Toolbar>
            {mobileView ? (
              <>
                <DrawerComp setShowSignIn={setShowSignIn} user={user} />
                <Typography
                  variant="h6"
                  component={Link}
                  to={'/'}
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    verticalAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    style={{ height: '60px', paddingRight: '10px' }}
                    src={logo}
                  />
                  Apple Drop
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component={Link}
                  to={'/'}
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'inherit',
                    verticalAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <img
                    style={{ height: '60px', paddingRight: '10px' }}
                    src={logo}
                  />
                  Apple Drop
                </Typography>
                {user ? (
                  <>
                    <Typography
                      sx={{
                        marginLeft: 'auto',
                        color: 'black',
                        fontWeight: 'normal',
                        fontSize: 19,
                        color: 'white',
                      }}
                      variant="h3"
                    >
                      Hello {user.firstName}{' '}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Button
                      sx={{ marginLeft: 'auto', background: '#FEE440', color: "black"}}
                      variant="contained"
                      onClick={() => setShowSignIn(true)}
                    >
                      Sign In / Sign Up
                    </Button>
                  </>
                )}
                <Button
                  sx={{ marginLeft: '10px', background: '#FEE440', color: "black"}}
                  variant="contained"
                  component={Link}
                  to="/search"
                >
                  Donate to teachers
                </Button>
                {user && (
                  <Button
                    sx={{ marginLeft: '10px', background: '#FEE440', color: "black"}}
                    variant="contained"
                    component={Link}
                    to="/"
                    onClick={handleLogout}
                  >
                    logout
                  </Button>
                )}
              </>
            )}
          </Toolbar>
        </AppBar>
      </nav>
      {/* Account Sign In / Sign Up Popop */}
      {showSignUp ? (
        <SignUp
          user={user}
          theme={theme}
          setShowSignUp={setShowSignUp}
          setShowSignIn={setShowSignIn}
        />
      ) : null}
      {showSignIn ? (
        <SignIn
          user={user}
          theme={theme}
          setShowSignUp={setShowSignUp}
          setShowSignIn={setShowSignIn}
        />
      ) : null}
    </>
  );
};
export default Navbar;
