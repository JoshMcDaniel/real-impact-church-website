import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AllMedia from './all-media.component';
import SelectedMedia from './selected-media.component';

export default function Media() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllMedia />} />
        <Route path="*" element={<SelectedMedia />} />
      </Routes>
    </div>
  );
}
