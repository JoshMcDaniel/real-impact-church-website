import * as React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home.component';
import Events from './components/events/events.component';
import EditEvent from './components/events/edit-events.component';
import CreateEvent from './components/events/create-events.component';
import ResponsiveAppBar from './components/topbar/responsive-app-bar.component';
import { AppConfigContext } from './contexts/app-config/app-config.service';
import appConfig from './contexts/app-config/config.json';
import Sermons from './components/sermons/sermons.component';
import AboutUs from './components/about/about-us.component';
import OnlineGiving from './components/online-giving/online-giving.component';
import ContactUs from './components/contact/contact-us.component';
import { ThemeProvider } from '@mui/material';
import { theme } from './Theme';

function App() {
  return (
    <AppConfigContext.Provider value={appConfig}>
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/sermons" exact element={<Sermons />} />
              <Route path="/about" exact element={<AboutUs />} />
              <Route path="/events" exact element={<Events />} />
              <Route path="/events/edit" exact element={<EditEvent />} />
              <Route path="/events/create" exact element={<CreateEvent />} />
              <Route path="/online-giving" exact element={<OnlineGiving />} />
              <Route path="/contact" exact element={<ContactUs />} />
            </Routes>
          </ThemeProvider>
        </React.Fragment>
      </BrowserRouter>
    </AppConfigContext.Provider>
  );
}

export default App;
