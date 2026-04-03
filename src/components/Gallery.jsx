import React from 'react';
import { Box, Container, Typography, ImageList, ImageListItem, useMediaQuery, useTheme, Card } from '@mui/material';
import { motion } from 'framer-motion';

const galleryImages = [
    { src: '/assets/Decoration/decoration.png', title: 'Grand Venue Decoration' },
    { src: '/assets/Decoration/decoration_1.png', title: 'Event Stage Decor' },
    { src: '/assets/Decoration/decoration_2.png', title: 'Elegant Floral Setup' },
    { src: '/assets/Decoration/decoration_3.png', title: 'Luxury Canopy' },
    { src: '/assets/Decoration/decoration_4.png', title: 'Premium Decor Arrangements' },
    { src: '/assets/Decoration/decoration_5.png', title: 'Outdoor Festive Setup' },
    { src: '/assets/Decoration/decoration_6.png', title: 'Traditional Event Decor' },
    { src: '/assets/Lights/Lights_1.jpg', title: 'Wedding Building Lights' },
    { src: '/assets/Lights/Lights_2.jpg', title: 'Illuminated Architecture' },
    { src: '/assets/Lights/Lights_3.jpg', title: 'House Warming Serial Lights' },
    { src: '/assets/Lights/Lights_4.jpg', title: 'Night Time Event Lighting' },
];

const Gallery = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const cols = isMobile ? 1 : isTablet ? 2 : 3;

    return (
        <Box id="gallery" sx={{ py: 5, bgcolor: 'background.paper' }}>
            <Container maxWidth="xl">
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
                            VISUAL JOURNEY
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, mb: 2 }}>
                            Experience <span className="text-gradient-primary">The Magic</span>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
                            A showcase of our best work across various venues and event styles.
                            From intimate gatherings to large-scale productions.
                        </Typography>
                    </motion.div>
                </Box>

                <ImageList variant="masonry" cols={cols} gap={24}>
                    {galleryImages.map((item, index) => (
                        <ImageListItem key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: 6,
                                    cursor: 'pointer',
                                    '&:hover .gallery-overlay': { opacity: 1 },
                                    '&:hover img': { transform: 'scale(1.1)' }
                                }}>
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    />
                                    <Box
                                        className="gallery-overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            p: 4,
                                            opacity: 0,
                                            transition: 'opacity 0.4s ease',
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 0.5 }}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>
                                                Professional Setup
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Container>
        </Box>
    );
};

export default Gallery;
