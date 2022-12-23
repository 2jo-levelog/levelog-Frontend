import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../page/main/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
