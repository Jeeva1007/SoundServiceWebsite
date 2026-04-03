import React from 'react';
import { Box, Container, Typography, Grid, Card, IconButton, Button, Stack, useTheme, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useLanguage } from '../context/LanguageContext';

const Founders = () => {
    const theme = useTheme();
    const { t, language } = useLanguage();

    const founders = [
        {
            name: 'B. Rajendiran',
            role: t.founders.raj.role,
            phone: '8098832247',
            address: language === 'en' ? 'Elambalur, Perambalur District' : 'எலம்பலூர், பெரம்பலூர் மாவட்டம்',
            pincode: '621212',
            image: '/assets/Founders/Rajendiran.jpg',
            color: '#6366f1'
        },
        {
            name: 'R. Jeeva',
            role: t.founders.jeeva.role,
            phone: '6385718694',
            address: language === 'en' ? 'Elambalur, Perambalur District' : 'எலம்பலூர், பெரம்பலூர் மாவட்டம்',
            pincode: '621212',
            image: '/assets/Founders/Jeeva.jpg',
            color: '#f43f5e'
        }
    ];

    return (
        <Box id="founders" sx={{ py: 5, position: 'relative', overflow: 'hidden', bgcolor: 'background.default' }}>
            {/* Artistic Background Shapes */}
            <Box sx={{ position: 'absolute', top: '20%', left: '-5%', width: '40%', height: '30%', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />
            <Box sx={{ position: 'absolute', bottom: '20%', right: '-5%', width: '40%', height: '30%', background: 'radial-gradient(circle, rgba(244, 63, 94, 0.05) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ mb: 10, textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
                            {t.founders.overline}
                        </Typography>
                        <Typography variant="h2" sx={{ mt: 1, mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                            {t.founders.title}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
                            {t.founders.subtitle}
                        </Typography>
                    </motion.div>
                </Box>

                <Grid container spacing={6} justifyContent="center">
                    {founders.map((person, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                            >
                                <Card sx={{
                                    p: { xs: 4, md: 6 },
                                    height: '100%',
                                    position: 'relative',
                                    borderRadius: 8,
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    '&:hover .founder-avatar': {
                                        transform: 'scale(1.05)',
                                        borderColor: person.color,
                                    },
                                    '&:hover .founder-btn': {
                                        background: person.color,
                                        color: '#fff',
                                    }
                                }}>
                                    <Stack alignItems="center" spacing={4}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Avatar
                                                className="founder-avatar"
                                                src={person.image}
                                                alt={person.name}
                                                sx={{
                                                    width: 160,
                                                    height: 160,
                                                    border: '4px solid rgba(255,255,255,0.1)',
                                                    transition: 'all 0.5s ease',
                                                    boxShadow: `0 20px 40px rgba(0,0,0,0.3)`
                                                }}
                                            />
                                            <Box sx={{ position: 'absolute', bottom: 10, right: 10, bgcolor: 'background.paper', borderRadius: '50%', p: 0.5, border: '2px solid', borderColor: person.color }}>
                                                <VerifiedIcon sx={{ color: person.color, fontSize: 24 }} />
                                            </Box>
                                        </Box>

                                        <Box textAlign="center">
                                            <Typography variant="h3" sx={{ fontWeight: 800, mb: 0.5 }}>
                                                {person.name}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color: person.color, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                                                {person.role}
                                            </Typography>
                                        </Box>

                                        <Stack spacing={2} sx={{ width: '100%', mt: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <IconButton sx={{ bgcolor: `${person.color}15`, color: person.color, mr: 2.5 }}>
                                                    <CallIcon />
                                                </IconButton>
                                                <Box>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{t.founders.contact}</Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>+91 {person.phone}</Typography>
                                                </Box>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', p: 3, borderRadius: 4, bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                                <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'text.primary', mr: 2.5 }}>
                                                    <LocationOnIcon />
                                                </IconButton>
                                                <Box>
                                                    <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>{t.founders.loc}</Typography>
                                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>{person.address}</Typography>
                                                </Box>
                                            </Box>
                                        </Stack>

                                        <Button
                                            className="founder-btn"
                                            variant="outlined"
                                            fullWidth
                                            size="large"
                                            onClick={() => window.location.href = `tel:+91${person.phone}`}
                                            sx={{
                                                py: 2,
                                                borderRadius: 4,
                                                fontSize: '1.1rem',
                                                fontWeight: 800,
                                                borderColor: 'rgba(255,255,255,0.1)',
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            {t.founders.connect} {person.name.split(' ')[1]}
                                        </Button>
                                    </Stack>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Founders;
