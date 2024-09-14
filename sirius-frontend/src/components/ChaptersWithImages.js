import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Typography, Box } from '@mui/material';

export default function ChaptersWithImages() {
    return (
        <Box sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {/* Title above the images */}
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                paragraph
                sx={{ marginBottom: '32px' }}
            >
                Highly Reliable Monitoring
            </Typography>

            {/* Centered Image List */}
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <ImageList
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Center the image list itself
                        width: '80%',              // Adjust the width of the image list to fit within the page
                        maxWidth: '100%',
                    }}
                    cols={3}
                    gap={48}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} sx={{ height: '250px', width: '250px' }}>  {/* Fixed height and width for square images */}
                            <Box sx={{ height: '100%', width: '100%' }}>
                                <img
                                    src={`${item.img}`}  // Use custom image from public directory
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}  // Square images
                                />
                            </Box>
                            <ImageListItemBar
                                title={
                                    <Typography
                                        component="span"
                                        sx={{
                                            fontWeight: 'bold',
                                            fontSize: '1rem',
                                            marginTop: '4px',  // Reduce margin between image and title
                                            maxWidth: '80%',  // Limit the width of the title
                                            textAlign: 'left',
                                            margin: '8px'
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                }
                                subtitle={
                                    <Box sx={{ margin: '0px auto', textAlign: 'left', maxWidth: '80%' }}>  {/* Apply smaller margin to subtitle */}
                                        <Typography
                                            component="span"
                                            sx={{
                                                fontSize: '0.875rem',
                                                whiteSpace: 'normal',
                                                wordWrap: 'break-word',
                                            }}
                                        >
                                            {item.description.split('\n').map((text, index) => (
                                                <React.Fragment key={index}>
                                                    {text}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </Typography>
                                    </Box>
                                }
                                position="below"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}

const itemData = [
    {
        img: '/farmer-image.jpeg',  // Image path from public directory
        title: 'For Farmers:',
        description: `- Check crop health\n- Avoid overwatering \n- Avoid overusing chemicals\n- Predict yield estimation.`,
    },
    {
        img: '/public-entities-and-ngos.jpeg',  // Image path from public directory
        title: 'For Public entities / NGOs:',
        description: `- Receive periodical reports with soil health and yield estimations\n- Receive alerts for bad farming practices.`,
    },
    {
        img: '/insurance-companies.jpeg',  // Image path from public directory
        title: 'For Insurance companies:',
        description: `- Measure yield estimation and land quality\n- Insurance coverage costs in case of natural disasters.`,
    },
];
