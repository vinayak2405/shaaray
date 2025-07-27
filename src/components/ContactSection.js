import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  useTheme,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { contact } from '../data/websiteData';

const ContactSection = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = contact.information;

  // Icon mapping for contact information
  const iconMap = {
    Phone: PhoneIcon,
    Email: EmailIcon,
    LocationOn: LocationIcon,
    Schedule: ScheduleIcon
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-30px) rotate(180deg)' },
          },
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                color: theme.palette.text.primary,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              {contact.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                fontWeight: 400,
              }}
            >
              {contact.subtitle}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    mb: 4,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                    fontSize: { xs: '2rem', md: '2.5rem' },
                  }}
                >
                  Contact Information
                </Typography>

                <Grid container spacing={3}>
                  {contactInfo.map((info, index) => {
                    const IconComponent = iconMap[info.icon];
                    return (
                      <Grid item xs={12} sm={6} key={index}>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                          <Card
                            sx={{
                              p: 4,
                              height: '100%',
                              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                              backdropFilter: 'blur(20px)',
                              border: '1px solid rgba(255,255,255,0.3)',
                              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                              position: 'relative',
                              overflow: 'hidden',
                              '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                height: '4px',
                                background: info.gradient,
                              },
                              '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                                '& .icon-container': {
                                  transform: 'scale(1.1) rotate(5deg)',
                                },
                              },
                            }}
                          >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                              <Box
                                className="icon-container"
                                sx={{
                                  p: 2,
                                  borderRadius: '50%',
                                  background: `${info.gradient}`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                  boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                  minWidth: '60px',
                                  height: '60px',
                                }}
                              >
                                <Box sx={{ color: 'white', fontSize: '28px' }}>
                                  <IconComponent />
                                </Box>
                              </Box>
                              <Box sx={{ flex: 1 }}>
                                <Typography
                                  variant="h5"
                                  sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: theme.palette.text.primary,
                                    fontSize: '1.25rem',
                                  }}
                                >
                                  {info.title}
                                </Typography>
                                {info.details.map((detail, detailIndex) => (
                                  <Typography
                                    key={detailIndex}
                                    variant="body1"
                                    sx={{
                                      color: theme.palette.text.secondary,
                                      lineHeight: 1.6,
                                      fontSize: '1rem',
                                      mb: detailIndex === 0 ? 1 : 0,
                                      fontWeight: detailIndex === 0 ? 500 : 400,
                                    }}
                                  >
                                    {detail}
                                  </Typography>
                                ))}
                              </Box>
                            </Box>
                          </Card>
                        </motion.div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Additional Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Card
              sx={{
                p: 4,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.primary,
                }}
              >
                {contact.cta.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  mb: 3,
                  fontSize: '1.1rem',
                }}
              >
                {contact.cta.description}
              </Typography>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  component="a"
                  href={`mailto:${contact.cta.button.email}`}
                  sx={{
                    display: 'inline-block',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    px: 4,
                    py: 2,
                    borderRadius: 3,
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 35px rgba(102, 126, 234, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {contact.cta.button.text}
                </Box>
              </motion.div>
            </Card>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ContactSection; 