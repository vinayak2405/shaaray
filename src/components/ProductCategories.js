import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Home as HomeIcon,
  Business as BusinessIcon,
  Factory as FactoryIcon,
  Lightbulb as LightbulbIcon,
  Schedule as ScheduleIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProductCategories = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      title: 'Indoor Lights',
      description: 'Premium LED lighting solutions for homes, offices, and commercial spaces.',
      icon: <HomeIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
      features: ['Energy Efficient', 'Long Lifespan', 'Smart Controls'],
      color: theme.palette.primary.main,
      available: true,
    },
    {
      title: 'Outdoor Lights',
      description: 'Durable and weather-resistant lighting for gardens, streets, and outdoor areas.',
      icon: <BusinessIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />,
      features: ['Weather Resistant', 'Motion Sensors', 'Solar Powered'],
      color: theme.palette.secondary.main,
      available: true,
    },
    {
      title: 'Industrial Lights',
      description: 'High-performance lighting solutions for factories, warehouses, and industrial facilities.',
      icon: <FactoryIcon sx={{ fontSize: 60, color: theme.palette.success.main }} />,
      features: ['High Lumen Output', 'Dust Resistant', '24/7 Operation'],
      color: theme.palette.success.main,
      available: true,
    },
    {
      title: 'Smart LED Solutions',
      description: 'IoT-enabled smart lighting with app control and automation features.',
      icon: <LightbulbIcon sx={{ fontSize: 60, color: theme.palette.info.main }} />,
      features: ['WiFi Enabled', 'Voice Control', 'Energy Monitoring'],
      color: theme.palette.info.main,
      available: true,
    },
    {
      title: 'Emergency Lighting',
      description: 'Reliable emergency and backup lighting systems for safety compliance.',
      icon: <ScheduleIcon sx={{ fontSize: 60, color: theme.palette.warning.main }} />,
      features: ['Battery Backup', 'Auto Activation', 'Compliance Ready'],
      color: theme.palette.warning.main,
      available: false,
    },
    {
      title: 'Decorative Lighting',
      description: 'Aesthetic and artistic lighting solutions for special occasions and events.',
      icon: <LightbulbIcon sx={{ fontSize: 60, color: theme.palette.error.main }} />,
      features: ['Custom Designs', 'Color Changing', 'Remote Control'],
      color: theme.palette.error.main,
      available: false,
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
              Our Product Categories
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
              Comprehensive lighting solutions for every need - from residential to industrial applications
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                    ...(category.available ? {} : {
                      opacity: 0.7,
                      filter: 'grayscale(30%)',
                    }),
                  }}
                >
                  {!category.available && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -10,
                        right: -10,
                        zIndex: 2,
                      }}
                    >
                      <Chip
                        label="Coming Soon"
                        color="warning"
                        variant="filled"
                        sx={{
                          fontWeight: 600,
                          fontSize: '0.8rem',
                        }}
                      />
                    </Box>
                  )}

                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${category.color}15, ${category.color}25)`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 120,
                        height: 120,
                      }}
                    >
                      {category.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {category.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        mb: 3,
                        lineHeight: 1.6,
                        minHeight: '3rem',
                      }}
                    >
                      {category.description}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      {category.features.map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            m: 0.5,
                            backgroundColor: `${category.color}15`,
                            color: category.color,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>

                    <Box
                      sx={{
                        width: '100%',
                        height: 4,
                        background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                        borderRadius: 2,
                        mb: 2,
                      }}
                    />

                    <Typography
                      variant="body2"
                      sx={{
                        color: category.available ? theme.palette.success.main : theme.palette.warning.main,
                        fontWeight: 600,
                        fontSize: '0.9rem',
                      }}
                    >
                      {category.available ? 'Available Now' : 'Launching Soon'}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 4,
              background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(25, 118, 210, 0.1)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Custom Solutions Available
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.1rem',
              }}
            >
              Don't see what you're looking for? We offer custom lighting solutions 
              tailored to your specific requirements. Contact us to discuss your 
              project needs and get a personalized quote.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductCategories; 