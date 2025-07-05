import React from 'react';
import { Box, Typography, Container, Grid, Card } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const services = [
  { title: 'Print', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <PrintIcon fontSize="large" color="primary" /> },
  { title: 'Copy', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <ContentCopyIcon fontSize="large" color="primary" /> },
  { title: 'Brand Logos', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <BrandingWatermarkIcon fontSize="large" color="primary" /> },
  { title: 'Tshirt Printing', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <CheckroomIcon fontSize="large" color="primary" /> },
  { title: 'Business Cards', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <BusinessCenterIcon fontSize="large" color="primary" /> },
  { title: 'Stickers & Labels', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <LocalOfferIcon fontSize="large" color="primary" /> },
];

export default function Services() {
  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '80vh', py: { xs: 6, md: 10 } }}>
      <Container>
        <Typography variant="h3" fontWeight={800} align="center" gutterBottom color="primary">
          Our Services
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Most popular Printing
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 4,
                  bgcolor: 'grey.100',
                  color: 'text.primary',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-6px)',
                  },
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    fontSize: 40,
                    mb: 2,
                    color: 'primary.main',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  {service.icon}
                </Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {service.desc}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 