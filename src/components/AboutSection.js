import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import {
  Verified as VerifiedIcon,
  EnergySavingsLeaf as EcoIcon,
  Security as SecurityIcon,
  Public as PublicIcon,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: (
        <VerifiedIcon
          sx={{ fontSize: 40, color: theme.palette.primary.main }}
        />
      ),
      title: "Quality Tested",
      description:
        "All products undergo rigorous quality testing to ensure superior performance and durability.",
    },
    {
      icon: (
        <EcoIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
      ),
      title: "Eco-Friendly",
      description:
        "Committed to sustainable lighting solutions that reduce energy consumption and environmental impact.",
    },
    {
      icon: (
        <SecurityIcon
          sx={{ fontSize: 40, color: theme.palette.success.main }}
        />
      ),
      title: "BIS Certified",
      description:
        "Products meet Bureau of Indian Standards certification for safety and quality compliance.",
    },
    {
      icon: (
        <PublicIcon sx={{ fontSize: 40, color: theme.palette.info.main }} />
      ),
      title: "Global Sourcing",
      description:
        "Strategic partnerships with leading manufacturers worldwide for the best products and prices.",
    },
  ];

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.paper,
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #1976d2, #ff9800)",
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              About ShaaRay Group
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.text.secondary,
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
              }}
            >
              We are a dynamic startup revolutionizing the lighting industry
              through innovative import and export solutions.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                Our Vision
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "1.1rem",
                }}
              >
                To become the leading global partner for innovative lighting
                solutions, connecting quality manufacturers with markets
                worldwide while promoting sustainable and energy-efficient
                lighting technologies.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  mb: 3,
                  color: theme.palette.text.primary,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.secondary,
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: "1.1rem",
                }}
              >
                To provide exceptional lighting solutions that enhance lives and
                businesses through quality products, competitive pricing, and
                outstanding customer service, while maintaining the highest
                standards of integrity and sustainability.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 600,
              mb: 5,
              color: theme.palette.text.primary,
            }}
          >
            Why Choose ShaaRay Group?
          </Typography>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      textAlign: "center",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          lineHeight: 1.6,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 4,
              background:
                "linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(255, 152, 0, 0.05) 100%)",
              borderRadius: 3,
              border: "1px solid rgba(25, 118, 210, 0.1)",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                textAlign: "center",
                fontWeight: 600,
                mb: 2,
                color: theme.palette.text.primary,
              }}
            >
              Global Trade Capability
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: theme.palette.text.secondary,
                lineHeight: 1.7,
                maxWidth: "800px",
                mx: "auto",
                fontSize: "1.1rem",
              }}
            >
              With extensive experience in international trade and a network
              spanning across continents, we facilitate seamless import and
              export operations. Our expertise in logistics, customs clearance,
              and market analysis ensures smooth transactions and timely
              delivery to our valued clients worldwide.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutSection;
