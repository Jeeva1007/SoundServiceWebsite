import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Snackbar, Alert, Container, Grid, Typography, Stack, IconButton, useTheme, Card } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import { useLanguage } from "../context/LanguageContext";

const ContactForm = () => {
  const theme = useTheme();
  const { t, language } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init("wac8a4XMO4GKROcUP");
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wpd71kk",
        "template_u5d8rw5",
        {
          from_name: form.name,
          from_email: form.email,
          user_email: form.email,
          phone: form.phone,
          message: form.message,
          reply_to: form.email,
        }
      )
      .then((res) => {
        setOpen(true);
        setLoading(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED:", err);
        setLoading(false);
      });
  };

  const contactInfo = [
    { icon: <PhoneIcon />, label: t.contact.call, value: "+91 80988 32247", sub: t.contact.available, color: "#6366f1" },
    { icon: <EmailIcon />, label: t.contact.email, value: "contact@bodisounds.com", sub: t.contact.response, color: "#f43f5e" },
    { icon: <LocationOnIcon />, label: t.contact.visit, value: language === 'en' ? 'Elambalur, Perambalur' : 'எலம்பலூர், பெரம்பலூர்', sub: language === 'en' ? 'Tamil Nadu, 621212' : 'தமிழ்நாடு, 621212', color: "#f59e0b" },
  ];

  return (
    <Box id="contact" sx={{ py: 5, position: 'relative', overflow: 'hidden', bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Left Side: Contact Info */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="overline" color="primary" sx={{ fontWeight: 800, letterSpacing: 4 }}>
                {t.contact.overline}
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
                {t.contact.title1} <span className="text-gradient-primary">{t.contact.title2}</span> {t.contact.title3}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
                {t.contact.desc}
              </Typography>

              <Stack spacing={4}>
                {contactInfo.map((info, index) => (
                  <Stack key={index} direction="row" spacing={3} alignItems="center">
                    <Box sx={{
                      width: 60, height: 60, borderRadius: 3, bgcolor: `${info.color}15`,
                      color: info.color, display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, opacity: 0.6 }}>{info.label}</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>{info.value}</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>{info.sub}</Typography>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Side: Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{
                p: { xs: 4, md: 6 },
                bgcolor: 'background.paper',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.3)',
                position: 'relative'
              }}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={3}>
                    <TextField
                      fullWidth
                      label={t.contact.form.name}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.paper',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                          border: '1px solid rgba(0,0,0,0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t.contact.form.phone}
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.paper',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                          border: '1px solid rgba(0,0,0,0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t.contact.form.email}
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.paper',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                          border: '1px solid rgba(0,0,0,0.05)',
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label={t.contact.form.details}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 4,
                          bgcolor: 'background.paper',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                          border: '1px solid rgba(0,0,0,0.05)',
                        }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={loading}
                      endIcon={!loading && <SendIcon />}
                      sx={{ py: 2.5, borderRadius: 4, fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(99,102,241,0.3)' }}
                    >
                      {loading ? t.contact.form.sending : t.contact.form.send}
                    </Button>
                  </Stack>
                </form>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="success"
          variant="filled"
          sx={{ width: '100%', borderRadius: 3, fontWeight: 600 }}
        >
          {t.contact.form.success}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;