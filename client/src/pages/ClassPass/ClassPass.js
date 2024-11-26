import React from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ClassPassTop from "../../components/common/ClassPassTop/ClassPassTop";
import Tab from '../../components/common/Tab/Tab';
import Button from '../../components/common/Button/Button';
import HistoryList from "./HistoryList";

function ClassPass() {
  const navigate = useNavigate();

  useEffect(() => {
      import('./ClassPass.css');
  }, []);

  const historyArr = [
    {
      date: "2024년 11월 13일 (수)",
      lists: [
        {
          labels: [
            { text: "예약 취소", color: "gray" },
          ],
          classTime: "09 : 00 ~ 09 : 50",
          className: "빙수 코치",
        },
        {
          labels: [
            { text: "예약 취소", color: "gray" },
          ],
          classTime: "10 : 00 ~ 10 : 50",
          className: "빙수 코치",
        },
      ],
    },
    {
      date: "2024년 11월 15일 (금)",
      lists: [
        {
          labels: [
            { text: "사용 완료", color: "blue" },
          ],
          classTime: "09 : 00 ~ 09 : 50",
          className: "빙수 코치",
        },
      ],
    },
  ];

  //const historyArr = [];

  const tabArr = [
    {name : '수강권 상세', content : 
      <>
        <div className="pass-detail-box">
          <div className="pass-info-top">
            <strong className="name">[텀블벅 전용] 비기너 패키지 PT 2회</strong>
            <p className="detail">1:1PT</p>
            <p className="detail">횟수제</p>
          </div>
          <div className="pass-progress-box">
            <p className="info done">사용 완료 <strong>0</strong>회</p>
            <p className="info left-num">잔여 <strong>2</strong>회</p>
            <div className="bar"><p></p></div>
          </div>
          <div className="pass-info-bottom common-info-box">
            <div className="box">
              <p className="title">출석</p>
              <p className="num">0회</p>
            </div>
            <div className="box">
              <p className="title">결석</p>
              <p className="num">0회</p>
            </div>
            <div className="box">
              <p className="title">취소</p>
              <p className="num">0회</p>
            </div>
          </div>
        </div>
        <div className="common-notice-box">
          수업 예약은 <strong>10분 전</strong>까지 가능합니다.<br/>
          수업 <strong>취소 및 당일 예약 변경</strong>은 <strong>1시간 전</strong>까지 가능합니다.<br/>
          수업 시간 1시간 전, 예약 인원이 없을 경우<strong>폐강</strong>됩니다.<br/>
          1시간 전까지 예약 대기는 자동 예약됩니다.
        </div>
      </>
    },
    {
      name : '이용내역', content :
      <>
        <div className="history-filter">
            <button type="button" className="active">가까운 순</button>
            <button type="button">먼 순</button>
        </div>
        <HistoryList items={historyArr}/>
      </>
    }
  ];

  return (
      <>
        <ClassPassTop />
        <div className="box-title">나의 수강권</div>
        <div className="common-info-box">
          <div className="info-top">
            <p className="label-box blue">사용 중</p>
            <p className="detail">1:1PT</p>
            <p className="detail">횟수제</p>
            <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
          </div>
          <div className="info-bottom">
            <p className="date">2024. 11. 11 ~ 2024. 12. 10</p>
            <p className="num">잔여 2회</p>
          </div>
        </div>
        <Tab tabArr={tabArr} />
        <Button title={"수업 예약"} onClick={() =>navigate('/reservation')} />
      </>
  );
}

export default ClassPass;
