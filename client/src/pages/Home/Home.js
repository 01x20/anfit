import React, { useEffect, useRef, useState } from "react";
import Axios from 'axios';
import {API_URL} from '../../Config';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import RenderTodoList from '../../components/common/TodoList/TodoList';

const RenderNoticeSlide = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const [noticeItems, setNoticeItems] = useState([]);

  const handleSwiperInit = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }

    Axios.get(`${API_URL}/posts`)
    .then(res => {
      const filteredNotices = res.data.filter((item) => item.notice === true);
      setNoticeItems(filteredNotices);
    })
    .catch((err) => {
      console.error('에러 발생: ', err);
    })
  }, []);


  return (
    <Swiper
      ref={swiperRef}
      modules={[Autoplay]}
      direction={"vertical"}
      loop={noticeItems.length > 1}
      autoplay={
        noticeItems.length > 1
          ? {
              delay: 5000,
              disableOnInteraction: false,
            }
          : false
      }
      className="notice-slide"
      onInit={handleSwiperInit}
    >
      {noticeItems.map((item) => (
        <SwiperSlide key={item.id} onClick={() => navigate(`/community/detail?id=${item.id}`)}>
          <div className="slide-inner">
            <div className="title dot">{item.postName}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const RenderPassSlide = () => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);
  const myId = "1";
  const [userPassInfo, setUserPassInfo] = useState([]);

  const handleSwiperInit = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  };

  const linkToPassDetail = (item) => {
    navigate(`/class-pass?passId=${item.id}`);
  }

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }

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

  return (
    <>
    <div className="box-title">나의 수강권</div>
    <Swiper
      slidesPerView={'auto'}
      ref={swiperRef}
      observer={true}
      observeParents={true}
      className="info-slide"
      onInit={handleSwiperInit}>
        {userPassInfo.map((item, index) => (
          <SwiperSlide onClick={() => linkToPassDetail(item)} key={index}>
            <div className="common-info-box">
              <div className="info-top">
                {item.state ?
                  (<p className="label-box blue">사용 중</p>) :
                  (<p className="label-box gray">사용 중지</p>)
                }
                {item.types && Array.isArray(item.types) &&
                  item.types.map((type, typeIndex) => (
                    <React.Fragment key={typeIndex}>
                    <p className="detail">{type.member} {type.type}</p>
                    <p className="detail">{type.membership}</p>
                    </React.Fragment>
                  ))
                }
                <div className="pass-name">{item.passName} {item.totalCount}회</div>
              </div>
              <div className="info-bottom">
                <p className="date">{item.limitDate}</p>
                <p className="num">잔여 <strong>{item.totalCount || 0}</strong>회</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
    );
};

const RenderResList = ({lists}) => {
  return (
    <ul className="reservation-list">
      {lists.map((list, index) => (
        <li key={index}>
          <div className="common-info-box">
            <div className="info-top">
              {list.labels.map((label, labelIndex) => (
                <React.Fragment key={labelIndex}>
                  <p className={`label-box ${label.color}`}>{label.text}</p>
                </React.Fragment>
              ))}
              {list.types.map((type, typeIndex) => (
                <React.Fragment key={typeIndex}>
                  <p className="detail">{type.group}</p>
                  <p className="detail">{type.membership}</p>
                </React.Fragment>
              ))}
              <div className="pass-name">{list.className}</div>
            </div>
            <div className="info-bottom">
              <p className="date">{list.date}</p>
              <strong className="num col-blue">{list.state}</strong>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

function Home() {

  useEffect(() => {
    import('./Home.css');
  }, []);

  const resList = [
    {
      labels: [
        {color: 'blue', text : '빙수 코치'}
      ],
      types: [
        {group : '1:1PT', membership : '횟수제'}
      ],
      className : '[텀블벅 전용] 비기너 패키지 PT 2회',
      date: '2024. 11. 13 (수) 18:30 ~ 19:20',
      state: '예약 완료'
    },
    {
      labels: [
        {color: 'blue', text : '다빈 코치'}
      ],
      types: [
        {group : '1:1PT', membership : '횟수제'}
      ],
      className : '[텀블벅 전용] 비기너 패키지 PT 2회',
      date: '2024. 11. 13 (수) 18:30 ~ 19:20',
      state: '예약 대기'
    },
  ];

  return (
    <>
      <RenderNoticeSlide />
      <div className="main-inner-box">
        <div className="quick-icon-list">
          <Link to="/" className="btn-quick btn0">목표 설정</Link>
          <Link to="/anfit-info" className="btn-quick btn1">안핏 안내</Link>
          <Link to="/" className="btn-quick btn2"></Link>
          <Link to="/" className="btn-quick btn3">예약하기</Link>
        </div>

        <RenderTodoList />
        <RenderPassSlide />

        <div className="box-title">
          <Link to="/" className="read-more">
            예약한 수업
          </Link>
        </div>
        <RenderResList lists={resList} />
    </div>
    </>
  );
}

export default Home;
