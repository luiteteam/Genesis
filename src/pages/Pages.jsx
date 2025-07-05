import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

export default function Pages() {
  return (
    <Box>
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>Pages</Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            More content and features coming soon!
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Paper sx={{ p: 4, maxWidth: 500, textAlign: 'center' }}>
          <Typography variant="h5" fontWeight={700} gutterBottom>Stay Tuned!</Typography>
        </Paper>
      </Container>
    </Box>
  );
} 