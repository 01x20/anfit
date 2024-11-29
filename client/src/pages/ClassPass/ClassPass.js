import React, { useEffect, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../../Config';
import { useSearchParams, useNavigate } from 'react-router-dom';

import ClassPassTop from "../../components/common/ClassPassTop/ClassPassTop";
import Tab from '../../components/common/Tab/Tab';
import Button from '../../components/common/Button/Button';
import HistoryList from "./HistoryList";

function ClassPass() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const myId = "1";
  const passId = searchParams.get('passId');
  const [passDetail, setPassDetail] = useState(null);
  const [barWidth, setBarWidth] = useState('');

  useEffect(() => {
    import('./ClassPass.css');

    if(passId) {
      Axios.get(`${API_URL}/userClassPassInfo`)
      .then((res) => {
        const userData = res.data.find((user) => user.usrId === myId);
        if (userData && Array.isArray(userData.info)) {
          const detail = userData.info.find((info) => info.id === passId);
          if (detail) {
            setPassDetail(detail);
          } else {
            console.log("해당 정보를 찾을 수 없습니다.");
          }
        } else {
          console.log("사용자 데이터를 찾을 수 없습니다.");
        }
      })
      .catch((err) => {
        console.error("API 호출 오류: ", err);
      });
    }
  }, [passId]);

  useEffect(() => {
    if (passDetail && passDetail.totalCount > 0) {
      const calcWidth = passDetail.useCount / passDetail.totalCount;
      const widthRes = calcWidth * 100;
      setBarWidth(widthRes);
    }
  }, [passDetail]);

  if (!passDetail) {
    return <div>로딩 중...</div>;
  }

  const SelectedPassInfo = () => {
    return (
      <>
      <div className="box-title">나의 수강권</div>
      <div className="common-info-box">
        <div className="info-top">
          {passDetail.state ? 
          (<p className="label-box blue">사용 중</p>)
          : (<p className="label-box gray">사용 중지</p>)}

          {passDetail.types && Array.isArray(passDetail.types) &&
            passDetail.types.map((type, typeIndex) => (
              <React.Fragment key={typeIndex}>
              <p className="detail">{type.member} {type.type}</p>
              <p className="detail">{type.membership}</p>
              </React.Fragment>
            ))
          }
          <div className="pass-name">{passDetail.passName} {passDetail.totalCount}회</div>
        </div>
        <div className="info-bottom">
          <p className="date">{passDetail.limitDate}</p>
          <p className="num">잔여 <strong>{passDetail.totalCount}</strong>회</p>
        </div>
      </div>
      </>
    );
  }

  const RenderPassInfo = () => {

    const barStyle = {
      width: `${barWidth}%`,
    }

    return (
      <>
        <div className="pass-detail-box">
          <div className="pass-info-top">
            <strong className="name">{passDetail.passName} {passDetail.totalCount}회</strong>
            {passDetail.types && Array.isArray(passDetail.types) &&
              passDetail.types.map((type, typeIndex) => (
                <React.Fragment key={typeIndex}>
                <p className="detail">{type.member} {type.type}</p>
                <p className="detail">{type.membership}</p>
                </React.Fragment>
              ))
            }
          </div>
          <div className="pass-progress-box">
            <p className="info done">사용 완료 <strong>{passDetail.useCount || 0}</strong>회</p>
            <p className="info left-num">잔여 <strong>{passDetail.totalCount || 0}</strong>회</p>
            <div className="bar">
              <p style={barStyle}></p>
            </div>
          </div>
          <div className="pass-info-bottom common-info-box">
            <div className="box">
              <p className="title">출석</p>
              <p className="num">{passDetail.useCount || 0}회</p>
            </div>
            <div className="box">
              <p className="title">결석</p>
              <p className="num">{passDetail.noShowCount || 0}회</p>
            </div>
            <div className="box">
              <p className="title">취소</p>
              <p className="num">{passDetail.cancelCount || 0}회</p>
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
    );
  }

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

  const tabArr = [
    {name : '수강권 상세', content :<RenderPassInfo />},
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
        <SelectedPassInfo />
        <Tab tabArr={tabArr} />
        <Button title={"수업 예약"} onClick={() =>navigate('/reservation')} />
      </>
  );
}

export default ClassPass;
