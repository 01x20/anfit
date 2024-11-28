import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./Layout";

import Home from "../pages/Home/Home";
import ClassPass from "../pages/ClassPass/ClassPass";
import ClassReserv from "../pages/ClassReserv/ClassReserv";
import Community from "../pages/Community/Community";
import CommunityDetail from "../pages/Community/Detail/Detail";
import CommunityWrite from "../pages/Community/Write/Write";
import Mypage from "../pages/Mypage/Mypage";
import AnfitInfo from '../pages/Home/AnfitInfo/AnfitInfo';

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/anfit" element={<Home />} />
                    <Route path="/class-pass" element={<ClassPass />} />
                    <Route path="/reservation" element={<ClassReserv />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/community/detail" element={<CommunityDetail />} />
                    <Route path="/community/write" element={<CommunityWrite />} />
                    <Route path="/community/edit" element={<CommunityWrite />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/anfit-info" element={<AnfitInfo />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;