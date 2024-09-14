// src/app/layout.js
'use client'
import ResponsiveAppBar from '../components/ResponsiveAppBar'; // Import the AppBar component
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00FF00', // Green as the primary color
    },
    background: {
      default: '#000000', // Black background
    },
    text: {
      primary: '#FFFFFF', // White text
    },
  },
});

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />  {/* App Bar for all pages */}
        {children}  {/* This will render the page content */}
      </ThemeProvider>
      </body>
      </html>
  );
}
