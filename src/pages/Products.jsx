import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, Button } from '@mui/material';

const bookImages = [
  '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg',
  '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg',
  '13.jpg', '14.jpg', '15.jpg', '16.jpg',
];

export default function Products() {
  return (
    <Box sx={{ bgcolor: 'grey.50', py: { xs: 6, md: 10 }, minHeight: '80vh' }}>
      <Container>
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom>
          Our Hard Bound Books
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 4 }}>
          Explore some of the premium hard bound books crafted at Genesis Press.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {bookImages.map((img, idx) => (
            <Grid item xs={6} sm={4} md={3} key={img}>
              <Card sx={{ boxShadow: 3, borderRadius: 3, overflow: 'hidden' }}>
                <Box
                  sx={{
                    width: '100%',
                    height: 300, // Fixed height
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'white',
                  }}
                >
                  <CardMedia
                    component="img"
                    image={`/books/${img}`}
                    alt={`Hard Bound Book ${idx + 1}`}
                    sx={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Want to create your own hard bound book?
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/contact"
            sx={{ fontWeight: 700, px: 4, py: 1.5, fontSize: 18 }}
          >
            Contact Us to Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
