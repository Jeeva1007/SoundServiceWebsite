import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, useTheme, Avatar, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import SurroundSoundIcon from '@mui/icons-material/SurroundSound';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import MusicNoteIcon from '@mui/icons-material/MusicNote';

const services = [
  {
    title: 'Sound System',
    icon: <SurroundSoundIcon sx={{ fontSize: 32 }} />,
    image: '/assets/Lights/Lights_1.jpg',
    description: 'Immersive audio experiences with high-fidelity speakers and professional digital mixers.',
    price: '₹1,500+',
    color: '#6366f1',
  },
  {
    title: 'Stage Lighting',
    icon: <LightbulbIcon sx={{ fontSize: 32 }} />,
    image: '/assets/Lights/Lights_3.jpg',
    description: 'Dynamic stage lighting, LED washes, and intelligent movers to create the perfect atmosphere.',
    price: '₹1,000+',
    color: '#f43f5e',
  },
  {
    title: 'Event Decor',
    icon: <AutoAwesomeIcon sx={{ fontSize: 32 }} />,
    image: '/assets/Decoration/decoration.png',
    description: 'Elegant and customized decorations for weddings, corporate events, and private parties.',
    price: '₹3,000+',
    color: '#f59e0b',
  },
  {
    title: 'DJ & Visuals',
    icon: <MusicNoteIcon sx={{ fontSize: 32 }} />,
    image: '/assets/Lights/Lights_2.jpg',
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
                    borderRadius: 4,
                    overflow: 'hidden',
                    border: '1px solid rgba(0,0,0,0.05)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      '& .service-media': { transform: 'scale(1.1)' }
                    }
                  }}
                  elevation={0}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden', height: 240 }}>
                    <CardMedia
                      component="img"
                      className="service-media"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        height: '100%',
                        transition: 'transform 0.6s ease'
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        width: 48,
                        height: 48,
                        bgcolor: 'rgba(255,255,255,0.9)',
                        backdropFilter: 'blur(4px)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: service.color,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                      }}
                    >
                      {service.icon}
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 4, flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 800 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8, fontSize: '1.05rem' }}>
                      {service.description}
                    </Typography>

                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mt: 'auto' }}>
                      <Box>
                        <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.5, display: 'block', mb: 0.5 }}>
                          STARTING FROM
                        </Typography>
                        <Typography variant="h5" sx={{ fontWeight: 900, color: service.color }}>
                          {service.price}
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        sx={{
                          bgcolor: service.color,
                          borderRadius: 2,
                          px: 3,
                          '&:hover': { bgcolor: service.color, opacity: 0.9 }
                        }}
                        href="#contact"
                      >
                        Inquire
                      </Button>
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
