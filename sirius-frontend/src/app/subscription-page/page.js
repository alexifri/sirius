'use client';

import React from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Paper, Grid, Link } from '@mui/material';

const topicOptions = [
    'Product Updates', 'Tips & Tricks', 'Company News',
];

export default function SubscriptionPage() {
    const [formValues, setFormValues] = React.useState({
        email: '',
        fullName: '',
        topic: '',
        consent: false,
    });

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formValues);
    };

    return (
        <Box sx={{ padding: '20px', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
                Subscribe to Our Newsletter
            </Typography>

            <Grid container justifyContent="center">
                <Grid item xs={12} md={8}>
                    <Paper sx={{ padding: '20px', backgroundColor: '#000000', border: '2px solid #00FF00', borderRadius: '8px' }}>
                        <form onSubmit={handleSubmit}>
                            {/* Email input */}
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                required
                                sx={{
                                    marginBottom: '20px',
                                    input: { color: '#FFFFFF' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#00FF00' },
                                    },
                                    '& label': { color: '#FFFFFF' },
                                }}
                            />

                            {/* Full Name input */}
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                name="fullName"
                                value={formValues.fullName}
                                onChange={handleInputChange}
                                sx={{
                                    marginBottom: '20px',
                                    input: { color: '#FFFFFF' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#00FF00' },
                                    },
                                    '& label': { color: '#FFFFFF' },
                                }}
                            />

                            {/* Topic preferences dropdown */}
                            <FormControl fullWidth sx={{ marginBottom: '20px' }}>
                                <InputLabel sx={{ color: '#FFFFFF', '&.Mui-focused': { color: '#00FF00' } }}>Topic Preferences</InputLabel>
                                <Select
                                    name="topic"
                                    variant="outlined"
                                    value={formValues.topic}
                                    onChange={handleInputChange}
                                    label="Topic Preferences"
                                    sx={{
                                        color: '#FFFFFF',
                                        backgroundColor: '#000000',  // Constant background color
                                            '& fieldset': {
                                                borderColor: '#00FF00',  // Permanent green border
                                            },
                                        '& svg': { color: '#00FF00' },  // Set arrow color
                                    }}
                                >
                                    {topicOptions.map((topic) => (
                                        <MenuItem
                                            key={topic}
                                            value={topic}
                                            sx={{
                                                backgroundColor: '#000000',  // Constant background color
                                                color: '#00FF00',  // Green text color when options are shown
                                                '&:hover': {
                                                    backgroundColor: '#000000',  // Keep background black when hovered
                                                    color: '#00FF00',  // Green text color when hovered
                                                },
                                                '&.Mui-selected': {
                                                    backgroundColor: '#000000', // Keep background black when selected
                                                    color: '#FFFFFF', // White text color when selected
                                                },
                                            }}
                                        >
                                            {topic}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            {/* Consent to terms and privacy */}
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formValues.consent}
                                        onChange={handleInputChange}
                                        name="consent"
                                        required
                                        sx={{
                                            color: '#FFFFFF',
                                            '&.Mui-checked': { color: '#00FF00' },
                                        }}
                                    />
                                }
                                label={
                                    <Typography sx={{ color: '#FFFFFF' }}>
                                        I agree to let the data I shared be processed and used by Sirius Farms
                                    </Typography>
                                }
                            />

                            {/* Submit button */}
                            <Button
                                type="submit"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    marginTop: '20px',
                                    color: '#FFFFFF',
                                    borderColor: '#00FF00',
                                    borderWidth: '3px',
                                    '&:hover': {
                                        borderColor: '#00FF00',  // Keep border color on hover
                                        backgroundColor: 'transparent',
                                    },
                                }}
                            >
                                Subscribe
                            </Button>

                            {/* Instagram Link */}
                            <Box sx={{ textAlign: 'center', marginTop: '20px', color: '#FFFFFF' }}>
                                <Typography>Follow us on:</Typography>
                                <Link href="https://www.instagram.com/yourpage" target="_blank" rel="noopener" sx={{ color: '#00FF00' }}>
                                    Instagram
                                </Link>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
