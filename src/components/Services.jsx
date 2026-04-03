import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const services = [
  {
    title: 'Sound System',
    icon: <SurroundSoundIcon sx={{ fontSize: 40 }} />,
    description: 'Immersive audio experiences with high-fidelity speakers and professional digital mixers.',
    price: '₹1,500+',
    color: '#6366f1',
  },
  {
    title: 'Stage Lighting',
    icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
    description: 'Dynamic stage lighting, LED washes, and intelligent movers to create the perfect atmosphere.',
    price: '₹1,000+',
    color: '#f43f5e',
  },
  {
    title: 'Event Decor',
    icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
    description: 'Elegant and customized decorations for weddings, corporate events, and private parties.',
    price: '₹3,000+',
    color: '#f59e0b',
  },
  {
    title: 'DJ & Visuals',
    icon: <MusicNoteIcon sx={{ fontSize: 40 }} />,
    description: 'High-energy DJ setups, laser shows, and smoke machines for a complete performance.',
    price: '₹2,000+',
    color: '#10b981',
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box id="services" sx={{ py: 5, position: 'relative', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
              OUR EXPERTISE
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
              Premium <span className="text-gradient-primary">Event</span> Solutions
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
              We provide end-to-end technical production for events of all sizes.
              Quality equipment matched with professional expertise.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    position: 'relative',
                    '&:hover': {
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(10deg)',
                        color: service.color,
                      },
                      '& .service-bg': {
                        opacity: 0.1,
                      }
                    }
                  }}
                >
                  {/* Subtle Background Glow */}
                  <Box
                    className="service-bg"
                    sx={{
                      position: 'absolute',
                      top: 0, right: 0,
                      width: '150px', height: '150px',
                      background: service.color,
                      filter: 'blur(60px)',
                      borderRadius: '50%',
                      opacity: 0.03,
                      transition: 'opacity 0.3s ease',
                      zIndex: 0
                    }}
                  />

                  <CardContent sx={{ position: 'relative', zIndex: 1 }}>
                    <Stack direction="row" spacing={3} alignItems="flex-start">
                      <Avatar
                        className="service-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          bgcolor: 'background.paper',
                          color: 'text.primary',
                          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transition: 'all 0.4s ease'
                        }}
                      >
                        {service.icon}
                      </Avatar>
                      <Box>
                        <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                          {service.description}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Typography variant="h6" sx={{ fontWeight: 800, color: service.color }}>
                            {service.price}
                          </Typography>
                          <Button
                            variant="text"
                            color="inherit"
                            endIcon={<SurroundSoundIcon sx={{ fontSize: 16 }} />}
                            href="#contact"
                            sx={{ fontWeight: 700, '&:hover': { color: service.color } }}
                          >
                            Inquire
                          </Button>
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
