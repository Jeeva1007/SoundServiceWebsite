import React, { useState } from 'react';
import {
    AppBar, Toolbar, Typography, Button, IconButton,
    Drawer, List, ListItem, Box, Container, Tooltip,
    Menu, MenuItem, Collapse, useTheme, Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ toggleTheme, mode }) => {
    const { language, toggleLanguage, t } = useLanguage();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [langAnchorEl, setLangAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const langOpen = Boolean(langAnchorEl);
    const [mobileContactOpen, setMobileContactOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
    const handleMenuClose = () => setAnchorEl(null);
    const handleLangOpen = (event) => setLangAnchorEl(event.currentTarget);
    const handleLangClose = () => setLangAnchorEl(null);
    const handleMobileContactClick = () => setMobileContactOpen(!mobileContactOpen);

    const navItems = [
        { name: t.nav.home, link: '#home' },
        { name: t.nav.about, link: '#about' },
        { name: t.nav.services, link: '#services' },
        { name: t.nav.experience, link: '#video-experience' },
        { name: t.nav.gallery, link: '#gallery' },
    ];

    const contactItems = [
        { name: t.nav.inquire || 'Inquire Now', link: '#contact' },
        { name: t.nav.location, link: '#location' },
        { name: t.nav.founders, link: '#founders' },
    ];

    const navBtnStyle = {
        color: 'text.primary',
        fontWeight: 600,
        fontSize: '0.95rem',
        mx: 1,
        px: 2,
        borderRadius: 2,
        '&:hover': { color: 'primary.main', bgcolor: 'rgba(99,102,241,0.05)' },
        transition: 'all 0.3s ease'
    };

    const drawer = (
        <Box sx={{ p: 4, pt: 8, height: '100%', bgcolor: 'background.default' }}>
            <img src="/assets/logo.png" alt="BODI Sound Logo" style={{ maxWidth: '200px', margin: '0 auto 24px', display: 'block' }} />
            <List spacing={2}>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding sx={{ mb: 1 }}>
                        <Button
                            fullWidth
                            href={item.link}
                            onClick={handleDrawerToggle}
                            sx={{
                                color: 'text.primary',
                                py: 2,
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: 3,
                                justifyContent: 'flex-start',
                                px: 3,
                                '&:hover': { bgcolor: 'primary.main', color: '#fff' }
                            }}
                        >
                            {item.name}
                        </Button>
                    </ListItem>
                ))}

                <ListItem disablePadding sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                    <Button
                        fullWidth
                        onClick={handleMobileContactClick}
                        sx={{
                            color: 'text.primary',
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            borderRadius: 3,
                            justifyContent: 'space-between',
                            px: 3,
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        {t.nav.connect} {mobileContactOpen ? <ExpandLess /> : <ExpandMore />}
                    </Button>
                    <Collapse in={mobileContactOpen} timeout="auto" unmountOnExit sx={{ width: '100%' }}>
                        <List component="div" disablePadding sx={{ mt: 1 }}>
                            {contactItems.map((item) => (
                                <ListItem key={item.name} disablePadding>
                                    <Button
                                        fullWidth
                                        href={item.link}
                                        onClick={handleDrawerToggle}
                                        sx={{
                                            color: 'text.secondary',
                                            py: 1.5,
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            justifyContent: 'flex-start',
                                            pl: 5,
                                            '&:hover': { color: 'primary.main' }
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    </Collapse>
                </ListItem>
            </List>

            <Box sx={{ mt: 'auto', pt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
                <IconButton onClick={() => toggleLanguage('en')} sx={{ bgcolor: language === 'en' ? 'primary.main' : 'background.paper', color: language === 'en' ? 'white' : 'text.primary' }}>
                    EN
                </IconButton>
                <IconButton onClick={() => toggleLanguage('ta')} sx={{ bgcolor: language === 'ta' ? 'primary.main' : 'background.paper', color: language === 'ta' ? 'white' : 'text.primary' }}>
                    தமிழ்
                </IconButton>
                <IconButton onClick={toggleTheme} sx={{ bgcolor: 'background.paper', p: 2 }}>
                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
            </Box>
        </Box>
    );

    return (
        <>
            <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                <AppBar position="fixed">
                    <Container maxWidth="xl">
                        <Toolbar sx={{ justifyContent: 'space-between', minHeight: { xs: 56, md: 64 }, py: 0 }}>
                            <Box
                                component="a"
                                href="#home"
                                sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                            >
                                <img src="/assets/logo.png" alt="BODI Sound Logo" style={{ height: '48px', objectFit: 'contain' }} />
                            </Box>

                            {/* Desktop Nav */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                                {navItems.map((item) => (
                                    <Button key={item.name} href={item.link} sx={navBtnStyle}>
                                        {item.name}
                                    </Button>
                                ))}

                                <Box
                                    onMouseEnter={handleMenuOpen}
                                    onMouseLeave={handleMenuClose}
                                    sx={{ position: 'relative' }}
                                >
                                    <Button
                                        endIcon={<KeyboardArrowDownIcon />}
                                        sx={{ ...navBtnStyle, mr: 2 }}
                                    >
                                        {t.nav.connect}
                                    </Button>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleMenuClose}
                                        disablePortal
                                        disableScrollLock
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                                        MenuListProps={{ onMouseLeave: handleMenuClose }}
                                        sx={{
                                            pointerEvents: 'none',
                                            '& .MuiPaper-root': {
                                                pointerEvents: 'auto',
                                                mt: 1,
                                                minWidth: 200,
                                                bgcolor: 'background.paper',
                                                backgroundImage: 'none',
                                                '& .MuiMenuItem-root': {
                                                    py: 1.5,
                                                    px: 3,
                                                    fontWeight: 600,
                                                    '&:hover': { color: 'primary.main', bgcolor: 'rgba(99,102,241,0.05)' }
                                                }
                                            }
                                        }}
                                    >
                                        {contactItems.map((item) => (
                                            <MenuItem key={item.name} component="a" href={item.link} onClick={handleMenuClose}>
                                                {item.name}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>

                                <Box sx={{ height: 30, width: 1, bgcolor: 'rgba(0,0,0,0.1)', mx: 2 }} />

                                {/* Language Selector */}
                                <IconButton onClick={handleLangOpen} sx={{ color: 'text.primary', ml: 1 }}>
                                    <LanguageIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={langAnchorEl}
                                    open={langOpen}
                                    onClose={handleLangClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                >
                                    <MenuItem onClick={() => { toggleLanguage('en'); handleLangClose(); }}>English</MenuItem>
                                    <MenuItem onClick={() => { toggleLanguage('ta'); handleLangClose(); }}>தமிழ் (Tamil)</MenuItem>
                                </Menu>

                                <IconButton onClick={toggleTheme} sx={{ color: 'text.primary', ml: 1 }}>
                                    {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="#contact"
                                    sx={{ ml: 3, px: 4, borderRadius: 3, fontWeight: 800 }}
                                >
                                    {t.nav.book}
                                </Button>
                            </Box>

                            {/* Mobile Controls */}
                            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
                                <IconButton onClick={handleDrawerToggle}>
                                    <MenuIcon sx={{ color: 'text.primary', fontSize: 32 }} />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </motion.div>

            <Toolbar />

            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                anchor="right"
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: '100%', maxWidth: 320 },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;
