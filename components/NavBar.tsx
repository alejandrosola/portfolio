'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import { useRouter } from 'next/navigation'
import { Typography } from '@mui/material';

export default function NavBar({ drawerWidth }: { drawerWidth: number }) {
    const router = useRouter();
    const items = [
        {name: 'LinkedIn', icon: <LinkedInIcon />, handleClick: () => openLink("https://www.linkedin.com/in/alejandro-sol%C3%A1-70ba20277/")}, 
        {name: 'Github', icon: <GitHubIcon />, handleClick: () => openLink("https://github.com/alejandrosola")}, 
        {name: 'Contacto', icon: <AccountBoxIcon />, handleClick: () => openLink("contacto.com")},
        {name: 'Formación', icon: <SchoolIcon />, handleClick: () => redirectTo("/education")},
        {name: 'Experiencia', icon: <WorkIcon />, handleClick: () => redirectTo("/experience")}
    ];

    function openLink(link: string): any {
        window.open(link, '_blank');
    }

    function redirectTo(path: string): any {
        router.push(path, { scroll: false })
    }

    return (
        <Box>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                  '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                <Box
                    sx={{ overflow: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', }} className="main_navbar light-text">
                    <div>
                        <img className="profile-img" src="/spiderman.jpg" alt="Spiderman" />
                    </div>
                    <List>
                        {items.map((item, _index) => (
                        <ListItem key={item.name}  disablePadding>
                            <ListItemButton onClick={item.handleClick}>
                                <ListItemIcon className='light-text'>
                                    {item.icon}
                                </ListItemIcon>
                                <Typography className="dark-text"> {item.name} </Typography>
                            </ListItemButton>
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
  );
}
