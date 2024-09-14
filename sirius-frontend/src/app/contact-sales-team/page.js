'use client';

import { Box, Typography } from '@mui/material';

export default function ContactSalesTeam() {
    return (
        <Box sx={{ padding: '20px', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h2" align="center">
                Contact Sales Team
            </Typography>
            <Typography variant="body1" align="center" paragraph>
                Information about Sirius Farms and what the company does.
            </Typography>
        </Box>
    );
}
