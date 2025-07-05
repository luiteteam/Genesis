import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, Paper, Stack, Divider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendMessage = () => {
    const { name, email, subject, message } = form;
    const whatsappMessage = `
Hello, I would like to get in touch!
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `;
    const phoneNumber = '+918471916297'; // Country code +91 for India
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <Box sx={{ bgcolor: 'grey.50', minHeight: '100vh', py: { xs: 6, md: 10 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={800} align="center" gutterBottom color="primary">
          Get In Touch
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          We're here to help you make an impression that lasts. Reach out for any queries or custom printing needs!
        </Typography>
        <Paper
          elevation={6}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            mb: 6,
          }}
        >
          {/* Contact Info */}
          <Box
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              flex: 1,
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minWidth: { md: 260 },
            }}
          >
            <Typography variant="h6" fontWeight={700} gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              We offer high-quality, reliable printing and binding services. Contact us for your next project!
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <PhoneIcon />
                <Typography variant="body2">8471916297</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <EmailIcon />
                <Typography variant="body2">genesispress@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <LocationOnIcon />
                <Typography variant="body2">
                  348 Express Highway (VIP Road), Opp. Doordarshan Colony, Near Six Mile, Barbari, Guwahati-781036
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Divider for desktop */}
          <Divider orientation="vertical" flexItem sx={{ display: { xs: 'none', md: 'block' }, bgcolor: 'grey.200' }} />

          {/* Contact Form */}
          <Box
            sx={{
              flex: 2,
              p: { xs: 3, md: 4 },
              bgcolor: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Stack spacing={3}>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                <TextField
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                <TextField
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Stack>
              <TextField
                label="Subject"
                variant="outlined"
                fullWidth
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                required
                name="message"
                value={form.message}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: 2, px: 4, alignSelf: { xs: 'stretch', sm: 'flex-start' } }}
                onClick={handleSendMessage}
              >
                Send Message
              </Button>
            </Stack>
          </Box>
        </Paper>

        {/* Map Section */}
        <Box sx={{ width: '100%', height: 320, borderRadius: 3, overflow: 'hidden', boxShadow: 2 }}>
          <iframe
            title="Genesis Press Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4231440866424!2d91.8119418!3d26.150345299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58eacee41dc5%3A0x2b43f93e0f5a4b04!2sGenesis%20Printers%20%26%20Publishers%20Private%20Limited!5e0!3m2!1sen!2sin!4v1751740569960!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Container>
    </Box>
  );
}
