import React, { useState, useMemo } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { getTheme } from './theme';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Fab from '@mui/material/Fab';
import PhoneIcon from '@mui/icons-material/Phone';
import { motion } from 'framer-motion';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCall = () => {
    window.location.href = "tel:+918098832247";
  };

  return (
    <LanguageProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #f0f2f5 0%, #e0e6ed 100%)',
          color: '#0f172a'
        }}>
          <Navbar toggleTheme={toggleTheme} mode={mode} />
          <Home />

          {/* Floating Call Button */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              boxShadow: mode === 'dark'
                ? [
                  "0 0 20px rgba(232, 96, 36, 0.4)",
                  "0 0 40px rgba(232, 96, 36, 0.8)",
                  "0 0 20px rgba(232, 96, 36, 0.4)"
                ]
                : "0 4px 10px rgba(0,0,0,0.2)"
            }}
            transition={{
              scale: { delay: 1 },
              boxShadow: { repeat: Infinity, duration: 2 }
            }}
            style={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000, borderRadius: '50%' }}
          >
            <Fab
              color="secondary"
              aria-label="call"
              onClick={handleCall}
              sx={{
                '&:hover': {
                  boxShadow: '0 0 30px rgba(232, 96, 36, 0.8)',
                }
              }}
            >
              <PhoneIcon />
            </Fab>
          </motion.div>
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
