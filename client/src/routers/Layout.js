import React from "react";

import '../assets/styles/common.css';
import '../assets/styles/layout.css';

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const Layout = (prop) => {
  return (
    <div>
        <Header />
        <main className="contents-wrap">
            {prop.children}
        </main>
        <Footer />
    </div>
  );
}

export default Layout;
