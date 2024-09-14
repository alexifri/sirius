'use client';

import { Container, Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import ChaptersWithImages from "@/components/ChaptersWithImages";

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
                            Sustainable Farming. For Everyone
                        </Typography>
                        <Typography
                            variant="body1"
                            align="center"
                            paragraph
                            sx={{ fontSize: 25 }}  // Customize font size via sx prop
                        >
                            Sirius Farms uses cutting-edge satellite and data technology to bring farming into the space era.
                        </Typography>

                        {/* Center the button and link to /api-page */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                mt: 3,  // Optional spacing
                            }}
                        >
                            <Link href="/api-page" passHref>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    size="large"
                                    sx={{
                                        fontSize: '1.15rem',
                                        padding: '16px 30px',
                                        width: '200px',
                                        height: '60px',
                                        color: '#FFFFFF',
                                        borderColor: '@00FF00',
                                        borderWidth: '3px',
                                        '&:hover': {
                                            borderColor: '#00FF00',
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                >
                                    Find out how
                                </Button>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid item xs={12} container justifyContent="center">
                        <Box
                            sx={{
                                backgroundColor: '#000000',
                                height: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                mt: 4,
                                mb: 4,
                                position: 'relative',
                                overflow: 'hidden',
                                '::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0) 30%), /* Bottom */
                                     linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0) 30%), /* Top */
                                     linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0) 30%), /* Left */
                                     linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 30%)`, /* Right */
                                    zIndex: 2,
                                    pointerEvents: 'none',
                                },
                            }}
                        >
                            <Image
                                src="/satelite-image.webp"
                                layout="responsive"
                                width={1600}
                                height={800}
                                objectFit="cover"
                                style={{ zIndex: 1 }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <ChaptersWithImages />
                </Box>

                {/* Contact Sales Team button at the bottom */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 3,  // Optional spacing
                    }}
                >
                    <Link href="/contact-sales-team" passHref>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            sx={{
                                fontSize: '1.05rem',
                                padding: '16px 30px',
                                width: '250px',
                                height: '60px',
                                color: '#FFFFFF',
                                borderColor: '@00FF00',
                                borderWidth: '3px',
                                '&:hover': {
                                    borderColor: '#00FF00',
                                    backgroundColor: 'transparent',
                                },
                            }}
                        >
                            Contact Sales Team
                        </Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}
