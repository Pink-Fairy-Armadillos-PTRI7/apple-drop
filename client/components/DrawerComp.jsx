import React, { useState, useEffect } from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
//import drawer component after the toolbar component in nav
function DrawerComp () {
    //list composed of items containing primary and supplemental actions, represented by icons and text
    const [openDrawer, setOpenDrawer] = useState(false)
    return ( 
        <>
         <Drawer open={openDrawer} onClose = {() => setOpenDrawer(false)}>
            <List>
                <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText>Register</ListItemText>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon></ListItemIcon>
                    <ListItemText>Donate to Teachers</ListItemText>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick ={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
        </>
       
     );
}

export default DrawerComp;