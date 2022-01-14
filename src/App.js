import * as React from 'react';
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/events/home.component';
import Events from './components/events/events.component';
import EditEvent from './components/events/edit-events.component';
import CreateEvent from './components/events/create-events.component';
import ResponsiveAppBar from './components/topbar/responsive-app-bar.component';
import { AppConfigContext } from './contexts/app-config/app-config.service';
import appConfig from './contexts/app-config/config.json';

function App() {
  return (
    <AppConfigContext.Provider value={appConfig}>
      <BrowserRouter>
        <React.Fragment>
          <CssBaseline />
          <ResponsiveAppBar />
          <br />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/events" exact element={<Events />} />
            <Route path="/events/edit" exact element={<EditEvent />} />
            <Route path="/events/create" exact element={<CreateEvent />} />
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </AppConfigContext.Provider>
  );
}

export default App;
