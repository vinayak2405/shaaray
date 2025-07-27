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

const ContactSection = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: theme.palette.primary.main,
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />,
      title: 'Email',
      details: ['info@shaaraygroup.com', 'sales@shaaraygroup.com'],
      color: theme.palette.secondary.main,
    },
    {
      icon: <LocationIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />,
      title: 'Address',
      details: ['123 Business Park, Sector 15', 'Gurgaon, Haryana 122001, India'],
      color: theme.palette.success.main,
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40, color: theme.palette.info.main }} />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: theme.palette.info.main,
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Ready to illuminate your space? Contact us for a free consultation 
              and personalized lighting solutions
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
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    color: theme.palette.text.primary,
                    textAlign: 'center',
                  }}
                >
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    >
                      <Card
                        sx={{
                          p: 3,
                          transition: 'all 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                          },
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                          <Box
                            sx={{
                              p: 1,
                              borderRadius: '50%',
                              background: `${info.color}15`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            {info.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 1,
                                color: theme.palette.text.primary,
                              }}
                            >
                              {info.title}
                            </Typography>
                            {info.details.map((detail, detailIndex) => (
                              <Typography
                                key={detailIndex}
                                variant="body2"
                                sx={{
                                  color: theme.palette.text.secondary,
                                  lineHeight: 1.5,
                                }}
                              >
                                {detail}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Card>
                    </motion.div>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection; 