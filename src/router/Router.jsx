import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';

import Main from '../page/main/Main';
import Mypage from '../page/mypage/Mypage';
import DetailView from '../page/detail/EditView';
import EditView from '../page/detail/DetailView';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detail/" element={<DetailView />} />
        <Route path="/edit" element={<EditView />} />
      </Routes>
    </BrowserRouter>
  );
}
