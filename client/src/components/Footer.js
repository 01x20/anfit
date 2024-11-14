import React from "react";

function Footer() {
  return (
    <footer className="footer">
        <ul className="footer-list">
            <li className="active"><button type="button" className="btn">홈</button></li>
            <li><button type="button" className="btn">수강권</button></li>
            <li><button type="button" className="btn">수업예약</button></li>
            <li><button type="button" className="btn">커뮤니티</button></li>
            <li><button type="button" className="btn">마이페이지</button></li>
        </ul>
    </footer>
  );
}

export default Footer;
