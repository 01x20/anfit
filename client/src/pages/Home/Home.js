import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const RenderPassSlide = ({items}) => {
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const handleSwiperInit = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update();
    }
  }, [items]);

  return (
  <>
  <Swiper
    slidesPerView={'auto'}
    ref={swiperRef}
    observer={true}
    observeParents={true}
    className="info-slide"
    onInit={handleSwiperInit}>
      {items.map((item, index) => (
        <SwiperSlide onClick={() => navigate('/class-pass')} key={item.passName + index}>
          <div className="common-info-box">
            <div className="info-top">
              {item.state ?
                (<p className="label-box blue">사용 중</p>) :
                (<p className="label-box gray">사용 중지</p>)
              }
              {item.types.map((type, typeIndex) => (
                <React.Fragment key={typeIndex}>
                  <p className="detail">{type.group}</p>
                  <p className="detail">{type.membership}</p>
                </React.Fragment>
              ))}
              <div className="pass-name">{item.passName}</div>
            </div>
            <div className="info-bottom">
              <p className="date">{item.passLimit}</p>
              <p className="num">잔여 <strong>{item.passCount}</strong>회</p>
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

  const classPassList = [
    {
      state: true,
      types: [
        {
          group : "1:1PT",
          membership: "횟수제",
        }
      ],
      passName : "[텀블벅 전용] 비기너 패키지 PT 2회",
      passLimit : "2024. 11. 11 ~ 2024. 12. 10",
      passCount : "2",
    },
    {
      state: false,
      types: [
        {
          group : "1:1PT",
          membership: "횟수제",
        }
      ],
      passName : "[텀블벅 전용] 비기너 패키지 PT 2회",
      passLimit : "2024. 11. 11 ~ 2024. 12. 10",
      passCount : "2",
    }
  ];

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
      <Swiper
      modules={[Autoplay]}
      direction={'vertical'}
      loop={true}
      autoplay={{
        delay: 50000,
        disableOnInteraction: false
      }}
      className="notice-slide">
        <SwiperSlide>
        <div className="slide-inner">
            <div className="title dot">안핏(安fit) 수강료 안내 안핏(安fit) 수강료 안내 안핏(安fit) 수강료 안내</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-inner">
            <div className="title dot">안핏(安fit) 수강료 안내 2</div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="quick-icon-list">
        <Link to="/" className="btn-quick btn0">습관 만들기</Link>
        <Link to="/anfit-info" className="btn-quick btn1">안핏 안내</Link>
        <Link to="/class-pass" className="btn-quick btn2">수강권 정보</Link>
        <Link to="/" className="btn-quick btn3">예약하기</Link>
      </div>

      <div className="box-title">오늘의 목표</div>
      <div className="todo-box">
        <div className="check-box">
          <label htmlFor="Chk01" className="label">
            <input type="checkbox" id="Chk01" name="todoList" />
            <div className="inp"></div>
            <div className="text">해야 할 일 1</div>
          </label>
        </div>
        <div className="check-box">
          <label htmlFor="Chk02" className="label">
            <input type="checkbox" id="Chk02" name="todoList" />
            <div className="inp"></div>
            <div className="text">해야 할 일 2</div>
          </label>
        </div>
      </div>

      <div className="box-title">나의 수강권</div>
      <RenderPassSlide items={classPassList} />

      <div className="box-title">
        예약한 수업
        <Link to="/" className="read-more"></Link>
      </div>
      <RenderResList lists={resList} />
    </>
  );
}

export default Home;
