import React from 'react';
import { Box, Typography, Button, Container, Stack, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import SendIcon from '@mui/icons-material/Send';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useLanguage } from '../context/LanguageContext';

const HeroSection = () => {
    const theme = useTheme();
    const { t } = useLanguage();

    return (
        <Box
            id="home"
            sx={{
                position: 'relative',
                minHeight: { xs: '60vh', md: '80vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: '#f8fafc',
            }}
        >
            {/* Animated Background Elements */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: 0 }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -120, 0],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        right: '-5%',
                        width: '700px',
                        height: '700px',
                        background: 'radial-gradient(circle, rgba(244, 63, 94, 0.12) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                    }}
                />
            </Box>

            {/* Background Image with Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    backgroundImage: 'url("/assets/Decoration/decoration.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.2,
                    zIndex: 0,
                    mixBlendMode: theme.palette.mode === 'dark' ? 'overlay' : 'multiply',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <Typography
                            variant="overline"
                            sx={{
                                color: 'primary.main',
                                fontWeight: 800,
                                letterSpacing: 6,
                                mb: 2,
                                display: 'block',
                                textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                                fontSize: { xs: '0.7rem', sm: '0.9rem' }
                            }}
                        >
                            {t.hero.subtitle}
                        </Typography>
                    </motion.div>

                    <Typography
                        variant="h1"
                        sx={{
                            fontWeight: 900,
                            mb: 3,
                            lineHeight: 1.1,
                            fontSize: { xs: '3rem', md: '5.5rem' }
                        }}
                    >
                        {t.hero.title}
                    </Typography>

                    <Typography
                        variant="h5"
                        sx={{
                            color: 'text.secondary',
                            mb: 6,
                            maxWidth: '700px',
                            mx: 'auto',
                            fontWeight: 400,
                            fontSize: { xs: '1.1rem', sm: '1.4rem' }
                        }}
                    >
                        {t.hero.description}
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            startIcon={<CallIcon />}
                            onClick={() => window.location.href = "tel:+918098832247"}
                            sx={{
                                py: 2,
                                px: 6,
                                fontSize: '1.1rem',
                                borderRadius: 4,
                            }}
                        >
                            {t.hero.cta1}
                        </Button>

                        <Button
                            variant="outlined"
                            color="inherit"
                            size="large"
                            href="#gallery"
                            startIcon={<PlayArrowIcon />}
                            sx={{
                                py: 2,
                                px: 6,
                                fontSize: '1.1rem',
                                borderRadius: 4,
                                borderColor: 'rgba(255,255,255,0.2)',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            {t.hero.cta2}
                        </Button>
                    </Stack>
                </motion.div>
            </Container>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: 40,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    opacity: 0.5
                }}
            >
                <Box sx={{ width: 30, height: 50, borderRadius: 5, border: '2px solid rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'center', p: 1 }}>
                    <Box sx={{ width: 4, height: 10, borderRadius: 2, bgcolor: 'primary.main' }} />
                </Box>
            </motion.div>
        </Box>
    );
};

export default HeroSection;
