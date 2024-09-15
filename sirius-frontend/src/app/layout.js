'use client';

import { SessionProvider } from 'next-auth/react';  // Import the SessionProvider from NextAuth
import ResponsiveAppBar from '../components/ResponsiveAppBar';  // Import the AppBar component
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './styles/theme';  // Import the custom theme

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            {/* Load Google Fonts if needed */}
            <link
                href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
                rel="stylesheet"
            />
        </head>
        <body>
        {/* Wrap the entire app in SessionProvider */}
        <SessionProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />  {/* Normalize browser CSS with Material-UI's CssBaseline */}
                <ResponsiveAppBar />  {/* The AppBar will be shown on every page */}
                {children}  {/* This renders the content of the current page */}
            </ThemeProvider>
        </SessionProvider>
        </body>
        </html>
    );
}
