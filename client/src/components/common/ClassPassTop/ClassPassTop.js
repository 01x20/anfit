import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../../../Config';
import { useSearchParams, useNavigate } from 'react-router-dom';

import Modal from '../Modals/Modal';

function ClassPassTop() {
  const myId = "1";
  const navigate = useNavigate();
  const [userPassInfo, setUserPassInfo] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const selectedPassId = searchParams.get('passId');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() =>{
    import('./ClassPassTop.css');
    
    Axios.get(`${API_URL}/userClassPassInfo`)
    .then((res) => {
      const userData = res.data.find((user) => user.usrId === myId);
      if(userData && Array.isArray(userData.info)) {
        setUserPassInfo(userData.info);

        if (!selectedPassId) {
          setSelected(userData.info[0]);
        } else {
          // URL에 passId가 있는 경우 해당 항목 선택
          const detail = userData.info.find((info) => info.id === selectedPassId);
          if (detail) {
            setSelected(detail);
          } else {
            console.log("정보를 찾을 수 없습니다");
          }
        }
      } else {
        console.log("데이터 조회 실패");
      }
    })

  }, [selectedPassId]);

  const selectMyPass = (item) => {
    navigate(`?passId=${item.id}`);
    setSelected(item);
    setIsModalOpen(false);
  }

  return (
      <>
        <div className="class-pass-info-box">
        {selected ? (
          <div className="pass-name">{selected.passName} {selected.totalCount}회</div>
        ) : userPassInfo.length > 0 ? (
          <div className="pass-name">{userPassInfo[0].passName} {userPassInfo[0].totalCount}회</div>
        ) : (
          <div className="pass-name">수강권 정보가 없습니다.</div>
        )}
          <button type="button" className="btn-chg" onClick={openModal}>변경</button>
        </div>
        <Modal isOpen={isModalOpen} title="수강권 변경" closeModal={closeModal}>
          <ul className="pass-list">
            {userPassInfo.map((item, index) => (
            <li className="common-info-box" key={index} onClick={() => selectMyPass(item)}>
              <div className="pass-name">{item.passName} {item.totalCount}회</div>
              <div className="info-bottom">
                <p className="date">{item.limitDate}</p>
                <p className="num">잔여 <strong>{item.totalCount}</strong>회</p>
              </div>
            </li>
            ))}
          </ul>
        </Modal>
      </>
  );
}

export default ClassPassTop;
