'use client';

import { Box, Typography, Button } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';  // Import useSession and signIn from NextAuth
import { useRouter } from 'next/navigation';  // Import useRouter to handle redirects

export default function LoginPage() {
    const { data: session } = useSession();  // Get the current session
    const router = useRouter();  // Initialize router

    // If the user is already signed in, redirect to home
    if (session) {
        router.push('/');
        return null;  // Prevent rendering the login page if the user is already signed in
    }

    return (
        <Box sx={{ padding: '20px', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h2" align="center" gutterBottom>
                Welcome to Sirius Farms
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Please sign in to continue.
            </Typography>

            {/* If the user is not signed in, show the Sign In button */}
            {!session && (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => signIn('github', { callbackUrl: '/' })}  // Sign in with GitHub and redirect to home
                        sx={{ padding: '10px 20px', fontSize: '1.1rem' }}
                    >
                        Sign In with GitHub
                    </Button>
                </Box>
            )}
        </Box>
    );
}
