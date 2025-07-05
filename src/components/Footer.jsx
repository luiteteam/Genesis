import React from 'react';
import { Box, Typography, Stack, IconButton, Link, useTheme, useMediaQuery } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' }, // Add this page if needed
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        bgcolor: '#5F6C79',
        color: 'white',
        py: 4,
        textAlign: 'center',
        mt: 8,
      }}
    >
      {/* Logo and Company Name */}
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="Genesis Logo"
          sx={{ height: 48, width: 90, mb: isMobile ? 1 : 0 }}
        />
        <Typography variant="h5" fontWeight={700}>
          Genesis Printers & Publishers Pvt. Ltd.
        </Typography>
      </Stack>

      {/* Social Icons */}
      <Stack
        direction="row"
        spacing={3}
        justifyContent="center"
        sx={{ mb: 2 }}
      >
        <IconButton color="inherit" href="https://facebook.com" target="_blank">
          <FacebookIcon sx={{ fontSize: 32, color: '#4E71FF' }} />
        </IconButton>
        <IconButton color="inherit" href="https://wa.me/918471916297" target="_blank">
          <WhatsAppIcon sx={{ fontSize: 32, color: '#25D366' }} />
        </IconButton>
        <IconButton color="inherit" href="https://instagram.com" target="_blank">
          <InstagramIcon sx={{ fontSize: 32, color: '#C13584' }} />
        </IconButton>
        <IconButton color="inherit" href="mailto:genesispress@gmail.com">
          <EmailIcon sx={{ fontSize: 32, color: '#222' }} />
        </IconButton>
      </Stack>

      {/* Navigation Links */}
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 1 : 3}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            underline="none"
            color="inherit"
            sx={{
              fontWeight: 600,
              fontSize: 18,
              '&:hover': { textDecoration: 'underline' },
              mb: isMobile ? 0.5 : 0,
            }}
          >
            {item.label}
          </Link>
        ))}
      </Stack>

      {/* Contact Info */}
      <Stack
        direction={isMobile ? 'column' : 'row'}
        spacing={isMobile ? 1 : 4}
        justifyContent="center"
        alignItems="center"
        sx={{ mb: 2, mt: 2 }}
      >
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <LocationOnIcon fontSize="small" />
          <Typography variant="body2">
            348 Express Highway (VIP Road), Opp. Doordarshan Colony, Near Six Mile, Barbari, Guwahati-781036
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <PhoneIcon fontSize="small" />
          <Typography variant="body2">
            8471916297
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <EmailIcon fontSize="small" />
          <Typography variant="body2">
            genesispress@gmail.com
          </Typography>
        </Stack>
      </Stack>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 2 }}>
        ©{new Date().getFullYear()} Genesis Printers & Publishers | All Rights Reserved
      </Typography>
      
      <Box sx={{ textAlign: 'center', mt: 4, py: 2 }}>
  <Typography variant="body2" color="text.secondary">
    Website Design by{' '}
    <Typography
      component="a"
      href="https://www.luite.in"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        fontWeight: 600,
        color: 'primary.main',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
    >
      LUITE
    </Typography>
  </Typography>
</Box>

    </Box>
  );
}
