import React from "react";
import { useLocation } from 'react-router-dom';

import '../assets/styles/common.css';
import '../assets/styles/layout.css';

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const Layout = (prop) => {
  const location = useLocation();

  return (
    <div>
        <Header />
        <main className={
          location.pathname === '/' && '/anfit' ? 'contents-wrap main' : 'contents-wrap'
          }>
            {prop.children}
        </main>
        <Footer />
    </div>
  );
}

export default Layout;
