import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../../Config';

import ClassPassTop from "../../components/common/ClassPassTop/ClassPassTop";
import Tab from '../../components/common/Tab/Tab';
import Calendar from '../../components/common/Calendar/Calendar';
import AbleReservation from './AbleReservation';
import AbleGroupReservation from './AbleGroupReservation';

function ClassReserv() {
  const myId = "1";
  const [userPassInfo, setUserPassInfo] = useState([]);
  const type = 'group';
  
  useEffect(() => {
      import('./ClassReserv.css');

    Axios.get(`${API_URL}/userClassPassInfo`)
    .then((res) => {
      const userData = res.data.find((user) => user.usrId === myId);
      if(userData && Array.isArray(userData.info)) {
        setUserPassInfo(userData.info);

      } else {
        console.log("데이터 조회 실패");
      }
    })
  }, []);

  const ableReservBs = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00"];
  const ableReservDb = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00"];
  const ableReservGroup = [
    {
      time : "06 : 30 ~ 07 : 20",
      labels : [
        {color: "blue",
        text : "안핏 코치"}
      ],
      className : "컨디셔닝",
      state: "able",
      classNum : "4",
      nowReserv: "0",
    },
    {
      time : "06 : 30 ~ 07 : 20",
      labels : [
        {color: "blue",
        text : "안핏 코치"}
      ],
      className : "그룹 운동1",
      state: "end",
      classNum : "4",
      nowReserv: "2",
    }
  ];

  const tabArr = [
    {name : '빙수 코치', content:
      <>
        <AbleReservation times={ableReservBs} />
      </>
    },
    {name : '다빈 코치', content:
      <>
        <AbleReservation times={ableReservDb} />
      </>
    }
  ];

  if(type === 'pt') {
    return (
      <div className="reserv-wrap">
        <ClassPassTop />
        <div className="box-title">수업 예약</div>
        <Calendar/>
        <div className="reservation-list">
          <Tab tabArr={tabArr} />
        </div>
      </div>
    );
  } else if (type === 'group') {
    return (
      <div className="reserv-wrap">
        <ClassPassTop />
        <div className="box-title">수업 예약</div>
        <Calendar/>
        <div className="reservation-list">
          <AbleGroupReservation times={ableReservGroup} />
        </div>
      </div>
    );
  }
}

export default ClassReserv;
