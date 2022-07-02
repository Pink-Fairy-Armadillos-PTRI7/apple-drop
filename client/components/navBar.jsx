import React, { useState, useEffect, useRef} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuList from '@mui/material/MenuList';


import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom';
import DrawerComp from './DrawerComp.jsx';

const pages = ['Apple Drop', 'Donate to a teacher', 'Register']
const settings = ['Profile', 'Logout']


const Navbar = () =>{
    //implement conditional rendering that checks if a user is registered or not
    //create state to figure out if user is signed in or not
    const [islogged, setLoggedStatus] = useState(true);
    const [user, setUser] = useState('')
    //pass these down to the register and the login in components in order to reassign the islogged boolean accordingly
    //theme is an object which contains breakpoints, keys that reference the size of screens, etc
    const theme = useTheme();
    console.log('theme is =>', theme)
    //md represents 960px, so isMatch checks to see if the current screen size is btw 0 and 960px and returns a boolean
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log('match is => ', isMatch)
    return (
        //using nav tag for accessibility reasons
        <nav>
            <AppBar position ='static' sx={{background: '#A2D2FF'}}>
                <Toolbar>
                    {
                        isMatch ? (
                            <>
                                <DrawerComp />
                                <Typography variant="h8">Apple Drop</Typography>
                            </>
                        ) : (
                            <>
                                <Typography variant="h8">Apple Drop</Typography>
                                 <Button sx ={{marginLeft: "auto", background: "#FEE440"}} variant="contained">Sign Up</Button>
                                <Button sx ={{marginLeft: "10px", background: "#FEE440"}} variant="contained">Donate to teachers</Button>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </nav>
    )
}
export default Navbar;
