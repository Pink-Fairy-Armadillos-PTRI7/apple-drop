import React, { useState, useEffect } from 'react';
import {Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
//import drawer component after the toolbar component in nav
function DrawerComp () {
    //list composed of items containing primary and supplemental actions, represented by icons and text
    const [openDrawer, setOpenDrawer] = useState(false)
    const pages = ['Register', 'Donate to Teachers']
    return ( 
        <>
         <Drawer open={openDrawer} onClose = {() => setOpenDrawer(false)}>
            <List>
                {
                   pages.map((page, index) => {
                    let componentPath
                     (index === 1)? componentPath = '/search' : componentPath = '/signup'
                        return (
                            <ListItemButton key={index} 
                            component={Link} to={componentPath}
                            >
                            <ListItemText>{page}</ListItemText>
                            </ListItemButton>
                        )
                    })
                }
            </List>
        </Drawer>
        <IconButton sx= {{color: 'white', marginRight: "auto"}} onClick ={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
        </>
       
     );
}

export default DrawerComp;
