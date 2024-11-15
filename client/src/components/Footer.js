import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
        <ul className="footer-list">
            <li className="btn-box0 active"><button onClick={() => { navigate('/'); }} type="button" className="btn">홈</button></li>
            <li className="btn-box1"><button onClick={() => { navigate('/class-pass'); }} type="button" className="btn">수강권</button></li>
            <li className="btn-box2"><button onClick={() => { navigate('/reservation'); }} type="button" className="btn">수업예약</button></li>
            <li className="btn-box3"><button onClick={() => { navigate('/community'); }} type="button" className="btn">커뮤니티</button></li>
            <li className="btn-box4"><button onClick={() => { navigate('/mypage'); }} type="button" className="btn">마이페이지</button></li>
        </ul>
    </footer>
  );
}

export default Footer;
