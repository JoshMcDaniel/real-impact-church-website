import * as React from 'react';
import './App.css';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.component';
import Events from './components/events/events.component';
import ResponsiveAppBar from './components/topbar/responsive-app-bar.component';
import About from './components/about/about.component';
import Giving from './components/giving/giving.component';
import Connect from './components/connect/connect.component';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './Theme';
import Media from './components/media/media.component';
import { Footer } from './components/footer/footer.component';
import Beliefs from './components/beliefs/beliefs.component';
import Staff from './components/staff/staff.component';
import { NotFound } from './components/not-found/not-found.component';
import ScrollToTop from './common/scroll-to-top';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          <ResponsiveAppBar />
          <Box className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/media/*" element={<Media />} />
              <Route path="/about" element={<About />} />
              <Route path="/events/*" element={<Events />} />
              <Route path="/giving" element={<Giving />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/beliefs" element={<Beliefs />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </ThemeProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
