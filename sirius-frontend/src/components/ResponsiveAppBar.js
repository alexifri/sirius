'use client';  // Make this a client-side component

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Image from 'next/image';
import Link from 'next/link';  // Import Next.js Link for routing

// Pages and settings arrays
const pages = ['Home', 'About Us'];
const settings = ['Logout'];

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Box maxWidth="xl">
                <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    {/* Sirius Farms Logo */}
                    <Box sx={{ display: 'flex', alignItems: 'center', ml: 20 }}>
                        <Link href="/" passHref>
                            <Image src="/sirius_logo.jpeg" alt="Sirius Farms Logo" width={100} height={100} />
                        </Link>
                    </Box>

                    {/* Navigation Buttons for Desktop (Always visible) */}
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
                        {pages.map((page) => (
                            <Link style={{ textDecoration: 'none' }} key={page} href={page === 'Home' ? '/' : '/about-us'} passHref>
                                <Button variant="outlined"
                                    sx={{
                                        my: 2,
                                        color: '#FFFFFF',
                                        display: 'block',
                                        textSizeAdjust: 'auto',
                                        fontWeight: 'bold',
                                        mx: 1,
                                        borderColor: '@00FF00',
                                        '&:hover': {
                                            borderColor: '#00FF00',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    {page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* User Profile/Avatar */}
                    <Box sx={{ flexGrow: 0, mr: 22 }}>
                        <Tooltip title="Open settings">
                            <Avatar alt="User Avatar" src="/avatar_logo.jpg" onClick={handleOpenUserMenu} sx={{ cursor: 'pointer' }} />
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    {setting}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default ResponsiveAppBar;
