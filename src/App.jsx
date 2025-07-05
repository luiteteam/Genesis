import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Pages from './pages/Pages';
import { Box, Typography } from '@mui/material';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <ScrollToTop />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <Navbar />
      <Box sx={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
