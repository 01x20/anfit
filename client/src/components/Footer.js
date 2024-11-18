import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
        <ul className="footer-list">
            <li className="btn-box0">
              <Link to ="/" className={
              location.pathname === '/' ||
              location.pathname === '/anfit-info'
              ? 'active btn'
              : 'btn'}>홈
              </Link>
            </li>
            <li className="btn-box1">
              <Link to ="/class-pass" className={
              location.pathname === '/class-pass'
              ? 'active btn'
              : 'btn'}>수강권
              </Link>
            </li>
            <li className="btn-box2">
              <Link to ="/reservation" className={
              location.pathname === '/reservation'
              ? 'active btn'
              : 'btn'}>수업예약
              </Link>
            </li>
            <li className="btn-box3">
              <Link to ="/community" className={
              location.pathname === '/community'
              ? 'active btn'
              : 'btn'}>커뮤니티
              </Link>
            </li>
            <li className="btn-box4">
              <Link to ="/mypage" className={
              location.pathname === '/mypage'
              ? 'active btn'
              : 'btn'}>마이페이지
              </Link>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
