import React from "react";
import { useState } from "react";

import Modal from '../Modals/Modal';

import './ClassPassTop.css';

function ClassPassTop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
      <>
        <div className="class-pass-info-box">
            <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
            <button type="button" className="btn-chg" onClick={openModal}>변경</button>
        </div>
        <Modal isOpen={isModalOpen} title="수강권 변경" closeModal={closeModal}>
          <ul className="pass-list">
            <li className="common-info-box">
              <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
              <div class="info-bottom">
                <p class="date">2024. 11. 11 ~ 2024. 12. 10</p>
                <p class="num">잔여 2회</p>
              </div>
            </li>
            <li className="common-info-box">
              <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
              <div className="info-bottom">
                <p className="date">2024. 11. 11 ~ 2024. 12. 10</p>
                <p className="num">잔여 2회</p>
              </div>
            </li>
          </ul>
        </Modal>
      </>
  );
}

export default ClassPassTop;
