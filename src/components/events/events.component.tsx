import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllEvents from './all-events.component';
import SelectedEvent from './selected-event.component';

export default function Events() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllEvents />} />
        <Route path="*" element={<SelectedEvent />} />
      </Routes>
    </div>
  );
}
