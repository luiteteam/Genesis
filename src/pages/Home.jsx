import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, Container, Avatar, Stack, Paper, TextField, InputAdornment } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import PrintIcon from '@mui/icons-material/Print';
import LayersIcon from '@mui/icons-material/Layers';
import BookIcon from '@mui/icons-material/Book';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { useNavigate } from 'react-router-dom';

const yearsOfService = new Date().getFullYear() - 1998;

const stats = [
  { label: 'Projects Completed', value: '800+' },
  { label: 'Items Printed', value: '254+' },
  { label: 'Products Designed', value: '900' },
  { label: 'Happy Clients', value: '578' },
];

const values = [
  { title: 'Professional', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { title: 'Certified', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
  { title: 'Prestigious', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' },
];

const services = [
  { title: 'Print', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <PrintIcon fontSize="large" color="primary" /> },
  { title: 'Copy', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <ContentCopyIcon fontSize="large" color="primary" /> },
  { title: 'Brand Logos', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <BrandingWatermarkIcon fontSize="large" color="primary" /> },
  { title: 'Tshirt Printing', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <CheckroomIcon fontSize="large" color="primary" /> },
  { title: 'Business Cards', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <BusinessCenterIcon fontSize="large" color="primary" /> },
  { title: 'Stickers & Labels', desc: 'Lorem ipsum dolor sit amet, sectr adipiscing elit, sed do eius.', icon: <LocalOfferIcon fontSize="large" color="primary" /> },
];

const testimonials = [
  {
    name: 'Shams W.Pawel',
    title: 'Founder & CEO of XpeedStudio',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Sed maximus orci ac condi mentum efficitur. Suspendi potenti. Fusce diam felis, ullamcor aca felis sed, volutpat varius tortor.',
  },
  // Repeat or add more testimonials as needed
];

const blogs = [
  { title: 'Yes! we do printing on bags', date: 'January 20, 2023' },
  { title: 'We do high quality stickers', date: 'January 20, 2023' },
  { title: 'Products for brand identity', date: 'January 20, 2023' },
  { title: 'Let us create your brochure', date: 'January 20, 2023' },
];

const partners = [
  'Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5'
];

const machines = [
  { src: '/machine1.png', caption: 'Multi Color Offset Machine' },
  { src: '/machine2.png', caption: 'Paper Folding Machine' },
  { src: '/machine3.png', caption: 'CTP Machine' },
  { src: '/machine4.png', caption: 'Perfect Binding Machine' },
  { src: '/machine5.png', caption: 'Lamination Machine' },
  { src: '/machine6.png', caption: 'Stitching Machine' },
];

const whyChooseUsFeatures = [
  {
    number: '01',
    title: 'Crafted for Impact',
    desc: 'Aligned with your brand/Unmatched quality',
  },
  {
    number: '02',
    title: 'Quick Turnaround',
    desc: 'Timely delivery, on time, every time',
  },
  {
    number: '03',
    title: 'Value-Driven Pricing',
    desc: 'Premium Quality within your budget',
  },
  {
    number: '04',
    title: 'Eco-Friendly Options',
    desc: 'Sustainable materials, Responsible practices',
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          color: 'white',
          height: '100vh',
          py: 8,
          textAlign: 'center',
          background: 'url(/home1.jpg) center/cover no-repeat',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        />
        {/* Content */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h3" fontWeight={700} gutterBottom>
            Trusted Printing Services for Art and Business
          </Typography>
          <Typography variant="h6" sx={{ mb: 3 }}>
          Pioneering Excellence in color Printing Since 1998
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
              }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ bgcolor: 'white', py: { xs: 8, md: 12 } }}>
        <Container>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Typography variant="h4" fontWeight={800} sx={{ mb: 4, color: 'text.primary', textAlign: 'center' }}>
                Why Choose Us?
              </Typography>
              <Grid container justifyContent={{xs:'flex-start', md:'center'}} spacing={{xs:2, md:10}}>
                {whyChooseUsFeatures.map((item, idx) => (
                  <Grid item xs={12} sm={6} key={item.number}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 2,
                        p: 2,
                        bgcolor: 'grey.100',
                        borderRadius: 2,
                        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
                          bgcolor: 'grey.50',
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        color="primary"
                        sx={{ fontWeight: 800, minWidth: 40, lineHeight: 1 }}
                      >
                        {item.number}
                      </Typography>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          fontWeight={700}
                          sx={{ mb: 0.5, color: 'text.primary' }}
                        >
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Welcome to Genesis Press Section */}
      <Box sx={{ bgcolor: 'grey.100', color: 'black', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={800} gutterBottom>
            Welcome to Genesis Press
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, textAlign: 'justify', maxWidth: 700, mx: 'auto', lineHeight: 1.7 }}>
            At Genesis, we bring your ideas to life with Premium Quality Printing solutions tailored to your needs. Whether you're a business or an individual, we offer reliable, fast, and affordable printing services all under one roof.
          </Typography>
        </Container>
      </Box>

      {/* Comprehensive Printing Solution Section */}
      <Box sx={{ bgcolor: 'white', py: { xs: 6, md: 10 }, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight={800} color="primary" gutterBottom sx={{ letterSpacing: 1 }}>
            COMPREHENSIVE PRINTING SOLUTION
          </Typography>
          <Typography variant="subtitle1" fontWeight={600} color="error" gutterBottom sx={{ mb: 4 }}>
            ONE DESTINATION - INFINITE POSSIBILITIES
          </Typography>

          <Grid container spacing={4} justifyContent={{xs:'flex-start', md:'center'}}>
            <Grid item xs={12} sm={6}>
              <Stack spacing={1} direction="row" alignItems="center">
                <PrintIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>Publication to Packaging</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack spacing={1} direction="row" alignItems="center">
                <LayersIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>Leaflets to Magazines</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack spacing={1} direction="row" alignItems="center">
                <BookIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>Booklets to Stickers</Typography>
              </Stack>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Stack spacing={1} direction="row" alignItems="center">
                <InsertDriveFileIcon color="primary" fontSize="large" />
                <Typography variant="h6" fontWeight={600}>Letterheads to Calendars</Typography>
              </Stack>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Machine Showcase Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Our Machines
        </Typography>

        {/* Responsive Wrapper */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' }, // Mobile view: flex row
            overflowX: 'auto',
            gap: 2,
            py: 2,
            px: 1,
            scrollSnapType: 'x mandatory',
            '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar for better UX
          }}
        >
          {machines.map((machine, idx) => (
            <Card
              key={idx}
              sx={{
                minWidth: 250,
                flexShrink: 0,
                scrollSnapAlign: 'start',
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'background.paper',
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Box
                sx={{
                  width: 250,
                  height: 180,
                  mb: 2,
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={machine.src}
                  alt={machine.caption}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography variant="subtitle1" fontWeight={600} align="center">
                {machine.caption}
              </Typography>
            </Card>
          ))}
        </Box>

        {/* Desktop Grid */}
        <Grid container spacing={4} justifyContent="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
          {machines.map((machine, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minHeight: 320,
                }}
              >
                <Box
                  sx={{
                    width: 250,
                    height: 180,
                    mb: 2,
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    component="img"
                    src={machine.src}
                    alt={machine.caption}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Typography variant="subtitle1" fontWeight={600} align="center">
                  {machine.caption}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Years of Happy Customers Section */}
      <Box sx={{ bgcolor: 'grey.100', py: { xs: 6, md: 8 }, textAlign: 'center' }}>
        <Container>
          <Typography variant="h3" fontWeight={800} color="primary" gutterBottom>
            {yearsOfService} Years of Happy Customers
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Thank you for trusting Genesis with your printing needs since 1998.
          </Typography>
        </Container>
      </Box>

      {/* Services */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" align="center" gutterBottom>
          Most popular Printing
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }} justifyContent="center">
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
                    color: index === 1 ? 'white' : 'primary.main',
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
                <Button
                  variant="text"
                  size="small"
                  sx={{
                    textTransform: 'none',
                    fontWeight: 600,
                    color: 'primary.main',
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container>
          <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
            Our Esteemed Client Reviews
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4, overflowX: 'auto', flexWrap: 'nowrap' }}>
            {[
              {
                name: 'Kaushik Kalita',
                rating: 5,
                text: `Efficient, reliable, and versatile – Genesis Press delivers outstanding results every time. Their consistent quality and wide range of print solutions make them a top choice for any business.`,
              },
              {
                name: 'Manash Sarma',
                rating: 5,
                text: `Printing made easy! From small to bulk orders, Genesis handles everything seamlessly with their modern Komori printers. Highly recommended!`,
              },
              {
                name: 'Yakub Ali',
                rating: 4.5,
                text: `Great service and even better print quality. The team is very responsive and ensures every job meets top standards.`,
              },
              {
                name: 'Bhaswati Pathak',
                rating: 5,
                text: `Genesis is my go-to for everything printing. Friendly service, premium results, and quick turnaround make them stand out.`,
              },
              {
                name: 'Angel Infosys',
                rating: 4.5,
                text: `Affordable pricing and excellent print finish. Our office stationery has never looked better.`,
              },
            ].map((review, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx} sx={{ minWidth: 300 }}>
                <Card
                  elevation={3}
                  sx={{
                    p: 3,
                    position: 'relative',
                    borderRadius: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box sx={{ fontSize: 40, color: 'grey.400', mb: 1 }}>&ldquo;</Box>
                  <Box sx={{ display: 'flex', mb: 1 }}>
                    {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                      <Box key={i} sx={{ color: '#FFC107', fontSize: 20 }}>★</Box>
                    ))}
                    {review.rating % 1 !== 0 && (
                      <Box sx={{ color: '#FFC107', fontSize: 20 }}>★½</Box>
                    )}
                  </Box>
                  <Typography variant="body2" color="text.primary" sx={{ mb: 3 }}>
                    {review.text}
                  </Typography>
                  <Box sx={{ fontSize: 40, color: 'grey.400', alignSelf: 'flex-end', mt: 'auto' }}>
                    &rdquo;
                  </Box>
                  <Typography variant="subtitle2" fontWeight={700} color="primary" sx={{ mt: 2 }}>
                    {review.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
} 