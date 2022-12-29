import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';

import Main from '../page/main/Main';
import Mypage from '../page/mypage/Mypage';
import EditPost from '../page/detail/EditPost';
import DetailPost from '../page/detail/DetailPost';
import CreatePost from '../page/detail/CreatePost';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/detailpost/:postId" element={<DetailPost />} />
        <Route path="/editpost/:postId" element={<EditPost />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}
