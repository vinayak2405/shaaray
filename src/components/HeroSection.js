import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Lightbulb as LightbulbIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';
import { hero } from '../data/websiteData';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const floatingElements = hero.floatingElements;

  // Icon mapping for floating elements
  const iconMap = {
    Lightbulb: LightbulbIcon,
    TrendingUp: TrendingUpIcon,
    Star: StarIcon,
    CheckCircle: CheckCircleIcon
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundImage: `
          linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')
        `,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(180deg)' },
          },
        },
      }}
    >
      {/* Floating Elements */}
      {floatingElements.map((element, index) => {
        const IconComponent = iconMap[element.icon];
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: element.delay }}
            style={{
              position: 'absolute',
              ...element.position,
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: '60px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white',
                fontSize: '24px',
                animation: 'float 4s ease-in-out infinite',
                animationDelay: `${element.delay}s`,
              }}
            >
              <IconComponent />
            </Box>
          </motion.div>
        );
      })}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  mb: 2,
                  textShadow: '0 4px 8px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' },
                  lineHeight: 1.1,
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {hero.title}{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 900,
                    textShadow: '0 4px 8px rgba(255,215,0,0.3)',
                  }}
                >
                  {hero.highlight}
                </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.95)',
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                }}
              >
                {hero.subtitle}
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mb: 4,
                }}
              >
                {hero.buttons.map((button, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={button.variant}
                      size="large"
                      onClick={() => scrollToSection(button.path.replace('#', ''))}
                      sx={{
                        background: button.variant === 'contained' 
                          ? 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                          : 'transparent',
                        color: button.variant === 'contained' 
                          ? theme.palette.primary.main 
                          : 'white',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        px: 4,
                        py: 2,
                        borderRadius: 3,
                        boxShadow: button.variant === 'contained' 
                          ? '0 8px 25px rgba(255,255,255,0.3)'
                          : 'none',
                        borderColor: button.variant === 'outlined' 
                          ? 'rgba(255,255,255,0.8)'
                          : 'transparent',
                        borderWidth: button.variant === 'outlined' ? 2 : 0,
                        backdropFilter: button.variant === 'outlined' ? 'blur(10px)' : 'none',
                        '&:hover': {
                          background: button.variant === 'contained'
                            ? 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
                            : 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-3px)',
                          boxShadow: button.variant === 'contained'
                            ? '0 12px 35px rgba(255,255,255,0.4)'
                            : '0 12px 35px rgba(255,255,255,0.2)',
                          borderColor: button.variant === 'outlined' ? 'white' : 'transparent',
                        },
                      }}
                    >
                      {button.text}
                    </Button>
                  </motion.div>
                ))}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  flexWrap: 'wrap',
                }}
              >
                {hero.stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography
                        variant="h3"
                        sx={{
                          color: 'white',
                          fontWeight: 800,
                          fontSize: { xs: '1.75rem', md: '2.5rem' },
                          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          mb: 0.5,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ 
                          color: 'rgba(255,255,255,0.9)', 
                          fontSize: '0.95rem',
                          fontWeight: 500,
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.8 }}
              animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '350px', md: '550px' },
                  background: 'rgba(255,255,255,0.15)',
                  borderRadius: 4,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent)',
                    animation: 'rotate 10s linear infinite',
                    '@keyframes rotate': {
                      '0%': { transform: 'rotate(0deg)' },
                      '100%': { transform: 'rotate(360deg)' },
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    p: 4,
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <LightbulbIcon 
                      sx={{ 
                        fontSize: { xs: '4rem', md: '6rem' },
                        color: 'rgba(255,255,255,0.9)',
                        mb: 2,
                        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                      }} 
                    />
                  </motion.div>
                  
                  <Typography
                    variant="h3"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      textAlign: 'center',
                      fontSize: { xs: '1.75rem', md: '2.5rem' },
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                      mb: 2,
                    }}
                  >
                    {hero.rightSection.title}
                  </Typography>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      textAlign: 'center',
                      fontSize: '1.1rem',
                      maxWidth: '300px',
                      mx: 'auto',
                    }}
                  >
                    {hero.rightSection.description}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 