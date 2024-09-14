import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00FF00',  // Green as the primary color
        },
        background: {
            default: '#000000',  // Black background
        },
        text: {
            primary: '#FFFFFF',  // White text
        },
    },
    typography: {
        fontFamily: [
            'Roboto',           // Use Roboto as the global font
            'Arial',
            'sans-serif',
        ].join(','),
        // Link-specific styling to remove underline
        a: {
            textDecoration: 'none',  // Remove underline for links
            color: 'inherit',  // Inherit the color of the parent element
        }
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    textDecoration: 'none',  // Remove underline for MUI Link component
                    '&:hover': {
                        textDecoration: 'none',  // Ensure no underline on hover as well
                    },
                },
            },
        },
    },
});

export default theme;
