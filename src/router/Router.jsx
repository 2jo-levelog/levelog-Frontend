import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../page/main/Main';
import Mypage from '../page/mypage/Mypage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}
