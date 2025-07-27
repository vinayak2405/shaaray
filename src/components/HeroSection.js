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

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundImage: `
          linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(156, 39, 176, 0.9) 100%),
          url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')
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
          background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
        },
      }}
    >
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
                  fontWeight: 700,
                  mb: 2,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                                 Innovation in Every{' '}
                 <Box
                   component="span"
                   sx={{
                     background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                     backgroundClip: 'text',
                     WebkitBackgroundClip: 'text',
                     WebkitTextFillColor: 'transparent',
                     fontWeight: 800,
                   }}
                 >
                   Loop!
                 </Box>
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.4,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                                 Leading import and export of premium lighting solutions for homes, 
                 commercial spaces, and industrial facilities. Innovation in every loop, 
                 quality tested, eco-friendly, and globally sourced.
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: 2,
                  mb: 4,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      backgroundColor: 'white',
                      color: theme.palette.primary.main,
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Explore Products
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1.1rem',
                      px: 4,
                      py: 1.5,
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    Get a Quote
                  </Button>
                </motion.div>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  flexWrap: 'wrap',
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    500+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}
                  >
                    Products
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    50+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}
                  >
                    Countries
                  </Typography>
                </Box>

                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    10K+
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}
                  >
                    Happy Clients
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '500px' },
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: 4,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '20%',
                    width: '60px',
                    height: '60px',
                    background: 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%': { transform: 'scale(1)', opacity: 1 },
                      '50%': { transform: 'scale(1.2)', opacity: 0.7 },
                      '100%': { transform: 'scale(1)', opacity: 1 },
                    },
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '60%',
                    right: '30%',
                    width: '40px',
                    height: '40px',
                    background: 'radial-gradient(circle, rgba(255,165,0,0.6) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'pulse 2.5s infinite',
                    animationDelay: '0.5s',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '30%',
                    left: '10%',
                    width: '50px',
                    height: '50px',
                    background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)',
                    borderRadius: '50%',
                    animation: 'pulse 3s infinite',
                    animationDelay: '1s',
                  }}
                />
                
                <Typography
                  variant="h3"
                  sx={{
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    fontSize: { xs: '1.5rem', md: '2rem' },
                  }}
                >
                  Illuminate Your World
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection; 