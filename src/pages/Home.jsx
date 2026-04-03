import React from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import VideoSection from '../components/VideoSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Location from '../components/Location';
import Founders from '../components/Founders';
import About from '../components/About';

const Home = () => {
    return (
        <Box>
            <HeroSection />
            <About />
            <Services />
            <VideoSection />
            <Gallery />
            <ContactForm />
            <Founders />
            <Location />
            <Footer />
        </Box>
    );
};

export default Home;
