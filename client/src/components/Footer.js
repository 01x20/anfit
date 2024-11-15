import React from "react";
import NavItem from "./NavItem";

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="footer-list">
            <NavItem to="/" text="홈" boxClass="btn-box0" />
            <NavItem to="/class-pass" text="수강권" boxClass="btn-box1" />
            <NavItem to="/reservation" text="수업예약" boxClass="btn-box2" />
            <NavItem to="/community" text="커뮤니티" boxClass="btn-box3" />
            <NavItem to="/mypage" text="마이페이지" boxClass="btn-box4" />
        </ul>
    </footer>
  );
}

export default Footer;
