import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductCategories from './components/ProductCategories';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ overflow: 'hidden' }}>
        <Header />
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        <WhyChooseUs />
        <ContactSection />
        <Footer />
        <FloatingWhatsApp />
      </Box>
    </ThemeProvider>
  );
}

export default App; 