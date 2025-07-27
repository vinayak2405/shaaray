import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import {
  Speed as SpeedIcon,
  AttachMoney as MoneyIcon,
  Support as SupportIcon,
  VerifiedUser as QualityIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const reasons = [
    {
      icon: <SpeedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      title: 'Fast Delivery',
      description: 'Quick turnaround times with efficient logistics and global shipping networks. Get your products when you need them.',
      color: theme.palette.primary.main,
    },
    {
      icon: <MoneyIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
      title: 'Competitive Pricing',
      description: 'Direct manufacturer relationships enable us to offer the best prices without compromising on quality.',
      color: theme.palette.secondary.main,
    },
    {
      icon: <SupportIcon sx={{ fontSize: 50, color: theme.palette.success.main }} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you with any queries, technical issues, or order tracking.',
      color: theme.palette.success.main,
    },
    {
      icon: <QualityIcon sx={{ fontSize: 50, color: theme.palette.info.main }} />,
      title: 'Premium Quality',
      description: 'Rigorous quality control processes ensure every product meets international standards and exceeds expectations.',
      color: theme.palette.info.main,
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.02) 0%, rgba(255, 152, 0, 0.02) 100%)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
               Why Choose Shaaray Group?
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
              We stand out from the competition with our commitment to excellence, 
              customer satisfaction, and innovative solutions
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {reasons.map((reason, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        mb: 3,
                        p: 2,
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${reason.color}15, ${reason.color}25)`,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 100,
                        height: 100,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1)',
                          background: `linear-gradient(135deg, ${reason.color}25, ${reason.color}35)`,
                        },
                      }}
                    >
                      {reason.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: theme.palette.text.primary,
                      }}
                    >
                      {reason.title}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: '1rem',
                      }}
                    >
                      {reason.description}
                    </Typography>

                    <Box
                      sx={{
                        mt: 3,
                        width: '60px',
                        height: 3,
                        background: `linear-gradient(90deg, ${reason.color}, ${reason.color}80)`,
                        borderRadius: 2,
                        mx: 'auto',
                      }}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 4,
              background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(255, 152, 0, 0.08) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(25, 118, 210, 0.15)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                mb: 3,
                color: theme.palette.text.primary,
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                maxWidth: '600px',
                mx: 'auto',
                fontSize: '1.1rem',
                mb: 3,
              }}
            >
                             Join thousands of satisfied customers who trust Shaaray Group for their 
               lighting needs. Experience the difference that quality, service, and 
               innovation can make for your business.
            </Typography>
            
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                flexWrap: 'wrap',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: 2,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Get Free Quote
                </Box>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 2,
                    border: `2px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                    borderRadius: 2,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  View Catalog
                </Box>
              </motion.div>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 