import React from 'react';
import { Box, Typography, Container, useTheme, Stack, Avatar } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Location = () => {
    const theme = useTheme();
    const { t, language } = useLanguage();

    return (
        <Box id="location" sx={{ height: '50vh', width: '100%', position: 'relative', bgcolor: 'background.paper' }}>
            {/* Address Overlay Card */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 60,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    width: { xs: '90%', sm: 'auto' },
                    maxWidth: 500
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {/* <Box sx={{
                        p: 4,
                        borderRadius: 6,
                        background: 'rgba(15, 23, 42, 0.8)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                        textAlign: 'center'
                    }}>
                        <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
                            <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                                <LocationOnIcon />
                            </Avatar>
                            <Box textAlign="left">
                                <Typography variant="h4" sx={{ color: '#fff', fontWeight: 900, mb: 0.5 }}>{t.location.title}</Typography>
                                <Typography variant="h6" sx={{ color: 'primary.light', fontWeight: 700 }}>{language === 'en' ? 'Elambalur, Perambalur District' : 'எலம்பலூர், பெரம்பலூர் மாவட்டம்'}</Typography>
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{language === 'en' ? 'TAMIL NADU - 621212' : 'தமிழ்நாடு - 621212'}</Typography>
                            </Box>
                        </Stack>
                    </Box> */}
                </motion.div>
            </Box>

            <iframe
                src="https://maps.google.com/maps?q=7V9J%2B9P%20Elambalur%2C%20Tamil%20Nadu&t=k&z=18&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: theme.palette.mode === 'dark' ? 'grayscale(0.6) contrast(1.2)' : 'none' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BODI Sound Service Location"
            ></iframe>
        </Box>
    );
};

export default Location;
