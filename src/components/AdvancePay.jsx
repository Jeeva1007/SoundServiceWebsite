import React from 'react';
import {
    Box, Container, Grid, Typography, Stack, Chip, Divider, useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import QrCodeIcon from '@mui/icons-material/QrCode2';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useLanguage } from '../context/LanguageContext';

const UPI_ID = 'jeevacse2003@okaxis';

const AdvancePay = () => {
    const theme = useTheme();
    const { language } = useLanguage();
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(UPI_ID);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const steps = language === 'en'
        ? [
            { num: '01', title: 'Scan QR Code', desc: 'Open any UPI app (GPay, PhonePe, Paytm) and scan the QR code.' },
            { num: '02', title: 'Enter Amount', desc: 'Enter your advance booking amount as agreed.' },
            { num: '03', title: 'Send Screenshot', desc: 'Share the payment screenshot to confirm your booking.' },
        ] : [
            { num: '01', title: 'QR குறியீடை ஸ்கேன் செய்யுங்கள்', desc: 'எந்த UPI ஆப்பையும் திறந்து (GPay, PhonePe, Paytm) QR குறியீடை ஸ்கேன் செய்யுங்கள்.' },
            { num: '02', title: 'தொகையை உள்ளிடுங்கள்', desc: 'ஒப்பந்தப்படி முன்பணமாக செலுத்த வேண்டிய தொகையை உள்ளிடுங்கள்.' },
            { num: '03', title: 'ஸ்கிரீன்ஷாட் அனுப்புங்கள்', desc: 'உங்கள் பதிவை உறுதிப்படுத்த கட்டண ஸ்கிரீன்ஷாட்டை பகிருங்கள்.' },
        ];

    return (
        <Box
            id="advance-pay"
            sx={{
                py: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden',
                bgcolor: 'background.default',
            }}
        >
            {/* Background glow */}
            <Box sx={{
                position: 'absolute', top: '20%', left: '10%',
                width: 400, height: 400, borderRadius: '50%',
                bgcolor: 'primary.main', opacity: 0.04, filter: 'blur(80px)', pointerEvents: 'none'
            }} />
            <Box sx={{
                position: 'absolute', bottom: '10%', right: '5%',
                width: 300, height: 300, borderRadius: '50%',
                bgcolor: '#f43f5e', opacity: 0.04, filter: 'blur(80px)', pointerEvents: 'none'
            }} />

            <Container maxWidth="lg">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Chip
                            icon={<QrCodeIcon />}
                            label={language === 'en' ? 'SECURE PAYMENT' : 'பாதுகாப்பான கட்டணம்'}
                            color="primary"
                            variant="outlined"
                            sx={{ mb: 3, fontWeight: 800, letterSpacing: 2, px: 2 }}
                        />
                        <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>
                            {language === 'en'
                                ? <>{`Advance `}<span className="text-gradient-primary">Booking</span>{` Pay`}</>
                                : <>{`முன்பதிவு `}<span className="text-gradient-primary">கட்டணம்</span></>
                            }
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', maxWidth: 560, mx: 'auto' }}>
                            {language === 'en'
                                ? 'Secure your event date with a quick UPI advance payment. Scan the QR or use the UPI ID below.'
                                : 'விரைவான UPI கட்டணம் மூலம் உங்கள் நிகழ்வு தேதியை உறுதிப்படுத்துங்கள்.'
                            }
                        </Typography>
                    </Box>
                </motion.div>

                <Grid container spacing={6} alignItems="center">
                    {/* QR Code Card */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Box sx={{
                                bgcolor: 'background.paper',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: 6,
                                p: { xs: 4, md: 5 },
                                boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
                                textAlign: 'center',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                {/* Top badge */}
                                <Chip
                                    icon={<VerifiedIcon sx={{ fontSize: 16 }} />}
                                    label={language === 'en' ? 'Verified UPI' : 'சரிபார்க்கப்பட்ட UPI'}
                                    size="small"
                                    color="success"
                                    sx={{ mb: 3, fontWeight: 700 }}
                                />

                                {/* QR Image */}
                                <Box sx={{
                                    width: { xs: 200, md: 240 },
                                    height: { xs: 200, md: 240 },
                                    mx: 'auto',
                                    mb: 3,
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    border: '4px solid',
                                    borderColor: 'primary.main',
                                    boxShadow: '0 8px 30px rgba(99,102,241,0.3)',
                                    bgcolor: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <img
                                        src="/assets/QR.png"
                                        alt="UPI QR Code - JEEVA CSE"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentNode.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#6366f1;font-size:14px;padding:16px;text-align:center"><span style="font-size:48px">📱</span><br/>Place QR image at<br/>/public/assets/upi_qr.png</div>';
                                        }}
                                    />
                                </Box>

                                <Divider sx={{ mb: 3, opacity: 0.1 }} />

                                {/* UPI ID copy */}
                                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                                    UPI ID
                                </Typography>
                                <Box
                                    onClick={handleCopy}
                                    sx={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        gap: 1, cursor: 'pointer',
                                        bgcolor: copied ? 'success.main' : 'rgba(99,102,241,0.08)',
                                        borderRadius: 3, px: 3, py: 1.5, transition: 'all 0.3s',
                                        border: '1px solid',
                                        borderColor: copied ? 'success.main' : 'rgba(99,102,241,0.2)',
                                        '&:hover': { bgcolor: 'rgba(99,102,241,0.15)' }
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 700, fontFamily: 'monospace', color: copied ? '#fff' : 'primary.main' }}
                                    >
                                        {copied ? (language === 'en' ? '✓ Copied!' : '✓ நகலெடுக்கப்பட்டது!') : UPI_ID}
                                    </Typography>
                                    {!copied && <ContentCopyIcon sx={{ fontSize: 16, color: 'primary.main', opacity: 0.7 }} />}
                                </Box>

                                <Typography variant="caption" sx={{ display: 'block', mt: 2, color: 'text.secondary' }}>
                                    {language === 'en' ? 'Scan to pay with any UPI app' : 'எந்த UPI ஆப் மூலமும் ஸ்கேன் செய்யுங்கள்'}
                                </Typography>

                                {/* Security badge */}
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3 }}>
                                    <SecurityIcon sx={{ fontSize: 16, color: 'success.main' }} />
                                    <Typography variant="caption" sx={{ color: 'success.main', fontWeight: 600 }}>
                                        {language === 'en' ? '100% Secure & Encrypted' : '100% பாதுகாப்பான கட்டணம்'}
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Steps */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                                {language === 'en' ? 'How to Pay?' : 'எப்படி செலுத்துவது?'}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 5, fontSize: '1rem' }}>
                                {language === 'en'
                                    ? 'Follow these simple steps to confirm your booking with an advance payment.'
                                    : 'முன்பணம் செலுத்தி உங்கள் பதிவை உறுதிப்படுத்த இந்த எளிய படிகளைப் பின்பற்றுங்கள்.'
                                }
                            </Typography>

                            <Stack spacing={4}>
                                {steps.map((step, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.15 }}
                                    >
                                        <Box sx={{
                                            display: 'flex', gap: 3, alignItems: 'flex-start',
                                            p: 3, borderRadius: 4,
                                            bgcolor: 'background.paper',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'translateX(8px)' }
                                        }}>
                                            <Box sx={{
                                                minWidth: 52, height: 52, borderRadius: 3,
                                                background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                boxShadow: '0 4px 15px rgba(99,102,241,0.35)'
                                            }}>
                                                <Typography variant="body2" sx={{ fontWeight: 900, color: '#fff' }}>
                                                    {step.num}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                    {step.title}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                                                    {step.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </motion.div>
                                ))}
                            </Stack>

                            {/* Note */}
                            <Box sx={{
                                mt: 4, p: 3, borderRadius: 4,
                                bgcolor: 'rgba(99,102,241,0.06)',
                                border: '1px solid rgba(99,102,241,0.15)'
                            }}>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                                    💡 {language === 'en'
                                        ? 'Minimum advance payment of ₹500 is required to confirm your booking. The remaining balance can be paid on the day of the event.'
                                        : 'உங்கள் பதிவை உறுதிப்படுத்த குறைந்தது ₹500 முன்பணம் செலுத்த வேண்டும். மீதமுள்ள தொகையை நிகழ்வு நாளில் செலுத்தலாம்.'
                                    }
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AdvancePay;
