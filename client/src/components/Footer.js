import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../Config';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const myId = "1";
  const location = useLocation();
  const [classPassPath, setClassPassPath] = useState([]);

  const homePaths = ['/', '/anfit-info', '/anfit'];
  const classPaths = ['class-pass'];
  const reservPaths = ['reservation'];
  const commuPaths = ['community'];
  const mypagePaths = ['/mypage'];

  return (
    <footer className="footer">
        <ul className="footer-list">
            <li className="btn-box0">
              <Link to ="/" className={
                homePaths.includes(location.pathname)
                ? 'active btn'
                : 'btn'}>홈
              </Link>
            </li>
            <li className="btn-box1">
              <Link to ="/" className="btn">수정 필요</Link>
            </li>
            <li className="btn-box3">
              <Link to ="/community" className={
                location.pathname.includes(commuPaths)
                ? 'active btn'
                : 'btn'}>커뮤니티
                </Link>
            </li>
            <li className="btn-box2">
              <Link to ="/reservation" className={
                location.pathname.includes(reservPaths)
                ? 'active btn'
                : 'btn'}>수업예약
              </Link>
            </li>
            <li className="btn-box4">
              <Link to ="/mypage" className={
                location.pathname.includes(mypagePaths)
                ? 'active btn'
                : 'btn'}>마이페이지
                </Link>
            </li>
        </ul>
    </footer>
  );
}

export default Footer;
