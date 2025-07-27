import React, { useState } from 'react';
import {
  Box,
  Fab,
  Tooltip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  WhatsApp as WhatsAppIcon,
  Close as CloseIcon,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '919876543210';
    const message = encodeURIComponent(
      'Hello! I\'m interested in your lighting solutions. Can you please provide more information?'
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 20, md: 30 },
        right: { xs: 20, md: 30 },
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              right: '100%',
              top: '50%',
              transform: 'translateY(-50%)',
              marginRight: '12px',
              whiteSpace: 'nowrap',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'white',
                color: theme.palette.text.primary,
                px: 2,
                py: 1,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            >
              Chat with us on WhatsApp!
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Tooltip
          title="Chat on WhatsApp"
          placement="left"
          arrow
          sx={{
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Fab
            color="primary"
            aria-label="WhatsApp"
            onClick={handleWhatsAppClick}
            sx={{
              backgroundColor: '#25D366',
              color: 'white',
              width: { xs: 56, md: 64 },
              height: { xs: 56, md: 64 },
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
              '&:hover': {
                backgroundColor: '#128C7E',
                boxShadow: '0 6px 25px rgba(37, 211, 102, 0.4)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
          </Fab>
        </Tooltip>
      </motion.div>
    </Box>
  );
};

export default FloatingWhatsApp; 