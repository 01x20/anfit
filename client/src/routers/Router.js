import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./Layout";

import Home from "../pages/Home/Home";
import ClassPass from "../pages/ClassPass/ClassPass";
import ClassReserv from "../pages/ClassReserv/ClassReserv";
import Community from "../pages/Community/Community";
import Mypage from "../pages/Mypage/Mypage";
import AnfitInfo from '../pages/Home/AnfitInfo/AnfitInfo';

const Router = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/anfit-info" element={<AnfitInfo />} />
                    <Route path="class-pass" element={<ClassPass />} />
                    <Route path="reservation" element={<ClassReserv />} />
                    <Route path="community" element={<Community />} />
                    <Route path="mypage" element={<Mypage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;