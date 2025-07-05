import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, Paper, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import VerifiedIcon from '@mui/icons-material/Verified';


const values = [
  { icon: <EmojiEventsIcon color="primary" />, title: 'Professionalism' },
  { icon: <LightbulbIcon color="primary" />, title: 'Innovation' },
  { icon: <NatureIcon color="primary" />, title: 'Sustainability' },
  { icon: <GroupsIcon color="primary" />, title: 'Client Focus' },
  { icon: <VerifiedIcon color="primary" />, title: 'Quality Assurance' },
];


export default function About() {
  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'grey',
        py: { xs: 8, md: 5 },
        textAlign: 'center',
        background: ' url(/about-hero.jpg) center/cover no-repeat',
      }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Genesis Printers & Publishers Private Limited
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Pioneering Excellence in Color Printing Since 1998
          </Typography>
        </Container>
      </Box>

      {/* About Content */}
      <Container sx={{ py: { xs: 4, md: 1 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: { xs: 2, md: 4 }, mb: 3 }}>
              <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                Genesis Printers & Publishers Pvt. Ltd. was born out of a visionary initiative to bridge a critical gap in the printing landscape of Northeast India. Recognizing the absence of advanced color printing facilities in the region, visionary entrepreneur Rita Saikia laid the foundation for what would become a transformational enterprise in 1998. With a strong commitment to transferring this scenario, she established a dedicated pre-press unit under the North East Graphics.
              </Typography>
              <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                The installation of this facility marked a turning point. It not only drastically reduced the outflow of color printing jobs to other parts of the country but also created a thriving ecosystem for local color printing services. As a direct result, there was a substantial surge in regional publishing activities. For instance, prior to the establishment of this unit, the North East had only seven magazines in circulation. That number has since grown manifold.
              </Typography>
              <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                Building upon this success, Genesis Printers & Publishers Pvt. Ltd. was formally incorporated in 2001. Later that year, the company commissioned the region's first four-color printing press—ushering in a new era of high quality, full-color print production in Northeast India.
              </Typography>
              <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                Before Genesis began operations, a considerable volume of color printing jobs had to be outsourced from other parts of the country, resulting in delays, higher costs, and limited creative flexibility for local clients. The inception of Genesis changed this dynamic entirely. The company not only retained local business that was previously going out of the region but also catalysed the creation of a robust, homegrown color printing industry. As a result, the demand for quality print media grew exponentially.
              </Typography>
              <Typography variant="body1" color="text.secondary" component="p" gutterBottom>
                Today, Genesis stands as a symbol of innovation and quality in the printing industry. With state-of-the-art infrastructure, an experienced team and a deep understanding of regional and national market needs, Genesis continues to lead the evolution of the media in Northeast India and beyond. The company remains committed to delivering cutting-edge printing solutions with an emphasis on precision, sustainability, and client satisfaction. Our journey reflects not just business growth, but a commitment to empowering regional print media and creative industries with world-class capabilities and a visionary approach.
              </Typography>
              <Typography variant="h6" color='text.secondary' fontWeight="bold">
    COME, BE A PART OF OUR JOURNEY — AND LET'S BRING YOUR DREAMS TO LIFE
  </Typography>
            </Paper>
          </Grid>

        </Grid>

      </Container>


      {/* Contact Us Section */}
      <Box sx={{ mb: { xs: 6, md: 10 } }}>
        <Typography variant="h4" fontWeight={800} color='grey' gutterBottom align="center">
          Contact Us
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ maxWidth: 700, mx: 'auto', mb: 2 }}>
          Have a question or need a quote? Reach out to us!
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <Typography variant="body2" color="text.secondary">
            <strong>Address:</strong> 348 Express Highway (VIP Road), Opp. Doordarshan Colony, Near Six Mile, Barbari, Guwahati-781036
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Phone:</strong> 8471916297
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Email:</strong> genesispress@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
} 