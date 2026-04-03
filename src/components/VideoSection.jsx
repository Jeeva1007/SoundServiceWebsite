import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const FullScreenVideoItem = ({ src, title, subtitle, color, overline }) => {
    const videoRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.6 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.play().catch(() => console.log('Autoplay blocked'));
        } else if (videoRef.current) {
            videoRef.current.pause();
        }
    }, [isVisible]);

    return (
        <Box
            sx={{
                height: { xs: '50vh', md: '70vh' },
                width: '100%',
                position: 'relative',
                overflow: 'hidden',
                background: '#000'
            }}
        >
            <video
                ref={videoRef}
                src={src}
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: isVisible ? 1 : 0.4,
                    transition: 'opacity 1.5s ease',
                    filter: 'brightness(110%)'
                }}
                onTimeUpdate={(e) => {
                    if (e.target.currentTime >= 25) {
                        e.target.currentTime = 0;
                        e.target.play().catch(() => { });
                    }
                }}
            />
            {/* Cinematic Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.4) 0%, transparent 40%, rgba(15, 23, 42, 0.9) 100%)',
                    zIndex: 1
                }}
            />

            {/* Content overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: { xs: '5%', md: '10%' },
                    zIndex: 2,
                    maxWidth: '900px'
                }}
            >
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <Typography
                                variant="overline"
                                sx={{
                                    color: color,
                                    fontWeight: 800,
                                    letterSpacing: 8,
                                    mb: 2,
                                    display: 'block',
                                    textShadow: `0 0 20px ${color}40`
                                }}
                            >
                                {overline}
                            </Typography>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 900,
                                    color: '#fff',
                                    fontSize: { xs: '3rem', md: '6rem' },
                                    mb: 2,
                                    lineHeight: 1,
                                    letterSpacing: -2
                                }}
                            >
                                {title}
                            </Typography>
                            <Box sx={{ width: 100, height: 4, bgcolor: color, mb: 3, borderRadius: 2 }} />
                            <Typography
                                variant="h5"
                                sx={{
                                    color: 'rgba(255,255,255,0.7)',
                                    fontWeight: 400,
                                    fontSize: { xs: '1.1rem', md: '1.6rem' },
                                    maxWidth: '600px'
                                }}
                            >
                                {subtitle}
                            </Typography>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Box>
        </Box>
    );
};

const VideoSection = () => {
    const { t } = useLanguage();
    const videos = [
        {
            src: "/assets/Videos/videoplayback.mp4",
            title: t.experience.vid1.title,
            subtitle: t.experience.vid1.sub,
            color: "#6366f1"
        },
        {
            src: "/assets/Videos/videoplayback (1).mp4",
            title: t.experience.vid2.title,
            subtitle: t.experience.vid2.sub,
            color: "#f43f5e"
        },
        {
            src: "/assets/Videos/New_House_warming_function_lighting_decoration_svv_lights_audios_Dharapuram_lightings_1080P.mp4",
            title: t.experience.vid3.title,
            subtitle: t.experience.vid3.sub,
            color: "#f59e0b"
        }
    ];

    return (
        <Box id="video-experience" sx={{ width: '100%', bgcolor: 'background.default', pb: 10 }}>
            {videos.map((video, index) => (
                <Box key={index} sx={{ mb: index !== videos.length - 1 ? 4 : 0 }}>
                    <FullScreenVideoItem
                        src={video.src}
                        title={video.title}
                        subtitle={video.subtitle}
                        color={video.color}
                        overline={t.experience.title}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default VideoSection;
