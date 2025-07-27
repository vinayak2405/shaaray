import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  WhatsApp as WhatsAppIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Footer = () => {
  const theme = useTheme();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Mission', href: '#mission' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
    ],
    products: [
      { name: 'Indoor Lights', href: '#indoor' },
      { name: 'Outdoor Lights', href: '#outdoor' },
      { name: 'Industrial Lights', href: '#industrial' },
      { name: 'Smart Solutions', href: '#smart' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Technical Support', href: '#support' },
      { name: 'Warranty', href: '#warranty' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'GDPR', href: '#gdpr' },
    ],
  };

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
             href: 'https://linkedin.com/company/shaaray-group',
      color: '#0077B5',
      label: 'LinkedIn',
    },
    {
      icon: <InstagramIcon />,
             href: 'https://instagram.com/shaaraygroup',
      color: '#E4405F',
      label: 'Instagram',
    },
    {
      icon: <WhatsAppIcon />,
      href: 'https://wa.me/919876543210',
      color: '#25D366',
      label: 'WhatsApp',
    },
    {
      icon: <FacebookIcon />,
             href: 'https://facebook.com/shaaraygroup',
      color: '#1877F2',
      label: 'Facebook',
    },
    {
      icon: <TwitterIcon />,
             href: 'https://twitter.com/shaaraygroup',
      color: '#1DA1F2',
      label: 'Twitter',
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.text.primary,
        color: 'white',
        py: 6,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #1976d2, #ff9800)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LightbulbIcon sx={{ fontSize: 32, color: theme.palette.secondary.main, mr: 1 }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: 'white',
                  }}
                                 >
                   ShaaRay Group
                 </Typography>
              </Box>
              
              <Typography
                variant="body1"
                sx={{
                  mb: 3,
                  lineHeight: 1.6,
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                                 Innovation in Every Loop! Leading import and export of premium lighting 
                 solutions for homes, commercial spaces, and industrial facilities.
              </Typography>

              <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconButton
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: social.color,
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease-in-out',
                      }}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </IconButton>
                  </motion.div>
                ))}
              </Box>

              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                }}
              >
                                 © 2024 ShaaRay Group. All rights reserved.
              </Typography>
            </motion.div>
          </Grid>

          {/* Footer Links */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={3}>
              {Object.entries(footerLinks).map(([category, links]) => (
                <Grid item xs={6} sm={3} key={category}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'white',
                        textTransform: 'capitalize',
                      }}
                    >
                      {category}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {links.map((link, index) => (
                        <Link
                          key={index}
                          href={link.href}
                          sx={{
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              color: theme.palette.secondary.main,
                              transform: 'translateX(4px)',
                            },
                          }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
              }}
            >
              Made with ❤️ for a brighter future
            </Typography>

            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                }}
              >
                ISO 9001:2015 Certified
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                }}
              >
                BIS Certified Products
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                }}
              >
                Eco-Friendly Solutions
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Footer; 