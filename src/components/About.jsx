import React from 'react';
import { Box, Container, Typography, Grid, Stack, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import StarIcon from '@mui/icons-material/Star';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const About = () => {
    const theme = useTheme();

    const features = [
        { icon: <StarIcon sx={{ color: '#6366f1' }} />, title: '5+ Years Expertise', desc: 'Delivering flawless technical event production since 2019.' },
        { icon: <CelebrationIcon sx={{ color: '#f43f5e' }} />, title: '100+ Events', desc: 'Successfully managed a diverse range of large-scale celebrations.' },
        { icon: <CurrencyRupeeIcon sx={{ color: '#f59e0b' }} />, title: 'Premium Value', desc: 'Top-tier equipment at competitive and transparent pricing.' },
    ];

    return (
        <Box id="about" sx={{ py: 5, position: 'relative', bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Grid container spacing={10} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
                                OUR STORY
                            </Typography>
                            <Typography variant="h2" sx={{ mt: 1, mb: 4, lineHeight: 1.1 }}>
                                Precision <span className="text-gradient-primary">Craftsmanship</span> in Every Wave
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4, color: 'text.secondary', fontWeight: 400, lineHeight: 1.8 }}>
                                BODI Sound Service isn't just about equipment; it's about the atmosphere.
                                We combine technical mastery with creative vision to deliver experiences
                                that resonate with your audience.
                            </Typography>

                            <Stack spacing={4} sx={{ mt: 6 }}>
                                {features.map((feature, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                        <Avatar sx={{
                                            mr: 3,
                                            bgcolor: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            width: 56,
                                            height: 56
                                        }}>
                                            {feature.icon}
                                        </Avatar>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{feature.title}</Typography>
                                            <Typography variant="body2" color="text.secondary">{feature.desc}</Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Stack>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Decorative Elements */}
                            <Box sx={{
                                position: 'absolute',
                                top: -20, right: -20,
                                width: '100%', height: '100%',
                                border: '2px solid rgba(99,102,241,0.2)',
                                borderRadius: 8,
                                zIndex: 0
                            }} />

                            <Box sx={{
                                position: 'relative',
                                borderRadius: 8,
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
                                zIndex: 1
                            }}>
                                <img
                                    src="/assets/Lights/Lights_2.jpg"
                                    alt="Ahuja Professional Sound Setup"
                                    style={{ width: '100%', display: 'block', backgroundColor: '#fff' }}
                                />
                                <Box sx={{
                                    position: 'absolute',
                                    bottom: 0, left: 0, right: 0,
                                    p: 4,
                                    background: 'linear-gradient(transparent, rgba(15,23,42,0.9))'
                                }}>
                                    <Typography variant="h5" sx={{ color: '#fff', fontWeight: 800 }}>Mastering the Science of Sound</Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
