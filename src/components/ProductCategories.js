import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Rating,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Home as HomeIcon,
  Business as BusinessIcon,
  Factory as FactoryIcon,
  Park as ParkIcon,
  Star as StarIcon,
  ShoppingCart as CartIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { products } from '../data/websiteData';

const ProductCategories = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [selectedCategory, setSelectedCategory] = useState(0);

  const categories = products.categories;

  // Icon mapping for categories
  const iconMap = {
    Home: HomeIcon,
    Business: BusinessIcon,
    Factory: FactoryIcon,
    Park: ParkIcon
  };

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const selectedCategoryData = categories[selectedCategory];

  return (
    <Box
      ref={ref}
      sx={{
        py: 10,
        backgroundColor: theme.palette.background.default,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.05) 0%, transparent 50%)',
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
              {products.title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              {products.subtitle}
            </Typography>
          </Box>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box sx={{ mb: 6 }}>
            <Tabs
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons={isMobile ? "auto" : false}
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  minHeight: 60,
                  '&.Mui-selected': {
                    color: theme.palette.primary.main,
                  },
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                },
              }}
            >
              {categories.map((category, index) => {
                const IconComponent = iconMap[category.icon];
                return (
                  <Tab
                    key={index}
                    label={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconComponent sx={{ fontSize: 20 }} />
                        <Typography variant="body1" sx={{ fontWeight: 600 }}>
                          {category.title}
                        </Typography>
                      </Box>
                    }
                  />
                );
              })}
            </Tabs>
          </Box>
        </motion.div>

        {/* Selected Category Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ mb: 6 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: theme.palette.text.primary,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                }}
              >
                {selectedCategoryData.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: theme.palette.text.secondary,
                  maxWidth: '600px',
                  mx: 'auto',
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                {selectedCategoryData.description}
              </Typography>
              
              {/* Category Features */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mb: 4 }}>
                {selectedCategoryData.features.map((feature, index) => (
                  <Chip
                    key={index}
                    label={feature}
                    size="small"
                    sx={{
                      backgroundColor: `${selectedCategoryData.color}15`,
                      color: selectedCategoryData.color,
                      fontWeight: 600,
                      fontSize: '0.8rem',
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Products Grid */}
            <Grid container spacing={3}>
              {selectedCategoryData.products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.95) 100%)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          '& .product-image': {
                            transform: 'scale(1.05)',
                          },
                        },
                      }}
                    >
                      {/* Product Image */}
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                        className="product-image"
                        sx={{
                          transition: 'transform 0.3s ease',
                          objectFit: 'cover',
                        }}
                      />

                      <CardContent sx={{ p: 3 }}>
                        {/* Product Title and Rating */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography
                            variant="h6"
                      sx={{
                              fontWeight: 700,
                        color: theme.palette.text.primary,
                              fontSize: '1.1rem',
                              lineHeight: 1.3,
                            }}
                          >
                            {product.name}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Rating value={product.rating} precision={0.1} size="small" readOnly />
                            <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                              ({product.reviews})
                    </Typography>
                          </Box>
                        </Box>

                        {/* Product Description */}
                    <Typography
                          variant="body2"
                      sx={{
                        color: theme.palette.text.secondary,
                            mb: 2,
                            lineHeight: 1.5,
                        minHeight: '3rem',
                      }}
                    >
                          {product.description}
                    </Typography>

                        {/* Product Features */}
                        <Box sx={{ mb: 2 }}>
                          {product.features.slice(0, 2).map((feature, featureIndex) => (
                        <Chip
                          key={featureIndex}
                          label={feature}
                          size="small"
                          sx={{
                            m: 0.5,
                                backgroundColor: `${selectedCategoryData.color}10`,
                                color: selectedCategoryData.color,
                            fontWeight: 500,
                                fontSize: '0.7rem',
                          }}
                        />
                      ))}
                    </Box>

                        {/* Price and Action */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography
                            variant="h6"
                      sx={{
                              fontWeight: 800,
                              color: selectedCategoryData.color,
                              fontSize: '1.2rem',
                            }}
                          >
                            {product.price}
                          </Typography>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="contained"
                              size="small"
                              startIcon={<CartIcon />}
                      sx={{
                                background: `linear-gradient(135deg, ${selectedCategoryData.color} 0%, ${selectedCategoryData.color}dd 100%)`,
                                color: 'white',
                        fontWeight: 600,
                                '&:hover': {
                                  background: `linear-gradient(135deg, ${selectedCategoryData.color}dd 0%, ${selectedCategoryData.color} 100%)`,
                                },
                              }}
                            >
                              Get Quote
                            </Button>
                          </motion.div>
                        </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
          </Box>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 4,
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
              borderRadius: 3,
              border: '1px solid rgba(102, 126, 234, 0.2)',
              textAlign: 'center',
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
                mb: 3,
              }}
            >
              Don't see what you're looking for? We offer custom lighting solutions 
              tailored to your specific requirements. Contact us to discuss your 
              project needs and get a personalized quote.
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
                  },
                }}
              >
                Contact Us for Custom Quote
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductCategories; 