'use client';

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
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';  // Import useSession and signOut from NextAuth

const pages = ['Home', 'About Us'];
const settings = ['SignIn', 'Logout'];

function ResponsiveAppBar() {
    const { data: session } = useSession();  // Get the current session
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
                            <Link
                                style={{ textDecoration: 'none' }}
                                key={page}
                                href={page === 'Home' ? '/' : '/about-us'}
                                passHref
                            >
                                <Button
                                    variant="outlined"
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
                            <Avatar
                                alt="User Avatar"
                                src={session ? session.user.image : '/avatar_logo.jpg'}  // Display GitHub avatar if signed in
                                onClick={handleOpenUserMenu}
                                sx={{ cursor: 'pointer' }}
                            />
                        </Tooltip>
                        <Menu
                            sx={{
                                mt: '45px',
                                '& .MuiPaper-root': {
                                    backgroundColor: '#000000', // Set menu background color to black
                                },
                            }}
                            anchorEl={anchorElUser}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {!session && (
                                <MenuItem
                                    onClick={handleCloseUserMenu}
                                    component={Link}
                                    href="/login-page"
                                    passHref
                                    sx={{
                                        color: '#00FF00',  // Set text color to green
                                        '&:hover': {
                                            backgroundColor: '#222222',  // Dark background on hover
                                        },
                                    }}
                                >
                                    Sign In
                                </MenuItem>
                            )}
                            {session && (
                                <MenuItem
                                    onClick={() => signOut()}
                                    sx={{
                                        color: '#00FF00',  // Set text color to green
                                        '&:hover': {
                                            backgroundColor: '#222222',  // Dark background on hover
                                        },
                                    }}
                                >
                                    Logout
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

export default ResponsiveAppBar;
