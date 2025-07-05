import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Products', href: '/products' },
  { label: 'Pages', href: '/pages' },
  { label: 'Contact Us', href: '/contact' },
];

const infoItems = [
  {
    label: '348 Express Highway (VIP Road), Opp. Doordarshan Colony, Near Six Mile, Barbari, Guwahati-781036',
    icon: <LocationOnIcon fontSize="small" sx={{ mr: 0.5 }} />,
  },
  {
    label: '8471916297',
    icon: <PhoneIcon fontSize="small" sx={{ mr: 0.5 }} />,
  },
  {
    label: 'genesispress@gmail.com',
    icon: <EmailIcon fontSize="small" sx={{ mr: 0.5 }} />,
  },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ width: 280, p: 2 }} role="presentation" onClick={handleDrawerToggle}>
      {/* Logo / Title */}
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Genesis Press"
            sx={{ height: 60, width: 'auto', mx: 'auto' }}
          />
        </Link>
      </Box>
  
      <Divider sx={{ mb: 2 }} />
  
      {/* Navigation Links */}
      <List>
        {navLinks.map((item) => (
          <ListItem disablePadding key={item.label}>
            <ListItemButton
              component={Link}
              to={item.href}
              sx={{
                px: 2,
                py: 1.5,
                borderRadius: 2,
                transition: 'all 0.3s',
                bgcolor: location.pathname === item.href ? 'primary.light' : 'inherit',
                color: location.pathname === item.href ? 'primary.main' : 'inherit',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'primary.main',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography fontWeight={600} fontSize="1rem">
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  
      <Divider sx={{ my: 2 }} />
  
      {/* Contact Info */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {infoItems.map((item, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon}
            <Typography variant="body2" color="text.secondary">
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top Info Bar */}
      <Box sx={{ bgcolor: 'grey.100', py: 0.5, px: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around', alignItems: 'center' }}>
          {infoItems.map((item, idx) => (
            <Box key={idx} sx={{ display: 'flex', alignItems: 'center' }}>
              {item.icon}
              <Typography variant="body2" color="text.secondary">
                {item.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {/* Main Navbar */}
      <AppBar position="static" color="secondary" elevation={1}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <Box
                component="img"
                src="/logo.png"
                alt="Company Logo"
                sx={{ height: { xs: 46, md: 60 }, width: 'auto', mr: 2, cursor: 'pointer' }}
              />
            </Link>
          </Box>
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navLinks.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.href}
                  variant="text"
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    textTransform: 'none',
                    position: 'relative',
                    color:
                      location.pathname === item.href
                        ? (item.label === 'Contact Us' ? '#E3010F' : 'primary.main')
                        : (item.label === 'Contact Us' ? '#E3010F' : 'inherit'),
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: location.pathname === item.href ? '100%' : '0%',
                      height: '2px',
                      left: 0,
                      bottom: 0,
                      bgcolor: item.label === 'Contact Us' ? '#E3010F' : 'primary.main',
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </Box>
  );
} 