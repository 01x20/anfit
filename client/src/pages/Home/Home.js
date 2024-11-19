import React from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

import './home.css';

function Home() {
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
        <Link to="/" className="btn-quick btn2">수강권 정보</Link>
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
      <Swiper 
        slidesPerView={'auto'}
        className="info-slide">
        <SwiperSlide>
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
        </SwiperSlide>
        <SwiperSlide>
        <div className="common-info-box">
          <div className="info-top">
            <p className="label-box gray">사용 중지</p>
            <p className="detail">1:1PT</p>
            <p className="detail">횟수제</p>
            <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
          </div>
          <div className="info-bottom">
            <p className="date">2024. 11. 11 ~ 2024. 12. 10</p>
            <p className="num">잔여 2회</p>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>

      <div className="box-title">
        예약한 수업
        <Link to="/" className="read-more"></Link>
      </div>
      <ul className="reservation-list">
        <li>
          <div className="common-info-box">
            <div className="info-top">
              <p className="label-box blue">빙수 코치</p>
              <p className="detail">1:1PT</p>
              <p className="detail">횟수제</p>
              <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
            </div>
            <div className="info-bottom">
              <p className="date">2024. 11. 11 (월) 18:30 ~ 19:20</p>
              <strong className="num col-blue">예약 완료</strong>
            </div>
          </div>
        </li>
        <li>
          <div className="common-info-box">
            <div className="info-top">
              <p className="label-box blue">빙수 코치</p>
              <p className="detail">1:1PT</p>
              <p className="detail">횟수제</p>
              <div className="pass-name">[텀블벅 전용] 비기너 패키지 PT 2회</div>
            </div>
            <div className="info-bottom">
              <p className="date">2024. 11. 13 (수) 18:30 ~ 19:20</p>
              <strong className="num col-blue">예약 완료</strong>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Home;
