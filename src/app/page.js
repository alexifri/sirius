'use client';

import { Container, Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';

export default function LandingPage() {
    return (
        <Box
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
                minHeight: '100vh',
                py: 4,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="h2" component="h1" gutterBottom align="center">
                            Sustainable Farming Powered by Technology
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            At Sirius Farms, we use cutting-edge satellite and data technology to revolutionize
                            sustainable farming practices.
                        </Typography>

                        {/* Center the button */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 3,  // Optional spacing
                            }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                sx={{
                                    fontSize: '1.0rem',
                                    padding: '16px 30px',
                                    width: '200px',
                                    height: '60px',
                                }}
                            >
                                Find out how
                            </Button>
                        </Box>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center">
                        {/* Center the Typography */}
                        <Box
                            sx={{
                                backgroundColor: '#FFFFFF',
                                height: 'auto',               // Set height to auto to adjust based on content
                                display: 'flex',
                                justifyContent: 'center',      // Center horizontally
                                alignItems: 'center',          // Center vertically
                                width: '100%',                 // Full width
                                mt: 4,                         // Margin-top to avoid overlap with the previous component
                                mb: 4,                         // Margin-bottom to avoid overlap with the next component
                                position: 'relative',          // Make the box's position relative for better control of elements inside
                                overflow: 'hidden'             // Ensures that content stays within the box if it scales
                            }}
                        >
                            <Image
                                src="/satelite-image.webp"          // Use your image path here
                                alt="Satellite Image or Visualization"
                                layout="responsive"            // Makes the image responsive to the container
                                width={1600}                   // Set custom width based on the design
                                height={800}                   // Set custom height
                                objectFit="cover"              // Ensures the image covers the entire box without distortion
                            />
                        </Box>
                    </Grid>
                </Grid>

                <Box mt={8}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Our Solution
                    </Typography>
                    <Typography variant="body1" align="center" paragraph>
                        Sirius Farms synthesizes data from multiple sources to streamline and optimize farming processes.
                        We provide detailed analytics and actionable insights to enhance your crop yields.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
