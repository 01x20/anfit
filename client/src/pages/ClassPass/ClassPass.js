import React from "react";
import { useEffect } from 'react';

import ClassPassTop from "../../components/common/ClassPassTop/ClassPassTop";
import Tab from '../../components/common/Tab/Tab';

function ClassPass() {
  useEffect(() => {
      import('./ClassPass.css');
  }, []);

  const tabArr = [
    {name : '수강권 상세', content : <></>},
    {name : '이용내역', content : <></>}
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
      </>
  );
}

export default ClassPass;
