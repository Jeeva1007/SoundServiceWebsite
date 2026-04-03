import React from 'react';
import { Box, Container, Typography, Grid, Link, Divider, Stack, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const theme = useTheme();
    const { t, language } = useLanguage();

    const services = [
        t.services.items.sound.title,
        t.services.items.lighting.title,
        t.services.items.decor.title,
        t.services.items.dj.title,
        language === 'en' ? 'Live Mixing' : 'நேரடி ஒலி கலவை'
    ];

    const companyLinks = [
        { label: t.nav.about, href: '#about' },
        { label: t.nav.gallery, href: '#gallery' },
        { label: t.nav.founders, href: '#founders' },
        { label: language === 'en' ? 'Privacy Policy' : 'தனியுரிமைக் கொள்கை', href: '#about' }
    ];

    return (
        <Box sx={{
            py: 5,
            bgcolor: 'background.paper',
            borderTop: '1px solid',
            borderColor: 'rgba(255,255,255,0.05)'
        }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={5}>
                        <img src="/assets/logo.png" alt="BODI Sound Logo" style={{ maxWidth: '180px', marginBottom: '24px' }} />
                        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '400px', lineHeight: 1.8, mb: 4 }}>
                            {t.footer.desc}
                        </Typography>
                        <Stack direction="row" spacing={1.5}>
                            {[<FacebookIcon />, <InstagramIcon />, <TwitterIcon />, <LinkedInIcon />].map((icon, i) => (
                                <IconButton
                                    key={i}
                                    sx={{
                                        bgcolor: 'rgba(255,255,255,0.03)',
                                        color: 'text.primary',
                                        '&:hover': { bgcolor: 'primary.main', color: '#fff' },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={3.5}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1 }}>{t.footer.services.toUpperCase()}</Typography>
                        <Stack spacing={2}>
                            {services.map((item) => (
                                <Link
                                    key={item}
                                    href="#services"
                                    color="text.secondary"
                                    underline="none"
                                    sx={{ fontWeight: 500, '&:hover': { color: 'primary.main', pl: 1 }, transition: 'all 0.3s ease' }}
                                >
                                    {item}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={3.5}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, letterSpacing: 1 }}>{t.footer.quickLinks.toUpperCase()}</Typography>
                        <Stack spacing={2}>
                            {companyLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    color="text.secondary"
                                    underline="none"
                                    sx={{ fontWeight: 500, '&:hover': { color: 'primary.main', pl: 1 }, transition: 'all 0.3s ease' }}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.05)', mb: 6 }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        © {new Date().getFullYear()} BODI Sound Service. {t.footer.rights}
                    </Typography>
                    <Stack direction="row" spacing={4}>
                        <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}>{language === 'en' ? 'Terms' : 'விதிமுறைகள்'}</Link>
                        <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}>{language === 'en' ? 'Privacy' : 'தனியுரிமை'}</Link>
                        <Link href="#" color="text.secondary" underline="none" sx={{ fontSize: '0.875rem', '&:hover': { color: 'primary.main' } }}>{language === 'en' ? 'Cookies' : 'குக்கீகள்'}</Link>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
