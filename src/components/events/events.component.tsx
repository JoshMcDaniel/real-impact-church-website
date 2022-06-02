import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AllEvents from './all-events.component';
import SelectedEvent from './selected-event.component';

export type OrgEvent = {
  _id: string;
  name: string;
  route: string;
  description: string;
  imageUrl: string;
  date: string;
  time: string;
  location: string;
};

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
