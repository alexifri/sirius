'use client';

import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function createData(name, phone, email) {
    return { name, phone, email };
}

const rows = [
    createData('Alex Ifrimenco', '+40 747 302 940', 'alex.ifrimenco@gmail.com'),
    createData('Vlad Nițu', '+40 773 871 003', 'vlad.nitu@rocketmail.com'),
    createData('Robin Riordan Budulea', '+40 755 604 287', 'robin.budulea@gmail.com'),
    createData('Ștefan Smeu', '+40 770 992 651', 'smeustefan090@gmail.com'),
    createData('Mihai Pârlea', '+40 729 835 809', 'parleamih2@gmail.com'),
];

export default function ContactSalesTeam() {
    return (
        <Box sx={{ padding: '20px', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
            <Typography variant="h2" align="center" sx={{ marginBottom: '20px' }}>
                Contact Sales Team
            </Typography>

            <TableContainer component={Paper} sx={{ backgroundColor: '#000000', border: '2px solid #00FF00', borderRadius: '8px' }}>
                <Table sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: 0 }} aria-label="contact table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    color: '#FFFFFF',  // Set header text color to white
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #00FF00',
                                    borderRight: '1px solid #00FF00',  // Add vertical line between columns
                                }}
                            >
                                Nume
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: '#FFFFFF',  // Set header text color to white
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #00FF00',
                                    borderRight: '1px solid #00FF00',  // Add vertical line between columns
                                }}
                            >
                                Telefon
                            </TableCell>
                            <TableCell
                                sx={{
                                    color: '#FFFFFF',  // Set header text color to white
                                    fontWeight: 'bold',
                                    borderBottom: '2px solid #00FF00',
                                }}
                            >
                                E-mail
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell
                                    sx={{
                                        color: '#FFFFFF',  // Set body text color to white
                                        borderBottom: '1px solid #00FF00',
                                        borderRight: '1px solid #00FF00',  // Add vertical line between columns
                                    }}
                                >
                                    {row.name}
                                </TableCell>
                                <TableCell
                                    sx={{
                                        color: '#FFFFFF',  // Set body text color to white
                                        borderBottom: '1px solid #00FF00',
                                        borderRight: '1px solid #00FF00',  // Add vertical line between columns
                                    }}
                                >
                                    {row.phone}
                                </TableCell>
                                <TableCell sx={{ color: '#FFFFFF', borderBottom: '1px solid #00FF00' }}>{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
