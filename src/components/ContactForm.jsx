import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Snackbar, Alert, Container, Grid, Typography, Stack, IconButton, useTheme, Card } from "@mui/material";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const ContactForm = () => {
  const theme = useTheme();
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
          phone: form.phone,
          message: form.message,
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
    { icon: <PhoneIcon />, label: "Call Us", value: "+91 80988 32247", sub: "Available 24/7", color: "#6366f1" },
    { icon: <EmailIcon />, label: "Email Us", value: "contact@bodisounds.com", sub: "Quick Response", color: "#f43f5e" },
    { icon: <LocationOnIcon />, label: "Visit Us", value: "Elambalur, Perambalur", sub: "Tamil Nadu, 621212", color: "#f59e0b" },
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
                GET IN TOUCH
              </Typography>
              <Typography variant="h2" sx={{ mt: 1, mb: 3 }}>
                Ready to <span className="text-gradient-primary">Transform</span> Your Event?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 6, fontSize: '1.1rem', lineHeight: 1.8 }}>
                Whether it's a grand wedding or a corporate concert, we provide the technical
                excellence you need. Reach out today for a custom quote.
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
                      label="Full Name"
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
                          '&:hover': { bgcolor: '#f8fafc' }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
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
                          '&:hover': { bgcolor: '#f8fafc' }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address"
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
                          '&:hover': { bgcolor: '#f8fafc' }
                        }
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Event Details"
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
                          '&:hover': { bgcolor: '#f8fafc' }
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
                      {loading ? "Sending Message..." : "Send Inquiry"}
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
          Your message has been sent successfully! We'll contact you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm;