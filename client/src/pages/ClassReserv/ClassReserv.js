import React from "react";
import { useEffect } from "react";

import ClassPassTop from "../../components/common/ClassPassTop/ClassPassTop";
import Tab from '../../components/common/Tab/Tab';
import Calendar from '../../components/common/Calendar/Calendar';
import AbleReservation from './AbleReservation';

function ClassReserv() {
  useEffect(() => {
      import('./ClassReserv.css');
  }, []);

  const ableReservBs = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00"];
  const ableReservDb = ["09:00","09:30","10:00","10:30","11:00","11:30","12:00"];

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
}

export default ClassReserv;
